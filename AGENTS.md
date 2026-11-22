# Ohar Studio publishing runbook

## Scope and source

This repository publishes a separate copy of https://github.com/Ohar/Ohar.name,
imported at `50266b61163ae720528dba0c42c417379be2a2de`.
The former Neon Shift / Rosterama landing page is part of /portfolio/.

- Production: https://ohar-studio.ru/
- Repository: https://github.com/Ohar/Ohar-Studio.ru
- Production branch: master
- Server: 172.233.53.148
- Routine deployment SSH user: deploy

The repositories remain independent. Do not change origin, push to Ohar.name,
or modify its deployment during normal Ohar Studio work. These instructions
merge the former local AGENTS.md and upstream AGENT_OHAR_STUDIO.md.

Keep changes reviewable and preserve unrelated user edits. Never commit
passwords, private keys, .env files or secret values. Do not copy external server
configuration into this repository. Inspect the existing workflow and nginx
configuration before changes. Preserve certificate paths and unrelated vhosts.

## Source and build layout

- src/: Next.js pages, components, styles, images and fonts.
- public/: public assets, downloadable CVs and legacy /assets/ image URLs.
- tests/: language, CV PDF and deployment archive checks.
- next.config.js: static export, unoptimized images and trailing slashes.
- out/: ignored build output; never commit it.
- infra/nginx/ohar-studio.ru.conf: this domain's production nginx vhost.
- infra/deploy/deploy.sh: versioned privileged activation helper.
- infra/deploy/extract-release.py: static build archive validator/extractor.
- .github/workflows/deploy.yml: builds, tests and deploys pushes to master.

Use Node.js 24 and Yarn 1.22.22 with yarn.lock. Edit and commit sources only.
There is no build:publish step, generated root index.html, assets/site/ snapshot,
or .static-publish.json in Git. Old local copies are ignored.

## Publishing

A normal source commit pushed to master is enough. Local builds are optional;
GitHub Actions is responsible for building the deployed artifact.

1. Inspect git status -sb; preserve unrelated changes.
2. Edit sources and run checks relevant to the change. For local verification:

   ```powershell
   corepack yarn install --frozen-lockfile --non-interactive
   corepack yarn build
   corepack yarn test:i18n
   corepack yarn test:cv-pdf
   python -m unittest discover -s tests -p test_deploy_archive.py
   git diff --check
   ```

   Chrome/Chromium is needed for the PDF test; CHROME_PATH can select a compatible
   browser. For UI changes, check desktop/mobile and EN/RU. Increment the version
   only when requested.
3. Stage intended source files, commit tersely, and push master.
4. Follow Deploy production through completion. It installs locked dependencies,
   builds out/, runs tests, checks that generated files are not tracked, packages
   the tested output with a commit marker, validates the archive and uploads it
   over SSH. A failed build or test must prevent publication.
5. Actions invokes the helper under deploy with the source SHA and archive hash.
   The helper verifies the checksum, commit marker, required files and archive
   paths, creates an immutable SHA-named release, installs only this domain's
   versioned nginx config, validates nginx, atomically switches current and reloads.
6. Verify the live homepage, /portfolio/, /.deploy-commit and HTTP/www redirects.

Only built public output is served; never expose source, .github/, infra/,
node_modules, agent documentation or secrets. Unknown URLs return the exported
404 page with status 404. Cache immutable files only under /_next/static/.
HTTP and www redirect to https://ohar-studio.ru/, preserving paths.

Do not cancel an activation in progress. Actions serializes deployments and
the server helper holds a per-site lock. Existing releases are immutable;
rerunning a commit reactivates its existing release.

## Credentials and installed helper

Existing repository Actions secrets are sufficient:
DEPLOY_HOST, DEPLOY_USER and DEPLOY_SSH_KEY. The deploy key is outside Git at
`C:\Users\vokec\.ssh\ohar_studio_github_deploy`. Never print it.
Do not change secret values or sudo permissions without a concrete need.
Never bypass SSH host verification or a changed-host-key warning.

Routine publication uses deploy, never root. Installing or updating the
privileged helper is a separate administrative maintenance operation:
- install infra/deploy/deploy.sh as /usr/local/sbin/deploy-ohar-studio (root, 0755);
- install infra/deploy/extract-release.py as
  /usr/local/lib/ohar-studio/extract-release.py (root, 0644);
- validate Bash/Python syntax and preserve backups before replacement.
Changing repository copies does not update installed helpers automatically.
The existing deploy sudo rule permits only /usr/local/sbin/deploy-ohar-studio.

The deployment layout is:

```text
/home/deploy/ohar-studio-upload/<commit-sha>/site.tar.gz
/var/www/ohar-studio.ru/repository.git
/var/www/ohar-studio.ru/releases/<commit-sha>/
/var/www/ohar-studio.ru/current
/etc/nginx/sites-available/ohar-studio.ru
/etc/nginx/sites-enabled/ohar-studio.ru
```

The bare repository supplies the versioned nginx configuration. Site contents
come from the validated CI archive, not git archive. The helper accepts a full
40-character source SHA plus the SHA-256 of a new upload. No new release is
created without the CI artifact. Use workflow_dispatch to rebuild/redeploy.

## Rollback and subdomains

Never modify neon-shift or buy-a-pot vhosts, their releases or their deployment
configuration as part of this site's publishing. Preserve
/etc/nginx/sites-available/neon-shift.bak-20260726-1403. Never delete releases.

Reactivate an existing known-good release without rebuilding or uploading:

```powershell
$sha = '<full-known-good-commit-sha>'
ssh -i "$env:USERPROFILE\.ssh\ohar_studio_github_deploy" `
  -o BatchMode=yes -o IdentitiesOnly=yes deploy@172.233.53.148 `
  "sudo /usr/local/sbin/deploy-ohar-studio '$sha'"
```

The helper also restores the matching versioned vhost, so pre-migration
releases with their former document root remain usable. The known-good release
before the CI-artifact migration is ef94e4124bece75bf4879f8c8e079e5f48c2954c.
If nginx validation fails, current stays unchanged and the old config is restored.
If reload fails, the helper restores both the old config and current.

Check the active release with the same deploy SSH key and
`readlink -f /var/www/ohar-studio.ru/current`.
