"use client";

import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Problem from "@/components/sections/Problem";
import Accelerator from "@/components/sections/Accelerator";
import Pricing from "@/components/sections/Pricing";
import Solution from "@/components/sections/Solution";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import BookingModal from "@/components/BookingModal";
import InjuryQuiz from "@/components/sections/InjuryQuiz";
import StickyBookBtn from "@/components/ui/StickyBookBtn";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Problem />
      <Accelerator />
      <Pricing />

      {/* Guarantee */}
      <div style={{ background: "var(--off)", padding: "96px var(--px)", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div className="ey ey-navy" style={{ justifyContent: "center" }}>Our commitment</div>
          <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 0.9, color: "var(--navy)", letterSpacing: "0.02em", marginBottom: 20 }}>
            If it&apos;s not right,<br /><span className="orange">we&apos;ll make it right.</span>
          </h2>
          <p className="bt" style={{ marginBottom: 32 }}>
            We&apos;re confident in our approach — and we back that up with a genuine commitment to your experience.
            <br /><br />
            <strong>If you&apos;re not satisfied with your initial consultation, contact us and we&apos;ll work to make it right.</strong>{" "}
            We take every concern seriously and will discuss what options are appropriate for your situation.
            <br /><br />
            We want every athlete who walks through our door to feel the difference from the first appointment.
            That&apos;s not a marketing line — it&apos;s how we&apos;ve operated since 2017.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => typeof (window as any).openModal === "function" && (window as any).openModal()}
          >
            Book my assessment <span className="arr">→</span>
          </button>
        </div>
      </div>

      <Solution />
      <FAQ />
      <CTA />

      {/* Modals */}
      <BookingModal />
      <InjuryQuiz />
      <StickyBookBtn />
    </>
  );
}
