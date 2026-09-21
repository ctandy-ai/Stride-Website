import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shoulder Injury Rehab Melbourne — Shoulder Physio | Stride",
  description:
    "Shoulder injury rehabilitation in Moonee Ponds, Melbourne. Rotator cuff, labrum, instability and overhead athlete specialists. Initial Assessment from $145.",
  openGraph: {
    title: "Shoulder Injury Rehab Melbourne — Shoulder Physio | Stride",
    description:
      "Shoulder injury rehabilitation in Moonee Ponds, Melbourne. Rotator cuff, labrum, instability and overhead athlete specialists. Initial Assessment from $145.",
  },
};

export default function ShoulderRehabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
