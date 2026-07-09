import type { LandingPage } from "@/lib/landing/landing.types";

const contact = {
  phone: "010-0000-0000",
  kakaoChannelUrl: "https://pf.kakao.com/_placeholder",
  mapUrl: "https://map.kakao.com/link/search/포디어카페",
  address: "대구 달서구 월배로 162 1층",
};

export const bokdeokbangLanding: LandingPage = {
  slug: "bokdeokbang",
  seo: {
    title: "복덕방 | 동네를 먼저 읽는 부동산 상담",
    description:
      "복덕방은 숫자보다 생활의 결을 먼저 듣는 스토리텔링형 부동산 상담 랜딩 페이지입니다.",
  },
  contact,
  floatingActions: [
    {
      type: "kakao",
      label: "카카오 상담",
      href: contact.kakaoChannelUrl,
    },
    {
      type: "phone",
      label: "전화",
      href: contact.phone,
    },
  ],
  sections: [
    {
      type: "hero",
      eyebrow: "Bokdeokbang Story Landing",
      title: "집을 찾기 전에, 당신의 하루를 먼저 듣습니다.",
      subtitle:
        "복덕방은 동네의 공기, 출근길, 밤의 조용함까지 함께 살펴보며 오래 머물 수 있는 선택을 돕습니다.",
      backgroundImage: "/globe.svg",
      actions: [
        {
          type: "kakao",
          label: "카카오톡 상담",
          href: contact.kakaoChannelUrl,
        },
        {
          type: "map",
          label: "길찾기",
          href: contact.mapUrl,
        },
      ],
    },
    {
      type: "video",
      title: "상담은 이렇게 시작됩니다",
      description:
        "짧은 소개 영상을 통해 복덕방이 매물을 고르는 방식과 상담 흐름을 확인해 보세요.",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      type: "text",
      eyebrow: "Our Point of View",
      title: "좋은 매물보다 먼저, 좋은 기준을 세웁니다.",
      body: "가격과 평수만으로는 매일의 만족을 설명하기 어렵습니다. 복덕방은 생활 반경, 소음, 채광, 이동 시간, 주변 분위기를 함께 묻고 기록합니다. 그래서 상담의 끝은 단순한 목록이 아니라 나에게 맞는 선택지로 좁혀집니다.",
    },
    {
      type: "storyCards",
      title: "복덕방이 살펴보는 장면들",
      description:
        "매물을 보기 전후로 놓치기 쉬운 생활의 단서를 카드처럼 정리했습니다.",
      cards: [
        {
          title: "아침의 이동",
          body: "출근 동선, 버스 간격, 지하철까지의 실제 체감 거리를 함께 확인합니다.",
          image: "/window.svg",
        },
        {
          title: "낮의 채광",
          body: "집 안에서 오래 머무는 시간대의 빛과 환기 흐름을 기준에 넣습니다.",
          image: "/globe.svg",
        },
        {
          title: "밤의 분위기",
          body: "귀가길 밝기, 주변 소음, 골목의 안정감을 생활 관점에서 살펴봅니다.",
          image: "/file.svg",
        },
      ],
    },
    {
      type: "cta",
      title: "지금 보고 있는 집, 같이 판단해 볼까요?",
      description:
        "주소나 매물 링크를 보내주시면 생활 조건을 기준으로 상담을 시작합니다.",
      actions: [
        {
          type: "kakao",
          label: "카카오톡 상담하기",
          href: contact.kakaoChannelUrl,
        },
        {
          type: "phone",
          label: "전화 문의",
          href: contact.phone,
        },
        {
          type: "map",
          label: "방문 길찾기",
          href: contact.mapUrl,
        },
      ],
    },
    {
      type: "footer",
      businessName: "포디어카페",
      contactText: `${contact.phone} · ${contact.address}`,
      notice:
        "표시된 연락처와 주소는 MVP용 placeholder입니다. 실제 정보는 데이터 파일에서만 교체하세요.",
    },
  ],
};
