# Delivery: Deploy to Vercel from CI

## Summary

Deploys now run from GitHub Actions after the test suite passes. A push to `master` goes to production and a push to `development` goes to a Preview. Vercel's Git integration no longer deploys on its own (see ADR-002).

## Changes

- `vercel.json`: `installCommand` (`bun install --frozen-lockfile`), `buildCommand` (`bun run build`), and `git.deploymentEnabled: false`.
- `.github/workflows/tests.yaml`: also callable from other workflows (`workflow_call`).
- `.github/workflows/deploy.yaml`: on push to `master` or `development`, runs `tests.yaml`, then `vercel pull` → `vercel build` → `vercel deploy --prebuilt`, adding `--prod` on `master`. Deploys per branch are serialized with `concurrency`.
- `CLAUDE.md`: Deploy section, including the required secrets.
- `Documentation/decisions/ADR-002-deploy-from-ci.md`

## Validation

- Tests: none created. No code behavior changed. Full suite passing (5/5) before every commit, plus lint, Prettier and `next build`.
- Workflow YAML parsed successfully. The `pull --environment`, `build --prod`, `deploy --prebuilt` and `--token` flags were checked against `vercel@65.2.0 --help`.
- Acceptance criteria:
  - Deploy only after tests: met (`needs: test`).
  - Bun install/build commands: met (`vercel.json`).
  - No duplicate deploys: met (`git.deploymentEnabled: false`).
  - No tokens in the repository: met (secrets only).
- Not verified: an actual run of the workflow. It needs the repository secrets and runs only on GitHub.

## Pending items / next steps

- Owner: create `VERCEL_TOKEN`, `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` as GitHub repository secrets before the first push to `development` or `master`. Without them the deploy job fails.
- Owner: make sure production and preview env vars (`POSTGRES_*`, `GITHUB_URL`, `NEXT_PUBLIC_*`) exist in the Vercel project.
- Watch the first `deploy` workflow run and confirm the deployment URL.
