import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_URL } from "@/components/about-section";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    "R-GoL-EE — Free Online Conway's Game of Life Simulator (Custom B/S Rules)",
  description:
    "Play Conway's Game of Life free in your browser. Neon cells that age through the color spectrum, editable B/S rules with 23 presets, 44 pattern modules, and a pannable zoomable canvas. No install, no ads.",
  keywords: [
    "game of life",
    "conway's game of life",
    "cellular automaton",
    "game of life simulator",
    "b/s rule",
    "cellular automata online",
    "glider",
    "gosper glider gun",
    "javascript game",
    "html5 canvas",
    "zero dependency",
  ],
  authors: [{ name: "Rahan", url: "https://github.com/rahan91" }],
  creator: "Rahan",
  category: "games",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "R-GoL-EE",
    title: "R-GoL-EE — Conway's Game of Life Simulator",
    description:
      "A neon Conway's Game of Life with color-aging cells, any B/S rule, and 44 pattern modules. Runs in your browser — nothing to install.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "R-GoL-EE — Conway's Game of Life Simulator",
    description:
      "A neon Conway's Game of Life with color-aging cells, any B/S rule, and 44 pattern modules.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#04060d",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "R-GoL-EE",
  alternateName: "Rahan's Game of Life Extended Edition",
  url: SITE_URL,
  applicationCategory: "GameApplication",
  applicationSubCategory: "Cellular automaton simulator",
  operatingSystem: "Any (web browser)",
  browserRequirements: "Requires JavaScript",
  description:
    "Free online Conway's Game of Life simulator with color-aging cells, editable B/S rules, 23 rule presets, 44 pattern modules, and auto-pause stability detection.",
  genre: ["Simulation", "Educational", "Puzzle"],
  author: { "@type": "Person", name: "Rahan", url: "https://github.com/rahan91" },
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
