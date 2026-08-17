"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const openModal = () => {
    if (typeof (window as any).openModal === "function") {
      (window as any).openModal();
    }
  };
  const openQuizModal = () => {
    if (typeof (window as any).openQuizModal === "function") {
      (window as any).openQuizModal();
    }
  };

  const words = ["Return", "Faster."];
  const strokeWords = ["Return", "Stronger."];

  return (
    <section
      className="hero"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: 640,
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(9,20,33,0.97) 0%, rgba(9,20,33,0.78) 35%, rgba(9,20,33,0.28) 65%, transparent 100%), linear-gradient(to right, rgba(9,20,33,0.88) 0%, rgba(9,20,33,0.50) 45%, transparent 78%)",
          zIndex: 1,
        }}
      />
      {/* Background video placeholder - dark background */}
      <div style={{ position: "absolute", inset: 0, background: "var(--navy)", zIndex: 0 }} />

      <div
        style={{
          position: "relative",
          zIndex: 5,
          padding: "0 var(--px) 56px",
          maxWidth: "min(680px, 55vw)",
        }}
      >
        {/* Sports list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.6 }}
          style={{
            fontFamily: "var(--font-dm-mono)",
            fontSize: "0.72rem",
            letterSpacing: "0.11em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.55)",
            marginBottom: 12,
            lineHeight: 1.65,
          }}
        >
          AFL &nbsp;·&nbsp; Netball &nbsp;·&nbsp; Rugby &nbsp;·&nbsp; Soccer &nbsp;·&nbsp;
          BJJ &nbsp;·&nbsp; MMA &nbsp;·&nbsp; Boxing &nbsp;·&nbsp; Wrestling
        </motion.div>

        {/* Motto bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.17, duration: 0.6 }}
          style={{
            marginBottom: 18,
            marginLeft: "calc(-1 * var(--px))",
            paddingLeft: "var(--px)",
            paddingRight: 24,
            background: "var(--blue)",
            paddingTop: 10,
            paddingBottom: 10,
            display: "inline-block",
          }}
        >
          <span
            style={{
              color: "#fff",
              fontWeight: 700,
              letterSpacing: "0.01em",
              fontSize: "0.92rem",
              textTransform: "uppercase",
            }}
          >
            We Get Sports Injury Management Right the First Time.
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.29, duration: 0.6 }}
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(3.5rem, 8vw, 7rem)",
            lineHeight: 0.9,
            letterSpacing: "0.02em",
            color: "#fff",
            marginBottom: 28,
          }}
        >
          Return Faster.<br />
          <span
            style={{
              WebkitTextStroke: "2px #fff",
              color: "transparent",
            }}
          >
            Return Stronger.
          </span>
        </motion.h1>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.41, duration: 0.6 }}
          style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 12 }}
        >
          {/* Quiz lead */}
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.16)",
              borderRadius: 12,
              padding: "14px 20px",
              marginBottom: 4,
            }}
          >
            <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.88rem", marginBottom: 10 }}>
              Not sure if you&apos;re ready to return?
            </div>
            <button
              onClick={openQuizModal}
              style={{
                background: "var(--blue)",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "12px 20px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <span style={{ fontWeight: 700, fontSize: "0.82rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                FREE INJURY SELF-CHECK
              </span>
              <span style={{ fontSize: "0.85rem", fontWeight: 400, marginTop: 2 }}>
                Find out in 60 seconds →
              </span>
            </button>
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", marginTop: 8 }}>
              60 sec &nbsp;·&nbsp; No booking needed &nbsp;·&nbsp; Instant score
            </div>
          </div>

          <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8rem" }}>or</div>
          <button
            className="btn btn-ghost"
            onClick={openModal}
          >
            Book my assessment <span className="arr">→</span>
          </button>
          <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8rem" }}>existing patient?</div>
          <a
            href="https://booking.clinic1.com/online-booking/qPzrwR2A"
            target="_blank"
            rel="noopener"
            style={{
              background: "transparent",
              border: "1.5px solid rgba(104,180,255,.5)",
              color: "#68b4ff",
              padding: "11px 22px",
              borderRadius: 8,
              fontWeight: 600,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: "0.95rem",
            }}
          >
            Existing Client — Book Appointment <span style={{ color: "#68b4ff" }}>→</span>
          </a>
        </motion.div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.53, duration: 0.6 }}
          style={{
            marginTop: 24,
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.4)",
            lineHeight: 1.6,
          }}
        >
          <strong style={{ color: "rgba(255,255,255,0.6)" }}>Melbourne Sports Physio & Performance</strong>
          &nbsp;·&nbsp; 13 Puckle St, Moonee Ponds
          &nbsp;·&nbsp; Mon–Fri 7:30am–7:30pm &nbsp;·&nbsp; Sat 7:30am–1pm
        </motion.div>
      </div>
    </section>
  );
}
