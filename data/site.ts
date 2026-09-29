// data/site.ts
export const siteConfig = {
  "name": "Private Investigator Manhattan",
  "tagline": "Licensed Private Investigators Serving Manhattan and New York City",
  "url": "https://www.privateinvestigatormanhattan.com",
  "description": "Connect with licensed private investigators in Manhattan. Expert infidelity investigations, surveillance, background checks, corporate investigations, asset searches, and child custody cases. Free confidential consultation."
};
// Real testimonials only. FTC Endorsement Guides (16 CFR Part 255)
// prohibit fabricated reviews on US lead-gen sites — and Google's
// review-snippet policy explicitly bans review schema for fabricated
// or unverifiable testimonials. Collect real client feedback and add
// items in this format (id, name, location, service, rating, text).
export const TESTIMONIALS: {
  id: string;
  name: string;
  location: string;
  service: string;
  rating: number;
  text: string;
}[] = [];
export const TRUST_BADGES = [
  { "icon": "Award", "title": "NYS Licensed Investigators", "description": "Every PI in our network holds a current New York State license under Article 7 of the General Business Law — non-negotiable for court-admissible evidence." },
  { "icon": "ShieldCheck", "title": "Fully Insured and Bonded", "description": "All investigators carry comprehensive liability insurance and are bonded, protecting you and ensuring your case is handled to professional legal standards." },
  { "icon": "UserCheck", "title": "Former Law Enforcement", "description": "Our network includes investigators with NYPD, FBI, and federal agency backgrounds — professionals who understand evidence standards and New York court requirements." },
  { "icon": "DollarSign", "title": "Confidential Consultation", "description": "All initial consultations are strictly confidential. We discuss your situation and match you with the right investigator before any commitment is required." }
];
export const FAQS_HOME = [
  {
    "question": "Does this website conduct investigations?",
    "answer": "No. Private Investigator Manhattan is a referral and matching service. An independent provider discusses the scope and price with you, and you decide whether to engage them."
  },
  {
    "question": "How do I assess an investigator before hiring?",
    "answer": "Ask for their New York license details, experience with your case type, insurance information, proposed methods, and written terms. Verify the license through the Department of State and review the scope before paying."
  },
  {
    "question": "What affects the cost?",
    "answer": "The provider sets the price for the agreed work. Compare billable hours, staffing, minimum bookings, expenses, reporting, and applicable tax. An initial inquiry is not authorization to begin an investigation."
  }
];
export const FAQS_SERVICES = [
  {
    "question": "How do I verify a New York private investigator?",
    "answer": "Use the New York Department of State’s official license search and match the individual or agency details to the provider you would engage. Ask about relevant experience, insurance, and who will perform the work."
  },
  {
    "question": "Will an investigator’s report be admissible in court?",
    "answer": "Admissibility depends on the evidence and the applicable rules. Discuss the intended use with your attorney; a license or a paid report does not guarantee admission or a particular outcome."
  },
  {
    "question": "How should I compare prices?",
    "answer": "Request the same scope from each provider and compare staffing, minimum hours, expenses, reporting, tax, and payment terms. Confirm whether an hourly quote is per investigator or for the whole team."
  }
];
export const FAQS_LOCATION = [
  { "question": "Do you cover all Manhattan neighborhoods?", "answer": "Yes — from the Financial District and Tribeca to Midtown, the Upper East and West Sides, Harlem, and Washington Heights. Our investigators know Manhattan's geography intimately, which matters significantly for urban surveillance operations." },
  { "question": "Why hire a Manhattan-based investigator rather than a firm from outside the city?", "answer": "Manhattan surveillance requires specific tactical knowledge — understanding subway routes, building layouts, foot surveillance in dense pedestrian areas, and the city's 24/7 rhythm. A Manhattan investigator doesn't need to learn the environment on your dime. They already know it." },
  { "question": "Can Manhattan investigators handle cases that extend to other boroughs?", "answer": "Yes. While our primary focus is Manhattan, investigators in our network are licensed throughout New York State and regularly work cases across all five boroughs. We note the other NYC boroughs in our coverage area so you can search by neighborhood wherever your case takes you." }
];
export const testimonials = TESTIMONIALS;
export const trustBadges = TRUST_BADGES;
