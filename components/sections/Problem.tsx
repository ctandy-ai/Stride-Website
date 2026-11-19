"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    {
      n: "01",
      title: "You did more, quickly.",
      body: "Pre-season, a new team, extra sessions, more running. Your body can handle a lot, just not all at once.",
    },
    {
      n: "02",
      title: "Not enough time to recover.",
      body: "Training, games, gym and work stacked back to back.",
    },
    {
      n: "03",
      title: "Rest fixed the pain, not the problem.",
      body: "It settles, then comes back as soon as you pick things up again.",
    },
  ];

  return (
    <div
      ref={ref}
      id="method"
      className="section-grid"
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
      <div>
        <div className="ey ey-blue">The problem</div>
        <h2
          className="sh sh-navy"
          style={{ marginBottom: 24 }}
        >
          Sore doesn&apos;t{" "}
          <span className="orange">always mean</span>{" "}
          broken.
        </h2>
        <p className="bt" style={{ marginBottom: 32 }}>
          When something hurts, it&apos;s natural to think something&apos;s damaged. Sometimes it is, and we&apos;ll find that. But often, pain is your body saying it&apos;s been asked to do more than it was ready for.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15 + 0.2, duration: 0.5 }}
              style={{
                display: "flex",
                gap: 20,
                padding: "20px",
                background: "#fff",
                borderRadius: 12,
                border: "1px solid var(--stone)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  color: "var(--blue)",
                  flex: "0 0 28px",
                  paddingTop: 4,
                }}
              >
                {card.n}
              </div>
              <div>
                <h3 style={{ fontWeight: 700, color: "var(--navy)", marginBottom: 6, fontSize: "1rem" }}>
                  {card.title}
                </h3>
                <p style={{ color: "#4A6070", lineHeight: 1.7, fontSize: "0.92rem" }}>
                  {card.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="bt" style={{ marginTop: 20, marginBottom: 32 }}>
          The good news: what you do each week is something you can change. That&apos;s where we start.
        </p>

        <div style={{ marginTop: 0, paddingTop: 32, borderTop: "1px solid var(--stone)" }}>
          <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 20 }}>
            Injuries we assess and manage most
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
            {[
              { label: "ACL", sub: "Knee ligament", icon: "🦵", href: "/acl-rehab" },
              { label: "Knee pain", sub: "Tendon, kneecap & meniscus", icon: "🔴", href: "/knee-pain-athletes" },
              { label: "Achilles", sub: "Tendon & rupture", icon: "🦶", href: "/achilles-rehab" },
              { label: "Ankle", sub: "Sprain & instability", icon: "🏃", href: "/ankle-rehab" },
              { label: "Hip & Groin", sub: "Strain & FAI", icon: "💪", href: "/hip-groin-rehab" },
              { label: "Shoulder", sub: "Rotator cuff & labrum", icon: "🤸", href: "/shoulder-rehab" },
              { label: "Hamstring & Calf", sub: "Muscle injuries", icon: "🏄", href: "/hamstring-rehab" },
            ].map((injury) => (
              <a
                key={injury.href}
                href={injury.href}
                className="injury-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "14px 16px",
                  border: "1px solid var(--stone)",
                  borderRadius: 8,
                  textDecoration: "none",
                  background: "#fff",
                  transition: "border-color .15s, box-shadow .15s, transform .15s",
                  cursor: "pointer",
                }}
              >
                <div style={{ fontSize: "1.3rem", marginBottom: 6 }}>{injury.icon}</div>
                <div style={{ fontWeight: 700, color: "var(--navy)", fontSize: "0.9rem", marginBottom: 2 }}>{injury.label}</div>
                <div style={{ color: "var(--muted)", fontSize: "0.75rem", marginBottom: 10 }}>{injury.sub}</div>
                <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 4, color: "var(--blue)", fontSize: "0.75rem", fontWeight: 700 }}>
                  See rehab program <span style={{ fontSize: "0.8rem" }}>→</span>
                </div>
              </a>
            ))}
          </div>
          <style>{`.injury-card:hover { border-color: var(--blue); box-shadow: 0 4px 16px rgba(27,144,245,0.12); transform: translateY(-2px); }`}</style>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{ position: "sticky", top: 100 }}
      >
        <Image
          src="https://assets.cdn.filesafe.space/uGjKGDMcGryVhkZ0uDcj/media/68a65fb5821cc72a3b013e0f.jpeg"
          alt="Stride Sports Physio athlete assessment"
          width={600}
          height={700}
          style={{ width: "100%", height: "auto", borderRadius: 16, objectFit: "cover" }}
          unoptimized
        />
      </motion.div>
    </div>
  );
}
