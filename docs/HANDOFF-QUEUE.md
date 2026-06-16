# Handoff queue — privateinvestigatormanhattan

Build handoffs from the `pim-investigator-writer` scheduled task to Claude Code.
Newest first. Clear an item with a one-line DONE note once built.

## 2026-06-11 (run 2) — Writer run: 1 spoke drafted (H5 surveillance, covert vs overt)

Pre-flight PASSED (10 hubs live; draft gate confirmed: draft spokes 404 via
`notFound`; `/blog` index, hub grids and sitemap all route through
`getPublishedArticles`/`getArticlesByHub`, which filter drafts).

- site: privateinvestigatormanhattan
- slug: `covert-overt-surveillance-methods`
- hub: `surveillance-investigations-manhattan` (H5), draft: true
- title: Covert vs Overt Surveillance and When Investigators Use Each
- pillar link: ServiceBanner auto-wired to `/services/surveillance/` via
  `categoryServiceMap['Private Investigator'] = 'surveillance'`. category: 'Private Investigator'.
- up-link: auto hub link to `/guides/surveillance-investigations-manhattan/`. CTA block present.
- siblings: published H5 spoke
  (`what-to-know-before-hiring-a-surveillance-investigator-in-manhattan`) populates
  the sidebar related list. The other H5 entry (`gps-tracking-...`) is still draft, so
  it does not appear (correct).
- local substance: Midtown / Financial District foot-surveillance framing; distinct
  from the GPS-tracking spoke (this one is method choice, not tracking legality).
- schema: Article + BreadcrumbList + FAQPage auto-emitted by client; PIM author @id;
  datePublished + dateModified = 2026-06-11.
- legal: matching framing kept; NYS DOS licensing under GBL Article 7 named; trespass,
  stalking/harassment, spyware and vehicle-tracking limits referenced as general info,
  not legal advice, all claims attributed; no pretexting/illegal access endorsed; no
  guarantees of outcome; no fabricated investigators/reviews.
- words: ~1,150. 6 sections + 5 distinct FAQs.
- tsc: clean. link gate (`scripts/check-links.mjs`): 0 broken across 34 slugs.
- INCIDENT (recurring, same as 2026-06-11 run 1): the file-tool Edit truncated
  `data/blog.ts` mid-write (Linux-mount desync; the working file kept the original
  651,391-byte size but its tail was truncated at `publishDate`, an unterminated-string
  tsc error). Same desync had also left `BlogArticleClient.tsx` NUL-padded and
  `GuideArticleClient.tsx` truncated from an earlier session. Recovered by restoring the
  committed blobs (`git show HEAD:<path>`) and re-inserting the spoke Linux-side
  (heredoc snippet + python splice), which wrote the full ~662,581 bytes cleanly. tsc
  clean and link gate 0/34 after recovery. Lesson stands: append large blog entries
  Linux-side, never via the Edit tool on this mount.
- git: NOT COMMITTED this run. The stale `.git/index.lock` (0-byte, Jun 11 02:09)
  cannot be cleared from the sandbox: `rm`, `find -delete` and `mv` all return
  `Operation not permitted` / `No such file or directory` and the mount returns
  inconsistent stat vs ls for it, so `git add`/`safe-commit.sh` both fail with
  "Unable to create index.lock: File exists". (Note: the shared `safe-commit.sh` also
  reads back truncated on this mount, line 32 EOF.) Work saved in the working tree only,
  verified: `data/blog.ts`, `docs/SILO-PLAN.md` (section 7 counts), `docs/HANDOFF-QUEUE.md`.
  **ACTION FOR CLAUDE CODE (native):** delete `.git/index.lock`, then
  `git add -A && git commit -m "Add H5 surveillance spoke (draft): covert vs overt surveillance methods"`
  and `git push origin main`.

## 2026-06-11 — Writer run: 1 spoke drafted (H5 surveillance, GPS tracking angle)

Pre-flight PASSED (10 hubs live; draft gate confirmed: draft spokes 404 via
`notFound`; `/blog` index, hub grids and sitemap all go through
`getPublishedArticles`/`getArticlesByHub`, which filter drafts).

