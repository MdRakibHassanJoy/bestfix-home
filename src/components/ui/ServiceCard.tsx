import Link from "next/link";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  iconName: string;
}

export function ServiceCard({ title, description, href, iconName }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-cloud rounded-2xl p-6 border border-border shadow-sm hover:shadow-md hover:border-flame/40 motion-safe:transition-all motion-safe:duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame-button"
    >
      <div className="w-12 h-12 rounded-xl bg-flame/10 text-flame flex items-center justify-center mb-4 group-hover:bg-flame-button group-hover:text-white motion-safe:transition-colors motion-safe:duration-300">
        <ServiceIcon name={iconName} className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-display text-charred mb-2 group-hover:text-flame-button motion-safe:transition-colors">
        {title}
      </h3>
      <p className="text-sm text-iron leading-relaxed mb-4">
        {description}
      </p>
      <span className="text-sm font-body font-semibold text-flame-button group-hover:underline inline-flex items-center gap-1.5">
        <span>Learn more</span>
        <ArrowRight size={16} className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
