"use client";

import { useState } from "react";
import BookingModal from "@/components/BookingModal";
import CTA from "@/components/sections/CTA";

export interface InjuryPageProps {
  eyebrow: string;
  injury: string;
  headline: string;
  headlineAccent: string;
  subtext: string;
  problemTitle: string;
  problems: { title: string; body: string }[];
  approach: string;
  timeline: string;
  faqs: { q: string; a: string }[];
}

const STEPS = [
  {
    n: "01",
    title: "First Consult — $145",
    body: "45-minute initial assessment. Full injury history, sport demands, where you are and where you want to get back to.",
  },
  {
    n: "02",
    title: "Deep Dive — $185",
    body: "60-minute hands-on assessment, movement screening, injury-specific testing. Written plan and return-to-sport timeline issued.",
  },
  {
    n: "03",
    title: "Choose your pathway",
    body: "Session by session ($145/consult) or the Rehab Accelerator program ($185/week, all-inclusive with weekly physio, coached gym sessions and direct access).",
  },
  {
    n: "04",
    title: "Execute the plan",
    body: "Progressive, evidence-based rehab built around your sport demands. We track and adjust every step of the way.",
  },
  {
    n: "05",
    title: "Return-to-sport clearance",
    body: "Cleared when the data says you're ready — not when the calendar says so. Objective criteria, not guesswork.",
  },
];

