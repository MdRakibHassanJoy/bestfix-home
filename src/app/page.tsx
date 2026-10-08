import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ZipChecker } from "@/components/ui/ZipChecker";
import { TaskMarquee } from "@/components/ui/TaskMarquee";
import { TheDifferenceTabs } from "@/components/ui/TheDifferenceTabs";
import { ServiceExplorer } from "@/components/ui/ServiceExplorer";
import { BentoStats } from "@/components/ui/BentoStats";
import { CoverageMap } from "@/components/ui/CoverageMap";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { ProcessWalkthroughModal } from "@/components/ui/ProcessWalkthroughModal";
import { Accordion } from "@/components/ui/Accordion";
import { HeroMediaLoop } from "@/components/ui/HeroMediaLoop";
import { projects } from "@/data/projects";
import { reviews } from "@/data/reviews";
import { faqItems } from "@/data/faq";
import {
  ShieldCheck,
  Award,
  Phone,
  ArrowRight,
  Star,
  CheckCircle2,
  Clock,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "BestFix Home | Nationwide Home Repair, Maintenance & Remodeling",
  description:
    "Reliable residential property maintenance, emergency trade repairs, and high-end home remodeling delivered nationwide by vetted master craftsmen. Upfront guaranteed pricing.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bestfixhome.com",
    siteName: "BestFix Home",
    title: "BestFix Home | Nationwide Home Repair, Maintenance & Remodeling",
    description:
      "Reliable residential property maintenance, emergency trade repairs, and high-end home remodeling delivered nationwide by vetted master craftsmen. Upfront guaranteed pricing.",
    images: [
      {
        url: "/assets/brand/customer-logo.png",
        width: 1200,
        height: 630,
        alt: "BestFix Home Craftsmanship Standards",
      },
    ],
  },
};

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);
  const homeFaqs = faqItems.slice(0, 6);

  return (
    <>
      {/* ── 1. CINEMATIC HERO SECTION ── */}
      <section className="relative min-h-[92vh] flex flex-col justify-center bg-slate text-white overflow-hidden py-16 sm:py-20 lg:py-28">
        {/* Prominent High-Resolution Looping Craftsmanship Showcase (1-2s Loop) */}
        <HeroMediaLoop />

        <div className="relative z-10 section-container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Hero Left Column */}
            <div className="lg:col-span-8 space-y-5 sm:space-y-6">
              {/* H1 Monumental Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] font-display text-white leading-[1.1] tracking-tight">
                Built on Uncompromising <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-gray-300">
                  Trade Craftsmanship.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed max-w-2xl">
                From emergency plumbing and electrical diagnostics to turnkey kitchen, bath, and exterior renovations — serviced nationwide by vetted master tradespeople with guaranteed upfront pricing.
              </p>

              {/* Inline Hero ZIP Dispatch Checker */}
              <div className="pt-2">
                <p className="text-xs font-utility text-gray-300 uppercase tracking-wider mb-2 font-medium">
                  Check Instant Dispatch In Your Area:
                </p>
                <ZipChecker variant="hero" />
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
                <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto shadow-lg">
                  <span>Get a Free Estimate</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
                <ProcessWalkthroughModal buttonText="Explore Our Process" />
              </div>

              {/* Hero Micro-Trust Badges */}
              <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-gray-300">
                <span className="flex items-center gap-1.5 text-white font-semibold">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  4.9 / 5.0 Rating
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Insured Trade Specialists
                </span>
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-flame" />
                  Fully Bonded &amp; Insured
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  1-Year Craftsmanship Guarantee
                </span>
              </div>
            </div>

            {/* Hero Right Column: Interactive Quick Dispatch Card */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="bg-white/10 backdrop-blur-xl p-7 rounded-3xl border border-white/20 shadow-2xl text-white space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-white/15">
                  <div>
                    <span className="text-[11px] font-utility uppercase tracking-wider text-flame font-semibold block">
                      Rapid Response Desk
                    </span>
                    <h3 className="text-lg font-display text-white mt-0.5">Need Immediate Service?</h3>
                  </div>
                  <span className="p-2.5 rounded-full bg-flame-button/30 text-flame">
                    <Phone className="w-5 h-5" />
                  </span>
                </div>

                <div className="space-y-3 text-xs text-gray-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Same-day and 24/7 emergency dispatch</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Free preliminary telephone estimates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Background-checked master technicians</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="tel:4842725220"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-flame-button hover:bg-flame-hover text-white text-sm font-body font-bold shadow-md transition-all active:scale-95"
                  >
                    <Phone className="w-4 h-4" />
                    Call (484) 272-5220
                  </a>
                  <p className="text-[11px] text-center text-gray-300 mt-2 font-utility">
                    Average response: Under 60 seconds
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. INFINITE KINETIC TASK MARQUEE ── */}
      <TaskMarquee />

      {/* ── 3. THE BESTFIX DIFFERENCE (Interactive Tab Switcher with Real-Time Photo Swapping) ── */}
      <section className="bg-stone section-padding">
        <TheDifferenceTabs />
      </section>

      {/* ── 4. MULTI-DIMENSIONAL SERVICE EXPLORER (Trade vs. Room Discovery Matrix) ── */}
      <section className="bg-cloud section-padding">
        <ServiceExplorer />
      </section>

      {/* ── 5. OPERATIONAL SCALE (Bento Stats Grid) ── */}
      <section className="bg-stone section-padding">
        <BentoStats />
      </section>

      {/* ── 6. FEATURED TRANSFORMATIONS (Interactive Before & After Drag Sliders) ── */}
      <section className="bg-cloud section-padding">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-utility uppercase tracking-widest text-flame-button font-semibold block mb-2">
                Real Home Transformations
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-charred leading-tight">
                Authentic Craftsmanship Proof
              </h2>
              <p className="text-base text-iron max-w-xl mt-3">
                Drag the interactive slider to see the difference our certified tradespeople make on every project.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-body font-semibold text-flame-button hover:underline"
            >
              Browse Complete Project Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-cloud rounded-2xl overflow-hidden border border-border shadow-sm flex flex-col justify-between"
              >
                <BeforeAfterSlider
                  beforeSrc={project.beforeImage}
                  afterSrc={project.afterImage}
                  beforeAlt={project.altBefore}
                  afterAlt={project.altAfter}
                />
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between text-xs text-iron">
                    <span className="font-utility uppercase font-semibold text-flame-button">
                      {project.category}
                    </span>
                    <span className="font-utility">{project.location}</span>
                  </div>
                  <h3 className="text-lg font-display text-charred">
                    {project.title}
                  </h3>
                  <p className="text-xs text-iron leading-relaxed">
                    {project.description}
                  </p>
                  <div className="pt-3 border-t border-border flex items-center justify-between text-xs">
                    <span className="text-iron font-utility">Duration: {project.duration}</span>
                    <Link
                      href={`/contact?project=${encodeURIComponent(project.title)}`}
                      className="font-body font-semibold text-flame-button hover:underline"
                    >
                      Request Similar Quote →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. NATIONWIDE OPERATIONAL COVERAGE & DISPATCH MAP ── */}
      <section className="bg-stone section-padding">
        <CoverageMap />
      </section>

      {/* ── 8. CLIENT REVIEWS & TESTIMONIALS ── */}
      <section className="bg-cloud section-padding">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-utility uppercase tracking-widest text-flame-button font-semibold block mb-2">
              Customer Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-display text-charred">
              What Our Clients Say
            </h2>
            <p className="text-sm text-iron mt-3">
              Independent reviews from property owners who experienced our trade standards firsthand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.slice(0, 3).map((rev) => (
              <div
                key={rev.id}
                className="bg-stone/50 p-7 rounded-2xl border border-border shadow-sm flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <h3 className="text-base font-body font-bold text-charred mb-2">
                    &ldquo;{rev.title}&rdquo;
                  </h3>
                  <p className="text-sm text-iron leading-relaxed">
                    {rev.text}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/80 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-body font-bold text-charred">{rev.name}</p>
                    <p className="text-iron/70 font-utility">{rev.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/projects#reviews"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-cloud text-sm font-body font-semibold text-charred hover:border-flame-button hover:text-flame-button shadow-sm transition-all"
            >
              Read All Verified Reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 9. FREQUENTLY ASKED QUESTIONS ── */}
      <section className="bg-stone section-padding">
        <div className="section-container max-w-3xl">
          <SectionHeader
            eyebrow="Got questions?"
            title="Common Questions About Our Services"
            description="Clear answers on how we handle nationwide scheduling, estimates, emergencies, and guarantees."
            align="center"
          />
          <Accordion items={homeFaqs} />
          <div className="mt-8 text-center">
            <Link
              href="/contact#faq"
              className="text-sm font-body font-semibold text-flame-button hover:underline"
            >
              View Full FAQ Directory on Contact Page →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 10. HIGH-IMPACT CLOSING CTA BANNER ── */}
      <section className="bg-slate text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate via-slate to-charred/30 pointer-events-none" />
        <div className="section-container max-w-3xl mx-auto text-center relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-white leading-tight">
            Ready to Experience True Craftsmanship?
          </h2>
          <p className="text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
            Tell us about your repair, maintenance, or renovation project. We will connect you with a certified regional specialist and deliver a transparent, itemized estimate.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button href="/contact" variant="primary" size="lg" className="shadow-xl">
              Get a Free Estimate
            </Button>
            <a
              href="tel:4842725220"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border-2 border-white/30 text-white hover:border-white hover:bg-white/10 transition-colors text-sm font-body font-semibold"
            >
              <Phone className="w-4 h-4 text-flame" />
              Call (484) 272-5220
            </a>
          </div>
          <p className="text-xs text-gray-300 font-utility">
            Free consultations • No obligation • Licensed &amp; comprehensively insured
          </p>
        </div>
      </section>
    </>
  );
}
