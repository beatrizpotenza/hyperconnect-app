import { NextConfig } from 'next';

const config: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Explicitly tell Next.js to use the src directory
  experimental: {
    appDir: true,
  },
};

export default config;

