import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/classification-card',
        destination: '/classification-card.html',
      },
    ];
  },
  async redirects() {
    return [
      // Legacy page redirects
      { source: '/about', destination: '/#team', permanent: true },
      { source: '/services', destination: '/#what-we-treat', permanent: true },
      { source: '/contact', destination: '/#contact', permanent: true },
      { source: '/bookings', destination: 'https://stride-physiotherapy-and-health-group.au1.cliniko.com/bookings?business_id=76801', permanent: true },
      // Old injury/service page slugs
      { source: '/sports-physio', destination: '/', permanent: true },
      { source: '/sports-physio-moonee-ponds', destination: '/', permanent: true },
      { source: '/acl-rehab', destination: '/acl-rehab', permanent: false }, // already exists
      { source: '/shoulder', destination: '/shoulder-rehab', permanent: true },
      { source: '/hamstring', destination: '/hamstring-rehab', permanent: true },
      { source: '/ankle', destination: '/ankle-rehab', permanent: true },
      { source: '/hip', destination: '/hip-groin-rehab', permanent: true },
      { source: '/achilles', destination: '/achilles-rehab', permanent: true },
      { source: '/concussion-management', destination: '/concussion', permanent: true },
      { source: '/performance', destination: '/performance-programs', permanent: true },
      { source: '/programs', destination: '/performance-programs', permanent: true },
      { source: '/blog', destination: '/', permanent: true },
      { source: '/blog/:slug*', destination: '/', permanent: true },
      { source: '/team', destination: '/#team', permanent: true },
      { source: '/faq', destination: '/#faq', permanent: true },
      { source: '/pricing', destination: '/#pricing', permanent: true },
    ];
  },
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
