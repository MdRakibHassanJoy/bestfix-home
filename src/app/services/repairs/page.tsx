import type { Metadata } from "next";
import { ServicePageContent } from "@/components/sections/ServicePageContent";

export const metadata: Metadata = {
  title: "General Repairs — Plumbing, Electrical, HVAC | BestFix Home",
  description:
    "BestFix Home provides nationwide plumbing repairs, electrical diagnostics, and HVAC servicing. Insured trade specialists with 24/7 emergency dispatch.",
  alternates: {
    canonical: "/services/repairs",
  },
  openGraph: {
    title: "General Repairs — Plumbing, Electrical, HVAC | BestFix Home",
    description:
      "Nationwide plumbing repairs, electrical diagnostics, and HVAC servicing handled by certified master tradespeople.",
    url: "https://bestfixhome.com/services/repairs",
  },
};

export default function RepairsPage() {
  return (
    <ServicePageContent
      title="General Repairs"
      intro="Plumbing, electrical, and HVAC issues handled quickly and professionally. From emergency pipe leaks and circuit diagnostics to heating and cooling tune-ups, our certified master technicians fix it right the first time."
      jobs={[
        "Plumbing repairs (leaks, clogs, dripping faucets, running toilets)",
        "Drain cleaning, snaking, and camera inspection",
        "Water heater maintenance and fixture replacements",
        "Electrical diagnostics (outlets, breakers, light fixtures)",
        "200A panel upgrades and dedicated circuits",
        "Ceiling fan and ventilation installation",
        "HVAC seasonal maintenance and filter replacement",
        "Smart thermostat installation and wiring",
        "Garbage disposal repair and replacement",
      ]}
      included={[
        "Diagnosis and upfront itemized quote",
        "Labor and commercial-grade replacement parts",
        "Cleanup and site containment after work",
        "Written summary and 1-Year Craftsmanship Guarantee",
      ]}
      notIncluded={[
        "Municipal main sewer line street excavations",
        "High-voltage utility line street connections",
        "Full commercial central chiller rebuilds",
        "Work requiring specialized civil engineering",
      ]}
      processNote="We begin with a thorough on-site diagnostic, walk you through the issue, and provide an upfront written estimate before any work begins. Most repairs are resolved in a single visit."
      licensingNote="All electrical and plumbing work is self-performed or supervised by licensed master tradespeople in compliance with state and municipal safety codes."
      faqs={[
        { id: "r1", question: "Do you handle emergency repair calls?", answer: "Yes. Our 24/7 emergency dispatch desk operates around the clock for burst pipes, electrical failures, and hazardous property conditions. Call (484) 272-5220." },
        { id: "r2", question: "How quickly can you dispatch a technician?", answer: "Standard service calls are typically scheduled within 24 to 48 hours. Emergency calls receive rapid same-day mobilization." },
        { id: "r3", question: "What is your warranty on repairs?", answer: "We stand behind our work with a 1-Year Craftsmanship Guarantee. If any installation or repair we perform fails within 12 months, we fix it free of charge." },
        { id: "r4", question: "Are your repair technicians licensed?", answer: "Yes. Our trade technicians hold relevant trade licenses and certifications according to local jurisdiction requirements, and all trade work complies with governing trade codes." },
      ]}
      currentSlug="repairs"
    />
  );
}
