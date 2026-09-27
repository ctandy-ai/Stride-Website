"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

type Card = {
  icon: string;
  title: string;
  body: string;
  href: string;
  external?: boolean;
  modal?: boolean;
};

const cards: Card[] = [
  // Row 1 — 4 cards
  {
    icon: "🦵",
    title: "ACL & Knee",
    body: "Structured, gate-by-gate ACL rehabilitation with objective return-to-sport testing. No guesswork — data-driven clearance.",
    href: "/acl-rehab",
  },
  {
    icon: "🦶",
    title: "Ankle & Foot",
    body: "From acute ankle sprains to chronic instability. Without proper rehab, re-injury rates exceed 70%. We fix that.",
    href: "/ankle-rehab",
  },
  {
    icon: "💪",
    title: "Shoulder & Rotator Cuff",
    body: "Shoulder dislocations, rotator cuff tears, AC joint injuries, and throwing shoulder — assessed and managed by sports specialists.",
    href: "/shoulder-rehab",
  },
  {
    icon: "🏃",
    title: "Hamstring & Hip",
    body: "Hamstring strains are the most common muscle injury in sport. We grade, load, and return you — without the guesswork or re-injury risk.",
    href: "/hamstring-rehab",
  },
  // Row 2 — 3 cards
  {
    icon: "🥊",
    title: "Combat Sports",
    body: "Physio built for BJJ, MMA, boxing, and wrestling athletes. We understand why a full-rest prescription doesn't work for competitors.",
    href: "/combat-sports-physio",
  },
  {
    icon: "🧠",
    title: "Concussion",
    body: "Graded return-to-sport management following sports concussion. Same-day assessment, written recovery plan, and clearance criteria.",
    href: "/concussion",
  },
  {
    icon: "⚡",
    title: "Acute Sports Injury",
    body: "Hurt on the weekend? Our Sunday Acute Sports Injury Clinic gets you assessed, diagnosed, and planned — no GP referral needed.",
    href: "/acute-sports-injury-clinic",
  },
];

function InjuryCard({
  card,
  i,
  inView,
}: {
  card: Card;
  i: number;
  inView: boolean;
}) {
  const openModal = () => {
    if (typeof (window as any).openModal === "function") (window as any).openModal();
  };

  const inner = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.07 + 0.1, duration: 0.45 }}
      style={{
        background: "#fff",
        border: "1px solid var(--stone)",
        borderRadius: 14,
        padding: "28px 24px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 0,
        height: "100%",
        cursor: "pointer",
        transition: "border-color 0.2s, box-shadow 0.2s, transform 0.2s",
        boxSizing: "border-box",
      }}
      whileHover={{
        borderColor: "var(--blue)",
        boxShadow: "0 4px 24px rgba(27,144,245,0.10)",
        y: -3,
      } as any}
    >
      {/* Icon */}
      <div style={{ fontSize: "1.8rem", marginBottom: 14, lineHeight: 1 }}>
        {card.icon}
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: "var(--font-bebas)",
          fontSize: "1.35rem",
          letterSpacing: "0.03em",
          color: "var(--navy)",
          marginBottom: 10,
          lineHeight: 1.1,
        }}
      >
        {card.title}
      </h3>

      {/* Body */}
      <p
        style={{
          color: "#4A6070",
          fontSize: "0.85rem",
          lineHeight: 1.65,
          margin: 0,
          flex: 1,
        }}
      >
        {card.body}
      </p>

      {/* Link row */}
      <div
        style={{
          marginTop: 18,
          display: "flex",
          alignItems: "center",
          gap: 6,
          color: "var(--blue)",
          fontSize: "0.78rem",
          fontWeight: 700,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        }}
      >
        {card.modal ? "Book assessment" : "Learn more"}
        <span style={{ fontSize: "0.9rem" }}>→</span>
      </div>
    </motion.div>
  );

  if (card.modal) {
    return (
      <div onClick={openModal} style={{ display: "contents" }}>
        {inner}
      </div>
    );
  }

  return (
    <Link href={card.href} style={{ textDecoration: "none", display: "flex" }}>
      {inner}
    </Link>
  );
}

export default function InjuryCards() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const openModal = () => {
    if (typeof (window as any).openModal === "function") (window as any).openModal();
  };

  const row1 = cards.slice(0, 4);
  const row2 = cards.slice(4);

  return (
    <div
      ref={ref}
      style={{ background: "var(--off)", padding: "96px var(--px)" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: 48 }}
        >
          <div className="ey ey-navy">What we treat</div>
          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: 0.9,
              letterSpacing: "0.02em",
              color: "var(--navy)",
              marginBottom: 16,
            }}
          >
            Sport-specific rehab<br />
            <span className="orange">for every injury.</span>
          </h2>
          <p
            className="bt"
            style={{ maxWidth: 560 }}
          >
            Every injury has a different demand. Every athlete has a different sport. We build the rehab plan around both — from first appointment to return-to-sport clearance.
          </p>
        </motion.div>

        {/* Row 1 — 4 cards */}
        <div
          className="injury-cards-row1"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
            marginBottom: 16,
          }}
        >
          {row1.map((card, i) => (
            <InjuryCard key={card.title} card={card} i={i} inView={inView} />
          ))}
        </div>

        {/* Row 2 — 3 cards centred */}
        <div
          className="injury-cards-row2"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
            maxWidth: "calc((100% / 4) * 3 + 32px)",
          }}
        >
          {row2.map((card, i) => (
            <InjuryCard key={card.title} card={card} i={i + 4} inView={inView} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55, duration: 0.45 }}
          style={{ marginTop: 40, display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}
        >
          <button className="btn btn-primary" onClick={openModal}>
            Book my assessment <span className="arr">→</span>
          </button>
          <span style={{ color: "var(--muted)", fontSize: "0.82rem" }}>
            Not sure where to start? Book an assessment — we'll work out the right program on the day.
          </span>
        </motion.div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 900px) {
          .injury-cards-row1 {
            grid-template-columns: 1fr 1fr !important;
          }
          .injury-cards-row2 {
            grid-template-columns: 1fr 1fr !important;
            max-width: 100% !important;
          }
        }
        @media (max-width: 560px) {
          .injury-cards-row1,
          .injury-cards-row2 {
            grid-template-columns: 1fr !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}
