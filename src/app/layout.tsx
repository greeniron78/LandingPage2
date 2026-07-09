import type { Metadata } from "next";
import { landingPage2 } from "@/data/landing.page2";
import "./globals.css";

export const metadata: Metadata = {
  title: landingPage2.seo.title,
  description: landingPage2.seo.description,
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
