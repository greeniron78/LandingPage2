import { ActionButton } from "@/components/common/ActionButton";
import type { LandingAction } from "@/lib/landing/landing.types";

type ContactFloatingButtonsProps = {
  actions: LandingAction[];
};

export function ContactFloatingButtons({ actions }: ContactFloatingButtonsProps) {
  if (!actions.length) {
    return null;
  }

  return (
    <nav
      aria-label="빠른 상담"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-[#16251d]/10 bg-white/92 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-12px_30px_rgba(22,37,29,0.14)] backdrop-blur md:hidden"
    >
      <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
        {actions.slice(0, 2).map((action, index) => (
          <ActionButton
            key={`${action.type}-${action.label}`}
            action={action}
            variant={index === 0 ? "primary" : "secondary"}
            className="w-full px-3"
          />
        ))}
      </div>
    </nav>
  );
}
