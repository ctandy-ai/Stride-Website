import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/concussion/guide" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
