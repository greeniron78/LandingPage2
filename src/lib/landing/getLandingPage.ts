import { landingPageRegistry } from "@/data/landing.registry";
import type { LandingPageSlug } from "@/data/landing.registry";
import type { LandingPage } from "./landing.types";

export async function getLandingPage(slug: string): Promise<LandingPage | null> {
  return landingPageRegistry[slug as LandingPageSlug] ?? null;
}
