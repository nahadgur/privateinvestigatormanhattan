'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Clock, Calendar, AlertTriangle, Info, CheckCircle } from 'lucide-react';
import { type Guide, type GuideBlock, getGuideBySlug } from '@/data/guides';
import { getServiceBySlug } from '@/data/services';
import { getArticlesByHub } from '@/data/blog';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { siteConfig } from '@/data/site';
import { buildGuideSchema, buildBreadcrumbSchema, buildFAQSchema, buildEditorialAuthor } from '@/data/schema-helpers';

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function Block({ block }: { block: GuideBlock }) {
  switch (block.type) {
    case 'p':
      return <p className="text-gray-dark text-[14px] leading-[1.75] mb-4">{block.text}</p>;
    case 'h3':
      return <h3 className="text-[17px] md:text-[19px] font-extrabold text-ink mt-6 mb-3 tracking-tight">{block.text}</h3>;
    case 'ul':
      return (
        <ul className="space-y-2 mb-5 text-[14px] text-gray-dark leading-[1.7]">
          {block.items.map((it, i) => (
            <li key={i} className="flex gap-3">
              <span className="text-primary font-bold flex-shrink-0 mt-0.5">•</span>
              <span>{it}</span>
            </li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol className="space-y-3 mb-5 text-[14px] text-gray-dark leading-[1.7]">
          {block.items.map((it, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-[11px] font-extrabold">{i + 1}</span>
              <span className="pt-0.5">{it}</span>
            </li>
          ))}
        </ol>
      );
    case 'callout': {
      const variants = {
        'note': { bg: 'bg-gray-light', border: 'border-gray-mid', icon: <Info className="w-4 h-4" />, iconColor: 'text-gray-dark' },
        'warning': { bg: 'bg-amber-50', border: 'border-amber-200', icon: <AlertTriangle className="w-4 h-4" />, iconColor: 'text-amber-700' },
        'key-fact': { bg: 'bg-primary/5', border: 'border-primary/20', icon: <CheckCircle className="w-4 h-4" />, iconColor: 'text-primary' },
      };
      const v = variants[block.variant];
      return (
        <div className={`${v.bg} border-l-4 ${v.border} p-4 mb-5 rounded-r-tile`}>
          {block.heading && (
            <div className={`flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest ${v.iconColor} mb-2`}>
              {v.icon}
              {block.heading}
            </div>
          )}
          <p className="text-[13px] text-ink leading-[1.65]">{block.text}</p>
        </div>
      );
    }
    case 'pricing-table':
      return (
        <div className="mb-6 border border-gray-mid rounded-tile overflow-hidden shadow-card">
          {block.heading && (
            <div className="bg-ink text-white px-4 py-3 text-[12px] font-extrabold uppercase tracking-widest">{block.heading}</div>
          )}
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead className="bg-gray-light">
                <tr>
                  <th className="text-left px-4 py-3 font-extrabold text-ink text-[11px] uppercase tracking-widest">Service</th>
                  <th className="text-left px-4 py-3 font-extrabold text-ink text-[11px] uppercase tracking-widest">Typical Range</th>
                  <th className="text-left px-4 py-3 font-extrabold text-ink text-[11px] uppercase tracking-widest">Retainer</th>
                  <th className="text-left px-4 py-3 font-extrabold text-ink text-[11px] uppercase tracking-widest">Notes</th>
                </tr>
              </thead>
              <tbody>
                {block.rows.map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-paper' : 'bg-gray-light/30'}>
                    <td className="px-4 py-3 font-bold text-ink align-top">{r.service}</td>
                    <td className="px-4 py-3 text-primary font-bold align-top whitespace-nowrap">{r.typicalRange}</td>
                    <td className="px-4 py-3 text-gray-dark align-top whitespace-nowrap">{r.retainer}</td>
                    <td className="px-4 py-3 text-gray-dark align-top leading-[1.5]">{r.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.note && (
            <div className="bg-gray-light/40 px-4 py-2.5 text-[11px] text-gray-dark leading-[1.5] italic border-t border-gray-mid">{block.note}</div>
          )}
        </div>
      );
    case 'quote':
      return (
        <blockquote className="border-l-4 border-primary pl-5 my-5 italic text-gray-dark text-[14px] leading-[1.7]">
          &ldquo;{block.text}&rdquo;
          <div className="text-[12px] mt-2 font-bold text-ink not-italic">— {block.attribution}</div>
        </blockquote>
      );
    default:
      return null;
  }
}

export function GuideArticleClient({ guide }: { guide: Guide }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const relatedServices = guide.relatedServices
    .map(slug => getServiceBySlug(slug))
    .filter((s): s is NonNullable<typeof s> => s !== undefined);

  // Live child spokes of this hub (drafts excluded).
  const spokes = getArticlesByHub(guide.slug);

  const relatedGuideLinks = (guide.relatedGuides ?? [])
    .map(s => getGuideBySlug(s))
    .filter((g): g is NonNullable<typeof g> => g !== undefined)
    .map(g => ({ slug: g.slug, title: g.title }));

  const url = `${siteConfig.url}/guides/${guide.slug}/`;
  // YMYL schema: Article + BreadcrumbList + FAQPage, author/reviewer @id to the
  // PIM editorial entity (emitted below). No fabricated named investigator.
  const schemas: object[] = [
    buildEditorialAuthor(),
    buildBreadcrumbSchema([
      { name: 'Home', url: siteConfig.url },
      { name: 'Guides', url: `${siteConfig.url}/guides/` },
      { name: guide.title, url },
    ]),
    buildGuideSchema({
      title: guide.title,
      description: guide.metaDescription,
      slug: guide.slug,
      publishDate: guide.publishDate,
      updatedDate: guide.lastUpdated,
      imageUrl: guide.featuredImage ? `${siteConfig.url}${guide.featuredImage}` : undefined,
    }),
  ];
  if (guide.faqs && guide.faqs.length > 0) schemas.push(buildFAQSchema(guide.faqs));

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div id="main-content" tabIndex={-1} />

      {/* Hero */}
      <section className="bg-white">
        <div className="container-width pt-6">
          <Breadcrumbs items={[{ label: 'Guides', href: '/guides/' }, { label: guide.title }]} />
        </div>
        <div className="container-width pt-4 pb-8">
          <div className="relative flex min-h-[360px] md:min-h-[430px] items-end overflow-hidden rounded-tile bg-ink shadow-card">
            {guide.featuredImage && (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={guide.featuredImage}
                  alt={guide.featuredImageAlt || guide.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="eager"
                />
              </>
            )}
            <div className="absolute inset-0 bg-black/25" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15" />
            <div className="relative z-10 w-full max-w-4xl px-6 py-8 md:px-12 md:py-11">
              <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white/85 md:text-[12px]">
                Private Investigator Manhattan
                <span className="mx-2 text-primary">•</span>
                Guide
              </p>
              <h1 className="max-w-3xl text-[2rem] font-extrabold leading-[1.08] tracking-tight text-white drop-shadow-sm md:text-[2.75rem] lg:text-[3.15rem]">
                {guide.title}
              </h1>
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[12px] font-medium text-white/85 md:text-[13px]">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-primary" />
                  {guide.readingTimeMinutes} min read
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-primary" />
                  Updated {formatDate(guide.lastUpdated)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-primary" />
                  Editorially reviewed
                </span>
              </div>
            </div>
          </div>
          <p className="mt-6 max-w-3xl text-[16px] leading-[1.55] text-gray-600 md:text-[18px]">{guide.heroDescription}</p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-10 md:py-14 bg-paper">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* TOC sidebar */}
            <aside className="lg:col-span-1 order-2 lg:order-1">
              <div className="lg:sticky lg:top-24">
                <div className="text-[11px] font-extrabold uppercase tracking-widest text-primary mb-3">On This Page</div>
                <nav className="space-y-2">
                  {guide.sections.map(s => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="block text-[13px] text-gray-dark hover:text-primary transition-colors leading-[1.45] pl-3 border-l-2 border-gray-mid hover:border-primary py-1"
                    >
                      {s.heading}
                    </a>
                  ))}
                </nav>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="mt-6 w-full bg-primary text-white px-4 py-3 rounded-chip text-[11px] font-bold uppercase tracking-widest hover:bg-ink transition-colors shadow-sm"
                >
                  Free Consultation
                </button>
              </div>
            </aside>

            {/* Main article */}
            <article className="lg:col-span-3 order-1 lg:order-2">
              {/* Intro */}
              <div className="mb-10 text-gray-dark text-[15px] leading-[1.75] space-y-4">
                {guide.intro.map((p, i) => (
                  <p key={i} className={i === 0 ? 'text-[16px] font-medium text-ink' : ''}>{p}</p>
                ))}
              </div>

              {/* Sections */}
              {guide.sections.map(section => (
                <section key={section.id} id={section.id} className="mb-10 scroll-mt-24">
                  <h2 className="text-[22px] md:text-[26px] font-extrabold tracking-tight text-ink mb-5 pb-2 border-b-2 border-primary inline-block">{section.heading}</h2>
                  <div>
                    {section.content.map((block, i) => <Block key={i} block={block} />)}
                  </div>
                </section>
              ))}

              {/* FAQ */}
              {guide.faqs && guide.faqs.length > 0 && (
                <section className="mt-12 pt-8 border-t border-gray-mid">
                  <h2 className="text-[22px] md:text-[26px] font-extrabold tracking-tight text-ink mb-5">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {guide.faqs.map((f, i) => (
                      <div key={i} className="bg-paper border border-gray-mid rounded-tile p-5">
                        <h3 className="font-extrabold text-ink text-[15px] mb-2">{f.question}</h3>
                        <p className="text-[14px] text-gray-dark leading-[1.6]">{f.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Child spokes in this hub (drafts excluded) */}
              {spokes.length > 0 && (
                <section className="mt-12 pt-8 border-t border-gray-mid">
                  <div className="text-[11px] font-extrabold uppercase tracking-widest text-primary mb-4">More on This Topic</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {spokes.map(sp => (
                      <Link
                        key={sp.slug}
                        href={`/blog/${sp.slug}/`}
                        className="block p-4 bg-paper border border-gray-mid rounded-tile hover:border-primary hover:shadow-card transition-all"
                      >
                        <div className="font-extrabold text-ink text-[13px] mb-1">{sp.title}</div>
                        <div className="text-[12px] text-gray-dark leading-[1.5] line-clamp-2">{sp.excerpt}</div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* Related services */}
              {relatedServices.length > 0 && (
                <section className="mt-12 pt-8 border-t border-gray-mid">
                  <div className="text-[11px] font-extrabold uppercase tracking-widest text-primary mb-4">Related Services</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {relatedServices.map(service => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}/`}
                        className="block p-4 bg-paper border border-gray-mid rounded-tile hover:border-primary hover:shadow-card transition-all"
                      >
                        <div className="font-extrabold text-ink text-[13px] mb-1">{service.title}</div>
                        <div className="text-[12px] text-gray-dark leading-[1.5] line-clamp-2">{service.description}</div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* Related guides (sideways) */}
              {relatedGuideLinks.length > 0 && (
                <section className="mt-10 pt-8 border-t border-gray-mid">
                  <div className="text-[11px] font-extrabold uppercase tracking-widest text-primary mb-4">Related Guides</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {relatedGuideLinks.map(g => (
                      <Link
                        key={g.slug}
                        href={`/guides/${g.slug}/`}
                        className="block p-4 bg-paper border border-gray-mid rounded-tile hover:border-primary hover:shadow-card transition-all"
                      >
                        <div className="font-extrabold text-ink text-[13px]">{g.title}</div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* CTA */}
              <section className="mt-10 bg-ink text-white rounded-tile p-6 md:p-8 text-center">
                <div className="text-[11px] font-extrabold uppercase tracking-widest text-primary mb-3">Ready to Talk?</div>
                <h3 className="text-[22px] md:text-[26px] font-extrabold mb-3">Get a Free Manhattan Consultation</h3>
                <p className="text-[14px] text-white/80 mb-5 max-w-xl mx-auto leading-[1.6]">
                  Every consultation is free and confidential. Tell us about your situation and we will match you with a licensed investigator who handles cases like yours.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-primary text-white px-6 py-3 rounded-chip text-[12px] font-bold uppercase tracking-widest hover:bg-white hover:text-ink transition-colors"
                >
                  Start a Free Consultation
                </button>
              </section>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
