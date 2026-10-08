"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { ChevronsLeftRight, Image as ImageIcon } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeSrc: string | null;
  afterSrc: string | null;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setPosition(pct);
    },
    []
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      setIsDragging(true);
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    },
    [isDragging, updatePosition]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Keyboard support
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    let newPos = position;
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      newPos = Math.max(0, position - 2);
    } else if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      newPos = Math.min(100, position + 2);
    } else if (e.key === "Home") {
      e.preventDefault();
      newPos = 0;
    } else if (e.key === "End") {
      e.preventDefault();
      newPos = 100;
    }
    setPosition(newPos);
  }, [position]);

  // Placeholder state
  if (!beforeSrc || !afterSrc) {
    return (
      <div className="relative w-full aspect-[16/10] bg-border/30 rounded-xl overflow-hidden flex items-center justify-center">
        <div className="text-center px-6">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-stone flex items-center justify-center">
            <ImageIcon size={24} className="w-6 h-6 text-iron" />
          </div>
          <p className="text-sm font-body text-iron">Before &amp; after photos coming soon</p>
          <p className="text-xs font-utility text-iron/60 mt-1">Supply real project images to activate this slider</p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/10] rounded-xl overflow-hidden select-none touch-none cursor-ew-resize"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {/* After image (full background) */}
      <img
        src={afterSrc}
        alt={afterAlt}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Before image (precisely clipped via hardware-accelerated clipPath) */}
      <img
        src={beforeSrc}
        alt={beforeAlt}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        draggable={false}
      />

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 z-10"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        role="slider"
        tabIndex={0}
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Before and after comparison slider"
        onKeyDown={handleKeyDown}
      >
        {/* Vertical line */}
        <div className="w-0.5 h-full bg-white shadow-md" />

        {/* Grip circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-flame border-2 border-white shadow-lg flex items-center justify-center motion-safe:transition-shadow hover:shadow-xl text-white">
          <ChevronsLeftRight size={20} className="w-5 h-5 text-white shrink-0" />
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-3 left-3 px-2 py-1 bg-charred/70 text-white text-xs font-utility rounded">
        {beforeLabel}
      </span>
      <span className="absolute top-3 right-3 px-2 py-1 bg-charred/70 text-white text-xs font-utility rounded">
        {afterLabel}
      </span>
    </div>
  );
}
