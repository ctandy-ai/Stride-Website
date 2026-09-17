"use client";
import { useState } from "react";
import type React from "react";
import Link from "next/link";

type FormState = { athleteName: string; dateOfInjury: string; nextAppointment: string; clinician: string; athleteEmail: string };

const field = (
  label: string,
  key: keyof FormState,
  form: FormState,
  set: React.Dispatch<React.SetStateAction<FormState>>,
  placeholder = "",
  type = "text"
) => (
  <div key={key}>
    <label style={{ display: "block", fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>
      {label}
    </label>
    <input
      type={type}
      value={form[key]}
      onChange={e => set({ ...form, [key]: e.target.value })}
      placeholder={placeholder}
      style={{
        width: "100%",
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: 8,
        padding: "10px 14px",
        color: "#fff",
        fontSize: "0.9rem",
        outline: "none",
        boxSizing: "border-box",
      }}
    />
  </div>
);

export default function ConcussionTool() {
  const [form, setForm] = useState<FormState>({
    athleteName: "",
    dateOfInjury: "",
    nextAppointment: "",
    clinician: "",
    athleteEmail: "",
  });

  const hasName = form.athleteName.trim().length > 0;

  const guideParams = () => new URLSearchParams({
    name: form.athleteName,
    injury: form.dateOfInjury,
    appt: form.nextAppointment,
    clinician: form.clinician,
  }).toString();

  const diaryParams = () => new URLSearchParams({
    name: form.athleteName,
    injury: form.dateOfInjury,
  }).toString();

  const openGuide = () => window.open(`/concussion/guide?${guideParams()}`, "_blank");
  const openDiary = () => window.open(`/concussion/diary?${diaryParams()}`, "_blank");

  const sendEmail = () => {
    const base = "https://stridephysiohealth.com.au";
    const guideUrl = `${base}/concussion/guide?${guideParams()}`;
    const diaryUrl = `${base}/concussion/diary?${diaryParams()}`;
    const name = form.athleteName || "there";
    const clinician = form.clinician || "your clinician";
    const appt = form.nextAppointment || "your next appointment";

    const subject = `Your Stride Concussion Recovery Resources`;
    const body =
      `Hi ${name},\n\n` +
      `Following your assessment with ${clinician} at Stride Sports Physio & Performance, please find your concussion recovery resources below.\n\n` +
      `ACUTE RECOVERY & CARE GUIDE\n${guideUrl}\n\n` +
      `SYMPTOM DIARY\n${diaryUrl}\n\n` +
      `Please fill in your symptom diary each evening and bring it to your next appointment on ${appt}.\n\n` +
      `If your symptoms worsen at any time — repeated vomiting, headache that keeps building, increasing confusion, weakness, a seizure, or fluid from the ear or nose — go to your nearest emergency department or call 000.\n\n` +
      `Stride Sports Physio & Performance\n` +
      `0483 918 427 | info@stridephysiohealth.com.au\n` +
      `stridephysiohealth.com.au`;

    window.location.href = `mailto:${encodeURIComponent(form.athleteEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div style={{ background: "var(--navy)", minHeight: "100vh", paddingTop: 66 }}>
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "64px 24px 80px" }}>

        {/* Eyebrow */}
        <div className="ey ey-blue" style={{ marginBottom: 12 }}>
          Clinician Tool · Stride Sports Physio
        </div>
        <h1 className="sh sh-white" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", marginBottom: 8 }}>
          Concussion Assessment
        </h1>
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.88rem", marginBottom: 48, lineHeight: 1.6 }}>
          Fill in the athlete&apos;s details, then open the guide or diary — they&apos;ll be pre-populated and ready to print or send.
        </p>

        {/* Form */}
        <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 16, padding: "32px", marginBottom: 32, display: "flex", flexDirection: "column", gap: 20 }}>
          <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "1.4rem", letterSpacing: "0.04em", color: "#fff", marginBottom: 4 }}>Athlete Details</h2>
          {field("Athlete name", "athleteName", form, setForm, "e.g. Jordan Smith")}
          {field("Date of injury (Day 0)", "dateOfInjury", form, setForm, "e.g. 17 Sep 2026", "text")}
          {field("Next appointment", "nextAppointment", form, setForm, "e.g. 19 Sep 2026, 9:00am")}
          {field("Stride clinician", "clinician", form, setForm, "e.g. Jordan")}
          {field("Athlete email (for sending)", "athleteEmail", form, setForm, "athlete@email.com", "email")}
        </div>

        {/* Actions */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>

          {/* Open Guide */}
          <button
            onClick={openGuide}
            style={{
              background: "var(--blue)",
              color: "#fff",
              border: "none",
              borderRadius: 10,
              padding: "16px 24px",
              fontSize: "0.95rem",
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <span>📋 Open Acute Recovery & Care Guide</span>
            <span style={{ opacity: 0.7, fontSize: "0.8rem" }}>Opens in new tab · print / save PDF</span>
          </button>

          {/* Open Diary */}
          <button
            onClick={openDiary}
            style={{
              background: "rgba(27,144,245,0.12)",
              color: "#fff",
              border: "1px solid rgba(27,144,245,0.30)",
              borderRadius: 10,
              padding: "16px 24px",
              fontSize: "0.95rem",
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <span>📓 Open Symptom Diary</span>
            <span style={{ opacity: 0.7, fontSize: "0.8rem" }}>Opens in new tab · print / save PDF</span>
          </button>

          {/* Send email */}
          <button
            onClick={sendEmail}
            disabled={!hasName && !form.athleteEmail}
            style={{
              background: "rgba(255,255,255,0.06)",
              color: form.athleteEmail ? "#fff" : "rgba(255,255,255,0.35)",
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: 10,
              padding: "16px 24px",
              fontSize: "0.95rem",
              fontWeight: 600,
              cursor: form.athleteEmail ? "pointer" : "default",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <span>✉ Send resources to athlete</span>
            <span style={{ opacity: 0.6, fontSize: "0.8rem" }}>
              {form.athleteEmail ? `Draft email to ${form.athleteEmail}` : "Enter athlete email above"}
            </span>
          </button>

        </div>

        {/* Emergency callout */}
        <div style={{ background: "rgba(220,38,38,0.08)", border: "1px solid rgba(220,38,38,0.25)", borderRadius: 10, padding: "16px 20px", marginTop: 32 }}>
          <p style={{ color: "#f87171", fontSize: "0.82rem", lineHeight: 1.6, margin: 0 }}>
            <strong>Red flags:</strong> Repeated vomiting · headache that keeps building · increasing confusion · weakness · seizure · fluid from ear or nose → nearest ED or <strong>000</strong>
          </p>
        </div>

        {/* Footer */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 20, marginTop: 40 }}>
          <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.22)", lineHeight: 1.6, margin: 0 }}>
            Clinician-facing tool. These resources provide acute management support only. Final medical clearance to return to competitive contact sport must be obtained from a registered medical practitioner (GP or Sports Physician).
          </p>
        </div>

      </div>
    </div>
  );
}
