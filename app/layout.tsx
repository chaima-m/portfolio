import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

// TODO: replace with your real domain once deployed
const SITE_URL =
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://chaima-mekhloufi.vercel.app";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID; // optional, e.g. G-XXXXXXXXXX

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Chaima Mekhloufi - AI & Data Science Engineer | LLM · RAG · Kubernetes",
  description:
    "Portfolio of Chaima Mekhloufi, AI & Data Science engineering student at ENSIA (Algiers). On-premise LLMs, RAG assistants, Docker and Kubernetes microservices.",
  keywords: [
    "Chaima Mekhloufi",
    "AI Engineer",
    "Data Science",
    "LLM",
    "RAG",
    "Docker",
    "Kubernetes",
    "Python",
    "ENSIA",
    "Algeria",
    "Portfolio",
  ],
  openGraph: {
    title: "Chaima Mekhloufi - AI & Data Science Engineer",
    description:
      "LLM, RAG and containerized AI systems. Final-year engineering student at ENSIA, Algiers.",
    images: "/OpenGraph.jpg",
  },
  alternates: { canonical: SITE_URL },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Chaima Mekhloufi",
              jobTitle: "AI & Data Science Engineer",
              url: SITE_URL,
              sameAs: [
                "https://www.linkedin.com/in/chaima-mekhloufi-1b2007299/",
                "https://github.com/chaima-m",
              ],
            }),
          }}
        />
        {GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            ></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden scroll-smooth`}
      >
        <SpeedInsights />
        <Analytics />
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
