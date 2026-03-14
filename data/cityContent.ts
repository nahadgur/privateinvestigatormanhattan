// data/cityContent.ts
export const cityPageContent = {
  introHeading: (cityName: string) => `Private Investigator Services in ${cityName}`,
  introParagraphs: (cityName: string) => [
    `Our matching service connects clients in ${cityName} with NYS-licensed private investigators who have specific experience with the case type they need. Whether it's infidelity surveillance, a corporate fraud investigation, or an asset search for divorce proceedings, we match based on the investigator's track record with your specific situation — not just their availability.`,
    `All investigators in our network are licensed under New York State Article 7, carry professional liability insurance, and produce evidence structured for New York court proceedings. Your inquiry is handled with complete confidentiality from first contact through case completion.`
  ],
  matchingHeading: (cityName: string) => `Why ${cityName} Clients Use Our PI Matching Service`,
  matchingCards: (cityName: string) => [
    { iconName: 'Star', title: "NYS-Licensed Investigators Only", desc: `Every investigator in our network holds a current New York State private investigator license. Unlicensed operators produce evidence that can't be used in court. We don't work with them.` },
    { iconName: 'Shield', title: "Matched by Case Type", desc: `Infidelity cases, corporate investigations, asset searches, and custody matters each require different expertise. We match you with investigators who have handled your specific type of case — not whoever is available.` },
    { iconName: 'Clock', title: "Introduced Within 24 Hours", desc: `Most ${cityName} clients receive an introduction to a matched investigator within 24 hours of their initial inquiry. For urgent cases, same-day contact is often available.` },
    { iconName: 'CheckCircle', title: "Confidential From the Start", desc: `Your identity and case details are protected from the moment you contact us. Investigators operate under strict confidentiality obligations and understand the sensitive nature of the cases they handle.` }
  ],
  sidebarCta: (cityName: string) => ({ heading: `Licensed PI Services in ${cityName}`, description: `Connect with a NYS-licensed private investigator who has handled cases like yours in ${cityName}. Confidential consultation, no obligation until you choose to proceed.` }),
  sidebarFinance: (cityName: string) => ({ heading: `Transparent Retainer Billing`, description: `Most investigators in ${cityName} work on a retainer billed at an hourly rate. You'll receive a clear cost estimate before any work begins, and unused retainer funds are returned per the engagement agreement.` }),
  bottomCta: (cityName: string) => ({ heading: `Connect with a Licensed PI in ${cityName}`, description: `Confidential. No obligation. Matched within 24 hours. Tell us about your case.` }),
  schemaServiceTypes: ["infidelity-investigation", "surveillance", "background-checks", "corporate-investigations", "asset-searches", "child-custody-investigations"],
};
