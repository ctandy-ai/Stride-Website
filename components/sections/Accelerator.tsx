"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Accelerator() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const openModal = () => {
    if (typeof (window as any).openModal === "function") (window as any).openModal();
  };

  const inclusions = [
    {
      title: "Weekly 1:1 Physiotherapy",
      sub: "Full session + program review every week — not a 15-min check-in",
    },
    {
      title: "Sport-Specific S&C Program",
      sub: "Built for your sport, your position, your training demands",
    },
    {
      title: "Physio Accountability & Direct Communication",
      sub: "Regular check-ins, messaging access and program updates — your physio stays across your week, not just your appointment",
    },
    {
      title: "Return-to-Sport Clearance Testing",
      sub: "Objective confirmation — not a calendar date or gut feel",
    },
    {
      title: "Gym & Coach Liaison Access",
      sub: "Access to a gym and program coaching when you need it — so you can exercise and progress between appointments",
    },
    {
      title: "TeamBuildr Access",
      sub: "Personalised training programs — exercise prescription, milestone tracking & progress visibility",
      featured: true,
    },
  ];

  const steps = [
    { n: "01", action: "Assess", desc: "Full athlete profile, injury history & sport demands" },
    { n: "02", action: "Plan", desc: "Written program, milestones & target return date" },
    { n: "03", action: "Execute", desc: "Weekly physio + S&C, updated every session" },
    { n: "04", action: "Clear", desc: "Return confirmed by objective sport-specific testing" },
  ];

  return (
    <div
      ref={ref}
      id="program"
      style={{ background: "var(--navy)", padding: "96px var(--px)" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 64, maxWidth: 680 }}
        >
          <div className="ey ey-blue">The solution</div>
          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(3.5rem, 7vw, 6rem)",
              lineHeight: 0.9,
              letterSpacing: "0.02em",
              color: "#fff",
              marginBottom: 20,
            }}
          >
            The Rehab<br /><span className="orange">Accelerator.</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "1.1rem", lineHeight: 1.8 }}>
            A unique sports injury solution for Melbourne&apos;s competitive athletes — team sport <em>and</em> combat.{" "}
            <strong style={{ color: "#fff" }}>Physio, strength & conditioning, and movement coaching — integrated under one roof, from one plan.</strong>{" "}
            Every athlete leaves their first appointment with a written week-by-week program and a target return date.
          </p>
        </motion.div>

        {/* Cols */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginBottom: 48 }}>
          {/* Left: Inclusions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
                marginBottom: 20,
              }}
            >
              What&apos;s included in every program
            </div>
            {inclusions.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 + 0.3, duration: 0.4 }}
                style={{
                  display: "flex",
                  gap: 14,
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  ...(item.featured ? { borderRadius: 8, padding: "14px", margin: "4px 0", background: "rgba(27,144,245,0.1)", border: "1px solid rgba(27,144,245,0.25)" } : {}),
                }}
              >
                <div style={{ color: "var(--blue)", fontWeight: 700, fontSize: "1rem", flexShrink: 0 }}>✓</div>
                <div>
                  <div style={{ color: "#fff", fontWeight: 600, fontSize: "0.95rem", marginBottom: 3 }}>{item.title}</div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.82rem", lineHeight: 1.6 }}>{item.sub}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Commitment + process */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 16,
                padding: 28,
                marginBottom: 24,
              }}
            >
              <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>
                Our commitment at every first appointment
              </div>
              <p style={{ color: "#fff", lineHeight: 1.7, fontStyle: "italic", fontSize: "1.05rem" }}>
                You will leave with a written, week-by-week plan and a target return timeframe —
                based on your injury, your sport, and your objective assessment results. Not a guess.
              </p>
            </div>

            {/* Steps */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
              {steps.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 + 0.4, duration: 0.4 }}
                  style={{ display: "flex", gap: 16, alignItems: "flex-start" }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: "var(--blue)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontFamily: "var(--font-dm-mono)",
                      fontSize: "0.72rem",
                      flexShrink: 0,
                    }}
                  >
                    {s.n}
                  </div>
                  <div style={{ paddingTop: 4 }}>
                    <strong style={{ color: "#fff" }}>{s.action}</strong>
                    <span style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem" }}> — {s.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* TeamBuildr */}
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 12,
                padding: 20,
              }}
            >
              <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>
                Powered by
              </div>
              <Image
                src="/teambuildr-logo.jpg"
                alt="TeamBuildr"
                width={100}
                height={32}
                style={{ height: 32, width: "auto", borderRadius: 4, marginBottom: 10 }}
              />
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem", lineHeight: 1.6 }}>
                Individualised S&C programs built and tracked inside TeamBuildr — exercise prescription, load tracking, and live milestone progress updated every session.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Price strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
            justifyContent: "center",
            background: "rgba(27,144,245,0.12)",
            border: "1px solid rgba(27,144,245,0.3)",
            borderRadius: 12,
            padding: "24px 32px",
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem" }}>From</span>
          <span
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "3rem",
              color: "#fff",
              lineHeight: 1,
              letterSpacing: "0.02em",
            }}
          >
            $185
          </span>
          <span style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem" }}>/ week &nbsp;·&nbsp; all-inclusive</span>
          <button className="btn btn-primary" onClick={openModal} style={{ marginLeft: "auto" }}>
            Book my assessment <span className="arr">→</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