- site: privateinvestigatormanhattan
- slug: `gps-tracking-laws-new-york-investigations`
- hub: `surveillance-investigations-manhattan` (H5), draft: true
- title: Is GPS Tracking Legal in New York Investigations
- pillar link: ServiceBanner auto-wired to `/services/surveillance/` via
  `categoryServiceMap['Private Investigator'] = 'surveillance'`. category: 'Private Investigator'.
- up-link: auto hub link to `/guides/surveillance-investigations-manhattan/`. CTA block present.
- siblings: one published H5 spoke exists
  (`what-to-know-before-hiring-a-surveillance-investigator-in-manhattan`), so the
  sidebar related list now populates for this hub.
- schema: Article + BreadcrumbList + FAQPage auto-emitted by client; PIM author @id;
  datePublished + dateModified = 2026-06-11.
- legal: matching framing kept; NYS DOS licensing under GBL Article 7 named; NY
  stalking/harassment + trespass and the state high court's view that continuous GPS
  tracking is a serious intrusion referenced as general info, not legal advice, all
  claims attributed; no pretexting or illegal tracking endorsed; no guarantees of
  outcome; no fabricated investigators/reviews.
- words: ~1,192. 6 sections + 5 FAQs.
- tsc: clean. link gate (`scripts/check-links.mjs`): 0 broken across 33 slugs.
- INCIDENT: the file-tool Edit truncated `data/blog.ts` mid-write (Linux-mount
  desync: the working file reported the original byte size but its tail was truncated
  at `publishDate`, giving an unterminated-string tsc error). Recovered by restoring
  the committed blob (`git show HEAD:data/blog.ts`) and re-inserting the entry
  Linux-side (heredoc + python splice + `cp` to the mount), which wrote the full
  651,391 bytes cleanly. Lesson: append large blog entries Linux-side, not via the
  Edit tool, on this mount.
- git: NOT COMMITTED this run. A stale `.git/index.lock` (0-byte, owned by the
  sandbox user, timestamped during this run) could not be unlinked from the sandbox
  (`Operation not permitted`, retried 5x), so `safe-commit.sh` could neither stage
  nor commit. The work is saved in the working tree only, 4 files modified and
  verified: `.gitignore` (added `.next-dev.log`), `data/blog.ts`, `docs/SILO-PLAN.md`,
  `docs/HANDOFF-QUEUE.md`. tsc clean, link gate 0 broken across 33 slugs.
  **ACTION FOR CLAUDE CODE (native):** delete `.git/index.lock`, then
  `git add -A && git commit -m "Add H5 surveillance spoke (draft): GPS tracking and NY law"`
  and `git push origin main`.

## 2026-06-10 (run 2) — Writer run: 1 spoke drafted (H8 asset searches, judgment angle)

Pre-flight PASSED (10 hubs live; draft gate confirmed: draft spokes 404 via
`notFound`, and `generateStaticParams`, `/blog` index, hub grids and sitemap all
go through `getPublishedArticles`/`getArticlesByHub`, which filter drafts).

- site: privateinvestigatormanhattan
- slug: `locating-assets-enforce-money-judgment`
- hub: `asset-searches-manhattan` (H8), draft: true
- title: How an Asset Search Helps You Enforce a Money Judgment in New York
- pillar link: ServiceBanner auto-wired to `/services/asset-searches/` via existing
  `categoryServiceMap['Asset Searches'] = 'asset-searches'`. category: 'Asset Searches'.
- up-link: auto hub link to `/guides/asset-searches-manhattan/`. CTA block present.
- siblings: the prior H8 draft is also draft:true, so no live same-hub siblings to
  link yet; sidebar related list stays empty until one H8 spoke is published.
- schema: Article + BreadcrumbList + FAQPage auto-emitted by client; PIM author @id;
  datePublished + dateModified = 2026-06-10.
- legal: matching framing kept; GBL Article 7 (NYS DOS licensing), CPLR Article 52
  (judgment enforcement / information subpoena) and GLBA anti-pretexting + FTC named,
  all claims attributed and flagged as general info not legal advice; no guarantees;
  no fabricated investigators/reviews.
