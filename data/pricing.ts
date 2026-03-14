// data/pricing.ts
export interface PricingTier { treatment: string; slug: string; priceFrom: number; priceTo: number; typicalDuration: string; serviceIncludes: string; description: string; }
export const pricingTiers: PricingTier[] = [
  { "treatment": "Infidelity Investigation", "slug": "infidelity-investigation", "priceFrom": 1500, "priceTo": 5000, "typicalDuration": "Retainer + hourly", "serviceIncludes": "Surveillance, HD documentation, GPS tracking, written report", "description": "Most infidelity cases require a $1,500–$2,500 retainer billed at $95–$175/hr. Manhattan's density often requires multi-agent operations which affects total cost. Investigators provide a case estimate after an initial consultation." },
  { "treatment": "Surveillance", "slug": "surveillance", "priceFrom": 125, "priceTo": 250, "typicalDuration": "Per hour + retainer", "serviceIncludes": "Multi-agent teams, HD video and photography, written log, chain of custody report", "description": "Hourly rates reflect the investigator's experience and team size required. Manhattan surveillance almost always requires multiple agents — single-agent rates are lower but produce lower-quality coverage in dense urban environments." },
  { "treatment": "Background Check", "slug": "background-checks", "priceFrom": 250, "priceTo": 2500, "typicalDuration": "Per subject", "serviceIncludes": "Criminal records, civil litigation, employment verification, address history, professional licenses", "description": "Standard personal background checks start at $250–$500. Executive due diligence and multi-jurisdiction corporate investigations range from $1,500–$2,500+. Results are typically delivered within 3–7 business days." },
  { "treatment": "Corporate Investigation", "slug": "corporate-investigations", "priceFrom": 5000, "priceTo": 25000, "typicalDuration": "Project retainer", "serviceIncludes": "Surveillance, document review, interviews, digital forensics coordination, litigation-ready report", "description": "Corporate engagements are scoped individually based on complexity. Financial fraud and IP theft investigations in Manhattan typically require $5,000–$10,000 retainers. Complex multi-party or international matters are priced on consultation." },
  { "treatment": "Asset Search", "slug": "asset-searches", "priceFrom": 500, "priceTo": 3500, "typicalDuration": "Per subject", "serviceIncludes": "Real estate, business interests, vehicle records, financial instruments, corporate affiliations", "description": "Standard domestic asset searches range from $500–$1,500. Multi-jurisdictional searches covering New York and other states run $1,500–$3,500. International asset tracing is scoped separately and involves additional specialist resources." },
  { "treatment": "Child Custody Investigation", "slug": "child-custody-investigations", "priceFrom": 1500, "priceTo": 5000, "typicalDuration": "Retainer + hourly", "serviceIncludes": "Surveillance, lifestyle documentation, parenting observation, court-ready evidence package", "description": "Custody investigations follow a similar structure to infidelity cases — a retainer covers initial surveillance with hourly billing against it. Investigators will advise on scope after understanding the specific concerns and existing custody arrangement." }
];
export const servicePricingMap: Record<string, string[]> = {
  "infidelity-investigation": ["infidelity-investigation"],
  "surveillance": ["surveillance"],
  "background-checks": ["background-checks"],
  "corporate-investigations": ["corporate-investigations"],
  "asset-searches": ["asset-searches"],
  "child-custody-investigations": ["child-custody-investigations"]
};
export function getPricingForService(serviceId: string): PricingTier[] {
  const slugs = servicePricingMap[serviceId] || ['surveillance'];
  return pricingTiers.filter(p => slugs.includes(p.slug));
}
export const treatmentIncludes = [
  "Surveillance, HD documentation, GPS tracking, written report",
  "Multi-agent teams, HD video and photography, written log, chain of custody report",
  "Criminal records, civil litigation, employment verification, address history, professional licenses",
  "Surveillance, document review, interviews, digital forensics coordination, litigation-ready report",
  "Real estate, business interests, vehicle records, financial instruments, corporate affiliations",
  "Surveillance, lifestyle documentation, parenting observation, court-ready evidence package"
];
export const financeInfo = { available: false, interestFree: false, monthlyFrom: 0, spreadOver: '', description: 'Most investigators accept retainer payments by credit card, check, or wire transfer. Staged billing against retainers is standard practice for ongoing cases.' };
