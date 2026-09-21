import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ankle Sprain Rehab Melbourne — Ankle Injury Physio | Stride",
  description:
    "Ankle sprain and ankle injury rehabilitation in Moonee Ponds, Melbourne. Balance, strength and sport-specific return-to-play program. Initial Assessment from $145.",
  openGraph: {
    title: "Ankle Sprain Rehab Melbourne — Ankle Injury Physio | Stride",
    description:
      "Ankle sprain and ankle injury rehabilitation in Moonee Ponds, Melbourne. Balance, strength and sport-specific return-to-play program. Initial Assessment from $145.",
  },
};

export default function AnkleRehabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
