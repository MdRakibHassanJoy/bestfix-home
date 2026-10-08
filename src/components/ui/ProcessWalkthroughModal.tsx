"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Compass,
  FileText,
  Hammer,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  X,
  Phone,
  Clock,
  Award,
  Sparkles,
} from "lucide-react";

interface ProcessWalkthroughModalProps {
  buttonText?: string;
  buttonClass?: string;
}

const PROCESS_STEPS = [
  {
    number: "01",
    phase: "Phase 1: Discovery & Dispatch",
    title: "Rapid Dispatch & On-Site Discovery",
    tagline: "Transparent consultation with zero high-pressure sales tactics.",
    icon: Compass,
    description:
      "Whether you need an urgent electrical diagnosis or are planning a comprehensive luxury kitchen renovation, our process begins with listening to your exact needs and diagnosing the scope.",
    highlights: [
      "24/7 Rapid response dispatch hotline: (484) 272-5220",
      "Free phone & virtual photo evaluations for standard repairs",
      "Comprehensive $125 on-site discovery walkthrough for remodeling projects",
      "Walkthrough fee is 100% credited toward your final project invoice",
    ],
    timeline: "Response in < 60 sec | Dispatch within 24–48 hrs",
    trustNote: "Zero sales pressure — only certified master technicians.",
  },
  {
    number: "02",
    phase: "Phase 2: Itemized Scope",
    title: "Guaranteed Upfront Pricing & Trade Scope",
    tagline: "Every line item, labor hour, and material detailed before we begin.",
    icon: FileText,
    description:
      "No vague estimates or surprise bills. We provide a comprehensive, transparent written proposal detailing exact labor specifications, permit requirements, and materials.",
    highlights: [
      "Line-by-line itemized scope across plumbing, electrical, carpentry, and finishes",
      "Transparent wholesale materials — we pass through trade discounts and store receipts",
      "Guaranteed pricing with zero hidden change orders on pre-agreed work",
      "Clear milestone schedules and realistic completion dates",
    ],
    timeline: "Detailed proposal delivered within 24 hours of walkthrough",
    trustNote: "Fixed written price guarantee before any tool touches your home.",
  },
  {
    number: "03",
    phase: "Phase 3: Master Guild Execution",
    title: "Certified Master Tradespeople On-Site",
    tagline: "Experienced guild craftsmen treating your residence with white-glove respect.",
    icon: Hammer,
    description:
      "We never subcontract to anonymous day laborers. Every tradesperson working on your home is licensed, vetted, insured, and specialized in their specific discipline.",
    highlights: [
      "Heavy-duty floor runners and dust containment walls installed on Day 1",
      "Dedicated lead craftsman on-site managing safety and architectural standards",
      "Daily communication with milestone photos and clean end-of-day site cleanup",
      "Strict compliance with municipal codes, structural engineering, and safety laws",
    ],
    timeline: "Dedicated daily scheduling until 100% complete",
    trustNote: "Protected by $2M+ General Liability and full Workers' Comp.",
  },
  {
    number: "04",
    phase: "Phase 4: Turnover & Warranty",
    title: "White-Glove Turnover & 365-Day Guarantee",
    tagline: "Our commitment to your home endures long after the final walkthrough.",
    icon: ShieldCheck,
    description:
      "Once construction is finished, we conduct an exhaustive 25-point punch-list inspection with you to guarantee every detail meets our uncompromising standards.",
    highlights: [
      "Meticulous final walkthrough and punch-list sign-off with your lead craftsman",
      "Final invoice reconciled directly against original wholesale material receipts",
      "Official BestFix 1-Year Craftsmanship Guarantee certificate issued in writing",
      "Priority warranty dispatch — if any issue arises, we return and resolve it promptly",
    ],
    timeline: "Final sign-off only when you are 100% delighted",
    trustNote: "1-Year comprehensive labor warranty backed by nationwide trade dispatch.",
  },
];

