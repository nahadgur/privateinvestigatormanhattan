'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';

function estimateReadMins(blocks: { text?: string; items?: string[] }[]): number {
  const words = blocks.reduce((n, b) => {
    const t = (b.text || '') + ' ' + ((b.items || []).join(' '));
    return n + t.trim().split(/\s+/).filter(Boolean).length;
  }, 0);
  return Math.max(3, Math.round(words / 200));
}
import { getGuideBySlug } from '@/data/guides';
import { siteConfig } from '@/data/site';
import { buildBlogPostSchema, buildBreadcrumbSchema, buildFAQSchema, buildEditorialAuthor } from '@/data/schema-helpers';
import type { BlogArticle, ContentBlock } from '@/data/blog';

// Extract a FAQ list from content (the "Frequently Asked Questions" h2 followed
// by h3/p pairs) for FAQPage schema. Falls back to an explicit faqs field.
function extractFaqs(content: ContentBlock[]): { question: string; answer: string }[] {
  for (let i = 0; i < content.length; i++) {
    const b = content[i];
    if (b.type === 'h2' && (b.text || '').includes('Frequently Asked Questions')) {
      const faqs: { question: string; answer: string }[] = [];
      let j = i + 1;
      while (j < content.length) {
        const q = content[j];
        const a = content[j + 1];
        if (q && q.type === 'h3' && a && a.type === 'p') { faqs.push({ question: q.text || '', answer: a.text || '' }); j += 2; }
        else if (q && q.type === 'h3') { j += 1; }
        else break;
      }
      return faqs;
    }
  }
  return [];
}

