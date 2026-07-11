import type { LandingPage } from "@/lib/landing/landing.types";

const contact = {
  phone: "001-3806-9221",
  kakaoChannelUrl: "https://pf.kakao.com/_placeholder",
  mapUrl: "https://map.kakao.com/link/search/건하뷰티",
  address: "대구 동구 동호로69 동호월드타운5층 건하뷰티",
};

export const landingPage2: LandingPage = {
  slug: "프리미엄 스킨케어 | 건하뷰티",
  seo: {
    title: "프리미엄 스킨케어 | 건하뷰티에서 시작하새요",
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
      description:
        "",
      youtubeUrl: "https://youtu.be/yNQ23sQ9pxg?si=Ei6k9gWKhYf19Hb2",
    },
    {
      type: "text",
      eyebrow: "Our Point of View",
      title: "좋은 매물보다 먼저, 좋은 기준을 세웁니다.",
      body: "가격과 평수만으로는 매일의 만족을 설명하기 어렵습니다. 포디어카페는 생활 반경, 소음, 채광, 이동 시간, 주변 분위기를 함께 묻고 기록합니다. 그래서 상담의 끝은 단순한 목록이 아니라 나에게 맞는 선택지로 좁혀집니다.",
    },
    {
      type: "storyCards",
      title: "포디어카페가 살펴보는 장면들",
      description:
        "매물을 보기 전후로 놓치기 쉬운 생활의 단서를 카드처럼 정리했습니다.",
      cardMode: "image",
      cards: [
        {
          id: "arrival",
          title: "아침의 이동",
          body: "출근 동선, 버스 간격, 지하철까지의 실제 체감 거리를 함께 확인합니다.",
          image: "/window.svg",
          backgroundImage: "/images/story-background.png",
          detailTitle: "출근과 귀가가 덜 흔들리는 집을 고릅니다.",
          detailBody: [
            "아침에 집을 나설 때 가장 먼저 확인하는 것은 역까지의 실제 체감 거리입니다.",
            "버스와 지하철의 환승 동선, 골목의 밝기, 비 오는 날의 걸음까지 같이 봅니다.",
          ],
        },
        {
          id: "light",
          title: "낮의 채광",
          body: "집 안에서 오래 머무는 시간대의 빛과 환기 흐름을 기준에 넣습니다.",
          image: "/globe.svg",
          backgroundImage: "/images/story-background.png",
          detailTitle: "낮의 공간은 빛과 바람이 먼저 말해줍니다.",
          detailBody: [
            "낮 시간에 머무는 동안 눈이 편한지, 창가의 빛이 부드러운지 확인합니다.",
            "환기 흐름과 소리의 잔향까지 같이 보면 오래 머무는 만족이 더 분명해집니다.",
          ],
        },
        {
          id: "night",
          title: "밤의 분위기",
          body: "귀가길 밝기, 주변 소음, 골목의 안정감을 생활 관점에서 살펴봅니다.",
          image: "/file.svg",
          backgroundImage: "/images/story-background.png",
          detailTitle: "밤에 더 조용해지는 집, 그리고 더 안심되는 동네를 찾습니다.",
          detailBody: [
            "늦은 시간 귀가할 때 골목이 얼마나 밝은지, 주변 소음이 어느 정도인지 함께 봅니다.",
            "낮에는 보이지 않던 생활의 결이 밤에 더 잘 드러나기 때문입니다.",
          ],
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
