"use client";

import { motion, useInView } from "framer-motion";
import { fireGtag, CONV } from "@/lib/conversions";
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
            fontSize: "clamp(3.5rem, 7vw, 6rem)",
            lineHeight: 0.9,
            letterSpacing: "0.02em",
            color: "#fff",
            marginBottom: 20,
          }}
        >
          Find out what you&apos;re dealing with.
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: 36 }}>
          Two sessions. We find out what&apos;s wrong and what&apos;s been causing it, and you leave with a written plan.{" "}
          <strong style={{ color: "#fff" }}>Same-week appointments are usually available.</strong>
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 10 }}>
          <button className="btn btn-primary" onClick={openModal}>
            Book my assessment — $145 <span className="arr">→</span>
          </button>
          <a
            href="tel:+61483918427"
            className="btn btn-ghost"
            style={{ textDecoration: "none" }}
            onClick={() => fireGtag(CONV.phoneCall)}
          >
            Call 0483 918 427
          </a>
        </div>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.78rem", margin: "0 0 20px" }}>
          No referral needed &nbsp;·&nbsp; Private health claimable &nbsp;·&nbsp; Same-week appointments usually available
        </p>
        <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.82rem" }}>
          Sunday walk-in clinic, 9am–2pm · 13 Puckle St, Moonee Ponds
        </div>
      </motion.div>
    </div>
  );
}
