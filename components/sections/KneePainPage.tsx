"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

interface FAQ { q: string; a: string; }

const conditions = [
  {
    title: "Patellar tendon pain (jumper's knee).",
    body: "Pain just below the kneecap, worse with jumping, landing or changing direction. Common in basketball, netball, volleyball and AFL.",
  },
  {
    title: "Kneecap (patellofemoral) pain.",
    body: "An ache around or behind the kneecap, often worse on stairs, squatting or after sitting. Common in runners and younger athletes.",
  },
  {
    title: "Meniscus injuries.",
    body: "Pain on the inside or outside of the knee after a twist, sometimes with catching, locking or swelling.",
  },
  {
    title: "Ligament sprains (MCL).",
    body: "Pain on the inside of the knee after contact or a twist.",
    link: { text: "For ACL injuries, see our ACL rehab program →", href: "/acl-rehab" },
  },
];

const steps = [
  { n: "01", label: "Find the cause.", body: "Hands-on assessment, then strength and movement testing so we can see the gap, not guess at it." },
  { n: "02", label: "Keep you moving.", body: "We adjust how much you're doing rather than stopping it, wherever that's safe." },
  { n: "03", label: "Build strength.", body: "A step-by-step strength program matched to your sport." },
  { n: "04", label: "Return when the numbers say so.", body: "Hop, strength and change-of-direction tests clear you, not just the absence of pain on the day." },
];

