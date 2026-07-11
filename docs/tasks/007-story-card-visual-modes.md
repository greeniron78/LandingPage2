# TASK 007 — Story Card Visual Modes

## Goal

Allow each `storyCards` section to switch between two visual modes:

- `plain` → current icon-based card design
- `image` → product image as the full card background

The visual mode should be controlled only from the section data without modifying the component.

---

## Scope

- src/lib/landing/landing.types.ts
- src/data/landing.page2.ts
- src/components/landing/StoryCardSection.tsx

---

## Data API

Add a new section property:

```ts
cardMode: "plain" | "image";
```

Each story card may optionally contain:

```ts
backgroundImage?: string
```

---

## Requirements

### Shared

- Keep current flip interaction.
- Keep current responsive layout.
- Desktop: 3 columns.
- Tablet: 2 columns.
- Mobile: 1 column.
- Keep existing card height.
- Do not modify Hero, IntroScene, CTA, Footer, or other sections.
- Do not add dependencies.

---

### Plain Mode

When

```ts
section.cardMode === "plain";
```

Render exactly the current design.

Requirements

- White card background.
- Render existing `card.image`.
- Keep current spacing.
- Keep current typography.
- Keep current icon container.
- Keep current button position.
- Do not render `backgroundImage`.

---

### Image Mode

When

```ts
section.cardMode === "image";
```

Requirements

- Each card uses its own `backgroundImage`.
- Background image fills the entire front card.
- Use:

```
background-size: cover;
background-position: center;
background-repeat: no-repeat;
```

- Add a dark readable overlay above the image.
- Overlay must not cover text.
- Hide the existing icon container (`card.image`).
- Keep number, title, body and button.
- Use the existing flip animation.
- Keep the back side exactly as it is now.
- If `backgroundImage` is undefined, automatically fall back to the plain style.

---

## Acceptance

Changing only

```ts
cardMode: "plain";
```

or

```ts
cardMode: "image";
```

inside

```
src/data/landing.page2.ts
```

must immediately switch the visual style.

No component code should require editing when changing modes.

---

## Example

```ts
{
  type: "storyCards",

  cardMode: "image",

  title: "상품 이야기",

  description: "상품별 이야기를 확인해보세요.",

  cards: [
    {
      id: "story-01",

      title: "Premium Skin Care",

      body: "프리미엄 스킨케어",

      image: "/images/icon-01.svg",

      backgroundImage: "/images/product-01.jpg",

      detailTitle: "Premium Skin Care",

      detailBody: [
        "첫 번째 상세 내용",
        "두 번째 상세 내용"
      ]
    },

    {
      id: "story-02",

      title: "Luxury Treatment",

      body: "럭셔리 관리",

      image: "/images/icon-02.svg",

      backgroundImage: "/images/product-02.jpg",

      detailTitle: "Luxury Treatment",

      detailBody: [
        "첫 번째 상세 내용"
      ]
    },

    {
      id: "story-03",

      title: "Special Care",

      body: "스페셜 케어",

      image: "/images/icon-03.svg",

      backgroundImage: "/images/product-03.jpg",

      detailTitle: "Special Care",

      detailBody: [
        "첫 번째 상세 내용"
      ]
    }
  ]
}
```

---

## Constraints

- Modify only the files listed in Scope.
- Keep existing data compatibility.
- Do not remove any current functionality.
- Do not change StoryCard API except for adding the new optional fields.
- Do not run build.
- Do not run dev server.
- Do not execute Git commands.

Run only:

```
npm run lint
```

Return:

- Modified files
- Short summary
- Lint result
