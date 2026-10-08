import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BentoStats } from "@/components/ui/BentoStats";
import { TheDifferenceTabs } from "@/components/ui/TheDifferenceTabs";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheck,
  Award,
  Wrench,
  CheckCircle2,
  Clock,
  Phone,
  HardHat,
  Receipt,
  FileCheck2,
  Sparkles,
  ArrowRight,
  Compass,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About BestFix Home | Our Craftsmanship Standards, Story & Guarantee",
  description:
    "Learn about BestFix Home: 10+ years of trade mastery, vetted in-house master tradespeople, transparent itemized pricing, clean site containment, and a 1-Year Craftsmanship Guarantee.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bestfixhome.com/about",
    siteName: "BestFix Home",
    title: "About BestFix Home | Our Craftsmanship Standards & Guarantee",
    description:
      "Learn about BestFix Home: 10+ years of trade mastery, vetted in-house master tradespeople, transparent itemized pricing, and a 1-Year Craftsmanship Guarantee.",
    images: [
      {
        url: "/assets/images/decorative/master_carpenter_framing.jpg",
        width: 1200,
        height: 630,
        alt: "BestFix Home Master Tradespeople and Standards",
      },
    ],
  },
};

const companyPillars = [
  {
    icon: HardHat,
    title: "Vetted Career Craftsmen",
    desc: "We do not hire anonymous day laborers or subcontract blind leads. Every technician carries verified state credentials, background screening, and 10+ years of trade experience.",
  },
  {
    icon: Receipt,
    title: "100% Financial Transparency",
    desc: "Every estimate is fully itemized before work begins. Sourced materials are charged at direct wholesale receipts with zero surprise markups, or you can provide your own.",
  },
  {
    icon: Sparkles,
    title: "Clean Worksite Protocol",
    desc: "We respect your home. Our technicians wear clean boot covers, install zippered dust containment barriers, and conduct daily HEPA cleanup on all active remodeling jobs.",
  },
  {
    icon: ShieldCheck,
    title: "1-Year Written Guarantee",
    desc: "We stand unconditionally behind our work. If any installation or repair fails within 12 months under normal use, our crew returns to make it right at zero expense to you.",
  },
];

const workingSteps = [
  {
    step: "01",
    title: "Initial Scope Inquiry",
    desc: "Share your project goals, timelines, and photos via our online portal or by phone. Our regional team provides a free preliminary consultation.",
  },
  {
    step: "02",
    title: "$125 Credited Walkthrough",
    desc: "For remodeling projects, a regional superintendent conducts an in-depth spatial inspection and code assessment. The $125 fee is 100% credited to your final invoice upon hire.",
  },
  {
    step: "03",
    title: "Itemized Written Proposal",
    desc: "You receive an exact line-item breakdown of labor, required permits, and materials—with zero ambiguous line items or hidden contingencies.",
  },
  {
    step: "04",
    title: "Master Trades Execution",
    desc: "Our certified tradespeople execute the work with clean dust containment, daily communication, and scheduled milestone progress inspections.",
  },
  {
    step: "05",
    title: "Punch List & 1-Year Warranty",
    desc: "We walk through the finished project together, verify every detail against your expectations, and formally activate your 1-Year written craftsmanship warranty.",
  },
];

