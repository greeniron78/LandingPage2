import type { Metadata } from "next";
import { bokdeokbangLanding } from "@/data/landing.bokdeokbang";
import "./globals.css";

export const metadata: Metadata = {
  title: bokdeokbangLanding.seo.title,
  description: bokdeokbangLanding.seo.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className="h-full antialiased"
    >
      <body className="min-h-full bg-white text-[#16251d]">{children}</body>
    </html>
  );
}
