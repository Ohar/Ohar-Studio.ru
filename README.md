# Ohar Studio

A separate copy of [Ohar.name](https://github.com/Ohar/Ohar.name), published at
[ohar-studio.ru](https://ohar-studio.ru/). Imported from upstream commit
[50266b6](https://github.com/Ohar/Ohar.name/commit/50266b61163ae720528dba0c42c417379be2a2de).
The repositories remain independent; future edits are not synchronized.
Agent instructions from both projects are merged in AGENTS.md.

## Development

Requires Node.js 24 and Yarn 1.22.22 through Corepack.

```sh
corepack yarn install --frozen-lockfile --non-interactive
corepack yarn dev
```

The development server runs at http://localhost:3000. Edit src/ and public/.
The former Neon Shift and Rosterama showcase is part of /portfolio/.

## Publishing

**Commit your source changes and push master. No local build is required.**

GitHub Actions installs locked dependencies, builds the Next.js static export
in out/, checks pages, languages and CV PDFs, and validates the deployment archive.
It uploads the tested build over SSH and activates it on the server under deploy.
The server verifies the archive hash and source commit, runs nginx -t, atomically
switches the release and reloads nginx. Actions then checks the live commit marker
and portfolio page. A failed build/test prevents deployment.

Generated HTML, bundles, out/ and .next/ are not tracked in Git. There is no
build:publish command or committed static snapshot. Existing repository secrets
DEPLOY_HOST, DEPLOY_USER and DEPLOY_SSH_KEY are reused.

Optional local checks:

```sh
corepack yarn build
corepack yarn test:i18n
corepack yarn test:cv-pdf
python -m unittest discover -s tests -p test_deploy_archive.py
```

The PDF test requires Chrome/Chromium (or a compatible browser via CHROME_PATH).
Deployments are serialized; rerunning the same commit reuses its immutable release.
For an existing release, rollback needs only its commit SHA and the deploy key.
See AGENTS.md for the server layout, helper installation and rollback commands.

This pipeline manages only ohar-studio.ru. Subdomain configurations and deployments
remain separate. Old showcase image URLs are retained through public/assets/.
