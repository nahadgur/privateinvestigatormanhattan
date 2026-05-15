import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import { blogArticles } from '@/data/blog';
import { BlogIndexClient } from './BlogIndexClient';

export const metadata: Metadata = {
  title: 'Investigations Blog — Manhattan Private Investigator Insights',
  description: 'Field reports, case patterns, and operational insight from Manhattan-licensed private investigators. Surveillance, infidelity, corporate, custody, asset, and background investigation coverage.',
  alternates: { canonical: '/blog/' },
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/blog/`,
    siteName: siteConfig.name,
    title: 'Investigations Blog',
    description: 'Field reports and case patterns from licensed Manhattan investigators.',
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: 'Investigations Blog', description: 'Field reports and case patterns from licensed Manhattan investigators.' },
  robots: { index: true, follow: true },
};

export default function BlogIndexPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${siteConfig.url}/blog/#blog`,
    name: 'Investigations Blog',
    description: 'Field reports and case patterns from licensed Manhattan investigators.',
    url: `${siteConfig.url}/blog/`,
    publisher: { '@id': `${siteConfig.url}#organization` },
    blogPost: blogArticles.slice(0, 10).map(a => ({
      '@type': 'BlogPosting',
      headline: a.title,
      url: `${siteConfig.url}/blog/${a.slug}/`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <BlogIndexClient />
    </>
  );
}
