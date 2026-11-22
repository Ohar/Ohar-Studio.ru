# Ohar Studio publishing runbook

## Scope and source

This repository publishes a separate copy of the Next.js site from
https://github.com/Ohar/Ohar.name, imported at
`50266b61163ae720528dba0c42c417379be2a2de`.
The former Neon Shift / Rosterama landing page is now part of `/portfolio/`.

- Production: `https://ohar-studio.ru/`
- Repository: `https://github.com/Ohar/Ohar-Studio.ru`
- Production branch: `master`
- Server: `172.233.53.148`
- Deployment SSH user: `deploy` (never use `root` for routine deploys)

The repositories remain independent. Do not change origin, push to Ohar.name,
or alter its deployment during normal Ohar Studio work. Source imports are
deliberate; there is no automatic synchronization.

These instructions merge the former local AGENTS.md and the imported
AGENT_OHAR_STUDIO.md. This repository's Git-based deployment and SSH-key
authentication supersede the upstream archive-upload/password instructions.

Keep changes reviewable. Preserve unrelated user changes. Never commit
passwords, private keys, .env files, GitHub secret values, or server configuration
copied from outside this repository. Inspect the existing workflow and nginx
config before deployment changes. Preserve server paths, certificate paths and
release layout unless the user asks to migrate them.

## Content layout

- `src/`: copied Next.js pages, components, styles, images and fonts.
- `public/`: public assets, including downloadable CVs.
- `tests/`: upstream language and CV PDF checks.
- `next.config.js`: static export, unoptimized images and trailing slashes.
- `out/`: ignored local build output.
- `assets/site/`: committed static export served at the domain root.
- `index.html`: generated copy of assets/site/index.html, retained for the
  installed deployment helper.
- `assets/neon-shift-hero.png` and `assets/rosterama-army-preview.png`: old image
  URLs; the former is also required by the installed helper.
- `scripts/prepare-static.cjs`: refreshes the export and records source/export
  fingerprints in `.static-publish.json`.
- `infra/nginx/ohar-studio.ru.conf`: production nginx vhost.
- `infra/deploy/deploy.sh`: versioned copy of the installed privileged helper.
- `.github/workflows/deploy.yml`: validates and deploys pushes to master.

Use Node.js 24 and Yarn 1.22.22 with the committed yarn.lock. Edit sources, not
generated HTML or bundles. After source changes, run `corepack yarn build:publish`
and commit sources and generated files together. CI rejects stale or modified
exports. The development command is `corepack yarn dev`.

The server fetches a commit from GitHub and exports only index.html and assets/.
The nested assets/site/ layout preserves the existing privileged helper without
changing sudo permissions or uploading local archives. Never expose the whole
repository: .github/, infra/, source files and agent documentation must not be
served. For new top-level public paths, update both CI and the helper's
git archive allowlist, including its separately installed server copy.

## Normal publishing workflow

1. Inspect `git status -sb` and preserve unrelated changes.
2. Install dependencies when needed with
   `corepack yarn install --frozen-lockfile --non-interactive`, then edit sources.
3. Run:

   ```powershell
   corepack yarn build:publish
   corepack yarn test:i18n
   corepack yarn test:cv-pdf
   corepack yarn test:published
   git diff --check
   Test-Path index.html
   Test-Path assets/site/index.html
   Test-Path assets/neon-shift-hero.png
   Select-String -Quiet -LiteralPath assets/site/index.html -Pattern '<title>Ohar</title>'
   ```

   The PDF test requires Chrome/Chromium and checks both CV languages fit on one
   A4 page. Increment the version only when a release is requested.
4. Visually verify desktop and mobile UI, including the homepage, /portfolio/
   and the EN/RU language switcher.
5. Inspect the diff, stage intended files only, commit tersely, and push master.
6. Follow the Deploy production Actions run through completion.
7. Verify production:

   ```powershell
   curl.exe -fsS -I https://ohar-studio.ru/
   curl.exe -fsS -I https://ohar-studio.ru/portfolio/
   curl.exe -fsS -I https://www.ohar-studio.ru/
   curl.exe -fsS -I http://ohar-studio.ru/
   ```

HTTP and www must redirect to https://ohar-studio.ru/, preserving paths.
Unknown pages must return 404 with the exported 404.html. Apply immutable caching
only to /_next/static/, not HTML or unhashed assets. Always run nginx -t before
reloading nginx.

## Credentials and Actions

Repository Actions secrets:

- DEPLOY_HOST = 172.233.53.148
- DEPLOY_USER = deploy
- DEPLOY_SSH_KEY = complete private Ed25519 key including BEGIN and END lines

The workstation key is outside the repository at
`C:\Users\vokec\.ssh\ohar_studio_github_deploy`. Never print it or add it to Git.
Its public key is installed in /home/deploy/.ssh/authorized_keys.
Secrets belong under Settings -> Secrets and variables -> Actions -> Repository
secrets. If a secret is missing, report its name; do not invent values.

Preserve push-to-master and workflow_dispatch triggers, deployment concurrency,
secret validation and CRLF normalization, locked dependency installation,
build/tests and SSH host verification. Never bypass a changed host-key warning.
The workflow invokes the Git-based helper; it does not upload build archives.

## Manual deployment fallback

Use only when Actions is unavailable. The helper fetches the requested commit
from GitHub; never upload a locally built archive.

```powershell
$sha = git rev-parse HEAD
ssh -i "$env:USERPROFILE\.ssh\ohar_studio_github_deploy" `
  -o BatchMode=yes -o IdentitiesOnly=yes `
  deploy@172.233.53.148 `
  "sudo /usr/local/sbin/deploy-ohar-studio '$sha'"
```

The helper accepts a full 40-character SHA, fetches it, creates a SHA-named
release, installs versioned nginx configuration, runs nginx -t, atomically
switches current and reloads nginx. Editing its repository copy does not
automatically update /usr/local/sbin/deploy-ohar-studio.

## Production layout and rollback

```text
/var/www/ohar-studio.ru/repository.git
/var/www/ohar-studio.ru/releases/<commit-sha>
/var/www/ohar-studio.ru/current/assets/site
/etc/nginx/sites-available/ohar-studio.ru
/etc/nginx/sites-enabled/ohar-studio.ru
```

Read the active release without changing it:

```powershell
ssh -i "$env:USERPROFILE\.ssh\ohar_studio_github_deploy" `
  -o BatchMode=yes -o IdentitiesOnly=yes `
  deploy@172.233.53.148 `
  "readlink -f /var/www/ohar-studio.ru/current"
```

Never modify the shared neon-shift vhost during normal publishing. Do not delete
releases. Roll back with a full known-good repository commit SHA and verify the
site afterward. The pre-migration release is
`56c25961fea18f191deb0573275558a64ae58b68`; its nginx config uses the former root.
Preserve /etc/nginx/sites-available/neon-shift.bak-20260726-1403.
