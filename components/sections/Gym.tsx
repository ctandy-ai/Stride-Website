"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Gym() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} style={{ background: "var(--off)", padding: "80px var(--px)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Copy */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", marginBottom: 48 }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="ey ey-blue" style={{ marginBottom: 16 }}>Gym & Group Training</div>
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
              Train smarter.<br /><span className="orange">Recover stronger.</span>
            </h2>
            <p className="bt" style={{ marginBottom: 18 }}>
              Group gym sessions designed for athletes — not generic fitness classes.{" "}
              <strong>Led by Chris Tandy and Tom Yeung</strong>, every session is supervised by clinicians who understand your sport and your body.
            </p>
            <p className="bt" style={{ marginBottom: 22 }}>
              Whether you&apos;re in active rehab or pushing your performance, our gym sessions bridge the gap between the treatment room and the field. Book online — spots are limited.
            </p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="cklist"
            style={{ marginBottom: 0 }}
          >
            {[
              "Group sessions for competitive athletes of all levels",
              "Supervised rehab gym — clinician-guided every session",
              "Led by Chris Tandy & Tom Yeung — 11+ years elite sport experience",
              "Limited spots — book online to secure your place",
            ].map((item, i) => (
              <li key={i} style={{ marginBottom: 12 }}>
                <span className="ck">✓</span>{item}
              </li>
            ))}
            <li style={{ marginTop: 24, listStyle: "none" }}>
              <a
                href="https://booking.clinic1.com/online-booking/wZet4fM4"
                target="_blank"
                rel="noopener"
                className="btn btn-primary"
                style={{ display: "inline-flex", textDecoration: "none" }}
              >
                Book a Session <span className="arr">→</span>
              </a>
            </li>
          </motion.ul>
        </div>

        {/* Standalone image block */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            borderRadius: 16,
            overflow: "hidden",
            height: 480,
            background: "var(--navy-light)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid var(--stone)",
            position: "relative",
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/gym-training-landscape.jpg"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
          >
            <source src="/gym-training.mp4" type="video/mp4" />
          </video>
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            background: "linear-gradient(to top, rgba(9,20,33,0.7) 0%, transparent 60%)",
            padding: "32px 28px 24px",
          }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>
              Moonee Ponds · Clinician-supervised every session
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
