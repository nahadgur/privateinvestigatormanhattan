// data/schema-helpers.ts
//
// Reusable schema.org JSON-LD generators. These functions produce the structured
// data that gets rendered into <script type="application/ld+json"> tags across
// the site. Centralizing here keeps schema consistent and makes future changes
// (address updates, added social links, etc.) one-file updates rather than
// hunting across multiple page files.

import { siteConfig, TESTIMONIALS } from './site';

// ---------------------------------------------------------------------------
// Constants — the core entity identity and contact information for the site
// ---------------------------------------------------------------------------

/**
 * The Manhattan service area, reused as the areaServed value on most schemas.
 * Expressed as a hierarchical Place so crawlers understand the geography.
 */
export const MANHATTAN_AREA = {
  '@type': 'AdministrativeArea',
  name: 'Manhattan',
  containedInPlace: {
    '@type': 'City',
    name: 'New York',
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: 'New York',
      containedInPlace: { '@type': 'Country', name: 'United States' },
    },
  },
};

/**
 * Pricing range signal for LocalBusiness / ProfessionalService schemas.
 * Schema.org convention uses $ symbols — "$$$" signals mid-to-high pricing,
 * which matches the actual Manhattan PI market ($150-$300/hr, $2k-$10k typical).
 */
export const PRICE_RANGE = '$$$';

/**
 * The topics this site demonstrates expertise in. Used on Organization schema
 * to strengthen topical authority signals.
 */
export const KNOWS_ABOUT = [
  'Private Investigation',
  'Surveillance',
  'Infidelity Investigation',
  'Background Checks',
  'Corporate Investigations',
  'Asset Searches',
  'Child Custody Investigations',
  'Missing Persons',
  'Skip Tracing',
  'New York Private Investigator Licensing',
];

// ---------------------------------------------------------------------------
// Review + aggregateRating from on-page testimonials
// ---------------------------------------------------------------------------

/**
 * Transforms the site's testimonial records into schema.org Review objects.
 * Each Review references the provider organization as the item being reviewed.
 * Used wherever aggregateRating is emitted so reviewers can see the individual
 * reviews underlying the aggregate.
 */
export function buildReviewItems() {
  return TESTIMONIALS.map((t) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: t.name },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: t.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: t.text,
    itemReviewed: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
  }));
}

/**
 * Build an aggregateRating object summarizing all site testimonials.
 * Only returns a value if there are actual testimonials to aggregate.
 */
export function buildAggregateRating() {
  if (TESTIMONIALS.length === 0) return undefined;
  const total = TESTIMONIALS.reduce((sum, t) => sum + t.rating, 0);
  const avg = total / TESTIMONIALS.length;
  return {
    '@type': 'AggregateRating',
    ratingValue: Number(avg.toFixed(1)),
    reviewCount: TESTIMONIALS.length,
    bestRating: 5,
    worstRating: 1,
  };
}

// ---------------------------------------------------------------------------
// Top-level schemas (global — emitted in layout.tsx)
// ---------------------------------------------------------------------------

/**
 * WebSite schema with a SearchAction, which tells Google the site supports
 * internal search and can enable the sitelinks search box in SERPs.
 */
export function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    alternateName: siteConfig.tagline,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/location/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

/**
 * Organization schema — the canonical entity for the business.
 * Includes contact, service area, topical expertise signals, aggregate rating
 * drawn from real on-page testimonials, and slogan.
 */
