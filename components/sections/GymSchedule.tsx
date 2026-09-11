"use client";
import { useState } from "react";

const CLINIKO_URL = "https://stride-physiotherapy-and-health-group.au1.cliniko.com/bookings?business_id=76801";

const COACH_COLOURS: Record<string, { bg: string; text: string; dot: string }> = {
  Chris:  { bg: "rgba(59,130,246,0.15)",  text: "#93c5fd", dot: "#3b82f6" },
  Tom:    { bg: "rgba(16,185,129,0.15)",  text: "#6ee7b7", dot: "#10b981" },
  Conner: { bg: "rgba(245,158,11,0.15)",  text: "#fcd34d", dot: "#f59e0b" },
};

type Slot = { time: string; coaches: string[] };

const SCHEDULE: Record<string, Slot[]> = {
  Mon: [
    { time: "7:00 am",  coaches: ["Tom"] },
    { time: "8:00 am",  coaches: ["Tom"] },
    { time: "11:00 am", coaches: ["Tom"] },
    { time: "11:30 am", coaches: ["Conner"] },
    { time: "12:00 pm", coaches: ["Tom"] },
    { time: "4:00 pm",  coaches: ["Chris", "Conner"] },
    { time: "5:00 pm",  coaches: ["Chris"] },
    { time: "6:00 pm",  coaches: ["Chris"] },
  ],
  Tue: [
    { time: "7:00 am",  coaches: ["Chris"] },
    { time: "8:00 am",  coaches: ["Chris"] },
    { time: "11:00 am", coaches: ["Chris", "Conner"] },
    { time: "12:00 pm", coaches: ["Chris", "Conner"] },
    { time: "4:00 pm",  coaches: ["Tom"] },
    { time: "5:00 pm",  coaches: ["Tom"] },
    { time: "6:00 pm",  coaches: ["Tom"] },
  ],
  Wed: [
    { time: "11:00 am", coaches: ["Tom"] },
    { time: "11:30 am", coaches: ["Conner"] },
    { time: "12:00 pm", colours: ["Tom"] as unknown as string[], coaches: ["Tom"] },
    { time: "4:00 pm",  coaches: ["Conner"] },
    { time: "5:00 pm",  coaches: ["Conner"] },
    { time: "6:00 pm",  coaches: ["Conner"] },
  ],
  Thu: [
    { time: "7:30 am",  coaches: ["Conner"] },
    { time: "11:00 am", coaches: ["Chris", "Conner"] },
    { time: "12:00 pm", coaches: ["Chris", "Conner"] },
    { time: "4:00 pm",  coaches: ["Tom"] },
    { time: "5:00 pm",  coaches: ["Tom"] },
    { time: "6:00 pm",  coaches: ["Tom"] },
  ],
  Fri: [
    { time: "6:00 am",  coaches: ["Chris"] },
    { time: "7:00 am",  coaches: ["Chris", "Tom"] },
    { time: "8:00 am",  coaches: ["Chris", "Tom"] },
    { time: "11:00 am", coaches: ["Conner"] },
    { time: "12:00 pm", coaches: ["Conner"] },
    { time: "4:00 pm",  coaches: ["Conner"] },
  ],
};

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"] as const;

export default function GymSchedule() {
  const [activeDay, setActiveDay] = useState<string>("Mon");

  return (
    <section style={{ background: "#0b1220", padding: "80px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div className="ey ey-blue" style={{ marginBottom: 10 }}>Rehab Gym Sessions</div>
          <h2 style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)",
            lineHeight: 0.95,
            color: "#fff",
            letterSpacing: "0.02em",
            marginBottom: 14,
          }}>
            Find a session<br />
            <span style={{ color: "var(--blue)" }}>that fits your week.</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.95rem", lineHeight: 1.7, maxWidth: 520 }}>
            Small group sessions — max 4 athletes. 60 minutes. Coached by Chris, Tom, or Conner.
          </p>
        </div>

        {/* Desktop grid — all 5 days */}
        <div className="gym-schedule-desktop" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12, marginBottom: 36 }}>
          {DAYS.map((day) => (
            <div key={day}>
              <div style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "1.1rem",
                letterSpacing: "0.12em",
                color: "rgba(255,255,255,0.35)",
                marginBottom: 10,
                paddingBottom: 8,
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}>
                {day}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {SCHEDULE[day].map((slot, i) => (
                  <SlotCard key={i} slot={slot} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile — day tabs */}
        <div className="gym-schedule-mobile" style={{ marginBottom: 36 }}>
          <div style={{ display: "flex", gap: 6, marginBottom: 20, overflowX: "auto", paddingBottom: 4 }}>
            {DAYS.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                style={{
                  flex: "0 0 auto",
                  padding: "8px 20px",
                  borderRadius: 6,
                  border: "1px solid",
                  borderColor: activeDay === day ? "var(--blue)" : "rgba(255,255,255,0.12)",
                  background: activeDay === day ? "rgba(59,130,246,0.15)" : "transparent",
                  color: activeDay === day ? "#93c5fd" : "rgba(255,255,255,0.45)",
                  fontFamily: "var(--font-bebas)",
                  fontSize: "1rem",
                  letterSpacing: "0.1em",
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
              >
                {day}
              </button>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {SCHEDULE[activeDay].map((slot, i) => (
              <SlotCard key={i} slot={slot} mobile />
            ))}
          </div>
        </div>

        {/* Legend + CTA */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 20, paddingTop: 28, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {Object.entries(COACH_COLOURS).map(([name, c]) => (
              <div key={name} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: c.dot, display: "inline-block" }} />
                <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.82rem" }}>{name}</span>
              </div>
            ))}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.25)" }}>Max 4 athletes · 60 min</span>
            </div>
          </div>
          <a
            href={CLINIKO_URL}
            target="_blank"
            rel="noopener"
            className="btn btn-primary"
            style={{ textDecoration: "none", display: "inline-flex" }}
          >
            Book a session →
          </a>
        </div>
      </div>

      <style>{`
        .gym-schedule-mobile { display: none; }
        @media (max-width: 700px) {
          .gym-schedule-desktop { display: none !important; }
          .gym-schedule-mobile { display: block; }
        }
      `}</style>
    </section>
  );
}

function SlotCard({ slot, mobile }: { slot: Slot; mobile?: boolean }) {
  const multi = slot.coaches.length > 1;
  return (
    <div style={{
      borderRadius: 6,
      padding: mobile ? "10px 14px" : "9px 12px",
      background: multi ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.03)",
      border: `1px solid ${multi ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.06)"}`,
      display: "flex",
      flexDirection: mobile ? "row" : "column",
      alignItems: mobile ? "center" : "flex-start",
      justifyContent: mobile ? "space-between" : "flex-start",
      gap: 6,
    }}>
      <span style={{
        fontSize: mobile ? "0.9rem" : "0.78rem",
        fontWeight: 600,
        color: "rgba(255,255,255,0.6)",
        letterSpacing: "0.02em",
        minWidth: mobile ? 72 : undefined,
      }}>
        {slot.time}
      </span>
      <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: mobile ? "flex-end" : "flex-start" }}>
        {slot.coaches.map((coach) => {
          const c = COACH_COLOURS[coach] ?? { bg: "rgba(255,255,255,0.08)", text: "#fff", dot: "#fff" };
          return (
            <span key={coach} style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              background: c.bg,
              color: c.text,
              borderRadius: 4,
              padding: "2px 8px",
              fontSize: "0.75rem",
              fontWeight: 600,
            }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: c.dot, display: "inline-block", flexShrink: 0 }} />
              {coach}
            </span>
          );
        })}
      </div>
    </div>
  );
}
