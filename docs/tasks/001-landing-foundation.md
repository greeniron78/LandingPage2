# TASK 001 — Landing Foundation

## 목표

landing_page2의 콘텐츠 데이터와 섹션 렌더링 기반을 만든다.  
상세 디자인 구현 전, 데이터 기반으로 랜딩 페이지를 조립할 수 있는 최소 구조를 완성한다.

## 작업 범위

- `src/lib/landing/landing.types.ts`
- `src/data/landing.page2.ts`
- `src/lib/landing/getLandingPage.ts`
- `src/components/landing/LandingRenderer.tsx`
- `src/app/page.tsx`
- 필요한 최소 placeholder 섹션 컴포넌트

## 완료 기준

- `LandingPage`, `LandingSection`, `CTAButton` 타입이 정의되어 있다.
- 모든 랜딩 콘텐츠는 `src/data/landing.page2.ts`에서 관리한다.
- `getLandingPage()`가 현재 정적 랜딩 데이터를 반환한다.
- `LandingRenderer`가 `section.type`에 따라 섹션을 렌더링한다.
- `/` 페이지에서 데이터 기반 랜딩 구조가 표시된다.
- 각 섹션은 최소 placeholder UI로 표시되어도 된다.
- 컴포넌트에 문구, URL, 연락처, 이미지 경로를 하드코딩하지 않는다.

## 제외 범위

- 실제 상세 디자인
- sticky 스크롤 레이아웃
- 애니메이션
- YouTube iframe 상세 구현
- 플로팅 CTA 상세 디자인
- 관리자, DB, API
- 외부 패키지 설치
- SEO 고도화

## 사용자 테스트

- 브라우저에서 `/` 접속 시 Hero, Video, TextBlock, StoryCards, CTA, Footer placeholder가 순서대로 보이는지 확인한다.
- `src/data/landing.page2.ts`의 제목을 바꾸면 화면에도 반영되는지 확인한다.
- TypeScript 또는 화면 오류가 없는지 확인한다.

## 리뷰 메모

-
