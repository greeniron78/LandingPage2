"use client";

import Image from "next/image";
import { useState } from "react";
import { SectionContainer } from "@/components/common/SectionContainer";
import type { LandingStoryCardSection } from "@/lib/landing/landing.types";

type StoryCardSectionProps = {
  section: LandingStoryCardSection;
};

function getCardKey(card: LandingStoryCardSection["cards"][number], index: number) {
  return card.id ?? card.title ?? `${index}`;
}

export function StoryCardSection({ section }: StoryCardSectionProps) {
  const headingId = "landing-story-title";
  const isImageBackground = section.backgroundMode === "image" && section.backgroundImage;
  const wrapperClassName =
    section.backgroundMode === "image"
      ? "relative overflow-hidden bg-cover bg-center bg-no-repeat py-6 sm:py-8"
      : "relative overflow-hidden bg-transparent py-6 sm:py-8";
  const [flippedCardKey, setFlippedCardKey] = useState<string | null>(null);

  return (
    <section
      aria-labelledby={headingId}
      className={wrapperClassName}
      style={
        isImageBackground
          ? { backgroundImage: `url(${section.backgroundImage})` }
          : undefined
      }
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
          {section.cards.map((card, index) => {
            const cardKey = getCardKey(card, index);
            const isFlipped = flippedCardKey === cardKey;

            return (
              <article
                key={cardKey}
                className="h-[55svh] min-h-[34svh] sm:min-h-[55svh] [perspective:1200px]"
              >
                <div
                  className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] ${
                    isFlipped ? "[transform:rotateY(180deg)]" : ""
                  }`}
                >
                  <div className="absolute inset-0 rounded-[28px] bg-white/90 p-4 text-[#16251d] shadow-2xl shadow-black/12 ring-1 ring-black/5 backdrop-blur [backface-visibility:hidden] sm:p-5">
                    <div className="flex h-full flex-col">
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
                      <div className="flex flex-1 items-center justify-center">
                        <div className="relative w-full max-w-[11rem] aspect-[4/3] overflow-hidden rounded-2xl bg-[#dfe7df]">
                          <Image src={card.image} alt="" fill className="object-contain p-6" />
                        </div>
                      </div>
                      <div className="mt-auto pt-5">
                        <button
                          type="button"
                          className="inline-flex h-10 items-center justify-center rounded-full border border-[#16251d]/12 px-4 text-sm font-semibold text-[#16251d] transition hover:bg-[#f5f1e8]"
                          onClick={() => setFlippedCardKey(cardKey)}
                        >
                          이야기 보기
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 rounded-[28px] bg-white p-5 text-[#16251d] shadow-2xl shadow-black/12 ring-1 ring-black/5 [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-6">
                    <div className="flex h-full flex-col">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8e9b91]">
                        매물문의 0{index + 1}
                      </p>
                      <h3 className="mt-4 text-lg font-black leading-tight sm:text-xl">
                        “{card.detailTitle ?? card.title}”
                      </h3>
                      <div className="mt-5 space-y-4 text-sm leading-7 text-[#526156] sm:text-base">
                        {(card.detailBody?.length ? card.detailBody : [card.body]).map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                      <button
                        type="button"
                        className="mt-auto inline-flex h-10 items-center justify-center self-start rounded-full border border-[#16251d]/12 px-4 text-sm font-semibold text-[#16251d] transition hover:bg-[#f5f1e8]"
                        onClick={() => setFlippedCardKey(null)}
                      >
                        돌아가기
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}
