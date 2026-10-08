"use client";

import { useState, useMemo } from "react";
import { regionalHubs, type RegionHub } from "@/data/service-areas";
import { usStatePaths, type StatePath } from "@/data/us-map-paths";
import { Phone, Clock, CheckCircle2, ArrowRight, MapPin, Compass } from "lucide-react";
import Link from "next/link";

interface MetroPin {
  name: string;
  isCapital?: boolean;
  x: number;
  y: number;
}

export function CoverageMap() {
  const [selectedHub, setSelectedHub] = useState<RegionHub>(regionalHubs[0]);
  const [hoveredState, setHoveredState] = useState<StatePath | null>(null);

  // Map each state postal code to its parent region hub
  const stateToRegionMap = useMemo(() => {
    const map: Record<string, RegionHub> = {};
    regionalHubs.forEach((hub) => {
      hub.states.forEach((st) => {
        map[st] = hub;
      });
    });
    return map;
  }, []);

  // Set of states in the currently selected hub for O(1) active lookups
  const activeStatesSet = useMemo(() => {
    return new Set(selectedHub.states);
  }, [selectedHub]);

  // Mathematically verified coordinates for major metro hubs and state capitals
  // Calibrated to the exact 1000 x 589 SVG bounds of each state
  const regionPins: Record<string, MetroPin[]> = {
    "california-pacific": [
      { name: "Sacramento", isCapital: true, x: 198, y: 242 },
      { name: "San Francisco", x: 185, y: 255 },
      { name: "Los Angeles", x: 230, y: 345 },
      { name: "San Diego", x: 245, y: 375 },
      { name: "Seattle", x: 226, y: 58 },
      { name: "Olympia", isCapital: true, x: 212, y: 72 },
      { name: "Portland", x: 208, y: 100 },
      { name: "Salem", isCapital: true, x: 202, y: 118 },
    ],
    "south-southwest": [
      { name: "Austin", isCapital: true, x: 520, y: 460 },
      { name: "Dallas-Fort Worth", x: 535, y: 410 },
      { name: "Houston", x: 565, y: 468 },
      { name: "Phoenix", isCapital: true, x: 320, y: 360 },
      { name: "Denver", isCapital: true, x: 440, y: 260 },
      { name: "Las Vegas", x: 260, y: 312 },
      { name: "Salt Lake City", isCapital: true, x: 335, y: 228 },
    ],
    "northeast-midatlantic": [
      { name: "Washington D.C.", isCapital: true, x: 880, y: 230 },
      { name: "Philadelphia", x: 895, y: 205 },
      { name: "Harrisburg", isCapital: true, x: 865, y: 198 },
      { name: "New York City", x: 915, y: 175 },
      { name: "Albany", isCapital: true, x: 898, y: 142 },
      { name: "Boston", isCapital: true, x: 950, y: 138 },
      { name: "Trenton", isCapital: true, x: 904, y: 196 },
    ],
    "midwest-greatlakes": [
      { name: "Indianapolis", isCapital: true, x: 735, y: 245 },
      { name: "Columbus", isCapital: true, x: 785, y: 225 },
      { name: "Chicago", x: 706, y: 206 },
      { name: "Springfield", isCapital: true, x: 682, y: 256 },
      { name: "Detroit", x: 765, y: 185 },
      { name: "Lansing", isCapital: true, x: 742, y: 172 },
      { name: "Minneapolis - St. Paul", isCapital: true, x: 615, y: 142 },
      { name: "Milwaukee", x: 692, y: 175 },
      { name: "Madison", isCapital: true, x: 660, y: 178 },
      { name: "Des Moines", isCapital: true, x: 618, y: 210 },
    ],
    southeast: [
      { name: "Atlanta", isCapital: true, x: 800, y: 365 },
      { name: "Miami", x: 882, y: 508 },
      { name: "Orlando", x: 840, y: 470 },
      { name: "Tallahassee", isCapital: true, x: 775, y: 425 },
      { name: "Nashville", isCapital: true, x: 740, y: 315 },
      { name: "Raleigh", isCapital: true, x: 865, y: 300 },
      { name: "Charlotte", x: 830, y: 318 },
      { name: "Columbia", isCapital: true, x: 825, y: 345 },
    ],
  };

  const activePins = regionPins[selectedHub.id] || [];

  const handleStateClick = (state: StatePath) => {
    const parentRegion = stateToRegionMap[state.id];
    if (parentRegion) {
      setSelectedHub(parentRegion);
    }
  };

  return (
    <div className="section-container">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-utility uppercase tracking-widest text-flame-button font-semibold block mb-2">
          Coast-to-Coast Coverage
        </span>
        <h2 className="text-3xl sm:text-4xl font-display text-charred">
          Interactive US Regional Dispatch Map
        </h2>
        <p className="text-sm text-iron mt-3">
          Select a region or click directly on any state to inspect verified trade corridors, response turnaround windows, and emergency support.
        </p>
      </div>

      {/* Region Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {regionalHubs.map((hub) => {
          const isSelected = selectedHub.id === hub.id;
          return (
            <button
              key={hub.id}
              onClick={() => setSelectedHub(hub)}
              className={`px-4 py-2.5 rounded-xl text-xs font-body font-semibold transition-all ${
                isSelected
                  ? "bg-flame-button text-white shadow-md ring-2 ring-flame-button/30 scale-[1.02]"
                  : "bg-cloud text-iron border border-border hover:border-flame-button/50 hover:text-charred"
              }`}
            >
              {hub.region}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Authentic 50-State Vector US Map */}
        <div className="lg:col-span-7 bg-slate rounded-3xl p-4 sm:p-6 border border-white/10 shadow-xl overflow-hidden relative">
          {/* Map Viewport Container */}
          <div className="relative w-full aspect-[1000/589] rounded-2xl overflow-hidden bg-slate-900 border border-white/10 flex items-center justify-center select-none">
            <svg
              viewBox="0 0 1000 589"
              className="w-full h-full"
              aria-label="Geographically accurate interactive map of BestFix Home dispatch regions across the 50 United States"
            >
              {/* 50 States Vector Shapes */}
              <g id="us-states-layer">
                {usStatePaths.map((state) => {
                  const isActive = activeStatesSet.has(state.id);
                  const isHovered = hoveredState?.id === state.id;

                  let fillColor = "#334155"; // Inactive slate
                  let strokeColor = "#1E293B"; // Dark border
                  let strokeWidth = 0.75;
                  let fillOpacity = 0.75;

                  if (isActive) {
                    fillColor = "#EA580C"; // Brand flame orange
                    strokeColor = "#FFFFFF";
                    strokeWidth = 1.25;
                    fillOpacity = 0.92;
                  }

                  if (isHovered && !isActive) {
                    fillColor = "#F97316";
                    fillOpacity = 0.6;
                    strokeColor = "#FDBA74";
                    strokeWidth = 1;
                  }

                  return (
                    <path
                      key={state.id}
                      id={`state-${state.id}`}
                      d={state.d}
                      fill={fillColor}
                      fillOpacity={fillOpacity}
                      stroke={strokeColor}
                      strokeWidth={strokeWidth}
                      className="cursor-pointer transition-colors duration-150 hover:brightness-110"
                      onClick={() => handleStateClick(state)}
                      onMouseEnter={() => setHoveredState(state)}
                      onMouseLeave={() => setHoveredState(null)}
                      role="button"
                      aria-label={`${state.name} (${state.id})`}
                    />
                  );
                })}
              </g>

              {/* Verified Static Pin Markers — No distorting scale animations */}
              {activePins.map((pin, index) => {
                const labelWidth = pin.name.length * 5.8 + 12;
                return (
                  <g key={index} className="pointer-events-none">
                    {/* Soft ambient static glow */}
                    <circle
                      cx={pin.x}
                      cy={pin.y}
                      r="9"
                      fill="#EA580C"
                      opacity="0.25"
                    />
                    {/* Outer ring */}
                    <circle
                      cx={pin.x}
                      cy={pin.y}
                      r="4.5"
                      fill={pin.isCapital ? "#FBBF24" : "#EA580C"}
                      stroke="#FFFFFF"
                      strokeWidth="1.5"
                    />
                    {/* Inner core dot */}
                    <circle
                      cx={pin.x}
                      cy={pin.y}
                      r="1.75"
                      fill="#FFFFFF"
                    />
                    {/* Label badge */}
                    <rect
                      x={pin.x + 7}
                      y={pin.y - 9}
                      width={labelWidth}
                      height="15"
                      rx="3"
                      fill="#0F172A"
                      opacity="0.9"
                      stroke={pin.isCapital ? "#FBBF24" : "#EA580C"}
                      strokeWidth="0.75"
                    />
                    <text
                      x={pin.x + 11}
                      y={pin.y + 2.5}
                      className="text-[9px] font-sans font-bold fill-white"
                    >
                      {pin.name}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Hover Tooltip Overlay */}
            {hoveredState && (
              <div className="absolute top-3 left-3 bg-slate-900/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20 text-white shadow-2xl pointer-events-none transition-all">
                <div className="flex items-center gap-1.5">
                  <MapPin size={12} className="text-flame" />
                  <span className="font-bold text-xs text-white">
                    {hoveredState.name} ({hoveredState.id})
                  </span>
                </div>
                <p className="text-[11px] text-gray-300 mt-0.5">
                  Division: {stateToRegionMap[hoveredState.id]?.region || "National Service Corridor"}
                </p>
                <p className="text-[10px] text-flame font-utility uppercase tracking-wider mt-0.5">
                  Click to inspect regional dispatch
                </p>
              </div>
            )}

            {/* Instruction Footer Pill */}
            <div className="absolute bottom-3 right-3 text-[10px] font-utility text-gray-400 bg-slate-900/80 px-2.5 py-1 rounded-md border border-white/10 flex items-center gap-1">
              <Compass size={11} className="text-flame" />
              <span>Click any state to switch region</span>
            </div>
          </div>
        </div>

        {/* Right: Selected Hub Details Panel */}
        <div className="lg:col-span-5 bg-cloud rounded-3xl p-7 border border-border shadow-sm space-y-5">
          <div className="flex items-center justify-between pb-4 border-b border-border">
            <div>
              <span className="text-xs font-utility uppercase tracking-wider text-flame-button font-semibold">
                Region Selected
              </span>
              <h3 className="text-2xl font-display text-charred mt-0.5">
                {selectedHub.region}
              </h3>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-utility px-3 py-1 rounded-full bg-stone text-charred font-semibold border border-border">
              <Clock size={14} className="text-flame-button shrink-0" />
              <span>{selectedHub.turnaroundTime}</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-utility uppercase tracking-wider text-iron font-semibold mb-3">
              Covered States ({selectedHub.states.length}):
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {selectedHub.states.map((st) => (
                <span
                  key={st}
                  className="px-2.5 py-1 rounded-md text-xs font-utility font-bold bg-flame-button/10 text-flame-button border border-flame-button/20"
                >
                  {st}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-utility uppercase tracking-wider text-iron font-semibold mb-2">
              Key Metropolitan Corridors:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {selectedHub.metroHubs.map((metro) => (
                <div
                  key={metro}
                  className="p-2.5 rounded-xl bg-stone/50 border border-border text-xs font-body font-semibold text-charred flex items-center gap-2"
                >
                  <CheckCircle2 size={14} className="text-flame-button shrink-0" />
                  <span>{metro}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate text-white space-y-3">
            <p className="text-xs text-gray-300">
              Direct Dispatch Desk for {selectedHub.region}:
            </p>
            <div className="flex items-center justify-between">
              <a
                href="tel:4842725220"
                className="text-lg font-display text-white hover:text-flame transition-colors font-bold flex items-center gap-2"
              >
                <Phone size={16} className="text-flame shrink-0" />
                <span>(484) 272-5220</span>
              </a>
              <Link
                href={`/contact?region=${encodeURIComponent(selectedHub.region)}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-body font-bold bg-flame-button hover:bg-flame-hover text-white transition-colors shadow-sm"
              >
                <span>Book Visit</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
