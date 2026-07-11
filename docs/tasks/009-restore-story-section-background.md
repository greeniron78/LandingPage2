# TASK 009 — Separate Story Section Mode and Card Mode

## Goal

Refactor the StoryCards component so that the StoryCards section background and the individual card appearance are completely independent.

The previous implementation accidentally merged the two concepts. Restore the section background controls while keeping the new per-card image mode.

---

## Scope

- src/lib/landing/landing.types.ts
- src/data/landing.page2.ts
- src/components/landing/StoryCardSection.tsx

---

## Requirements

There must be TWO completely independent visual modes.

### 1. StoryCards Section Background

```ts
backgroundMode: "image" | "plain"
backgroundImage?: string
```

Responsibilities:

- Controls ONLY the StoryCards section wrapper.
- Never affects individual cards.

When

```ts
backgroundMode: "image";
```

- use section.backgroundImage
- background-size: cover
- background-position: center
- background-repeat: no-repeat

When

```ts
backgroundMode: "plain";
```

- no background image
- transparent section background
- preserve current layout

---

### 2. Story Card Mode

```ts
cardMode: "image" | "plain";
```

Responsibilities:

- Controls ONLY card appearance.
- Never changes section background.

---

## Card Image Mode

When

```ts
cardMode: "image";
```

Each card uses

```ts
card.backgroundImage;
```

Requirements

- full-card background image
- hide icon container
- keep title
- keep body
- keep button
- keep flip animation
- keep back side

---

## Card Plain Mode

When

```ts
cardMode: "plain";
```

Use the current design.

- icon visible
- no background image
- existing layout unchanged

---

## Data Example

```ts
{
  type: "storyCards",

  backgroundMode: "image",
  backgroundImage: "/images/story-background.jpg",

  cardMode: "image",

  cards: [
    {
      id: "story-01",
      title: "...",
      body: "...",
      image: "/images/icon-01.svg",
      backgroundImage: "/images/product-01.jpg"
    },
    {
      id: "story-02",
      title: "...",
      body: "...",
      image: "/images/icon-02.svg",
      backgroundImage: "/images/product-02.jpg"
    },
    {
      id: "story-03",
      title: "...",
      body: "...",
      image: "/images/icon-03.svg",
      backgroundImage: "/images/product-03.jpg"
    }
  ]
}
```

---

## Required Combinations

These four combinations MUST all work.

### A

```
backgroundMode = image
cardMode = image
```

Section background image

-

Image cards

---

### B

```
backgroundMode = image
cardMode = plain
```

Section background image

-

Plain cards

---

### C

```
backgroundMode = plain
cardMode = image
```

Transparent section

-

Image cards

---

### D

```
backgroundMode = plain
cardMode = plain
```

Transparent section

-

Plain cards

---

## IMPORTANT

Remove every place where these two modes are coupled.

The implementation MUST NOT contain logic like

```ts
section.cardMode ?? section.backgroundMode;
```

or

```ts
backgroundMode || cardMode;
```

Instead use two independent variables.

```ts
const isSectionImageMode = section.backgroundMode === "image";

const isCardImageMode = section.cardMode === "image";
```

The two variables must never reference each other.

---

## Do Not Change

Do not modify

- Hero
- Intro Scene
- Text Sections
- Video Sections
- CTA
- Footer
- Flip animation
- Story detail page
- Responsive layout

Only refactor StoryCards.

---

## Acceptance Checklist

- Section background restored.
- Card image mode still works.
- Plain mode still works.
- All four combinations work.
- Section mode and card mode are completely independent.
- Existing flip animation still works.
- Existing responsive layout remains unchanged.

---

Do not run build, tests, Git commands or formatting.
Only modify the required files.
