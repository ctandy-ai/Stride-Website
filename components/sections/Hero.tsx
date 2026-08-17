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
        paddingTop: 66, /* clear fixed nav */
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
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", zIndex: 0, filter: "blur(0.8px)" }}
      >
        <source src="/hero-loop.webm" type="video/webm" />
        <source src="/hero-loop.mp4" type="video/mp4" />
      </video>

      <div
        className="hero-inner-content"
        style={{
          position: "relative",
          zIndex: 5,
          padding: "0 var(--px) 56px",
          maxWidth: "min(680px, 55vw)",
          width: "100%",
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
Getting sports injury management right the first time.
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
          Know Exactly
          <br />
          <span
            style={{
              WebkitTextStroke: "2px #fff",
              color: "transparent",
            }}
          >
            Where You Stand.
          </span>
        </motion.h1>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.41, duration: 0.6 }}
          className="hero-ctas"
          style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10, width: "100%", maxWidth: 380 }}
        >
          {/* Primary */}
          <button
            onClick={openModal}
            style={{
              width: "100%", background: "var(--blue)", color: "#fff",
              border: "none", borderRadius: 4, padding: "16px 28px",
              fontFamily: "var(--font-inter)", fontWeight: 700,
              fontSize: "0.9rem", letterSpacing: "0.04em", textTransform: "uppercase",
              cursor: "pointer", textAlign: "left",
            }}
          >
            Book my assessment →
          </button>

          {/* Secondary */}
          <button
            onClick={openQuizModal}
            style={{
              width: "100%", background: "#fff", color: "var(--navy)",
              border: "none", borderRadius: 4, padding: "16px 28px",
              fontFamily: "var(--font-inter)", fontWeight: 700,
              fontSize: "0.9rem", letterSpacing: "0.04em", textTransform: "uppercase",
              cursor: "pointer", textAlign: "left",
            }}
          >
            Free injury self-check →
          </button>

          {/* Tertiary */}
          <a
            href="https://booking.clinic1.com/online-booking/qPzrwR2A"
            target="_blank" rel="noopener"
            style={{
              display: "block", width: "100%",
              background: "transparent",
              border: "1.5px solid rgba(255,255,255,0.3)",
              color: "rgba(255,255,255,0.75)",
              borderRadius: 4, padding: "15px 28px",
              fontFamily: "var(--font-inter)", fontWeight: 600,
              fontSize: "0.9rem", letterSpacing: "0.04em", textTransform: "uppercase",
              textDecoration: "none", textAlign: "left", boxSizing: "border-box",
            }}
          >
            Existing client →
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
