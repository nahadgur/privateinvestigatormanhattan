import type { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { LOCATIONS, toSlug } from '@/data/locations';
import { siteConfig } from '@/data/site';
import { blogArticles } from '@/data/blog';
import { getPublishedGuides } from '@/data/guides';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const allCities = Object.values(LOCATIONS).flat();
  const publishedGuides = getPublishedGuides();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/services/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/location/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/about/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/how-it-works/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/faq/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ];

  if (blogArticles.length > 0) {
    staticPages.push({ url: `${base}/blog/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 });
  }

  if (publishedGuides.length > 0) {
    staticPages.push({ url: `${base}/guides/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 });
  }

  const guidePages: MetadataRoute.Sitemap = publishedGuides.map(g => ({
    url: `${base}/guides/${g.slug}/`,
    lastModified: new Date(g.lastUpdated),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  const blogPages: MetadataRoute.Sitemap = blogArticles.map(article => ({
    url: `${base}/blog/${article.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const servicePages: MetadataRoute.Sitemap = services.map(s => ({
    url: `${base}/services/${s.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const locationPages: MetadataRoute.Sitemap = allCities.map(city => ({
    url: `${base}/location/${toSlug(city)}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const serviceLocationPages: MetadataRoute.Sitemap = [];
  for (const service of services) {
    for (const city of allCities) {
      serviceLocationPages.push({
        url: `${base}/services/${service.slug}/${toSlug(city)}/`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
      });
    }
  }

  return [...staticPages, ...blogPages, ...guidePages, ...servicePages, ...locationPages, ...serviceLocationPages];
}
