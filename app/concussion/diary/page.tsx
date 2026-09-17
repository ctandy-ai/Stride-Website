import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Concussion Symptom Diary — Stride Sports Physio",
  description:
    "Daily concussion symptom tracker for Stride athletes. Record headache, dizziness, brain fog, light sensitivity, sleep, and activity each day.",
};

const DAYS = [
  { label: "Day 0", day: "Sunday" },
  { label: "Day 1", day: "Monday" },
  { label: "Day 2", day: "Tuesday" },
  { label: "Day 3", day: "Wednesday" },
  { label: "Day 4", day: "Thursday" },
  { label: "Day 5", day: "Friday" },
  { label: "Day 6", day: "Saturday" },
];

const SYMPTOMS = [
  "Headache (0–10)",
  "Dizziness",
  "Brain fog",
  "Light sensitivity",
  "Noise sensitivity",
  "Sleep last night",
  "What I did today",
  "What made it worse",
];

export default function ConcussionDiary() {
  return (
    <div style={{ background: "var(--navy)", color: "rgba(255,255,255,0.82)", minHeight: "100vh", paddingTop: 66 }}>
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "64px 24px 80px" }}>

        {/* Back */}
        <Link href="/concussion" style={{ display: "inline-block", marginBottom: 36, fontSize: "0.82rem", color: "rgba(255,255,255,0.40)", textDecoration: "none" }}>
          ← Concussion resources
        </Link>

        {/* Eyebrow + heading */}
        <div className="ey ey-blue" style={{ marginBottom: 12 }}>
          Symptom Tracking · Stride Sports Physio
        </div>
        <h1 className="sh sh-white" style={{ marginBottom: 8, fontSize: "clamp(2.6rem, 6vw, 4.5rem)" }}>
          Concussion Symptom Diary
        </h1>
        <p style={{ color: "rgba(255,255,255,0.40)", fontSize: "0.82rem", marginBottom: 40 }}>
          Fill in each evening. Bring to your next appointment.
        </p>

        {/* Athlete details */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 24, marginBottom: 40 }}>
          {["Athlete", "Date of injury (Day 0)"].map((label) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 10, flex: "1 1 260px" }}>
              <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.82rem", flexShrink: 0 }}>{label}:</span>
              <div style={{ flex: 1, borderBottom: "1px dashed rgba(255,255,255,0.15)", height: 24 }} />
            </div>
          ))}
        </div>

        {/* Print button */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 32 }}>
          <PrintButton />
        </div>

        {/* Diary entries */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {DAYS.map(({ label, day }) => (
            <div key={label} style={{ border: "1px solid rgba(255,255,255,0.09)", borderRadius: 14, overflow: "hidden" }}>
              {/* Day header */}
              <div style={{
                background: "rgba(27,144,245,0.10)",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                padding: "12px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
                <span style={{ fontFamily: "var(--font-bebas)", fontSize: "1.4rem", letterSpacing: "0.04em", color: "#fff" }}>
                  {day}
                </span>
                <span style={{ fontFamily: "var(--font-dm-mono)", fontSize: "0.65rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--blue)" }}>
                  {label}
                </span>
              </div>
              {/* Symptom rows */}
              <div style={{ padding: "20px 24px" }}>
                {SYMPTOMS.map((symptom, i) => (
                  <div key={symptom} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: i < SYMPTOMS.length - 1 ? 12 : 0 }}>
                    <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.82rem", width: 180, flexShrink: 0 }}>{symptom}</span>
                    <div style={{ flex: 1, borderBottom: "1px dashed rgba(255,255,255,0.10)", height: 22 }} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, marginTop: 48 }}>
          <p style={{ fontSize: "0.88rem", color: "#fff", fontWeight: 600, marginBottom: 4 }}>
            Stride Sports Physio &amp; Performance
          </p>
          <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.40)", marginBottom: 16 }}>
            0483 918 427 · info@stridephysiohealth.com.au · stridephysiohealth.com.au
          </p>
          <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.22)", lineHeight: 1.65, fontStyle: "italic", margin: 0 }}>
            Progressing through return-to-sport stages does not constitute competitive clearance. Final clearance must be obtained from a registered medical practitioner (GP or Sports Physician).
          </p>
        </div>

      </div>
    </div>
  );
}
