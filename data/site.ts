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
  { "icon": "PoundSterling", "title": "Confidential Consultation", "description": "All initial consultations are strictly confidential. We discuss your situation and match you with the right investigator before any commitment is required." }
];
export const FAQS_HOME = [
  { "question": "How does the Private Investigator Manhattan matching service work?", "answer": "Tell us about your case — the type of investigation, what you know, and your objective. We connect you with licensed investigators from our vetted Manhattan network who have handled similar cases. The consultation is confidential and there's no obligation until you choose to proceed." },
  { "question": "How quickly can I be matched with a private investigator in Manhattan?", "answer": "Most clients receive an introduction within 24 hours. For urgent cases — such as active surveillance needs or imminent legal deadlines — we can arrange same-day contact with an available investigator." },
  { "question": "Is my inquiry kept completely confidential?", "answer": "Absolutely. All information you share is held in strict confidence. Investigators in our network operate under professional confidentiality obligations, and we never share your information with any third party." }
];
export const FAQS_SERVICES = [
  { "question": "Are private investigators legal in New York State?", "answer": "Yes. Private investigation is a licensed profession in New York under Article 7 of the General Business Law. Licensed PIs can legally conduct surveillance in public spaces, run background checks, locate assets, and gather evidence for legal proceedings. All investigators in our network hold current NYS licenses." },
  { "question": "Can evidence gathered by a private investigator be used in court?", "answer": "Yes, provided it is collected legally. Evidence must be gathered in compliance with New York privacy law and the Federal Wiretapping Act. Our network investigators understand these standards — everything they collect is documented with chain of custody and structured for admissibility." },
  { "question": "What does a private investigator in Manhattan typically charge?", "answer": "Rates in Manhattan typically range from $95 to $250 per hour depending on the investigator's experience and the nature of the work. Most cases require a retainer of $1,500 to $5,000. Corporate and complex asset cases command higher rates. We'll give you a realistic cost estimate before any introduction." },
  { "question": "What's the difference between hiring a solo PI and a PI agency?", "answer": "Solo investigators offer direct access and lower overhead costs. Agencies bring team capability — essential for multi-agent surveillance in Manhattan's dense environment — plus backup coverage and broader resource networks. We match based on your case type: personal matters often suit individual investigators, while corporate and complex cases benefit from agency resources." }
];
export const FAQS_LOCATION = [
  { "question": "Do you cover all Manhattan neighborhoods?", "answer": "Yes — from the Financial District and Tribeca to Midtown, the Upper East and West Sides, Harlem, and Washington Heights. Our investigators know Manhattan's geography intimately, which matters significantly for urban surveillance operations." },
  { "question": "Why hire a Manhattan-based investigator rather than a firm from outside the city?", "answer": "Manhattan surveillance requires specific tactical knowledge — understanding subway routes, building layouts, foot surveillance in dense pedestrian areas, and the city's 24/7 rhythm. A Manhattan investigator doesn't need to learn the environment on your dime. They already know it." },
  { "question": "Can Manhattan investigators handle cases that extend to other boroughs?", "answer": "Yes. While our primary focus is Manhattan, investigators in our network are licensed throughout New York State and regularly work cases across all five boroughs. We note the other NYC boroughs in our coverage area so you can search by neighborhood wherever your case takes you." }
];
export const testimonials = TESTIMONIALS;
export const trustBadges = TRUST_BADGES;
