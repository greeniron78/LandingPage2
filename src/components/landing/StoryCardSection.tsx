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
  const isSectionImageMode = section.backgroundMode === "image";
  const isCardImageMode = section.cardMode === "image";
  const [flippedCardKey, setFlippedCardKey] = useState<string | null>(null);

  return (
    <section
      aria-labelledby={headingId}
      className={`relative overflow-hidden py-6 sm:py-8 ${
        isSectionImageMode ? "bg-cover bg-center bg-no-repeat" : "bg-transparent"
      }`}
      style={
        isSectionImageMode && section.backgroundImage
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
            const isImageCard = isCardImageMode && Boolean(card.backgroundImage);

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
                  <div
                    className={`absolute inset-0 overflow-hidden rounded-[28px] p-4 text-[#16251d] shadow-2xl shadow-black/12 ring-1 ring-black/5 [backface-visibility:hidden] sm:p-5 ${
                      isImageCard ? "bg-cover bg-center bg-no-repeat" : "bg-white/90 backdrop-blur"
                    } ${isFlipped ? "pointer-events-none" : "pointer-events-auto"}`}
                    style={
                      isImageCard
                        ? { backgroundImage: `url(${card.backgroundImage})` }
                        : undefined
                    }
                  >
                    {isImageCard ? (
                      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/65" />
                    ) : null}
                    <div className="flex h-full flex-col">
                      <div className="relative z-10">
                        <p
                          className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                            isImageCard ? "text-white/75" : "text-[#8e9b91]"
                          }`}
                        >
                          0{index + 1}
                        </p>
                        <h3
                          className={`mt-3 text-xl font-black leading-tight sm:text-2xl ${
                            isImageCard ? "text-white" : ""
                          }`}
                        >
                          {card.title}
                        </h3>
                        <p
                          className={`mt-3 text-sm leading-6 sm:text-base sm:leading-7 ${
                            isImageCard ? "text-white/88" : "text-[#526156]"
                          }`}
                        >
                          {card.body}
                        </p>
                      </div>
                      <div className="relative z-10 flex flex-1 items-center justify-center">
                        {isImageCard ? null : (
                          <div className="relative aspect-[4/3] w-full max-w-[11rem] overflow-hidden rounded-2xl bg-[#dfe7df]">
                            <Image src={card.image} alt="" fill className="object-contain p-6" />
                          </div>
                        )}
                      </div>
                      <div className="relative z-10 mt-auto pt-5">
                        <button
                          type="button"
                          className={`inline-flex h-10 items-center justify-center rounded-full border px-4 text-sm font-semibold transition ${
                            isImageCard
                              ? "border-white/20 bg-black/20 text-white hover:bg-black/30"
                              : "border-[#16251d]/12 text-[#16251d] hover:bg-[#f5f1e8]"
                          }`}
                          onClick={() => setFlippedCardKey(cardKey)}
                        >
                          이야기 보기
                        </button>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`absolute inset-0 rounded-[28px] bg-white p-5 text-[#16251d] shadow-2xl shadow-black/12 ring-1 ring-black/5 [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-6 ${
                      isFlipped ? "pointer-events-auto z-10" : "pointer-events-none"
                    }`}
                  >
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
