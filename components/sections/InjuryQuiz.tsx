"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  {
    text: "Do you have a clear, written return-to-sport date from your physio?",
    opts: [
      { label: "Yes — with week-by-week milestones", pts: 20 },
      { label: 'Yes — but it\'s approximate / "a few more weeks"', pts: 10 },
      { label: "No — just a rough guess", pts: 4 },
      { label: "No — nobody has given me one", pts: 0 },
    ],
  },
  {
    text: "Are you maintaining your strength and fitness during rehab?",
    opts: [
      { label: "Yes — structured S&C program alongside physio", pts: 20 },
      { label: "Some training, but mostly on my own", pts: 12 },
      { label: "Minimal — trying to rest and let it heal", pts: 4 },
      { label: "No — I've lost significant fitness", pts: 0 },
    ],
  },
  {
    text: "Has your injury been properly diagnosed?",
    opts: [
      { label: "Yes — imaging and clinical diagnosis", pts: 20 },
      { label: "Clinically diagnosed, no imaging", pts: 12 },
      { label: 'Told it\'s a "strain" — no real workup', pts: 4 },
      { label: "Not sure what's actually injured", pts: 0 },
    ],
  },
  {
    text: "Have you been tested for return-to-sport readiness?",
    opts: [
      { label: "Yes — objective strength and movement testing", pts: 20 },
      { label: "Cleared based on symptoms / pain settling", pts: 10 },
      { label: "No testing done yet", pts: 2 },
      { label: "I don't know what return-to-sport testing is", pts: 0 },
    ],
  },
  {
    text: "How confident are you in your current rehab plan?",
    opts: [
      { label: "Very — clear roadmap, weekly targets", pts: 20 },
      { label: "Fairly — some structure but gaps", pts: 12 },
      { label: "Not really — doing exercises but unsure why", pts: 4 },
      { label: "Not at all — no real plan", pts: 0 },
    ],
  },
];