- words: ~1,150. 6 sections + 5 FAQs.
- tsc: clean (after a rename round-trip; the Linux mount lagged a file-tool write).
- git: committed to `main` as `c6554ba` (3 files: data/blog.ts, docs/SILO-PLAN.md,
  docs/HANDOFF-QUEUE.md). NOT PUSHED: the sandbox has no GitHub credentials
  (`could not read Username for 'https://github.com'`). **ACTION FOR CLAUDE CODE
  (native):** `git push origin main`. Also delete the stale `.git/index.lock` the
  sandbox left behind (`Operation not permitted` on unlink); `git fsck` is otherwise
  clean (the dangling commit/tree are harmless). Working tree clean apart from the
  ignored `.next-dev.log`.
- NOTE: H8 now holds 2 parked drafts and 0 published. Publisher should flip one H8
  draft live so the hub stops being orphaned; writer is deprioritizing H8 next.

## 2026-06-10 — Writer run: 1 spoke drafted (H8 asset searches)

Pre-flight PASSED (10 hubs live, draft gate working). Wrote the first H8 spoke
into the empty thinnest hub.

- site: privateinvestigatormanhattan
- slug: `how-a-private-investigator-finds-hidden-assets-in-a-new-york-divorce`
- hub: `asset-searches-manhattan` (H8), draft: true
- pillar link: ServiceBanner wired to `/services/asset-searches/` via new
  `categoryServiceMap['Asset Searches'] = 'asset-searches'` in
  `app/blog/[slug]/BlogArticleClient.tsx`. New `category: 'Asset Searches'`.
- up-link: auto hub link to `/guides/asset-searches-manhattan/`. CTA block present.
- siblings: none (first published-or-draft H8 spoke; no live siblings to link).
- schema: Article + BreadcrumbList + FAQPage auto-emitted by client; PIM author @id;
  datePublished + dateModified = 2026-06-10.
- legal: matching framing kept; GBL Article 7 (NYS DOS licensing), DRL Statement of
  Net Worth / equitable distribution, GLBA anti-pretexting + FTC named, claims
  attributed; no guarantees; no fabricated investigators/reviews.
- tsc: clean (after restoring BlogArticleClient.tsx from HEAD; a file-tool Edit had
  truncated its tail, re-applied the one-line map edit via sed).
- git: NOT COMMITTED. The sandbox `.git` mount refused to unlink files
  (`Operation not permitted`), which corrupted the index and left stale
  `.git/index.lock`, `.git/HEAD.lock` and `.git/refs/heads/main.lock`. Changes are
  saved in the working tree only. **ACTION FOR CLAUDE CODE (native, not sandbox):**
  delete the three stale `*.lock` files and `.git/index`, run `git read-tree HEAD`
  (or `git reset`), then commit these four files to `main` and push:
  `data/blog.ts`, `app/blog/[slug]/BlogArticleClient.tsx`, `docs/SILO-PLAN.md`,
  `docs/HANDOFF-QUEUE.md`. Do NOT `git add -A` (it restages a fleet-wide CRLF→LF
  renormalization); add only those four paths. Suggested message:
  "Add H8 asset-search spoke (hidden assets in a NY divorce, draft)".

## 2026-06-09 — BLOCKED: guides.ts has only 3 hubs, need 10 (SILO-PLAN section 4)

**Writer run aborted at pre-flight.** A spoke cannot be written because there is
no hub for the priority thin hubs to link up to, and `hub:'<hub-slug>'` would
reference a non-existent guide.

State found this run:

- `data/blog.ts`: DONE. `hub` + `draft` fields present; 21 spokes set `draft:false`.
- Draft gate: DONE and working. `getPublishedArticles()` excludes drafts from
  `generateStaticParams` (drafts 404), from `generateMetadata`, from `app/sitemap.ts`,
  and `getArticlesByHub()` excludes drafts from the hub child-spoke grids.
- `data/guides.ts`: INCOMPLETE. Only 3 hub slugs exist —
  `hire-a-pi-manhattan` (H1), `investigator-costs-manhattan` (H2),
  `pi-licensing-new-york` (H3). Hubs H4–H10 are missing.
- Note: the above blog-side work plus a partial `data/guides.ts` edit are sitting
  **uncommitted** in the working tree (along with app/sitemap/schema-helpers/site
  changes). The writer did not commit or touch them. Review and commit before
  building on top.

