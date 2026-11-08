# ADR-004: Node 26 LTS, pinned in `.nvmrc`

**Date:** 2026-11-08 · **Status:** Accepted

## Context

CI pinned Node 22.11.0, repeated in five workflows. Vercel picked its Node version from the project settings, so CI and production could run different majors. `@types/node` was still on `^20`. Node 26 ("Lithium") became the latest LTS in October 2026, and Vercel supports 26.x (its current default).

## Decision

- `.nvmrc` holds the exact version (`26.13.0`) and is the only place it is written. All workflows use `actions/setup-node` with `node-version-file: '.nvmrc'`.
- `package.json` sets `engines.node` to `26.x`. Vercel reads it and overrides the project setting, so builds and functions use Node 26.
- `@types/node` follows the same major (`^26`).

## Alternatives considered

- Node 24 ("Krypton"): also LTS and in that role for longer, but not the latest LTS, which the owner asked for.
- Keep the version inline in each workflow: rejected, five copies drift easily.
- Set the version only in Vercel project settings: rejected, it is not versioned with the code.

## Consequences

- One file to change on the next Node bump, plus the major in `engines.node`.
- Developers need Node 26 locally (`nvm use` reads `.nvmrc`).
- On Node 26, built-in `fetch` may negotiate HTTP/2, where `response.statusText` is empty. The code does not read `statusText`. If it ever must, Vercel can force HTTP/1.1 with `VERCEL_FETCH_DISABLE_H2=1`.
- Supersedes the "Node 22.11.0" mention in ADR-001's consequences.
