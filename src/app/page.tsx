import { redirect } from "next/navigation";
import { defaultLandingPageSlug } from "@/data/landing.registry";

export default function Home() {
  redirect(`/landing/${defaultLandingPageSlug}`);
}
