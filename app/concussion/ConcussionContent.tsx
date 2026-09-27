"use client";

import { useState } from "react";
import type React from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// ─── Service section (public-facing) ────────────────────────────────────────

const serviceCards = [
  {
    n: "01",
    title: "Same-day diagnosis and plan",
    body: "You leave your first appointment with a written graded return-to-sport protocol — not a 'wait and see' approach. We assess on the day and map the path back.",
  },
  {
    n: "02",
    title: "Graded return-to-sport protocol",
    body: "Concussion return-to-sport is a stepwise process. We manage each stage — rest, aerobic exercise, sport-specific training, non-contact drills, full contact — with objective criteria at every gate.",
  },
  {
    n: "03",
    title: "Clearance that holds up",
    body: "Final medical clearance to return to competitive contact sport requires a registered medical practitioner. We coordinate that process — so you're cleared correctly, not just symptom-free.",
  },
  {
    n: "04",
    title: "Red flag monitoring throughout",
    body: "We educate athletes and families on warning signs throughout recovery. Worsening headache, repeated vomiting, confusion, or a seizure — we make sure everyone knows when to act.",
  },
];

function ServiceCard({
  card,
  i,
  inView,
}: {
  card: (typeof serviceCards)[0];
  i: number;
  inView: boolean;
}) {
  return (
    <motion.div
      key={i}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: i * 0.12 + 0.2, duration: 0.5 }}
      style={{
        display: "flex",
        gap: 20,
        padding: 20,
        background: "#fff",
        borderRadius: 12,
        border: "1px solid var(--stone)",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-dm-mono)",
          fontSize: "0.65rem",
          letterSpacing: "0.1em",
          color: "var(--blue)",
          flex: "0 0 28px",
          paddingTop: 4,
        }}
      >
        {card.n}
      </div>
      <div>
        <h4
          style={{
            fontWeight: 700,
            color: "var(--navy)",
            marginBottom: 6,
            fontSize: "1rem",
          }}
        >
          {card.title}
        </h4>
        <p
          style={{ color: "#4A6070", lineHeight: 1.7, fontSize: "0.92rem" }}
        >
          {card.body}
        </p>
      </div>
    </motion.div>
  );
}

// ─── Clinician tool ──────────────────────────────────────────────────────────

type FormState = {
  athleteName: string;
  dateOfInjury: string;
  nextAppointment: string;
  clinician: string;
  athleteEmail: string;
};

