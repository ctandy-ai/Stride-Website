"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function CuriosityHook() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      style={{
        background: "var(--off)",
        padding: "96px var(--px)",
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
        }}
        className="section-grid"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="ey ey-blue" style={{ marginBottom: 16 }}>Testing & measurement</div>
          <h2 className="sh sh-navy" style={{ marginBottom: 20 }}>
            Do you know<br />
            <span className="orange">your numbers?</span>
          </h2>
          <p className="bt" style={{ marginBottom: 24 }}>
            Your left hamstring against your right. How much force you produce in the first 200 milliseconds of a jump. How your landing changes when you&apos;re tired. Most athletes have never measured these. They&apos;re often where an injury started, and they&apos;re what tells us when you&apos;re ready to go back.
          </p>
          <Link
            href="/performance-programs#testing"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              color: "var(--blue)",
              fontWeight: 700,
              textDecoration: "none",
              fontSize: "0.95rem",
            }}
          >
            See what we measure →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
          }}
        >
          {[
            { n: "L vs R", label: "Leg strength comparison" },
            { n: "200ms", label: "Force production window" },
            { n: "Phase-gated", label: "Return-to-sport testing" },
            { n: "Written", label: "Plan from session two" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.3, duration: 0.4 }}
              style={{
                background: "#fff",
                border: "1px solid var(--stone)",
                borderTop: "3px solid var(--blue)",
                borderRadius: 10,
                padding: "20px 18px",
              }}
            >
              <div style={{ fontFamily: "var(--font-bebas)", fontSize: "1.8rem", color: "var(--navy)", lineHeight: 1, marginBottom: 6 }}>
                {stat.n}
              </div>
              <div style={{ color: "var(--muted)", fontSize: "0.78rem", lineHeight: 1.4 }}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
