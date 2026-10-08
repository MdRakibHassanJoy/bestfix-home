"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, MapPin, ArrowRight, PhoneCall, ShieldCheck } from "lucide-react";
import { checkServiceArea } from "@/data/service-areas";

interface ZipCheckerProps {
  variant?: "hero" | "card";
}

export function ZipChecker({ variant = "card" }: ZipCheckerProps) {
  const [zip, setZip] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (zip.trim().length === 5) {
      setChecked(true);
    }
  };

  const isServed = checkServiceArea(zip) === "served";

  if (variant === "hero") {
    return (
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="flex items-center gap-2 bg-white/10 backdrop-blur-md p-1.5 rounded-2xl border border-white/20 shadow-lg">
          <div className="flex-1 flex items-center gap-2 pl-3">
            <MapPin className="w-4 h-4 text-flame shrink-0" />
            <input
              type="text"
              value={zip}
              onChange={(e) => {
                setZip(e.target.value.replace(/\D/g, "").slice(0, 5));
                setChecked(false);
              }}
              placeholder="Enter your 5-digit ZIP"
              maxLength={5}
              className="w-full bg-transparent text-white placeholder:text-gray-300 text-sm font-body outline-none"
              aria-label="Enter your 5-digit zip code"
            />
          </div>
          <button
            type="submit"
            disabled={zip.length < 5}
            className="px-3.5 sm:px-5 py-2.5 rounded-xl text-xs font-body font-semibold bg-flame-button hover:bg-flame-hover text-white transition-all disabled:opacity-40 shadow-sm shrink-0 whitespace-nowrap"
          >
            Check Dispatch
          </button>
        </form>

        {checked && isServed && (
          <div className="mt-3 p-3.5 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-xs flex items-center justify-between gap-3 animate-in fade-in duration-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                <strong>ZIP {zip} active:</strong> Certified crews ready for dispatch.
              </span>
            </div>
            <Link
              href={`/contact?zip=${zip}`}
              className="underline font-semibold text-white hover:text-emerald-300 shrink-0"
            >
              Book Now →
            </Link>
          </div>
        )}
      </div>
    );
  }

  // Card Variant
  return (
    <div className="bg-cloud rounded-3xl p-6 sm:p-8 border border-border shadow-sm">
      <div className="flex items-center gap-2 text-xs font-utility uppercase tracking-widest text-flame-button font-semibold mb-2">
        <MapPin className="w-4 h-4" />
        Nationwide Dispatch Checker
      </div>
      <h3 className="text-xl sm:text-2xl font-display text-charred mb-2">
        Check Service Availability in Your Area
      </h3>
      <p className="text-sm text-iron mb-6">
        BestFix Home coordinates certified master technicians and emergency dispatch teams across all 50 states.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <input
            type="text"
            value={zip}
            onChange={(e) => {
              setZip(e.target.value.replace(/\D/g, "").slice(0, 5));
              setChecked(false);
            }}
            placeholder="Enter 5-digit ZIP code"
            maxLength={5}
            className="w-full px-4 py-3 border border-border rounded-xl text-sm font-body text-charred bg-stone/50 placeholder:text-iron/50 focus:border-flame-button focus:ring-1 focus:ring-flame-button outline-none"
            aria-label="Enter your 5-digit zip code"
          />
        </div>
        <button
          type="submit"
          disabled={zip.length < 5}
          className="px-6 py-3 text-sm font-body font-semibold text-white bg-flame-button hover:bg-flame-hover rounded-xl transition-all disabled:opacity-40 shadow-sm shrink-0"
        >
          Verify Coverage
        </button>
      </form>

      {checked && isServed && (
        <div className="mt-5 p-4 bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl border border-emerald-300 dark:border-emerald-700/50 space-y-2 animate-in fade-in duration-200">
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-body font-semibold text-charred">
                Coverage Confirmed for ZIP {zip}
              </p>
              <p className="text-xs text-iron mt-0.5 leading-relaxed">
                Our regional dispatch network services your metropolitan area. Standard appointments and 24/7 emergency calls are active.
              </p>
            </div>
          </div>
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              href={`/contact?zip=${zip}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-body font-semibold bg-flame-button text-white hover:bg-flame-hover transition-colors"
            >
              Request Free Estimate <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href="tel:4842725220"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-body font-semibold text-charred hover:text-flame-button"
            >
              <PhoneCall className="w-3.5 h-3.5" /> Direct Call: (484) 272-5220
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
