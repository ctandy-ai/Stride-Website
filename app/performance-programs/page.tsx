"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PerformanceModal from "@/components/PerformanceModal";

export default function PerformancePrograms() {
  const heroRef = useRef(null);
  const prog1Ref = useRef(null);
  const prog2Ref = useRef(null);
  const inView1 = useInView(prog1Ref, { once: true, margin: "-60px" });
  const inView2 = useInView(prog2Ref, { once: true, margin: "-60px" });

  const openModal = () => {
    window.dispatchEvent(new Event("openModal"));
  };

  const athleteIncludes = [
    "Blueprint Testing Session — movement analysis & sport-specific benchmarks",
    "Written report: where you sit vs what your sport demands",
    "Personalised 6-week S&C program updated every session",
    "1:1 coach supervision every session",
    "Gym access included",
    "Programming platform access throughout",
    "Progress review at 6 weeks — continue or adapt",
  ];

  const scIncludes = [
    "Initial programming consultation",
    "Sport-specific 6-week S&C program",
    "Coach supervision every session",
    "Gym access included",
    "Programming platform access throughout",
    "Progress check at 6 weeks",
  ];

  const steps = [
    { n: "01", title: "Blueprint Testing Session · $185", desc: "We measure what your sport demands and grade where you currently sit against it. You leave with a written report, a clear program recommendation, and your first session booked." },
    { n: "02", title: "Week 1 program starts", desc: "Personalised from day one. Every exercise has a reason. Every session is supervised by a coach who knows your data." },
    { n: "03", title: "Updated every session", desc: "Your program evolves as you do. Load, volume, and exercise selection adjusted based on what we see — not a schedule." },
    { n: "04", title: "6-week review", desc: "Objective re-test at six weeks. You see exactly where you've moved. Then you decide: continue, adapt, or graduate." },
  ];

  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        ref={heroRef}
        style={{
          background: "var(--navy)",
          minHeight: "85vh",
          display: "flex",
          alignItems: "flex-end",
          position: "relative",
          overflow: "hidden",
          padding: "0 var(--px) 72px",
        }}
      >
        {/* Background gradient */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, #091422 0%, #0d2040 50%, #071830 100%)",
        }} />
        <div style={{
          position: "absolute", top: "20%", right: "-5%",
          width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(27,144,245,0.08) 0%, transparent 70%)",
        }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 760 }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="ey ey-blue" style={{ marginBottom: 16 }}>Strength & Conditioning Performance</div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
              lineHeight: 0.88,
              color: "#fff",
              letterSpacing: "0.02em",
              marginBottom: 24,
            }}
          >
            Training hard<br />is easy.<br />
            <span style={{ color: "var(--blue)" }}>Training the right<br />thing is the hard part.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 580, marginBottom: 32 }}
          >
            Most athletes follow a program nobody can fully explain. We measure what your sport demands, grade where you sit against it, and build a program around the gap. Then we tell you honestly which of our two programs you actually need. Sometimes that's the cheaper one.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}
          >
            <button
              onClick={openModal}
              style={{
                background: "var(--blue)", color: "#fff", border: "none",
                padding: "16px 32px", borderRadius: 2, cursor: "pointer",
                fontFamily: "var(--font-inter)", fontSize: "0.9rem", fontWeight: 700,
                letterSpacing: "0.04em", textTransform: "uppercase",
              }}
            >
              Book a Blueprint Testing Session →
            </button>
            <button
              onClick={openModal}
              style={{
                background: "transparent", color: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(255,255,255,0.2)", padding: "16px 28px",
                borderRadius: 2, cursor: "pointer",
                fontFamily: "var(--font-inter)", fontSize: "0.88rem", fontWeight: 600,
              }}
            >
              Book a Call
            </button>
          </motion.div>
          <p style={{ marginTop: 16, fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
            Athlete Performance $145/wk · S&amp;C Performance $90/wk · Six-week blocks
          </p>
        </div>
      </section>

      {/* Problem */}
      <section style={{ background: "var(--off)", padding: "80px var(--px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }}>
          {[
            { n: "01", h: "You don't know what's actually limiting you", body: "Gym fatigue, poor movement patterns, sport-specific weaknesses — without testing you're guessing. A program built on guesses produces guesses." },
            { n: "02", h: "Generic programs don't account for your sport", body: "AFL demands are not soccer demands. Running economy is not the same as contact capacity. A program that doesn't know your sport can't prepare you for it." },
            { n: "03", h: "Nobody's watching the detail", body: "Online programs don't watch your movement. Group classes don't adjust your load. Without supervision the program degrades as soon as something gets hard." },
          ].map((p) => (
            <div key={p.n} style={{ background: "#fff", borderRadius: 12, padding: 28, border: "1px solid var(--stone)" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.15em", color: "var(--blue)", marginBottom: 12 }}>{p.n}</div>
              <h3 style={{ color: "var(--navy)", fontWeight: 800, fontSize: "1.1rem", marginBottom: 10, lineHeight: 1.3 }}>{p.h}</h3>
              <p style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programs */}
      <section style={{ background: "var(--navy)", padding: "80px var(--px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="ey ey-blue" style={{ justifyContent: "center", marginBottom: 12 }}>Two programs. One starting point.</div>
            <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#fff", letterSpacing: "0.02em", lineHeight: 0.9 }}>
              We tell you which one<br /><span style={{ color: "var(--blue)" }}>you actually need.</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
            {/* Athlete Performance */}
            <motion.div
              ref={prog1Ref}
              initial={{ opacity: 0, y: 24 }}
              animate={inView1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              style={{
                background: "rgba(27,144,245,0.08)", border: "1px solid rgba(27,144,245,0.25)",
                borderRadius: 16, padding: 36,
              }}
            >
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--blue)", marginBottom: 8 }}>For</div>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.88rem", marginBottom: 20 }}>Athletes returning from injury, transitioning back into performance, or with sport-specific testing as part of a managed pathway.</div>
              <div style={{ fontFamily: "var(--font-bebas)", fontSize: "3rem", color: "#fff", letterSpacing: "0.02em", lineHeight: 1 }}>
                Athlete Performance
              </div>
              <div style={{ marginTop: 4, marginBottom: 28 }}>
                <span style={{ fontSize: "2rem", fontWeight: 800, color: "var(--blue)" }}>$145</span>
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem" }}>/week · 6-week blocks</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 10 }}>
                {athleteIncludes.map((item) => (
                  <li key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start", color: "rgba(255,255,255,0.7)", fontSize: "0.88rem", lineHeight: 1.5 }}>
                    <span style={{ color: "var(--blue)", marginTop: 1, flexShrink: 0 }}>✓</span> {item}
                  </li>
                ))}
              </ul>
              <button onClick={openModal} style={{ width: "100%", background: "var(--blue)", color: "#fff", border: "none", padding: "14px", borderRadius: 4, cursor: "pointer", fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: "0.88rem", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                Book a Blueprint Testing Session →
              </button>
            </motion.div>

            {/* S&C Performance */}
            <motion.div
              ref={prog2Ref}
              initial={{ opacity: 0, y: 24 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 16, padding: 36,
              }}
            >
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: 8 }}>For</div>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.88rem", marginBottom: 20 }}>Healthy athletes who want to get stronger, faster, or more resilient. No injury, no managed pathway — just a structured program built around your sport.</div>
              <div style={{ fontFamily: "var(--font-bebas)", fontSize: "3rem", color: "#fff", letterSpacing: "0.02em", lineHeight: 1 }}>
                S&amp;C Performance
              </div>
              <div style={{ marginTop: 4, marginBottom: 28 }}>
                <span style={{ fontSize: "2rem", fontWeight: 800, color: "#fff" }}>$90</span>
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem" }}>/week · 6-week blocks</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 10 }}>
                {scIncludes.map((item) => (
                  <li key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start", color: "rgba(255,255,255,0.7)", fontSize: "0.88rem", lineHeight: 1.5 }}>
                    <span style={{ color: "rgba(255,255,255,0.5)", marginTop: 1, flexShrink: 0 }}>✓</span> {item}
                  </li>
                ))}
              </ul>
              <button onClick={openModal} style={{ width: "100%", background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.25)", padding: "14px", borderRadius: 4, cursor: "pointer", fontFamily: "var(--font-inter)", fontWeight: 700, fontSize: "0.88rem", letterSpacing: "0.04em", textTransform: "uppercase" }}>
                Book a Call →
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ background: "#f6f8fa", padding: "80px var(--px)" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="ey ey-navy" style={{ justifyContent: "center", marginBottom: 12 }}>How it works</div>
            <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(2.5rem, 5vw, 3.8rem)", color: "var(--navy)", letterSpacing: "0.02em", lineHeight: 0.9 }}>
              One session to know exactly<br /><span style={{ color: "var(--blue)" }}>where you stand.</span>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {steps.map((step, i) => (
              <div key={step.n} style={{ display: "grid", gridTemplateColumns: "64px 1fr", gap: 24, paddingBottom: i < steps.length - 1 ? 36 : 0, borderBottom: i < steps.length - 1 ? "1px solid var(--stone)" : "none", marginBottom: i < steps.length - 1 ? 36 : 0 }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.15em", color: "var(--blue)", paddingTop: 4 }}>{step.n}</div>
                <div>
                  <div style={{ fontWeight: 800, color: "var(--navy)", fontSize: "1.05rem", marginBottom: 6 }}>{step.title}</div>
                  <p style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--navy)", padding: "80px var(--px)", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <div className="ey ey-blue" style={{ justifyContent: "center", marginBottom: 16 }}>Ready to start</div>
          <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(2.8rem, 6vw, 5rem)", lineHeight: 0.9, color: "#fff", letterSpacing: "0.02em", marginBottom: 20 }}>
            Find out what is actually<br /><span style={{ color: "var(--blue)" }}>holding you back</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: 32 }}>
            One session. We measure what your sport demands, grade where you currently sit against it, and tell you exactly what is holding you back. Then you decide what to do with that.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://booking.clinic1.com/online-booking/wZet4fM4"
              target="_blank"
              rel="noopener"
              style={{
                background: "#fff", color: "var(--navy)", textDecoration: "none",
                padding: "16px 32px", borderRadius: 2,
                fontFamily: "var(--font-inter)", fontSize: "0.9rem", fontWeight: 700,
                letterSpacing: "0.04em", textTransform: "uppercase",
              }}
            >
              Book a Blueprint Testing Session · $185 →
            </a>
            <button
              onClick={openModal}
              style={{
                background: "transparent", color: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(255,255,255,0.2)", padding: "16px 24px",
                borderRadius: 2, cursor: "pointer",
                fontFamily: "var(--font-inter)", fontSize: "0.88rem", fontWeight: 600,
              }}
            >
              Book a Call
            </button>
            <a href="tel:0483918427" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", padding: "16px 20px", fontSize: "0.88rem" }}>
              Call us: 0483 918 427
            </a>
          </div>
          <p style={{ marginTop: 20, fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)" }}>
            13 Puckle St, Moonee Ponds · Blueprint Testing Session $185
          </p>
        </div>
      </section>

      <Footer />

      <PerformanceModal />
    </>
  );
}
