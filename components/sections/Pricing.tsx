"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const openModal = () => {
    if (typeof (window as any).openModal === "function") (window as any).openModal();
  };

  return (
    <div
      ref={ref}
      id="pricing"
      style={{ background: "var(--navy)", padding: "96px var(--px)" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Head */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="ey ey-white" style={{ justifyContent: "center" }}>Transparent pricing</div>
          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(3rem, 6vw, 5rem)",
              lineHeight: 0.9,
              letterSpacing: "0.02em",
              color: "#fff",
              marginBottom: 16,
            }}
          >
            The fastest way back<br />to sport <span className="orange">starts here.</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
            Start with a $145 Initial Assessment. Your physio builds your plan, presents your program, and you decide your next step — no pressure, no lock-in.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 48 }}>
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            style={{
              background: "rgba(27,144,245,0.1)",
              border: "2px solid rgba(27,144,245,0.4)",
              borderRadius: 16,
              padding: 32,
            }}
          >
            <div
              style={{
                display: "inline-block",
                background: "var(--blue)",
                color: "#fff",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "4px 12px",
                borderRadius: 20,
                marginBottom: 12,
              }}
            >
              Step 1 — Start here
            </div>
            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", marginBottom: 8 }}>45-minute deep dive · written plan included</div>
            <div style={{ color: "#fff", fontSize: "1.2rem", fontWeight: 700, marginBottom: 16 }}>Initial Assessment</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 24 }}>
              <span style={{ fontFamily: "var(--font-bebas)", fontSize: "3.5rem", color: "#fff", lineHeight: 1 }}>$145</span>
              <div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem" }}>one-off</div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem" }}>45 minutes</div>
              </div>
            </div>
            <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
              What you walk away with
            </div>
            <ul style={{ listStyle: "none", marginBottom: 24, display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "Full sports injury assessment",
                "Movement analysis & sport-specific testing",
                "Written injury diagnosis & return plan",
                "Week-by-week program & target return date",
                "Honest pathway recommendation — what you need, nothing you don't",
              ].map((item, i) => (
                <li key={i} style={{ color: "rgba(255,255,255,0.7)", display: "flex", gap: 10, fontSize: "0.9rem" }}>
                  <span style={{ color: "var(--blue)", fontWeight: 700 }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.78rem", marginBottom: 16 }}>
              Private health claimable &nbsp;·&nbsp; HICAPS available &nbsp;·&nbsp; Medicare EPC accepted
            </div>
            <button
              className="btn btn-primary"
              onClick={openModal}
              style={{ width: "100%", justifyContent: "center" }}
            >
              Book my assessment →
            </button>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 16,
              padding: 32,
            }}
          >
            <div
              style={{
                display: "inline-block",
                background: "rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.6)",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "4px 12px",
                borderRadius: 20,
                marginBottom: 12,
              }}
            >
              Step 2 — Your program
            </div>
            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", marginBottom: 8 }}>All-inclusive · unlimited access</div>
            <div style={{ color: "#fff", fontSize: "1.2rem", fontWeight: 700, marginBottom: 16 }}>Rehab Accelerator</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 24 }}>
              <span style={{ fontFamily: "var(--font-bebas)", fontSize: "3.5rem", color: "#fff", lineHeight: 1 }}>$185</span>
              <div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem" }}>per week</div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem" }}>all-inclusive</div>
              </div>
            </div>
            <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
              Everything included — no add-ons, no surprises
            </div>
            <ul style={{ listStyle: "none", marginBottom: 24, display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { item: 'Personal "Athlete Profile" Testing', val: "$441 value" },
                { item: "Weekly 1:1 Physiotherapy Session & Review", val: "$185–220/wk elsewhere" },
                { item: "Individualised S&C Program", val: "$100–150/wk elsewhere" },
                { item: "Gym & coaching access when you need it", val: "$70+/session elsewhere" },
                { item: "Unlimited program revisions — updated every week", val: "" },
                { item: "Return-to-sport testing & clearance", val: "" },
                { item: "Programming platform access throughout", val: "" },
              ].map((row, i) => (
                <li key={i} style={{ display: "flex", gap: 10, fontSize: "0.9rem", alignItems: "flex-start" }}>
                  <span style={{ color: "var(--blue)", fontWeight: 700, flexShrink: 0 }}>✓</span>
                  <span style={{ color: "rgba(255,255,255,0.7)", flex: 1 }}>{row.item}</span>
                  {row.val && (
                    <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.75rem", flexShrink: 0 }}>{row.val}</span>
                  )}
                </li>
              ))}
            </ul>
            <button
              onClick={openModal}
              style={{
                width: "100%",
                justifyContent: "center",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.3)",
                color: "#fff",
                padding: "16px",
                borderRadius: 8,
                fontWeight: 700,
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              Book my assessment →
            </button>
          </motion.div>
        </div>

        {/* Value stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 16,
            padding: 32,
          }}
        >
          <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.8rem", marginBottom: 20 }}>
            What you&apos;d pay per week buying this separately elsewhere
          </div>
          {[
            { label: "Weekly physio session (avg. competitor rate)", cost: "$185–220 / wk" },
            { label: "Individualised S&C program", cost: "$100–150 / wk" },
            { label: "Gym access & coaching sessions", cost: "$70–90 / session" },
            { label: "Written rehab plan & weekly review", cost: "$80–100 / wk" },
            { label: "Return-to-sport testing", cost: "$441 (once)" },
          ].map((row, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                color: "rgba(255,255,255,0.6)",
                fontSize: "0.9rem",
              }}
            >
              <span>{row.label}</span>
              <span style={{ color: "rgba(255,255,255,0.45)" }}>{row.cost}</span>
            </div>
          ))}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "14px 0",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              color: "#fff",
              fontWeight: 700,
            }}
          >
            <span>Total if purchased separately</span>
            <span>$435–560+ / wk</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "14px 0",
              color: "var(--blue)",
              fontWeight: 700,
              fontSize: "1.05rem",
            }}
          >
            <span>Stride Rehab Accelerator — everything above, one weekly fee</span>
            <span style={{ fontFamily: "var(--font-bebas)", fontSize: "1.8rem" }}>$185 / wk</span>
          </div>
          <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem", marginTop: 8, fontStyle: "italic" }}>
            Most athletes who price this out separately tell us they wish they&apos;d started sooner.
          </div>
        </motion.div>
      </div>
    </div>
  );
}