const field = (
  label: string,
  key: keyof FormState,
  form: FormState,
  set: React.Dispatch<React.SetStateAction<FormState>>,
  placeholder = "",
  type = "text"
) => (
  <div key={key}>
    <label
      style={{
        display: "block",
        fontSize: "0.75rem",
        color: "rgba(255,255,255,0.45)",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        marginBottom: 6,
      }}
    >
      {label}
    </label>
    <input
      type={type}
      value={form[key]}
      onChange={(e) => set({ ...form, [key]: e.target.value })}
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

function ClinicianTool() {
  const [form, setForm] = useState<FormState>({
    athleteName: "",
    dateOfInjury: "",
    nextAppointment: "",
    clinician: "",
    athleteEmail: "",
  });

  const hasName = form.athleteName.trim().length > 0;

  const guideParams = () =>
    new URLSearchParams({
      name: form.athleteName,
      injury: form.dateOfInjury,
      appt: form.nextAppointment,
      clinician: form.clinician,
    }).toString();

  const diaryParams = () =>
    new URLSearchParams({
      name: form.athleteName,
      injury: form.dateOfInjury,
    }).toString();

  const openGuide = () =>
    window.open(`/concussion/guide?${guideParams()}`, "_blank");
  const openDiary = () =>
    window.open(`/concussion/diary?${diaryParams()}`, "_blank");

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

    window.location.href = `mailto:${encodeURIComponent(
      form.athleteEmail
    )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div
      style={{
        background: "var(--navy)",
        padding: "80px var(--px)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <div className="ey ey-blue" style={{ marginBottom: 12 }}>
          Clinician Tool · Stride Sports Physio
        </div>
        <h2
          className="sh sh-white"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            marginBottom: 8,
          }}
        >
          Concussion Assessment
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.45)",
            fontSize: "0.88rem",
            marginBottom: 40,
            lineHeight: 1.6,
          }}
        >
          Fill in the athlete&apos;s details, then open the guide or diary —
          they&apos;ll be pre-populated and ready to print or send.
        </p>

        {/* Form */}
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.09)",
            borderRadius: 16,
            padding: "32px",
            marginBottom: 32,
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "1.4rem",
              letterSpacing: "0.04em",
              color: "#fff",
              marginBottom: 4,
            }}
          >
            Athlete Details
          </h3>
          {field("Athlete name", "athleteName", form, setForm, "e.g. Jordan Smith")}
          {field(
            "Date of injury (Day 0)",
            "dateOfInjury",
            form,
            setForm,
            "e.g. 17 Sep 2026"
          )}
          {field(
            "Next appointment",
            "nextAppointment",
            form,
            setForm,
            "e.g. 19 Sep 2026, 9:00am"
          )}
          {field(
            "Stride clinician",
            "clinician",
            form,
            setForm,
            "e.g. Jordan"
          )}
          {field(
            "Athlete email (for sending)",
            "athleteEmail",
            form,
            setForm,
            "athlete@email.com",
            "email"
          )}
        </div>

        {/* Actions */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
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
            <span style={{ opacity: 0.7, fontSize: "0.8rem" }}>
              Opens in new tab · print / save PDF
            </span>
          </button>

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
            <span style={{ opacity: 0.7, fontSize: "0.8rem" }}>
              Opens in new tab · print / save PDF
            </span>
          </button>

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
              {form.athleteEmail
                ? `Draft email to ${form.athleteEmail}`
                : "Enter athlete email above"}
            </span>
          </button>
        </div>

        {/* Emergency callout */}
        <div
          style={{
            background: "rgba(220,38,38,0.08)",
            border: "1px solid rgba(220,38,38,0.25)",
            borderRadius: 10,
            padding: "16px 20px",
            marginTop: 32,
          }}
        >
          <p
            style={{
              color: "#f87171",
              fontSize: "0.82rem",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            <strong>Red flags:</strong> Repeated vomiting · headache that keeps
            building · increasing confusion · weakness · seizure · fluid from
            ear or nose → nearest ED or <strong>000</strong>
          </p>
        </div>

        {/* Footer note */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 20,
            marginTop: 40,
          }}
        >
          <p
            style={{
              fontSize: "0.72rem",
              color: "rgba(255,255,255,0.22)",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Clinician-facing tool. These resources provide acute management
            support only. Final medical clearance to return to competitive
            contact sport must be obtained from a registered medical practitioner
            (GP or Sports Physician).
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Main export ─────────────────────────────────────────────────────────────

export default function ConcussionContent() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const openModal = () => {
    if (typeof (window as any).openModal === "function")
      (window as any).openModal();
  };

  return (
    <>
      {/* ── Service section ──────────────────────────────────── */}
      <div
        ref={ref}
        className="section-grid"
        style={{
          background: "var(--off)",
          padding: "96px var(--px)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          maxWidth: 1360,
          margin: "0 auto",
          alignItems: "start",
        }}
      >
        {/* Copy — left */}
        <div>
          <div className="ey ey-blue">Concussion Specialists</div>
          <h2 className="sh sh-navy" style={{ marginBottom: 24 }}>
            Not just rest.<br />
            <span className="orange">A return plan.</span>
          </h2>
          <p className="bt" style={{ marginBottom: 20 }}>
            Sports concussion is one of the most mismanaged injuries in community sport. "Just rest" is not a protocol — it's a gap. Athletes left without a structured return pathway miss weeks they didn't need to, or worse, return too early.
          </p>
          <p className="bt" style={{ marginBottom: 28 }}>
            Stride manages concussion from the moment of injury through to full return-to-contact clearance. Written plan, graded progression, objective criteria at every stage.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              marginBottom: 32,
            }}
          >
            {serviceCards.map((card, i) => (
              <ServiceCard key={i} card={card} i={i} inView={inView} />
            ))}
          </div>

          <button className="btn btn-primary" onClick={openModal}>
            Book a concussion assessment <span className="arr">→</span>
          </button>
        </div>

        {/* Info panel — right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{ position: "sticky", top: 100 }}
        >
          {/* What to expect */}
          <div
            style={{
              background: "var(--navy)",
              borderRadius: 16,
              padding: "32px",
              marginBottom: 16,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-dm-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--blue)",
                marginBottom: 16,
              }}
            >
              Graded Return-to-Sport — 6 Stages
            </div>
            {[
              { n: "1", label: "Symptom-limited activity", sub: "Daily activities that don't provoke symptoms" },
              { n: "2", label: "Light aerobic exercise", sub: "Walking, swimming — no resistance or weight training" },
              { n: "3", label: "Sport-specific exercise", sub: "Running drills, skating — no head-impact activities" },
              { n: "4", label: "Non-contact training", sub: "Progressive movement and coordination drills" },
              { n: "5", label: "Full contact practice", sub: "Medical clearance required — participation restored" },
              { n: "6", label: "Return to competition", sub: "Objective clearance, symptom-free, medically cleared" },
            ].map((step, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 14,
                  paddingBottom: i < 5 ? 14 : 0,
                  marginBottom: i < 5 ? 14 : 0,
                  borderBottom: i < 5 ? "1px solid rgba(255,255,255,0.06)" : "none",
                }}
              >
                <div
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    background: "var(--blue)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "#fff",
                    marginTop: 1,
                  }}
                >
                  {step.n}
                </div>
                <div>
                  <div
                    style={{
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "0.88rem",
                      marginBottom: 2,
                    }}
                  >
                    {step.label}
                  </div>
                  <div
                    style={{
                      color: "rgba(255,255,255,0.45)",
                      fontSize: "0.78rem",
                      lineHeight: 1.5,
                    }}
                  >
                    {step.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Emergency card */}
          <div
            style={{
              background: "rgba(220,38,38,0.06)",
              border: "1px solid rgba(220,38,38,0.22)",
              borderRadius: 12,
              padding: "18px 22px",
            }}
          >
            <div
              style={{
                color: "#f87171",
                fontWeight: 700,
                fontSize: "0.82rem",
                marginBottom: 8,
              }}
            >
              ⚠️ Red flag symptoms — call 000 or go to ED
            </div>
            <ul
              style={{
                color: "rgba(248,113,113,0.8)",
                fontSize: "0.78rem",
                lineHeight: 1.65,
                margin: 0,
                paddingLeft: 16,
              }}
            >
              {[
                "Repeated vomiting",
                "Headache that keeps building in intensity",
                "Increasing confusion or unusual behaviour",
                "Seizure or convulsion",
                "Weakness, tingling, or burning in limbs",
                "Fluid from ear or nose",
              ].map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* ── Clinician tool (for staff use) ───────────────────── */}
      <ClinicianTool />
    </>
  );
}
