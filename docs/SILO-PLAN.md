# Private Investigator Manhattan (privateinvestigatormanhattan) — silo plan

Niche: private investigator services, Manhattan / NYC. Independent **matching**
service connecting clients with NYS-licensed investigators (does not investigate
itself). Domain privateinvestigatormanhattan.com. **US site -> US English** (color,
neighborhood, license, $, MM/DD). Clean fleet model already: hubs `/guides/[slug]/`,
spokes `/blog/[slug]/`, service pillars `/services/[serviceSlug]/`, location pages
`/location/[city]/`, plus `/how-it-works` and `/faq`.

Status: 3 hubs, 21 strong spokes (flat `category`, no hub mapping), no draft gate.
Job: expand to 10 hubs, map the 21 spokes, build to 100 (~10/hub), add the
hub-field + draft gate, tighten interlinking. No fabricated investigators/reviews;
matching framing; cite NY law accurately (Article 7, GBL).

## 0. Reserved head terms (not targeted by spokes)

| Reserved | Owned by |
|---|---|
| private investigator Manhattan / NYC | Homepage + services index |
| [neighborhood] private investigator | `/location/[city]/` |
| each hub head term (PI cost, hire a PI, PI licensing, infidelity PI...) | the matching `/guides/` hub |

## 1. The ten pillar hubs (/guides)

| ID | Hub | From |
|---|---|---|
| H1 | How to hire a private investigator in Manhattan | exists |
| H2 | Private investigator costs in Manhattan | exists |
| H3 | PI licensing, legality and evidence in New York | exists |
| H4 | Infidelity and cheating-spouse investigations | new (has spokes) |
| H5 | Surveillance investigations | new (has spokes) |
| H6 | Background checks and due diligence | new (has spokes) |
| H7 | Corporate and fraud investigations | new (has spokes) |
| H8 | Asset searches and financial investigations | new |
| H9 | Family, divorce and child custody investigations | new (has spokes) |
| H10 | Locating people: skip tracing and missing persons | new (has spokes) |

Align each hub to its matching `/services/[serviceSlug]/` pillar.

## 2. Map the 21 existing spokes to hubs

- **H1 hire:** what a PI actually does; how to hire a PI; what to look for in a Manhattan PI; how to choose the right PI.
- **H2 cost:** how much a PI costs in Manhattan.
- **H3 licensing/legality:** is it legal to hire a PI in NY; what evidence a PI can collect.
- **H4 infidelity:** when to hire a cheating-spouse investigator; signs you may need an infidelity investigator.
- **H5 surveillance:** what to know before hiring a surveillance investigator.
- **H6 background/due diligence:** how background checks work; how due diligence investigations help individuals and businesses.
- **H7 corporate/fraud:** when businesses hire PIs; how PIs handle employee theft; how fraud investigations work.
- **H9 family/custody:** can a PI help with a child custody case; how a PI helps during a divorce.
- **H10 locating people:** can a PI find a missing person; what skip tracing means; can a PI help with stalking/harassment.

## 3. Spoke fan-out to ~100 (US-framed, priority = new/thin hubs)

- **H4 infidelity:** how infidelity surveillance works; what proof of cheating is admissible in NY; cost of an infidelity investigation; digital evidence and the law; what an infidelity PI can and cannot do.
- **H5 surveillance:** types of surveillance; GPS tracking and NY law; covert vs overt surveillance; how surveillance evidence holds up in court; surveillance for workers' comp/insurance.
- **H6 background/due diligence:** pre-employment background checks; tenant screening; online dating/romance-scam checks; pre-marital due diligence; FCRA and what's legal.
- **H7 corporate/fraud:** corporate fraud investigations; intellectual-property theft; due diligence on a business partner; insurance fraud; undercover workplace investigations.
- **H8 asset/financial:** how asset searches work; hidden-asset searches in divorce; judgment recovery and asset location; bank/business asset tracing; what's legal vs not (no pretexting).
- **H9 family/custody:** evidence that helps a custody case; proving cohabitation for alimony; locating a co-parent; surveillance in custody disputes; what NY family courts accept.
- **H10 locating people:** skip tracing explained; finding a missing relative; serving process and locating a defendant; finding a debtor; birth-parent/heir searches.
- **H1/H2/H3:** round out with: questions to ask a PI; red flags when hiring; what a PI report looks like; retainers and how billing works; can you hire a PI anonymously; how long an investigation takes.

## 4. Architecture prerequisite (Claude Code, before the writer runs)

1. Add `hub: string` + `draft: boolean` to `data/blog.ts`; set `hub` on the 21
   existing spokes (section 2). Draft gate: draft:true 404s, excluded from /blog,
   hub grids, sitemap.
2. Build the 7 new hubs in `data/guides.ts`; hub pages render a child-spoke grid by
   `hub`; each spoke links UP to its hub.
3. Schema: Article + BreadcrumbList + FAQPage on hubs + spokes, author `@id` to the
   editorial entity, datePublished + dateModified.
4. US-English sweep + fix the `PoundSterling` (£) trust-badge icon -> a USD/Dollar
   icon (`DollarSign`). Confirm no UK spellings.
5. Author byline = the site acronym (e.g. "PIM"), an editorial entity `@id` (no
   invented person/investigator).

## 5. Internal-linking rules (silo-tight, within-site)

- Each spoke links UP once to its hub, to one `/services/<category>/` pillar (and a
  `/location/<neighborhood>/` page where local), plus the matching CTA.
- Hubs link down to their spokes (grid) and to the matching service pillar; sideways
  to 1-2 adjacent hubs (H4<->H9 divorce/infidelity, H6<->H7 due diligence, H8<->H9
  hidden assets, H10<->H7 locating).
- External: max 2/page, one per domain, cite a named authority (NYS DOS licensing,
  NY GBL Article 7, FCRA/FTC) first mention; attribute legal claims.

## 6. Automation (schedulers, mirror essexdental)

- **`pim-investigator-writer`** (writer): one US-framed PI spoke per run as a
  `draft:true` blog entry under the right hub, schema + inline up-link + one
  pillar/location link + matching CTA. Created DISABLED until section 4 exists.
- **`pim-investigator-publisher`** (publisher): flips the oldest parked draft live
  2/week; enable after a reviewed batch.

## 7. Status tracker

10 hubs (all built, commit f14ad9f). Spokes: 20 published + 2 drafts in buffer = 22
total, target ~100 (~10/hub). Draft buffer (awaiting publisher): 2, both H8 asset
searches (hidden-assets-in-divorce; judgment-enforcement). Thinnest hubs to fill
first: H5 surveillance (1), H2 cost (1), H4 infidelity (2), H6 due diligence (2),
H3 licensing (2), H10 locating (3), H7 corporate/fraud (3). H8 now has 2 drafts so
deprioritize until a published spoke lands there.
## Slug rules (writer: follow on every spoke)

Kebab-case: lowercase, hyphens only, ASCII only, 3-6 words, under ~60 chars.
Do NOT: include a year/date; reuse or near-duplicate an existing slug; use a
reserved head term or the parent hub's head term; keyword-stuff or repeat a word;
use stop words (a/the/to/for). Never rename or reuse a published slug.
