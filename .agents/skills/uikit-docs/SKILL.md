---
name: uikit-docs
description: Audit UIkit changes and update `uikit-site` docs. Use when reviewing commits, tags, `CHANGELOG.md`, `src/`, `tests/`, or `docs/pages` for missing docs coverage, new component pages, migration notes, or release documentation.
license: MIT
---

# UIkit Docs

Audit and update UIkit docs from the local source repo. Use when auditing missing docs coverage for recent UIkit changes, adding a new docs page for a new component or feature, updating existing component docs or `migration.md`, or preparing docs before a release post.

- Source repo: `/Users/hanna/Webserver/_uikit`

## Workflow

1. Check recent commits, tags, and the relevant version range.
2. Read `CHANGELOG.md`.
3. Verify behavior in affected files in `src/` and matching examples in `tests/`.
4. Audit docs coverage in `docs/pages/` and classify each item as `documented`, `missing docs`, `migration only`, `needs example`, or `not user-facing`.
5. Update only the relevant docs page in `docs/pages/` or `docs/pages/migration.md` or create new docs pages as needed.

## Source Priority

- Start with the relevant commit range and tags.
- Use `CHANGELOG.md` as the release summary, but verify wording and behavior in `src/` and `tests/` before documenting anything.
- Treat existing docs pages as structure and tone references, not as the source of truth for new behavior.
- When editing a docs page, use the current page as the base document and nearby component pages only as pattern references.
