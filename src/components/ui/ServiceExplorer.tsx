"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, CheckCircle, Wrench, Hammer, Sparkles, Home, Droplets, Zap, Flame } from "lucide-react";

type ExploreMode = "trade" | "room";

interface ExploreCard {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tasks: string[];
  turnaround: string;
  href: string;
}

const tradeCards: ExploreCard[] = [
  {
    id: "remodel",
    title: "Remodeling & Renovations",
    subtitle: "Turnkey Kitchen, Bath & Living Upgrades",
    image: "/assets/images/decorative/service_trade_remodel.jpg",
    tasks: ["Chef Kitchen Remodels", "Spa Bathroom Suites", "Finished Basement Living", "Structural Deck Rebuilds"],
    turnaround: "2 - 6 Weeks",
    href: "/services#remodeling",
  },
  {
    id: "plumbing",
    title: "Plumbing & Water Systems",
    subtitle: "Precision Diagnostics, Leaks & Fixtures",
    image: "/assets/images/decorative/service_trade_plumbing.jpg",
    tasks: ["Emergency Leak Repair", "Luxury Fixture Upgrades", "Drain Snaking & Clearing", "Water Heater Diagnostic"],
    turnaround: "Same-Day / 24h",
    href: "/services/repairs",
  },
  {
    id: "electrical",
    title: "Electrical & Smart Tech",
    subtitle: "Panels, Wiring, EV Chargers & Lighting",
    image: "/assets/images/decorative/electrician_panel_wiring.jpg",
    tasks: ["200A Breaker Overhauls", "EV Charger Installation", "Architectural LED Lighting", "Outlet & Switch Rewiring"],
    turnaround: "1 - 2 Days",
    href: "/services/repairs",
  },
  {
    id: "interior",
    title: "Carpentry & Flooring",
    subtitle: "Custom Millwork, French Oak & Trim",
    image: "/assets/images/decorative/service_trade_carpentry.jpg",
    tasks: ["Herringbone Hardwood", "Custom Cabinets & Vanities", "Crown Molding & Baseboards", "Door & Window Framing"],
    turnaround: "3 - 7 Days",
    href: "/services/interior",
  },
  {
    id: "exterior",
    title: "Exterior, Paint & Siding",
    subtitle: "Weatherproof Siding, Paint & Washing",
    image: "/assets/images/decorative/service_trade_exterior.jpg",
    tasks: ["UV-Resistant Painting", "Fiber-Cement Siding", "High-Pressure Washing", "Gutter Maintenance"],
    turnaround: "2 - 5 Days",
    href: "/services/exterior",
  },
  {
    id: "grounds",
    title: "Decks & Outdoor Living",
    subtitle: "Redwood Decks, Patios & Cleanups",
    image: "/assets/images/decorative/service_trade_deck.jpg",
    tasks: ["Multi-Tier Redwood Decks", "Perimeter Railings & Steps", "Irrigation System Repair", "Seasonal Site Cleanups"],
    turnaround: "1 - 2 Weeks",
    href: "/services/landscaping",
  },
];

