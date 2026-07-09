import { ContactFloatingButtons } from "./ContactFloatingButtons";
import { CTASection } from "./CTASection";
import { FooterSection } from "./FooterSection";
import { HeroSection } from "./HeroSection";
import { StoryCardSection } from "./StoryCardSection";
import { TextBlockSection } from "./TextBlockSection";
import { VideoSection } from "./VideoSection";
import type {
  LandingPage,
  LandingSection,
  LandingStoryCardSection,
  LandingTextBlockSection,
  LandingVideoSection,
} from "@/lib/landing/landing.types";

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

function isStoryVideo(section: LandingSection): section is LandingVideoSection {
  return section.type === "video";
}

function isStoryText(section: LandingSection): section is LandingTextBlockSection {
  return section.type === "text";
}

function isStoryCards(section: LandingSection): section is LandingStoryCardSection {
  return section.type === "storyCards";
}

export function LandingRenderer({ page }: LandingRendererProps) {
  const hero = page.sections.find((section) => section.type === "hero");
  const storyVideo = page.sections.find(isStoryVideo);
  const storyText = page.sections.find(isStoryText);
  const storyCards = page.sections.find(isStoryCards);
  const cta = page.sections.find((section) => section.type === "cta");
  const footer = page.sections.find((section) => section.type === "footer");

  return (
    <>
      <main>
        {hero ? renderSection(hero) : null}
        {storyCards ? (
          <section className="relative isolate overflow-hidden bg-[#0f1813] text-white">
            <div
              className="pointer-events-none fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${storyCards.backgroundImage})` }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,24,19,0.72),rgba(15,24,19,0.96))]" />
            </div>
            <div className="relative z-10 mx-auto w-full max-w-5xl px-5 py-6 sm:px-8 sm:py-8 lg:px-10">
              {storyVideo ? <VideoSection section={storyVideo} /> : null}
              {storyText ? <TextBlockSection section={storyText} /> : null}
              <StoryCardSection section={storyCards} />
            </div>
          </section>
        ) : null}
        {cta ? renderSection(cta) : null}
        {footer ? renderSection(footer) : null}
      </main>
      <ContactFloatingButtons actions={page.floatingActions} />
    </>
  );
}
