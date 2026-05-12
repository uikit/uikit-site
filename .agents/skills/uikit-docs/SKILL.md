---
name: uikit-docs
description: Audit UIkit changes and update `uikit-site` docs with minimal, source-verified edits and no formatting drift. Use when reviewing commits, tags, `CHANGELOG.md`, `src/`, `tests/`, or `docs/pages` for missing docs coverage, new component pages, migration notes, or release documentation.
---

# UIkit Docs

Use this skill for UIkit docs work across the local repos:

- source: `/Users/hanna/Webserver/_uikit`
- docs: `/Users/hanna/Webserver/uikit-site`

## Quick Start

1. Check recent commits, tags, and the relevant version range
2. Read `CHANGELOG.md`
3. Verify behavior in `src/` and matching examples in `tests/`
4. Audit or update `docs/pages/` only where needed

## When to Use

- auditing missing docs coverage for recent UIkit changes
- adding a new docs page for a new component or feature
- updating existing component docs or `migration.md`
- preparing docs before a UIkit release post or release docs audit

## Workflow

1. Check commits, tags, and version range
2. Read `CHANGELOG.md`
3. Verify behavior in `src/` and `tests/`
4. Audit docs coverage in `docs/pages`
5. Create new docs pages or update existing ones only where needed
6. Match the existing docs tone, terminology, structure, and formatting of nearby pages

## Detailed Rules

Use `AGENTS.md` in this skill for the full operating rules, audit criteria, writing constraints, and verification checklist.