export default function InjuryQuiz() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<number[]>(Array(5).fill(-1));
  const [email, setEmail] = useState("");
  const [phase, setPhase] = useState<"quiz" | "capture" | "result">("quiz");
  const [submitting, setSubmitting] = useState(false);
  const [band, setBand] = useState("");

  useEffect(() => {
    (window as any).openQuizModal = () => setIsOpen(true);
    (window as any).closeQuizModal = () => { setIsOpen(false); resetQuiz(); };
  }, []);

  const resetQuiz = () => {
    setStep(0);
    setScores(Array(5).fill(-1));
    setEmail("");
    setPhase("quiz");
    setSubmitting(false);
    setBand("");
  };

  const pickOpt = (pts: number) => {
    const newScores = [...scores];
    newScores[step] = pts;
    setScores(newScores);
  };

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
    else setPhase("capture");
  };

  const getBand = (total: number) => {
    if (total <= 24) return "red";
    if (total <= 48) return "amber";
    if (total <= 72) return "green";
    return "strong";
  };

  const getBandInfo = (b: string) => {
    const map: Record<string, { icon: string; heading: string; insight: string }> = {
      red: {
        icon: "⚠️",
        heading: "Several gaps identified",
        insight: "Your answers suggest a number of areas in your current rehab approach that may be worth discussing with a physiotherapist — particularly around planning, diagnosis and return-to-sport testing. A professional assessment can help clarify where you stand and what a structured plan looks like.",
      },
      amber: {
        icon: "📋",
        heading: "Some gaps to explore",
        insight: "Your rehab has some structure, but there are a few areas — like objective testing and sport-specific programming — that are worth reviewing with a physio. A conversation with a specialist can help fill those gaps before you return to training.",
      },
      green: {
        icon: "✅",
        heading: "Progressing well",
        insight: "Your approach to rehab aligns with good practice in most areas. To complete the picture, consider whether you've had an objective return-to-sport clearance. Even athletes with solid programs benefit from a professional verification before stepping back on the field.",
      },
      strong: {
        icon: "✅",
        heading: "Strong approach",
        insight: "Your answers reflect a structured, evidence-informed approach to rehab. One final step worth considering: formal return-to-sport clearance testing with an objective clinical assessment. It's the safest way to confirm what your instincts are already telling you.",
      },
    };
    return map[b] || map.red;
  };

  const submitCapture = async () => {
    if (!email || !email.includes("@")) return;
    setSubmitting(true);
    const total = scores.reduce((a, b) => a + b, 0);
    const b = getBand(total);
    setBand(b);
    try {
      await fetch("https://api.stridephysiohealth.com.au/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "self-check",
          email,
          quiz_score: total,
          quiz_band: b,
          quiz_answers: scores,
        }),
      });
    } catch {}
    setPhase("result");
    setSubmitting(false);
  };

  const openModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      if (typeof (window as any).openModal === "function") (window as any).openModal();
    }, 200);
  };

  if (!isOpen) return null;

  const currentQ = questions[step];
  const canNext = scores[step] >= 0;
  const total = scores.reduce((a, b) => a + b, 0);
  const bandInfo = band ? getBandInfo(band) : null;

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) { setIsOpen(false); resetQuiz(); } }}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.7)",
        backdropFilter: "blur(4px)",
        zIndex: 950,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          background: "var(--navy)",
          borderRadius: 16,
          padding: 32,
          maxWidth: 520,
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          position: "relative",
        }}
      >
        <button
          onClick={() => { setIsOpen(false); resetQuiz(); }}
          style={{ position: "absolute", top: 16, right: 16, background: "none", border: "none", color: "rgba(255,255,255,0.5)", fontSize: "1.2rem", cursor: "pointer" }}
        >
          ✕
        </button>

        {/* Header */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ color: "var(--blue)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>
            Free · 60 seconds · Educational
          </div>
          <div style={{ fontFamily: "var(--font-bebas)", fontSize: "1.8rem", color: "#fff", letterSpacing: "0.02em" }}>
            Rehab Readiness Self-Check
          </div>
          <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", lineHeight: 1.6 }}>
            5 questions to help identify gaps in your rehab — and start the right conversation with a physio.
          </div>
        </div>

        {phase === "quiz" && (
          <>
            {/* Progress dots */}
            <div style={{ display: "flex", gap: 6, marginBottom: 28 }}>
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  style={{
                    height: 4,
                    flex: 1,
                    borderRadius: 2,
                    background: i <= step ? "var(--blue)" : "rgba(255,255,255,0.15)",
                    transition: "background .3s",
                  }}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.75rem", marginBottom: 8 }}>
                  Question {step + 1} of 5
                </div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem", lineHeight: 1.5, marginBottom: 20 }}>
                  {currentQ.text}
                </div>

                {currentQ.opts.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => pickOpt(opt.pts)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "12px 16px",
                      marginBottom: 8,
                      background: scores[step] === opt.pts ? "rgba(27,144,245,0.15)" : "rgba(255,255,255,0.04)",
                      border: `1px solid ${scores[step] === opt.pts ? "rgba(27,144,245,0.5)" : "rgba(255,255,255,0.1)"}`,
                      borderRadius: 8,
                      color: "#fff",
                      fontSize: "0.9rem",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all .2s",
                    }}
                  >
                    <div
                      style={{
                        width: 16,
                        height: 16,
                        borderRadius: "50%",
                        border: `2px solid ${scores[step] === opt.pts ? "var(--blue)" : "rgba(255,255,255,0.3)"}`,
                        background: scores[step] === opt.pts ? "var(--blue)" : "transparent",
                        flexShrink: 0,
                        transition: "all .2s",
                      }}
                    />
                    {opt.label}
                  </button>
                ))}

                <button
                  onClick={nextStep}
                  disabled={!canNext}
                  style={{
                    width: "100%",
                    marginTop: 16,
                    padding: "14px",
                    background: canNext ? "var(--blue)" : "rgba(255,255,255,0.1)",
                    color: canNext ? "#fff" : "rgba(255,255,255,0.3)",
                    border: "none",
                    borderRadius: 8,
                    fontWeight: 700,
                    fontSize: "1rem",
                    cursor: canNext ? "pointer" : "not-allowed",
                  }}
                >
                  {step < 4 ? "Next →" : "See my score →"}
                </button>
              </motion.div>
            </AnimatePresence>
          </>
        )}

        {phase === "capture" && (
          <div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: "1.2rem", marginBottom: 8 }}>
              Your result is ready — get it in your inbox
            </div>
            <div style={{ color: "rgba(255,255,255,0.55)", marginBottom: 20, lineHeight: 1.6 }}>
              Your free injury readiness score + what it means for your return to play.
            </div>
            <input
              type="email"
              placeholder="Email address *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "14px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 8,
                color: "#fff",
                fontSize: "1rem",
                marginBottom: 12,
                outline: "none",
              }}
            />
            <button
              onClick={submitCapture}
              disabled={submitting || !email.includes("@")}
              style={{
                width: "100%",
                padding: "14px",
                background: "var(--blue)",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                fontWeight: 700,
                fontSize: "1rem",
                cursor: "pointer",
                marginBottom: 12,
              }}
            >
              {submitting ? "Loading..." : "Send my result →"}
            </button>
            <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.75rem" }}>
              We&apos;ll only use this to send your results. No spam, ever.{" "}
              <a href="/privacy-policy" style={{ color: "rgba(255,255,255,0.35)" }}>Privacy Policy</a>
            </div>
          </div>
        )}

        {phase === "result" && bandInfo && (
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: 12 }}>{bandInfo.icon}</div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: "1.3rem", marginBottom: 16 }}>
              {bandInfo.heading}
            </div>
            <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: 24, fontSize: "0.95rem" }}>
              {bandInfo.insight}
            </p>
            <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: 8, padding: 14, marginBottom: 20 }}>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}>
                This self-check is for educational purposes only and is not a clinical assessment. Please consult a registered physiotherapist for a professional evaluation.
              </p>
            </div>
            <button className="btn btn-primary" onClick={openModal} style={{ width: "100%", justifyContent: "center", marginBottom: 12 }}>
              Discuss with a physio →
            </button>
            <button
              onClick={resetQuiz}
              style={{ background: "none", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer", fontSize: "0.85rem" }}
            >
              ↺ Retake
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
