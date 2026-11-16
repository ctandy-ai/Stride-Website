import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Stride Sports Physio | Moonee Ponds",
  description:
    "Contact Stride Sports Physio & Performance in Moonee Ponds. 13 Puckle Street, Moonee Ponds VIC 3039. Call 0483 918 427 or book online.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Stride Sports Physio | Moonee Ponds",
    description:
      "Contact Stride Sports Physio & Performance in Moonee Ponds. 13 Puckle Street, Moonee Ponds VIC 3039. Call 0483 918 427 or book online.",
    images: [{ url: 'https://www.stridephysiohealth.com.au/og-image.jpg', width: 1200, height: 630, alt: 'Stride Sports Physio & Performance — Moonee Ponds' }],
    url: 'https://www.stridephysiohealth.com.au/contact',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://www.stridephysiohealth.com.au/og-image.jpg'],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
