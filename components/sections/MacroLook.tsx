"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function MacroLook() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const openModal = () => {
    if (typeof (window as any).openModal === "function") (window as any).openModal();
  };

  const lines = [
    { label: "Training and games.", body: "How often, how hard, and what's changed lately." },
    { label: "Gym and running.", body: "What you're doing on top of your sport." },
    { label: "Work, sleep and recovery.", body: "Everything else your body is dealing with." },
  ];

  return (
    <div
      ref={ref}
      style={{
        background: "var(--navy)",
        padding: "96px var(--px)",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="ey ey-blue" style={{ marginBottom: 16 }}>How we work</div>
          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: 0.9,
              letterSpacing: "0.02em",
              color: "#fff",
              marginBottom: 24,
            }}
          >
            We look at more than<br />
            <span className="orange">where it hurts.</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 600, marginBottom: 40 }}>
            First, we ask what a normal week looks like for you. Then we check the sore spot. Often the quickest way to feel better isn&apos;t another exercise. It&apos;s changing what you&apos;re already doing.
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.12 + 0.2, duration: 0.5 }}
              style={{
                display: "flex",
                gap: 20,
                padding: "20px 24px",
                background: "rgba(255,255,255,0.05)",
                borderRadius: 10,
                borderLeft: "3px solid var(--blue)",
              }}
            >
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1rem", lineHeight: 1.65, margin: 0 }}>
                <strong style={{ color: "#fff" }}>{line.label}</strong>{" "}{line.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
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
