# Ohar Studio publishing runbook

## Scope

This repository publishes the static Ohar Studio site:

- Production: `https://ohar-studio.ru/`
- Repository: `https://github.com/Ohar/Ohar-Studio.ru`
- Production branch: `master`
- Server: `172.233.53.148`
- SSH user for deployments: `deploy` (never use `root` for routine deploys)

Keep changes small and reviewable. Never commit passwords, private keys, `.env`
files, GitHub secret values, or server configuration copied from outside this
repository.

## Content layout

- `index.html` is the published landing page.
- `assets/` contains published static assets.
- `infra/nginx/ohar-studio.ru.conf` is the production nginx vhost.
- `infra/deploy/deploy.sh` is the versioned copy of the privileged server-side
  deployment helper.
- `.github/workflows/deploy.yml` validates and deploys pushes to `master`.

The current deploy helper exports only `index.html` and `assets/` from Git. If a
new top-level HTML file or directory must be public, update both the CI build
step and the `git archive` path list in `infra/deploy/deploy.sh`. Do not expose
the whole repository: `.github/`, `infra/`, and agent documentation must not be
served publicly.

## Normal publishing workflow

1. Inspect `git status -sb` and preserve unrelated user changes.
2. Edit `index.html` and/or files under `assets/`.
3. Run the local smoke checks relevant to the change. At minimum:

   ```powershell
   git diff --check
   Test-Path index.html
   Test-Path assets\neon-shift-hero.png
   Select-String -Quiet -LiteralPath index.html -Pattern '<title>Neon Shift — Ohar Studio</title>'
   ```

4. Visually verify desktop and mobile layouts for UI changes.
5. Stage only intended files, commit tersely, and push `master`.
6. Check the `Deploy production` GitHub Actions run.
7. Verify production:

   ```powershell
   curl.exe -fsS -I https://ohar-studio.ru/
   curl.exe -fsS -I https://www.ohar-studio.ru/
   curl.exe -fsS -I http://ohar-studio.ru/
   ```

Expected redirects: HTTP and `www` redirect to `https://ohar-studio.ru/`.

## GitHub Actions configuration

Repository Actions secrets required by `.github/workflows/deploy.yml`:

- `DEPLOY_HOST` = `172.233.53.148`
- `DEPLOY_USER` = `deploy`
- `DEPLOY_SSH_KEY` = the complete private Ed25519 key, including its BEGIN and
  END lines

On this workstation the private key is stored outside the repository at:

```text
C:\Users\vokec\.ssh\ohar_studio_github_deploy
```

The matching public key is already installed in
`/home/deploy/.ssh/authorized_keys` on the server. Never print the private key
in logs or chat and never add it to Git.

Automatic deployment with these repository secrets was verified successfully
on 2026-07-31. If secret validation fails later, confirm the secrets are under:

`Settings -> Secrets and variables -> Actions -> Repository secrets`

## Manual deployment fallback

Use this only when Actions is unavailable. The server fetches the requested
commit directly from GitHub; do not upload a locally built archive.

```powershell
$sha = git rev-parse HEAD
ssh -i "$env:USERPROFILE\.ssh\ohar_studio_github_deploy" `
  -o BatchMode=yes -o IdentitiesOnly=yes `
  deploy@172.233.53.148 `
  "sudo /usr/local/sbin/deploy-ohar-studio '$sha'"
```

The helper accepts only a full 40-character commit SHA, fetches it from the
GitHub repository, creates a SHA-named release, installs the versioned nginx
config, runs `nginx -t`, atomically switches `current`, and reloads nginx.

## Production layout

```text
/var/www/ohar-studio.ru/repository.git
/var/www/ohar-studio.ru/releases/<commit-sha>
/var/www/ohar-studio.ru/current
/etc/nginx/sites-available/ohar-studio.ru
/etc/nginx/sites-enabled/ohar-studio.ru
```

Check the active release without changing the server:

```powershell
ssh -i "$env:USERPROFILE\.ssh\ohar_studio_github_deploy" `
  -o BatchMode=yes -o IdentitiesOnly=yes `
  deploy@172.233.53.148 `
  "readlink -f /var/www/ohar-studio.ru/current"
```

## Safety and rollback

- Always run `nginx -t` before reload. The helper already enforces this.
- Do not modify the shared `neon-shift` nginx vhost during normal publishing.
- Do not bypass SSH host-key verification.
- Do not delete releases as part of ordinary deployment.
- To roll back, invoke the helper with the full SHA of a previously known-good
  repository commit. Verify the site immediately afterward.
- A backup made during the initial vhost migration exists at
  `/etc/nginx/sites-available/neon-shift.bak-20260726-1403`; do not overwrite or
  delete it casually.
