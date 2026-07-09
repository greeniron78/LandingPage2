# TASK 004 — Intro Splash Screen

## Goal

Add a clean first viewport before the Hero content.

## Scope

- `src/components/landing/LandingRenderer.tsx`
- `src/components/landing/HeroSection.tsx` only if required
- `src/data/landing.page2.ts` only if required

## Requirements

- The first viewport shows only the background image.
- Show a small “스크롤을 내려주세요.” text and down arrow.
- Hero content should appear after the user scrolls down.
- Keep the current Intro Scene fixed background behavior.
- Do not change StoryCards, CTA, Footer.
- Do not add dependencies.
- Do not run tests/build/dev/git.

## Acceptance

- On page load, the screen looks like a clean background scene.
- Scrolling down reveals the existing Hero text and buttons.
- Background remains visually continuous between splash and Hero.
