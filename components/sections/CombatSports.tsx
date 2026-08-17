"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function CombatSports() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const openModal = () => {
    if (typeof (window as any).openModal === "function") (window as any).openModal();
  };

  return (
    <div
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: 600,
      }}
    >
      {/* Copy */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={{
          padding: "80px var(--px)",
          background: "var(--off)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ marginBottom: 20 }}>
          <a href="https://www.combatsportsconsulting.com/" target="_blank" rel="noopener">
            <Image
              src="/combat-sports-consulting-logo.jpg"
              alt="Combat Sports Consulting"
              width={144}
              height={72}
              style={{ height: 72, width: "auto", borderRadius: 8 }}
            />
          </a>
        </div>
        <div className="ey ey-blue">Combat Athletes</div>
        <h2
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            lineHeight: 0.9,
            letterSpacing: "0.02em",
            color: "var(--navy)",
            marginBottom: 20,
          }}
        >
          BJJ. MMA. Boxing.<br /><span className="orange">We understand<br />your sport.</span>
        </h2>
        <p className="bt" style={{ marginBottom: 18 }}>
          Most physios treat combat athletes like everyone else — rest, generic exercises, wait.{" "}
          <strong>They don&apos;t understand why you can&apos;t stop rolling for 12 weeks. We do.</strong>
        </p>
        <p className="bt" style={{ marginBottom: 10 }}>
          Our dedicated combat sports physio is <strong>Tom Yeung</strong> — Senior Physiotherapist and founder of{" "}
          <a
            href="https://www.combatsportsconsulting.com/"
            target="_blank"
            rel="noopener"
            style={{ color: "#3b9eff", fontWeight: 700 }}
          >
            Combat Sports Consulting
          </a>.
          Tom has a deep background in combat training and understands the demands, timelines, and culture of competitive BJJ, MMA, boxing, and grappling — from the inside.
        </p>
        <p className="bt" style={{ marginBottom: 22 }}>
          We map what you can keep doing from day one. Drilling when you can&apos;t spar.
          Upper body when the knee is out. Maintaining cardio while the shoulder heals.
        </p>
        <ul className="cklist" style={{ marginBottom: 24 }}>
          {[
            "Sport-mapped training — what's safe, what's off, and why",
            "Grading, comp & fight timelines built into your plan",
            "BJJ, wrestling & grappling load mapped to your recovery",
            "Return confirmed by objective testing — not a guess",
          ].map((item, i) => (
            <li key={i}><span className="ck">✓</span>{item}</li>
          ))}
        </ul>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <button className="btn btn-primary" onClick={openModal}>
            Book with Tom <span className="arr">→</span>
          </button>
          <a
            href="https://www.combatsportsconsulting.com/"
            target="_blank"
            rel="noopener"
            style={{
              background: "#fff",
              border: "2px solid #fff",
              color: "#1a1a2e",
              padding: "12px 22px",
              borderRadius: 8,
              fontWeight: 700,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: "0.9rem",
            }}
          >
            Combat Sports Consulting ↗
          </a>
        </div>
      </motion.div>

      {/* Image placeholder */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.7 }}
        style={{
          background: "var(--navy)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 500,
        }}
      >
        <div style={{ color: "rgba(255,255,255,0.2)", textAlign: "center" }}>
          <div style={{ fontSize: "4rem", marginBottom: 12 }}>🥋</div>
          <div style={{ fontFamily: "var(--font-bebas)", fontSize: "1.5rem", letterSpacing: "0.1em" }}>
            COMBAT SPORTS PHYSIO
          </div>
        </div>
      </motion.div>
    </div>
  );
}
