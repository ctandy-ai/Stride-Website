import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Concussion Resources — Stride Sports Physio",
  description:
    "Concussion recovery guide and symptom diary for Stride athletes. Acute care instructions and daily tracking tool.",
};

export default function ConcussionHub() {
  return (
    <div style={{ background: "var(--navy)", color: "rgba(255,255,255,0.82)", minHeight: "100vh", paddingTop: 66 }}>
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "64px 24px 80px" }}>

        {/* Eyebrow */}
        <div className="ey ey-blue" style={{ marginBottom: 12 }}>
          Stride Sports Physio &amp; Performance
        </div>

        {/* Heading */}
        <h1 className="sh sh-white" style={{ marginBottom: 16, fontSize: "clamp(2.8rem, 6vw, 5rem)" }}>
          Concussion Resources
        </h1>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: 48, maxWidth: 540 }}>
          Your clinician has shared these resources following your concussion assessment.
          Use the guide for your first 48 hours and fill in your symptom diary each evening.
        </p>

        {/* Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>

          <Link href="/concussion/guide" style={{ textDecoration: "none" }}>
            <div style={{
              background: "rgba(27,144,245,0.10)",
              border: "1px solid rgba(27,144,245,0.28)",
              borderRadius: 16,
              padding: "28px 32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              transition: "border-color 0.2s",
            }}>
              <div>
                <div className="ey ey-blue" style={{ marginBottom: 8 }}>Document 1</div>
                <div className="sh sh-white" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", marginBottom: 8 }}>
                  Acute Recovery &amp; Care Guide
                </div>
                <p style={{ color: "rgba(255,255,255,0.50)", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>
                  Your first 48 hours, the 21-day clock, red flags for emergency, and pain management.
                </p>
              </div>
              <span style={{ color: "var(--blue)", fontSize: "1.6rem", flexShrink: 0 }}>→</span>
            </div>
          </Link>

          <Link href="/concussion/diary" style={{ textDecoration: "none" }}>
            <div style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: 16,
              padding: "28px 32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
            }}>
              <div>
                <div className="ey ey-white" style={{ marginBottom: 8 }}>Document 2</div>
                <div className="sh sh-white" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", marginBottom: 8 }}>
                  Symptom Diary
                </div>
                <p style={{ color: "rgba(255,255,255,0.50)", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>
                  Daily tracking for headache, dizziness, brain fog, sleep, and activity. Bring to your next visit.
                </p>
              </div>
              <span style={{ color: "var(--blue)", fontSize: "1.6rem", flexShrink: 0 }}>→</span>
            </div>
          </Link>

        </div>

        {/* Emergency callout */}
        <div style={{
          background: "rgba(220,38,38,0.10)",
          border: "1px solid rgba(220,38,38,0.30)",
          borderRadius: 12,
          padding: "20px 24px",
          marginBottom: 48,
        }}>
          <p style={{ color: "#f87171", fontWeight: 600, fontSize: "0.9rem", marginBottom: 6 }}>
            ⚠ If symptoms worsen — go to emergency immediately
          </p>
          <p style={{ color: "rgba(248,113,113,0.75)", fontSize: "0.84rem", lineHeight: 1.6, margin: 0 }}>
            Repeated vomiting · headache that keeps building · increasing confusion · weakness · seizure · fluid from ear or nose → nearest ED or call <strong>000</strong>
          </p>
        </div>

        {/* Footer */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24 }}>
          <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.35)", marginBottom: 6 }}>
            Stride Sports Physio &amp; Performance · 0483 918 427 · info@stridephysiohealth.com.au
          </p>
          <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.22)", lineHeight: 1.6, margin: 0 }}>
            These resources provide acute management support only. Final medical clearance to return to competitive contact sport must be obtained from a registered medical practitioner.
          </p>
        </div>

      </div>
    </div>
  );
}
