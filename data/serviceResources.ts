type ServiceResource = { href: string; label: string };

const guide = (slug: string, label: string): ServiceResource => ({ href: `/guides/${slug}/`, label });
const hiring = guide('hire-a-pi-manhattan', 'How to hire a Manhattan investigator');
const costs = guide('investigator-costs-manhattan', 'Compare quotes and investigation costs');

export const serviceResources: Record<string, ServiceResource[]> = {
  'infidelity-investigation': [guide('infidelity-investigations-manhattan', 'Infidelity investigations: methods and limits'), hiring, costs],
  surveillance: [guide('surveillance-investigations-manhattan', 'Plan a surveillance investigation'), hiring, costs],
  'background-checks': [guide('background-checks-due-diligence-manhattan', 'Background checks and due diligence guide'), hiring, costs],
  'corporate-investigations': [guide('corporate-fraud-investigations-manhattan', 'Corporate and fraud investigations guide'), hiring, costs],
  'asset-searches': [
    guide('asset-searches-manhattan', 'Asset searches: records, limits and scope'),
    { href: '/blog/how-a-private-investigator-finds-hidden-assets-in-a-new-york-divorce/', label: 'Asset research for a New York divorce' },
    { href: '/blog/locating-assets-enforce-money-judgment/', label: 'Locating assets after a money judgment' },
    costs,
  ],
  'child-custody-investigations': [guide('family-custody-investigations-manhattan', 'Family and custody investigations guide'), hiring, costs],
  'missing-persons': [guide('skip-tracing-locating-people-manhattan', 'Missing persons and skip tracing guide'), hiring, costs],
  'skip-tracing': [guide('skip-tracing-locating-people-manhattan', 'Skip tracing: locating a person lawfully'), hiring, costs],
};
