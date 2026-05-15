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
    // All imagery is local in /public/images/. No stock-photo hosts;
    // per fleet rule, never reintroduce Unsplash / Pexels remote patterns.
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          // HSTS — force HTTPS for 2 years. Submit to hstspreload.org
          // after first prod deploy lands with this header.
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        ],
      },
    ];
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
