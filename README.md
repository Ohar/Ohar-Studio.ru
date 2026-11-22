# Ohar Studio

A separate copy of [Ohar.name](https://github.com/Ohar/Ohar.name), published at
[ohar-studio.ru](https://ohar-studio.ru/). Imported from upstream commit
[50266b6](https://github.com/Ohar/Ohar.name/commit/50266b61163ae720528dba0c42c417379be2a2de).
The repositories remain independent; future edits are not synchronized.

Next.js pages, components, public files, fonts, images, styles, tests and the
dependency lockfile are copied from Ohar.name. Repository metadata, deployment
configuration and instructions are adapted for Ohar Studio. The upstream
AGENT_OHAR_STUDIO.md and former local instructions are merged in AGENTS.md.

## Development

Requires Node.js 24 and Yarn 1.22.22 through Corepack.

```sh
corepack yarn install --frozen-lockfile --non-interactive
corepack yarn dev
```

The development server runs at http://localhost:3000.

## Portfolio

The former Neon Shift and Rosterama showcase is part of /portfolio/.
See src/pages/portfolio.jsx, src/styles/portfolio.module.css,
src/constants/siteCopy.js, and src/images/portfolio/. The site retains
Ohar.name's layout, navigation, content and language switcher.

## Build and publish

```sh
corepack yarn build:publish
corepack yarn test:i18n
corepack yarn test:cv-pdf
corepack yarn test:published
```

Next.js exports to ignored out/. build:publish also refreshes committed
assets/site/, compatibility index.html and .static-publish.json. Commit these
generated files together with source changes. The fingerprint check rejects
exports with changed sources or modified generated files. Chrome/Chromium is
required for the test verifying both CV languages fit on one A4 PDF page.

Pushes to master run Deploy production: install locked dependencies, build and
test, check the committed export, then deploy the commit over SSH. The existing
server helper fetches the commit from this repository and exports only
index.html and assets/. Nginx serves assets/site/ at the domain root. This keeps
the existing deployment account, permissions, TLS certificates and atomic
release layout without uploading local build archives.

Required Actions secrets: DEPLOY_HOST, DEPLOY_USER, DEPLOY_SSH_KEY.
See AGENTS.md for publishing checks and rollback. Source files and infrastructure
are outside the public document root.
