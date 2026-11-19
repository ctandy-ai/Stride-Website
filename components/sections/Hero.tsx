"use client";

import { motion } from "framer-motion";
import { fireGtag, CONV } from "@/lib/conversions";

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
        paddingTop: 66,
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
        {/* Proof line */}
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
            marginBottom: 16,
            lineHeight: 1.65,
          }}
        >
          AFL &nbsp;·&nbsp; Netball &nbsp;·&nbsp; Soccer &nbsp;·&nbsp; Rugby &nbsp;·&nbsp; Basketball &nbsp;·&nbsp; Running &nbsp;·&nbsp; BJJ &nbsp;·&nbsp; MMA &nbsp;·&nbsp; Boxing
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.17, duration: 0.6 }}
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(3.5rem, 8vw, 7rem)",
            lineHeight: 0.9,
            letterSpacing: "0.02em",
            color: "#fff",
            marginBottom: 20,
          }}
        >
          Know Exactly
          <br />
          <span style={{ WebkitTextStroke: "2px #fff", color: "transparent" }}>
            Where You Stand.
          </span>
        </motion.h1>

        {/* Subline — §5.1 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.29, duration: 0.6 }}
          style={{
            color: "rgba(255,255,255,0.72)",
            fontSize: "1.05rem",
            lineHeight: 1.65,
            marginBottom: 28,
            maxWidth: 480,
          }}
        >
          Sports physio in Moonee Ponds. We check where it hurts and what you&apos;ve been doing, so you know what&apos;s wrong and what to change.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.41, duration: 0.6 }}
          className="hero-ctas"
          style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10, width: "100%", maxWidth: 420 }}
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
            Book my assessment — $145 →
          </button>

          {/* Button subline */}
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.72rem", lineHeight: 1.5, margin: 0, maxWidth: 380 }}>
            No referral needed &nbsp;·&nbsp; Private health claimable &nbsp;·&nbsp; Same-week appointments usually available
          </p>

          {/* Secondary — text link */}
          <button
            onClick={openQuizModal}
            style={{
              background: "none", border: "none", padding: 0,
              color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", fontWeight: 500,
              cursor: "pointer", textAlign: "left", textDecoration: "underline",
              textDecorationColor: "rgba(255,255,255,0.3)",
            }}
          >
            Not sure what you&apos;re dealing with? 2-minute self-check →
          </button>

          {/* Tertiary — Sunday clinic text link */}
          <a
            href="/acute-sports-injury-clinic"
            style={{
              color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", fontWeight: 500,
              textDecoration: "underline", textDecorationColor: "rgba(255,255,255,0.25)",
            }}
          >
            Hurt on the weekend? Sunday clinic, 9am–2pm →
          </a>
        </motion.div>

        {/* Address note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.53, duration: 0.6 }}
          style={{ marginTop: 24, fontSize: "0.8rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.6 }}
        >
          13 Puckle St, Moonee Ponds
          &nbsp;·&nbsp; Mon–Fri 7:30am–7:30pm &nbsp;·&nbsp; Sat 7:30am–1pm &nbsp;·&nbsp; Sun 9am–2pm (Acute Clinic)
        </motion.div>
      </div>
    </section>
  );
}
