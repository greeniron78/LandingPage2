import Image from "next/image";
import { SectionContainer } from "@/components/common/SectionContainer";
import type { LandingStoryCardSection } from "@/lib/landing/landing.types";

type StoryCardSectionProps = {
  section: LandingStoryCardSection;
};

export function StoryCardSection({ section }: StoryCardSectionProps) {
  const headingId = "landing-story-title";

  return (
    <SectionContainer ariaLabelledby={headingId} className="bg-[#eef3ee]">
      <div className="max-w-2xl">
        <h2 id={headingId} className="text-2xl font-black text-[#16251d] sm:text-4xl">
          {section.title}
        </h2>
        {section.description ? (
          <p className="mt-3 text-base leading-7 text-[#526156]">{section.description}</p>
        ) : null}
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {section.cards.map((card) => (
          <article
            key={card.title}
            className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-[#16251d]/8"
          >
            <div className="relative aspect-[4/3] bg-[#dfe7df]">
              <Image src={card.image} alt="" fill className="object-contain p-10" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-black text-[#16251d]">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#526156]">{card.body}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
