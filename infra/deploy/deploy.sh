#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 1 || ! "$1" =~ ^[0-9a-f]{40}$ ]]; then
  echo "Usage: deploy-ohar-studio <40-character-commit-sha>" >&2
  exit 2
fi

GITHUB_SHA="$1"
DEPLOY_ROOT=/var/www/ohar-studio.ru
DEPLOY_PATH="$DEPLOY_ROOT/current"
RELEASE_PATH="$DEPLOY_ROOT/releases/$GITHUB_SHA"
REPOSITORY_PATH="$DEPLOY_ROOT/repository.git"
REPOSITORY_URL=https://github.com/Ohar/Ohar-Studio.ru.git
NGINX_CONFIG=/etc/nginx/sites-available/ohar-studio.ru

if [[ ! -d "$REPOSITORY_PATH" ]]; then
  git clone --bare "$REPOSITORY_URL" "$REPOSITORY_PATH"
fi

git --git-dir="$REPOSITORY_PATH" fetch --prune origin master
git --git-dir="$REPOSITORY_PATH" cat-file -e "$GITHUB_SHA^{commit}"

mkdir -p "$RELEASE_PATH"
git --git-dir="$REPOSITORY_PATH" archive "$GITHUB_SHA" index.html assets | tar -x -C "$RELEASE_PATH"
git --git-dir="$REPOSITORY_PATH" show "$GITHUB_SHA:infra/nginx/ohar-studio.ru.conf" > "$NGINX_CONFIG.tmp"

test -s "$RELEASE_PATH/index.html"
test -s "$RELEASE_PATH/assets/neon-shift-hero.png"
install -m 0644 "$NGINX_CONFIG.tmp" "$NGINX_CONFIG"
rm -f "$NGINX_CONFIG.tmp"
ln -sfn "$NGINX_CONFIG" /etc/nginx/sites-enabled/ohar-studio.ru

nginx -t
ln -sfn "$RELEASE_PATH" "$DEPLOY_PATH.tmp"
mv -Tf "$DEPLOY_PATH.tmp" "$DEPLOY_PATH"
systemctl reload nginx

printf 'Deployed %s\n' "$GITHUB_SHA"
