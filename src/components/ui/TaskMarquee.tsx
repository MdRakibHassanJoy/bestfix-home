import React from "react";
import {
  Wrench,
  Zap,
  Paintbrush,
  Home,
  Hammer,
  Droplets,
  Thermometer,
  ShieldCheck,
  Sparkles,
  TreePine,
  CheckCircle2,
} from "lucide-react";

interface TaskItem {
  label: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
}

const tasks: TaskItem[] = [
  { label: "Kitchen Waterfall Quartz & Island", category: "Remodel", icon: Hammer },
  { label: "Emergency Leak Detection & Repair", category: "Plumbing", icon: Droplets },
  { label: "200A Electrical Panel Diagnostic", category: "Electrical", icon: Zap },
  { label: "French Oak Herringbone Hardwood", category: "Interior", icon: Sparkles },
  { label: "Spa Master Bath & Walk-in Shower", category: "Remodel", icon: Hammer },
  { label: "High-Performance Exterior Siding", category: "Exterior", icon: Home },
  { label: "HVAC Seasonal Tune-Up & Airflow", category: "HVAC", icon: Thermometer },
  { label: "Custom Architectural Deck Rebuild", category: "Carpentry", icon: Wrench },
  { label: "High-Pressure Surface Washing", category: "Exterior", icon: Paintbrush },
  { label: "Smart Home Lock & Sensor Install", category: "Repairs", icon: ShieldCheck },
  { label: "Drywall Patch, Sand & Texture Match", category: "Interior", icon: Paintbrush },
  { label: "Sprinkler & Irrigation Diagnostic", category: "Grounds", icon: TreePine },
];

export function TaskMarquee() {
  return (
    <div className="relative w-full overflow-hidden bg-slate py-4 border-y border-white/10 select-none">
      {/* Edge gradient masks for seamless fade */}
      <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-slate to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-slate to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-4">
        {[...tasks, ...tasks].map((task, i) => {
          const Icon = task.icon;
          return (
            <div
              key={i}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/90 hover:bg-white/10 hover:border-flame-button/60 transition-all cursor-default group"
            >
              <span className="p-1.5 rounded-full bg-flame-button/20 text-flame group-hover:bg-flame-button group-hover:text-white transition-colors">
                <Icon className="w-3.5 h-3.5" />
              </span>
              <span className="text-xs font-body font-semibold tracking-wide text-white">
                {task.label}
              </span>
              <span className="text-[10px] font-utility font-medium uppercase px-2 py-0.5 rounded bg-white/10 text-gray-300">
                {task.category}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
