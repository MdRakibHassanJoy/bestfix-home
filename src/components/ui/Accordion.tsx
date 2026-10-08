"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="divide-y divide-border">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id}>
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="w-full flex items-center justify-between py-5 text-left group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame-button"
              aria-expanded={isOpen}
              aria-controls={`accordion-${item.id}`}
            >
              <span className="text-base font-body font-semibold text-charred pr-8 group-hover:text-flame-button transition-colors">
                {item.question}
              </span>
              <ChevronDown
                size={20}
                className={`w-5 h-5 text-iron shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-flame-button" : ""
                }`}
              />
            </button>
            <div
              id={`accordion-${item.id}`}
              role="region"
              aria-labelledby={`accordion-${item.id}-btn`}
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm text-iron leading-relaxed pr-10">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