// Contained brand-band lead-capture banner. Opens the existing pop-up lead modal.
function CtaBanner({ eyebrow, heading, subtext, buttonText, onOpen }: {
  eyebrow: string; heading: string; subtext: string; buttonText: string; onOpen: () => void;
}) {
  return (
    <div className="not-prose my-10 rounded-tile bg-ink text-white px-6 py-6 md:px-10 md:py-7 shadow-lg overflow-hidden relative">
      <div className="absolute top-0 right-0 w-48 h-48 bg-primary/15 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
        <div className="flex-1 min-w-0">
          <p className="text-primary text-[10px] font-extrabold uppercase tracking-widest mb-1.5">{eyebrow}</p>
          <h3 className="text-[18px] md:text-[22px] font-extrabold text-white mb-2 leading-snug tracking-tight">{heading}</h3>
          <p className="text-white/75 text-[13px] leading-relaxed">{subtext}</p>
        </div>
        <div className="flex-shrink-0">
          <button
            onClick={onOpen}
            className="inline-flex items-center gap-2 bg-primary text-white font-bold text-[12px] uppercase tracking-widest py-3 px-5 rounded-chip hover:bg-white hover:text-ink transition-colors shadow-md whitespace-nowrap"
          >
            {buttonText} <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// Render a paragraph that may contain {{0}}, {{1}}, ... placeholders mapped to
// `links`. Internal hrefs render as next/link; external hrefs open in a new tab.
function renderTextWithLinks(text: string, links?: { label: string; href: string }[]) {
  if (!links || links.length === 0 || !text.includes('{{')) return text;
  const parts = text.split(/(\{\{\d+\}\})/g);
  return parts.map((part, i) => {
    const match = part.match(/^\{\{(\d+)\}\}$/);
    if (!match) return <span key={i}>{part}</span>;
    const link = links[Number(match[1])];
    if (!link) return null;
    const label = link.label;
    if (link.href.startsWith('/')) {
      return (
        <Link key={i} href={link.href} className="text-primary font-medium underline underline-offset-2 hover:text-primary/80">
          {label}
        </Link>
      );
    }
    return (
      <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className="text-primary font-medium underline underline-offset-2 hover:text-primary/80">
        {label}
      </a>
    );
  });
}

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case 'p':
      return (
        <p key={index} className="text-gray-dark text-[14px] leading-[1.7] mb-5">
          {renderTextWithLinks(block.text || '', block.links)}
        </p>
      );
    case 'h2':
      return (
        <h2 key={index} className="text-[22px] md:text-[26px] font-extrabold tracking-tight text-ink mt-10 mb-4">
          {block.text || ''}
        </h2>
      );
    case 'h3':
      return (
        <h3 key={index} className="text-[18px] font-extrabold tracking-tight text-ink mt-8 mb-3">
          {block.text || ''}
        </h3>
      );
    case 'list':
      return (
        <ul key={index} className="space-y-2 mb-6 pl-1">
          {(block.items || []).map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-dark text-[14px] leading-[1.6]">
              <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'image':
      return (
        <figure key={index} className="my-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={block.src || ''}
            alt={block.alt || ''}
            className="w-full rounded-tile object-cover"
            loading="lazy"
          />
          {(block.alt || '') && (
            <figcaption className="text-[11px] text-gray-dark mt-2 text-center">{block.alt || ''}</figcaption>
          )}
        </figure>
      );
    case 'cta':
      return (
        <div key={index} className="bg-primary/5 border border-primary/15 rounded-tile p-6 my-8 text-center">
          <p className="font-extrabold text-ink text-[16px] tracking-tight mb-2">{block.text || 'Get Matched With a Manhattan PI'}</p>
          <p className="text-[13px] text-gray-dark">
            Speak with a licensed Manhattan private investigator. Free confidential consultation.
          </p>
        </div>
      );
    case 'related-articles':
      return (
        <div key={index} className="my-8">
          <h3 className="text-[16px] font-extrabold tracking-tight text-ink mb-4">Related Reading</h3>
          <div className="grid gap-3">
            {(block.articles || []).map((rel, i) => (
              <Link
                key={i}
                href={`/blog/${rel.slug}/`}
                className="flex items-center gap-4 p-4 bg-paper rounded-tile border border-gray-light hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                {(rel.image || '') && (
                  <div className="w-14 h-14 rounded-chip overflow-hidden flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={rel.image || ''} alt={rel.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                )}
                <span className="font-medium text-ink text-[13px]">{rel.title}</span>
              </Link>
            ))}
          </div>
        </div>
      );
    default:
      return null;
  }
}

export function BlogArticleClient({ article }: { article: BlogArticle }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Hub guide drives the spoke hero eyebrow.
  const hubGuide = getGuideBySlug(article.hub);

  const url = `${siteConfig.url}/blog/${article.slug}/`;
  const faqs = article.faqs && article.faqs.length > 0 ? article.faqs : extractFaqs(article.content);
  const schemas: object[] = [
    buildEditorialAuthor(),
    buildBreadcrumbSchema([
      { name: 'Home', url: siteConfig.url },
      { name: 'Blog', url: `${siteConfig.url}/blog/` },
      { name: article.title, url },
    ]),
    buildBlogPostSchema({
      title: article.metaTitle,
      description: article.metaDescription,
      slug: article.slug,
      publishDate: article.publishDate,
      updatedDate: article.dateModified || article.publishDate,
      imageUrl: article.featuredImage
        ? (article.featuredImage.startsWith('http') ? article.featuredImage : `${siteConfig.url}${article.featuredImage}`)
        : undefined,
    }),
  ];
  if (faqs.length > 0) schemas.push(buildFAQSchema(faqs));

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main id="main-content" className="flex-grow">
        {/* Hero */}
        <section className="bg-white">
          <div className="container-width pt-6">
            <Breadcrumbs items={[{ label: 'Blog', href: '/blog/' }, { label: article.title }]} />
          </div>
          <div className="container-width pt-4 pb-8">
            <div className="relative flex min-h-[360px] md:min-h-[430px] items-end overflow-hidden rounded-tile bg-ink shadow-card">
              {article.featuredImage && (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={article.featuredImage}
                    alt={article.featuredImageAlt || article.title}
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
                  {hubGuide?.title ?? article.category}
                </p>
                <h1 className="max-w-3xl text-[2rem] font-extrabold leading-[1.08] tracking-tight text-white drop-shadow-sm md:text-[2.75rem] lg:text-[3.15rem]">
                  {article.title}
                </h1>
                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] font-medium text-white/85 md:text-[13px]">
                  <span className="inline-flex items-center gap-1.5">
                    <Tag className="h-3.5 w-3.5 text-primary" /> {article.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-primary" /> {article.publishDate}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-primary" /> {estimateReadMins(article.content)} min read
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container-width py-10 md:py-14">
          {/* Article body, full content width (no sidebar) */}
          <article className="max-w-none">
            {(() => {
              let h2Count = 0;
              let secondH2Index = -1;
              for (let i = 0; i < article.content.length; i++) {
                if (article.content[i].type === 'h2') {
                  h2Count++;
                  if (h2Count === 2) {
                    secondH2Index = i;
                    break;
                  }
                }
              }
              return article.content.map((block, i) => (
                <div key={i}>
                  {i === secondH2Index && (
                    <CtaBanner
                      eyebrow="Free Confidential Consultation"
                      heading="Talk to a licensed Manhattan investigator"
                      subtext="Tell us about your situation and we will match you with a vetted New York PI who works strictly within the law."
                      buttonText="Find an Investigator"
                      onOpen={() => setIsModalOpen(true)}
                    />
                  )}
                  {renderBlock(block, i)}
                </div>
              ));
            })()}
          </article>

          {/* End-of-article lead capture */}
          <CtaBanner
            eyebrow="No Obligation, Strictly Confidential"
            heading="Get matched with the right PI for your case"
            subtext="Share a few details and we will connect you with a licensed Manhattan investigator at no cost for the initial consultation."
            buttonText="Request Consultation"
            onOpen={() => setIsModalOpen(true)}
          />

          {/* Back to blog */}
          <div className="mt-12 pt-8 border-t border-gray-light">
            <Link
              href="/blog/"
              className="inline-flex items-center gap-2 text-primary font-bold text-[12px] uppercase tracking-widest hover:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to All Articles
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
