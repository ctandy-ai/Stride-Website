import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hip and Groin Injury Rehab Melbourne — Hip Physio | Stride",
  description:
    "Hip and groin injury rehabilitation in Moonee Ponds, Melbourne. AFL, football and combat sports athletes. Initial Assessment from $145.",
  alternates: {
    canonical: "/hip-groin-rehab",
  },
  openGraph: {
    title: "Hip and Groin Injury Rehab Melbourne — Hip Physio | Stride",
    description:
      "Hip and groin injury rehabilitation in Moonee Ponds, Melbourne. AFL, football and combat sports athletes. Initial Assessment from $145.",
    images: [{ url: 'https://www.stridephysiohealth.com.au/og-image.jpg', width: 1200, height: 630, alt: 'Stride Sports Physio & Performance — Moonee Ponds' }],
    url: 'https://www.stridephysiohealth.com.au/hip-groin-rehab',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://www.stridephysiohealth.com.au/og-image.jpg'],
  },
};

export default function HipGroinRehabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
