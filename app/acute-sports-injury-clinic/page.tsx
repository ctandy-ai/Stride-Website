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
      {/* ── Sports Insurance Claim Section ── */}
      <div style={{ background: "var(--navy)", padding: "80px var(--px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="ey ey-blue" style={{ marginBottom: 12 }}>Sports insurance claims</div>
          <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", lineHeight: 0.9, color: "#fff", letterSpacing: "0.02em", marginBottom: 40 }}>
            Submitting your claim.<br /><span className="orange">Have these ready first.</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>

            {/* Checklist */}
            <div>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: 28 }}>
                Two forms are required for your sports insurance claim. Have the following on hand before opening them.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  ["Your details", "Full name, DOB, address, email, phone"],
                  ["Club & sport", "Club name, sport, association (e.g. AFL Victoria)"],
                  ["Injury date", "The date the injury occurred"],
                  ["Bank details", "BSB and account number for reimbursement"],
                  ["Your Stride invoice", "Provided at the clinic or by email"],
                  ["Private health details", "Fund name and membership number (if applicable)"],
                ].map(([label, detail], i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: "0.9rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.5 }}>
                    <span style={{ flexShrink: 0, width: 22, height: 22, background: "var(--blue)", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.72rem", fontWeight: 700, marginTop: 1 }}>✓</span>
                    <div><strong style={{ color: "#fff" }}>{label}</strong> — {detail}</div>
                  </li>
                ))}
              </ul>
              <div style={{ fontSize: "0.84rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.65, padding: "16px 20px", background: "rgba(255,255,255,0.05)", borderLeft: "3px solid var(--blue)", borderRadius: 4 }}>
                The <strong style={{ color: "#fff" }}>Physician Report</strong> is completed and signed by your treating clinician at Stride.
                The <strong style={{ color: "#fff" }}>Club Declaration</strong> is filled in by your club secretary.
                Both must be submitted with your claim to{" "}
                <a href="https://marshaflclaims.com.au" target="_blank" rel="noopener" style={{ color: "var(--blue)", fontWeight: 600 }}>marshaflclaims.com.au</a>.
              </div>
            </div>

            {/* DocHub iframes */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 8, overflow: "hidden" }}>
                <div style={{ padding: "10px 16px", background: "var(--blue)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#fff" }}>
                  Section D — Physician Report
                </div>
                <iframe
                  src="https://dochub.com/m/shared-document/stride-/Dbd3xkWVeWm2O5mR49AYlz/physician-report-template?dt=hFH28oNSmueDefc-Xzah"
                  style={{ width: "100%", height: 500, border: "none", display: "block" }}
                  allow="fullscreen"
                  loading="lazy"
                />
              </div>
              <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 8, overflow: "hidden" }}>
                <div style={{ padding: "10px 16px", background: "rgba(255,255,255,0.15)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#fff" }}>
                  Club Declaration
                </div>
                <iframe
                  src="https://dochub.com/m/shared-document/stride-/2GQ1NXoKy5D4OLLKDkW6bx/club-declaration-template?dt=-v_Z8sdje_3T-uLryB32"
                  style={{ width: "100%", height: 500, border: "none", display: "block" }}
                  allow="fullscreen"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      <CTA />
      <BookingModal />
      <InjuryQuiz />
    </div>
  );
}
