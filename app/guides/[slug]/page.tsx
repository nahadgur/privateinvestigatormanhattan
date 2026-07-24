import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPublishedGuides, getGuideBySlug, isGuidePublished } from '@/data/guides';
import { siteConfig } from '@/data/site';
import { GuideArticleClient } from './GuideArticleClient';

export function generateStaticParams() {
  return getPublishedGuides().map(g => ({ slug: g.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = getGuideBySlug(params.slug);
  if (!guide || !isGuidePublished(guide)) return { title: 'Guide not found' };

  const url = `${siteConfig.url}/guides/${guide.slug}/`;
  const image = guide.featuredImage;
  const imageAlt = guide.featuredImageAlt || guide.title;

  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: { canonical: `/guides/${guide.slug}/` },
    openGraph: {
      type: 'article',
      url,
      siteName: siteConfig.name,
      title: guide.metaTitle,
      description: guide.metaDescription,
      locale: 'en_US',
      publishedTime: guide.publishDate,
      modifiedTime: guide.lastUpdated,
      images: image ? [{ url: image, width: 1536, height: 1024, alt: imageAlt }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.metaTitle,
      description: guide.metaDescription,
      images: image ? [image] : undefined,
    },
    robots: { index: true, follow: true },
  };
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const guide = getGuideBySlug(params.slug);
  if (!guide || !isGuidePublished(guide)) notFound();
  return <GuideArticleClient guide={guide} />;
}
