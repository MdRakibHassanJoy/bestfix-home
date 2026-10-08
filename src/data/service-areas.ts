export interface RegionHub {
  id: string;
  region: string;
  states: string[];
  metroHubs: string[];
  dispatchHotline: string;
  turnaroundTime: string;
  highlightedCoordinates?: { x: number; y: number };
}

export const regionalHubs: RegionHub[] = [
  {
    id: "california-pacific",
    region: "California & Pacific Coast",
    states: ["CA", "WA", "OR", "NV", "ID", "AK", "HI"],
    metroHubs: [
      "Greater Los Angeles & Orange County",
      "San Francisco Bay Area & Silicon Valley",
      "San Diego Metro",
      "Sacramento & Central Valley",
      "Seattle & Puget Sound",
      "Portland Metro",
    ],
    dispatchHotline: "(484) 272-5220",
    turnaroundTime: "Same-Day / 24h Emergency",
  },
  {
    id: "south-southwest",
    region: "Texas & Southwest",
    states: ["TX", "AZ", "UT", "CO", "NM", "OK", "WY", "MT"],
    metroHubs: [
      "Dallas-Fort Worth",
      "Houston Metro",
      "Austin & San Antonio",
      "Phoenix & Scottsdale",
      "Denver Metro",
      "Las Vegas Valley",
    ],
    dispatchHotline: "(484) 272-5220",
    turnaroundTime: "Same-Day / 24h Emergency",
  },
  {
    id: "northeast-midatlantic",
    region: "Northeast & Mid-Atlantic",
    states: ["PA", "NY", "NJ", "MD", "VA", "MA", "CT", "DE", "RI", "NH", "VT", "ME", "DC"],
    metroHubs: [
      "Greater Philadelphia",
      "New York City Metro & Long Island",
      "Northern New Jersey",
      "Washington D.C. & Baltimore",
      "Boston Metro",
    ],
    dispatchHotline: "(484) 272-5220",
    turnaroundTime: "Same-Day / 24h Emergency",
  },
  {
    id: "midwest-greatlakes",
    region: "Midwest & Great Lakes",
    states: ["IL", "OH", "MI", "IN", "WI", "MN", "MO", "IA", "KS", "NE", "ND", "SD"],
    metroHubs: [
      "Chicagoland Area",
      "Columbus Metro",
      "Detroit Metro",
      "Indianapolis",
      "Milwaukee Metro",
      "Twin Cities (Minneapolis-St. Paul)",
    ],
    dispatchHotline: "(484) 272-5220",
    turnaroundTime: "24-48h Guaranteed",
  },
  {
    id: "southeast",
    region: "Southeast & Florida",
    states: ["FL", "GA", "NC", "TN", "SC", "AL", "MS", "KY", "LA", "AR", "WV"],
    metroHubs: [
      "Miami & South Florida",
      "Orlando & Tampa Bay",
      "Atlanta Metro",
      "Charlotte & Raleigh-Durham",
      "Nashville Metro",
    ],
    dispatchHotline: "(484) 272-5220",
    turnaroundTime: "Same-Day / 24h Emergency",
  },
];

export function checkServiceArea(zip: string): "served" | "unknown" | "not-served" {
  const cleanZip = zip.replace(/\D/g, "");
  if (cleanZip.length === 5) {
    const firstDigit = parseInt(cleanZip.charAt(0), 10);
    if (firstDigit >= 0 && firstDigit <= 9) {
      return "served";
    }
  }
  return "unknown";
}

export const serviceAreaDescription =
  "Nationwide service network operating multi-state regional dispatch hubs across the United States, including dedicated California and Pacific Coast divisions.";
