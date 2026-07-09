import Image from "next/image";
import { ActionButton } from "@/components/common/ActionButton";
import type { LandingHeroSection } from "@/lib/landing/landing.types";

type HeroSectionProps = {
  section: LandingHeroSection;
};

export function HeroSection({ section }: HeroSectionProps) {
  return (
    <section className="relative min-h-[88svh] overflow-hidden bg-[#16251d] px-5 py-8 text-white sm:px-8 lg:px-10">
      <Image
        src={section.backgroundImage}
        alt=""
        fill
        priority
        className="object-cover opacity-18 mix-blend-screen"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,37,29,0.72),rgba(22,37,29,0.96))]" />
      <div className="relative z-10 mx-auto flex min-h-[calc(88svh-4rem)] w-full max-w-5xl flex-col justify-end pb-12 pt-24">
        {section.eyebrow ? (
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#f2c66d]">
            {section.eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-3xl text-4xl font-black leading-tight text-balance sm:text-6xl">
          {section.title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/82 sm:text-lg">
          {section.subtitle}
        </p>
        <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
          {section.actions.map((action, index) => (
            <ActionButton
              key={`${action.type}-${action.label}`}
              action={action}
              variant={index === 0 ? "primary" : "ghost"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
