# ADR-002: Deploy to Vercel from GitHub Actions

**Date:** 2026-11-07 · **Status:** Accepted

## Context

Vercel's Git integration deployed every push on its own, without waiting for the test suite. A broken commit could reach production.

## Decision

Deploy from GitHub Actions with the Vercel CLI (`.github/workflows/deploy.yaml`), and turn off the Git integration's automatic deploys (`git.deploymentEnabled: false` in `vercel.json`).

- Push to `master` runs the tests, then deploys with `--prod`.
- Push to `development` runs the tests, then deploys without `--prod` (a Preview).
- The repository variable `DEPLOY_ENV` names both the GitHub Environment the deploy job runs in, which holds the secrets, and the Vercel environment that `vercel pull` reads env vars from. The owner chose a single variable over a mapping by branch.

The workflow reuses `tests.yaml` (`workflow_call`), so tests are defined in one place.

## Alternatives considered

- Keep the Git integration and only require CI checks before merge: rejected. A direct push still deploys untested code.
- A Preview for every PR: rejected by the owner. Previews come from `development` only.
- Pick the environments from the branch (`master` → `Production`/`production`, `development` → `Development`/`preview`): replaced by `DEPLOY_ENV` at the owner's request.

## Consequences

- No deploy happens unless the tests pass.
- Deploys depend on three GitHub secrets (`VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`). If they are missing or the token expires, deploys stop until fixed. Previous deployments stay online.
- Without `DEPLOY_ENV` the deploy job fails; there is no fallback.
- `master` and `development` share the same GitHub Environment and the same Vercel env vars. Vercel environment names are lowercase (`production`, `preview`, `development`), and `development` holds local-dev env vars. A value of `DEVELOPMENT` may be rejected by `vercel pull`, or may give Preview and production deploys local-dev env vars.
- Every deploy runs the full test suite, Postgres included, which makes it slower than the Git integration.
- The Vercel CLI version is pinned (`vercel@65.2.0`) and must be bumped by hand.