Build needed (per SILO-PLAN section 4, item 2): add the 7 new hubs to
`data/guides.ts`, each with the same `Guide` shape as the existing 3, a
child-spoke grid by `hub`, an UP-link target, the matching `/services/` pillar in
`relatedServices`, and Article + BreadcrumbList + FAQPage schema with the PIM
editorial-entity author `@id` (no invented person):

| ID  | Hub slug (suggested)              | Head term                                              | Matching service pillar |
|-----|-----------------------------------|--------------------------------------------------------|-------------------------|
| H4  | infidelity-investigations-nyc     | Infidelity and cheating-spouse investigations          | infidelity / matrimonial |
| H5  | surveillance-investigations-nyc   | Surveillance investigations                            | surveillance |
| H6  | background-checks-due-diligence   | Background checks and due diligence                    | background-checks |
| H7  | corporate-fraud-investigations    | Corporate and fraud investigations                     | corporate / fraud |
| H8  | asset-searches-nyc                | Asset searches and financial investigations            | asset-search |
| H9  | child-custody-divorce-investigations | Family, divorce and child custody investigations    | family / matrimonial |
| H10 | skip-tracing-missing-persons      | Locating people: skip tracing and missing persons      | locate / skip-trace |

(Confirm exact slugs and service-pillar slugs against the existing 3 hubs and
`data/services.ts` before building; align each hub to its real `/services/` pillar.)

Also map the 21 existing spokes onto H4–H10 per SILO-PLAN section 2 (several
already carry the new-hub `hub` values, so the grids populate once the hubs exist),
and wire sideways hub links (H4<->H9, H6<->H7, H8<->H9, H10<->H7).

Once `data/guides.ts` carries all 10 hubs and they render child-spoke grids, the
writer pre-flight will pass and it can start dripping `draft:true` spokes into the
thin hubs (priority: H8, H5, H4, H10, H7).

git: nothing committed by the writer this run. tsc: not run (no writer change).

---

## 2026-06-12 — writer run (pim-investigator-writer)

- Site: privateinvestigatormanhattan
- Spoke added: `investigator-retainer-billing-new-york`
- Hub: `investigator-costs-manhattan` (H2 cost, the thinnest published hub: 1 -> now 1 published + 1 draft)
- Title: How Private Investigator Retainers and Billing Work in New York
- draft: true (parked for the publisher)
- Framing: matching service, US English, NYS DOS / GBL Article 7 cited and attributed, no fabricated investigators/reviews, no outcome guarantees, methods-must-be-legal caveat. ~1250 words, 5 H2 sections + 5 FAQs, Article+Breadcrumb+FAQPage schema via the page component.
- Links: auto-rendered UP-link to /guides/investigator-costs-manhattan/, ServiceBanner pillar link, same-hub sibling (how-much-does-a-private-investigator-cost-in-manhattan), matching CTA block.
- tsc: clean (rename round-trip used to clear stale incremental cache). Link gate: 35 slugs, 0 broken.
- git: committed local 365cad6. Push FAILED (no GitHub credentials in the sandbox) — repo is ahead 1, needs a manual push from a credentialed environment.
- Buffer: 5 drafts (H8 x2, H5 x2, H2 x1). Total toward 100: 25 spokes (20 published + 5 drafts).
- Next: favor H4 infidelity (2), H6 due diligence (2), H3 licensing (2) per SILO-PLAN section 7.

## 2026-06-12 08:58 — pim-investigator-writer (privateinvestigatormanhattan)
- Sites: privateinvestigatormanhattan: one new H4 infidelity draft spoke
- Spoke added: `infidelity-investigator-legal-limits-new-york`
- Hub: `infidelity-investigations-manhattan` (H4: 2 published -> 2 published + 1 draft)
- Title: What an Infidelity Investigator Can and Cannot Legally Do in New York
- draft: true (parked for the publisher)
- Framing: matching service, US English, NYS DOS / GBL Article 7, CFAA, NY eavesdropping (one-party consent) and no-fault DRL all attributed as general information; no fabricated investigators/reviews, no outcome guarantees, methods-must-be-legal throughout. ~1250 words, 5 H2 sections + 5 FAQs, schema via the page component.
- Code delta: added 'Infidelity Investigations' -> 'infidelity-investigation' to categoryServiceMap in app/blog/[slug]/BlogArticleClient.tsx so the pillar link hits the right service (new category; old fallback was surveillance).
- Staged files: data/blog.ts, app/blog/[slug]/BlogArticleClient.tsx, docs/SILO-PLAN.md
- Live flips this run: none
- tsc: pass. Link gate: 36 slugs, 0 broken.
- Commit prompt / git state: committed local 1caf735; push FAILED (no GitHub credentials in sandbox), repo ahead 2 (365cad6 + 1caf735), needs manual push. NOTE: sandbox cannot delete files in .git, so stale git locks were renamed to *.stale-20260612* instead of removed; safe to delete from Windows.
- Buffer: 6 drafts (H8 x2, H5 x2, H2 x1, H4 x1). Total toward 100: 26 spokes (20 published + 6 drafts).
- Status: PENDING PUSH

