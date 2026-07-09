export type LandingActionType = "link" | "phone" | "kakao" | "map" | "youtube";

export type LandingAction = {
  type: LandingActionType;
  label: string;
  href: string;
  ariaLabel?: string;
};

export type CTAButton = LandingAction;

export type LandingHeroSection = {
  type: "hero";
  eyebrow?: string;
  title: string;
  subtitle: string;
  backgroundImage: string;
  actions: LandingAction[];
};

export type LandingVideoSection = {
  type: "video";
  title: string;
  description?: string;
  youtubeUrl: string;
};

export type LandingTextBlockSection = {
  type: "text";
  eyebrow?: string;
  title: string;
  body: string;
};

export type LandingStoryCard = {
  title: string;
  body: string;
  image: string;
};

export type LandingStoryCardSection = {
  type: "storyCards";
  title: string;
  description?: string;
  backgroundImage: string;
  cards: LandingStoryCard[];
};

export type LandingCTASection = {
  type: "cta";
  title: string;
  description: string;
  actions: LandingAction[];
};

export type LandingFooterSection = {
  type: "footer";
  businessName: string;
  contactText: string;
  notice: string;
};

export type LandingSection =
  | LandingHeroSection
  | LandingVideoSection
  | LandingTextBlockSection
  | LandingStoryCardSection
  | LandingCTASection
  | LandingFooterSection;

export type LandingPage = {
  slug: string;
  seo: {
    title: string;
    description: string;
  };
  contact: {
    phone: string;
    kakaoChannelUrl: string;
    mapUrl: string;
    address: string;
  };
  sections: LandingSection[];
  floatingActions: LandingAction[];
};
