"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import PrintButton from "@/components/PrintButton";

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
  "Sleep last night",
  "What I did",
  "What made it worse",
];

function DiaryContent() {
  const params = useSearchParams();
  const athleteName = params.get("name") || "";
  const dateOfInjury = params.get("injury") || "";

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

        {/* Header */}
        <div className="ey ey-blue" style={{ marginBottom: 12 }}>Stride Sports Physio &amp; Performance</div>
        <h1 className="sh sh-white" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", marginBottom: 4 }}>
          Concussion Symptom Diary
        </h1>
        <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem", marginBottom: 36 }}>
          Fill in each evening. Bring to your next appointment.
        </p>

        {/* Athlete details */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 20, marginBottom: 40, padding: "16px 0", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, flex: "1 1 260px" }}>
            <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.82rem", flexShrink: 0 }}>Athlete:</span>
            {athleteName
              ? <span style={{ color: "#fff", fontSize: "0.9rem" }}>{athleteName}</span>
              : <div style={{ flex: 1, borderBottom: "1px dashed rgba(255,255,255,0.15)", height: 22 }} />
            }
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, flex: "1 1 260px" }}>
            <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.82rem", flexShrink: 0 }}>Date of injury (Day 0):</span>
            {dateOfInjury
              ? <span style={{ color: "#fff", fontSize: "0.9rem" }}>{dateOfInjury}</span>
              : <div style={{ flex: 1, borderBottom: "1px dashed rgba(255,255,255,0.15)", height: 22 }} />
            }
          </div>
        </div>

        {/* Diary entries */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {DAYS.map(({ label, day }) => (
            <div key={label} style={{ border: "1px solid rgba(255,255,255,0.09)", borderRadius: 12, overflow: "hidden" }}>
              <div style={{ background: "rgba(27,144,245,0.10)", borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "10px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "var(--font-bebas)", fontSize: "1.3rem", letterSpacing: "0.04em", color: "#fff" }}>{day}</span>
                <span style={{ fontFamily: "var(--font-dm-mono)", fontSize: "0.65rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--blue)" }}>{label}</span>
              </div>
              <div style={{ padding: "16px 20px" }}>
                {SYMPTOMS.map((symptom, i) => (
                  <div key={symptom} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: i < SYMPTOMS.length - 1 ? 10 : 0 }}>
                    <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem", width: 170, flexShrink: 0 }}>{symptom}</span>
                    <div style={{ flex: 1, borderBottom: "1px dashed rgba(255,255,255,0.10)", height: 20 }} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, marginTop: 40 }}>
          <p style={{ fontSize: "0.88rem", color: "#fff", fontWeight: 600, marginBottom: 4 }}>Stride Sports Physio &amp; Performance</p>
          <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.40)", marginBottom: 12 }}>
            0483 918 427 · info@stridephysiohealth.com.au · stridephysiohealth.com.au
          </p>
          <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.22)", lineHeight: 1.65, fontStyle: "italic", margin: 0 }}>
            Sent from the Stride concussion diary. Progressing through return-to-sport stages does not constitute competitive clearance. Final clearance must be obtained from a registered medical practitioner (GP or Sports Physician).
          </p>
        </div>

      </div>
    </div>
  );
}

export default function ConcussionDiary() {
  return (
    <Suspense fallback={<div style={{ background: "var(--navy)", minHeight: "100vh", paddingTop: 66 }} />}>
      <DiaryContent />
    </Suspense>
  );
}
