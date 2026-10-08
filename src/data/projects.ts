export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  altBefore: string;
  altAfter: string;
  scope: string[];
  duration: string;
}

export const projectCategories = ['All', 'Remodeling', 'Exterior', 'Plumbing & Electrical'];

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'Custom Chef Kitchen Remodel',
    category: 'Remodeling',
    location: 'Dallas, TX',
    description: 'Complete transformation from outdated 1980s honey-oak cabinets to custom two-tone navy and white shaker cabinetry, Calacatta quartz waterfall countertops, designer brass pulls, and energy-efficient stainless appliances.',
    beforeImage: '/assets/images/projects/kitchen-before.jpg',
    afterImage: '/assets/images/projects/kitchen-after.jpg',
    altBefore: 'Outdated 1980s kitchen with worn oak cabinetry and yellow laminate before remodel',
    altAfter: 'Completed modern kitchen with two-tone navy and white shaker cabinetry, quartz waterfall island, and brass hardware',
    scope: ['Custom Shaker Cabinetry', 'Waterfall Quartz Island', 'Recessed & Pendant LED', 'Subway Tile Backsplash'],
    duration: '4 Weeks'
  },
  {
    id: 'proj-2',
    title: 'Spa Master Bathroom Suite',
    category: 'Remodeling',
    location: 'Philadelphia, PA',
    description: 'Transformed a dated 1990s bathroom with pink tile and brass trim into a five-star spa sanctuary featuring a frameless glass walk-in shower, floating walnut double vanity, and backlit LED mirrors.',
    beforeImage: '/assets/images/projects/bath-before.jpg',
    afterImage: '/assets/images/projects/bath-after.jpg',
    altBefore: 'Dated 1990s bathroom with oak vanity, pink wall tiles, and sliding frosted tub door',
    altAfter: 'Luxury spa bathroom with floating walnut double vanity, frameless glass walk-in shower, and backlit LED mirrors',
    scope: ['Walk-In Glass Shower', 'Dual Floating Vanity', 'Backlit LED Mirrors', 'Porcelain Tile Floor'],
    duration: '3 Weeks'
  },
  {
    id: 'proj-3',
    title: 'Modern Finished Entertainment Basement',
    category: 'Remodeling',
    location: 'Chicago, IL',
    description: 'Converted an unfinished cinderblock basement into a luxury entertainment lounge with custom coffered ceilings, acoustic slat fireplace feature wall, luxury vinyl plank, and built-in wet bar.',
    beforeImage: '/assets/images/projects/basement-before.jpg',
    afterImage: '/assets/images/projects/basement-after.jpg',
    altBefore: 'Unfinished concrete basement with exposed cinderblocks, joists, and overhead ductwork',
    altAfter: 'Modern finished basement entertainment lounge with coffered ceiling, linear fireplace slat wall, and wet bar',
    scope: ['Acoustic Fireplace Slat Wall', 'Custom Coffered Ceiling', 'Built-In Wet Bar', 'Luxury Vinyl Plank'],
    duration: '5 Weeks'
  },
  {
    id: 'proj-4',
    title: 'Architectural Multi-Tier Composite Deck',
    category: 'Exterior',
    location: 'Denver, CO',
    description: 'Demolished a hazardous, weathered wooden deck and constructed an expansive multi-tier composite deck in warm teak with modern black cable railings and integrated stair lighting.',
    beforeImage: '/assets/images/projects/deck-before.jpg',
    afterImage: '/assets/images/projects/deck-after.jpg',
    altBefore: 'Weathered, decaying wooden deck with rotting floorboards and sagging steps',
    altAfter: 'Brand new multi-tier warm teak composite deck with matte black cable railings and integrated stair lighting',
    scope: ['Structural Footings & Framing', 'Composite Decking', 'Black Aluminum & Cable Railing', 'Integrated Step Lights'],
    duration: '2 Weeks'
  },
  {
    id: 'proj-5',
    title: '200A Electrical Service & Panel Overhaul',
    category: 'Plumbing & Electrical',
    location: 'Seattle, WA',
    description: 'Replaced a hazardous vintage Stab-Lok load center with a code-compliant 200-amp breaker panel, whole-home surge protection, arc-fault interrupters, and dedicated EV charging circuitry.',
    beforeImage: '/assets/images/projects/electrical-before.jpg',
    afterImage: '/assets/images/projects/electrical-after.jpg',
    altBefore: 'Hazardous vintage Stab-Lok Federal Pacific load center with tangled mismatched breakers',
    altAfter: 'Code-compliant 200A modern service panel upgrade with clean routing and whole-home surge protection',
    scope: ['200A Service Upgrade', 'Whole-Home Surge Protector', 'AFCI/GFCI Breakers', 'EV Charger Line'],
    duration: '2 Days'
  }
];
