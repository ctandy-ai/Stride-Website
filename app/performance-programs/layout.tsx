import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "S&C Performance Programs Melbourne | Stride",
  description:
    "Sport-specific S&C programs, Moonee Ponds. Blueprint testing, 6-week blocks, re-measurement every 6–8 weeks.",
  alternates: {
    canonical: "/performance-programs",
  },
  openGraph: {
    title: "S&C Performance Programs Melbourne | Stride",
    description:
      "Sport-specific strength and conditioning programs in Moonee Ponds, Melbourne. Blueprint testing, 6-week blocks, re-measurement every 6–8 weeks.",
    images: [{ url: 'https://www.stridephysiohealth.com.au/og-image.jpg', width: 1200, height: 630, alt: 'Stride Sports Physio & Performance — Moonee Ponds' }],
    url: 'https://www.stridephysiohealth.com.au/performance-programs',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://www.stridephysiohealth.com.au/og-image.jpg'],
  },
};

export default function PerformanceProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
