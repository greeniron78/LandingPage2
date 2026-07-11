import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingRenderer } from "@/components/landing/LandingRenderer";
import { landingPageRegistry } from "@/data/landing.registry";
import { getLandingPage } from "@/lib/landing/getLandingPage";

type LandingPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return Object.keys(landingPageRegistry).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: LandingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const landingPage = await getLandingPage(slug);

  if (!landingPage) {
    notFound();
  }

  return {
    title: landingPage.seo.title,
    description: landingPage.seo.description,
  };
}

export default async function LandingPage({ params }: LandingPageProps) {
  const { slug } = await params;
  const landingPage = await getLandingPage(slug);

  if (!landingPage) {
    notFound();
  }

  return <LandingRenderer page={landingPage} />;
}
