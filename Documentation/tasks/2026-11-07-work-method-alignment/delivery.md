# Delivery: Align branches with the work method

## Summary

The branches `chore/claude-md-and-fixes` and `chore/bun` were rebuilt from `development` (`2954827`) to follow `../WorkMethodIA`. The two bug fixes are now covered by tests written first. Commits are atomic, in English, without attribution lines, and each one was green.

## Changes

- `CLAUDE.md`: guidance for Claude Code, including a pointer to `../WorkMethodIA`.
- `src/services/skillService.ts`: `insertSkill` delegates to the repository instead of calling itself (infinite recursion).
- `src/githubApi/githubApi.ts`: the description filter now excludes repositories whose description is `null` or missing. The old expression `r.description != '' || null || undefined` let them through.
- Package manager: npm replaced with Bun (`bun.lock`, `packageManager: bun@1.4.2`, `bun run` scripts). `tsx` removed. CI uses `oven-sh/setup-bun`. README and `CLAUDE.md` updated.
- `Documentation/decisions/ADR-001-bun-package-manager.md`: records the Bun decision.

Commits on `chore/claude-md-and-fixes`: `add claude code guidance file`, `fix infinite recursion in skill insertion`, `fix github repositories filter for missing descriptions`.

Commits on `chore/bun`, on top of it: `replace npm with bun as package manager`, `remove tsx dependency`, `configure ci to use bun`, `update docs for bun`, `update test section in claude guidance file`, `add adr for bun package manager`, `add delivery report`.

## Validation

- Tests: 2 unit tests created (`tests/services/skillService.test.ts`, `tests/githubApi/githubApi.test.ts`). Both failed before their fix for the expected reason (`RangeError: Maximum call stack size exceeded`, and `[2, 3, 1]` returned instead of `[1]`). Full suite passes: 5 of 5, including the 3 integration tests against Postgres and `next dev`.
- Before every commit: lint, Prettier check, `tsc --noEmit`, `next build` and the full suite (`npm test` on the first branch, `bun run test` on the second). When committing the first fix, the second fix's test was not yet committed, so it was moved aside to confirm the committed state was green.
- Acceptance criteria: all met. Apart from the planned additions (tests, ADR, this report, `CLAUDE.md` wording), the final code is identical to the previous branches, `bun.lock` included.
- Self-review: compared the rebuilt branch against the backups and checked that no commit contains attribution lines.
- Not verified: the GitHub Actions workflows, which only run on a PR.

## Pending items / next steps

- Push the branches and open the PR(s), targeting `development`. Needs approval.
- Delete `backup/claude-md-and-fixes` and `backup/bun`. Needs approval.
- Suggestions, out of scope:
  - `migration:down` reads `.env`, which is not committed.
  - `TranslationContext` is no longer provided in `_app.tsx`.
  - The local `master` is behind `development`.

## Notes

- Deviation from the plan: the plan named `master` (`2954827`) as the base, but that commit is on `development`. Local `master` is at `fcb546e`. The rebuild used `development`, which keeps the code equal to the previous branches.
- On the first branch, the "Tests" section of `CLAUDE.md` still describes only integration tests. It is fixed on `chore/bun` in its own commit.
