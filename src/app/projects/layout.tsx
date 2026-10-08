import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Craftsmanship Portfolio & Verified Reviews | BestFix Home",
  description:
    "Explore authentic before-and-after home remodeling transformations, interactive comparison sliders, and verified customer reviews across our nationwide service network.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bestfixhome.com/projects",
    siteName: "BestFix Home",
    title: "Craftsmanship Portfolio & Verified Reviews | BestFix Home",
    description:
      "Explore authentic before-and-after home remodeling transformations and verified customer reviews across our nationwide service network.",
    images: [
      {
        url: "/assets/images/projects/kitchen-after.jpg",
        width: 1200,
        height: 630,
        alt: "BestFix Home Authentic Craftsmanship Transformations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Craftsmanship Portfolio & Reviews | BestFix Home",
    description:
      "Explore authentic before-and-after transformations and verified customer reviews across our nationwide network.",
    images: ["/assets/images/projects/kitchen-after.jpg"],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://bestfixhome.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects & Reviews",
        item: "https://bestfixhome.com/projects",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