export function buildOrganizationSchema() {
  const agg = buildAggregateRating();
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}#organization`,
    name: siteConfig.name,
    legalName: siteConfig.name,
    url: siteConfig.url,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/android-chrome-512x512.png`,
      width: 512,
      height: 512,
    },
    image: `${siteConfig.url}/android-chrome-512x512.png`,
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    areaServed: MANHATTAN_AREA,
    knowsAbout: KNOWS_ABOUT,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['English'],
      areaServed: 'US-NY',
    },
    ...(agg ? { aggregateRating: agg, review: buildReviewItems() } : {}),
  };
}

// ---------------------------------------------------------------------------
// Service page schemas
// ---------------------------------------------------------------------------

interface ServicePageSchemaParams {
  serviceName: string;
  serviceSlug: string;
  description: string;
  faqs: { question: string; answer: string }[];
}

/**
 * Service schema for a service overview page (/services/[slug]/).
 * Includes provider organization, Manhattan service area, price range, and
 * aggregate rating so the service can appear in rich results with stars where
 * testimonials support it.
 */
export function buildServicePageSchema(p: ServicePageSchemaParams) {
  const agg = buildAggregateRating();
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: p.serviceName,
    url: `${siteConfig.url}/services/${p.serviceSlug}/`,
    description: p.description,
    serviceType: p.serviceName,
    category: 'Private Investigation',
    provider: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: MANHATTAN_AREA,
    ...(agg ? { aggregateRating: agg } : {}),
  };
}

/**
 * FAQPage schema generator — deduplicates the boilerplate across pages.
 */
export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

// ---------------------------------------------------------------------------
// Service × Location page (ProfessionalService + richer specificity)
// ---------------------------------------------------------------------------

interface ServiceLocationSchemaParams {
  serviceName: string;
  serviceSlug: string;
  cityName: string;
  citySlug: string;
  description: string;
}

/**
 * ProfessionalService schema for a service×location page. Emits the strongest
 * local-business signal we can honestly produce — service-specific,
 * city-specific, with the global organization as provider, real pricing range,
 * and aggregate rating where available.
 */
export function buildServiceLocationSchema(p: ServiceLocationSchemaParams) {
  const agg = buildAggregateRating();
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `${p.serviceName} in ${p.cityName}`,
    url: `${siteConfig.url}/services/${p.serviceSlug}/${p.citySlug}/`,
    description: p.description,
    serviceType: p.serviceName,
    category: 'Private Investigation',
    priceRange: PRICE_RANGE,
    provider: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      '@type': 'City',
      name: p.cityName,
      containedInPlace: MANHATTAN_AREA,
    },
    ...(agg ? { aggregateRating: agg } : {}),
  };
}

// ---------------------------------------------------------------------------
// Location page (LocalBusiness — location as the primary entity)
// ---------------------------------------------------------------------------

interface LocationPageSchemaParams {
  cityName: string;
  citySlug: string;
  description: string;
}

/**
 * LocalBusiness schema for a location page (/location/[city]/).
 * Presents the location-specific service presence as a distinct LocalBusiness
 * offering all services, with pricing range and aggregate rating.
 */
export function buildLocationPageSchema(p: LocationPageSchemaParams) {
  const agg = buildAggregateRating();
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${siteConfig.name} in ${p.cityName}`,
    url: `${siteConfig.url}/location/${p.citySlug}/`,
    description: p.description,
    priceRange: PRICE_RANGE,
    parentOrganization: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      '@type': 'City',
      name: p.cityName,
      containedInPlace: MANHATTAN_AREA,
    },
    ...(agg ? { aggregateRating: agg } : {}),
  };
}

// ---------------------------------------------------------------------------
// Blog post
// ---------------------------------------------------------------------------

interface BlogPostSchemaParams {
  title: string;
  description: string;
  slug: string;
  publishDate: string;
  updatedDate?: string;
  imageUrl?: string;
}

/**
 * BlogPosting schema for a blog article. Uses "P.I. Manhattan Team" as the
 * named author (a legitimate organizational-author convention where individual
 * bylines are not attributed) and the site organization as publisher.
 */
export function buildBlogPostSchema(p: BlogPostSchemaParams) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: p.title,
    description: p.description,
    datePublished: p.publishDate,
    dateModified: p.updatedDate || p.publishDate,
    author: {
      '@type': 'Organization',
      name: 'P.I. Manhattan Team',
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/android-chrome-512x512.png`,
      },
    },
    reviewedBy: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}#organization`,
      name: `${siteConfig.name} editorial team`,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${p.slug}/`,
    },
    ...(p.imageUrl ? { image: p.imageUrl } : {}),
  };
}

// ---------------------------------------------------------------------------
// Guide (Article)
// ---------------------------------------------------------------------------

interface GuideSchemaParams {
  title: string;
  description: string;
  slug: string;
  publishDate: string;
  updatedDate: string;
}

export function buildGuideSchema(p: GuideSchemaParams) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: p.title,
    description: p.description,
    datePublished: p.publishDate,
    dateModified: p.updatedDate,
    author: {
      '@type': 'Organization',
      name: 'P.I. Manhattan Team',
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/android-chrome-512x512.png`,
      },
    },
    // YMYL guide — explicit reviewer entity points back to the same
    // site Organization (no fabricated named reviewer with credentials,
    // per the fleet no-fabricated-authors rule).
    reviewedBy: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}#organization`,
      name: `${siteConfig.name} editorial team`,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/guides/${p.slug}/`,
    },
  };
}