## 2026-06-13 14:30 — pim-investigator-writer (privateinvestigatormanhattan)
- Sites: privateinvestigatormanhattan — wrote 1 draft spoke under H6 background/due diligence (thinnest published hub)
- Staged files: data/blog.ts (new entry pre-employment-background-check-rules-nyc), app/blog/[slug]/BlogArticleClient.tsx (added 'Background Checks' -> 'background-checks' to categoryServiceMap)
- Live flips this run: none (writer; draft:true)
- tsc: pass
- Commit prompt / git state: committed 0abc010, push failed (no GitHub credentials in sandbox) — needs drain
- Status: PENDING PUSH

## 2026-06-13 08:58 — pim-investigator-writer (privateinvestigatormanhattan)
- Sites: privateinvestigatormanhattan — wrote 1 draft spoke under H10 locating (skip-tracing-locating-people-manhattan), title "Locating a Defendant for Service of Process in NYC", slug locate-defendant-service-process-nyc, category 'Skip Tracing'. ~1250 words, answer-first opening, 6 H2 sections + 5 FAQs. Picked H10 because it sits in both the delta priority list and SILO-PLAN section 7, and unlike the delta's first choice H8 it has no unpublished-draft backlog. PRIORITY CONFLICT flagged below.
- Framing: matching service (we connect, we do not investigate), US English, no outcome guarantees, lawful-methods-only (no pretexting / GLBA, no trespass or unauthorized tracking). Authorities attributed as general information: NY CPLR Article 3 and CPLR 308/308(5) for service and due diligence, GBL Article 7 for PI licensing, NYC DCWP for process-server licensing, federal Gramm-Leach-Bliley Act for the pretexting ban. No fabricated investigators/reviews. Schema (Article + BreadcrumbList + FAQPage + editorial author) is built by the page component from the entry fields.
- Code delta: added 'Skip Tracing' -> 'skip-tracing' to categoryServiceMap in app/blog/[slug]/BlogArticleClient.tsx so the structural pillar link resolves to /services/skip-tracing/ (new category; old fallback was surveillance). Mirrors the precedent set for Asset Searches / Infidelity Investigations / Background Checks.
- NOTE (spec vs renderer): WRITER-SPEC section 5 calls for an inline markdown parent-hub link in body text, but this site's BlogArticleClient renders 'p' blocks as plain text (no markdown parsing) and wires the hub up-link, pillar link, related-sibling links, and schema STRUCTURALLY from the entry's hub + category fields. All 20 published spokes carry zero inline markdown links. Followed the site convention (structural linking) rather than emit literal "[anchor](/guides/...)" text. Up-link target: /guides/skip-tracing-locating-people-manhattan/. Pillar: /services/skip-tracing/.
- NOTE (priority conflict): delta PRIORITY lists H8 asset-searches first; SILO-PLAN section 7 (updated 2026-06-13) says to deprioritize H8/H5/H4 until a published spoke lands there because they already hold drafts, and to favor H3/H10/H7. Resolved to H10 (in both lists, no draft backlog). H8/H5/H4 still need a PUBLISHED spoke before more drafts are added there.
- Staged files: data/blog.ts (new entry), app/blog/[slug]/BlogArticleClient.tsx (categoryServiceMap), docs/SILO-PLAN.md (section 7 tracker)
- Live flips this run: none (writer; draft:true)
- tsc: pass (after mv round-trip to clear a stale sandbox read). Link gate: 38 slugs, 0 broken.
- Commit prompt / git state: commit and push BOTH FAILED. safe-commit could not complete: stale .git/HEAD.lock (06:51) and .git/index.lock (08:57) cannot be removed from the sandbox ("Operation not permitted"); push has no GitHub credentials anyway. HEAD still 0abc010. Working-tree changes are written and validated. Claude Code must clear the two .git lock files from Windows, then commit + push (data/blog.ts, app/blog/[slug]/BlogArticleClient.tsx, docs/SILO-PLAN.md). Do NOT commit docs/HANDOFF-QUEUE.md.
- Buffer: 8 drafts (H8 x2, H5 x2, H2 x1, H4 x1, H6 x1, H10 x1). Total toward 100: 28 spokes (20 published + 8 drafts).
- Status: PENDING PUSH

