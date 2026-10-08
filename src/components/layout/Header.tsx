"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/data/navigation";
import { Phone, Menu, X, ArrowRight } from "lucide-react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // If mobile drawer is open, keep header visible
          if (mobileOpen) {
            setIsVisible(true);
            setIsScrolled(currentScrollY > 10);
            lastScrollY.current = currentScrollY;
            ticking = false;
            return;
          }

          // Near the very top of the page: always visible and clean
          if (currentScrollY <= 20) {
            setIsVisible(true);
            setIsScrolled(false);
          } else {
            setIsScrolled(true);

            // Scrolling down: hide header to give user full reading immersion
            if (currentScrollY > lastScrollY.current + 8 && currentScrollY > 80) {
              setIsVisible(false);
            }
            // Scrolling up: instantly reveal header for navigation/contact access
            else if (currentScrollY < lastScrollY.current - 6) {
              setIsVisible(true);
            }
          }

          lastScrollY.current = Math.max(0, currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileOpen]);

  return (
    <>
      {/* Spacer to preserve document flow and prevent layout shift */}
      <div className="h-[76px] w-full shrink-0" aria-hidden="true" />

      {/* Pro Smart Reverse-Scroll Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled
            ? "bg-cloud/95 backdrop-blur-xl shadow-md border-b border-border/80"
            : "bg-cloud border-b border-border"
        }`}
      >
        <div className="section-container flex items-center justify-between h-[76px] px-4 sm:px-6 lg:px-8">
          {/* Logo Mark */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/assets/brand/customer-logo.png"
              alt="BestFix Home"
              width={145}
              height={80}
              className="h-11 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-7 text-sm font-body font-semibold text-iron"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-flame-button focus-visible:text-flame-button transition-colors py-2 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-flame-button transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:4842725220"
              className="text-sm font-body font-bold text-charred hover:text-flame-button transition-colors"
            >
              (484) 272-5220
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-body font-bold uppercase tracking-wider text-white bg-flame-button hover:bg-flame-hover rounded-xl shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              <span>Get Free Estimate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-charred hover:text-flame-button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <nav
            className="lg:hidden bg-cloud border-b border-border px-6 py-6 space-y-2 animate-in slide-in-from-top-4 duration-200 shadow-xl"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2.5 text-base font-body font-semibold text-charred hover:text-flame-button border-b border-border/40"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <a
                href="tel:4842725220"
                className="flex items-center justify-center gap-2 py-3 text-base font-body font-bold text-charred bg-stone rounded-xl"
              >
                <Phone className="w-4 h-4 text-flame-button" />
                Call 24/7: (484) 272-5220
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 py-3.5 bg-flame-button text-white font-body font-bold rounded-xl text-center shadow-sm"
              >
                <span>Request Free Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
