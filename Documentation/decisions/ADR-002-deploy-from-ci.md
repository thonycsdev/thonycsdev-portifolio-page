# ADR-002: Deploy to Vercel from GitHub Actions

**Date:** 2026-11-07 · **Status:** Accepted

## Context

Vercel's Git integration deployed every push on its own, without waiting for the test suite. A broken commit could reach production.

## Decision

Deploy from GitHub Actions with the Vercel CLI (`.github/workflows/deploy.yaml`), and turn off the Git integration's automatic deploys (`git.deploymentEnabled: false` in `vercel.json`).

- Push to `master` runs the tests, then deploys to production.
- Push to `development` runs the tests, then deploys a Preview.

The workflow reuses `tests.yaml` (`workflow_call`), so tests are defined in one place.

## Alternatives considered

- Keep the Git integration and only require CI checks before merge: rejected. A direct push still deploys untested code.
- A Preview for every PR: rejected by the owner. Previews come from `development` only.

## Consequences

- No deploy happens unless the tests pass.
- Deploys depend on three GitHub secrets (`VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`). If they are missing or the token expires, deploys stop until fixed. Previous deployments stay online.
- Every deploy runs the full test suite, Postgres included, which makes it slower than the Git integration.
- The Vercel CLI version is pinned (`vercel@65.2.0`) and must be bumped by hand.
