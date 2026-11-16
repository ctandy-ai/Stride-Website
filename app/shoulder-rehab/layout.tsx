import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shoulder Injury Rehab Melbourne — Shoulder Physio | Stride",
  description:
    "Shoulder injury rehabilitation in Moonee Ponds, Melbourne. Rotator cuff, labrum, instability and overhead athlete specialists. Initial Assessment from $145.",
  alternates: {
    canonical: "/shoulder-rehab",
  },
  openGraph: {
    title: "Shoulder Injury Rehab Melbourne — Shoulder Physio | Stride",
    description:
      "Shoulder injury rehabilitation in Moonee Ponds, Melbourne. Rotator cuff, labrum, instability and overhead athlete specialists. Initial Assessment from $145.",
    images: [{ url: 'https://www.stridephysiohealth.com.au/og-image.jpg', width: 1200, height: 630, alt: 'Stride Sports Physio & Performance — Moonee Ponds' }],
    url: 'https://www.stridephysiohealth.com.au/shoulder-rehab',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://www.stridephysiohealth.com.au/og-image.jpg'],
  },
};

export default function ShoulderRehabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
