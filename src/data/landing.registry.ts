import { companyBLandingPage } from "@/data/landing.company-b";
import { geonhaBeautyLandingPage } from "@/data/landing.geonha-beauty";
import type { LandingPage } from "@/lib/landing/landing.types";

export const landingPageRegistry = {
  "geonha-beauty": geonhaBeautyLandingPage,
  "company-b": companyBLandingPage,
} as const satisfies Record<string, LandingPage>;

export type LandingPageSlug = keyof typeof landingPageRegistry;

export const defaultLandingPageSlug: LandingPageSlug = "geonha-beauty";
