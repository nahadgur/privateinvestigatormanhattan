// app/sitemap.ts
//
// Per-route lastmod is derived from `git log -1 --format=%cI` of the
// underlying data files at build time. Editing data/services.ts auto-
// bumps all service URLs' lastmod; data/locations.ts auto-bumps every
// location URL. Falls back to current build time when git history is
// unavailable.
//
// Static `new Date()` per route (what was here before) made every
// crawl look "fresh" and burned crawl budget on pages that hadn't
// actually changed.

import type { MetadataRoute } from 'next';
import { execSync } from 'node:child_process';
import path from 'node:path';
import { services } from '@/data/services';
import { LOCATIONS, toSlug } from '@/data/locations';
import { siteConfig } from '@/data/site';
import { blogArticles } from '@/data/blog';
import { getPublishedGuides } from '@/data/guides';

const ROOT = process.cwd();
const FALLBACK = new Date().toISOString();

function gitMtime(relPath: string): string {
  try {
    const out = execSync(`git log -1 --format=%cI -- "${relPath}"`, {
      cwd: ROOT,
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'ignore'],
    }).trim();
    if (out) return out;
  } catch {
    /* fall through */
  }
  return FALLBACK;
}

function newestOf(...paths: string[]): string {
  return paths.map(gitMtime).sort().pop() ?? FALLBACK;
}

const HOMEPAGE_MTIME = newestOf('app/HomePageClient.tsx', 'app/page.tsx', 'data/site.ts');
const SERVICES_MTIME = newestOf(
  'data/services.ts',
  'data/serviceContent.ts',
  'app/services/[serviceSlug]/page.tsx',
  'app/services/[serviceSlug]/ServiceDetailClient.tsx',
);
const SERVICE_LOCATION_MTIME = newestOf(
  'data/services.ts',
  'data/serviceLocationContent.ts',
  'data/locationCasePatterns.ts',
  'app/services/[serviceSlug]/[locationSlug]/page.tsx',
);
const SERVICES_HUB_MTIME = newestOf('data/services.ts', 'app/services/page.tsx', 'app/services/ServicesIndexClient.tsx');
const LOCATIONS_MTIME = newestOf(
  'data/locations.ts',
  'data/cityContent.ts',
  'data/locationProfiles.ts',
  'app/location/[city]/page.tsx',
);
const LOCATIONS_HUB_MTIME = newestOf('data/locations.ts', 'app/location/page.tsx', 'app/location/LocationIndexClient.tsx');
const BLOG_HUB_MTIME = newestOf('data/blog.ts', 'app/blog/page.tsx', 'app/blog/BlogIndexClient.tsx');
const GUIDES_HUB_MTIME = newestOf('data/guides.ts', 'app/guides/page.tsx', 'app/guides/GuidesIndexClient.tsx');
const ABOUT_MTIME = gitMtime('app/about/AboutPageClient.tsx');
const FAQ_MTIME = gitMtime('app/faq/FAQPageClient.tsx');
const HIW_MTIME = gitMtime('app/how-it-works/HowItWorksClient.tsx');

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const allCities = Object.values(LOCATIONS).flat();
  const publishedGuides = getPublishedGuides();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: HOMEPAGE_MTIME, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/services/`, lastModified: SERVICES_HUB_MTIME, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/location/`, lastModified: LOCATIONS_HUB_MTIME, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/about/`, lastModified: ABOUT_MTIME, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${base}/how-it-works/`, lastModified: HIW_MTIME, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${base}/faq/`, lastModified: FAQ_MTIME, changeFrequency: 'monthly', priority: 0.8 },
  ];

  if (blogArticles.length > 0) {
    staticPages.push({ url: `${base}/blog/`, lastModified: BLOG_HUB_MTIME, changeFrequency: 'monthly', priority: 0.8 });
  }

  if (publishedGuides.length > 0) {
    staticPages.push({ url: `${base}/guides/`, lastModified: GUIDES_HUB_MTIME, changeFrequency: 'monthly', priority: 0.9 });
  }

  const guidePages: MetadataRoute.Sitemap = publishedGuides.map(g => ({
    url: `${base}/guides/${g.slug}/`,
    lastModified: g.lastUpdated,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  const blogPages: MetadataRoute.Sitemap = blogArticles.map(article => {
    const a = article as { slug: string; publishDate?: string; lastUpdated?: string };
    return {
      url: `${base}/blog/${a.slug}/`,
      lastModified: a.lastUpdated || a.publishDate || FALLBACK,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    };
  });

  const servicePages: MetadataRoute.Sitemap = services.map(s => ({
    url: `${base}/services/${s.slug}/`,
    lastModified: SERVICES_MTIME,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const locationPages: MetadataRoute.Sitemap = allCities.map(city => ({
    url: `${base}/location/${toSlug(city)}/`,
    lastModified: LOCATIONS_MTIME,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const serviceLocationPages: MetadataRoute.Sitemap = [];
  for (const service of services) {
    for (const city of allCities) {
      serviceLocationPages.push({
        url: `${base}/services/${service.slug}/${toSlug(city)}/`,
        lastModified: SERVICE_LOCATION_MTIME,
        changeFrequency: 'monthly' as const,
        priority: 0.9,
      });
    }
  }

  return [...staticPages, ...blogPages, ...guidePages, ...servicePages, ...locationPages, ...serviceLocationPages];
}
