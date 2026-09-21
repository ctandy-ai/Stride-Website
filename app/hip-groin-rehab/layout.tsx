import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hip and Groin Injury Rehab Melbourne — Hip Physio | Stride",
  description:
    "Hip and groin injury rehabilitation in Moonee Ponds, Melbourne. AFL, football and combat sports specialists. Initial Assessment from $145.",
  openGraph: {
    title: "Hip and Groin Injury Rehab Melbourne — Hip Physio | Stride",
    description:
      "Hip and groin injury rehabilitation in Moonee Ponds, Melbourne. AFL, football and combat sports specialists. Initial Assessment from $145.",
  },
};

export default function HipGroinRehabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
