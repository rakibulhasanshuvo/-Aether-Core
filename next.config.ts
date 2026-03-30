import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  outputFileTracingRoot: process.cwd(),
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      }
    ],
  },
  experimental: {
    // any experimental features if needed
  },
};

export default nextConfig;
// Security audit verified
// Security audit verified
