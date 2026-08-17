"use client";

import { useEffect, useState } from "react";
import BookingModal from "@/components/BookingModal";

export default function ScorePage() {
  const [band, setBand] = useState("green");
  const [sportName, setSportName] = useState("your sport");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const b = params.get("band") || "green";
    const s = params
      .get("sport")
      ?.replace(/[^a-zA-Z\s]/g, "")
      .trim()
      .substring(0, 50) || "your sport";
    setBand(b);
    setSportName(s);
  }, []);

  const openModal = () => {
    if (typeof (window as any).openModal === "function") (window as any).openModal();
  };

  const bandConfig: Record<string, { icon: string; title: string; desc: string; action: string; color: string }> = {
    red: {
      icon: "🔴",
      title: "Not Ready to Return",
      desc: "Your assessment shows several areas that need attention before returning to play.",
      action: "A professional assessment will help clarify the gaps and create a structured path forward.",
      color: "#e84545",
    },
    amber: {
      icon: "🟡",
      title: "Some Gaps to Explore",
      desc: "Your rehab has good structure, but a few areas—like objective testing—are worth reviewing.",
      action: "Work with a specialist to fill the gaps and confirm you're truly ready to return.",
      color: "#F5C518",
    },
    green: {
      icon: "🟢",
      title: "On Track",
      desc: "Your rehab approach is progressing well across most areas.",
      action: "Consider a professional return-to-sport clearance to confirm you're ready.",
      color: "#4CAF7D",
    },
    strong: {
      icon: "✅",
      title: "Strong Approach",
      desc: "Your answers reflect a structured, evidence-informed approach to rehab.",
      action: "One final step: formal return-to-sport clearance testing to confirm what your instincts are telling you.",
      color: "#4CAF7D",
    },
  };

  const config = bandConfig[band] || bandConfig.green;

  const covers = [
    { ico: "📏", title: "Movement Screening", desc: "Identify restrictions or imbalances in your movement patterns" },
    { ico: "📊", title: "Objective Performance Testing", desc: "Sport-specific strength and power benchmarks" },
    { ico: "🔍", title: "Injury Mechanism Analysis", desc: "How and why your injury happened; prevention strategies" },
    { ico: "📋", title: "Written Program", desc: "Personalised return-to-sport rehab plan tailored to your sport" },
    { ico: "🎯", title: "Target Return Date", desc: "Realistic timeline based on your assessment findings" },
  ];

  const faqs = [
    {
      q: "What do I bring to my appointment?",
      a: "Bring any recent scans or imaging (X-ray, MRI, ultrasound), your training diary or workload notes, and comfortable clothes you can move in. If you've been seeing another physio, bring their notes too.",
    },
    {
      q: "Do you bulk bill or accept Medicare?",
      a: "Yes — we accept Medicare with valid referrals from your GP. We can process HICAPS directly, so there's no out-of-pocket cost if you're eligible. If you don't have a referral, we can still see you privately.",
    },
    {
      q: "Where are you located?",
      a: "We're at 13 Puckle Street, Moonee Ponds VIC 3039. Free on-site and street parking available. We're 10 minutes from the city and close to public transport.",
    },
  ];

  return (
    <div style={{ background: "var(--navy)", color: "#fff", minHeight: "100vh", paddingTop: 66 }}>
      {/* Hero */}
      <section
        style={{
          padding: "64px var(--px)",
          background: "linear-gradient(135deg, #0D1B2A 0%, #1A3350 100%)",
          textAlign: "center",
          minHeight: 360,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ maxWidth: 680 }}>
          <h1
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              lineHeight: 1,
              letterSpacing: "0.02em",
              marginBottom: 16,
            }}
          >
            Based on your <span style={{ color: "var(--blue)" }}>{sportName}</span> answers — here&apos;s what we recommend
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.8 }}>
            Your personalised injury readiness score and next steps
          </p>
        </div>
      </section>

      {/* Score Band */}
      <div
        style={{
          maxWidth: 800,
          margin: "48px auto",
          padding: "0 var(--px)",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            border: `1px solid rgba(255,255,255,0.12)`,
            borderTop: `3px solid ${config.color}`,
            padding: 48,
            textAlign: "center",
            borderRadius: 4,
          }}
        >
          <div style={{ fontSize: "3.2rem", marginBottom: 14 }}>{config.icon}</div>
          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "2.2rem",
              letterSpacing: "0.02em",
              marginBottom: 12,
              lineHeight: 1,
            }}
          >
            {config.title}
          </h2>
          <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.7, marginBottom: 12 }}>
            {config.desc}
          </p>
          <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.55)", fontStyle: "italic", lineHeight: 1.6 }}>
            {config.action}
          </p>
        </div>
      </div>

      {/* What Assessment Covers */}
      <section
        style={{
          padding: "48px var(--px)",
          background: "rgba(0,0,0,0.2)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "2rem",
              marginBottom: 28,
              letterSpacing: "0.02em",
            }}
          >
            What the Initial Athlete Assessment Covers
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {covers.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div style={{ fontSize: "1.4rem", flexShrink: 0, width: 28, textAlign: "center", marginTop: 2 }}>
                  {item.ico}
                </div>
                <div style={{ fontSize: "1.02rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>
                  <strong style={{ color: "#fff" }}>{item.title}</strong> — {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section
        style={{
          padding: "48px var(--px)",
          background: "rgba(27,144,245,0.08)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "1.8rem", marginBottom: 20, letterSpacing: "0.02em" }}>
            Trusted by Athletes &amp; Clubs
          </h2>
          <p style={{ fontSize: "1.02rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.8, marginBottom: 12 }}>
            Over <strong>11 years partnering with Melbourne Storm NRL</strong>, we&apos;ve built the rehab expertise that helps athletes come back stronger and faster.
          </p>
          <p style={{ fontSize: "1.02rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.8 }}>
            <strong>Club partners include:</strong> Oak Park FC · West Footscray FC — and dozens of individual athletes across AFL, netball, rugby, BJJ, and MMA.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section
        style={{
          padding: "48px var(--px)",
          background: "rgba(0,0,0,0.2)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "2rem", marginBottom: 28, letterSpacing: "0.02em" }}>
            Common Questions
          </h2>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                marginBottom: 24,
                paddingBottom: 24,
                borderBottom: i < faqs.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
              }}
            >
              <div style={{ fontWeight: 700, fontSize: "1.05rem", color: "#fff", marginBottom: 8, lineHeight: 1.5 }}>
                {faq.q}
              </div>
              <div style={{ fontSize: "1rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.7 }}>
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "48px var(--px)",
          textAlign: "center",
          background: "linear-gradient(135deg, rgba(27,144,245,0.12) 0%, rgba(27,144,245,0.06) 100%)",
          borderTop: "1px solid rgba(27,144,245,0.2)",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            marginBottom: 16,
            letterSpacing: "0.02em",
          }}
        >
          Ready to Return Stronger?
        </h2>
        <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.85)", marginBottom: 32, lineHeight: 1.7 }}>
          Book your Initial Athlete Assessment and get a personalized return-to-sport plan from one of our specialists.
        </p>
        <button
          onClick={openModal}
          className="btn btn-primary"
        >
          Book my Initial Athlete Assessment <span className="arr">→</span>
        </button>
      </section>

      {/* Footer note */}
      <footer
        style={{
          background: "rgba(0,0,0,0.3)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "32px var(--px)",
          textAlign: "center",
          fontSize: "0.88rem",
          color: "rgba(255,255,255,0.35)",
        }}
      >
        Stride Physiotherapy & Health Group · 13 Puckle St, Moonee Ponds VIC 3039 ·{" "}
        <a href="tel:0483918427" style={{ color: "inherit", textDecoration: "none" }}>0483 918 427</a>
      </footer>

      <BookingModal />
    </div>
  );
}
