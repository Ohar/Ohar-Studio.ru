#!/usr/bin/env bash
set -euo pipefail
umask 022

if [[ $# -lt 1 || $# -gt 2 || ! "$1" =~ ^[0-9a-f]{40}$ ]]; then
  echo "Usage: deploy-ohar-studio <commit-sha> [archive-sha256]" >&2
  exit 2
fi
GITHUB_SHA="$1"
ARCHIVE_SHA256="${2:-}"
if [[ -n "$ARCHIVE_SHA256" && ! "$ARCHIVE_SHA256" =~ ^[0-9a-f]{64}$ ]]; then
  echo "Invalid archive SHA-256" >&2
  exit 2
fi

DEPLOY_ROOT=/var/www/ohar-studio.ru
DEPLOY_PATH="$DEPLOY_ROOT/current"
RELEASE_PATH="$DEPLOY_ROOT/releases/$GITHUB_SHA"
REPOSITORY_PATH="$DEPLOY_ROOT/repository.git"
REPOSITORY_URL=https://github.com/Ohar/Ohar-Studio.ru.git
UPLOAD_PATH="/home/deploy/ohar-studio-upload/$GITHUB_SHA/site.tar.gz"
NGINX_CONFIG=/etc/nginx/sites-available/ohar-studio.ru

exec 9>"$DEPLOY_ROOT/.deploy.lock"
flock -x 9
if [[ ! -d "$REPOSITORY_PATH" ]]; then
  git clone --bare "$REPOSITORY_URL" "$REPOSITORY_PATH"
fi
git --git-dir="$REPOSITORY_PATH" fetch --prune origin master
git --git-dir="$REPOSITORY_PATH" cat-file -e "$GITHUB_SHA^{commit}"

WORK_PATH="$(mktemp -d "$DEPLOY_ROOT/.deploy-$GITHUB_SHA.XXXXXX")"
chmod 700 "$WORK_PATH"
trap 'rm -rf -- "$WORK_PATH"' EXIT

# Existing releases are immutable and can be reactivated without an upload.
if [[ ! -d "$RELEASE_PATH" ]]; then
  if [[ -z "$ARCHIVE_SHA256" ]]; then
    echo "A new release requires the CI build archive and its SHA-256" >&2
    exit 1
  fi
  test -s "$UPLOAD_PATH"
  cp -- "$UPLOAD_PATH" "$WORK_PATH/site.tar.gz"
  ACTUAL_SHA256="$(sha256sum "$WORK_PATH/site.tar.gz" | cut -d ' ' -f 1)"
  if [[ "$ACTUAL_SHA256" != "$ARCHIVE_SHA256" ]]; then
    echo "Build archive checksum mismatch" >&2
    exit 1
  fi
  python3 /usr/local/lib/ohar-studio/extract-release.py \
    "$WORK_PATH/site.tar.gz" "$WORK_PATH/site" "$GITHUB_SHA"
  mv -- "$WORK_PATH/site" "$RELEASE_PATH"
fi
test -s "$RELEASE_PATH/index.html"

# Fetch only this site's versioned config; never touch other vhosts.
git --git-dir="$REPOSITORY_PATH" show "$GITHUB_SHA:infra/nginx/ohar-studio.ru.conf" > "$WORK_PATH/nginx.conf"
cp -a "$NGINX_CONFIG" "$WORK_PATH/nginx.previous"
PREVIOUS_RELEASE="$(readlink -f "$DEPLOY_PATH")"
install -m 0644 "$WORK_PATH/nginx.conf" "$NGINX_CONFIG"
if ! nginx -t; then
  install -m 0644 "$WORK_PATH/nginx.previous" "$NGINX_CONFIG"
  echo "Invalid nginx configuration; active release was not changed" >&2
  exit 1
fi

ln -sfn "$RELEASE_PATH" "$DEPLOY_PATH.tmp"
mv -Tf "$DEPLOY_PATH.tmp" "$DEPLOY_PATH"
if ! systemctl reload nginx; then
  install -m 0644 "$WORK_PATH/nginx.previous" "$NGINX_CONFIG"
  ln -sfn "$PREVIOUS_RELEASE" "$DEPLOY_PATH.tmp"
  mv -Tf "$DEPLOY_PATH.tmp" "$DEPLOY_PATH"
  nginx -t && systemctl reload nginx
  echo "Reload failed; restored the previous config and release" >&2
  exit 1
fi
printf 'Deployed %s\n' "$GITHUB_SHA"
