import { ActionButton } from "@/components/common/ActionButton";
import { SectionContainer } from "@/components/common/SectionContainer";
import type { LandingCTASection } from "@/lib/landing/landing.types";

type CTASectionProps = {
  section: LandingCTASection;
};

export function CTASection({ section }: CTASectionProps) {
  const headingId = "landing-cta-title";

  return (
    <SectionContainer
      ariaLabelledby={headingId}
      className="bg-[#16251d] text-white"
      innerClassName="py-4"
    >
      <div className="max-w-3xl">
        <h2 id={headingId} className="text-3xl font-black leading-tight sm:text-5xl">
          {section.title}
        </h2>
        <p className="mt-4 text-base leading-7 text-white/78">{section.description}</p>
      </div>
      <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
        {section.actions.map((action, index) => (
          <ActionButton
            key={`${action.type}-${action.label}`}
            action={action}
            variant={index === 0 ? "secondary" : "ghost"}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
