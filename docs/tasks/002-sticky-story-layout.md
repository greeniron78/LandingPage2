# TASK 002 — Sticky Story Layout

## 목표

Hero 이후 스토리 섹션에서 배경은 고정된 느낌으로 유지하고, 카드와 텍스트 콘텐츠만 스크롤되는 모바일 우선 스토리텔링 레이아웃을 구현한다.

## 작업 범위

- `src/components/landing/StoryCardSection.tsx`
- 필요한 경우 `src/app/globals.css`
- 필요한 경우 `src/data/landing.page2.ts`

## 완료 기준

- StoryCards 섹션에 sticky 배경 레이어와 스크롤 콘텐츠 레이어가 분리되어 있다.
- 배경은 카드 콘텐츠가 스크롤되는 동안 화면에 유지되는 느낌을 준다.
- 카드와 텍스트는 배경 위에서 세로로 자연스럽게 스크롤된다.
- 모바일 화면에서 카드가 잘리지 않고 읽기 쉽다.
- 카드 문구, 이미지 경로, 배경 정보는 `src/data/landing.page2.ts`에서 관리한다.
- 기존 `LandingRenderer`와 데이터 모델을 불필요하게 변경하지 않는다.

## 제외 범위

- JavaScript 기반 스크롤 애니메이션
- 카드 전환 모션
- 관리자, DB, 클릭 통계
- 외부 패키지 설치
- Hero, Video, CTA의 상세 디자인 변경

## 사용자 테스트

- 모바일 폭에서 StoryCards 구간을 스크롤할 때 배경이 유지되는 느낌인지 확인한다.
- 카드가 겹치거나 고정 CTA에 가려지지 않는지 확인한다.
- 카드 데이터의 제목 또는 문구를 바꾸면 화면에 반영되는지 확인한다.

## 리뷰 메모

-