const roomCards: ExploreCard[] = [
  {
    id: "room-kitchen",
    title: "The Kitchen",
    subtitle: "Heart of the Home Transformations",
    image: "/assets/images/decorative/service_room_kitchen.jpg",
    tasks: ["Waterfall Countertops", "Cabinet Refinishing", "Appliance Integration", "Plumbing & Disposal"],
    turnaround: "2 - 4 Weeks",
    href: "/services#remodeling",
  },
  {
    id: "room-bath",
    title: "The Master & Guest Baths",
    subtitle: "Spa-Grade Upgrades & Custom Tile",
    image: "/assets/images/decorative/service_room_bathroom.jpg",
    tasks: ["Frameless Glass Showers", "Freestanding Soaker Tubs", "Dual Floating Vanities", "Tile Waterproofing"],
    turnaround: "2 - 3 Weeks",
    href: "/services#remodeling",
  },
  {
    id: "room-living",
    title: "Living & Entertainment",
    subtitle: "Hardwood, Lighting & Acoustic Finishes",
    image: "/assets/images/decorative/service_room_living.jpg",
    tasks: ["Hardwood Installation", "Recessed Smart Lighting", "Custom Fireplace Mantels", "Drywall Smoothing"],
    turnaround: "3 - 7 Days",
    href: "/services/interior",
  },
  {
    id: "room-basement",
    title: "Basement & Lower Level",
    subtitle: "Finished Living Suites & Media Rooms",
    image: "/assets/images/decorative/service_room_basement.jpg",
    tasks: ["Moisture Proofing", "Subfloor Leveling", "Wet Bar Installation", "Full Room Conversion"],
    turnaround: "4 - 6 Weeks",
    href: "/services#remodeling",
  },
  {
    id: "room-exterior",
    title: "Exterior & Outdoor Deck",
    subtitle: "Curb Appeal & Outdoor Entertaining",
    image: "/assets/images/decorative/service_room_deck.jpg",
    tasks: ["Deck Restoration", "Siding Replacement", "Exterior Trim Paint", "Pressure Wash Prep"],
    turnaround: "1 - 2 Weeks",
    href: "/services/exterior",
  },
  {
    id: "room-mechanical",
    title: "Utility, Panel & HVAC",
    subtitle: "Behind-the-Walls Infrastructure",
    image: "/assets/images/decorative/service_room_mechanical.jpg",
    tasks: ["Breaker Upgrades", "Whole-Home Surge", "Leak Isolation Valves", "HVAC Tune-Ups"],
    turnaround: "Same-Day / 2 Days",
    href: "/services/repairs",
  },
];

export function ServiceExplorer() {
  const [mode, setMode] = useState<ExploreMode>("trade");
  const cards = mode === "trade" ? tradeCards : roomCards;

  return (
    <div className="section-container">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-xs font-utility uppercase tracking-widest text-flame-button font-semibold block mb-2">
            Multi-Dimensional Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-charred leading-tight">
            Services Built Around Your Home
          </h2>
          <p className="text-base text-iron max-w-xl mt-3">
            Explore our end-to-end capabilities either by specialized trade craftsmanship or room-by-room across your residence.
          </p>
        </div>

        {/* Dual-Track Toggle */}
        <div className="inline-flex p-1.5 rounded-full bg-cloud border border-border shadow-sm self-start md:self-auto">
          <button
            onClick={() => setMode("trade")}
            className={`px-5 py-2.5 rounded-full text-xs font-body font-semibold tracking-wide transition-all ${
              mode === "trade"
                ? "bg-flame-button text-white shadow-sm"
                : "text-iron hover:text-charred"
            }`}
          >
            Explore by Trade
          </button>
          <button
            onClick={() => setMode("room")}
            className={`px-5 py-2.5 rounded-full text-xs font-body font-semibold tracking-wide transition-all ${
              mode === "room"
                ? "bg-flame-button text-white shadow-sm"
                : "text-iron hover:text-charred"
            }`}
          >
            Explore by Room
          </button>
        </div>
      </div>

      {/* Grid of Cards with High-Res Photography */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div
            key={card.id}
            className="group flex flex-col bg-cloud rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:border-flame-button/40 transition-all duration-300"
          >
            {/* Top Image Frame */}
            <div className="relative aspect-[16/10] overflow-hidden bg-stone">
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                <span className="text-xs font-utility uppercase tracking-wider bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20">
                  {card.subtitle}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-utility bg-flame-button/90 text-white px-2 py-0.5 rounded">
                  <Clock className="w-3 h-3" />
                  {card.turnaround}
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-xl font-display text-charred group-hover:text-flame-button transition-colors">
                  {card.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {card.tasks.map((task, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-iron">
                      <CheckCircle className="w-3.5 h-3.5 text-flame-button shrink-0" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-between">
                <Link
                  href={card.href}
                  className="text-xs font-body font-semibold text-charred hover:text-flame-button inline-flex items-center gap-1.5 transition-colors"
                >
                  View Service Details <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href={`/contact?service=${encodeURIComponent(card.title)}`}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-body font-semibold bg-flame-button/10 text-flame-button hover:bg-flame-button hover:text-white transition-colors"
                >
                  Get Estimate
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
