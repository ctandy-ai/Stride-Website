"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const faqs = [
  {
    q: "What is the Rehab Accelerator?",
    a: "The Rehab Accelerator is Stride's all-inclusive sports injury program. It combines weekly 1:1 physiotherapy, a personalised S&C program, gym access, and return-to-sport clearance testing — all for a single weekly fee of $185. Every athlete leaves their first appointment with a written week-by-week plan and a target return date.",
  },
  {
    q: "Who is this for?",
    a: "Any competitive athlete dealing with a sports injury — AFL, netball, rugby, soccer, BJJ, MMA, boxing, wrestling, running, or any other sport. We work with athletes of all levels from amateur to professional.",
  },
  {
    q: "Do I need a referral?",
    a: "No referral is needed for a standard physiotherapy appointment. If you want to use your Medicare EPC (Enhanced Primary Care plan), you'll need a GP referral before your appointment. Private health insurance and HICAPS are available on the day.",
  },
  {
    q: "What's included in the $145 Initial Assessment?",
    a: "A full 45-minute sports injury assessment including movement analysis, sport-specific testing, a written injury diagnosis, week-by-week return program, and a target return date. You'll leave with a complete picture of your injury and a clear plan — not a guess.",
  },
  {
    q: "Can I use private health insurance?",
    a: "Yes. We use HICAPS for on-the-spot private health rebate claiming. Medicare EPC plans are also accepted with a valid GP referral.",
  },
  {
    q: "What if I have a combat sports injury (BJJ, MMA, boxing)?",
    a: "Our Senior Physiotherapist Tom Yeung specialises in combat sport rehabilitation. He has a deep background in combat training and understands the unique demands, culture, and timelines of competitive grappling and striking sports. He's also the founder of Combat Sports Consulting.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div
      ref={ref}
      style={{ background: "var(--off)", padding: "96px var(--px)" }}
    >
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="ey ey-blue" style={{ justifyContent: "center" }}>FAQ</div>
          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: 0.9,
              color: "var(--navy)",
              letterSpacing: "0.02em",
            }}
          >
            Common questions
          </h2>
        </div>

        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            style={{
              borderBottom: "1px solid var(--stone)",
              overflow: "hidden",
            }}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px 0",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                gap: 16,
              }}
            >
              <span style={{ fontWeight: 700, color: "var(--navy)", fontSize: "1.05rem" }}>
                {faq.q}
              </span>
              <span
                style={{
                  fontSize: "1.2rem",
                  color: "var(--blue)",
                  flexShrink: 0,
                  transition: "transform .2s",
                  transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                }}
              >
                +
              </span>
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: "hidden" }}
                >
                  <p style={{ color: "#4A6070", lineHeight: 1.8, paddingBottom: 20, fontSize: "0.95rem" }}>
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
