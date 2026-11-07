# ADR-001: Use Bun as the package manager

**Date:** 2026-11-07 · **Status:** Accepted

## Context

The project used npm (`package-lock.json`) for installing dependencies and running scripts, locally and in CI. The owner asked to start using Bun.

## Decision

Use Bun 1.4.2 (pinned through `packageManager` in `package.json`) to install dependencies (`bun.lock`) and run scripts (`bun run ...`). TypeScript helper scripts such as `infra/wait-for-postgres.ts` run directly with `bun`, so `tsx` was removed.

Next.js and Jest keep running on Node, started through their bin shebangs. Tests stay on Jest.

## Alternatives considered

- Keep npm: rejected, the owner asked for Bun.
- Also run Next.js on the Bun runtime (`bun --bun next dev`): not done. It changes the production-like runtime with no clear gain for this project, and Vercel serves the site on Node.
- Replace Jest with `bun test`: not done. It is a test-runner migration, separate from changing the package manager.

## Consequences

- Faster installs, and one lockfile format (`bun.lock`).
- CI needs both Node 22.11.0 and Bun (`oven-sh/setup-bun`).
- `bun test` must not be used to run the suite, because it starts Bun's own runner. Use `bun run test`.
- Bun blocks dependency lifecycle scripts by default. `@swc/core`'s `postinstall` is blocked, but Jest and the build work without it. If an SWC binding error ever appears, run `bun pm trust @swc/core`.
