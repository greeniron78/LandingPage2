# TASK 010 — Multi-Client Landing Data

## Goal

Refactor the landing page so multiple client websites can reuse the same UI components while managing their own content, images, contact details, and section settings independently.

Each client must be accessible through its own URL slug.

Examples:

```text
/landing/geonha-beauty
/landing/company-b
```

---

## Scope

- `src/data/`
- `src/lib/landing/getLandingPage.ts`
- `src/app/landing/[slug]/page.tsx`
- `src/lib/landing/landing.types.ts` only if required
- `src/app/page.tsx` only if required for redirect or default landing behavior

Do not modify existing section components unless required for type compatibility.

---

## Architecture

Use one data file per client.

```text
src/data/
  landing.geonha-beauty.ts
  landing.company-b.ts
```

Use one image folder per client.

```text
public/images/
  geonha-beauty/
    hero.jpg
    story-section.png
    product-01.jpg
    product-02.jpg
    product-03.jpg

  company-b/
    hero.jpg
    story-section.png
    product-01.jpg
    product-02.jpg
    product-03.jpg
```

Components must remain shared.

Do not duplicate:

```text
HeroSection
VideoSection
TextBlockSection
StoryCardSection
CTASection
FooterSection
LandingRenderer
```

---

## Client Data Requirements

Each client data file must export a valid `LandingPage`.

Each client must independently control:

- slug
- SEO title and description
- phone number
- Kakao channel URL
- address
- map URL
- floating actions
- Hero text and background image
- Video URL
- Text sections
- StoryCards section background mode
- StoryCards section background image
- Story card mode
- Individual card background images
- CTA content
- Footer content

Do not hardcode client-specific values inside components.

---

## Example Client Data

Create or adapt the following structure.

```ts
import type { LandingPage } from "@/lib/landing/landing.types";

export const geonhaBeautyLandingPage: LandingPage = {
  slug: "geonha-beauty",

  seo: {
    title: "프리미엄 스킨케어 | 건하뷰티",
    description:
      "건하뷰티의 스킨케어 프로그램과 상담 정보를 확인할 수 있는 랜딩 페이지입니다.",
  },

  contact: {
    phone: "010-0000-0000",
    kakaoChannelUrl: "https://pf.kakao.com/_placeholder",
    address: "서울특별시 예시 주소",
    mapUrl: "https://map.kakao.com/link/search/건하뷰티",
  },

  floatingActions: [
    {
      type: "kakao",
      label: "카카오 상담",
      href: "https://pf.kakao.com/_placeholder",
    },
    {
      type: "phone",
      label: "전화",
      href: "010-0000-0000",
    },
  ],

  sections: [
    {
      type: "hero",
      eyebrow: "GEONHA BEAUTY",
      title: "당신의 피부에 맞는 섬세한 케어",
      subtitle:
        "건하뷰티는 피부 상태와 생활 습관을 함께 살펴 맞춤형 관리를 제안합니다.",
      backgroundImage: "/images/geonha-beauty/hero.jpg",
      actions: [
        {
          type: "kakao",
          label: "상담하기",
          href: "https://pf.kakao.com/_placeholder",
        },
      ],
    },

    {
      type: "storyCards",

      backgroundMode: "image",
      backgroundImage: "/images/geonha-beauty/story-section.png",

      cardMode: "image",

      title: "건하뷰티 프로그램",
      description: "프로그램별 특징과 상세 내용을 확인해보세요.",

      cards: [
        {
          id: "care-01",
          title: "Premium Skin Care",
          body: "피부 상태에 맞춘 프리미엄 스킨케어",
          image: "/images/geonha-beauty/icon-01.svg",
          backgroundImage: "/images/geonha-beauty/product-01.jpg",
          detailTitle: "Premium Skin Care",
          detailBody: [
            "피부 상태를 확인한 후 단계별 맞춤 관리를 진행합니다.",
            "관리 전 상담을 통해 필요한 프로그램을 안내합니다.",
          ],
        },

        {
          id: "care-02",
          title: "Luxury Treatment",
          body: "편안한 휴식과 집중 케어를 위한 프로그램",
          image: "/images/geonha-beauty/icon-02.svg",
          backgroundImage: "/images/geonha-beauty/product-02.jpg",
          detailTitle: "Luxury Treatment",
          detailBody: [
            "피부 컨디션과 원하는 관리 방향을 바탕으로 프로그램을 구성합니다.",
          ],
        },

        {
          id: "care-03",
          title: "Special Care",
          body: "특정 고민을 집중적으로 관리하는 프로그램",
          image: "/images/geonha-beauty/icon-03.svg",
          backgroundImage: "/images/geonha-beauty/product-03.jpg",
          detailTitle: "Special Care",
          detailBody: ["개인별 고민에 따라 집중 관리 항목을 조정합니다."],
        },
      ],
    },
  ],
};
```

