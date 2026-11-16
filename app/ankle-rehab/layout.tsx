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
  },
};

export default function AnkleRehabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
