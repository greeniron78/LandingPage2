# TASK 002-REVISION — Fixed Background Story Scene

## 목표

참고 랜딩처럼 배경은 화면 뒤에 고정된 느낌을 유지하고, 영상/카드/텍스트 콘텐츠만 그 위에서 스크롤되는 구조로 수정한다.

## 작업 범위

- `src/components/landing/StoryCardSection.tsx`
- 필요한 경우 `src/components/landing/VideoSection.tsx`
- 필요한 경우 `src/components/landing/LandingRenderer.tsx`
- 필요한 경우 `src/data/landing.page2.ts`

## 완료 기준

- Story 구간에서 배경 레이어와 콘텐츠 레이어가 명확히 분리된다.
- 배경은 스크롤 중 화면 뒤에 유지되는 느낌을 준다.
- 영상/카드/텍스트는 배경 위에서 독립적으로 스크롤된다.
- 페이지 전체가 하나의 덩어리처럼 같이 밀리는 느낌을 줄인다.
- 모바일 기준으로 자연스럽게 보인다.
- 콘텐츠 문구와 이미지 경로는 `src/data/landing.page2.ts`에서 관리한다.

## 구현 방향

- Story 구간 wrapper에 충분한 스크롤 높이를 준다.
- 배경은 `sticky top-0 h-screen` 또는 `fixed inset-0` 방식으로 분리한다.
- 콘텐츠는 `relative z-10` 레이어로 배경 위에 올린다.
- 영상/카드는 콘텐츠 레이어 안에서 순서대로 스크롤되게 한다.
- JavaScript 스크롤 애니메이션은 사용하지 않는다.

## 제외 범위

- 고급 애니메이션
- 패럴랙스 라이브러리
- 외부 패키지 설치
- 관리자
- DB
- 클릭 통계

## 사용자 테스트

- 스크롤 시 배경은 뒤에 남아 있고 영상/카드만 지나가는 느낌인지 확인한다.
- 모바일 폭에서 콘텐츠가 잘리지 않는지 확인한다.
- Hero, CTA, Footer 흐름이 깨지지 않는지 확인한다.
