import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Injury Readiness Score | Stride Sports Physio",
  description:
    "Your personalised injury readiness score and next steps from Stride Sports Physio, Moonee Ponds.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "/score",
  },
  openGraph: {
    title: "Your Injury Readiness Score | Stride Sports Physio",
    description: "Your personalised injury readiness score and next steps from Stride Sports Physio, Moonee Ponds.",
    images: [{ url: 'https://www.stridephysiohealth.com.au/og-image.jpg', width: 1200, height: 630, alt: 'Stride Sports Physio & Performance — Moonee Ponds' }],
    url: 'https://www.stridephysiohealth.com.au/score',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://www.stridephysiohealth.com.au/og-image.jpg'],
  },
};

export default function ScoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
