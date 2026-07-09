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
        {hero ? (
          <section className="relative isolate min-h-[200svh] bg-[#16251d] text-white">
            <div
              className="pointer-events-none fixed inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${hero.backgroundImage})` }}
            />
            <div className="relative z-10 mx-auto w-full max-w-5xl px-5 pt-6 sm:px-8 sm:pt-8 lg:px-10">
                <HeroSection section={hero} />
                {storyVideo ? <VideoSection section={storyVideo} /> : null}
                {storyText ? <TextBlockSection section={storyText} /> : null}
            </div>
          </section>
        ) : null}
        {storyCards ? (
          <div className="relative z-20">
            <StoryCardSection section={storyCards} />
          </div>
        ) : null}
        {cta ? renderSection(cta) : null}
        {footer ? renderSection(footer) : null}
      </main>
      <ContactFloatingButtons actions={page.floatingActions} />
    </>
  );
}
