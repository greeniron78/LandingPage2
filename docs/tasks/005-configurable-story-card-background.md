# TASK 005 — Configurable Story Card Background

## Goal

Allow each storyCards section to use either an image background or a plain background through data configuration.

## Scope

- `src/data/landing.page2.ts`
- `src/lib/landing/landing.types.ts`
- `src/components/landing/StoryCardSection.tsx`

## Data API

Support:

```ts
backgroundMode: "image" | "plain"
backgroundImage?: string
```
