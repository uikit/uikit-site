# Agent Instructions

This document provides instructions for AI agents operating in this repository to ensure consistency and quality.

## 1. Build and Verification

### Dependencies

- Install dependencies with `pnpm install`.
- The postinstall step links the local UIkit package into `static/assets/uikit`.

### Build Commands

- `pnpm dev` - start the local development server.
- `pnpm build` - build the production site.
- `pnpm preview` - preview the production build locally.
- `pnpm compile` - compile theme CSS and UIkit test assets when a task requires regenerated compiled output.

### Verification

- Run `pnpm build` after app or docs changes when practical.
- Re-read changed docs pages and confirm wording against source, changelog, and examples.
- Do not regenerate compiled assets unless the task actually changes inputs that require it.

## 2. Style and Conventions

### Formatting

- Follow `.prettierrc.json`.
- Default formatting uses 4 spaces, 100 character print width, and single quotes.
- YAML uses 2 spaces and double quotes.
- Prettier is not configured to format `docs/pages`, so preserve existing docs formatting manually.

### JavaScript and Svelte

- Follow the existing ESLint configuration in `eslint.config.js`.
- Keep imports organized and match the surrounding Svelte and JavaScript style.
- Preserve existing component structure and route conventions in `src/routes`.

### Writing

- Prefer clear, literal, user-facing wording.
- Keep terminology aligned with UIkit source, changelog, and existing docs.
- Preserve nearby page structure and example style instead of rewriting pages broadly.

## 3. Project Structure

- `docs/pages/` - authored documentation pages for components, guides, and migration notes.
- `src/routes/` - SvelteKit route layer for rendering the site.
- `src/lib/docs.js` - docs loading and processing logic.
- `static/assets/uikit/` - linked upstream UIkit source and compiled test assets; treat as external/upstream unless the task explicitly requires working there.
- `less/` and `static/css/` - theme source and compiled CSS output.

## 4. Documentation Rules

- Use the `uikit-docs` skill for documentation audits and docs-page updates.
- Update `docs/pages/migration.md` for migration-specific guidance.
- Add or revise docs pages only where the source and examples support the change.
- Keep docs edits minimal and avoid formatting drift.

## 5. Change Scope

- Prefer editing the authored docs in `docs/pages/` for docs-content tasks.
- Prefer editing `src/routes/` or `src/lib/` only for site behavior, rendering, or data-loading changes.
- Do not expand a task beyond the specific missing docs, migration note, component page update, or app behavior that the user asked for.

## 6. Commit Messages

- Follow Conventional Commits when creating commits.
- Use types such as `feat`, `fix`, `docs`, `refactor`, `style`, and `chore`.
