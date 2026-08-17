import type { Metadata } from "next";
import SundayClinic from "@/components/sections/SundayClinic";
import BookingModal from "@/components/BookingModal";
import CTA from "@/components/sections/CTA";
import InjuryQuiz from "@/components/sections/InjuryQuiz";

export const metadata: Metadata = {
  title: "Acute Sports Injury Clinic Melbourne — Sunday Walk-In | Stride",
  description:
    "Hurt over the weekend? Stride's Acute Sports Injury Clinic is open Sundays 9am–2pm. Walk in, get assessed, get your plan. No GP referral needed. Moonee Ponds.",
  openGraph: {
    title: "Acute Sports Injury Clinic Melbourne — Sunday Walk-In | Stride",
    description:
      "Hurt over the weekend? Stride's Acute Sports Injury Clinic is open Sundays 9am–2pm.",
  },
};

export default function AcuteSportsInjuryPage() {
  return (
    <div style={{ paddingTop: 66 }}>
      <SundayClinic />
      <div
        style={{
          background: "var(--off)",
          padding: "80px var(--px)",
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        <div className="ey ey-blue">Why Sunday?</div>
        <h2
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            lineHeight: 0.9,
            color: "var(--navy)",
            letterSpacing: "0.02em",
            marginBottom: 24,
          }}
        >
          Because sport doesn&apos;t wait<br />
          <span className="orange">till Monday.</span>
        </h2>
        <p className="bt" style={{ marginBottom: 20 }}>
          Most sports injuries happen on weekends — during matches, training sessions, and competitions. And most clinics are closed. That means athletes spend 48–72 hours not knowing what they&apos;ve done, whether they should rest or keep moving, and how long they&apos;ll be out.
        </p>
        <p className="bt" style={{ marginBottom: 20 }}>
          The Stride Acute Sports Injury Clinic changes that. Every Sunday, our clinic is open specifically for athletes who got hurt on the weekend and need answers fast.
        </p>
        <ul className="cklist">
          {[
            "No GP referral required — walk in directly",
            "Full assessment and diagnosis from an experienced sports physio",
            "Immediate management plan — what to do in the next 24–72 hours",
            "Medicare, private health, and HICAPS available on the day",
            "Referral for imaging (X-ray, MRI, ultrasound) if needed",
          ].map((item, i) => (
            <li key={i}><span className="ck">✓</span>{item}</li>
          ))}
        </ul>
      </div>
      <CTA />
      <BookingModal />
      <InjuryQuiz />
    </div>
  );
}
