"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const logos = [
  { src: "/logos/melbourne-storm.svg", alt: "Melbourne Storm NRL", width: 120, height: 56 },
  { src: "/logos/nrl.svg",             alt: "NRL",                  width: 80,  height: 56 },
  { src: "/logos/essendon.png",        alt: "Essendon FC",          width: 52,  height: 56 },
  { src: "/logos/bulldogs.svg",        alt: "Western Bulldogs",     width: 56,  height: 56 },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} style={{ background: "#fff", padding: "40px var(--px)", borderTop: "1px solid var(--stone)" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
        <div style={{
          fontFamily: "var(--font-dm-mono)",
          fontSize: "0.6rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--muted)",
          marginBottom: 28,
        }}>
          Our director&apos;s career — clubs and organisations he has worked with as a practitioner
        </div>
        <div style={{
          display: "flex",
          gap: 48,
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}>
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              style={{ display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.7, filter: "grayscale(30%)", transition: "opacity 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                style={{ width: "auto", height: logo.height, objectFit: "contain" }}
                unoptimized
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
