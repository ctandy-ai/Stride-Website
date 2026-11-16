import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achilles Tendon Rehab Melbourne — Achilles Physio | Stride",
  description:
    "Achilles tendon rehabilitation in Moonee Ponds, Melbourne. Progressive loading protocol, sport-specific return-to-run program. Initial Assessment from $145.",
  alternates: {
    canonical: "/achilles-rehab",
  },
  openGraph: {
    title: "Achilles Tendon Rehab Melbourne — Achilles Physio | Stride",
    description:
      "Achilles tendon rehabilitation in Moonee Ponds, Melbourne. Progressive loading protocol, sport-specific return-to-run program. Initial Assessment from $145.",
    images: [{ url: 'https://www.stridephysiohealth.com.au/og-image.jpg', width: 1200, height: 630, alt: 'Stride Sports Physio & Performance — Moonee Ponds' }],
    url: 'https://www.stridephysiohealth.com.au/achilles-rehab',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://www.stridephysiohealth.com.au/og-image.jpg'],
  },
};

export default function AchillesRehabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
