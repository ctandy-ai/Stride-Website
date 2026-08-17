"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ACLRehab() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const openModal = () => {
    if (typeof (window as any).openModal === "function") (window as any).openModal();
  };

  return (
    <div ref={ref} style={{ background: "var(--navy)", padding: "80px var(--px)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Copy */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", marginBottom: 48 }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="ey ey-blue" style={{ marginBottom: 16 }}>ACL Specialists</div>
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
              ACL rehab done without objective clearance testing carries significant re-injury risk. Done right — with structured, gate-by-gate testing — athletes return with data to prove they&apos;re ready.
            </p>
            <p className="bt-inv" style={{ marginBottom: 22 }}>
              Our ACL pathway, Prepared to Play, was developed by our director Chris Tandy —
              AI-powered injury analysis and movement profiling to build a personalised, evidence-based pathway from surgery to full return-to-play clearance.
            </p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="cklist cklist-inv"
            style={{ marginBottom: 0 }}
          >
            {[
              "Phase-by-phase return-to-sport milestones — no guessing",
              "Objective movement testing at each clearance gate",
              "Individualised S&C programming updated weekly",
              "Return-to-play confirmation backed by biomechanical data",
            ].map((item, i) => (
              <li key={i} style={{ marginBottom: 12 }}>
                <span className="ck">✓</span>{item}
              </li>
            ))}
            <li style={{ marginTop: 24, listStyle: "none" }}>
              <button className="btn btn-primary" onClick={openModal} style={{ alignSelf: "flex-start" }}>
                Ask about ACL rehab <span className="arr">→</span>
              </button>
            </li>
          </motion.ul>
        </div>

        {/* ACL performance video — standalone block */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            borderRadius: 16,
            overflow: "hidden",
            position: "relative",
            border: "1px solid rgba(255,255,255,0.08)",
            background: "#000",
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{ width: "100%", display: "block", maxHeight: 520, objectFit: "cover" }}
          >
            <source src="/acl-hop-test.mp4" type="video/mp4" />
          </video>
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            background: "linear-gradient(to top, rgba(9,20,33,0.85) 0%, transparent 60%)",
            padding: "32px 28px 24px",
          }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>
              Single-leg hop testing · Objective return-to-sport clearance · Prepared to Play
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
