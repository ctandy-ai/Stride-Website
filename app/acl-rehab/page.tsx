import type { Metadata } from "next";
import ACLRehab from "@/components/sections/ACLRehab";
import BookingModal from "@/components/BookingModal";
import CTA from "@/components/sections/CTA";
import InjuryQuiz from "@/components/sections/InjuryQuiz";

export const metadata: Metadata = {
  title: "ACL Rehabilitation Melbourne — Prepared to Play Program | Stride",
  description:
    "ACL rehabilitation specialists in Melbourne. Accredited Prepared to Play ACL program. Phase-by-phase return-to-sport milestones and objective clearance testing. 13 Puckle St, Moonee Ponds.",
  openGraph: {
    title: "ACL Rehabilitation Melbourne — Prepared to Play Program | Stride",
    description:
      "ACL rehabilitation specialists in Melbourne. Accredited Prepared to Play ACL program.",
  },
};

export default function ACLRehabPage() {
  return (
    <div style={{ paddingTop: 66 }}>
      <div
        style={{
          background: "var(--navy)",
          padding: "80px var(--px) 48px",
          textAlign: "center",
        }}
      >
        <div className="ey ey-blue" style={{ justifyContent: "center", marginBottom: 16 }}>
          ACL Rehabilitation
        </div>
        <h1
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(3rem, 7vw, 6rem)",
            lineHeight: 0.9,
            letterSpacing: "0.02em",
            color: "#fff",
            marginBottom: 20,
          }}
        >
          Prepared to Play<br />
          <span className="orange">ACL Program</span>
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.65)",
            maxWidth: 600,
            margin: "0 auto",
            fontSize: "1.1rem",
            lineHeight: 1.7,
          }}
        >
          Melbourne&apos;s accredited Prepared to Play ACL rehabilitation program. Evidence-based, objective, sport-specific — from surgery to full clearance.
        </p>
      </div>

      <ACLRehab />
      <CTA />
      <BookingModal />
      <InjuryQuiz />
    </div>
  );
}
