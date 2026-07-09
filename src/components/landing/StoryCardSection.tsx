import Image from "next/image";
import { SectionContainer } from "@/components/common/SectionContainer";
import type { LandingStoryCardSection } from "@/lib/landing/landing.types";

type StoryCardSectionProps = {
  section: LandingStoryCardSection;
};

export function StoryCardSection({ section }: StoryCardSectionProps) {
  const headingId = "landing-story-title";

  return (
    <section
      aria-labelledby={headingId}
      className="relative overflow-hidden bg-transparent bg-cover bg-center bg-no-repeat py-6 sm:py-8"
      style={{ backgroundImage: `url(${section.backgroundImage})` }}
    >
      <SectionContainer ariaLabelledby={headingId} className="relative z-10" innerClassName="space-y-6">
        <div className="rounded-[28px] bg-white/88 p-5 text-[#16251d] shadow-2xl shadow-black/10 backdrop-blur sm:p-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#b7791f]">
            Story Cards
          </p>
          <h2 id={headingId} className="text-3xl font-black leading-tight sm:text-5xl">
            {section.title}
          </h2>
          {section.description ? (
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#526156] sm:text-lg">
              {section.description}
            </p>
          ) : null}
        </div>
        <div className="grid grid-cols-1 gap-5 pb-10 md:grid-cols-2 lg:grid-cols-3">
          {section.cards.map((card, index) => (
            <article
              key={card.title}
              className="min-h-[34svh] rounded-[28px] bg-white/90 p-4 text-[#16251d] shadow-2xl shadow-black/12 ring-1 ring-black/5 backdrop-blur sm:min-h-[28svh] sm:p-5"
            >
              <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_9rem] sm:items-end">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8e9b91]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 text-xl font-black leading-tight sm:text-2xl">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#526156] sm:text-base sm:leading-7">
                    {card.body}
                  </p>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#dfe7df]">
                  <Image src={card.image} alt="" fill className="object-contain p-6" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
