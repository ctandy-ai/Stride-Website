"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function SundayClinic() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const openModal = () => {
    if (typeof (window as any).openModal === "function") (window as any).openModal();
  };

  return (
    <section
      ref={ref}
      id="sunday-clinic"
      style={{
        position: "relative",
        minHeight: 600,
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
      }}
    >
      <Image
        src="/hero-asic.jpg"
        alt="Athlete injured on field — Stride Acute Sports Injury Clinic"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(9,20,33,0.95) 0%, rgba(9,20,33,0.7) 50%, rgba(9,20,33,0.3) 100%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={{
          position: "relative",
          zIndex: 5,
          padding: "80px var(--px)",
          maxWidth: 700,
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(27,144,245,0.2)",
            border: "1px solid rgba(27,144,245,0.4)",
            borderRadius: 20,
            padding: "6px 14px",
            marginBottom: 20,
          }}
        >
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--blue)", display: "inline-block", animation: "pulse 2s infinite" }} />
          <span style={{ color: "#68b4ff", fontSize: "0.8rem", fontWeight: 600 }}>
            Now open Sundays · 9am–2pm
          </span>
        </div>

        <div className="ey ey-blue" style={{ marginBottom: 12 }}>Acute Sports Injury Clinic</div>
        <h2
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            lineHeight: 0.9,
            letterSpacing: "0.02em",
            color: "#fff",
            marginBottom: 20,
          }}
        >
          Hurt on the weekend?<br />
          <span className="orange">Don&apos;t wait till Monday.</span>
        </h2>
        <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: 24 }}>
          Our Sunday Acute Sports Injury Clinic is designed for athletes who got hurt over the weekend — and can&apos;t afford to wait days to find out what&apos;s actually wrong.
          Walk in, get assessed, get your plan. No GP referral needed.
        </p>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 32 }}>
          {[
            { num: "$0", label: "Gap for eligible sports injury claims", sub: "Via sports + private health insurance" },
            { num: "Same day", label: "Assessment & diagnosis", sub: "No waiting days for answers" },
            { num: "Sunday 9am–2pm", label: "Moonee Ponds", sub: "Saturday afternoons coming soon" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 12,
                padding: "16px 20px",
              }}
            >
              <div style={{ fontFamily: "var(--font-bebas)", fontSize: "1.8rem", color: "#fff", lineHeight: 1 }}>{stat.num}</div>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.82rem", fontWeight: 600, marginTop: 4 }}>{stat.label}</div>
              <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.72rem", marginTop: 3 }}>{stat.sub}</div>
            </div>
          ))}
        </div>

        <button className="btn btn-primary" onClick={openModal}>
          Book Sunday Assessment <span className="arr">→</span>
        </button>
      </motion.div>
    </section>
  );
}
