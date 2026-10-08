"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const HERO_SLIDES = [
  {
    src: "/assets/images/decorative/modern_estate_interior.jpg",
    alt: "Modern architectural estate with luxury indoor-outdoor living",
  },
  {
    src: "/assets/images/decorative/house_painting_exterior.jpg",
    alt: "High-performance exterior siding and weatherproof painting",
  },
  {
    src: "/assets/images/decorative/electrician_tools.jpg",
    alt: "Licensed electrician wiring residential panel circuitry",
  },
  {
    src: "/assets/images/decorative/herringbone_hardwood_flooring.jpg",
    alt: "Handcrafted French oak herringbone hardwood floor installation",
  },
  {
    src: "/assets/images/decorative/plumbing_repair_pipes.jpg",
    alt: "Precision plumbing luxury fixture assembly and diagnostics",
  },
  {
    src: "/assets/images/decorative/pressure_washing_concrete.jpg",
    alt: "High-pressure concrete and stone restoration cleaning",
  },
];

export function HeroMediaLoop() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  // 1.8 to 2-second loop interval per user specification
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Rotating portfolio craftsmanship background showcase"
    >
      {/* ── 1. Image Layers with GPU Composited 600ms Crossfade ── */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              isActive ? "opacity-85 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index < 2}
              sizes="100vw"
              className={`object-cover object-center transition-transform duration-[2200ms] ease-out ${
                isActive ? "scale-105" : "scale-100"
              }`}
            />
          </div>
        );
      })}

      {/* ── 2. Tailored Contrast Scrim Overlays ── */}
      {/* Left side directional gradient to ensure crystal-clear text readability */}
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-slate/95 via-slate/80 to-slate/30 sm:to-transparent pointer-events-none" />

      {/* Mobile-specific vertical gradient for complete mobile contrast */}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-slate via-slate/50 to-transparent sm:hidden pointer-events-none" />

      {/* Bottom organic fade into the task marquee */}
      <div className="absolute inset-x-0 bottom-0 h-32 z-20 bg-gradient-to-t from-slate to-transparent pointer-events-none" />
    </div>
  );
}
