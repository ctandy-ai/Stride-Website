"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fireGtag, CONV } from "@/lib/conversions";

interface FAQ { q: string; a: string; }

const whyCards = [
  {
    n: "01",
    title: "A physio who trains.",
    body: "Tom Yeung, Senior Physiotherapist, trains in combat sports and founded Combat Sports Consulting. He understands camp schedules, weight classes and what \"light rounds\" actually means.",
  },
  {
    n: "02",
    title: "Training continues through rehab.",
    body: "We modify, not stop. Most fighters can keep drilling, conditioning and training the uninjured side while the injury recovers.",
  },
  {
    n: "03",
    title: "Return confirmed by testing.",
    body: "Back to full sparring and competition when strength and movement tests say so, not when the calendar does.",
  },
];

const injuryGroups = [
  {
    sport: "BJJ and grappling",
    injuries: "Knee injuries (MCL, meniscus), elbow injuries from armbars, shoulder injuries from kimuras and frames, and neck strain.",
  },
  {
    sport: "MMA",
    injuries: "A mix of striking and grappling injuries, plus knee and ankle problems from kicks and takedowns.",
  },
  {
    sport: "Boxing and Muay Thai",
    injuries: "Hand and wrist injuries, shoulder overload, rib injuries, and shin and foot problems from kicking.",
  },
  {
    sport: "Wrestling",
    injuries: "Neck, shoulder and knee injuries from shots, sprawls and scrambles.",
  },
];

export default function CombatSportsPage({ faqs }: { faqs: FAQ[] }) {
  const heroRef = useRef(null);
  const whyRef = useRef(null);
  const injuryRef = useRef(null);
  const fightRef = useRef(null);
  const faqRef = useRef(null);
  const whyInView = useInView(whyRef, { once: true, margin: "-80px" });
  const injuryInView = useInView(injuryRef, { once: true, margin: "-80px" });
  const fightInView = useInView(fightRef, { once: true, margin: "-80px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-80px" });

  const openModal = () => {
    if (typeof (window as any).openModal === "function") (window as any).openModal();
  };

  // FAQ expand state not needed — all FAQs are open (flat list)

  return (
    <div style={{ paddingTop: 66 }}>

      {/* ── Hero ── */}
      <div
        ref={heroRef}
        style={{ background: "var(--navy)", padding: "96px var(--px) 80px" }}
      >
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div className="ey ey-blue" style={{ marginBottom: 16 }}>Combat Sports Physio · Moonee Ponds</div>
          <h1
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(3rem, 7vw, 6rem)",
              lineHeight: 0.9,
              letterSpacing: "0.02em",
              color: "#fff",
              marginBottom: 24,
            }}
          >
            BJJ. MMA. Boxing.<br />
            <span className="orange">Real physio. Real sport.</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 580, marginBottom: 32 }}>
            Sparring, drilling, conditioning and making weight all land on the same body. We look at your whole camp, not just the sore elbow — and show you what you can keep doing, what to protect, and how long until you&apos;re back on the mats.
          </p>
          <button className="btn btn-primary" onClick={openModal}>
            Book my assessment <span className="arr">→</span>
          </button>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.78rem", marginTop: 10 }}>
            No referral needed &nbsp;·&nbsp; Private health claimable &nbsp;·&nbsp; Same-week appointments usually available
          </p>
        </div>
      </div>

      {/* ── Built for fighters ── */}
      <div ref={whyRef} style={{ background: "var(--off)", padding: "96px var(--px)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="ey ey-blue" style={{ marginBottom: 16 }}>How we work</div>
          <h2 className="sh sh-navy" style={{ marginBottom: 40 }}>
            Built for fighters,<br />
            <span className="orange">not general patients.</span>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {whyCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={whyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.12 + 0.1, duration: 0.5 }}
                style={{
                  display: "flex", gap: 20, padding: "24px",
                  background: "#fff", borderRadius: 12,
                  border: "1px solid var(--stone)",
                  borderLeft: "3px solid var(--blue)",
                }}
              >
                <div style={{ fontFamily: "var(--font-dm-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", color: "var(--blue)", flex: "0 0 28px", paddingTop: 4 }}>
                  {card.n}
                </div>
                <div>
                  <h3 style={{ fontWeight: 700, color: "var(--navy)", marginBottom: 6, fontSize: "1rem" }}>{card.title}</h3>
                  <p style={{ color: "#4A6070", lineHeight: 1.7, fontSize: "0.92rem", margin: 0 }}>{card.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Common injuries ── */}
      <div ref={injuryRef} style={{ background: "var(--navy)", padding: "96px var(--px)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="ey ey-blue" style={{ marginBottom: 16 }}>What we see</div>
          <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 0.9, color: "#fff", letterSpacing: "0.02em", marginBottom: 40 }}>
            Common injuries<br /><span className="orange">we see in fighters.</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {injuryGroups.map((group, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={injuryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.1, duration: 0.5 }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: 12, padding: "24px",
                  borderTop: "3px solid var(--orange)",
                }}
              >
                <h3 style={{ fontWeight: 700, color: "#fff", marginBottom: 10, fontSize: "1rem" }}>{group.sport}</h3>
                <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.7, fontSize: "0.9rem", margin: 0 }}>{group.injuries}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Got a fight coming up? ── */}
      <div ref={fightRef} style={{ background: "var(--off)", padding: "96px var(--px)" }}>
        <div style={{ maxWidth: 740, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={fightInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="ey ey-blue" style={{ marginBottom: 16 }}>Fight prep</div>
            <h2 className="sh sh-navy" style={{ marginBottom: 20 }}>
              Got a fight<br /><span className="orange">coming up?</span>
            </h2>
            <p className="bt" style={{ marginBottom: 32 }}>
              Tell us the date at your first session. We&apos;ll build the plan around it: what&apos;s realistic, what needs protecting, and what we&apos;ll test before you step in. If the timeline isn&apos;t realistic, we&apos;ll tell you straight.
            </p>
            <button className="btn btn-primary" onClick={openModal}>
              Book my assessment <span className="arr">→</span>
            </button>
            <p style={{ color: "var(--muted)", fontSize: "0.78rem", marginTop: 10 }}>
              No referral needed &nbsp;·&nbsp; Private health claimable &nbsp;·&nbsp; Same-week appointments usually available
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <div ref={faqRef} style={{ background: "var(--navy)", padding: "96px var(--px)" }}>
        <div style={{ maxWidth: 740, margin: "0 auto" }}>
          <div className="ey ey-blue" style={{ marginBottom: 16 }}>Questions fighters ask</div>
          <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", lineHeight: 0.9, color: "#fff", letterSpacing: "0.02em", marginBottom: 40 }}>
            Common questions.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 + 0.1, duration: 0.4 }}
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  padding: "20px 0",
                }}
              >
                <h3 style={{ fontWeight: 700, color: "#fff", marginBottom: 8, fontSize: "1rem" }}>{faq.q}</h3>
                <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.7, fontSize: "0.92rem", margin: 0 }}>{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
