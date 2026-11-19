import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/afl-insurance" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