## 2026-06-15 09:00 — pim-investigator-writer (privateinvestigatormanhattan)
- Sites: privateinvestigatormanhattan — wrote 1 draft spoke under H7 corporate/fraud (corporate-fraud-investigations-manhattan), the thinnest hub with no draft backlog and on both the delta priority list and SILO-PLAN section 7's favor-next set.
- Spoke added: `trade-secret-theft-investigations-nyc`
- Hub: `corporate-fraud-investigations-manhattan` (H7: 3 published -> 3 published + 1 draft)
- Title: Investigating Trade Secret Theft by a Departing Employee
- draft: true (parked for the publisher). category: 'Corporate Investigations'. publishDate + dateModified = 2026-06-15.
- Intent: departing-employee IP / trade-secret theft (client lists, source code, pricing data). Distinct from the 3 existing H7 intents (when businesses hire PIs; employee theft; how fraud investigations work).
- Pillar link: ServiceBanner resolves to `/services/corporate-investigations/` via NEW `categoryServiceMap['Corporate Investigations'] = 'corporate-investigations'` added to app/blog/[slug]/BlogArticleClient.tsx (mirrors the Asset Searches / Infidelity / Background Checks / Skip Tracing precedent; old fallback was surveillance). Up-link auto-wired to `/guides/corporate-fraud-investigations-manhattan/`; CTA block present.
- Siblings: the 3 published H7 spokes populate the sidebar related list structurally by hub.
- Linking note (unchanged site convention): BlogArticleClient renders 'p' blocks as plain text and wires hub up-link + pillar link + siblings + schema STRUCTURALLY from hub + category. Followed that convention rather than emit literal markdown links, same as all prior spokes.
- Framing: matching service (we connect, we do not investigate); no outcome guarantees; lawful-methods-only. Authorities attributed as general information, not legal advice: NYS DOS licensing under GBL Article 7; federal Defend Trade Secrets Act (2016) and NY common-law misappropriation (named as background, claim selection left to counsel); federal Computer Fraud and Abuse Act; federal Gramm-Leach-Bliley Act anti-pretexting. No pretexting / no access to the former employee's private devices or accounts / no trespass or unauthorized tracking. No fabricated investigators/reviews.
- Words: ~1,275. 6 H2 sections + 5 distinct FAQs. Schema (Article + BreadcrumbList + FAQPage + editorial author) built by the page component from entry fields.
- Storage: appended Linux-side via python splice (NOT the Edit tool, per the recurring file-tool truncation incident on this mount). New blog.ts size 718,752 bytes, 29 entries.
- Staged files (working tree): data/blog.ts (new entry), app/blog/[slug]/BlogArticleClient.tsx (categoryServiceMap), docs/SILO-PLAN.md (section 7 tracker). Do NOT commit docs/HANDOFF-QUEUE.md.
- tsc: pass (npx tsc --noEmit, exit 0). Link gate (scripts/check-links.mjs): 38 slugs, 0 broken.
- Live flips this run: none (writer; draft:true).
- Commit prompt / git state: commit + push BOTH FAILED. Stale .git/HEAD.lock (Jun 13 06:51) and .git/index.lock (Jun 13 08:57) cannot be removed from the sandbox ("Operation not permitted"), so safe-commit.sh cannot create its index.lock. HEAD still 0abc010. NOTE: git status shows these files as MM, i.e. prior runs' staged-but-uncommitted changes are also still sitting in the index/working tree (commits 365cad6, 1caf735, 0abc010 etc. per earlier blocks were never pushed). **ACTION FOR CLAUDE CODE (native, from Windows):** remove .git/HEAD.lock and .git/index.lock, then commit data/blog.ts + app/blog/[slug]/BlogArticleClient.tsx + docs/SILO-PLAN.md (message: "Add H7 corporate/fraud spoke (draft): trade secret theft by a departing employee"), and drain the backlog of prior unpushed writer commits with git push origin main. Do NOT `git add -A` blindly (avoid restaging the fleet CRLF->LF renormalization noted in older blocks); add only the named paths.
- Buffer: 9 drafts (H8 x2, H5 x2, H2 x1, H4 x1, H6 x1, H10 x1, H7 x1). Total toward 100: 29 spokes (20 published + 9 drafts).
- Next: favor H3 licensing (2 published, the only thin hub with no draft backlog). Otherwise the publisher should drain the 9-draft buffer before more drafts are added to H4/H5/H6/H7/H8/H10.
- Status: PENDING PUSH

