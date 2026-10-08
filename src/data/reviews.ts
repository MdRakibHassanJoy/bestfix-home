export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  projectType: string;
  date: string;
  title: string;
  text: string;
  verified: boolean;
}

export const reviewsAvailable = true;

export const reviews: Review[] = [
  {
    id: 'rev-1',
    name: 'Marcus & Elena Sterling',
    location: 'Dallas, TX',
    rating: 5,
    projectType: 'Kitchen Remodel & Electrical',
    date: '3 weeks ago',
    title: 'Flawless execution from walkthrough to final cleanup',
    text: 'BestFix Home completely transformed our 1990s kitchen. The tradespeople were courteous, wore boot covers every time they entered, and finished the cabinetry and quartz waterfall island 2 days ahead of schedule. Truly contractor polish at its highest standard.',
    verified: true
  },
  {
    id: 'rev-2',
    name: 'David K. Henderson',
    location: 'Philadelphia, PA',
    rating: 5,
    projectType: 'Emergency Plumbing & Ceiling Repair',
    date: '1 month ago',
    title: 'Dispatched within 90 minutes on a Sunday morning',
    text: 'A burst secondary line flooded our hallway bathroom ceiling. BestFix dispatch had a licensed plumbing specialist and drywall team on site in under two hours. They stopped the leak, replaced the damaged drywall, and painted it seamlessly. Life savers.',
    verified: true
  },
  {
    id: 'rev-3',
    name: 'Sarah Jenkins-Cole',
    location: 'Denver, CO',
    rating: 5,
    projectType: 'Exterior Redwood Deck Rebuild',
    date: '2 months ago',
    title: 'Rock-solid craftsmanship that passed inspection on first try',
    text: 'Our HOA is notoriously strict about structural decks. The BestFix crew handled the architectural drawings, permits, and built an exquisite multi-level redwood deck with integrated low-voltage lighting. Zero surprises on the final invoice.',
    verified: true
  },
  {
    id: 'rev-4',
    name: 'Robert C. Vance',
    location: 'Atlanta, GA',
    rating: 5,
    projectType: 'French Oak Hardwood Installation',
    date: '2 months ago',
    title: 'Precision flooring work you rarely find nowadays',
    text: 'We had 2,400 sq ft of herringbone oak installed throughout our main level. The cuts along our limestone hearth were razor sharp. You can immediately tell their carpenters have 10+ years of trade experience.',
    verified: true
  },
  {
    id: 'rev-5',
    name: 'Claire & Todd Morrison',
    location: 'Chicago, IL',
    rating: 5,
    projectType: 'Full Basement Suite Finishing',
    date: '3 months ago',
    title: 'Turned a dark storage basement into our family’s favorite room',
    text: 'From subfloor moisture sealing to recessed lighting and custom cabinetry, the crew kept the workspace spotless every single evening. The 1-Year craftsmanship guarantee gave us complete confidence.',
    verified: true
  },
  {
    id: 'rev-6',
    name: 'Gregory M. Alvarez',
    location: 'Phoenix, AZ',
    rating: 5,
    projectType: 'Exterior Painting & Stucco Repair',
    date: '4 months ago',
    title: 'Outstanding prep work and heat-resistant finish',
    text: 'In the Arizona sun, paint jobs fail if prep is rushed. BestFix spent two full days pressure washing, caulking, and repairing hairline stucco cracks before laying down premium UV coating. The house looks brand new.',
    verified: true
  }
];
