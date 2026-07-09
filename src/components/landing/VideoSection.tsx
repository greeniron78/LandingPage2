import { SectionContainer } from "@/components/common/SectionContainer";
import { YoutubeEmbed } from "@/components/common/YoutubeEmbed";
import type { LandingVideoSection } from "@/lib/landing/landing.types";

type VideoSectionProps = {
  section: LandingVideoSection;
};

export function VideoSection({ section }: VideoSectionProps) {
  const headingId = "landing-video-title";

  return (
    <SectionContainer
      ariaLabelledby={headingId}
      className="bg-transparent py-6 sm:py-8"
      innerClassName="space-y-6"
    >
      <div className="rounded-[28px] bg-white/90 p-5 text-[#16251d] shadow-2xl shadow-black/10 backdrop-blur sm:p-6">
        <div className="max-w-2xl">
          <h2 id={headingId} className="text-2xl font-black sm:text-4xl">
            {section.title}
          </h2>
          {section.description ? (
            <p className="mt-3 text-base leading-7 text-[#526156]">{section.description}</p>
          ) : null}
        </div>
        <div className="mt-6">
          <YoutubeEmbed url={section.youtubeUrl} title={section.title} />
        </div>
      </div>
    </SectionContainer>
  );
}
