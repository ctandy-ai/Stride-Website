import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.cdn.filesafe.space",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "is1-ssl.mzstatic.com",
      },
    ],
  },
  typescript: {
    // Allow builds with type errors during initial migration
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
