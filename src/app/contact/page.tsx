import type { Metadata } from "next";
import { ContactFormClient } from "@/components/sections/ContactFormClient";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { faqItems } from "@/data/faq";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us & Request an Upfront Estimate | BestFix Home",
  description:
    "Contact BestFix Home for free upfront estimates, nationwide trade inquiries, 24/7 emergency dispatch, or common FAQs. Call (484) 272-5220 or submit your project details online.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bestfixhome.com/contact",
    siteName: "BestFix Home",
    title: "Contact Us & Request an Upfront Estimate | BestFix Home",
    description:
      "Contact BestFix Home for free upfront estimates, nationwide trade inquiries, 24/7 emergency dispatch, or common FAQs. Call (484) 272-5220 or submit your project details online.",
    images: [
      {
        url: "/assets/brand/customer-logo.png",
        width: 1200,
        height: 630,
        alt: "Contact BestFix Home",
      },
    ],
  },
};

export default function ContactPage() {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      {/* ── Page Header Hero ── */}
      <section className="bg-slate text-white section-padding !pb-14">
        <div className="section-container max-w-4xl text-center mx-auto space-y-4">
          <span className="text-xs font-utility uppercase tracking-widest text-flame font-semibold block">
            Central Dispatch, Estimates &amp; Support
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-white">
            Connect With Our Trade Team
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Need an itemized estimate for an upcoming renovation, have questions about our craftsmanship standards, or require rapid emergency dispatch? Our coordinators are ready to help.
          </p>

          {/* Quick Jump & Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:4842725220"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-flame-button hover:bg-flame-hover text-white font-body font-bold text-sm shadow-md transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call Dispatch: (484) 272-5220</span>
            </a>
            <a
              href="mailto:info@bestfixhome.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-body font-semibold text-sm border border-white/20 backdrop-blur-md transition-all"
            >
              <Mail className="w-4 h-4 text-gray-300" />
              <span>Email: info@bestfixhome.com</span>
            </a>
            <a
              href="#faq"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white font-body font-semibold text-sm border border-white/10 transition-all"
            >
              <HelpCircle className="w-4 h-4 text-flame" />
              <span>View FAQs</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Emergency Strip ── */}
      <div className="bg-amber-500/10 border-y border-amber-500/20 py-3.5 px-4">
        <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-charred">
          <div className="flex items-center gap-2.5 font-medium">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>Active Emergency?</strong> For burst pipes, electrical hazards, or critical failures, bypass the form and call us directly.
            </span>
          </div>
          <a
            href="tel:4842725220"
            className="font-bold text-flame-button hover:underline shrink-0 flex items-center gap-1"
          >
            <span>Emergency Hotline: (484) 272-5220</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* ── Main Two-Column Contact Section ── */}
      <section className="bg-cloud section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14">
            {/* Left Column: Direct Contact & Dispatch Desk */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-7 sm:p-8 rounded-3xl border border-border shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-utility uppercase tracking-widest text-flame-button font-bold block mb-1">
                    Direct Trade Communications
                  </span>
                  <h2 className="text-2xl font-display text-charred">
                    How to Reach Our Team
                  </h2>
                </div>

                <div className="space-y-4 text-sm text-iron">
                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-stone/50 border border-border/60">
                    <div className="p-2.5 rounded-lg bg-flame-button/10 text-flame-button shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-utility uppercase tracking-wider text-iron font-semibold block">
                        Telephone Dispatch
                      </span>
                      <a
                        href="tel:4842725220"
                        className="font-body font-bold text-charred hover:text-flame-button transition-colors text-base"
                      >
                        (484) 272-5220
                      </a>
                      <p className="text-xs text-iron/80 mt-0.5">
                        Rapid telephone estimates &amp; emergency calls
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-stone/50 border border-border/60">
                    <div className="p-2.5 rounded-lg bg-flame-button/10 text-flame-button shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-utility uppercase tracking-wider text-iron font-semibold block">
                        General Inquiries &amp; Plans
                      </span>
                      <a
                        href="mailto:info@bestfixhome.com"
                        className="font-body font-bold text-charred hover:text-flame-button transition-colors"
                      >
                        info@bestfixhome.com
                      </a>
                      <p className="text-xs text-iron/80 mt-0.5">
                        Submit blueprints, architectural specs, and photos
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-stone/50 border border-border/60">
                    <div className="p-2.5 rounded-lg bg-flame-button/10 text-flame-button shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-utility uppercase tracking-wider text-iron font-semibold block">
                        Service Hours
                      </span>
                      <p className="font-body font-bold text-charred">
                        Mon – Fri: 9:00 AM – 5:00 PM
                      </p>
                      <p className="text-xs text-iron/80 mt-0.5">
                        24/7 Rapid Emergency Response available year-round
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-border">
                  <span className="text-xs font-utility uppercase tracking-wider text-iron font-semibold block mb-1">
                    Headquarters &amp; Dispatch Office
                  </span>
                  <p className="text-sm font-body font-bold text-charred leading-snug">
                    405 State Highway 121, Suite A250<br />
                    Lewisville, TX 75067
                  </p>
                  <a
                    href="https://maps.google.com/?q=405+State+Highway+121+Suite+A250+Lewisville+TX+75067"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-body font-semibold text-flame-button hover:underline pt-1.5"
                  >
                    <span>View on Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Trust Guarantees Panel */}
              <div className="bg-slate text-white p-7 rounded-2xl space-y-4 shadow-sm">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-flame" />
                  <h3 className="text-base font-body font-bold text-white">
                    The BestFix Guarantee
                  </h3>
                </div>
                <ul className="space-y-2.5 text-xs text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>1-Year Craftsmanship Warranty:</strong> If our work fails within 12 months, we return to fix it free of charge.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Upfront Itemized Estimates:</strong> Clear breakdown of materials and labor before any work commences.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Fully Insured &amp; Bonded:</strong> Comprehensive general liability protection for complete peace of mind.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Upgraded Estimate Form */}
            <div className="lg:col-span-7">
              <div className="mb-4">
                <h2 className="text-2xl sm:text-3xl font-display text-charred">
                  Request an Upfront Estimate
                </h2>
                <p className="text-sm text-iron mt-1">
                  Tell us about your project. We review details carefully and deliver honest, trade-certified pricing.
                </p>
              </div>

              <ContactFormClient />
            </div>
          </div>
        </div>
      </section>

      {/* ── ── ── Integrated Frequently Asked Questions Section ── ── ── */}
      <section id="faq" className="bg-stone section-padding border-t border-border scroll-mt-20">
        <div className="section-container max-w-4xl">
          <SectionHeader
            eyebrow="Upfront Answers &amp; Operational Standards"
            title="Frequently Asked Questions"
            description="Have questions about estimates, walkthroughs, licensing, materials, or emergency dispatch? Find clear, direct answers below."
            align="center"
          />

          <div className="mt-10 bg-white p-6 sm:p-10 rounded-3xl border border-border shadow-sm">
            <Accordion items={faqItems} />
          </div>

          {/* Bottom Help Banner */}
          <div className="mt-10 p-6 rounded-2xl bg-cloud border border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="font-body font-bold text-charred text-base">
                Have a question not listed here?
              </h4>
              <p className="text-xs text-iron mt-0.5">
                Our regional project coordinators are available to answer any questions about your specific scope.
              </p>
            </div>
            <a
              href="tel:4842725220"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-flame-button hover:bg-flame-hover text-white text-xs font-body font-bold shadow-sm transition-all shrink-0"
            >
              <Phone className="w-4 h-4" />
              <span>Call (484) 272-5220</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
