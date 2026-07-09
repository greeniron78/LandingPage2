import { ContactFloatingButtons } from "./ContactFloatingButtons";
import { CTASection } from "./CTASection";
import { FooterSection } from "./FooterSection";
import { HeroSection } from "./HeroSection";
import { StoryCardSection } from "./StoryCardSection";
import { TextBlockSection } from "./TextBlockSection";
import { VideoSection } from "./VideoSection";
import type { LandingPage, LandingSection } from "@/lib/landing/landing.types";

type LandingRendererProps = {
  page: LandingPage;
};

function renderSection(section: LandingSection) {
  switch (section.type) {
    case "hero":
      return <HeroSection key={section.type} section={section} />;
    case "video":
      return <VideoSection key={section.type} section={section} />;
    case "text":
      return <TextBlockSection key={section.type} section={section} />;
    case "storyCards":
      return <StoryCardSection key={section.type} section={section} />;
    case "cta":
      return <CTASection key={section.type} section={section} />;
    case "footer":
      return <FooterSection key={section.type} section={section} />;
  }
}

export function LandingRenderer({ page }: LandingRendererProps) {
  return (
    <>
      <main>{page.sections.map(renderSection)}</main>
      <ContactFloatingButtons actions={page.floatingActions} />
    </>
  );
}
