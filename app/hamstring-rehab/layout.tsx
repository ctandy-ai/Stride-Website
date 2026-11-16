import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hamstring Strain Rehab Melbourne — Soft Tissue Physio | Stride",
  description:
    "Hamstring and calf strain rehabilitation in Moonee Ponds, Melbourne. Progressive loading, sprint mechanics and return-to-play specialists. Initial Assessment from $145.",
  alternates: {
    canonical: "/hamstring-rehab",
  },
  openGraph: {
    title: "Hamstring Strain Rehab Melbourne — Soft Tissue Physio | Stride",
    description:
      "Hamstring and calf strain rehabilitation in Moonee Ponds, Melbourne. Progressive loading, sprint mechanics and return-to-play specialists. Initial Assessment from $145.",
  },
};

export default function HamstringRehabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