## 2026-06-15 08:59 — pim-investigator-writer (privateinvestigatormanhattan)
- Sites: privateinvestigatormanhattan — wrote ONE new H3 licensing spoke, draft:true. Slug pi-evidence-admissible-new-york-court, title "Is a Private Investigator's Evidence Admissible in New York Court?", hub pi-licensing-new-york, category 'Private Investigator' (already maps to the surveillance pillar in BlogArticleClient categoryServiceMap, so NO client-component change needed this run). ~1150 words, 5 FAQs, matching framing (we connect, we do not investigate; no outcome guarantees; lawful methods only). NY legal claims attributed: Article 7 GBL licensing, Penal Law eavesdropping / one-party consent, Gramm-Leach-Bliley pretexting. No fabricated content, US English, no em dashes.
- Hub choice: picked H3 over the delta's generic PRIORITY list (H8/H5/H4/H10/H7) because SILO-PLAN section 7 (most recent, dated 2026-06-15) directs H3 next — it was the only thin hub with no parked draft, and every priority hub already holds a draft the publisher must drain first. CONFLICT FLAGGED (delta PRIORITY vs SILO-PLAN tracker); followed the more-recent/more-specific tracker per fleet CLAUDE.md.
- Spec vs site rendering note: WRITER-SPEC step 5 asks for an inline parent-hub markdown link in body text, but this site's blog renderer prints p-blocks as plain text (no markdown parsing) and auto-renders the hub up-link from the `hub` field ("Part of our guide:" + SpokeHero) plus the pillar link from the category->service map. An inline [anchor](/...) would render as literal brackets. Followed the site's established pattern (consistent across all existing posts); hub up-link + pillar link + CTA are all present via the component.
- Staged files (working tree, uncommitted): data/blog.ts (new entry), docs/SILO-PLAN.md (section 7 tracker: buffer 9->10, H3 now 2 published + 1 draft, next priority shifted to H9). Do NOT commit docs/HANDOFF-QUEUE.md.
- tsc: pass (npx tsc --noEmit exit 0, after mv round-trip to clear a stale sandbox view). Link gate (scripts/check-links.mjs): 0 broken.
- Live flips this run: none (writer; draft:true).
- Commit prompt / git state: targeted commit FAILED. Stale .git/index.lock (Jun 13 08:57, 0 bytes) still cannot be removed from the sandbox ("Operation not permitted"); no live git process (pgrep -x git = 0). Push also fails (no sandbox credentials: "could not read Username for https://github.com"). HEAD is 53c2c37 (native Claude Code has drained the prior unpushed backlog since the last block). **ACTION FOR CLAUDE CODE (native, from Windows):** remove .git/index.lock, then `git add data/blog.ts docs/SILO-PLAN.md` (named paths ONLY, do NOT git add -A, to avoid HANDOFF-QUEUE.md and CRLF renorm noise), commit with message "Add H3 licensing spoke (draft): is a private investigator's evidence admissible in New York court", then git push origin main.
- Buffer: 10 drafts (H8 x2, H5 x2, H2 x1, H4 x1, H6 x1, H10 x1, H7 x1, H3 x1). Total toward 100: 30 spokes (20 published + 10 drafts).
- Next: favor H9 family/custody (2 published, now the thinner of the only two hubs with no parked draft; H1 has 4). Otherwise the publisher should drain the 10-draft buffer before more drafts are added.
- Status: PENDING PUSH
