"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import PrintButton from "@/components/PrintButton";

function GuideContent() {
  const params = useSearchParams();
  const athleteName = params.get("name") || "";
  const dateOfInjury = params.get("injury") || "";
  const nextAppointment = params.get("appt") || "";
  const clinician = params.get("clinician") || "";

  const detailRow = (label: string, value: string) => (
    <div key={label} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
      <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.82rem", width: 200, flexShrink: 0 }}>{label}</span>
      {value
        ? <span style={{ color: "#fff", fontSize: "0.9rem", fontWeight: 500 }}>{value}</span>
        : <div style={{ flex: 1, borderBottom: "1px dashed rgba(255,255,255,0.15)", height: 22 }} />
      }
    </div>
  );

  return (
    <div style={{ background: "var(--navy)", color: "rgba(255,255,255,0.82)", minHeight: "100vh", paddingTop: 66 }}>
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "64px 24px 80px" }}>

        {/* Back + Print — hidden on print */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 36 }} className="no-print">
          <Link href="/concussion" style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.40)", textDecoration: "none" }}>
            ← Concussion tool
          </Link>
          <PrintButton />
        </div>

        {/* Letterhead */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
          <div className="ey ey-blue" style={{ marginBottom: 0 }}>Stride Sports Physio &amp; Performance</div>
        </div>

        <h1 className="sh sh-white" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", marginBottom: 4 }}>
          Acute Recovery &amp; Care Guide
        </h1>
        <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem", marginBottom: 40 }}>
          Concussion management · first 48 hours
        </p>

        {/* Intro */}
        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.95rem", lineHeight: 1.75, marginBottom: 40 }}>
          Hi there, your Acute Recovery &amp; Care Guide is below. It covers your next 48 hours, the 21-day clock, the red flags that mean you go straight to hospital, and what you can take for a headache.
        </p>

        {/* Your details */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "1.5rem", letterSpacing: "0.04em", color: "#fff", marginBottom: 16, paddingBottom: 10, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            Your Details
          </h2>
          {detailRow("Athlete name", athleteName)}
          {detailRow("Date of injury (Day 0)", dateOfInjury)}
          {detailRow("Next appointment", nextAppointment)}
          {detailRow("Stride clinician", clinician)}
        </section>

        {/* Before next visit */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "1.5rem", letterSpacing: "0.04em", color: "#fff", marginBottom: 16, paddingBottom: 10, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            Before Your Next Visit
          </h2>
          {[
            "Rest your body and your brain. No sport, training or gym.",
            "Do not drive until your doctor says you can.",
            "Fill in your symptom diary each evening and bring it with you.",
          ].map(item => (
            <div key={item} style={{ display: "flex", gap: 14, marginBottom: 14, alignItems: "flex-start" }}>
              <span style={{ color: "var(--blue)", flexShrink: 0, marginTop: 2 }}>✓</span>
              <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.95rem", lineHeight: 1.65 }}>{item}</span>
            </div>
          ))}
        </section>

        {/* 21-day clock */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "1.5rem", letterSpacing: "0.04em", color: "#fff", marginBottom: 14, paddingBottom: 10, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            The 21-Day Clock
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.95rem", lineHeight: 1.75 }}>
            The brain needs time to recover. Most concussion symptoms resolve within 21 days, but every person is different. Do not rush back to sport, training, or screen-heavy activity. Your clinician will guide you through the return-to-sport stages only when you are symptom-free at rest.
          </p>
        </section>

        {/* Headache management */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "1.5rem", letterSpacing: "0.04em", color: "#fff", marginBottom: 14, paddingBottom: 10, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            Headache Management
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.95rem", lineHeight: 1.75, marginBottom: 10 }}>
            <strong style={{ color: "#fff" }}>Paracetamol</strong> (e.g. Panadol) at the recommended dose is safe for headache relief.
          </p>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.95rem", lineHeight: 1.75 }}>
            <strong style={{ color: "#fff" }}>Avoid in the first 48 hours:</strong> Anti-inflammatories (ibuprofen, naprogesic), alcohol, and codeine-containing medications — unless directed by your doctor.
          </p>
        </section>

        {/* Red flags */}
        <section style={{ background: "rgba(220,38,38,0.10)", border: "1px solid rgba(220,38,38,0.30)", borderRadius: 14, padding: "24px 28px", marginBottom: 40 }}>
          <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "1.5rem", letterSpacing: "0.04em", color: "#f87171", marginBottom: 12 }}>
            ⚠ Red Flags — Go to Emergency
          </h2>
          <p style={{ color: "rgba(248,113,113,0.80)", fontSize: "0.88rem", lineHeight: 1.65, marginBottom: 14 }}>
            If any of the following occur, go to your nearest emergency department immediately or call <strong>000</strong>:
          </p>
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {[
              "Repeated vomiting",
              "Headache that keeps building and doesn't settle",
              "Increasing confusion or disorientation",
              "Weakness or numbness in arms or legs",
              "A seizure or convulsion",
              "Fluid from the ear or nose",
              "One pupil noticeably larger than the other",
            ].map(flag => (
              <li key={flag} style={{ display: "flex", gap: 10, marginBottom: 8, alignItems: "flex-start" }}>
                <span style={{ color: "#f87171", flexShrink: 0 }}>•</span>
                <span style={{ color: "rgba(248,113,113,0.90)", fontSize: "0.9rem" }}>{flag}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact & disclaimer */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24 }}>
          <p style={{ fontSize: "0.88rem", color: "#fff", fontWeight: 600, marginBottom: 4 }}>Stride Sports Physio &amp; Performance</p>
          <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.40)", marginBottom: 16 }}>
            0483 918 427 · info@stridephysiohealth.com.au · stridephysiohealth.com.au
          </p>
          <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.22)", lineHeight: 1.65, fontStyle: "italic", margin: 0 }}>
            Disclaimer: This document provides acute management support. Final medical clearance to return to competitive contact sport must be obtained from a registered medical practitioner (GP or Sports Physician).
          </p>
        </div>

      </div>
    </div>
  );
}

export default function ConcussionGuide() {
  return (
    <Suspense fallback={<div style={{ background: "var(--navy)", minHeight: "100vh", paddingTop: 66 }} />}>
      <GuideContent />
    </Suspense>
  );
}
