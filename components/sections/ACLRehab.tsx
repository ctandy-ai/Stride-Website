"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ACLRehab() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const openModal = () => {
    if (typeof (window as any).openModal === "function") (window as any).openModal();
  };

  const cards = [
    { n: "01", title: "Phase-by-phase milestones — no guessing", body: "Every phase has objective criteria. You don't move forward until you've cleared the gate. No calendar-based guesswork." },
    { n: "02", title: "Objective movement testing at each gate", body: "Single-leg hop testing, force plate data, movement symmetry scores. You see the numbers. You know where you stand." },
    { n: "03", title: "Developed by our director", body: "Prepared to Play was developed by Chris Tandy — 11 years embedded at Melbourne Storm NRL. The same methodology that returned elite athletes now drives the program." },
  ];

  return (
    <div
      ref={ref}
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
        <div className="ey ey-blue">ACL Specialists</div>
        <h2 className="sh sh-navy" style={{ marginBottom: 24 }}>
          Prepared to Play<br /><span className="orange">ACL Program.</span>
        </h2>
        <p className="bt" style={{ marginBottom: 20 }}>
          ACL rehabilitation is the most complex, highest-stakes injury in sport. Done without objective clearance testing, re-injury risk is significant. Done right — with structured, gate-by-gate testing — athletes return with data to prove they&apos;re ready.
        </p>
        <p className="bt" style={{ marginBottom: 28 }}>
          Our ACL pathway, Prepared to Play, was developed by our director Chris Tandy — AI-powered movement profiling to build a personalised, evidence-based pathway from surgery to full return-to-play clearance.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15 + 0.2, duration: 0.5 }}
              style={{
                display: "flex", gap: 20, padding: 20,
                background: "#fff", borderRadius: 12, border: "1px solid var(--stone)",
              }}
            >
              <div style={{ fontFamily: "var(--font-dm-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", color: "var(--blue)", flex: "0 0 28px", paddingTop: 4 }}>
                {card.n}
              </div>
              <div>
                <h4 style={{ fontWeight: 700, color: "var(--navy)", marginBottom: 6, fontSize: "1rem" }}>{card.title}</h4>
                <p style={{ color: "#4A6070", lineHeight: 1.7, fontSize: "0.92rem" }}>{card.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <button className="btn btn-primary" onClick={openModal}>
          Ask about ACL rehab <span className="arr">→</span>
        </button>
      </div>

      {/* Standalone video card — right */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{ position: "sticky", top: 100 }}
      >
        <video
          autoPlay muted loop playsInline
          style={{ width: "100%", borderRadius: 16, objectFit: "cover", display: "block" }}
        >
          <source src="/acl-hop-test.mp4" type="video/mp4" />
        </video>
        <div style={{ marginTop: 16, padding: "16px 20px", background: "#fff", border: "1px solid var(--stone)", borderRadius: 12 }}>
          <div style={{ fontFamily: "var(--font-dm-mono)", fontSize: "0.6rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--blue)", marginBottom: 4 }}>
            Single-leg hop testing
          </div>
          <p style={{ color: "#4A6070", fontSize: "0.84rem", lineHeight: 1.6, margin: 0 }}>
            Objective return-to-sport clearance. Distance, symmetry, and load measured against sport-specific benchmarks — not a calendar date.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
