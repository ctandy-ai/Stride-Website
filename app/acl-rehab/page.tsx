"use client";

import { useState } from "react";
import type { Metadata } from "next";
import BookingModal from "@/components/BookingModal";
import CTA from "@/components/sections/CTA";

/* ─── NOTE: metadata must be in a server component.
   This file is "use client" so we duplicate the metadata below
   in a generateMetadata export — BUT since "use client" pages can't
   export metadata, create the metadata in the layout or use a wrapper.
   Instead: keep this as a client component and export the metadata
   from a sibling server layout. For now, define title/description via
   next/head approach inside the component using a side-effect, which
   is acceptable for CSR pages. The metadata export is handled by the
   parent layout title template.

   Actually, let's do this the correct Next.js way:
   We need a server wrapper. But since the task says to write a single
   page.tsx with no dependency on ACLRehab component, we'll structure it
   as a client component (for interactivity) and export metadata via a
   special pattern. In Next.js App Router, you cannot export metadata from
   a "use client" file. The solution is to NOT use "use client" at the
   top level but instead extract interactive sub-components.
   
   We'll keep the page as a server component and extract client-only bits.
   ─── */

/* ─── Data ───────────────────────────────── */

const phases = [
  {
    n: "01",
    title: "Phase 1 — Protection & Swelling Control",
    body: "Weeks 1–6 post-surgery. Goal: full extension, quad activation, reduce effusion. Criteria to advance: single-leg press symmetry >60%, no significant effusion.",
  },
  {
    n: "02",
    title: "Phase 2 — Strength Foundation",
    body: "Weeks 6–16. Goal: rebuild quad and hamstring strength through progressive loading. Key: no pain with loading, full ROM. We track LSI (Limb Symmetry Index) every session.",
  },
  {
    n: "03",
    title: "Phase 3 — Movement & Power",
    body: "Months 4–7. Plyometrics introduced. Running programme begins. Criteria: LSI >80% on single-leg press, pain-free jogging, no swelling post-activity.",
  },
  {
    n: "04",
    title: "Phase 4 — Sport-Specific Loading",
    body: "Months 7–10. Return to sport training, full agility work, position-specific demands. Criteria: LSI >90%, hop test symmetry >90%.",
  },
  {
    n: "05",
    title: "Phase 5 — Return-to-Sport Clearance",
    body: "Months 9–12+. Full clearance only when objective criteria met: LSI >90%, single-leg hop >90% symmetry, sport-specific movement testing, psychological readiness.",
  },
];

const testCards = [
  {
    title: "Single-Leg Hop Testing",
    body: "Distance, triple hop, crossover hop, 6-metre timed hop. Symmetry scored against your unaffected leg. 90%+ required for clearance.",
  },
  {
    title: "Quad & Hamstring Strength (LSI)",
    body: "Limb Symmetry Index measures the strength of your operated leg as a percentage of your unaffected leg. We target >90% before any return-to-sport activities.",
  },
  {
    title: "Movement Screening",
    body: "Cutting, deceleration, change of direction — assessed and scored against sport-specific benchmarks. We test what your sport actually demands.",
  },
  {
    title: "Psychological Readiness",
    body: "ACL Readiness Scale (ACL-RSI) administered at key milestones. Mental readiness to return is as important as physical readiness.",
  },
];

const faqs = [
  {
    q: "Do I need surgery?",
    a: "Not always. Partial tears and some complete tears in lower-demand athletes can be managed conservatively. Our assessment will give you an honest recommendation based on your injury, sport, and goals — not a default surgical pathway.",
  },
  {
    q: "How long until I can return to sport?",
    a: "9–12 months post-surgery for most athletes. Conservative (non-surgical) management is typically 6–9 months. Timeline depends on how quickly you meet the criteria at each phase gate.",
  },
  {
    q: "What's the difference between your program and standard physio?",
    a: "Standard physio typically clears athletes on a calendar date. We clear by criteria — strength symmetry >90%, hop test scores, movement screening. You don't advance until the data says you're ready.",
  },
  {
    q: "Can I still train while rehabbing my ACL?",
    a: "Yes. The Rehab Accelerator program keeps you training throughout your recovery — we just change what and how. Maintaining fitness, strength in unaffected areas, and psychological readiness is part of the program.",
  },
  {
    q: "Do you work with athletes post-surgery or pre-surgery?",
    a: "Both. Pre-surgery 'prehab' improves outcomes significantly. We can start your program before surgery and transition seamlessly into the post-surgical pathway.",
  },
  {
    q: "Is the cost covered by private health insurance?",
    a: "Yes — physio sessions are claimable under extras cover. HICAPS available on the day. Medicare EPC referrals also accepted. Sports insurance through your club/association may also contribute — ask us at your first session.",
  },
];

/* ─── Client component ───────────────────── */

