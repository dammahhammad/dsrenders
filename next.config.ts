import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Cloudflare Workers doesn't support the Next.js image optimization API,
    // so images are served directly. Pre-optimize your assets at build time
    // or use Cloudflare Images / Polish for on-the-fly optimization.
    unoptimized: true,
  },
};

export default nextConfig;
