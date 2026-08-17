"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function ACLRehab() {
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
        direction: "rtl",
      }}
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={{ position: "relative", overflow: "hidden", direction: "ltr" }}
      >
        <Image
          src="https://assets.cdn.filesafe.space/uGjKGDMcGryVhkZ0uDcj/media/68a662752e6d103fe5fda2e9.jpeg"
          alt="Prepared to Play ACL Rehabilitation Program — Stride Sports Physio"
          fill
          style={{ objectFit: "cover" }}
          unoptimized
        />
      </motion.div>

      {/* Copy */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.7 }}
        style={{
          padding: "80px var(--px)",
          background: "var(--navy)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          direction: "ltr",
        }}
      >
        <div className="ey ey-blue">ACL Specialists</div>
        <h2
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            lineHeight: 0.9,
            letterSpacing: "0.02em",
            color: "#fff",
            marginBottom: 20,
          }}
        >
          Prepared to Play<br /><span className="orange">ACL Program.</span>
        </h2>
        <p className="bt-inv" style={{ marginBottom: 18 }}>
          ACL rehabilitation is the most complex, highest-stakes injury in sport.{" "}
          ACL rehab done without objective clearance testing carries significant re-injury risk. Done right — with structured, gate-by-gate testing — athletes return with data to prove they're ready.
        </p>
        <p className="bt-inv" style={{ marginBottom: 22 }}>
          Our ACL pathway, Prepared to Play, was developed by our director Chris Tandy —
          AI-powered injury analysis and movement profiling to build a personalised, evidence-based pathway from surgery to full return-to-play clearance.
        </p>
        <ul className="cklist cklist-inv" style={{ marginBottom: 28 }}>
          {[
            "Phase-by-phase return-to-sport milestones — no guessing",
            "Objective movement testing at each clearance gate",
            "Individualised S&C programming updated weekly",
            "Return-to-play confirmation backed by biomechanical data",
          ].map((item, i) => (
            <li key={i}><span className="ck">✓</span>{item}</li>
          ))}
        </ul>
        <button className="btn btn-primary" onClick={openModal} style={{ alignSelf: "flex-start" }}>
          Ask about ACL rehab <span className="arr">→</span>
        </button>
      </motion.div>
    </div>
  );
}