export default function KneePainPage({ faqs }: { faqs: FAQ[] }) {
  const heroRef = useRef(null);
  const condRef = useRef(null);
  const whyRef = useRef(null);
  const howRef = useRef(null);
  const redRef = useRef(null);
  const faqRef = useRef(null);
  const condInView = useInView(condRef, { once: true, margin: "-80px" });
  const whyInView = useInView(whyRef, { once: true, margin: "-80px" });
  const howInView = useInView(howRef, { once: true, margin: "-80px" });
  const redInView = useInView(redRef, { once: true, margin: "-80px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-80px" });

  const openModal = () => {
    if (typeof (window as any).openModal === "function") (window as any).openModal();
  };
  const openQuizModal = () => {
    if (typeof (window as any).openQuizModal === "function") (window as any).openQuizModal();
  };

  return (
    <div style={{ paddingTop: 66 }}>

      {/* ── Hero ── */}
      <div ref={heroRef} style={{ background: "var(--navy)", padding: "96px var(--px) 80px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div className="ey ey-blue" style={{ marginBottom: 16 }}>Knee Pain · Athletes · Moonee Ponds</div>
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
            Knee pain that<br />
            <span className="orange">keeps coming back?</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 580, marginBottom: 32 }}>
            Knee pain that flares up every time training picks up isn&apos;t bad luck. Often it&apos;s about how much you&apos;ve been doing, not just the knee itself. Patellar tendon, kneecap and meniscus problems are common in athletes, and very often manageable without stopping sport once you know what&apos;s driving them.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 10 }}>
            <button className="btn btn-primary" onClick={openModal}>
              Book my assessment — $145 <span className="arr">→</span>
            </button>
          </div>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.78rem", marginTop: 10, marginBottom: 20 }}>
            No referral needed &nbsp;·&nbsp; Private health claimable &nbsp;·&nbsp; Same-week appointments usually available
          </p>
          <button
            onClick={openQuizModal}
            style={{ background: "none", border: "none", padding: 0, color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", cursor: "pointer", textDecoration: "underline", textDecorationColor: "rgba(255,255,255,0.3)" }}
          >
            Not sure if it&apos;s serious? Take the self-check →
          </button>
        </div>
      </div>

      {/* ── Common conditions ── */}
      <div ref={condRef} style={{ background: "var(--off)", padding: "96px var(--px)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="ey ey-blue" style={{ marginBottom: 16 }}>What we see</div>
          <h2 className="sh sh-navy" style={{ marginBottom: 40 }}>
            The most common knee problems<br /><span className="orange">we see in athletes.</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {conditions.map((cond, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={condInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.1, duration: 0.5 }}
                style={{
                  background: "#fff", borderRadius: 12, padding: "24px",
                  border: "1px solid var(--stone)", borderTop: "3px solid var(--blue)",
                }}
              >
                <h3 style={{ fontWeight: 700, color: "var(--navy)", marginBottom: 10, fontSize: "1rem" }}>{cond.title}</h3>
                <p style={{ color: "#4A6070", lineHeight: 1.7, fontSize: "0.9rem", margin: 0 }}>{cond.body}</p>
                {cond.link && (
                  <Link href={cond.link.href} style={{ display: "block", marginTop: 10, color: "var(--blue)", fontWeight: 700, fontSize: "0.85rem", textDecoration: "none" }}>
                    {cond.link.text}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Why it keeps coming back ── */}
      <div ref={whyRef} style={{ background: "var(--navy)", padding: "96px var(--px)" }}>
        <div style={{ maxWidth: 740, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={whyInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <div className="ey ey-blue" style={{ marginBottom: 16 }}>The pattern</div>
            <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 0.9, color: "#fff", letterSpacing: "0.02em", marginBottom: 24 }}>
              Why it keeps<br /><span className="orange">coming back.</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.05rem", lineHeight: 1.75 }}>
              Rest settles the pain, but it doesn&apos;t fix why it started. Usually it&apos;s a mix of doing more too quickly, some strength gaps (thighs, hips or calves), and how you land and change direction. Unless those change, the pain tends to come back when training picks up.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── How we manage it ── */}
      <div ref={howRef} style={{ background: "var(--off)", padding: "96px var(--px)" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div className="ey ey-blue" style={{ marginBottom: 16 }}>How we work</div>
          <h2 className="sh sh-navy" style={{ marginBottom: 40 }}>
            How we<br /><span className="orange">manage it.</span>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={howInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.1, duration: 0.5 }}
                style={{
                  display: "flex", gap: 24, padding: "24px 0",
                  borderBottom: i < steps.length - 1 ? "1px solid var(--stone)" : "none",
                }}
              >
                <div style={{ fontFamily: "var(--font-dm-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", color: "var(--blue)", flex: "0 0 32px", paddingTop: 4 }}>
                  {step.n}
                </div>
                <div>
                  <h3 style={{ fontWeight: 700, color: "var(--navy)", marginBottom: 6, fontSize: "1rem" }}>{step.label}</h3>
                  <p style={{ color: "#4A6070", lineHeight: 1.7, fontSize: "0.92rem", margin: 0 }}>{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Red flags ── */}
      <div ref={redRef} style={{ background: "var(--navy)", padding: "80px var(--px)" }}>
        <div style={{ maxWidth: 740, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={redInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <div className="ey ey-blue" style={{ marginBottom: 16 }}>When to act immediately</div>
            <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 0.9, color: "#fff", letterSpacing: "0.02em", marginBottom: 20 }}>
              When to get it<br /><span className="orange">checked straight away.</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.75, fontSize: "1rem" }}>
              See your GP or go to the emergency department if your knee is badly swollen within a few hours of an injury, you can&apos;t bear weight, it&apos;s locked and won&apos;t straighten, or it looks deformed. If none of those apply, book in and we&apos;ll work out what you&apos;re dealing with.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <div ref={faqRef} style={{ background: "var(--off)", padding: "96px var(--px)" }}>
        <div style={{ maxWidth: 740, margin: "0 auto" }}>
          <div className="ey ey-blue" style={{ marginBottom: 16 }}>Common questions</div>
          <h2 className="sh sh-navy" style={{ marginBottom: 40 }}>
            Knee pain FAQ.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 + 0.1, duration: 0.4 }}
                style={{ borderBottom: "1px solid var(--stone)", padding: "20px 0" }}
              >
                <h3 style={{ fontWeight: 700, color: "var(--navy)", marginBottom: 8, fontSize: "1rem" }}>{faq.q}</h3>
                <p style={{ color: "#4A6070", lineHeight: 1.7, fontSize: "0.92rem", margin: 0 }}>{faq.a}</p>
              </motion.div>
            ))}
          </div>

          {/* Related pages */}
          <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid var(--stone)" }}>
            <div style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 16 }}>
              Related
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {[
                { label: "ACL rehab →", href: "/acl-rehab" },
                { label: "Hamstring & calf →", href: "/hamstring-rehab" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ color: "var(--blue)", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
