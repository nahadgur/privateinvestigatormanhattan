import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPublishedArticles, getArticleBySlug } from '@/data/blog';
import { siteConfig } from '@/data/site';
import { BlogArticleClient } from './BlogArticleClient';

export function generateStaticParams() {
  // Draft spokes are not pre-rendered; they 404 until the publisher flips them.
  return getPublishedArticles().map(a => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article || article.draft) return { title: 'Article not found' };

  const url = `${siteConfig.url}/blog/${article.slug}/`;
  const image = article.featuredImage;
  const imageAlt = article.featuredImageAlt || article.title;

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
      images: image ? [{ url: image, width: 1536, height: 1024, alt: imageAlt }] : undefined,
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
  if (!article || article.draft) notFound();
  return <BlogArticleClient article={article} />;
}
