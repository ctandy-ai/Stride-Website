"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Gym() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
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
      {/* Copy */}
      <div>
        <div className="ey ey-blue">Gym & Group Training</div>
        <h2 className="sh sh-navy" style={{ marginBottom: 24 }}>
          Train smarter.<br /><span className="orange">Recover stronger.</span>
        </h2>
        <p className="bt" style={{ marginBottom: 20 }}>
          Group gym sessions designed for athletes — not generic fitness classes.{" "}
          Every session is supervised by our Athletic Physio and Coach team — clinicians who understand your sport and your body.
        </p>
        <p className="bt" style={{ marginBottom: 16 }}>
          Whether you&apos;re in active rehab or pushing your performance, our gym sessions bridge the gap between the treatment room and the field.
        </p>
        <p className="bt" style={{ marginBottom: 28, padding: "14px 18px", background: "rgba(27,144,245,0.08)", border: "1px solid rgba(27,144,245,0.2)", borderRadius: 8 }}>
          <strong>Already on the Rehab Accelerator or a performance program?</strong> These sessions are included in your weekly fee. Book your spot like everyone else.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
          {[
            { n: "01", title: "Clinician-supervised every session", body: "Not a PT. A physiotherapist who knows your injury history, your sport, and exactly what you should and shouldn\'t be loading." },
            { n: "02", title: "Built for competitive athletes", body: "Sessions are programmed for people with real training goals — not office workers looking to move better." },
            { n: "03", title: "Four athletes per session — book ahead", body: "Access is unlimited. Sessions cap at four athletes so everyone gets coached properly. Book your spot ahead — it\'s included in your weekly fee if you\'re on the Accelerator or a performance program." },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15 + 0.2, duration: 0.5 }}
              style={{
                display: "flex", gap: 20, padding: 20,
                background: "#fff", borderRadius: 12, border: "1px solid var(--stone)",
              }}
            >
              <div style={{ fontFamily: "var(--font-dm-mono)", fontSize: "0.65rem", letterSpacing: "0.1em", color: "var(--blue)", flex: "0 0 28px", paddingTop: 4 }}>
                {card.n}
              </div>
              <div>
                <h4 style={{ fontWeight: 700, color: "var(--navy)", marginBottom: 6, fontSize: "1rem" }}>{card.title}</h4>
                <p style={{ color: "#4A6070", lineHeight: 1.7, fontSize: "0.92rem" }}>{card.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <a
          href="https://booking.clinic1.com/online-booking/wZet4fM4"
          target="_blank" rel="noopener"
          className="btn btn-primary"
          style={{ display: "inline-flex", textDecoration: "none" }}
        >
          Book a Session <span className="arr">→</span>
        </a>
      </div>

      {/* Standalone image card */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{ position: "sticky", top: 100 }}
      >
        <video
          autoPlay muted loop playsInline
          poster="/gym-section.jpg"
          style={{ width: "100%", borderRadius: 16, objectFit: "cover", display: "block", maxHeight: 620 }}
        >
          <source src="/gym-training.mp4" type="video/mp4" />
        </video>
      </motion.div>
    </div>
  );
}
