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

  const cards = [
    { n: "01", title: "No GP referral needed", body: "Walk in, get assessed, leave with a diagnosis and a written plan. Same day answers — not an appointment in five days time." },
    { n: "02", title: "$0 gap for eligible claims", body: "Via sports insurance and private health. Bring your card. We handle the claim on the spot." },
    { n: "03", title: "Assessment designed for athletes", body: "Not a general practice model. Sport-specific assessment by physiotherapists who understand load, competition timelines, and what matters to an athlete." },
  ];

  return (
    <div
      ref={ref}
      id="sunday-clinic"
      style={{
        background: "var(--navy)",
        padding: "96px var(--px)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 80,
        maxWidth: 1360,
        margin: "0 auto",
        alignItems: "start",
      }}
    >
      {/* Standalone image card — left */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{ position: "sticky", top: 100 }}
      >
        <div style={{ borderRadius: 16, overflow: "hidden", position: "relative" }}>
          <Image
            src="/hero-asic.jpg"
            alt="Athlete assessed at Stride Acute Sports Injury Clinic — Sunday Moonee Ponds"
            width={700}
            height={520}
            style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
          />
        </div>
        <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
          {[
            { num: "$0", label: "Gap eligible claims" },
            { num: "Same day", label: "Diagnosis" },
            { num: "Sun 9–2", label: "Moonee Ponds" },
          ].map((s, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontFamily: "var(--font-bebas)", fontSize: "1.4rem", color: "#fff", lineHeight: 1 }}>{s.num}</div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.72rem", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Copy — right */}
      <div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(27,144,245,0.15)", border: "1px solid rgba(27,144,245,0.35)", borderRadius: 20, padding: "5px 14px", marginBottom: 20 }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--blue)", display: "inline-block" }} />
          <span style={{ color: "#68b4ff", fontSize: "0.78rem", fontWeight: 600 }}>Now open Sundays · 9am–2pm</span>
        </div>
        <div className="ey ey-blue">Acute Sports Injury Clinic</div>
        <h2
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            lineHeight: 0.9,
            letterSpacing: "0.02em",
            color: "#fff",
            marginBottom: 24,
          }}
        >
          Hurt on the weekend?<br /><span className="orange">Don&apos;t wait till Monday.</span>
        </h2>
        <p className="bt-inv" style={{ marginBottom: 32 }}>
          Our Sunday Acute Sports Injury Clinic is built for athletes who got hurt over the weekend and can&apos;t afford to wait days for answers. Walk in, get assessed, get your plan.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15 + 0.2, duration: 0.5 }}
              style={{
                display: "flex", gap: 20, padding: 20,
                background: "rgba(255,255,255,0.04)",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div style={{ fontFamily: "var(--font-dm-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", color: "var(--blue)", flex: "0 0 28px", paddingTop: 4 }}>
                {card.n}
              </div>
              <div>
                <h4 style={{ fontWeight: 700, color: "#fff", marginBottom: 6, fontSize: "1rem" }}>{card.title}</h4>
                <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7, fontSize: "0.92rem" }}>{card.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <button className="btn btn-primary" onClick={openModal}>
          Book Sunday Assessment <span className="arr">→</span>
        </button>
      </div>
    </div>
  );
}
