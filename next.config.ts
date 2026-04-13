import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Cloudflare Workers doesn't support the Next.js image optimization API,
    // so images are served directly. Pre-optimize your assets at build time
    // or use Cloudflare Images / Polish for on-the-fly optimization.
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/:path*\\.(svg|jpg|jpeg|png|webp|avif|gif|mp4|webm|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
