# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal portfolio site (Next.js 14 Pages Router, React 18, TypeScript, Chakra UI, PostgreSQL 16). Production: thonycsdev.com.br (Vercel). Commit messages, README and some UI text are in Portuguese.

## Work method

Follow the work method in `../WorkMethodIA/` (start with its `README.md`). It defines task sizing, plan approval, mandatory TDD with a test checkpoint before production code, atomic commits that keep build and tests green (English, imperative, lowercase, no `Co-Authored-By` or attribution lines), and where plans, delivery reports and ADRs go (`Documentation/`). Talk to the user in Brazilian Portuguese; write code and docs in English. An explicit request from the user in the conversation overrides the method.

## Commands

Package manager is pnpm (`packageManager: pnpm@12.18.0`, lockfile `pnpm-lock.yaml`). Don't use npm or Bun, and don't commit a `package-lock.json` or `bun.lock`. Let pnpm write the lockfile; don't edit it by hand (Prettier ignores it). Node runs everything: Next and Jest through their bin shebangs, and `infra/wait-for-postgres.mts` through Node's native TypeScript support (it needs `type` on type-only imports). pnpm runs dependency build scripts only when they are listed under `allowBuilds` in `pnpm-workspace.yaml` (today only `@swc/core`); approve a new one with `pnpm approve-builds <pkg>`. pnpm does not hoist undeclared packages, so every package the code imports must be declared in `package.json`.

- `pnpm install`
- `pnpm run dev` — starts the Postgres container (`postgres-dev`, from `infra/docker-compose.yml`), then `next dev`
- `pnpm run test` — the full pipeline: starts Postgres, waits for it (`node ./infra/wait-for-postgres.mts`), runs migrations, then runs `next dev` and `jest --runInBand` side by side with `concurrently`, and stops when Jest exits.
- Single test: `pnpm exec jest tests/services/skillService.test.ts` or `pnpm exec jest -t "test name"`. Unit tests in `tests/services` and `tests/githubApi` need nothing running. Tests in `tests/api` need `pnpm run dev` running with migrations applied.
- `pnpm run lint` (`next lint`, `next/core-web-vitals`)
- `pnpm run prettier:check` / `pnpm run prettier:write`
- `pnpm run services:up` / `services:stop` / `services:down`
- Migrations (node-pg-migrate, `infra/migrations`): `pnpm run migration:create <name>`, `pnpm run migration:run` (reads `.env.development`). `migration:down` reads `.env`, which is not committed.

Node version: `.nvmrc` (26.13.0, LTS) is the single source. Every workflow reads it with `node-version-file: '.nvmrc'`, and `package.json` `engines.node` (`26.x`) makes Vercel build and run on the same major. Bump both together. Locally, run `nvm use`.

CI (`.github/workflows`) installs pnpm with `pnpm/action-setup` (version from `packageManager`), then Node from `.nvmrc` with `cache: 'pnpm'` (pnpm must be set up first for the cache to work), runs `pnpm install --frozen-lockfile`, then runs Prettier check, lint and `pnpm run test` on every PR, so code must pass `prettier --check`.

## Deploy

Deploys run from GitHub Actions (`.github/workflows/deploy.yaml`), not from Vercel's Git integration: `vercel.json` sets `git.deploymentEnabled: false`.

- Push to `master` deploys to production. Push to `development` deploys a Preview.
- The workflow first calls the reusable `tests.yaml` workflow (`workflow_call`). Only if the tests pass does it run the Vercel CLI (`vercel@65.2.0`): `pull` → `build` → `deploy --prebuilt`, adding `--prod` on `master`. `vercel build` uses `installCommand` and `buildCommand` from `vercel.json`.
- The repository variable `DEPLOY_ENV` sets both the GitHub Environment of the deploy job and the Vercel environment passed to `vercel pull --environment`. There is no fallback: if the variable is unset, the deploy job fails. `--prod` still depends on the branch.
- Runtime env vars (`POSTGRES_*`, `GITHUB_URL`, `NEXT_PUBLIC_*`) come from the Vercel project settings, which `vercel pull` downloads. Migrations do not run on deploy.

## Code style

Prettier: tabs, single quotes, semicolons, no trailing commas, printWidth 80.

## Tests

Jest loads `.env.development` and has a 60s timeout.

- Unit tests (`tests/services`, `tests/githubApi`) replace dependencies with fakes: a hand-built repository object made of `jest.fn()` methods for services, and `jest.spyOn(global, 'fetch')` for the GitHub client.
- Integration tests (`tests/api`) `fetch` a live `next dev` server on `localhost:3000`. Each one calls `orchestrator.waitForAllServices()` in `beforeAll`, which retries `/api/v1/status` until it returns 200. `status.spec.ts` expects Postgres 16 and exactly 1 opened DB connection. The `/api/v1/github` test calls the real GitHub API.

## Architecture

Backend layers:

```
src/pages/api/v1/<route>/index.ts
  → src/services/<x>Service.ts          (exports a singleton, e.g. `experienceService`)
    → infra/repositories/<x>Repository.ts (raw SQL; exports a singleton built with the shared `database`)
      → infra/data/database.ts            (default export: one PostgresDatabase instance)
```

- No factories or DI container: each module creates its singleton at the bottom of the file and wires it to the singleton from the layer below. Interfaces live in `src/services/interfaces` and `infra/repositories/interfaces`.
- `infra/` sits outside `src/`, so code imports it through relative paths (`../../infra/...`). Inside `src/`, use `@/`.
- `PostgresDatabase.query` opens and closes a new `pg.Client` for each query. On errors it logs and returns `undefined` instead of throwing. SSL is turned off only when `NODE_ENV == 'development'`.
- Each migration creates its table and then seeds it from `infra/scripts/*.sql`.
- Current API routes: `status` (DB health), `professional` (experiences from the DB), `github`. `github` uses `src/githubApi/githubApi.ts`, which fetches `GITHUB_URL/repos` and returns the top 5 repos with a description, sorted by stars. It returns `[]` when GitHub sends back an error message, for example when rate-limited.
- `GithubRepoResponse` is a global ambient type declared in `src/schemas/githubApiResponse.ts`, so it is used without an import.

## Frontend

- Styling uses Chakra UI. The theme is defined inline in `src/pages/_app.tsx`, with the custom color palette `feeling.*` (e.g. `feeling.background`, `feeling.cardBg`) and a Modal theme. The font is Maitree from `next/font/google`. Tailwind is still installed, and some older components still use `className`.
- Client data fetching uses SWR with `src/services/dataFetcher.ts` (`fetchFromAPI`) as the fetcher, e.g. `useSWR('/api/v1/github', fetchFromAPI)`.
- Responsive layout uses Chakra's `useBreakpointValue` (wrapped in `src/hooks/useScreenSize.tsx`). `src/pages/index.tsx` switches between separate mobile and desktop grid layouts.
- `TranslationContext` and `src/translations/IConstantsTexts.ts` (`br`/`en`) still exist, but `_app.tsx` no longer wraps the app in the provider. Components that use the context get the default `br` texts.
