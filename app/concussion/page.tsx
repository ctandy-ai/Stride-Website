import type { Metadata } from "next";
import ConcussionContent from "./ConcussionContent";
import BookingModal from "@/components/BookingModal";
import CTA from "@/components/sections/CTA";
import InjuryQuiz from "@/components/sections/InjuryQuiz";

export const metadata: Metadata = {
  title: "Sports Concussion Management Melbourne | Stride Sports Physio",
  description:
    "Sports concussion assessment and graded return-to-sport management at Stride Sports Physio, Moonee Ponds. Same-day assessment, written recovery plan, and objective clearance criteria.",
  openGraph: {
    title: "Sports Concussion Management Melbourne | Stride Sports Physio",
    description:
      "Sports concussion assessment and graded return-to-sport management at Stride in Moonee Ponds.",
  },
};

export default function ConcussionPage() {
  return (
    <div style={{ paddingTop: 66 }}>
      {/* Hero */}
      <div
        style={{
          background: "var(--navy)",
          padding: "80px var(--px) 48px",
          textAlign: "center",
        }}
      >
        <div className="ey ey-blue" style={{ justifyContent: "center", marginBottom: 16 }}>
          Concussion Management
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
          Back to sport.<br />
          <span className="orange">Done safely.</span>
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.65)",
            maxWidth: 620,
            margin: "0 auto",
            fontSize: "1.1rem",
            lineHeight: 1.7,
          }}
        >
          Sports concussion managed correctly — from same-day assessment to graded return-to-contact clearance. Written plan from the first appointment. No guesswork.
        </p>
      </div>

      <ConcussionContent />
      <CTA />
      <BookingModal />
      <InjuryQuiz />
    </div>
  );
}
