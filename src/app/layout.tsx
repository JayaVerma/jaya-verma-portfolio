import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { portfolio } from "@/data/portfolio";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const { personal } = portfolio;
const siteUrl = "https://jaya-verma.vercel.app";
const description =
  "Jaya Verma is an AI Engineer building production LLM, agentic, and RAG systems — Anthropic & Gemini APIs, GCP, Next.js. MS in Data Intelligence, USF.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${personal.name} — AI Engineer`,
    template: `%s — ${personal.name}`,
  },
  description,
  keywords: [
    "Jaya Verma",
    "AI Engineer",
    "LLM Engineer",
    "Agentic AI",
    "RAG",
    "Machine Learning Engineer",
    "Anthropic",
    "GCP",
    "Next.js",
  ],
  authors: [{ name: personal.name, url: siteUrl }],
  creator: personal.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${personal.name} — AI Engineer`,
    description,
    siteName: `${personal.name} · Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} — AI Engineer`,
    description,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  jobTitle: "AI Engineer",
  email: `mailto:${personal.email}`,
  url: siteUrl,
  address: { "@type": "PostalAddress", addressLocality: personal.location },
  sameAs: [personal.linkedin, personal.github],
  alumniOf: portfolio.education.map((e) => ({
    "@type": "CollegeOrUniversity",
    name: e.institution,
  })),
  knowsAbout: [
    "Large Language Models",
    "Agentic AI",
    "Retrieval-Augmented Generation",
    "Machine Learning",
    "Cloud Engineering",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
