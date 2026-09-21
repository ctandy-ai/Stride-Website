import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achilles Tendon Rehab Melbourne — Achilles Physio | Stride",
  description:
    "Achilles tendon rehabilitation in Moonee Ponds, Melbourne. Progressive loading protocol, sport-specific return-to-run program. Initial Assessment from $145.",
  openGraph: {
    title: "Achilles Tendon Rehab Melbourne — Achilles Physio | Stride",
    description:
      "Achilles tendon rehabilitation in Moonee Ponds, Melbourne. Progressive loading protocol, sport-specific return-to-run program. Initial Assessment from $145.",
  },
};

export default function AchillesRehabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
