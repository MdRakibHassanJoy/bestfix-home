import type { Metadata } from "next";
import { ServicePageContent } from "@/components/sections/ServicePageContent";

export const metadata: Metadata = {
  title: "Decks, Grounds & Outdoor Living Maintenance | BestFix Home",
  description:
    "Nationwide exterior grounds and outdoor living care: deck repairs, patio maintenance, irrigation tune-ups, and seasonal property cleanups.",
  alternates: {
    canonical: "/services/landscaping",
  },
  openGraph: {
    title: "Decks, Grounds & Outdoor Living Maintenance | BestFix Home",
    description:
      "Nationwide exterior grounds and outdoor living care: deck repairs, patio maintenance, irrigation tune-ups, and seasonal property cleanups.",
    url: "https://bestfixhome.com/services/landscaping",
  },
};

export default function LandscapingPage() {
  return (
    <ServicePageContent
      title="Decks & Grounds Maintenance"
      intro="Outdoor living spaces and manicured grounds elevate your property's value and daily enjoyment. BestFix Home provides structural deck care, patio restoration, irrigation servicing, and seasonal cleanups tailored to your residence."
      currentSlug="landscaping"
      jobs={[
        "Architectural deck repairs, board replacement, and railing reinforcement",
        "Low-voltage landscape and step lighting installation",
        "Irrigation system diagnostics, head replacement, and seasonal winterizing",
        "Spring grounds cleanup — debris clearing, bed edging, and fresh mulch",
        "Fall property preparation — leaf clearing, aeration, and winterization",
        "Shrub pruning, perimeter hedging, and ornamental plant care",
        "Paver patio re-sanding, weed barrier repair, and power washing",
        "Surface drainage improvements and downspout emitter extension",
      ]}
      included={[
        "Site inspection of ground slope, irrigation pressure, and decking soundness",
        "Commercial-grade materials, hardware, and outdoor sealants",
        "Complete green waste removal and spotless hardscape sweeping",
        "Detailed seasonal recommendations for ongoing exterior health",
      ]}
      notIncluded={[
        "Large commercial tree removal or crane-assisted arbor work",
        "In-ground swimming pool construction or structural gunite repair",
        "Commercial golf course turf management",
        "Structural retaining walls exceeding 4 feet in height",
      ]}
      processNote="Our regional grounds director walks the exterior perimeter, evaluates irrigation timers and deck framing, and provides a clear itemized quote for seasonal or one-time project work."
      licensingNote="Outdoor electrical lighting and backflow irrigation devices are installed in compliance with municipal environmental and plumbing codes."
      faqs={[
        { id: "l1", question: "Can you reinforce an older deck rather than replacing it?", answer: "Yes. If the underlying support posts and joists remain sound, we can replace surface decking boards, install hidden fasteners, and update railings to extend its life by a decade." },
        { id: "l2", question: "Do you repair broken underground sprinkler lines?", answer: "Yes. We locate buried pipe leaks, replace cracked PVC or poly lines, repair faulty control valves, and reprogram digital smart controllers." },
        { id: "l3", question: "What seasonal cleanups do you offer?", answer: "We provide comprehensive spring prep (bed edging, pruning, fresh mulch) and fall cleanups (leaf removal, plant cutbacks, irrigation line blowouts)." },
        { id: "l4", question: "Are grounds and deck projects backed by your guarantee?", answer: "Yes. All structural repairs, hardware installations, and plumbing lines are covered by our 1-Year Craftsmanship Guarantee." },
      ]}
    />
  );
}
