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

function renderSection(section: LandingSection, key: string) {
  switch (section.type) {
    case "hero":
      return <HeroSection key={key} section={section} />;
    case "video":
      return <VideoSection key={key} section={section} />;
    case "text":
      return <TextBlockSection key={key} section={section} />;
    case "storyCards":
      return <StoryCardSection key={key} section={section} />;
    case "cta":
      return <CTASection key={key} section={section} />;
    case "footer":
      return <FooterSection key={key} section={section} />;
  }
}

function isIntroSection(section: LandingSection) {
  return (
    section.type === "hero" || section.type === "video" || section.type === "text"
  );
}

function getSectionKey(section: LandingSection, index: number) {
  if ("id" in section && typeof section.id === "string" && section.id.length > 0) {
    return section.id;
  }

  return `${index}-${section.type}`;
}

export function LandingRenderer({ page }: LandingRendererProps) {
  const introSections: LandingSection[] = [];
  const remainingSections: LandingSection[] = [];
  let introBackgroundImage = "";
  let collectingIntro = true;

  for (const section of page.sections) {
    if (collectingIntro && isIntroSection(section)) {
      introSections.push(section);

      if (section.type === "hero" && !introBackgroundImage) {
        introBackgroundImage = section.backgroundImage;
      }

      continue;
    }

    collectingIntro = false;
    remainingSections.push(section);
  }

  return (
    <>
      <main>
        {introSections.length ? (
          <section className="relative isolate bg-[#16251d] text-white">
            {introBackgroundImage ? (
              <div
                className="pointer-events-none fixed inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${introBackgroundImage})` }}
              />
            ) : null}
            <div className="relative z-10 mx-auto w-full max-w-5xl px-5 sm:px-8 lg:px-10">
              <section className="flex h-svh items-end justify-center pb-10 sm:pb-12">
                <div className="text-center text-white">
                  <p className="text-sm font-medium tracking-[0.18em] text-white/85">
                    스크롤을 내려주세요.
                  </p>
                  <div className="mt-4 flex justify-center">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-6 w-6 text-white/85"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 5v14" />
                      <path d="m6 13 6 6 6-6" />
                    </svg>
                  </div>
                </div>
              </section>
              {introSections.map((section, index) =>
                renderSection(section, getSectionKey(section, index)),
              )}
            </div>
          </section>
        ) : null}
        {remainingSections.length ? (
          <div className="relative z-20">
            {remainingSections.map((section, index) =>
              renderSection(section, getSectionKey(section, index)),
            )}
          </div>
        ) : null}
      </main>
      <ContactFloatingButtons actions={page.floatingActions} />
    </>
  );
}
