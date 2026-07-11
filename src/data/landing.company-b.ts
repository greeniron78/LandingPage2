import type { LandingPage } from "@/lib/landing/landing.types";

const contact = {
  phone: "02-555-0188",
  kakaoChannelUrl: "https://pf.kakao.com/_placeholder_company_b",
  mapUrl: "https://map.kakao.com/link/search/company-b",
  address: "서울특별시 중구 샘플로 18, 2층",
};

export const companyBLandingPage: LandingPage = {
  slug: "company-b",
  seo: {
    title: "Company B | 상담형 브랜드 랜딩",
    description:
      "Company B는 상담 문의와 브랜드 스토리를 함께 담아 전환을 돕는 샘플 랜딩 페이지입니다.",
  },
  contact,
  floatingActions: [
    {
      type: "kakao",
      label: "상담",
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
      eyebrow: "Company B",
      title: "브랜드 이야기를 상담으로 연결합니다.",
      subtitle:
        "Company B는 메시지, 이미지, 문의 동선을 하나의 흐름으로 정리해 상담 전환을 돕습니다.",
      backgroundImage: "/images/story-cards-background.png",
      actions: [
        {
          type: "kakao",
          label: "문의하기",
          href: contact.kakaoChannelUrl,
        },
        {
          type: "map",
          label: "오시는 길",
          href: contact.mapUrl,
        },
      ],
    },
    {
      type: "video",
      title: "브랜드 소개 영상",
      description: "짧은 영상으로 서비스의 핵심을 먼저 소개합니다.",
      youtubeUrl: "https://youtu.be/yNQ23sQ9pxg?si=Ei6k9gWKhYf19Hb2",
    },
    {
      type: "text",
      eyebrow: "What We Do",
      title: "명확한 메시지가 먼저 보이게 합니다.",
      body: "방문자는 짧은 시간 안에 무엇을 얻을 수 있는지 알고 싶어 합니다. Company B는 핵심 메시지와 신뢰 요소를 우선 배치해 상담 행동으로 자연스럽게 이어지도록 구성합니다.",
    },
    {
      type: "storyCards",
      title: "주요 서비스",
      description: "서비스별 포인트를 카드로 나눠 확인해보세요.",
      backgroundMode: "plain",
      cardMode: "image",
      cards: [
        {
          id: "service-01",
          title: "Strategy Session",
          body: "브랜드 방향을 함께 정리하는 상담",
          image: "/window.svg",
          backgroundImage: "/images/geonha-background.png",
          detailTitle: "Strategy Session",
          detailBody: [
            "현재 상황을 빠르게 정리하고 우선순위를 맞춥니다.",
            "상담 후 바로 실행할 수 있는 다음 단계를 제안합니다.",
          ],
        },
        {
          id: "service-02",
          title: "Creative Direction",
          body: "이미지와 메시지를 연결하는 설계",
          image: "/globe.svg",
          backgroundImage: "/images/story-background.png",
          detailTitle: "Creative Direction",
          detailBody: [
            "브랜드 톤과 시각 요소를 함께 맞춰 일관성을 만듭니다.",
          ],
        },
        {
          id: "service-03",
          title: "Growth Support",
          body: "전환을 돕는 운영 지원",
          image: "/file.svg",
          backgroundImage: "/images/story-cards-background.png",
          detailTitle: "Growth Support",
          detailBody: [
            "문의 흐름과 운영 포인트를 점검해 전환율 향상을 돕습니다.",
          ],
        },
      ],
    },
    {
      type: "cta",
      title: "지금 상담이 필요하신가요?",
      description: "원하는 방향과 일정을 보내주시면 빠르게 연락드리겠습니다.",
      actions: [
        {
          type: "kakao",
          label: "카카오 상담",
          href: contact.kakaoChannelUrl,
        },
        {
          type: "phone",
          label: "전화 문의",
          href: contact.phone,
        },
        {
          type: "map",
          label: "방문 안내",
          href: contact.mapUrl,
        },
      ],
    },
    {
      type: "footer",
      businessName: "Company B",
      contactText: `${contact.phone} · ${contact.address}`,
      notice: "샘플 데이터입니다. 실제 운영 정보는 데이터 파일에서만 교체하세요.",
    },
  ],
};
