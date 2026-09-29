// data/services.ts
import { serviceFeaturedImages } from './featuredImages';

export interface FAQ { question: string; answer: string; }
export interface Service { id: string; title: string; slug: string; description: string; image: string; imageAlt?: string; icon: string; color: string; faqs: FAQ[]; }
const serviceEntries: Service[] = [
  {
  "id": "infidelity-investigation",
  "title": "Infidelity Investigation",
  "slug": "infidelity-investigation",
  "description": "Request an introduction for an infidelity investigation in Manhattan. Discuss lawful methods, a written scope, costs and reporting with an independent investigator.",
  "faqs": [
    {
      "question": "What can an infidelity investigation establish?",
      "answer": "An investigator can document observations and lawful records within an agreed scope. Findings may support a decision, but behavior alone does not prove an affair and an investigation can be inconclusive."
    },
    {
      "question": "Is surveillance always permitted in New York?",
      "answer": "No. The proposed conduct, location, permissions, privacy rules, and any court orders matter. Discuss lawful methods with the investigator and obtain legal advice for your circumstances."
    },
    {
      "question": "How long does the work take?",
      "answer": "Agree on an initial work period and review point. Timing depends on the question, available information, staffing, and activity during the observation window; there is no guaranteed completion time."
    }
  ],
  "image": "/images/services/infidelity-investigation.webp",
  "icon": "Shield",
  "color": "brand",
  "imageAlt": "Camera and observation notebook inside a parked car near a Manhattan restaurant"
},
  { "id": "surveillance", "title": "Surveillance", "slug": "surveillance", "description": "Professional covert surveillance for personal and corporate cases throughout Manhattan. HD video documentation, multi-agent operations for complex urban environments, and court-ready evidence packages.", "faqs": [
    { "question": "What surveillance methods are used in Manhattan?", "answer": "Manhattan's density and vertical geography require foot surveillance teams rather than vehicle-based operations in most cases. Investigators use HD cameras capable of clear capture from distance, GPS tracking where legally authorized, and rotating agent teams to prevent detection during extended operations." },
    { "question": "How many investigators are needed for Manhattan surveillance?", "answer": "Most Manhattan surveillance requires a minimum of two agents for effective coverage — one can be burned while the other maintains observation. Complex cases in Midtown or busy commercial areas may require three or four agents to maintain a seamless coverage bubble without detection." },
    { "question": "What is included in a surveillance report?", "answer": "Every surveillance engagement produces a written report with timestamped entries, HD photographs and video footage, GPS data where applicable, and a chain of custody log. Reports are structured to meet New York court evidence standards and are typically provided to attorneys directly where legal proceedings are anticipated." }
  ], "image": "/images/surveillance.png", "icon": "Shield", "color": "brand" },
  { "id": "background-checks", "title": "Background Checks", "slug": "background-checks", "description": "Comprehensive background investigations for Manhattan individuals and businesses. Pre-employment screening, business partner due diligence, tenant verification, and personal relationship background checks conducted by licensed investigators.", "faqs": [
    { "question": "What does a professional background check in Manhattan include?", "answer": "A professional background investigation goes well beyond public database searches. It includes criminal history verification across multiple jurisdictions, civil litigation records, bankruptcy and liens, address history, employment verification, professional license checks, and social media analysis. Investigators have access to databases not available to the public or consumer services." },
    { "question": "How is a PI background check different from an online service?", "answer": "Consumer background check services pull from limited, often outdated public databases. A licensed PI has access to professional investigative databases, can conduct source interviews, verify information through direct contact, and produce a report that carries evidentiary weight. The difference matters significantly in high-stakes business or legal contexts." },
    { "question": "How long does a background check take in Manhattan?", "answer": "Standard background checks are typically completed within 3 to 7 business days. Expedited turnarounds are available for urgent hiring or deal-close situations. Complex due diligence investigations covering multiple jurisdictions or international records take longer and will be scoped individually." }
  ], "image": "/images/background-checks.png", "icon": "Shield", "color": "brand" },
  { "id": "corporate-investigations", "title": "Corporate Investigations", "slug": "corporate-investigations", "description": "High-stakes corporate investigations for Manhattan businesses, law firms, and financial institutions. Employee misconduct, intellectual property theft, fraud investigations, competitive intelligence, and executive due diligence.", "faqs": [
    { "question": "What types of corporate investigations are most common in Manhattan?", "answer": "The most frequent Manhattan corporate cases involve employee theft of proprietary information, financial fraud and embezzlement, vendor kickback schemes, insurance fraud, workplace misconduct investigations, and pre-merger due diligence on key executives or business partners. Manhattan's financial industry concentration also generates significant demand for investment fraud and securities-related investigations." },
    { "question": "Can a PI investigate a current employee?", "answer": "Yes. Employers have legitimate grounds to investigate employee conduct where there is reasonable suspicion of misconduct. Investigations must comply with New York labor law and cannot involve illegal surveillance — but they can include surveillance of public activities, document review with proper authorization, and interviews. Your investigator will advise on the legal framework before beginning." },
    { "question": "How do corporate investigators work with attorneys?", "answer": "Most Manhattan corporate investigations are conducted in coordination with legal counsel to ensure evidence is gathered within a privileged framework where appropriate, structured for admissibility, and aligned with the litigation strategy. Investigators in our network have extensive experience working alongside New York law firms and understand courtroom evidence standards." }
  ], "image": "/images/corporate-investigations.png", "icon": "Shield", "color": "brand" },
  {
  "id": "asset-searches",
  "title": "Asset Searches",
  "slug": "asset-searches",
  "description": "Request an introduction for lawful asset research in Manhattan. Explore property and business leads for divorce disclosure, unpaid judgments or a defined business question.",
  "faqs": [
    {
      "question": "Can an asset search guarantee recovery?",
      "answer": "No. Identified property may not belong to the subject or may be unavailable for collection. Ownership, value, exemptions, and enforcement require separate assessment."
    },
    {
      "question": "Can an investigator obtain private bank records without authority?",
      "answer": "A license does not grant unrestricted access. Ask about lawful sources and authority. Consent or legal process may be needed, and impersonation is not an acceptable method."
    },
    {
      "question": "What should an asset-search report include?",
      "answer": "Ask for source references, search dates, corroborated identity matches, unresolved leads, and coverage limits. Agree on the deliverable and cost before engaging the provider."
    }
  ],
  "image": "/images/services/asset-searches.webp",
  "icon": "Shield",
  "color": "brand",
  "imageAlt": "Investigator reviewing Manhattan property maps and ownership records"
},
  { "id": "child-custody-investigations", "title": "Child Custody Investigations", "slug": "child-custody-investigations", "description": "Documented investigations for child custody proceedings in Manhattan. Evidence of parental fitness, lifestyle documentation, substance abuse, neglect, or parenting plan violations — gathered legally and structured for New York family court.", "faqs": [
    { "question": "What evidence can a PI gather for a custody case in New York?", "answer": "Investigators can document a parent's living environment, social activities, sobriety, parenting behaviors, and compliance with existing custody orders through lawful surveillance and observation. This includes timestamped video and photography in public spaces, witness interviews, background investigations, and documentation of who the children are being exposed to." },
    { "question": "How does custody investigation evidence hold up in New York family court?", "answer": "Evidence gathered by licensed investigators is regularly admitted in New York family court proceedings. The key requirements are that it was gathered legally, is properly documented with chain of custody, and is presented through an investigator prepared to testify if required. Investigators in our network understand New York family court standards specifically." },
    { "question": "Is a custody investigation appropriate in my situation?", "answer": "If you have genuine concerns about your child's safety or welfare in the other parent's care, or need to document parenting plan violations, a custody investigation is appropriate. Investigators are experienced in assessing what level of investigation is warranted and will advise honestly if a case doesn't meet the threshold where an investigation would produce useful evidence." }
  ], "image": "/images/child-custody-investigations.png", "icon": "Shield", "color": "brand" },
  { "id": "missing-persons", "title": "Missing Persons", "slug": "missing-persons", "description": "Licensed missing persons investigations across Manhattan. Locate estranged family members, reunite with adoption-related contacts, find old friends or business contacts, and work cases that police classify as low priority. Discreet, professional, and experienced in the specific challenges of locating people in a dense urban environment.", "faqs": [
    { "question": "When should I hire a PI for a missing persons case in Manhattan?", "answer": "You should contact a licensed investigator when a person is not in immediate danger (active danger cases belong with NYPD first) but standard methods haven't produced results. This includes estranged family members, old friends, birth parents or adoptees, debtors or witnesses, former business contacts, or anyone whose trail has gone cold after your own search efforts." },
    { "question": "How quickly can a PI locate a missing person in Manhattan?", "answer": "Timelines vary substantially based on the case. A person who is simply out of touch but not deliberately hidden can often be located in days through database investigation and skip-tracing methods. Someone actively avoiding contact, using alternate identities, or who has left the jurisdiction takes longer — sometimes weeks or months. Your investigator provides realistic expectations after the initial case review." },
    { "question": "What do I need to provide to start a missing persons search?", "answer": "Bring everything you know: full legal name (and any aliases or maiden names), date of birth, last known addresses, phone numbers, email addresses, employers, friends and relatives, photographs, and the context of why they went missing. The more information available at the outset, the faster the investigation. Your investigator will identify what additional information is needed." }
  ], "image": "/images/missing-persons.png", "icon": "Shield", "color": "brand" },
  { "id": "skip-tracing", "title": "Skip Tracing", "slug": "skip-tracing", "description": "Professional skip tracing for Manhattan attorneys, creditors, and individuals. Locate judgment debtors, defendants avoiding service, witnesses, beneficiaries, and individuals whose address history has been deliberately obscured. Licensed investigators with access to professional databases beyond consumer reach.", "faqs": [
    { "question": "How is skip tracing different from a regular address search?", "answer": "Skip tracing is specifically focused on people who are either deliberately difficult to locate or whose address history is unusually opaque. It uses a combination of proprietary investigative databases, public records across multiple jurisdictions, social-network analysis, and targeted source interviews to piece together a current location. Consumer people-search sites typically fail on skip cases because the subject has taken steps to avoid conventional tracking." },
    { "question": "When do Manhattan attorneys hire a skip tracer?", "answer": "Most commonly for service of process on defendants who have moved without forwarding addresses, judgment enforcement on debtors who have deliberately relocated, witness location for depositions or trial, and beneficiary location for estate and trust matters. Skip tracing is also used in domestic cases to locate the other party when divorce or custody papers need to be served." },
    { "question": "What information do skip tracers need to start?", "answer": "At minimum: full name, date of birth, and last known address or employer. Additional helpful information includes social security number if legally available, phone numbers, email addresses, relatives' names, and any identifiers from the subject's recent financial or social-media activity. Your investigator will advise on what is most useful given the specific case." }
  ], "image": "/images/skip-tracing.png", "icon": "Shield", "color": "brand" }
];

export const services: Service[] = serviceEntries.map(service => {
  const featuredImage = serviceFeaturedImages[service.slug];

  return featuredImage
    ? { ...service, image: featuredImage.src, imageAlt: featuredImage.alt }
    : service;
});

export const getAllServiceSlugs = (): string[] => services.map(s => s.slug);
export const getServiceBySlug = (slug: string): Service | undefined => services.find(s => s.slug === slug);
