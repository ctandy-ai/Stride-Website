"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Gym() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const openModal = () => {
    if (typeof (window as any).openModal === "function") (window as any).openModal();
  };

  return (
    <div
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight: 600,
      }}
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={{ position: "relative", overflow: "hidden" }}
      >
        <Image
          src="https://assets.cdn.filesafe.space/uGjKGDMcGryVhkZ0uDcj/media/68a662752e6d103fe5fda2e9.jpeg"
          alt="Supervised rehab gym and group training sessions — Stride Sports Physio Melbourne"
          fill
          style={{ objectFit: "cover" }}
          unoptimized
        />
      </motion.div>

      {/* Copy */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.7 }}
        style={{
          padding: "80px var(--px)",
          background: "var(--off)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div className="ey ey-blue">Gym & Group Training</div>
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
        <ul className="cklist" style={{ marginBottom: 28 }}>
          {[
            "Group sessions for competitive athletes of all levels",
            "Supervised rehab gym — clinician-guided every session",
            "Led by Chris Tandy & Tom Yeung — 11+ years elite sport experience",
            "Limited spots — book online to secure your place",
          ].map((item, i) => (
            <li key={i}>
              <span className="ck">✓</span>
              {item}
            </li>
          ))}
        </ul>
        <a
          href="https://booking.clinic1.com/online-booking/wZet4fM4"
          className="btn btn-primary"
          target="_blank"
          rel="noopener"
          style={{ display: "inline-flex", textDecoration: "none" }}
        >
          Book a Session <span className="arr">→</span>
        </a>
      </motion.div>
    </div>
  );
}
