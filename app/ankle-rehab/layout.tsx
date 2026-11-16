import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ankle Sprain Rehab Melbourne — Ankle Injury Physio | Stride",
  description:
    "Ankle sprain rehab in Moonee Ponds. Balance, strength and sport-specific return-to-play. Initial Assessment from $145.",
  alternates: {
    canonical: "/ankle-rehab",
  },
  openGraph: {
    title: "Ankle Sprain Rehab Melbourne — Ankle Injury Physio | Stride",
    description:
      "Ankle sprain rehab in Moonee Ponds. Balance, strength and sport-specific return-to-play. Initial Assessment from $145.",
    images: [{ url: 'https://www.stridephysiohealth.com.au/og-image.jpg', width: 1200, height: 630, alt: 'Stride Sports Physio & Performance — Moonee Ponds' }],
    url: 'https://www.stridephysiohealth.com.au/ankle-rehab',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://www.stridephysiohealth.com.au/og-image.jpg'],
  },
};

export default function AnkleRehabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