export default function ACLRehabPage() {
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
              ACL Rehabilitation · Moonee Ponds, Melbourne
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
              ACL Rehab Done Right.
              <br />
              <span className="orange">Back on your terms.</span>
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
              The global average ACL re-injury rate is 20%. Ours is built to be
              a fraction of that — because we don&apos;t clear you on a calendar
              date. We clear you when the data says you&apos;re ready.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
              <button className="btn btn-primary" onClick={openModal}>
                Book Initial Assessment →
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

            {/* Stats strip */}
            <div
              style={{
                display: "flex",
                gap: 0,
                marginTop: 56,
                borderTop: "1px solid rgba(255,255,255,0.10)",
                flexWrap: "wrap",
              }}
            >
              {[
                { val: "20%", label: "Global ACL re-injury rate" },
                { val: "9–12 months", label: "Typical return post-surgery" },
                { val: "Criteria-based", label: "How we clear athletes — not calendar-based" },
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    flex: "1 1 200px",
                    padding: "28px 24px 0",
                    borderRight: i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-bebas)",
                      fontSize: "2.4rem",
                      color: "var(--blue)",
                      lineHeight: 1,
                      marginBottom: 6,
                    }}
                  >
                    {stat.val}
                  </div>
                  <div
                    style={{
                      fontSize: "0.82rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.5,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
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
              Most ACL rehab fails{" "}
              <span className="orange">at the last 10%.</span>
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 24,
              }}
            >
              {[
                {
                  title: "Calendar-based clearance",
                  body: "You're told 9 months and cleared. But 9 months doesn't mean your quads are at 90% symmetry or your hop scores are sport-ready. Calendar dates don't prevent re-injury. Data does.",
                },
                {
                  title: "No sport-specific testing",
                  body: "Standard rehab doesn't test what your sport actually demands. A footballer's knee needs to handle cutting, acceleration and contact — not just walk up stairs without pain.",
                },
                {
                  title: "No S&C integration",
                  body: "Physio and strength work stay separate. You're rehabbing the injury, but not rebuilding the athlete. You return to sport smaller, slower and less prepared than you were before.",
                },
              ].map((card, i) => (
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

        {/* ③ THE STRIDE APPROACH — PHASES */}
        <section style={{ background: "var(--navy)", padding: "80px var(--px)" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto" }}>
            <div className="ey ey-blue" style={{ marginBottom: 16 }}>
              The Prepared to Play pathway
            </div>
            <h2
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(2.4rem, 4vw, 4rem)",
                lineHeight: 1,
                color: "#fff",
                marginBottom: 24,
              }}
            >
              Phase by phase.{" "}
              <span className="orange">Gate by gate.</span>
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.62)",
                maxWidth: 700,
                fontSize: "1.05rem",
                lineHeight: 1.8,
                marginBottom: 52,
              }}
            >
              Our ACL pathway was developed by Chris Tandy, who spent 11 years
              embedded at Melbourne Storm NRL — managing ACL surgeries at the
              highest level in Australian rugby league. That methodology now
              drives every ACL program we run.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {phases.map((phase, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 24,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 10,
                    padding: "24px 28px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-bebas)",
                      fontSize: "2.8rem",
                      color: "rgba(27,144,245,0.25)",
                      lineHeight: 1,
                      flexShrink: 0,
                      width: 48,
                    }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "#fff",
                        marginBottom: 8,
                      }}
                    >
                      {phase.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.92rem",
                        lineHeight: 1.7,
                        color: "rgba(255,255,255,0.52)",
                      }}
                    >
                      {phase.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ④ WHAT WE TEST */}
        <section style={{ background: "var(--off)", padding: "80px var(--px)" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto" }}>
            <div className="ey ey-blue" style={{ marginBottom: 16 }}>
              Objective clearance — not guesswork
            </div>
            <h2 className="sh sh-navy" style={{ marginBottom: 48, maxWidth: 680 }}>
              You see the numbers.{" "}
              <span className="orange">You know where you stand.</span>
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 24,
              }}
            >
              {testCards.map((card, i) => (
                <div
                  key={i}
                  style={{
                    background: "#fff",
                    border: "1px solid var(--stone)",
                    borderTop: "3px solid var(--blue)",
                    borderRadius: 8,
                    padding: "24px 22px",
                  }}
                >
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
                  <p style={{ fontSize: "0.90rem", lineHeight: 1.7, color: "#4A6070" }}>
                    {card.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ⑤ TIMELINE */}
        <section style={{ background: "var(--navy)", padding: "80px var(--px)" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto" }}>
            <div className="ey ey-blue" style={{ marginBottom: 16 }}>
              Realistic expectations
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
              How long{" "}
              <span className="orange">does ACL rehab take?</span>
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 24,
              }}
            >
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  borderRadius: 10,
                  padding: "32px 28px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    fontSize: "0.60rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--blue)",
                    marginBottom: 12,
                  }}
                >
                  Post-surgical
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "2.8rem",
                    color: "#fff",
                    lineHeight: 1,
                    marginBottom: 16,
                  }}
                >
                  9–12 months
                </div>
                <p style={{ fontSize: "0.92rem", lineHeight: 1.75, color: "rgba(255,255,255,0.55)" }}>
                  9–12 months to full clearance for most surgical cases. Timeline
                  varies with graft type, sport demands, and how quickly strength
                  milestones are reached. We don&apos;t rush it — we clear by
                  criteria, not by calendar.
                </p>
              </div>
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  borderRadius: 10,
                  padding: "32px 28px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    fontSize: "0.60rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--blue)",
                    marginBottom: 12,
                  }}
                >
                  Conservative (brace)
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "2.8rem",
                    color: "#fff",
                    lineHeight: 1,
                    marginBottom: 16,
                  }}
                >
                  6–9 months
                </div>
                <p style={{ fontSize: "0.92rem", lineHeight: 1.75, color: "rgba(255,255,255,0.55)" }}>
                  6–9 months for non-surgical management. Selected cases —
                  particularly partial tears or specific athlete profiles — can
                  achieve full return without surgery. Assessment determines the
                  right pathway for you.
                </p>
              </div>
            </div>
            <p
              style={{
                marginTop: 24,
                fontSize: "0.88rem",
                color: "rgba(255,255,255,0.38)",
                fontStyle: "italic",
                lineHeight: 1.65,
              }}
            >
              Timeline is a guide, not a guarantee. Every athlete progresses
              differently. What we guarantee is that you won&apos;t be cleared
              before you&apos;re ready.
            </p>
          </div>
        </section>

        {/* ⑥ PRICING */}
        <section style={{ background: "var(--navy)", padding: "0 var(--px) 80px" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto" }}>
            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.08)",
                paddingTop: 64,
              }}
            >
              <div className="ey ey-blue" style={{ marginBottom: 16 }}>
                Your first step
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
                <div
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderTop: "3px solid var(--blue)",
                    borderRadius: 10,
                    padding: "28px 24px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-bebas)",
                      fontSize: "1.4rem",
                      color: "#fff",
                      lineHeight: 1,
                      marginBottom: 4,
                    }}
                  >
                    Session 1
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
                    $145
                  </div>
                  <p
                    style={{
                      fontSize: "0.90rem",
                      lineHeight: 1.72,
                      color: "rgba(255,255,255,0.50)",
                      borderTop: "1px solid rgba(255,255,255,0.08)",
                      paddingTop: 14,
                    }}
                  >
                    45-minute first consult. Full injury history, sport demands,
                    where you are and where you want to get back to.
                  </p>
                </div>
                <div
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderTop: "3px solid var(--blue)",
                    borderRadius: 10,
                    padding: "28px 24px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-bebas)",
                      fontSize: "1.4rem",
                      color: "#fff",
                      lineHeight: 1,
                      marginBottom: 4,
                    }}
                  >
                    Session 2
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
                    $185
                  </div>
                  <p
                    style={{
                      fontSize: "0.90rem",
                      lineHeight: 1.72,
                      color: "rgba(255,255,255,0.50)",
                      borderTop: "1px solid rgba(255,255,255,0.08)",
                      paddingTop: 14,
                    }}
                  >
                    60-minute deep dive. Hands-on assessment, movement screening,
                    ACL-specific testing. Written plan and return-to-sport
                    timeline issued.
                  </p>
                </div>
              </div>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "rgba(255,255,255,0.42)",
                  lineHeight: 1.65,
                  marginBottom: 28,
                }}
              >
                After both sessions, you choose your pathway — session by session
                ($145/consult) or the Rehab Accelerator program ($185/week,
                all-inclusive).
              </p>
              <button className="btn btn-primary" onClick={openModal}>
                Book my ACL assessment →
              </button>
            </div>
          </div>
        </section>

        {/* ⑦ FAQ */}
        <section style={{ background: "var(--off)", padding: "80px var(--px)" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <div className="ey ey-blue" style={{ marginBottom: 16 }}>
              Common questions
            </div>
            <h2 className="sh sh-navy" style={{ marginBottom: 48 }}>
              ACL Rehab{" "}
              <span className="orange">FAQ</span>
            </h2>
            <div style={{ borderTop: "1px solid var(--stone)" }}>
              {faqs.map((item, i) => (
                <div key={i} style={{ borderBottom: "1px solid var(--stone)" }}>
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
                      color: openFaq === i ? "var(--blue)" : "var(--navy)",
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
                        color: "#4A6070",
                      }}
                    >
                      {item.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ⑧ CTA */}
        <CTA />

        <BookingModal />
      </div>
    </>
  );
}
