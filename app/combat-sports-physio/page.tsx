import type { Metadata } from "next";
import CombatSports from "@/components/sections/CombatSports";
import BookingModal from "@/components/BookingModal";
import CTA from "@/components/sections/CTA";
import InjuryQuiz from "@/components/sections/InjuryQuiz";

export const metadata: Metadata = {
  title: "Combat Sports Physio Melbourne — BJJ, MMA, Boxing | Stride",
  description:
    "Specialist physiotherapy for BJJ, MMA, boxing, and wrestling athletes in Melbourne. Tom Yeung — Senior Physio and founder of Combat Sports Consulting. 13 Puckle St, Moonee Ponds.",
  openGraph: {
    title: "Combat Sports Physio Melbourne — BJJ, MMA, Boxing | Stride",
    description:
      "Specialist physiotherapy for BJJ, MMA, boxing, and wrestling athletes in Melbourne.",
  },
};

export default function CombatSportsPage() {
  return (
    <>
      <div style={{ paddingTop: 66 }}>
        {/* Hero banner */}
        <div
          style={{
            background: "var(--navy)",
            padding: "80px var(--px) 48px",
            textAlign: "center",
          }}
        >
          <div
            className="ey ey-blue"
            style={{ justifyContent: "center", marginBottom: 16 }}
          >
            Combat Sports Physio
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
            BJJ. MMA. Boxing.<br />
            <span className="orange">Real physio. Real sport.</span>
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
            Dedicated combat sports physiotherapy from a clinician who trains — and competes. Tom Yeung understands the demands of the mat from the inside.
          </p>
        </div>

        <CombatSports />
        <CTA />
        <BookingModal />
        <InjuryQuiz />
      </div>
    </>
  );
}
