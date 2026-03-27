import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  outputFileTracingRoot: process.cwd(),
  experimental: {
    // any experimental features if needed
  },
};

export default nextConfig;
