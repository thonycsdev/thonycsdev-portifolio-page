# Delivery: Upgrade Node to 26 LTS

## Summary

The project now runs on Node 26.13.0 ("Lithium"), the latest LTS. The version lives in `.nvmrc`, every workflow reads it from there, and `engines.node` makes Vercel use the same major (see ADR-004).

## Changes

- `.nvmrc`: `26.13.0`.
- `.github/workflows/*.yaml` (tests, formatter, linter, deploy-development, deploy-production): `node-version: '22.11.0'` → `node-version-file: '.nvmrc'`.
- `package.json`: `engines.node: "26.x"`; `@types/node` `^20` → `^26` (`bun.lock` updated, nested `@types/node@26` copies deduplicated).
- `CLAUDE.md`: Node version section.
- `Documentation/decisions/ADR-004-node-version-from-nvmrc.md`

## Validation

- Tests: none created. No code behavior changed. On Node 26.13.0: full suite passing (5/5), `prettier --check`, `next lint`, `tsc --noEmit` and `next build` all green. `bun install --frozen-lockfile` reports no changes.
- Acceptance criteria:
  - CI uses the latest LTS: met (all five workflows read `.nvmrc`).
  - Vercel uses the same major: met (`engines.node`; 26.x is listed as supported in Vercel docs).
  - Build and tests pass on the new version: met locally.
- Self-review: checked the code for `response.statusText`, which is empty on HTTP/2 `fetch` in Node 26. Not used.
- Not verified: a CI run and a Vercel deploy on Node 26. They run on GitHub after the PR.

## Pending items / next steps

- Owner: run `nvm install` in the project (Node 26 is already installed on this machine through nvm; `nvm use` switches to it).
- Watch the first deploy and confirm the build log shows Node 26.

## Notes

- Deviation from the plan: ADR-001 was not edited. ADRs are records of past decisions, so ADR-004 states that it supersedes the Node version mentioned there.
- The ADR is numbered 004 because ADR-003 exists in unpushed commits on `chore/split-deploy-workflows`.
