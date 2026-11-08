# ADR-005: Use pnpm as the package manager

**Date:** 2026-11-08 · **Status:** Accepted · Supersedes ADR-001

## Context

ADR-001 adopted Bun, but only as an installer and script runner: Next, Jest, node-pg-migrate, the Vercel CLI and the serverless functions all run on Node. The project therefore needed two toolchains (Node and Bun) locally and in CI. The owner asked to drop Bun, keep Node as the only runtime and use pnpm for packages.

## Decision

- pnpm 12.18.0, pinned through `packageManager` in `package.json`. Lockfile `pnpm-lock.yaml`, written only by pnpm and ignored by Prettier.
- Node (version from `.nvmrc`, see ADR-004) runs every script. `infra/wait-for-postgres.ts` became `infra/wait-for-postgres.mts` and runs with `node` through native type stripping, so `tsx` is not brought back.
- Dependency build scripts are allowed one by one in `pnpm-workspace.yaml` (`allowBuilds`). Today only `@swc/core`.
- CI uses `pnpm/action-setup@v6` before `actions/setup-node` (with `cache: 'pnpm'`). The Vercel CLI runs through `pnpm dlx`. `vercel.json` uses `pnpm install --frozen-lockfile` and `pnpm run build`.

## Alternatives considered

- Keep Bun: rejected by the owner. It added a second toolchain without being the runtime.
- Back to npm: not chosen. The owner asked for pnpm.
- `shamefully-hoist` / `node-linker=hoisted`: rejected. Undeclared imports are fixed by declaring the dependency instead.
- `pnpm/setup` (installs pnpm and Node in one step): not chosen. It would replace `actions/setup-node` and the `.nvmrc` flow from ADR-004.

## Consequences

- One runtime (Node) everywhere; pnpm installs from a content-addressed store.
- pnpm's strict `node_modules` exposed an undeclared import: `@chakra-ui/anatomy` (used in `_app.tsx`) is now a direct dependency.
- `wait-for-postgres.mts` needs Node 23.6 or newer and `import type`/`type` modifiers for type-only imports.
- Node 26 no longer ships corepack, so pnpm is installed separately (locally, and by `pnpm/action-setup` in CI).
