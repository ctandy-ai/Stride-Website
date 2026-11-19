"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function WhereAreYouAt() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const openModal = () => {
    if (typeof (window as any).openModal === "function") (window as any).openModal();
  };
  const openQuizModal = () => {
    if (typeof (window as any).openQuizModal === "function") (window as any).openQuizModal();
  };

  return (
    <div
      ref={ref}
      style={{
        background: "#F5F6F8",
        padding: "72px var(--px)",
        borderBottom: "1px solid #E4E7EC",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 36 }}
        >
          <div
            style={{
              fontFamily: "var(--font-dm-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--blue)",
              marginBottom: 10,
            }}
          >
            Start here
          </div>
          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              lineHeight: 0.9,
              letterSpacing: "0.02em",
              color: "var(--navy)",
            }}
          >
            Where are you at?
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="wyaa-grid">
          {/* Card 1 — Injured */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            style={{
              background: "#fff",
              border: "1px solid #E4E7EC",
              borderRadius: 14,
              padding: "28px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
            className="wyaa-card wyaa-card-injured"
          >
            <div style={{ color: "var(--muted)", fontSize: "0.78rem", fontStyle: "italic" }}>
              &ldquo;I&apos;m hurt and want answers.&rdquo;
            </div>
            <h3 style={{ fontFamily: "var(--font-bebas)", fontSize: "1.8rem", color: "var(--navy)", lineHeight: 1, letterSpacing: "0.02em" }}>
              I&apos;ve got an injury
            </h3>
            <p style={{ color: "#4A6070", fontSize: "0.9rem", lineHeight: 1.65, margin: 0, flexGrow: 1 }}>
              Find out what&apos;s wrong and what&apos;s been causing it, and leave with a written plan.
            </p>
            <button
              className="btn btn-primary"
              onClick={openModal}
              style={{ alignSelf: "flex-start", padding: "14px 24px", fontSize: "0.88rem" }}
            >
              Book my assessment — $145 →
            </button>
          </motion.div>

          {/* Card 2 — Self-check (HIGHLIGHTED, mobile-first) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{
              background: "var(--navy)",
              border: "2px solid #2DD4BF",
              borderRadius: 14,
              padding: "28px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              position: "relative",
            }}
            className="wyaa-card wyaa-card-selfcheck"
          >
            {/* FREE pill */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span
                style={{
                  background: "#2DD4BF",
                  color: "var(--navy)",
                  fontSize: "0.65rem",
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "4px 10px",
                  borderRadius: 20,
                  display: "inline-block",
                }}
              >
                Free · 2 min
              </span>
            </div>
            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.78rem", fontStyle: "italic" }}>
              &ldquo;Not sure if it&apos;s serious.&rdquo;
            </div>
            <h3 style={{ fontFamily: "var(--font-bebas)", fontSize: "1.8rem", color: "#fff", lineHeight: 1, letterSpacing: "0.02em" }}>
              Take the injury self-check
            </h3>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", lineHeight: 1.65, margin: 0, flexGrow: 1 }}>
              Six quick questions about your injury and your sport. Get a guide to what it might be, whether it&apos;s worth getting checked, and what to do in the meantime.
            </p>
            <button
              onClick={openQuizModal}
              style={{
                background: "#2DD4BF",
                color: "var(--navy)",
                border: "none",
                padding: "14px 20px",
                borderRadius: 8,
                fontWeight: 700,
                fontSize: "0.88rem",
                cursor: "pointer",
                letterSpacing: "0.03em",
                textTransform: "uppercase",
                alignSelf: "flex-start",
              }}
            >
              Take the free 2-min self-check →
            </button>
            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.72rem", margin: 0 }}>
              General guidance, not a diagnosis.
            </p>
          </motion.div>

          {/* Card 3 — Performance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{
              background: "#fff",
              border: "1px solid #E4E7EC",
              borderRadius: 14,
              padding: "28px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
            className="wyaa-card wyaa-card-perf"
          >
            <div style={{ color: "var(--muted)", fontSize: "0.78rem", fontStyle: "italic" }}>
              &ldquo;Not injured. I want an edge.&rdquo;
            </div>
            <h3 style={{ fontFamily: "var(--font-bebas)", fontSize: "1.8rem", color: "var(--navy)", lineHeight: 1, letterSpacing: "0.02em" }}>
              Test and train
            </h3>
            <p style={{ color: "#4A6070", fontSize: "0.9rem", lineHeight: 1.65, margin: 0, flexGrow: 1 }}>
              See how each leg compares on force plates, then train what the numbers show.
            </p>
            <Link
              href="/performance-programs"
              style={{
                background: "var(--navy)",
                color: "#fff",
                border: "none",
                padding: "14px 24px",
                borderRadius: 8,
                fontWeight: 700,
                fontSize: "0.88rem",
                textDecoration: "none",
                letterSpacing: "0.03em",
                textTransform: "uppercase",
                alignSelf: "flex-start",
                display: "inline-block",
              }}
            >
              See performance programs →
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Responsive CSS is in globals.css — .wyaa-grid, .wyaa-card-selfcheck */}
    </div>
  );
}
