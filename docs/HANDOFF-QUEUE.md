# Handoff queue — privateinvestigatormanhattan

Build handoffs from the `pim-investigator-writer` scheduled task to Claude Code.
Newest first. Clear an item with a one-line DONE note once built.

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