export default function InjuryPageTemplate({
  eyebrow,
  injury,
  headline,
  headlineAccent,
  subtext,
  problems,
  approach,
  timeline,
  faqs,
}: InjuryPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const openModal = () => {
    if (typeof (window as any).openModal === "function")
      (window as any).openModal();
  };

  return (
    <>
      <div style={{ paddingTop: 66 }}>

        {/* ① HERO */}
        <section
          style={{
            background: "var(--navy)",
            padding: "80px var(--px) 64px",
          }}
        >
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div className="ey ey-blue" style={{ marginBottom: 16 }}>
              {eyebrow}
            </div>
            <h1
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(3rem, 7vw, 6rem)",
                lineHeight: 0.9,
                letterSpacing: "0.02em",
                color: "#fff",
                marginBottom: 24,
              }}
            >
              {headline}
              <br />
              <span className="orange">{headlineAccent}</span>
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.65)",
                maxWidth: 640,
                fontSize: "1.1rem",
                lineHeight: 1.7,
                marginBottom: 36,
              }}
            >
              {subtext}
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
              <button className="btn btn-primary" onClick={openModal}>
                Book my assessment →
              </button>
              <a
                href="tel:+61483918427"
                style={{
                  color: "rgba(255,255,255,0.70)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Call 0483 918 427
              </a>
            </div>
          </div>
        </section>

        {/* ② THE PROBLEM */}
        <section style={{ background: "var(--off)", padding: "80px var(--px)" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto" }}>
            <div className="ey ey-blue" style={{ marginBottom: 16 }}>
              What goes wrong
            </div>
            <h2 className="sh sh-navy" style={{ marginBottom: 48, maxWidth: 680 }}>
              What goes wrong with{" "}
              <span className="orange">{injury} rehab</span>
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 24,
              }}
            >
              {problems.map((card, i) => (
                <div
                  key={i}
                  style={{
                    background: "#fff",
                    border: "1px solid var(--stone)",
                    borderRadius: 12,
                    padding: "28px 24px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-dm-mono)",
                      fontSize: "0.58rem",
                      letterSpacing: "0.18em",
                      color: "var(--blue)",
                      marginBottom: 10,
                    }}
                  >
                    0{i + 1}
                  </div>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--navy)",
                      marginBottom: 10,
                    }}
                  >
                    {card.title}
                  </h3>
                  <p style={{ fontSize: "0.92rem", lineHeight: 1.7, color: "#4A6070" }}>
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ③ THE STRIDE APPROACH */}
        <section style={{ background: "#fff", padding: "80px var(--px)" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto" }}>
            <div className="ey ey-blue" style={{ marginBottom: 16 }}>
              The Stride approach
            </div>
            <h2 className="sh sh-navy" style={{ marginBottom: 24, maxWidth: 680 }}>
              How we manage{" "}
              <span className="orange">{injury} injuries</span>
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "#4A6070",
                maxWidth: 700,
                marginBottom: 52,
              }}
            >
              {approach}
            </p>

            {/* 5-step process */}
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {STEPS.map((step, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 24,
                    position: "relative",
                    paddingBottom: i < STEPS.length - 1 ? 28 : 0,
                  }}
                >
                  {/* connector line */}
                  {i < STEPS.length - 1 && (
                    <div
                      style={{
                        position: "absolute",
                        left: 16,
                        top: 36,
                        bottom: 0,
                        width: 1,
                        background: "var(--stone)",
                      }}
                    />
                  )}
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      background: "var(--navy)",
                      color: "#fff",
                      fontFamily: "var(--font-dm-mono)",
                      fontSize: "0.72rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      borderRadius: 4,
                      marginTop: 2,
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        color: "var(--navy)",
                        fontSize: "0.98rem",
                        marginBottom: 4,
                      }}
                    >
                      {step.title}
                    </div>
                    <div
                      style={{
                        fontSize: "0.88rem",
                        color: "#4A6070",
                        lineHeight: 1.65,
                      }}
                    >
                      {step.body}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ④ TIMELINE */}
        <section
          style={{
            background: "var(--navy)",
            padding: "64px var(--px)",
          }}
        >
          <div style={{ maxWidth: 1080, margin: "0 auto" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 28,
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  fontSize: "0.62rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--blue)",
                  flexShrink: 0,
                }}
              >
                Realistic timeline
              </div>
              <div
                style={{
                  width: 1,
                  height: 32,
                  background: "rgba(255,255,255,0.12)",
                  flexShrink: 0,
                }}
              />
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.65)",
                  margin: 0,
                }}
              >
                {timeline}
              </p>
            </div>
          </div>
        </section>

        {/* ⑤ PRICING */}
        <section style={{ background: "var(--off)", padding: "80px var(--px)" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto" }}>
            <div className="ey ey-blue" style={{ marginBottom: 16 }}>
              Your first step
            </div>
            <h2 className="sh sh-navy" style={{ marginBottom: 48, maxWidth: 680 }}>
              Two sessions.{" "}
              <span className="orange">A complete picture.</span>
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 24,
                marginBottom: 24,
              }}
            >
              {[
                {
                  label: "Session 1",
                  price: "$145",
                  body: "45-minute first consult. Full injury history, sport demands, where you are and where you want to get back to.",
                },
                {
                  label: "Session 2",
                  price: "$185",
                  body: `60-minute deep dive. Hands-on assessment, movement screening, ${injury.toLowerCase()}-specific testing. Written plan and return-to-sport timeline issued.`,
                },
              ].map((card, i) => (
                <div
                  key={i}
                  style={{
                    background: "#fff",
                    border: "1px solid var(--stone)",
                    borderTop: "3px solid var(--blue)",
                    borderRadius: 10,
                    padding: "28px 24px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-bebas)",
                      fontSize: "1.4rem",
                      color: "var(--navy)",
                      lineHeight: 1,
                      marginBottom: 4,
                    }}
                  >
                    {card.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-bebas)",
                      fontSize: "3rem",
                      color: "var(--blue)",
                      lineHeight: 1,
                      marginBottom: 4,
                    }}
                  >
                    {card.price}
                  </div>
                  <p
                    style={{
                      fontSize: "0.90rem",
                      lineHeight: 1.72,
                      color: "#4A6070",
                      borderTop: "1px solid var(--stone)",
                      paddingTop: 14,
                    }}
                  >
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
            <p
              style={{
                fontSize: "0.88rem",
                color: "#4A6070",
                lineHeight: 1.65,
                marginBottom: 28,
              }}
            >
              After both sessions, you choose your pathway — session by session
              ($145/consult) or the Rehab Accelerator program ($185/week,
              all-inclusive).
            </p>
            <button className="btn btn-primary" onClick={openModal}>
              Book my assessment →
            </button>
            <p
              style={{
                marginTop: 14,
                fontSize: "0.80rem",
                color: "#4A6070",
              }}
            >
              HICAPS on day · Private health claimable · Medicare EPC accepted
            </p>
          </div>
        </section>

        {/* ⑥ FAQ */}
        <section style={{ background: "var(--navy)", padding: "80px var(--px)" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <div className="ey ey-blue" style={{ marginBottom: 16 }}>
              Common questions
            </div>
            <h2
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(2.4rem, 4vw, 4rem)",
                lineHeight: 1,
                color: "#fff",
                marginBottom: 48,
              }}
            >
              {injury} Rehab{" "}
              <span className="orange">FAQ</span>
            </h2>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.10)" }}>
              {faqs.map((item, i) => (
                <div
                  key={i}
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.10)" }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "22px 0",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 16,
                      fontFamily: "inherit",
                      fontSize: "1.0rem",
                      fontWeight: 600,
                      color: openFaq === i ? "var(--blue)" : "#fff",
                      lineHeight: 1.45,
                      transition: "color 0.2s",
                    }}
                  >
                    {item.q}
                    <span
                      style={{
                        fontSize: "1.3rem",
                        color: "var(--blue)",
                        flexShrink: 0,
                        lineHeight: 1,
                        transform: openFaq === i ? "rotate(45deg)" : "none",
                        transition: "transform 0.25s",
                      }}
                    >
                      +
                    </span>
                  </button>
                  <div
                    style={{
                      maxHeight: openFaq === i ? 400 : 0,
                      overflow: "hidden",
                      transition: "max-height 0.35s ease",
                    }}
                  >
                    <p
                      style={{
                        padding: "0 0 22px",
                        fontSize: "0.97rem",
                        lineHeight: 1.82,
                        color: "rgba(255,255,255,0.55)",
                      }}
                    >
                      {item.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div style={{ marginTop: 48, textAlign: "center" }}>
              <button className="btn btn-primary" onClick={openModal}>
                Book Initial Assessment →
              </button>
              <p
                style={{
                  marginTop: 14,
                  fontSize: "0.80rem",
                  color: "rgba(255,255,255,0.38)",
                }}
              >
                13 Puckle St, Moonee Ponds · Initial Assessment from $145
              </p>
            </div>
          </div>
        </section>

        {/* ⑦ CTA */}
        <CTA />

        <BookingModal />
      </div>
    </>
  );
}
