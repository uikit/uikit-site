# UIkit Docs

## Overview

Use this skill for auditing and updating UIkit docs from the local source repo.
`SKILL.md` is the entry file for triggers and the short workflow. This file is the detailed operating guide.

- Source: `/Users/hanna/Webserver/_uikit`
- Docs: `/Users/hanna/Webserver/uikit-site`

## Required Order

Always work in this order:

1. recent commits and relevant tag range
2. `CHANGELOG.md`
3. affected files in `src/`
4. matching examples in `tests/`
5. docs coverage in `docs/pages/`

Treat UIkit component docs primarily as reference documentation.
Do not invent option names, defaults, or behavior. Verify them in changelog, source, and tests.
Use the relevant component page in `docs/pages/` or `docs/pages/migration.md` as the docs target.

## Audit First

Before editing, identify:

- what changed since the last documented release
- which items are user-facing
- which items need docs, migration notes, or examples
- which items are already documented

Use a simple coverage result:

- `documented`
- `missing docs`
- `migration only`
- `needs example`
- `not user-facing`

## Writing Rules

- Prefer clear, literal, user-facing wording
- Keep terminology accurate to source and changelog
- Maintain consistency with nearby docs pages
- Use existing docs pages as context for tone, structure, headings, tables, and example style
- Do not copy whole sections; mirror patterns
- When adding a new page, base it on the closest existing component page in `docs/pages/`
- Keep the page focused on the user's goal: usage, options, examples, and migration notes only where appropriate

## Editing Rules

- Change content only where needed
- When adding a new page, follow the repository's existing component-doc structure instead of inventing a new one
- Keep migration guidance in `docs/pages/migration.md`
- When reviewing interactively, stay on one file at a time

## Formatting Rules

Preserve the target file's existing style exactly. Valid correctness fixes are fine, for example closing an unclosed tag.

## Verification

Before finishing:

1. re-read only the changed docs files
2. confirm new wording against changelog, source, and tests
3. confirm examples match supported behavior

## Do / Don't

- Do verify wording against commits, `CHANGELOG.md`, `src/`, and `tests/`
- Do preserve the target file's existing formatting and structure
- Do keep release docs audits and docs coverage notes concise
- Don't invent behavior, defaults, or undocumented options
- Don't expand edits beyond the specific missing docs, migration note, or component page update

## Output

Return one or more of:

- missing docs coverage
- minimal component doc updates
- migration updates
- a concise release docs audit