export function ProcessWalkthroughModal({
  buttonText = "Watch Our Process",
  buttonClass = "inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg border-2 border-white/30 text-white hover:border-white hover:bg-white/10 transition-all font-body font-semibold text-sm",
}: ProcessWalkthroughModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
      if (isOpen && e.key === "ArrowRight") {
        setActiveStep((prev) => Math.min(PROCESS_STEPS.length - 1, prev + 1));
      }
      if (isOpen && e.key === "ArrowLeft") {
        setActiveStep((prev) => Math.max(0, prev - 1));
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const current = PROCESS_STEPS[activeStep];
  const IconComponent = current.icon;

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setActiveStep(0);
          setIsOpen(true);
        }}
        className={buttonClass}
        aria-label="Open step-by-step craftsmanship process walkthrough"
      >
        <span className="w-6 h-6 rounded-full bg-flame-button flex items-center justify-center text-white shrink-0 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
        </span>
        <span>{buttonText}</span>
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="BestFix Craftsmanship Process Walkthrough"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-charred/85 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl bg-cloud rounded-3xl overflow-hidden border border-border shadow-2xl flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-slate text-white border-b border-white/10 shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-flame-button/20 border border-flame-button/30 flex items-center justify-center text-flame">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-display font-bold text-white tracking-wide">
                    The BestFix Craftsmanship Journey
                  </h3>
                  <p className="text-[11px] font-utility text-gray-300">
                    How Nationwide Home Services Are Done Right
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Step Selection Tabs */}
            <div className="bg-stone border-b border-border px-4 sm:px-6 py-3 shrink-0">
              <div className="grid grid-cols-4 gap-2">
                {PROCESS_STEPS.map((step, idx) => {
                  const isActive = idx === activeStep;
                  return (
                    <button
                      key={step.number}
                      type="button"
                      onClick={() => setActiveStep(idx)}
                      className={`py-2 px-2 sm:px-3 rounded-xl text-left transition-all flex flex-col gap-0.5 border ${
                        isActive
                          ? "bg-cloud border-flame-button shadow-sm"
                          : "bg-transparent border-transparent hover:bg-cloud/60 text-iron"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-[10px] font-utility font-bold ${
                            isActive ? "text-flame-button" : "text-iron/60"
                          }`}
                        >
                          Step {step.number}
                        </span>
                        {idx < activeStep && (
                          <CheckCircle2 className="w-3 h-3 text-emerald-500 hidden sm:block" />
                        )}
                      </div>
                      <span
                        className={`text-xs font-semibold truncate ${
                          isActive ? "text-charred" : "text-iron"
                        }`}
                      >
                        {step.phase.split(": ")[1]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Step Content Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
              {/* Header of Active Step */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-flame-button/10 border border-flame-button/20 flex items-center justify-center text-flame-button shrink-0 mt-0.5">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-utility uppercase tracking-wider text-flame-button font-bold block mb-1">
                    {current.phase}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-display text-charred leading-snug">
                    {current.title}
                  </h4>
                  <p className="text-sm text-copper font-medium mt-1">
                    {current.tagline}
                  </p>
                </div>
              </div>

              {/* Explainer paragraph */}
              <p className="text-sm sm:text-base text-iron leading-relaxed">
                {current.description}
              </p>

              {/* High-Impact Deliverables Checklist */}
              <div className="bg-stone rounded-2xl p-4 sm:p-5 border border-border/70 space-y-3">
                <span className="text-xs font-utility uppercase tracking-wider text-charred font-bold block mb-1">
                  Key Standards &amp; Deliverables:
                </span>
                <div className="grid grid-cols-1 gap-2.5">
                  {current.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-charred">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operational Meta Stats Card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-cloud border border-border text-xs">
                  <Clock className="w-4 h-4 text-flame-button shrink-0" />
                  <div>
                    <span className="font-utility text-[10px] text-iron uppercase tracking-wider block font-semibold">
                      Turnaround &amp; Speed
                    </span>
                    <span className="font-semibold text-charred">{current.timeline}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-cloud border border-border text-xs">
                  <Award className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <span className="font-utility text-[10px] text-iron uppercase tracking-wider block font-semibold">
                      Client Assurance
                    </span>
                    <span className="font-semibold text-charred">{current.trustNote}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer Controls */}
            <div className="px-6 py-4 bg-stone border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              {/* Step Navigation Controls */}
              <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
                <button
                  type="button"
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-charred bg-cloud border border-border hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>

                <span className="text-xs font-utility text-iron px-2">
                  {activeStep + 1} of {PROCESS_STEPS.length}
                </span>

                <button
                  type="button"
                  disabled={activeStep === PROCESS_STEPS.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(PROCESS_STEPS.length - 1, prev + 1))}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-charred bg-cloud border border-border hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Direct Conversion Actions */}
              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <a
                  href="tel:4842725220"
                  className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold text-charred hover:text-flame-button transition-colors px-2"
                >
                  <Phone className="w-3.5 h-3.5 text-flame-button" />
                  <span>(484) 272-5220</span>
                </a>

                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-body font-bold uppercase tracking-wider text-white bg-flame-button hover:bg-flame-hover rounded-xl shadow-sm transition-all"
                >
                  <span>Request Free Estimate</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
