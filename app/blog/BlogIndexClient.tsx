'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { blogArticles } from '@/data/blog';
import { siteConfig } from '@/data/site';

export function BlogIndexClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = Array.from(new Set(blogArticles.map((a) => a.category)));
    return ['All', ...cats];
  }, []);

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return blogArticles;
    return blogArticles.filter((a) => a.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main id="main-content" className="flex-grow">
        {/* Hero */}
        <section className="bg-ink text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(185,55,41,0.25),transparent_60%)] pointer-events-none" />
          <div className="container-width py-16 md:py-20 relative z-10">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-[10px] font-extrabold uppercase tracking-widest rounded-chip mb-4 border border-primary/30">
                Resources
              </span>
              <h1 className="text-[2rem] md:text-[2.8rem] font-extrabold tracking-tight leading-[1.05] mb-4">
                {siteConfig.name} Blog
              </h1>
              <p className="text-[16px] text-white/80 leading-[1.55]">
                Guides, legal information, and case insights for Manhattan clients considering hiring a private investigator.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-width">
            {blogArticles.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-dark text-[14px]">No articles yet. Check back soon for helpful guides and advice.</p>
              </div>
            ) : (
              <>
                {/* Category filter */}
                {categories.length > 2 && (
                  <div className="flex flex-wrap gap-2 mb-10">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 rounded-chip text-[11px] font-bold uppercase tracking-widest transition-all ${
                          activeCategory === cat
                            ? 'bg-primary text-white shadow-sm'
                            : 'bg-gray-light text-gray-dark hover:bg-gray-mid hover:text-ink'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}

                {/* Article grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filtered.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/blog/${article.slug}/`}
                      className="group block bg-paper rounded-tile overflow-hidden border border-gray-light shadow-card hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                    >
                      <div className="h-44 overflow-hidden bg-gray-light">
                        {article.featuredImage ? (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img
                            src={article.featuredImage}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-primary/30 via-primary/10 to-gray-light" />
                        )}
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-[10px] font-extrabold text-primary bg-primary/10 px-2.5 py-0.5 rounded-chip uppercase tracking-widest">
                            {article.category}
                          </span>
                          <span className="text-[11px] text-gray-dark">{article.publishDate}</span>
                        </div>
                        <h2 className="text-[16px] font-extrabold tracking-tight text-ink group-hover:text-primary mb-2 line-clamp-2 leading-[1.3]">
                          {article.title}
                        </h2>
                        <p className="text-[12px] text-gray-dark line-clamp-3 leading-[1.55]">{article.excerpt}</p>
                      </div>
                    </Link>
                  ))}
                </div>

                {filtered.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-dark text-[14px]">No articles in this category yet.</p>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
