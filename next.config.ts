import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.1.174'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'orange.bizev.net',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

export default nextConfig;
