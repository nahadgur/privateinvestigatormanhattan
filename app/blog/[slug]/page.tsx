import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogArticles, getArticleBySlug } from '@/data/blog';
import { siteConfig } from '@/data/site';
import { BlogArticleClient } from './BlogArticleClient';

export function generateStaticParams() {
  return blogArticles.map(a => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return { title: 'Article not found' };

  const url = `${siteConfig.url}/blog/${article.slug}/`;
  const image = (article as { featuredImage?: string }).featuredImage;

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: `/blog/${article.slug}/` },
    openGraph: {
      type: 'article',
      url,
      siteName: siteConfig.name,
      title: article.metaTitle,
      description: article.metaDescription,
      locale: 'en_US',
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.metaTitle,
      description: article.metaDescription,
      images: image ? [image] : undefined,
    },
    robots: { index: true, follow: true },
  };
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();
  return <BlogArticleClient article={article} />;
}
