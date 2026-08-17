"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 40;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const stats = [
    { num: 2000, suffix: "+", label: "Athletes\nCoached" },
    { num: 25, suffix: "+", label: "Professional\nAthletes" },
    { num: 15, suffix: "", label: "Years Combined\nPro Sport Exp." },
  ];

  return (
    <div
      ref={ref}
      style={{
        background: "var(--navy)",
        padding: "48px var(--px)",
      }}
    >
      <div
        className="stats-grid"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          gap: 48,
          alignItems: "center",
        }}
      >
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div
            style={{
              fontFamily: "var(--font-dm-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--blue)",
              marginBottom: 8,
            }}
          >
            Performance is for all of us.
          </div>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.95rem", lineHeight: 1.7 }}>
            Comprehensive coaching, team support, and science-backed tools to enhance every facet of sport and life for those we serve.
          </p>
        </motion.div>

        {/* Divider */}
        <div style={{ width: 1, height: 80, background: "rgba(255,255,255,0.12)" }} />

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: "flex", gap: 40, justifyContent: "flex-end" }}
        >
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                  lineHeight: 1,
                  color: "#fff",
                  letterSpacing: "0.02em",
                }}
              >
                <CountUp target={s.num} suffix={s.suffix} />
              </div>
              <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.72rem", lineHeight: 1.5, marginTop: 6, whiteSpace: "pre-line" }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
