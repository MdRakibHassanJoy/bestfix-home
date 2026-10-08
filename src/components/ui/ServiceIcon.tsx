import { Wrench, Paintbrush, Home, Trees, Hammer } from "lucide-react";

interface ServiceIconProps {
  name: string;
  className?: string;
  size?: number;
}

/**
 * One distinct Lucide icon per service category with explicit dimensions.
 */
export function ServiceIcon({ name, className = "w-6 h-6", size = 24 }: ServiceIconProps) {
  switch (name) {
    case "wrench":
      return <Wrench size={size} className={className} />;
    case "paintbrush":
      return <Paintbrush size={size} className={className} />;
    case "home":
      return <Home size={size} className={className} />;
    case "leaf":
      return <Trees size={size} className={className} />;
    case "hammer":
      return <Hammer size={size} className={className} />;
    default:
      return <Wrench size={size} className={className} />;
  }
}
