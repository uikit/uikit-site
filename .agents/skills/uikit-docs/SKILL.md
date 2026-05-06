---
name: uikit-docs
description: Audit UIkit changes from commits, tags, changelog, source, and tests, then create or update `uikit-site` docs with minimal edits and no formatting drift. Use when reviewing missing docs coverage, adding new component pages, updating component or migration docs, or preparing docs before a UIkit release post.
---

# UIkit Docs

Use this skill for UIkit docs work across the local repos:

- source: `/Users/hanna/Webserver/_uikit`
- docs: `/Users/hanna/Webserver/uikit-site`

## When to Use

- auditing missing docs coverage for recent UIkit changes
- adding a new docs page for a new component or feature
- updating existing component or migration docs
- preparing docs before a UIkit release post

## Workflow

1. Check commits, tags, and version range
2. Read `CHANGELOG.md`
3. Verify behavior in `src/` and `tests/`
4. Audit docs coverage in `docs/pages`
5. Create new docs pages or update existing ones only where needed
6. Match the existing docs tone, terminology, structure, and formatting of nearby pages

For detailed operating rules, use `AGENTS.md` in this skill.
