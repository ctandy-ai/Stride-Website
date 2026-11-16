import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Injury Readiness Score | Stride Sports Physio",
  description:
    "Your personalised injury readiness score and next steps from Stride Sports Physio, Moonee Ponds.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ScoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
