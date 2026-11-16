import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ACL Rehab Melbourne — Sport-Specific ACL Rehab | Stride",
  description:
    "ACL rehabilitation specialists in Moonee Ponds, Melbourne. Phase-by-phase return-to-sport program with objective clearance testing — not a calendar date. Initial Assessment from $145.",
  alternates: {
    canonical: "/acl-rehab",
  },
  openGraph: {
    title: "ACL Rehab Melbourne — Sport-Specific ACL Rehab | Stride",
    description:
      "ACL rehabilitation specialists in Moonee Ponds, Melbourne. Phase-by-phase return-to-sport program with objective clearance testing — not a calendar date. Initial Assessment from $145.",
  },
};

export default function ACLRehabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
