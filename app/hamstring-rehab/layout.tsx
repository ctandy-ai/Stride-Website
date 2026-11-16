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
  },
};

export default function HamstringRehabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
