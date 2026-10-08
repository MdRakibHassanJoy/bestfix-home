import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ServiceExplorer } from "@/components/ui/ServiceExplorer";
import { TaskMarquee } from "@/components/ui/TaskMarquee";
import { BentoStats } from "@/components/ui/BentoStats";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { serviceCategories } from "@/data/services";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CoverageMap } from "@/components/ui/CoverageMap";
import { ZipChecker } from "@/components/ui/ZipChecker";
import {
  ShieldCheck,
  Clock,
  Award,
  Phone,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Comprehensive Home Repair, Remodeling & Maintenance Services | BestFix Home",
  description:
    "Explore our complete range of residential services: emergency plumbing, electrical repairs, exterior care, turnkey kitchen & bathroom remodeling, and nationwide coverage.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bestfixhome.com/services",
    siteName: "BestFix Home",
    title: "Comprehensive Home Repair, Remodeling & Maintenance Services | BestFix Home",
    description:
      "Explore our complete range of residential services: emergency plumbing, electrical repairs, exterior care, turnkey kitchen & bathroom remodeling, and nationwide coverage.",
    images: [
      {
        url: "/assets/images/decorative/luxury_kitchen_remodel_1790306406331.jpg",
        width: 1200,
        height: 630,
        alt: "BestFix Home Services and Remodeling",
      },
    ],
  },
};

