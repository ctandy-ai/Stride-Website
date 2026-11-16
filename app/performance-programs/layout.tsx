import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "S&C Performance Programs Melbourne | Stride",
  description:
    "Sport-specific SSport-specific strength and conditioning programs in Moonee Ponds, Melbourne. Blueprint testing, 6-week blocks, re-measurement every 6–8 weeks. Initial Assessment from $145.C programs, Moonee Ponds. Blueprint testing, 6-week blocks, re-measurement every 6–8 weeks. From $145.",
  alternates: {
    canonical: "/performance-programs",
  },
  openGraph: {
    title: "S&C Performance Programs Melbourne | Stride",
    description:
      "Sport-specific strength and conditioning programs in Moonee Ponds, Melbourne. Blueprint testing, 6-week blocks, re-measurement every 6–8 weeks.",
  },
};

export default function PerformanceProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
