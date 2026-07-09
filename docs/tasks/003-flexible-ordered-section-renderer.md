# TASK 003 — Flexible Ordered Section Renderer

## Goal

Render sections in the exact order defined in `src/data/landing.page2.ts`, while allowing optional or removed section types.

## Scope

- `src/components/landing/LandingRenderer.tsx`
- `src/lib/landing/landing.types.ts` only if required

## Rules

- Do not use `find()` for rendering.
- Use ordered array rendering with `map()`.
- Treat `hero`, `video`, and `text` as optional.
- The Intro Scene contains only the consecutive intro sections at the start of `sections`.
- If `video` is removed, render the remaining intro sections normally with no empty space.
- Do not require a fixed `hero → video → text` sequence.
- After the Intro Scene, render every remaining section in original array order.
- Support repeated `text` and `storyCards` section types.
- Use `section.id` as the React key if available. If not available, use a stable fallback.
- Keep current styles and data unchanged.
- Do not add dependencies.
- Do not run tests, build, dev server, or git commands.

## Acceptance

- Removing `video` from the data file does not create errors or blank space.
- Reordering or adding supported sections works through the data file only.
- The existing first-scene background behavior remains intact when intro sections exist.