const remodelDivisions = [
  {
    title: "Chef & Gourmet Kitchens",
    description:
      "Custom cabinetry, waterfall quartz islands, architectural tile backsplashes, and integrated appliance installation.",
    image: "/assets/images/decorative/luxury_kitchen_remodel_1790306406331.jpg",
    timeline: "3 - 5 Weeks",
    items: [
      "Cabinetry Refinishing & Replacement",
      "Waterfall Calacatta Quartz",
      "Recessed & Pendant LED Circuits",
      "Under-Cabinet Lighting",
    ],
  },
  {
    title: "Spa Master Bathrooms",
    description:
      "Frameless glass walk-in showers, freestanding soaker tubs, floating dual vanities, and heated marble tile floors.",
    image: "/assets/images/decorative/master_bath_remodel_1790306423584.jpg",
    timeline: "2 - 4 Weeks",
    items: [
      "Custom Waterproof Shower Pans",
      "Dual Floating Vanities",
      "Thermostatic Valve Systems",
      "Radiant Floor Heating",
    ],
  },
  {
    title: "Finished Basements & Lounges",
    description:
      "Complete lower-level living transformations with acoustic insulation, custom wet bars, and luxury vinyl plank flooring.",
    image: "/assets/images/decorative/modern_basement_remodel_1790306780926.jpg",
    timeline: "4 - 6 Weeks",
    items: [
      "Moisture Barrier & Subfloor Leveling",
      "Wet Bar Rough-In & Countertops",
      "Smart Lighting & Media Walls",
      "Code-Compliant Egress Windows",
    ],
  },
  {
    title: "Architectural Redwood Decks",
    description:
      "Multi-tiered composite and redwood decks with perimeter low-voltage lighting, structural pier footings, and custom railing.",
    image: "/assets/images/decorative/exterior_deck_patio_1790306531871.jpg",
    timeline: "1 - 3 Weeks",
    items: [
      "Engineered Footings & Framing",
      "Hidden Fastener Composite Systems",
      "Integrated Step & Post Lighting",
      "Perimeter Privacy Screens",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Preliminary Consultation",
    desc: "We review your vision, spatial requirements, design aesthetic, and budgetary parameters.",
  },
  {
    step: "02",
    title: "Site Walkthrough & Assessment",
    desc: "Our regional superintendent inspects plumbing rough-ins, electrical capacity, and structural framing.",
  },
  {
    step: "03",
    title: "Itemized Written Proposal",
    desc: "You receive an exact line-item breakdown of labor, materials, permits, and delivery timelines.",
  },
  {
    step: "04",
    title: "Finishes & Material Selection",
    desc: "We source premium fixtures, countertops, and hardware with wholesale receipt transparency.",
  },
  {
    step: "05",
    title: "Craftsmanship Build & Containment",
    desc: "Our in-house tradespeople execute the work with dust-containment barriers and daily progress updates.",
  },
  {
    step: "06",
    title: "Final Walkthrough & 1-Year Warranty",
    desc: "We conduct a punch-list inspection together and activate your 1-Year written labor warranty.",
  },
];

export default function ServicesPage() {
  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
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
            name: "Services & Remodeling",
            item: "https://bestfixhome.com/services",
          },
        ],
      },
      {
        "@type": "Service",
        serviceType: "Residential Remodeling & Maintenance",
        provider: {
          "@type": "HomeAndConstructionBusiness",
          name: "BestFix Home",
          telephone: "+14842725220",
          url: "https://bestfixhome.com",
        },
        areaServed: {
          "@type": "Country",
          name: "United States",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Core Home Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Chef Kitchen Remodeling" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Spa Bathroom Renovation" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Finished Basement Lounge" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Composite Deck Construction" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Plumbing Repairs" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electrical & Breaker Panel Upgrades" } },
          ],
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesStructuredData) }}
      />
      {/* ── 1. Header Banner & Quick Jump Navigation ── */}
      <section className="bg-slate text-white section-padding !pb-14">
        <div className="section-container max-w-4xl text-center mx-auto space-y-4">
          <span className="text-xs font-utility uppercase tracking-widest text-flame font-semibold block">
            Nationwide Trade Services &amp; Renovations
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-white">
            Everything Your Home Needs, Handled by Masters
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            From quick trade repairs and ongoing property maintenance to turnkey whole-room remodeling, BestFix Home delivers certified tradespeople, upfront pricing, and nationwide coverage.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Get an Estimate
            </Button>
            <a
              href="tel:4842725220"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 text-sm font-body font-semibold transition-colors"
            >
              <Phone className="w-4 h-4 text-flame" />
              Call (484) 272-5220
            </a>
          </div>

          {/* Quick Sub-Navigation Anchor Pills */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-body font-medium">
            <a
              href="#explorer"
              className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-200 transition-colors"
            >
              Interactive Explorer
            </a>
            <a
              href="#trades"
              className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-200 transition-colors"
            >
              Trade Divisions
            </a>
            <a
              href="#remodeling"
              className="px-4 py-1.5 rounded-full bg-flame-button/30 hover:bg-flame-button/50 text-white border border-flame/30 transition-colors"
            >
              Turnkey Remodeling
            </a>
            <a
              href="#service-area"
              className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-200 transition-colors"
            >
              Service Area Map
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. Task Ticker Ribbon ── */}
      <TaskMarquee />

      {/* ── 3. Interactive Dual-Track Explorer ── */}
      <section id="explorer" className="bg-cloud section-padding scroll-mt-20">
        <ServiceExplorer />
      </section>

      {/* ── 4. Core Dedicated Trade Divisions ── */}
      <section id="trades" className="bg-stone section-padding scroll-mt-20">
        <div className="section-container">
          <SectionHeader
            eyebrow="Core Service Divisions"
            title="Dedicated Trade Specialties"
            description="Explore our specialized trade divisions with certified in-house technicians."
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((cat) => (
              <ServiceCard
                key={cat.id}
                title={cat.title}
                description={cat.description}
                href={cat.slug === "remodeling" ? "#remodeling" : `/services/${cat.slug}`}
                iconName={cat.iconName}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Integrated Turnkey Remodeling Section ── */}
      <section id="remodeling" className="bg-cloud section-padding border-t border-border scroll-mt-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <span className="text-xs font-utility uppercase tracking-widest text-flame font-semibold block">
              Major Renovations &amp; Additions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-charred">
              Turnkey Architectural Remodeling
            </h2>
            <p className="text-base text-iron leading-relaxed">
              For whole-home transformations and multi-trade remodels, BestFix Home provides turnkey design-build execution, dedicated job superintendents, and guaranteed fixed-price proposals.
            </p>
          </div>

          {/* 4 Remodeling Divisions Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {remodelDivisions.map((division) => (
              <div
                key={division.title}
                className="bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <Image
                    src={division.image}
                    alt={division.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-slate/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-utility font-semibold text-white border border-white/20 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-flame" />
                    <span>Typical Timeline: {division.timeline}</span>
                  </div>
                </div>

                <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-display text-charred mb-2">
                      {division.title}
                    </h3>
                    <p className="text-sm text-iron leading-relaxed mb-6">
                      {division.description}
                    </p>

                    <div className="space-y-2 border-t border-border pt-4">
                      <p className="text-xs font-utility uppercase tracking-wider text-charred font-bold">
                        Included Trade Scope:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-iron">
                        {division.items.map((item, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-flame-button shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Link
                      href={`/contact?service=${encodeURIComponent(division.title)}`}
                      className="inline-flex items-center gap-2 text-sm font-body font-bold text-flame-button hover:underline"
                    >
                      <span>Request a {division.title} Walkthrough</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Verified Transformations Proof Callout */}
          <div className="bg-stone/80 rounded-3xl p-8 sm:p-12 border border-border mb-16 shadow-sm">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <span className="text-xs font-utility uppercase tracking-wider text-flame-button font-semibold block">
                Visual Proof of Craftsmanship
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display text-charred leading-tight">
                Authentic Before &amp; After Remodel Transformations
              </h3>
              <p className="text-sm sm:text-base text-iron max-w-2xl mx-auto leading-relaxed">
                Every renovation we deliver is documented through certified before-and-after photography. Compare identical camera perspectives to inspect our framing precision, custom cabinetry, dust-free containment, and luxury stone finishes.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 max-w-2xl mx-auto text-left">
                <div className="p-4 rounded-xl bg-white border border-border">
                  <span className="text-xs font-utility uppercase text-iron block">Kitchens</span>
                  <p className="text-sm font-display text-charred mt-1 font-semibold">Custom Shaker &amp; Quartz</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-border">
                  <span className="text-xs font-utility uppercase text-iron block">Bathrooms</span>
                  <p className="text-sm font-display text-charred mt-1 font-semibold">Spa Glass &amp; Marble</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-border">
                  <span className="text-xs font-utility uppercase text-iron block">Basements</span>
                  <p className="text-sm font-display text-charred mt-1 font-semibold">Lounges &amp; Wet Bars</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-border">
                  <span className="text-xs font-utility uppercase text-iron block">Exterior</span>
                  <p className="text-sm font-display text-charred mt-1 font-semibold">Multi-Tier Decks</p>
                </div>
              </div>

              <div className="pt-2">
                <Button href="/projects#gallery" variant="primary" size="lg" className="shadow-md">
                  <span>Explore Interactive Before &amp; After Gallery</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>

          {/* 6-Step Remodeling Process */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-utility uppercase tracking-widest text-flame-button font-semibold block mb-2">
                Predictable Delivery
              </span>
              <h3 className="text-2xl sm:text-3xl font-display text-charred">
                Our 6-Step Remodel Methodology
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((s) => (
                <div
                  key={s.step}
                  className="p-6 rounded-2xl bg-white border border-border shadow-sm space-y-3"
                >
                  <span className="text-xs font-utility font-bold text-flame-button tracking-widest block">
                    PHASE {s.step}
                  </span>
                  <h4 className="text-base font-body font-bold text-charred">
                    {s.title}
                  </h4>
                  <p className="text-xs text-iron leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Integrated Nationwide Service Area Section ── */}
      <section id="service-area" className="bg-stone section-padding border-t border-border scroll-mt-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
            <span className="text-xs font-utility uppercase tracking-widest text-flame-button font-semibold block">
              Coast-to-Coast Footprint
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-charred">
              Nationwide Service Area &amp; Regional Hubs
            </h2>
            <p className="text-base text-iron leading-relaxed">
              BestFix Home coordinates vetted master tradespeople and emergency response teams across the United States — including dedicated divisions across California, Texas, the Pacific Northwest, Midwest, and the East Coast. Find coverage in your city or county below.
            </p>
          </div>

          {/* Zip Code Quick Check Card */}
          <div className="max-w-2xl mx-auto mb-14">
            <ZipChecker variant="card" />
          </div>

          {/* Interactive Regional Hubs & Metro Map */}
          <div className="mb-14">
            <CoverageMap />
          </div>

          {/* Rapid Dispatch Standards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-border space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-flame-button/10 text-flame-button flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-base font-body font-bold text-charred">
                Dedicated Regional Specialists
              </h3>
              <p className="text-xs text-iron leading-relaxed">
                We assign verified master carpenters, plumbers, and electricians from our localized regional hubs, ensuring quick arrival times and code-compliant work.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-border space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-flame-button/10 text-flame-button flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-base font-body font-bold text-charred">
                Standard &amp; Emergency Dispatch
              </h3>
              <p className="text-xs text-iron leading-relaxed">
                Book scheduled service appointments Monday through Saturday, or activate our urgent response desk 24 hours a day for immediate water or power emergencies.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-border space-y-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-flame-button/10 text-flame-button flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-base font-body font-bold text-charred">
                Insured &amp; 1-Year Guarantee
              </h3>
              <p className="text-xs text-iron leading-relaxed">
                All personnel carry full liability coverage, credential verification, and every completed project is backed by our signature 1-Year Craftsmanship Guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Operational Scale & Metrics ── */}
      <section className="bg-cloud section-padding border-t border-border">
        <BentoStats />
      </section>

      {/* ── 8. Emergency Service Banner ── */}
      <section id="emergency" className="bg-slate text-white section-padding">
        <div className="section-container max-w-3xl text-center mx-auto space-y-6">
          <span className="text-xs font-utility uppercase tracking-widest text-flame font-semibold block">
            Urgent Dispatch Support
          </span>
          <h2 className="text-3xl sm:text-4xl font-display text-white">
            Experiencing a Critical Home Failure?
          </h2>
          <p className="text-base text-gray-300 leading-relaxed">
            Plumbing leaks, electrical outages, and HVAC breakdowns require immediate professional intervention. Our 24/7 emergency dispatch desk mobilizes certified specialists day or night nationwide.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:4842725220"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-flame-button hover:bg-flame-hover text-white text-base font-body font-bold shadow-xl transition-all"
            >
              <Phone className="w-5 h-5" />
              Call Emergency Dispatch: (484) 272-5220
            </a>
            <Button href="/contact" variant="ghost" size="lg" className="!text-white !border-white/30 hover:!bg-white/10">
              Request Project Estimate
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
