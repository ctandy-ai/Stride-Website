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
      <div style={{ maxWidth: 820, margin: "0 auto" }}>

        {/* Head */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 48 }}
        >
          <div className="ey ey-blue" style={{ marginBottom: 16 }}>Pricing</div>
          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: 0.9,
              letterSpacing: "0.02em",
              color: "#fff",
              marginBottom: 20,
            }}
          >
            What it costs.<br /><span className="orange">All of it.</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem", lineHeight: 1.75, maxWidth: 540 }}>
            Most clinics don&apos;t show prices. We do, because not knowing what it&apos;ll cost is one more thing you shouldn&apos;t have to guess.
          </p>
        </motion.div>

        {/* Pricing items */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 32 }}>

          {/* Initial Assessment */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.5 }}
            style={{
              background: "rgba(27,144,245,0.1)",
              border: "2px solid rgba(27,144,245,0.4)",
              borderRadius: 14,
              padding: "28px 32px",
              display: "flex",
              gap: 32,
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: "0 0 auto" }}>
              <span style={{ fontFamily: "var(--font-bebas)", fontSize: "3rem", color: "#fff", lineHeight: 1, display: "block" }}>$145</span>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}>one-off</span>
            </div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <div
                style={{
                  display: "inline-block",
                  background: "var(--blue)",
                  color: "#fff",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "3px 10px",
                  borderRadius: 20,
                  marginBottom: 10,
                }}
              >
                Start here
              </div>
              <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem", marginBottom: 8 }}>Initial Assessment</h3>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
                Two sessions. Diagnosis, testing and a written week-by-week plan. Private health claimable on the spot (HICAPS).
              </p>
            </div>
            <div style={{ flex: "0 0 auto", alignSelf: "center" }}>
              <button className="btn btn-primary" onClick={openModal} style={{ whiteSpace: "nowrap" }}>
                Book my assessment <span className="arr">→</span>
              </button>
            </div>
          </motion.div>

          {/* Return to Perform */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.5 }}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 14,
              padding: "28px 32px",
              display: "flex",
              gap: 32,
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: "0 0 auto" }}>
              <span style={{ fontFamily: "var(--font-bebas)", fontSize: "3rem", color: "#fff", lineHeight: 1, display: "block" }}>$185</span>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}>per week</span>
            </div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <div
                style={{
                  display: "inline-block",
                  background: "rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "3px 10px",
                  borderRadius: 20,
                  marginBottom: 10,
                }}
              >
                All-inclusive program
              </div>
              <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem", marginBottom: 8 }}>Return to Perform</h3>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
                Weekly 1:1 physio, sport-specific S&C, gym access, direct physio access between sessions and return-to-sport testing. Start with 6 weeks, then week by week.
              </p>
            </div>
          </motion.div>

          {/* Pay per visit */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.5 }}
            style={{
              padding: "16px 32px",
              borderLeft: "3px solid rgba(255,255,255,0.12)",
            }}
          >
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>
              <strong style={{ color: "rgba(255,255,255,0.75)" }}>Prefer to pay per visit?</strong>{" "}
              Consultations from $145.
            </p>
          </motion.div>
        </div>

        {/* Small print + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.78rem", marginBottom: 24 }}>
            Private health rebates depend on your fund and level of cover.
          </p>
          <button className="btn btn-primary" onClick={openModal}>
            Book my assessment <span className="arr">→</span>
          </button>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.78rem", marginTop: 10, marginBottom: 0 }}>
            No referral needed &nbsp;·&nbsp; Private health claimable &nbsp;·&nbsp; Same-week appointments usually available
          </p>
        </motion.div>

      </div>
    </div>
  );
}