export default function AboutPage() {
  const aboutStructuredData = {
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
            name: "About Us",
            item: "https://bestfixhome.com/about",
          },
        ],
      },
      {
        "@type": "AboutPage",
        name: "About BestFix Home",
        description:
          "Founded by career tradespeople, BestFix Home provides certified residential repairs, property maintenance, and turnkey remodeling with a 1-Year Craftsmanship Guarantee.",
        url: "https://bestfixhome.com/about",
        mainEntity: {
          "@type": "HomeAndConstructionBusiness",
          name: "BestFix Home",
          url: "https://bestfixhome.com",
          telephone: "+14842725220",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutStructuredData) }}
      />
      {/* ── 1. Hero Header ── */}
      <section className="bg-slate text-white section-padding !pb-14">
        <div className="section-container max-w-4xl text-center mx-auto space-y-4">
          <span className="text-xs font-utility uppercase tracking-widest text-flame font-semibold block">
            Our Mission &amp; Standards
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-white">
            Built to End Contractor Frustration
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Founded by career tradespeople with over a decade of field experience, BestFix Home was built on a simple premise: do the job right the first time, communicate with radical honesty, and stand behind every cut, wire, and pipe.
          </p>
        </div>
      </section>

      {/* ── 2. Origin & The Problem We Solved ── */}
      <section className="bg-cloud section-padding">
        <div className="section-container max-w-5xl space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-utility uppercase tracking-widest text-flame-button font-semibold block">
                The Origin Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-display text-charred leading-tight">
                Why Homeowners Deserve a Better Trade Standard
              </h2>
              <p className="text-sm sm:text-base text-iron leading-relaxed">
                Every homeowner has experienced contractor fatigue: unreturned phone calls, tradespeople arriving hours late without the right tools, unvetted subcontractors wandering through private living spaces, and invoices that inflate by thousands of dollars halfway through a remodel.
              </p>
              <p className="text-sm sm:text-base text-iron leading-relaxed">
                We started BestFix Home to replace that chaos with an operational framework borrowed from commercial building standards: dedicated project superintendents, background-checked master tradespeople in company uniforms, clean dust barriers, and transparent wholesale receipt sharing.
              </p>
              <div className="pt-2 flex items-center gap-6 text-xs text-charred font-semibold font-utility uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-flame-button" />
                  10+ Years Trade Mastery
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-flame-button" />
                  Zero Unvetted Subs
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-flame-button" />
                  1-Year Labor Warranty
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-stone bg-slate-900">
              <Image
                src="/assets/images/decorative/master_carpenter_framing.jpg"
                alt="BestFix Home master carpenter cutting architectural framing"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 bg-slate/90 backdrop-blur-md p-3.5 rounded-xl border border-white/20 text-white text-xs">
                <p className="font-bold text-white">Master Finish Carpentry</p>
                <p className="text-[11px] text-gray-300">Millwork, Cabinetry &amp; Framing Division</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. The 4 Non-Negotiable Operational Pillars ── */}
      <section className="bg-stone section-padding">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-utility uppercase tracking-widest text-flame-button font-semibold block mb-2">
              Our Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-display text-charred">
              The 4 Pillars of BestFix Reliability
            </h2>
            <p className="text-sm text-iron mt-3">
              These non-negotiable standards govern every dispatch call, material order, and remodel across our national network.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-cloud p-7 rounded-2xl border border-border shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-11 h-11 rounded-xl bg-flame-button/10 text-flame-button flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display text-charred mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-iron leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. Operational Scale (Bento Stats Grid) ── */}
      <section className="bg-cloud section-padding">
        <BentoStats />
      </section>

      {/* ── 5. The BestFix Remodeling & Repair Working Method ── */}
      <section className="bg-stone section-padding">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-utility uppercase tracking-widest text-flame-button font-semibold block mb-2">
              Step-by-Step Transparency
            </span>
            <h2 className="text-3xl sm:text-4xl font-display text-charred">
              Our Structured Working Process
            </h2>
            <p className="text-sm text-iron mt-3">
              From your initial call to final punch-list sign-off, here is exactly how we deliver stress-free home improvements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {workingSteps.map((s, idx) => (
              <div
                key={idx}
                className="bg-cloud p-6 rounded-2xl border border-border shadow-sm flex flex-col justify-between space-y-3 relative group hover:border-flame-button/50 transition-all"
              >
                <div>
                  <span className="text-2xl font-display text-flame-button/40 font-bold block mb-1">
                    {s.step}
                  </span>
                  <h3 className="text-base font-display text-charred font-bold mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs text-iron leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Craftsmanship Standards Showcase ── */}
      <section className="bg-cloud section-padding">
        <TheDifferenceTabs />
      </section>

      {/* ── 7. Fully Bonded & Insured Protection Seal ── */}
      <section className="bg-stone section-padding">
        <div className="section-container max-w-4xl">
          <div className="bg-cloud p-8 sm:p-12 rounded-3xl border border-border shadow-md space-y-6 text-center">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-display text-charred">
                Our 1-Year Comprehensive Craftsmanship Guarantee
              </h3>
              <p className="text-sm sm:text-base text-iron leading-relaxed max-w-2xl mx-auto mt-2">
                If any installation or repair performed by our certified tradespeople fails under normal residential use within 12 months, our team returns to your property and rectifies it immediately at zero charge to you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-border text-xs text-iron font-medium">
              <div className="p-3 rounded-xl bg-stone/50 border border-border/60">
                <p className="font-bold text-charred mb-0.5">$2M+ General Liability</p>
                <p>Complete property protection</p>
              </div>
              <div className="p-3 rounded-xl bg-stone/50 border border-border/60">
                <p className="font-bold text-charred mb-0.5">Workers' Compensation</p>
                <p>Full team medical coverage</p>
              </div>
              <div className="p-3 rounded-xl bg-stone/50 border border-border/60">
                <p className="font-bold text-charred mb-0.5">Wholesale Transparency</p>
                <p>Real receipts shared openly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Closing Call to Action ── */}
      <section className="bg-slate text-white section-padding">
        <div className="section-container text-center max-w-2xl mx-auto space-y-5">
          <span className="text-xs font-utility uppercase tracking-widest text-flame font-semibold block">
            Ready For A True Trade Partner?
          </span>
          <h2 className="text-3xl sm:text-4xl font-display text-white">
            Experience The BestFix Standard Firsthand
          </h2>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Schedule a free telephone consultation or book a $125 comprehensive remodeling walkthrough (100% credited toward your final project invoice).
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto shadow-lg">
              <span>Request Free Estimate</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <a
              href="tel:4842725220"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 text-white hover:bg-white/10 font-body font-bold text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-flame" />
              <span>Call (484) 272-5220</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
