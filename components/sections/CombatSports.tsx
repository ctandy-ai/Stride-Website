"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function CombatSports() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const openModal = () => {
    if (typeof (window as any).openModal === "function") (window as any).openModal();
  };

  const cards = [
    { n: "01", title: "Tom Yeung — your dedicated combat physio", body: "Senior Physiotherapist with a background in combat training. He understands why a 12-week full rest prescription doesn't work for a competitor who has a bout in six weeks." },
    { n: "02", title: "Return confirmed by objective testing", body: "Not a calendar date. Not a guess. Movement and load capacity tested against your specific sport demands before clearance is given." },
    { n: "03", title: "Training continues through rehab", body: "There is almost always something you can keep doing. We build around what you can't do, not just stop everything you can." },
  ];

  return (
    <div
      ref={ref}
      className="section-grid"
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
      {/* Standalone image card — left side */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{ position: "sticky", top: 100 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/combat-sports.jpg"
          alt="Tom Yeung treating a combat athlete — Stride Sports Physio Melbourne"
          style={{ width: "100%", borderRadius: 16, objectFit: "cover", display: "block" }}
        />
        <div style={{ marginTop: 16, padding: "16px 20px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12 }}>
          <div style={{ fontFamily: "var(--font-dm-mono)", fontSize: "0.6rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 6 }}>
            Combat Sports Consulting
          </div>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.84rem", lineHeight: 1.6, margin: 0 }}>
            Dedicated combat sports physio service in partnership with{" "}
            <a href="https://www.combatsportsconsulting.com" target="_blank" rel="noopener" style={{ color: "var(--blue)", textDecoration: "none" }}>
              Combat Sports Consulting
            </a>.
          </p>
        </div>
      </motion.div>

      {/* Copy — right side */}
      <div>
        <div className="ey ey-blue">Combat Sports Physio</div>
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
          Built for fighters.<br /><span className="orange">Not general patients.</span>
        </h2>
        <p className="bt-inv" style={{ marginBottom: 32 }}>
          Boxing, MMA, BJJ, Muay Thai, wrestling. Combat athletes have a different relationship with pain, training load, and recovery timelines. Generic physio doesn&apos;t account for that.
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

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <button className="btn btn-primary" onClick={openModal}>
            Book with Tom <span className="arr">→</span>
          </button>
          <Link
            href="/combat-sports-physio"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              color: "rgba(255,255,255,0.6)", textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.2)", padding: "12px 22px",
              borderRadius: 2, fontSize: "0.85rem", fontWeight: 600,
            }}
          >
            Learn more →
          </Link>
        </div>
      </div>
    </div>
  );
}
