/** @type {import('next').NextConfig} */

// Retired URLs are handled in middleware.ts with a 410 Gone response
// (correct signal for permanently deleted pages). Previously these were
// 308 redirects to the hub — moved to middleware on 2026-05-17 along
// with the neighborhood cull, so that boroughs, dropped Manhattan
// neighborhoods, and combo URLs all share one source of truth.

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
};

module.exports = nextConfig;
