import type { LandingFooterSection } from "@/lib/landing/landing.types";

type FooterSectionProps = {
  section: LandingFooterSection;
};

export function FooterSection({ section }: FooterSectionProps) {
  return (
    <footer className="bg-[#0f1813] px-5 pb-28 pt-10 text-white md:pb-10">
      <div className="mx-auto w-full max-w-5xl">
        <p className="text-lg font-black">{section.businessName}</p>
        <address className="mt-3 not-italic text-sm leading-6 text-white/72">
          {section.contactText}
        </address>
        <p className="mt-4 text-xs leading-5 text-white/50">{section.notice}</p>
      </div>
    </footer>
  );
}
