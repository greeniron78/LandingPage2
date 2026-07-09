# landing_page2 MVP

## 목표
- 모바일 우선 스토리텔링형 단일 랜딩 페이지
- 사용자가 스크롤을 통해 핵심 메시지를 이해하고, 상담·전화·길찾기·외부 링크 등의 CTA로 전환
- 초기에는 정적 데이터 기반으로 빠르게 구현하고, 이후 관리자/CMS로 확장 가능하게 설계

## 기술
- Next.js App Router
- TypeScript
- Tailwind CSS
- src 디렉터리 사용
- import alias: @/*

## 콘텐츠 관리
- 모든 콘텐츠는 src/data/landing.page2.ts에서 관리
- 문구, 이미지 경로, YouTube URL, CTA 링크를 컴포넌트에 하드코딩하지 않음
- 현재는 TypeScript 데이터 파일을 사용
- 이후 DB 또는 Supabase로 데이터 소스를 교체할 수 있도록 설계

## 페이지 섹션
- Hero
- Video
- TextBlock 또는 Concept
- StoryCards
- CTA
- Floating CTA
- Footer

## CTA 타입
- link
- phone
- kakao
- map
- youtube

## 구현 원칙
- LandingRenderer가 section.type에 따라 섹션 컴포넌트를 렌더링
- 모바일 퍼스트, 반응형, 접근성, semantic HTML 준수
- 외부 패키지 추가 최소화
- TypeScript 타입 안정성 유지
- any 사용 금지
- 공통 UI는 components/common에 분리
- 랜딩 전용 UI는 components/landing에 분리

## 권장 구조
src/
  app/
    page.tsx
    layout.tsx
  components/
    common/
      ActionButton.tsx
      SectionContainer.tsx
      YoutubeEmbed.tsx
    landing/
      LandingRenderer.tsx
      HeroSection.tsx
      VideoSection.tsx
      TextBlockSection.tsx
      StoryCardSection.tsx
      CTASection.tsx
      ContactFloatingButtons.tsx
      FooterSection.tsx
  data/
    landing.page2.ts
  lib/
    landing/
      landing.types.ts
      landing.actions.ts
      getLandingPage.ts

## MVP 제외 범위
- 관리자 로그인
- 데이터베이스
- 이미지 업로드
- 클릭 통계
- A/B 테스트
- 다중 랜딩 페이지 관리

## 검증
- 작업 완료 후 npm run lint와 npm run build를 실행
- 변경 범위 밖의 파일은 수정하지 않음
- 작업 완료 보고는 변경 요약, 검증 결과, 다음 작업 제안만 짧게 작성
