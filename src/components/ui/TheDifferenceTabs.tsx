"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Clock, CheckCircle2, Award, ArrowRight } from "lucide-react";

interface DifferenceTab {
  id: string;
  title: string;
  eyebrow: string;
  headline: string;
  description: string;
  bulletPoints: string[];
  imageSrc: string;
  imageAlt: string;
  statBadge: { value: string; label: string };
}

const differenceTabs: DifferenceTab[] = [
  {
    id: "craftsmen",
    title: "Vetted Master Tradespeople",
    eyebrow: "Trade Accountability",
    headline: "In-house master tradespeople, not anonymous subcontractors.",
    description:
      "When our technicians arrive at your property, accountability is built in. Every carpenter, electrician, and plumber on our crew carries certified credentials, rigorous background screening, and 10+ years of collective field experience.",
    bulletPoints: [
      "Rigorous background checks & credential verification",
      "Uniformed, professional, and respectful in your home",
      "Direct line of communication with project superintendents",
      "Boot covers and clean work-zone containment on every job",
    ],
    imageSrc: "/assets/images/decorative/craftsman_at_work_1790306509442.jpg",
    imageAlt: "BestFix Home master carpenter measuring precision woodwork",
    statBadge: { value: "10+", label: "Years Combined Experience" },
  },
  {
    id: "pricing",
    title: "Upfront Itemized Pricing",
    eyebrow: "Financial Transparency",
    headline: "Detailed written proposals before a single tool is lifted.",
    description:
      "No surprise add-ons. No hidden line items. We provide complete transparency with itemized labor and material breakdowns so you understand every dollar invested.",
    bulletPoints: [
      "100% free, no-obligation initial estimates",
      "Itemized scopes of work with zero hidden fees",
      "Milestone-based progress billing for remodeling",
      "Direct wholesale material receipts shared with homeowners",
    ],
    imageSrc: "/assets/images/decorative/architectural_blueprints.jpg",
    imageAlt: "Architect and estimator drafting itemized plans and blueprints",
    statBadge: { value: "$0", label: "Hidden Fees" },
  },
  {
    id: "dispatch",
    title: "Nationwide Rapid Dispatch",
    eyebrow: "Coverage & Urgency",
    headline: "Standard appointments and 24/7 emergency dispatch nationwide.",
    description:
      "Whether it's scheduled kitchen renovations or urgent burst-pipe flooding at 2:00 AM, our multi-state regional dispatch hubs route certified crews quickly to resolve the problem.",
    bulletPoints: [
      "Multi-state regional hub network across the US",
      "Emergency hotline active 24 hours a day, 7 days a week",
      "Guaranteed arrival windows with real-time dispatch updates",
      "Fully stocked service vans equipped for one-visit fixes",
    ],
    imageSrc: "/assets/images/decorative/hvac_circuit_servicing.jpg",
    imageAlt: "Certified technician performing diagnostic checks and urgent servicing",
    statBadge: { value: "24/7", label: "Emergency Readiness" },
  },
  {
    id: "guarantee",
    title: "1-Year Craftsmanship Guarantee",
    eyebrow: "Warranty & Protection",
    headline: "If any component doesn't hold up, we return to fix it at zero charge.",
    description:
      "We stand behind every repair, installation, and remodel we perform. If any component installed by our team fails within 12 months, we return to rectify it at zero charge to you.",
    bulletPoints: [
      "Comprehensive 1-Year written warranty on all labor",
      "Fully licensed, bonded, and comprehensively insured",
      "Manufacturer warranty documentation provided upon completion",
      "Dedicated post-project support and warranty claims desk",
    ],
    imageSrc: "/assets/images/decorative/precision_plumbing_fixtures_1790306558752.jpg",
    imageAlt: "Precision craftsmanship fixture assembly backed by 1-year guarantee",
    statBadge: { value: "100%", label: "Satisfaction Guaranteed" },
  },
];

export function TheDifferenceTabs() {
  const [activeTab, setActiveTab] = useState<string>("craftsmen");
  const active = differenceTabs.find((t) => t.id === activeTab) || differenceTabs[0];

  return (
    <div className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: Tab selection & Content */}
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-utility uppercase tracking-widest text-flame-button font-semibold block">
            Craftsmanship Standards
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-charred leading-tight">
            How True Craftsmanship Gets Done
          </h2>

          <p className="text-base text-iron leading-relaxed">
            Inspired by the highest standards of professional construction and property maintenance, we built BestFix Home to end the frustration of unreliable contractors.
          </p>

          {/* Tab Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5 pt-2">
            {differenceTabs.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-200 focus-visible:outline-2 focus-visible:outline-flame-button ${
                    isSelected
                      ? "bg-cloud border-flame-button shadow-md ring-1 ring-flame-button/30"
                      : "bg-stone/60 border-border hover:bg-cloud hover:border-border/80"
                  }`}
                  aria-selected={isSelected}
                  role="tab"
                >
                  <p className={`text-xs font-utility uppercase tracking-wider mb-1 ${isSelected ? "text-flame-button" : "text-iron/70"}`}>
                    {tab.eyebrow}
                  </p>
                  <p className={`text-sm font-body font-semibold ${isSelected ? "text-charred" : "text-iron"}`}>
                    {tab.title}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Tab Detailed Explainer with Fixed Minimum Height to Prevent Layout Shift */}
          <div className="bg-cloud p-6 rounded-2xl border border-border space-y-4 shadow-sm min-h-[260px] flex flex-col justify-between transition-all duration-300">
            <div className="space-y-3">
              <h3 className="text-lg font-display text-charred min-h-[28px]">{active.headline}</h3>
              <p className="text-sm text-iron leading-relaxed min-h-[64px]">{active.description}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {active.bulletPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-charred font-medium">
                    <CheckCircle2 className="w-4 h-4 text-flame-button shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-border/50">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-body font-semibold text-flame-button hover:text-flame-hover hover:underline"
              >
                Experience the Difference <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right: Fixed Sized High-Resolution Photo Frame (Identical aspect ratio for all tabs) */}
        <div className="lg:col-span-6 relative w-full">
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-cloud bg-slate-900">
            <Image
              key={active.imageSrc}
              src={active.imageSrc}
              alt={active.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-opacity duration-300 ease-in-out"
              priority
            />
            {/* Subtle contrast gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

            {/* Floating Metric Badge */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between bg-slate/90 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-white shadow-xl pointer-events-none">
              <div>
                <p className="text-2xl sm:text-3xl font-display text-white">{active.statBadge.value}</p>
                <p className="text-xs text-gray-300 font-utility tracking-wide uppercase">{active.statBadge.label}</p>
              </div>
              <div className="h-10 w-px bg-white/20" />
              <div className="text-right">
                <p className="text-sm font-body font-bold text-white">1-Year Labor Warranty</p>
                <p className="text-[11px] text-gray-300">Licensed &amp; Insured</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
