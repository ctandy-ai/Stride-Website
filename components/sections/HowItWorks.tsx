"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const openModal = () => {
    if (typeof (window as any).openModal === "function") (window as any).openModal();
  };

  const steps = [
    {
      n: "01",
      label: "Book online (2 minutes).",
      body: "Pick a time this week. You'll get a confirmation and a short form about your injury and your sport.",
    },
    {
      n: "02",
      label: "Session 1: what's wrong and what's been causing it (45 min).",
      body: "We find out what's going on, explain it in plain English and start treatment the same day.",
    },
    {
      n: "03",
      label: "Session 2: testing.",
      body: "Strength, movement and sport-specific tests, measured, not eyeballed. You see your numbers.",
    },
    {
      n: "04",
      label: "Your written plan.",
      body: "Phase by phase, with the tests that move you to the next phase and a target return window.",
    },
    {
      n: "05",
      label: "Back to sport when the numbers say so.",
      body: "Return is cleared by testing, not by a date on the calendar.",
    },
  ];

  return (
    <div
      ref={ref}
      id="how-it-works"
      style={{
        background: "var(--navy)",
        padding: "96px var(--px)",
      }}
    >
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 48 }}
        >
          <div className="ey ey-blue" style={{ marginBottom: 16 }}>The process</div>
          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: 0.9,
              letterSpacing: "0.02em",
              color: "#fff",
              marginBottom: 16,
            }}
          >
            What happens<br />
            <span className="orange">after you book.</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem", lineHeight: 1.7 }}>
            No mystery. Here&apos;s the whole path.
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
              style={{
                display: "flex",
                gap: 24,
                padding: "24px 0",
                borderBottom: i < steps.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  color: "var(--blue)",
                  flex: "0 0 32px",
                  paddingTop: 4,
                }}
              >
                {step.n}
              </div>
              <div>
                <h3 style={{ fontWeight: 700, color: "#fff", marginBottom: 6, fontSize: "1rem", lineHeight: 1.4 }}>
                  {step.label}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7, fontSize: "0.92rem", margin: 0 }}>
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          style={{ marginTop: 40 }}
        >
          <button className="btn btn-primary" onClick={openModal}>
            Book my assessment — $145 <span className="arr">→</span>
          </button>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.78rem", marginTop: 10, marginBottom: 0 }}>
            No referral needed &nbsp;·&nbsp; Private health claimable &nbsp;·&nbsp; Same-week appointments usually available
          </p>
        </motion.div>
      </div>
    </div>
  );
}
