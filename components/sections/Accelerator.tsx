"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Accelerator() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const openModal = () => {
    if (typeof (window as any).openModal === "function") (window as any).openModal();
  };

  const stats = [
    { n: "11", unit: "yrs", label: "Melbourne Storm NRL" },
    { n: "400+", unit: "", label: "Athletes through Stride" },
    { n: "6", unit: "", label: "Partner clubs" },
    { n: "48h", unit: "", label: "Avg. time to first plan" },
  ];

  const inclusions = [
    { icon: "🩺", title: "Weekly 1:1 Physiotherapy", sub: "Full session + program review every week — not a 15-min check-in" },
    { icon: "🏋️", title: "Unlimited Gym Access", sub: "Train in our gym as often as you like. Coached small-group sessions included — up to 40 a week." },
    { icon: "🎯", title: "Sport-Specific S&C", sub: "Built for your sport, your position, and your training demands" },
    { icon: "💬", title: "Direct Physio Access", sub: "Messaging, check-ins, and program updates between appointments" },
    { icon: "✅", title: "Return-to-Sport Testing", sub: "Objective clearance — not a calendar date or gut feel" },
    { icon: "📱", title: "Training Platform", sub: "Your program, milestones, and progress — tracked every session" },
  ];

  const steps = [
    { n: "01", label: "Assess", desc: "Full athlete profile, injury history & sport demands" },
    { n: "02", label: "Plan", desc: "Written program, milestones & target return date — day one" },
    { n: "03", label: "Execute", desc: "Weekly physio + S&C, updated every session to your numbers" },
    { n: "04", label: "Clear", desc: "Return confirmed by objective sport-specific testing" },
  ];

  return (
    <div
      ref={ref}
      id="program"
      style={{
        background: "var(--navy)",
        padding: "96px var(--px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background texture — subtle radial glow */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(27,144,245,0.08) 0%, transparent 70%)",
        zIndex: 0,
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* ─── Header ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 56, maxWidth: 720 }}
        >
          <div className="ey ey-blue" style={{ marginBottom: 14 }}>The solution</div>
          <h2 style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(3.8rem, 8vw, 6.5rem)",
            lineHeight: 0.88,
            letterSpacing: "0.02em",
            color: "#fff",
            marginBottom: 20,
          }}>
            The Rehab<br />
            <span className="orange">Accelerator.</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem", lineHeight: 1.85, maxWidth: 600 }}>
            Sports injury rehab, strength & conditioning, and movement coaching — <strong style={{ color: "#fff" }}>integrated under one roof, from one plan.</strong>{" "}
            Every athlete leaves their first appointment with a written week-by-week program and a target return date. Not a rough estimate. A plan.
          </p>
        </motion.div>

        {/* ─── Stats strip ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.5 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 1,
            background: "rgba(255,255,255,0.06)",
            borderRadius: 14,
            overflow: "hidden",
            marginBottom: 64,
          }}
          className="stats-strip"
        >
          {stats.map((s, i) => (
            <div key={i} style={{
              background: "rgba(13,27,42,0.7)",
              padding: "22px 24px",
              textAlign: "center",
            }}>
              <div style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "#fff",
                lineHeight: 1,
                letterSpacing: "0.02em",
              }}>
                {s.n}<span style={{ color: "var(--blue)", fontSize: "0.55em" }}>{s.unit}</span>
              </div>
              <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.09em", marginTop: 5 }}>{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* ─── Step flow ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.55 }}
          style={{ marginBottom: 72 }}
        >
          <div style={{
            fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "rgba(255,255,255,0.35)",
            marginBottom: 28,
          }}>
            How it works — four phases
          </div>

          {/* Step row */}
          <div className="step-flow" style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr auto 1fr auto 1fr",
            alignItems: "start",
            gap: 0,
          }}>
            {steps.map((s, i) => (
              <>
                {/* Step card */}
                <motion.div
                  key={`step-${i}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.45 }}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    borderTop: "3px solid var(--blue)",
                    borderRadius: 12,
                    padding: "22px 20px",
                    minHeight: 160,
                  }}
                >
                  <div style={{
                    fontFamily: "var(--font-dm-mono)",
                    fontSize: "0.68rem",
                    color: "var(--blue)",
                    letterSpacing: "0.12em",
                    marginBottom: 10,
                  }}>{s.n}</div>
                  <div style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "1.6rem",
                    color: "#fff",
                    letterSpacing: "0.04em",
                    lineHeight: 1,
                    marginBottom: 10,
                  }}>{s.label}</div>
                  <div style={{ color: "rgba(255,255,255,0.52)", fontSize: "0.82rem", lineHeight: 1.6 }}>{s.desc}</div>
                </motion.div>

                {/* Arrow connector between steps */}
                {i < steps.length - 1 && (
                  <div key={`arrow-${i}`} style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    padding: "0 8px", paddingTop: 56,
                  }}>
                    <svg width="28" height="16" viewBox="0 0 28 16" fill="none">
                      <path d="M0 8H24M24 8L18 2M24 8L18 14" stroke="rgba(27,144,245,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </>
            ))}
          </div>
        </motion.div>

        {/* ─── What's included ────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.55 }}
          style={{ marginBottom: 64 }}
        >
          <div style={{
            fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "rgba(255,255,255,0.35)",
            marginBottom: 28,
          }}>
            Everything included — every week
          </div>

          <div className="inclusions-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 14,
          }}>
            {inclusions.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.07 + 0.4, duration: 0.4 }}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 12,
                  padding: "20px 18px",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                whileHover={{ borderColor: "rgba(27,144,245,0.35)", backgroundColor: "rgba(27,144,245,0.06)" } as any}
              >
                <div style={{ fontSize: "1.4rem", marginBottom: 10 }}>{item.icon}</div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: "0.92rem", marginBottom: 6, lineHeight: 1.3 }}>{item.title}</div>
                <div style={{ color: "rgba(255,255,255,0.48)", fontSize: "0.8rem", lineHeight: 1.6 }}>{item.sub}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ─── Commitment quote ───────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.55 }}
          style={{
            position: "relative",
            background: "rgba(27,144,245,0.08)",
            border: "1px solid rgba(27,144,245,0.22)",
            borderLeft: "4px solid var(--blue)",
            borderRadius: 14,
            padding: "32px 36px",
            marginBottom: 36,
            overflow: "hidden",
          }}
        >
          <div style={{
            position: "absolute", top: -12, left: 24,
            fontFamily: "Georgia, serif",
            fontSize: "7rem", lineHeight: 1,
            color: "rgba(27,144,245,0.12)",
            userSelect: "none", pointerEvents: "none",
          }}>"</div>
          <div style={{
            fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "var(--blue)",
            marginBottom: 14,
          }}>Our commitment at every first appointment</div>
          <p style={{
            color: "#fff",
            fontSize: "clamp(1.05rem, 2.2vw, 1.25rem)",
            lineHeight: 1.75,
            fontWeight: 500,
            margin: 0,
          }}>
            You will leave with a <strong>written, week-by-week plan</strong> and a <strong>target return timeframe</strong> — based on your injury, your sport, and your objective assessment results.{" "}
            <span style={{ color: "var(--blue)" }}>Not a guess. Not "a few weeks". A plan.</span>
          </p>
        </motion.div>

        {/* ─── Price + CTA ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55, duration: 0.5 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "center",
            gap: 32,
            background: "linear-gradient(135deg, rgba(27,144,245,0.14) 0%, rgba(27,144,245,0.06) 100%)",
            border: "1px solid rgba(27,144,245,0.32)",
            borderRadius: 16,
            padding: "28px 36px",
          }}
          className="price-cta-strip"
        >
          <div>
            <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.10em", marginBottom: 6 }}>
              All-inclusive · min 4 weeks · then 4-week blocks
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
              <span style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(3rem, 6vw, 4.5rem)",
                color: "#fff",
                lineHeight: 1,
                letterSpacing: "0.02em",
              }}>$185</span>
              <span style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.1rem" }}>/&nbsp;week</span>
            </div>
            <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.78rem", marginTop: 4 }}>
              Or from $145 · initial &amp; subsequent consultations
            </div>
          </div>
          <button className="btn btn-primary" onClick={openModal} style={{ whiteSpace: "nowrap" }}>
            Book my assessment <span className="arr">→</span>
          </button>
        </motion.div>

      </div>

      {/* Mobile responsive overrides */}
      <style>{`
        @media (max-width: 900px) {
          .step-flow {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
          .step-flow > div[style*="padding-top: 56px"] {
            display: none !important;
          }
          .inclusions-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .stats-strip {
            grid-template-columns: 1fr 1fr !important;
          }
          .price-cta-strip {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
        @media (max-width: 580px) {
          .inclusions-grid {
            grid-template-columns: 1fr !important;
          }
          .stats-strip {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
