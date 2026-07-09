# TASK 006 — Story Card Detail Flip

## Goal

Make each story card reveal a detailed story when the user clicks “이야기 보기”.

## Scope

- `src/components/landing/StoryCardSection.tsx`
- `src/data/landing.page2.ts`
- `src/lib/landing/landing.types.ts`

## Requirements

- Add `detailTitle` and `detailBody` to each story card data.
- Front side shows current card title, checklist/body, image, and “이야기 보기” button.
- Clicking “이야기 보기” flips only that card.
- Back side should match the reference style:
  - label like `매물문의 01`
  - quoted detail title
  - multiple paragraph detail body
  - clean white card
  - no image
  - small hint or button to go back
- Clicking the back side or “돌아가기” flips it back.
- Keep desktop 3-column and mobile 1-column layout.
- Keep current card height.
- Use accessible button semantics.
- Do not change Intro Scene, paper background, CTA, Footer.
- Do not add dependencies.
- Do not run tests/build/dev/git.

## Implementation hints

- Add `"use client"` to `StoryCardSection.tsx`.
- Use `useState<string | null>` for the flipped card id.
- Use `card.id` if available, otherwise fallback to `card.title`.
- Use CSS 3D transform with Tailwind arbitrary properties:
  - `[transform-style:preserve-3d]`
  - `[backface-visibility:hidden]`
  - `rotate-y-180`
- Keep both front and back sides inside the same card size.
