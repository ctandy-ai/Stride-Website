import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Bebas_Neue, DM_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stride Sports Physio — Sports Injury Management | Melbourne",
  description:
    "Melbourne sports injury physiotherapists. Sport-specific rehab — AFL, netball, rugby, BJJ, MMA. Get a written plan from day one. 13 Puckle St, Moonee Ponds.",
  openGraph: {
    title: "Stride Sports Physio — Sports Injury Management | Melbourne",
    description:
      "Melbourne sports injury physiotherapists. Sport-specific rehab — AFL, netball, rugby, BJJ, MMA. Get a written plan from day one.",
    siteName: "Stride Sports Physio & Performance",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebasNeue.variable} ${dmMono.variable}`}
    >
      <head>
        {/* GTM-T49PZPP removed — conversion linking now handled by Google tag destinations */}
      </head>
      <body>

        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
