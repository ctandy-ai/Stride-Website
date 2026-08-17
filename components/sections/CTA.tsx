"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const openModal = () => {
    if (typeof (window as any).openModal === "function") (window as any).openModal();
  };

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        background: "var(--navy)",
        padding: "96px var(--px)",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Background gradient blob */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(27,144,245,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={{ position: "relative", maxWidth: 700, margin: "0 auto" }}
      >
        <h2
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(4rem, 8vw, 7rem)",
            lineHeight: 0.9,
            letterSpacing: "0.02em",
            color: "#fff",
            marginBottom: 20,
          }}
        >
          Don&apos;t wait.<br /><span className="orange">Get back.</span>
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: 36 }}>
          Your first appointment includes a full injury assessment and your personal return-to-sport roadmap.{" "}
          <strong style={{ color: "#fff" }}>Same-week appointments available.</strong>
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 20 }}>
          <button className="btn btn-primary" onClick={openModal}>
            Book my assessment <span className="arr">→</span>
          </button>
          <a
            href="tel:0483918427"
            className="btn btn-ghost"
            style={{ textDecoration: "none" }}
          >
            Call us: 0483 918 427
          </a>
        </div>
        <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.82rem" }}>
          13 Puckle St, Moonee Ponds · Mon–Fri 7:30am–7:30pm · Sat 7:30am–1pm
        </div>
      </motion.div>
    </div>
  );
}
