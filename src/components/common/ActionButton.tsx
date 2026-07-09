import {
  ExternalLink,
  MapPin,
  MessageCircle,
  Phone,
  PlayCircle,
} from "lucide-react";
import type { ComponentType } from "react";
import type { LandingAction } from "@/lib/landing/landing.types";
import { getActionHref } from "@/lib/landing/landing.actions";

type ActionButtonProps = {
  action: LandingAction;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const actionIcons: Record<LandingAction["type"], ComponentType<{ className?: string }>> = {
  kakao: MessageCircle,
  phone: Phone,
  map: MapPin,
  youtube: PlayCircle,
  link: ExternalLink,
};

const variants = {
  primary:
    "bg-[#16251d] text-white shadow-lg shadow-black/10 hover:bg-[#243c30] focus-visible:outline-[#16251d]",
  secondary:
    "border border-[#16251d]/15 bg-white text-[#16251d] hover:bg-[#f5f1e8] focus-visible:outline-[#16251d]",
  ghost:
    "bg-white/12 text-white ring-1 ring-white/30 backdrop-blur hover:bg-white/20 focus-visible:outline-white",
};

export function ActionButton({
  action,
  variant = "primary",
  className = "",
}: ActionButtonProps) {
  const Icon = actionIcons[action.type];

  return (
    <a
      href={getActionHref(action)}
      aria-label={action.ariaLabel ?? action.label}
      target={action.type === "phone" ? undefined : "_blank"}
      rel={action.type === "phone" ? undefined : "noreferrer"}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`}
    >
      <Icon className="size-4 shrink-0" />
      <span>{action.label}</span>
    </a>
  );
}
