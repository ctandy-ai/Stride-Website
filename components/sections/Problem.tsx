"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    {
      n: "01",
      title: "No clear timeline or plan",
      body: "You leave every appointment without knowing if you're on track — or what \"on track\" even looks like. That uncertainty makes it impossible to plan when you return, how hard to push, or whether you're heading in the right direction at all.",
    },
    {
      n: "02",
      title: "Generic exercises with no sport context",
      body: "A netball wing attack, a rugby prop and a BJJ competitor all have different demands. Your program should reflect your sport, your position, your training week — it rarely does.",
    },
    {
      n: "03",
      title: '"Stop training" — with no alternative',
      body: "Rest has a role. But full rest prescribed without a path forward doesn't work for a competitive athlete. There is almost always something you can keep doing — and should be.",
    },
  ];

  return (
    <div
      ref={ref}
      id="method"
      style={{
        background: "var(--off)",
        padding: "96px var(--px)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 80,
        maxWidth: 1360,
        margin: "0 auto",
        alignItems: "start",
      }}
    >
      <div>
        <div className="ey ey-blue">The problem</div>
        <h2
          className="sh sh-navy"
          style={{ marginBottom: 24 }}
        >
          Old school physio{" "}
          <span className="orange">wasn&apos;t built</span>{" "}
          for athletes.
        </h2>
        <p className="bt" style={{ marginBottom: 32 }}>
          Weekly check-ins. Generic exercises. <strong>&quot;It depends&quot;</strong> when you ask how long you&apos;ll be out.
          That model was designed for office workers with sore backs — not footballers, court athletes or combat competitors who{" "}
          <strong>can&apos;t play the sport they love.</strong>
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15 + 0.2, duration: 0.5 }}
              style={{
                display: "flex",
                gap: 20,
                padding: "20px",
                background: "#fff",
                borderRadius: 12,
                border: "1px solid var(--stone)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  color: "var(--blue)",
                  flex: "0 0 28px",
                  paddingTop: 4,
                }}
              >
                {card.n}
              </div>
              <div>
                <h4 style={{ fontWeight: 700, color: "var(--navy)", marginBottom: 6, fontSize: "1rem" }}>
                  {card.title}
                </h4>
                <p style={{ color: "#4A6070", lineHeight: 1.7, fontSize: "0.92rem" }}>
                  {card.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{ position: "sticky", top: 100 }}
      >
        <Image
          src="https://assets.cdn.filesafe.space/uGjKGDMcGryVhkZ0uDcj/media/68a65fb5821cc72a3b013e0f.jpeg"
          alt="Stride Sports Physio athlete assessment"
          width={600}
          height={700}
          style={{ width: "100%", height: "auto", borderRadius: 16, objectFit: "cover" }}
          unoptimized
        />
      </motion.div>
    </div>
  );
}
