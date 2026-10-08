"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, projectCategories } from "@/data/projects";
import { reviews } from "@/data/reviews";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import {
  CheckCircle2,
  Clock,
  MapPin,
  ArrowRight,
  Star,
  ShieldCheck,
  MessageSquareQuote,
  Award,
} from "lucide-react";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [reviewFilter, setReviewFilter] = useState<number | "all">("all");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const filteredReviews =
    reviewFilter === "all"
      ? reviews
      : reviews.filter((r) => r.rating === reviewFilter);

  return (
    <>
      {/* ── 1. Gallery Header Hero ── */}
      <section className="bg-slate text-white section-padding !pb-14">
        <div className="section-container max-w-4xl text-center mx-auto space-y-4">
          <span className="text-xs font-utility uppercase tracking-widest text-flame font-semibold block">
            Craftsmanship Portfolio &amp; Reviews
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-white">
            Real Transformations, Lasting Quality
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Explore authentic before-and-after projects completed by our vetted master tradespeople across our nationwide regional hubs. Drag each slider to view the transformation.
          </p>

          {/* Quick Jump Pills */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs font-body">
            <a
              href="#gallery"
              className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-200 transition-colors"
            >
              Project Gallery
            </a>
            <a
              href="#reviews"
              className="px-4 py-1.5 rounded-full bg-flame-button/30 hover:bg-flame-button/50 text-white border border-flame/30 transition-colors flex items-center gap-1.5"
            >
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>Verified Reviews (4.9 Avg)</span>
            </a>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-body font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-flame-button text-white shadow-md"
                    : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. Interactive Before/After Projects Grid ── */}
      <section id="gallery" className="bg-cloud section-padding scroll-mt-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                {/* Interactive Slider Frame */}
                <BeforeAfterSlider
                  beforeSrc={project.beforeImage}
                  afterSrc={project.afterImage}
                  beforeAlt={project.altBefore}
                  afterAlt={project.altAfter}
                  beforeLabel="Before"
                  afterLabel="Finished"
                />

                {/* Project Details */}
                <div className="p-7 space-y-4">
                  <div className="flex items-center justify-between text-xs font-utility">
                    <span className="px-3 py-1 rounded-full bg-flame-button/10 text-flame-button font-semibold uppercase">
                      {project.category}
                    </span>
                    <span className="flex items-center gap-1 text-iron">
                      <MapPin className="w-3.5 h-3.5" />
                      {project.location}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display text-charred">
                    {project.title}
                  </h3>

                  <p className="text-sm text-iron leading-relaxed">
                    {project.description}
                  </p>

                  {/* Scope Badges */}
                  <div>
                    <p className="text-xs font-utility uppercase tracking-wider text-iron font-semibold mb-2">
                      Key Scope Completed:
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {project.scope.map((item, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs text-charred font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-flame-button shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1 text-iron font-utility">
                      <Clock className="w-3.5 h-3.5" /> Turnaround: {project.duration}
                    </span>
                    <Link
                      href={`/contact?project=${encodeURIComponent(project.title)}`}
                      className="inline-flex items-center gap-1 font-body font-bold text-flame-button hover:underline"
                    >
                      Request Similar Quote <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Integrated Verified Client Reviews Section ── */}
      <section id="reviews" className="bg-stone section-padding border-t border-border scroll-mt-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center mb-12 space-y-4">
            <span className="text-xs font-utility uppercase tracking-widest text-flame-button font-semibold block">
              Client Feedback &amp; Verification
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-charred">
              Trusted by Homeowners Coast-to-Coast
            </h2>
            <p className="text-base text-iron max-w-2xl mx-auto leading-relaxed">
              Every review reflects an authentic completed project backed by our in-house master tradespeople and signature 1-Year Craftsmanship Guarantee.
            </p>

            {/* Rating Summary Card */}
            <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 p-5 px-8 rounded-2xl bg-white border border-border shadow-sm mt-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-display text-charred font-bold">4.9</span>
                <div>
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-[11px] text-iron font-utility uppercase tracking-wider text-left mt-0.5">
                    Verified Average
                  </p>
                </div>
              </div>
              <div className="hidden sm:block h-10 w-px bg-border" />
              <div className="text-center sm:text-left text-xs text-iron space-y-0.5">
                <p className="font-bold text-charred flex items-center gap-1.5 justify-center sm:justify-start">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>100% Insured &amp; Verified</span>
                </p>
                <p>1-Year Written Craftsmanship Labor Guarantee</p>
              </div>
            </div>

            {/* Review Filter */}
            <div className="flex items-center justify-center gap-2 pt-6">
              <button
                onClick={() => setReviewFilter("all")}
                className={`px-4 py-1.5 rounded-full text-xs font-body font-semibold transition-all ${
                  reviewFilter === "all"
                    ? "bg-flame-button text-white shadow-sm"
                    : "bg-white text-iron border border-border hover:bg-stone"
                }`}
              >
                All Verified Reviews ({reviews.length})
              </button>
              <button
                onClick={() => setReviewFilter(5)}
                className={`px-4 py-1.5 rounded-full text-xs font-body font-semibold transition-all flex items-center gap-1 ${
                  reviewFilter === 5
                    ? "bg-flame-button text-white shadow-sm"
                    : "bg-white text-iron border border-border hover:bg-stone"
                }`}
              >
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>5-Star Only</span>
              </button>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white p-7 rounded-3xl border border-border shadow-sm flex flex-col justify-between space-y-5 hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex items-center text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <span className="text-[11px] font-utility font-semibold text-flame-button block uppercase tracking-wide">
                    {rev.projectType}
                  </span>

                  <h4 className="text-base font-body font-bold text-charred leading-snug">
                    &ldquo;{rev.title}&rdquo;
                  </h4>

                  <p className="text-xs text-iron leading-relaxed">
                    {rev.text}
                  </p>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between text-xs text-iron">
                  <div>
                    <p className="font-bold text-charred">{rev.name}</p>
                    <p className="text-[11px] flex items-center gap-1 text-iron">
                      <MapPin className="w-3 h-3 text-iron/70" />
                      {rev.location}
                    </p>
                  </div>
                  <span className="text-[11px] text-iron/70 font-utility">{rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Call-To-Action Banner ── */}
      <section className="bg-slate text-white section-padding">
        <div className="section-container text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl font-display text-white">Have a Project in Mind?</h2>
          <p className="text-sm text-gray-300">
            Tell us about your home and our regional project director will prepare an itemized quote.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Get a Free Estimate
            </Button>
            <a
              href="tel:4842725220"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 text-sm font-body font-semibold transition-colors"
            >
              Call (484) 272-5220
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
