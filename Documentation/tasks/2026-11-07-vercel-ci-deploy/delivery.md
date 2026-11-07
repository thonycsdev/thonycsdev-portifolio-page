# Delivery: Deploy to Vercel from CI

## Summary

Deploys now run from GitHub Actions after the test suite passes. A push to `master` deploys with `--prod` and a push to `development` deploys a Preview. The repository variable `DEPLOY_ENV` selects the GitHub Environment and the Vercel environment. Vercel's Git integration no longer deploys on its own (see ADR-002).

## Changes

- `vercel.json`: `installCommand` (`bun install --frozen-lockfile`), `buildCommand` (`bun run build`), and `git.deploymentEnabled: false`.
- `.github/workflows/tests.yaml`: also callable from other workflows (`workflow_call`).
- `.github/workflows/deploy.yaml`: on push to `master` or `development`, runs `tests.yaml`, then `vercel pull` → `vercel build` → `vercel deploy --prebuilt`, adding `--prod` on `master`. The job runs in the GitHub Environment `vars.DEPLOY_ENV`, and `vercel pull --environment` uses the same value. Deploys per branch are serialized with `concurrency`.
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

- Owner: before the first push to `development` or `master`, create the repository variable `DEPLOY_ENV`, and put `VERCEL_TOKEN`, `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` in the GitHub Environment it names. Without them the deploy job fails.
- If `vercel pull` rejects the `DEPLOY_ENV` value, use a lowercase Vercel environment name.
- Owner: make sure production and preview env vars (`POSTGRES_*`, `GITHUB_URL`, `NEXT_PUBLIC_*`) exist in the Vercel project.
- Watch the first `deploy` workflow run and confirm the deployment URL.

## Notes

- Deviation from the plan: the plan picked the environments from the branch. At the owner's request, a single repository variable `DEPLOY_ENV` now drives both the GitHub Environment and `vercel pull --environment`. The owner chose to keep it even after the risk was raised: Vercel's `development` environment holds local-dev env vars, and the value may need to be lowercase (see ADR-002).
- PR: #62 (`chore/vercel-ci-deploy` → `development`).
