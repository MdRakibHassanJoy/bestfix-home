"use client";

import Link from "next/link";
import { Phone, FileText } from "lucide-react";

export function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-cloud border-t border-border safe-area-bottom">
      <div className="flex items-stretch">
        <a
          href="tel:4842725220"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-body font-semibold text-charred border-r border-border transition-colors active:bg-stone"
        >
          <Phone className="w-4 h-4 text-flame" size={16} />
          <span>Call Now</span>
        </a>
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-body font-semibold text-white bg-flame-button active:bg-flame-hover transition-colors"
        >
          <FileText className="w-4 h-4 text-white" size={16} />
          <span>Free Estimate</span>
        </Link>
      </div>
    </div>
  );
}
