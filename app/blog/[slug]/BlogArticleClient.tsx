'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ServiceBanner } from '@/components/ServiceBanner';
import { blogArticles } from '@/data/blog';
import { services, getServiceBySlug } from '@/data/services';
import { siteConfig } from '@/data/site';
import { buildBlogPostSchema } from '@/data/schema-helpers';
import type { BlogArticle, ContentBlock } from '@/data/blog';

const categoryServiceMap: Record<string, string> = {
  'Private Investigator': 'surveillance',
};

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case 'p':
      return (
        <p key={index} className="text-gray-dark text-[14px] leading-[1.7] mb-5">
          {block.text || ''}
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

  const relatedArticles = blogArticles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 3);

  const articleSchema = buildBlogPostSchema({
    title: article.metaTitle,
    description: article.metaDescription,
    slug: article.slug,
    publishDate: article.publishDate,
    imageUrl: article.featuredImage || undefined,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-ink text-white relative overflow-hidden">
          {article.featuredImage ? (
            <div className="absolute inset-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={article.featuredImage} alt="" className="w-full h-full object-cover opacity-25" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/50" />
            </div>
          ) : (
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(185,55,41,0.3),transparent_60%)] pointer-events-none" />
          )}
          <div className="container-width py-12 md:py-20 relative z-10">
            <Breadcrumbs items={[{ label: 'Blog', href: '/blog/' }, { label: article.title }]} light />
            <div className="max-w-3xl mt-4">
              <div className="flex items-center gap-4 mb-4">
                <span className="inline-flex items-center gap-1.5 text-[11px] text-primary font-bold uppercase tracking-widest">
                  <Tag className="w-3 h-3" /> {article.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] text-white/70">
                  <Calendar className="w-3 h-3" /> {article.publishDate}
                </span>
              </div>
              <h1 className="text-[1.8rem] md:text-[2.4rem] lg:text-[2.8rem] font-extrabold tracking-tight leading-[1.1]">
                {article.title}
              </h1>
            </div>
          </div>
        </section>

        <div className="container-width py-10 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Article body */}
            <article className="lg:col-span-2 max-w-none">
              {(() => {
                const serviceSlug = categoryServiceMap[article.category] || 'surveillance';
                const matchedService = getServiceBySlug(serviceSlug) || services[0];
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
                    {i === secondH2Index && <ServiceBanner service={matchedService} />}
                    {renderBlock(block, i)}
                  </div>
                ));
              })()}
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-5">
                <div className="bg-paper p-6 rounded-tile shadow-card border border-gray-light">
                  <h3 className="text-[15px] font-extrabold tracking-tight text-ink mb-2">Get Matched With a PI</h3>
                  <p className="text-gray-dark text-[12px] mb-5 leading-[1.5]">
                    Ready to get started? We will connect you with a licensed Manhattan investigator at no cost for the initial consultation.
                  </p>
                  <button onClick={() => setIsModalOpen(true)} className="btn-primary w-full">
                    Find an Investigator
                  </button>
                </div>

                {relatedArticles.length > 0 && (
                  <div className="bg-paper p-5 rounded-tile border border-gray-light">
                    <h3 className="text-[11px] font-extrabold text-ink uppercase tracking-widest mb-3">More Articles</h3>
                    <div className="space-y-3">
                      {relatedArticles.map((rel) => (
                        <Link
                          key={rel.slug}
                          href={`/blog/${rel.slug}/`}
                          className="block text-[12px] text-gray-dark hover:text-primary transition-colors font-medium leading-[1.4]"
                        >
                          {rel.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>

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
