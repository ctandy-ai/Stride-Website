"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} style={{ background: "#fff", padding: "40px var(--px)", borderTop: "1px solid var(--stone)" }}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}
      >
        <p style={{
          fontFamily: "var(--font-dm-mono)",
          fontSize: "0.72rem",
          letterSpacing: "0.08em",
          color: "var(--muted)",
          lineHeight: 1.7,
          margin: 0,
        }}>
          Our team, past and present, has worked with Melbourne Storm (NRL), Essendon FC&apos;s VFL program and the Western Bulldogs.
        </p>
      </motion.div>
    </div>
  );
}
