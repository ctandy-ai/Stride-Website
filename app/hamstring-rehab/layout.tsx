import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hamstring Strain Rehab Melbourne — Soft Tissue Physio | Stride",
  description:
    "Hamstring and calf rehab, Moonee Ponds. Progressive loading, sprint mechanics and return-to-play. Initial Assessment from $145.",
  alternates: {
    canonical: "/hamstring-rehab",
  },
  openGraph: {
    title: "Hamstring Strain Rehab Melbourne — Soft Tissue Physio | Stride",
    description:
      "Hamstring and calf rehab, Moonee Ponds. Progressive loading, sprint mechanics and return-to-play. Initial Assessment from $145.",
    images: [{ url: 'https://www.stridephysiohealth.com.au/og-image.jpg', width: 1200, height: 630, alt: 'Stride Sports Physio & Performance — Moonee Ponds' }],
    url: 'https://www.stridephysiohealth.com.au/hamstring-rehab',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://www.stridephysiohealth.com.au/og-image.jpg'],
  },
};

export default function HamstringRehabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
