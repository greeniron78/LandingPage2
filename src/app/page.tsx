import { LandingRenderer } from "@/components/landing/LandingRenderer";
import { getLandingPage } from "@/lib/landing/getLandingPage";

export default async function Home() {
  const landingPage = await getLandingPage();

  return <LandingRenderer page={landingPage} />;
}