Create a second sample client with placeholder content:

```text
src/data/landing.company-b.ts
```

Use different slug, text, links, and image paths.

---

## Landing Registry

Create a central client registry.

Recommended file:

```text
src/data/landing.registry.ts
```

Example:

```ts
import { geonhaBeautyLandingPage } from "@/data/landing.geonha-beauty";
import { companyBLandingPage } from "@/data/landing.company-b";

export const landingPageRegistry = {
  "geonha-beauty": geonhaBeautyLandingPage,
  "company-b": companyBLandingPage,
} as const;

export type LandingPageSlug = keyof typeof landingPageRegistry;
```

Do not place full client content inside the registry.

---

## Data Loader

Update:

```text
src/lib/landing/getLandingPage.ts
```

Required behavior:

```ts
getLandingPage(slug: string)
```

- Return the matching landing page from the registry.
- Return `null` when the slug does not exist.
- Do not use client-specific conditional chains inside components.
- Keep the function easy to replace with a database loader later.

Example:

```ts
import { landingPageRegistry } from "@/data/landing.registry";

export function getLandingPage(slug: string) {
  return landingPageRegistry[slug as keyof typeof landingPageRegistry] ?? null;
}
```

---

## Dynamic Route

Create:

```text
src/app/landing/[slug]/page.tsx
```

Requirements:

- Read the slug from route params.
- Load the matching page using `getLandingPage(slug)`.
- Call `notFound()` when no page exists.
- Render the existing `LandingRenderer`.
- Generate metadata from the selected client data.
- Do not duplicate landing UI code in this route.

Expected URLs:

```text
http://localhost:3000/landing/geonha-beauty
http://localhost:3000/landing/company-b
```

---

## Root Page

Choose the smallest safe behavior for `/`.

Preferred behavior:

- Keep the current landing page working, or
- Redirect `/` to `/landing/geonha-beauty`.

Do not remove the root page without a replacement.

---

## Independent Visual Modes

The following StoryCards controls must remain independent for every client:

```ts
backgroundMode: "image" | "plain"
backgroundImage?: string

cardMode: "image" | "plain"
```

Each card must still support:

```ts
backgroundImage?: string
```

Do not couple section mode and card mode.

All combinations must continue to work:

```ts
backgroundMode: "image";
cardMode: "image";
```

```ts
backgroundMode: "image";
cardMode: "plain";
```

```ts
backgroundMode: "plain";
cardMode: "image";
```

```ts
backgroundMode: "plain";
cardMode: "plain";
```

---

## Compatibility

Preserve all existing features:

- Intro splash screen
- Fixed Intro Scene background behavior
- Ordered section rendering
- Optional Video section
- Repeated Text and StoryCards sections
- Responsive StoryCards grid
- Card flip animation
- Working “이야기 보기” button
- Working “돌아가기” button
- Section background mode
- Card visual mode
- Floating actions
- CTA and Footer

Do not remove or rewrite working features unnecessarily.

---

## Acceptance

- `/landing/geonha-beauty` renders the 건하뷰티 data.
- `/landing/company-b` renders different data using the same components.
- Unknown slugs return the Next.js not-found page.
- Changing one client file does not affect another client.
- Images are loaded from that client’s folder.
- No client-specific content is hardcoded in shared components.
- Existing section and card modes continue working independently.
- Adding a new client requires only:
  1. a new image folder,
  2. a new data file,
  3. one registry entry.

---

## Constraints

- Do not duplicate shared components.
- Do not add a database.
- Do not add authentication.
- Do not add an admin page.
- Do not install dependencies.
- Do not restructure unrelated components.
- Do not run tests.
- Do not run build.
- Do not run dev server.
- Do not execute Git commands.

Return only:

```text
Completed: [feature]
Changed: [files]
Check: [manual verification items]
```
