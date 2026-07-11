import type { LandingPage } from "@/lib/landing/landing.types";

const contact = {
  phone: "001-3806-9221",
  kakaoChannelUrl: "https://pf.kakao.com/_placeholder",
  mapUrl: "https://map.kakao.com/link/search/건하뷰티",
  address: "대구 동구 동호로69 동호월드타운5층 건하뷰티",
};

export const geonhaBeautyLandingPage: LandingPage = {
  slug: "geonha-beauty",
  seo: {
    title: "프리미엄 스킨케어 | 건하뷰티",
    description:
      "건하뷰티는 피부 고민과 컨디션을 세심하게 살펴 개인별 맞춤 케어를 제공하는 프리미엄 스킨케어 전문 뷰티샵입니다.",
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
      eyebrow: "Geonha Beauty · Premium Skin Care",
      title: "건하뷰티",
      subtitle:
        "건하뷰티는 피부 고민과 현재 컨디션을 세심하게 살펴, 본연의 아름다움을 되찾을 수 있는 맞춤형 프리미엄 케어를 제공합니다.",
      backgroundImage: "/images/geonha-background.png",
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
      description: "짧은 소개 영상을 통해 건하뷰티의 상담 흐름을 확인해 보세요.",
      youtubeUrl: "https://youtu.be/yNQ23sQ9pxg?si=Ei6k9gWKhYf19Hb2",
    },
    {
      type: "text",
      eyebrow: "Our Point of View",
      title: "좋은 관리보다 먼저, 좋은 기준을 세웁니다.",
      body: "피부 상태만으로는 매일의 만족을 설명하기 어렵습니다. 건하뷰티는 생활 습관, 컨디션 변화, 계절의 영향, 관리 주기를 함께 묻고 기록합니다. 그래서 상담의 끝은 단순한 메뉴가 아니라 나에게 맞는 관리 방향으로 좁혀집니다.",
    },
    {
      type: "storyCards",
      title: "건하뷰티 프로그램",
      description: "프로그램별 특징과 상세 내용을 확인해보세요.",
      backgroundMode: "image",
      backgroundImage: "/images/story-cards-background.png",
      cardMode: "image",
      cards: [
        {
          id: "care-01",
          title: "Premium Skin Care",
          body: "피부 상태에 맞춘 프리미엄 스킨케어",
          image: "/window.svg",
          backgroundImage: "/images/story-background.png",
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
          image: "/globe.svg",
          backgroundImage: "/images/geonha-background.png",
          detailTitle: "Luxury Treatment",
          detailBody: [
            "피부 컨디션과 원하는 관리 방향을 바탕으로 프로그램을 구성합니다.",
          ],
        },
        {
          id: "care-03",
          title: "Special Care",
          body: "특정 고민을 집중적으로 관리하는 프로그램",
          image: "/file.svg",
          backgroundImage: "/images/story-cards-background.png",
          detailTitle: "Special Care",
          detailBody: ["개인별 고민에 따라 집중 관리 항목을 조정합니다."],
        },
      ],
    },
    {
      type: "cta",
      title: "오늘의 피부 상태, 함께 살펴볼까요?",
      description: "현재 고민과 원하는 방향을 보내주시면 맞춤 상담을 시작합니다.",
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
      ],
    },
    {
      type: "footer",
      businessName: "건하뷰티",
      contactText: `${contact.phone} · ${contact.address}`,
      notice: "표시된 연락처와 주소는 샘플 데이터입니다. 실제 정보는 데이터 파일에서 교체하세요.",
    },
  ],
};
