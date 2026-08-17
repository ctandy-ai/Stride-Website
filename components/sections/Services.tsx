"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // Logos section from original HTML
  return (
    <div ref={ref} style={{ background: "#fff", padding: "48px var(--px)", borderTop: "1px solid var(--stone)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
        <div
          style={{
            fontFamily: "var(--font-dm-mono)",
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--muted)",
            marginBottom: 28,
          }}
        >
          Athletes from these clubs &amp; organisations train with us
        </div>
        <div
          style={{
            display: "flex",
            gap: 32,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {["NRL", "Western Bulldogs", "Essendon FC", "Melbourne Storm", "Victorian Institute of Sport"].map((name, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              style={{
                padding: "10px 20px",
                border: "1px solid var(--stone)",
                borderRadius: 8,
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "var(--muted)",
                letterSpacing: "0.03em",
              }}
            >
              {name}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
