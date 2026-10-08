import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { serviceCategories } from "@/data/services";
import { CheckCircle2 } from "lucide-react";

interface ServiceFaq {
  id: string;
  question: string;
  answer: string;
}

interface ServicePageContentProps {
  title: string;
  intro: string;
  jobs: string[];
  included: string[];
  notIncluded: string[];
  processNote: string;
  faqs: ServiceFaq[];
  licensingNote: string;
  currentSlug: string;
}

export function ServicePageContent({
  title,
  intro,
  jobs,
  included,
  notIncluded,
  processNote,
  faqs,
  licensingNote,
  currentSlug,
}: ServicePageContentProps) {
  const relatedCategories = serviceCategories.filter(
    (c) => c.slug !== currentSlug && c.slug !== "remodeling"
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-cloud section-padding !pb-10">
        <div className="section-container max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display text-charred leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-base text-iron leading-relaxed">
            {intro}
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="primary">Get a Free Estimate</Button>
          </div>
        </div>
      </section>

      {/* Typical jobs */}
      <section className="bg-stone section-padding">
        <div className="section-container max-w-3xl">
          <h2 className="text-2xl font-display text-charred mb-6">
            What we handle
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {jobs.map((job) => (
              <li key={job} className="flex items-start gap-2 text-sm text-iron">
                <CheckCircle2 size={16} className="w-4 h-4 text-flame shrink-0 mt-0.5" />
                <span>{job}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Included / Not included */}
      <section className="bg-cloud section-padding">
        <div className="section-container max-w-3xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-display text-charred mb-4">What&apos;s included</h3>
              <ul className="space-y-2">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-iron">
                    <span className="text-success mt-0.5">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-display text-charred mb-4">Not included</h3>
              <ul className="space-y-2">
                {notIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-iron">
                    <span className="text-iron/40 mt-0.5">—</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-stone section-padding">
        <div className="section-container max-w-3xl">
          <h2 className="text-2xl font-display text-charred mb-4">Our process</h2>
          <p className="text-sm text-iron leading-relaxed">{processNote}</p>
          <p className="mt-3 text-xs font-utility text-iron/60">{licensingNote}</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cloud section-padding">
        <div className="section-container max-w-3xl">
          <h2 className="text-2xl font-display text-charred mb-6">Common questions</h2>
          <Accordion items={faqs} />
        </div>
      </section>

      {/* Related services */}
      <section className="bg-stone section-padding">
        <div className="section-container">
          <SectionHeader eyebrow="Related services" title="More ways we can help" align="center" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {relatedCategories.slice(0, 3).map((cat) => (
              <ServiceCard
                key={cat.id}
                title={cat.title}
                description={cat.description}
                href={`/services/${cat.slug}`}
                iconName={cat.iconName}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate section-padding">
        <div className="section-container text-center max-w-xl mx-auto">
          <h2 className="text-2xl font-display text-white mb-4">Ready to get started?</h2>
          <p className="text-sm text-gray-300 mb-6">Describe your project and we&apos;ll provide a clear estimate.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">Get a Free Estimate</Button>
            <Button href="tel:4842725220" variant="ghost" size="lg" className="!text-gray-300 hover:!text-white">(484) 272-5220</Button>
          </div>
        </div>
      </section>
    </>
  );
}
