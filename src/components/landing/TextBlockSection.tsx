import { SectionContainer } from "@/components/common/SectionContainer";
import type { LandingTextBlockSection } from "@/lib/landing/landing.types";

type TextBlockSectionProps = {
  section: LandingTextBlockSection;
};

export function TextBlockSection({ section }: TextBlockSectionProps) {
  const headingId = "landing-text-title";

  return (
    <SectionContainer ariaLabelledby={headingId} className="bg-transparent py-6 sm:py-8">
      <div className="rounded-[28px] bg-white/88 p-5 text-[#16251d] shadow-2xl shadow-black/10 backdrop-blur sm:p-6">
        <div className="max-w-3xl">
          {section.eyebrow ? (
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#b7791f]">
              {section.eyebrow}
            </p>
          ) : null}
          <h2 id={headingId} className="text-3xl font-black leading-tight sm:text-5xl">
            {section.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#3f4b43]">{section.body}</p>
        </div>
      </div>
    </SectionContainer>
  );
}
