import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ACL Rehab Melbourne — Sport-Specific ACL Rehab | Stride",
  description:
    "ACL rehab specialists, Moonee Ponds. Phase-by-phase return-to-sport with objective clearance testing — not a calendar date. From $145.",
  alternates: {
    canonical: "/acl-rehab",
  },
  openGraph: {
    title: "ACL Rehab Melbourne — Sport-Specific ACL Rehab | Stride",
    description:
      "ACL rehab specialists, Moonee Ponds. Phase-by-phase return-to-sport with objective clearance testing — not a calendar date. From $145.",
    images: [{ url: 'https://www.stridephysiohealth.com.au/og-image.jpg', width: 1200, height: 630, alt: 'Stride Sports Physio & Performance — Moonee Ponds' }],
    url: 'https://www.stridephysiohealth.com.au/acl-rehab',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://www.stridephysiohealth.com.au/og-image.jpg'],
  },
};

export default function ACLRehabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
