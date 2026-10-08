import type { Metadata } from "next";
import { ServicePageContent } from "@/components/sections/ServicePageContent";

export const metadata: Metadata = {
  title: "Exterior Maintenance — Painting, Siding & Pressure Washing | BestFix Home",
  description:
    "Nationwide exterior property maintenance: painting, siding repairs, gutter cleaning, and power washing. Protect your curb appeal with upfront pricing.",
  alternates: {
    canonical: "/services/exterior",
  },
  openGraph: {
    title: "Exterior Maintenance — Painting, Siding & Pressure Washing | BestFix Home",
    description:
      "Nationwide exterior property maintenance: painting, siding repairs, gutter cleaning, and power washing.",
    url: "https://bestfixhome.com/services/exterior",
  },
};

export default function ExteriorPage() {
  return (
    <ServicePageContent
      title="Exterior Maintenance"
      intro="Your home's exterior endures sun, storms, and seasonal shifts. BestFix Home keeps it weatherproofed, visually striking, and structurally sound with premium painting, siding repair, and power washing services."
      currentSlug="exterior"
      jobs={[
        "Exterior painting — body, trim, shutters, and architectural accents",
        "Fiber-cement and wood siding repair and board replacement",
        "Seamless gutter cleaning, guard installation, and leak repair",
        "Downspout realignment and underground runoff routing",
        "Commercial power washing — driveways, stone patios, and siding",
        "Deck restoration, power sanding, staining, and sealing",
        "Perimeter fence repair, gate alignment, and weather coating",
        "Elastomeric caulking around exterior window and door casing",
      ]}
      included={[
        "Surface preparation (pressure wash, scraping, priming, and masking)",
        "Premium weather-resistant exterior coatings and sealants",
        "Thorough daily job site cleanup and debris haul-away",
        "Final walkthrough inspection with the homeowner",
      ]}
      notIncluded={[
        "Full structural roof trusses or teardown replacements",
        "Foundation leveling or subterranean waterproofing",
        "Arborist tree felling or large stump grinding",
        "Structural retaining wall civil engineering",
      ]}
      processNote="We perform an initial exterior perimeter inspection, document surfaces needing repair or paint prep, and provide an itemized proposal. Work is scheduled around weather conditions to ensure flawless adhesion and curing."
      licensingNote="Exterior repairs and structural siding replacements are executed in accordance with local municipal building regulations and safety standards."
      faqs={[
        { id: "e1", question: "How often should a residential exterior be repainted?", answer: "In most climates, exterior paint lasts 7 to 10 years when properly prepped and coated with premium exterior paints. High sun or coastal exposure may require refresh cycles every 5 to 7 years." },
        { id: "e2", question: "Do you offer color matching for HOA compliance?", answer: "Yes. Our team matches approved HOA palettes, custom tint formulas, or provides physical sample drawdowns for homeowner approval." },
        { id: "e3", question: "What pressure washing techniques do you use?", answer: "We use high-pressure surface cleaners for concrete and pavers, and soft-wash low-pressure techniques for siding, stucco, and wood to prevent surface etching." },
        { id: "e4", question: "Are exterior services backed by a warranty?", answer: "Yes. All labor and application workmanship is backed by our standard 1-Year Craftsmanship Guarantee." },
      ]}
    />
  );
}
