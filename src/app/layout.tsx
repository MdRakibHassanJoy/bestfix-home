import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Source_Sans_3, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomBar } from "@/components/layout/MobileBottomBar";
import { SkipLink } from "@/components/layout/SkipLink";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bestfixhome.com"),
  title: {
    default: "BestFix Home | Nationwide Home Repair, Maintenance & Remodeling",
    template: "%s | BestFix Home",
  },
  description:
    "Reliable residential property maintenance, emergency trade repairs, and turnkey home remodeling delivered nationwide by vetted master craftsmen with guaranteed upfront pricing.",
  keywords: [
    "home repairs",
    "remodeling contractors",
    "property maintenance",
    "licensed tradespeople",
    "emergency plumbing",
    "electrical diagnostics",
    "kitchen remodel",
    "spa bathroom renovations",
    "deck rebuild",
    "finished basement lounge",
    "itemized upfront pricing",
    "BestFix Home",
    "nationwide home services",
  ],
  authors: [{ name: "BestFix Home Solutions", url: "https://bestfixhome.com" }],
  creator: "BestFix Home",
  publisher: "BestFix Home Solutions LLC",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bestfixhome.com",
    siteName: "BestFix Home",
    title: "BestFix Home | Nationwide Home Repair, Maintenance & Remodeling",
    description:
      "Reliable residential property maintenance, emergency trade repairs, and turnkey home remodeling delivered nationwide by vetted master craftsmen with guaranteed upfront pricing.",
    images: [
      {
        url: "/assets/brand/customer-logo.png",
        width: 1200,
        height: 630,
        alt: "BestFix Home Nationwide Craftsmanship",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BestFix Home | Nationwide Home Repair & Remodeling",
    description:
      "Reliable residential property maintenance and turnkey remodeling delivered nationwide by vetted master craftsmen with guaranteed upfront pricing.",
    images: ["/assets/brand/customer-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/assets/brand/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/assets/brand/icon-192x192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF8F5" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const rootBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://bestfixhome.com/#business",
    name: "BestFix Home",
    legalName: "BestFix Home Solutions LLC",
    url: "https://bestfixhome.com",
    logo: "https://bestfixhome.com/assets/brand/customer-logo.png",
    image: "https://bestfixhome.com/assets/images/decorative/modern_estate_interior.jpg",
    telephone: "+14842725220",
    email: "info@bestfixhome.com",
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Debit Card, ACH Transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: "405 State Highway 121, Suite A250",
      addressLocality: "Lewisville",
      addressRegion: "TX",
      postalCode: "75067",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.0462,
      longitude: -96.9942,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "128",
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Residential Maintenance & Remodeling Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Gourmet Kitchen Remodeling",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Spa Master Bathroom Renovation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Finished Basement Living",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Architectural Deck Rebuilds",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Plumbing & Water Systems Diagnostics",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Electrical & Breaker Panel Upgrades",
          },
        },
      ],
    },
    sameAs: ["https://bestfixhome.com"],
  };

  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${sourceSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileBottomBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(rootBusinessSchema),
          }}
        />
      </body>
    </html>
  );
}
