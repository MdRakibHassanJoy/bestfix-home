import { ShieldCheck, Award, Wrench, Clock, Users, CheckCircle2 } from "lucide-react";

export function BentoStats() {
  const stats = [
    {
      value: "10+",
      unit: "Years",
      label: "Trade Mastery",
      description: "Over a decade of field experience across residential carpentry, construction, and MEP engineering.",
      icon: Award,
    },
    {
      value: "10K+",
      unit: "Jobs",
      label: "Projects Completed",
      description: "From routine repairs to high-end whole-home renovations delivered on time and within budget.",
      icon: Wrench,
    },
    {
      value: "100%",
      unit: "Coverage",
      label: "Licensed & Insured",
      description: "Multi-state contractor licensing, full general liability insurance, and comprehensive worker protection.",
      icon: ShieldCheck,
    },
    {
      value: "24/7",
      unit: "Readiness",
      label: "Emergency Dispatch",
      description: "Active emergency line ready to mobilize master plumbers and electricians for critical property failures.",
      icon: Clock,
    },
  ];

  return (
    <div className="section-container">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-utility uppercase tracking-widest text-flame-button font-semibold block mb-2">
          Performance &amp; Scale
        </span>
        <h2 className="text-3xl sm:text-4xl font-display text-charred">
          Established Standards, Quantified
        </h2>
        <p className="text-sm text-iron mt-3">
          Our track record isn’t marketing copy — it represents thousands of homeowners who count on us for reliable property care.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className="bg-cloud p-8 rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-flame-button/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-flame-button/10 text-flame-button flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="text-4xl sm:text-5xl font-display text-charred tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-sm font-utility uppercase tracking-wider text-flame-button font-semibold">
                    {stat.unit}
                  </span>
                </div>
                <h3 className="text-base font-body font-semibold text-charred mb-2">
                  {stat.label}
                </h3>
                <p className="text-xs text-iron leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
