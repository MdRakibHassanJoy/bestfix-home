import type { Metadata } from "next";
import { ServicePageContent } from "@/components/sections/ServicePageContent";

export const metadata: Metadata = {
  title: "Interior Maintenance — Carpentry, Hardwood & Finish Work | BestFix Home",
  description:
    "Nationwide interior property care: custom finish carpentry, hardwood flooring repairs, drywall texture matching, and appliance servicing.",
  alternates: {
    canonical: "/services/interior",
  },
  openGraph: {
    title: "Interior Maintenance — Carpentry, Hardwood & Finish Work | BestFix Home",
    description:
      "Nationwide interior property care: custom finish carpentry, hardwood flooring repairs, drywall texture matching, and appliance servicing.",
    url: "https://bestfixhome.com/services/interior",
  },
};

export default function InteriorPage() {
  return (
    <ServicePageContent
      title="Interior Maintenance"
      intro="From handcrafted architectural trim to flawless hardwood floors, the inside of your home deserves master craftsmanship. BestFix Home handles carpentry, flooring repairs, drywall finishing, and interior repairs with quiet precision."
      currentSlug="interior"
      jobs={[
        "Finish carpentry — interior doors, casing, custom shelving, and cabinetry",
        "Hardwood floor repair, board patching, and engineered plank install",
        "Drywall patching, taping, water stain repairs, and seamless texture match",
        "Crown molding, shadow boxing, and modern baseboard installation",
        "Interior painting, accent walls, and enamel trim spraying",
        "Door hanging, pocket door adjustment, and architectural hardware",
        "Built-in closet organization and custom storage systems",
        "Appliance maintenance, hookups, and leveling",
      ]}
      included={[
        "Laser measurements and subfloor/framing inspection",
        "Master finish carpentry and clean corner miters",
        "Dust-containment sheeting and floor protection runners",
        "Daily cleanup and final homeowner quality review",
      ]}
      notIncluded={[
        "Demolition of load-bearing walls without engineering sign-off",
        "Hazmat, asbestos, or lead abatement work",
        "Historic plaster restoration requiring museum conservators",
        "In-warranty proprietary manufacturer electronics diagnostics",
      ]}
      processNote="We inspect the room, review trim profiles and paint sheens, and deliver a clean written quote. Most interior repair and trim projects are completed in one to three days with zero household disruption."
      licensingNote="Interior mechanical and structural carpentry comply with national residential building codes and established craftsmanship standards."
      faqs={[
        { id: "i1", question: "Can you match existing vintage hardwood flooring?", answer: "Yes. We source matching lumber species, grain widths, and customize stain blends to match existing adjacent hardwood seamlessly." },
        { id: "i2", question: "How do you control drywall dust inside the home?", answer: "We erect zip-wall plastic barriers, run HEPA air scrubbers, and use vacuum-attached sanders to keep dust completely contained." },
        { id: "i3", question: "Do you handle custom built-ins and mudroom lockers?", answer: "Yes. Our master carpenters craft custom mudroom cubbies, media walls, floating shelves, and storage cabinetry." },
        { id: "i4", question: "Is all interior work guaranteed?", answer: "Yes. Every interior installation, trim joint, and floor repair is protected by our 1-Year Craftsmanship Guarantee." },
      ]}
    />
  );
}
