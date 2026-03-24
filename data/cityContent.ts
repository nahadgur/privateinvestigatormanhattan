// data/cityContent.ts
import { getLocationProfileByName, type LocationProfile } from './locationProfiles';

function prof(city: string): LocationProfile | null { return getLocationProfileByName(city) || null; }
function titleCase(str: string): string { return str.replace(/\b\w/g, c => c.toUpperCase()); }
function sizeLabel(p: LocationProfile): string {
  switch (p.avgClientType) { case 'corporate': return 'corporate clients'; case 'domestic': return 'private clients'; case 'affluent': return 'high-net-worth clients'; case 'mixed': return 'local clients'; case 'legal': return 'attorneys and legal professionals'; default: return 'clients'; }
}

export const cityPageContent = {
  heroDesc: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return `Licensed private investigators covering ${cityName}. Free consultation, no obligation.`;
    return `From ${p.clientMix[0]} to ${p.clientMix[2] || p.clientMix[1]} — whatever your investigation need in ${cityName}, we match you with a NYS-licensed investigator who works the ${p.area} area every day. Free confidential consultation.`;
  },
  introHeading: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return `Private Investigation Services in ${cityName}`;
    return `Private Investigation for ${cityName}'s ${titleCase(p.clientMix[0])} and Beyond`;
  },
  introParagraphs: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return [`Private investigation in ${cityName} requires licensed professionals with local knowledge.`, `Our matching service connects you with investigators who understand your specific situation.`];
    return [
      `${p.marketContext} Our matching service connects you with investigators who work this specific area — not generic PIs who cover "all of New York" from an office in New Jersey.`,
      `The investigation needs here are specific to ${cityName}'s character: ${p.investigationNeeds.charAt(0).toLowerCase() + p.investigationNeeds.slice(1)}. ${cityName}'s ${sizeLabel(p)} need investigators who know the ${p.area} area and the specific case types it generates.`
    ];
  },
  matchingHeading: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return `Benefits of Licensed Investigation in ${cityName}`;
    return `Why ${cityName}'s ${titleCase(p.clientMix[0])} Need Matched Investigators`;
  },
  matchingCards: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return [
      { iconName: 'Star', title: "NYS Licensed", desc: `Every investigator is NYS licensed, bonded, and insured.` },
      { iconName: 'Shield', title: "Court-Ready Evidence", desc: `Documentation that meets New York court standards.` },
      { iconName: 'Clock', title: "Local Knowledge", desc: `Investigators who know ${cityName}'s streets and patterns.` },
      { iconName: 'CheckCircle', title: "Free Consultation", desc: `Confidential case discussion before any commitment.` }
    ];
    return [
      { iconName: 'Star', title: `${titleCase(p.clientMix[0])} Case Expertise`, desc: `${cityName}'s investigation demand centres on ${p.clientMix.slice(0, 3).join(', ')}. We match you with investigators who handle these exact case types — not generalists learning on your budget.` },
      { iconName: 'Shield', title: "Court-Admissible Evidence", desc: `Every investigation produces evidence documented to New York court standards — HD video, timestamped photography, GPS data, and sworn investigator affidavits ready for your attorney.` },
      { iconName: 'Clock', title: `${p.area} Knowledge`, desc: `${p.caseProfile.split(',')[0]}. Your investigator knows the streets, venues, and patterns that define investigation in ${cityName}'s ${p.area} area.` },
      { iconName: 'CheckCircle', title: "Complete Confidentiality", desc: `${p.investigationNeeds.split(',')[0]}. Your investigation remains confidential until you decide to use the evidence. No leaks, no traces, no premature disclosure.` }
    ];
  },
  sidebarCta: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return { heading: `Private Investigators in ${cityName}`, description: `Licensed investigators covering ${cityName}.` };
    return { heading: `Investigators for ${cityName}'s ${titleCase(p.clientMix[0])}`, description: `Get matched with NYS-licensed investigators experienced in ${p.caseProfile.split(',')[0].toLowerCase()} in the ${p.area} area. Free confidential consultation.` };
  },
  sidebarFinance: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return { heading: `Transparent Pricing`, description: `Investigators provide clear fee structures before engagement.` };
    return { heading: `Clear Pricing for ${cityName} Cases`, description: `Most ${cityName} investigators charge hourly rates ($75-$300/hr) or flat fees for defined services. All provide clear cost estimates after the free consultation — no hidden fees.` };
  },
  sidebarTrustPoints: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return [{ text: "Free confidential consultation" }, { text: "All investigators NYS licensed" }, { text: "Bonded and insured investigators" }];
    return [
      { text: `Investigators experienced with ${p.clientMix[0]} in the ${p.area} area` },
      { text: `NYS-licensed, bonded, and insured investigators` },
      { text: `Free confidential consultation — no obligation` },
    ];
  },
  bottomCta: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return { heading: `Find Your Private Investigator in ${cityName}`, description: `Connect with NYS-licensed investigators who handle your type of case.` };
    return { heading: `Get Matched With a ${cityName} Private Investigator`, description: `Whether you need ${p.clientMix[0]}, ${p.clientMix[2] || p.clientMix[1]}, or any other investigation service in ${cityName}, we match you with a licensed investigator who handles your case type every day.` };
  },
  faqs: (cityName: string) => {
    const p = prof(cityName);
    if (!p) return [
      { question: `Do your investigators cover ${cityName}?`, answer: `Yes, our network includes NYS-licensed investigators covering ${cityName}.` },
      { question: `How much do private investigators cost?`, answer: `$75-$300/hour depending on service type, or flat fees for defined engagements.` },
      { question: `Is a free consultation really confidential?`, answer: `Yes — everything you discuss is protected by investigator-client confidentiality.` },
    ];
    return [
      { question: `What investigation services do your ${cityName} investigators offer?`, answer: `Our ${cityName} network handles the full range — infidelity investigation, surveillance, background checks, corporate investigation, asset searches, and child custody documentation. ${p.caseProfile.split('.')[0]}. We match you with an investigator experienced in your specific case type.` },
      { question: `How much do private investigators cost in ${cityName}?`, answer: `Rates vary by service: background checks $300-$3,000, surveillance $150-$300/hr per agent, infidelity cases $2,000-$8,000, corporate investigations $5,000-$100,000+. All ${cityName} investigators provide clear cost estimates after the free confidential consultation.` },
      { question: `Are your ${cityName} investigators licensed?`, answer: `Yes — every investigator in our ${cityName} network holds a current NYS Private Investigator license, carries professional liability insurance, and is bonded. We verify credentials before matching any investigator with clients.` },
      { question: `Can I meet an investigator in ${cityName}?`, answer: `Yes — most investigators offer in-person consultations in ${cityName}. Some cases are better discussed face-to-face, particularly sensitive domestic matters. The initial consultation is free, completely confidential, and carries no obligation.` },
    ];
  },
  schemaServiceTypes: ["infidelity-investigation", "surveillance", "background-checks", "corporate-investigations", "asset-searches", "child-custody-investigations"],
};
