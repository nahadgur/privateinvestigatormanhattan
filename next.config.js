/** @type {import('next').NextConfig} */

// Removed borough locations (Sprint 1 - 2026-04-17)
// Redirecting to /location/ index so backlinks are preserved and no 404s on crawl.
const REMOVED_LOCATIONS = [
  'astoria',
  'long-island-city',
  'flushing',
  'brooklyn-heights',
  'williamsburg',
  'park-slope',
  'bronx',
  'staten-island',
  'jamaica',
  'forest-hills',
];

const SERVICE_SLUGS = [
  'infidelity-investigation',
  'surveillance',
  'background-checks',
  'corporate-investigations',
  'asset-searches',
  'child-custody-investigations',
];

const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
    ],
  },
  async redirects() {
    const locationRedirects = REMOVED_LOCATIONS.map((loc) => ({
      source: `/location/${loc}/`,
      destination: '/location/',
      permanent: true,
    }));

    const serviceLocationRedirects = [];
    for (const service of SERVICE_SLUGS) {
      for (const loc of REMOVED_LOCATIONS) {
        serviceLocationRedirects.push({
          source: `/services/${service}/${loc}/`,
          destination: `/services/${service}/`,
          permanent: true,
        });
      }
    }

    return [...locationRedirects, ...serviceLocationRedirects];
  },
};

module.exports = nextConfig;
