import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/concussion/diary" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
