"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Step = 1 | 2 | 3 | "done";

interface FormData {
  sport: string;
  goal: string;
  timeline: string;
  training: string;
  name: string;
  phone: string;
  email: string;
}

export default function PerformanceModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState<FormData>({
    sport: "", goal: "", timeline: "", training: "", name: "", phone: "", email: "",
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    const handleClose = () => { setOpen(false); setStep(1); };
    window.addEventListener("openModal", handleOpen);
    window.addEventListener("closeModal", handleClose);
    return () => {
      window.removeEventListener("openModal", handleOpen);
      window.removeEventListener("closeModal", handleClose);
    };
  }, []);

  useEffect(() => {
    (window as any).openModal = () => setOpen(true);
    (window as any).closeModal = () => { setOpen(false); setStep(1); };
  }, []);

  const pick = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const step1Valid = formData.sport && formData.goal;
  const step2Valid = formData.timeline && formData.training;
  const step3Valid = formData.name && formData.phone && formData.email;

  const submitForm = async () => {
    if (!step3Valid) return;
    setSubmitting(true);
    try {
      await fetch("https://api.stridephysiohealth.com.au/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "performance-modal", ...formData }),
      });
    } catch {}
    setSubmitting(false);
    setStep("done");
  };

  const stepConfig = {
    1: { eye: "Step 1 of 3", h: "What are you training for?", sub: "Tell us your sport and goal — we'll match you with the right program." },
    2: { eye: "Step 2 of 3", h: "When do you want to start?", sub: "We'll make sure there's a spot in the next block." },
    3: { eye: "Step 3 of 3", h: "Your details", sub: "We'll be in touch within 2 hours." },
    done: { eye: "Done", h: "We'll be in touch.", sub: "" },
  };

  const current = stepConfig[step];

  const overlayStyle: React.CSSProperties = {
    position: "fixed", inset: 0, zIndex: 1000,
    background: "rgba(9,20,33,0.85)", backdropFilter: "blur(6px)",
    display: "flex", alignItems: "center", justifyContent: "center", padding: 20,
  };

  const modalStyle: React.CSSProperties = {
    background: "#0d1c2e", border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 16, padding: 40, width: "100%", maxWidth: 480,
    maxHeight: "90vh", overflowY: "auto", position: "relative",
  };

  const dots = [1, 2, 3];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          style={overlayStyle}
          onClick={(e) => { if (e.target === e.currentTarget) { setOpen(false); setStep(1); } }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            style={modalStyle}
          >
            {/* Close */}
            <button onClick={() => { setOpen(false); setStep(1); }} style={{ position: "absolute", top: 14, right: 18, background: "none", border: "none", color: "rgba(255,255,255,0.3)", fontSize: "1rem", cursor: "pointer", lineHeight: 1 }}>✕</button>

            {/* Header */}
            <div style={{ fontFamily: "var(--font-dm-mono)", fontSize: "0.52rem", letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--blue)", marginBottom: 6 }}>
              {current.eye}
            </div>
            <div style={{ fontFamily: "var(--font-bebas)", fontSize: "2.4rem", color: "#fff", letterSpacing: "0.02em", lineHeight: 1, marginBottom: 6 }}>
              {current.h}
            </div>
            {current.sub && (
              <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.38)", marginBottom: 20, lineHeight: 1.6 }}>{current.sub}</p>
            )}

            {/* Step dots */}
            {step !== "done" && (
              <div style={{ display: "flex", gap: 4, marginBottom: 24 }}>
                {dots.map((d) => (
                  <div key={d} style={{ height: 2, flex: 1, borderRadius: 1, background: (step as number) >= d ? "var(--blue)" : "rgba(255,255,255,0.1)", transition: "background 0.3s" }} />
                ))}
              </div>
            )}

            {/* Step 1 — Sport + Goal */}
            {step === 1 && (
              <div>
                <div style={{ fontFamily: "var(--font-dm-mono)", fontSize: "0.52rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.32)", marginBottom: 8 }}>Your sport</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 16 }}>
                  {[
                    { emoji: "🏉", label: "AFL / Rugby" },
                    { emoji: "⚽", label: "Soccer / Football" },
                    { emoji: "🏃", label: "Running / Track" },
                    { emoji: "🏋️", label: "Gym / Other" },
                  ].map((opt) => (
                    <button key={opt.label} onClick={() => pick("sport", opt.label)}
                      style={{ background: formData.sport === opt.label ? "rgba(27,144,245,0.15)" : "rgba(255,255,255,0.03)", border: `1px solid ${formData.sport === opt.label ? "var(--blue)" : "rgba(255,255,255,0.08)"}`, borderRadius: 8, padding: "14px 12px", cursor: "pointer", textAlign: "left", color: formData.sport === opt.label ? "#fff" : "rgba(255,255,255,0.45)", display: "flex", flexDirection: "column", gap: 4, transition: "all 0.15s" }}>
                      <span style={{ fontSize: "1rem" }}>{opt.emoji}</span>
                      <span style={{ fontSize: "0.8rem", fontWeight: 600 }}>{opt.label}</span>
                    </button>
                  ))}
                </div>
                <div style={{ fontFamily: "var(--font-dm-mono)", fontSize: "0.52rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.32)", marginBottom: 8 }}>What are you looking for?</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 20 }}>
                  {[
                    { emoji: "📋", label: "Athlete Performance", sub: "$145/wk" },
                    { emoji: "💪", label: "S&C Performance", sub: "$90/wk" },
                    { emoji: "❓", label: "Not sure yet", sub: "We'll advise" },
                    { emoji: "🎯", label: "Both / Tell me", sub: "Blueprint session" },
                  ].map((opt) => (
                    <button key={opt.label} onClick={() => pick("goal", opt.label)}
                      style={{ background: formData.goal === opt.label ? "rgba(27,144,245,0.15)" : "rgba(255,255,255,0.03)", border: `1px solid ${formData.goal === opt.label ? "var(--blue)" : "rgba(255,255,255,0.08)"}`, borderRadius: 8, padding: "14px 12px", cursor: "pointer", textAlign: "left", color: formData.goal === opt.label ? "#fff" : "rgba(255,255,255,0.45)", display: "flex", flexDirection: "column", gap: 3, transition: "all 0.15s" }}>
                      <span style={{ fontSize: "0.95rem" }}>{opt.emoji}</span>
                      <span style={{ fontSize: "0.78rem", fontWeight: 600 }}>{opt.label}</span>
                      <span style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.35)" }}>{opt.sub}</span>
                    </button>
                  ))}
                </div>
                <button onClick={() => setStep(2)} disabled={!step1Valid}
                  style={{ width: "100%", background: step1Valid ? "var(--blue)" : "rgba(255,255,255,0.08)", color: step1Valid ? "#fff" : "rgba(255,255,255,0.2)", border: "none", borderRadius: 8, padding: 14, fontWeight: 700, fontSize: "0.86rem", letterSpacing: "0.04em", textTransform: "uppercase", cursor: step1Valid ? "pointer" : "not-allowed", transition: "all 0.2s" }}>
                  Continue →
                </button>
              </div>
            )}

            {/* Step 2 — Timeline + Training status */}
            {step === 2 && (
              <div>
                <div style={{ fontFamily: "var(--font-dm-mono)", fontSize: "0.52rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.32)", marginBottom: 8 }}>When do you want to start?</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
                  {[
                    { emoji: "⚡", label: "ASAP — pre-season / next block" },
                    { emoji: "📅", label: "This week" },
                    { emoji: "🗓", label: "Next 2–4 weeks" },
                  ].map((opt) => (
                    <button key={opt.label} onClick={() => pick("timeline", opt.label)}
                      style={{ background: formData.timeline === opt.label ? "rgba(27,144,245,0.15)" : "rgba(255,255,255,0.03)", border: `1px solid ${formData.timeline === opt.label ? "var(--blue)" : "rgba(255,255,255,0.08)"}`, borderRadius: 8, padding: "13px 16px", cursor: "pointer", textAlign: "left", color: formData.timeline === opt.label ? "#fff" : "rgba(255,255,255,0.45)", display: "flex", alignItems: "center", gap: 10, transition: "all 0.15s" }}>
                      <span>{opt.emoji}</span><span style={{ fontSize: "0.85rem", fontWeight: 600 }}>{opt.label}</span>
                    </button>
                  ))}
                </div>
                <div style={{ fontFamily: "var(--font-dm-mono)", fontSize: "0.52rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.32)", marginBottom: 8 }}>Current training status</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 20 }}>
                  {[
                    { emoji: "🔥", label: "In-season / active" },
                    { emoji: "😴", label: "Off-season / fresh start" },
                  ].map((opt) => (
                    <button key={opt.label} onClick={() => pick("training", opt.label)}
                      style={{ background: formData.training === opt.label ? "rgba(27,144,245,0.15)" : "rgba(255,255,255,0.03)", border: `1px solid ${formData.training === opt.label ? "var(--blue)" : "rgba(255,255,255,0.08)"}`, borderRadius: 8, padding: "14px 12px", cursor: "pointer", textAlign: "left", color: formData.training === opt.label ? "#fff" : "rgba(255,255,255,0.45)", display: "flex", flexDirection: "column", gap: 4, transition: "all 0.15s" }}>
                      <span style={{ fontSize: "1rem" }}>{opt.emoji}</span>
                      <span style={{ fontSize: "0.8rem", fontWeight: 600 }}>{opt.label}</span>
                    </button>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <button onClick={() => setStep(1)} style={{ flex: "0 0 auto", background: "none", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8, padding: "14px 18px", color: "rgba(255,255,255,0.4)", cursor: "pointer", fontSize: "0.84rem" }}>← Back</button>
                  <button onClick={() => setStep(3)} disabled={!step2Valid}
                    style={{ flex: 1, background: step2Valid ? "var(--blue)" : "rgba(255,255,255,0.08)", color: step2Valid ? "#fff" : "rgba(255,255,255,0.2)", border: "none", borderRadius: 8, padding: 14, fontWeight: 700, fontSize: "0.86rem", letterSpacing: "0.04em", textTransform: "uppercase", cursor: step2Valid ? "pointer" : "not-allowed", transition: "all 0.2s" }}>
                    Continue →
                  </button>
                </div>
              </div>
            )}

            {/* Step 3 — Details */}
            {step === 3 && (
              <div>
                {(["name", "phone", "email"] as const).map((field) => (
                  <div key={field} style={{ marginBottom: 12 }}>
                    <div style={{ fontFamily: "var(--font-dm-mono)", fontSize: "0.52rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.32)", marginBottom: 6 }}>
                      {field === "name" ? "Your name" : field === "phone" ? "Mobile number" : "Email address"}
                    </div>
                    <input type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                      placeholder={field === "name" ? "First name" : field === "phone" ? "04xx xxx xxx" : "you@email.com"}
                      value={formData[field]}
                      onChange={(e) => pick(field, e.target.value)}
                      style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "13px 14px", color: "#fff", fontSize: "0.88rem", outline: "none", boxSizing: "border-box" }}
                    />
                  </div>
                ))}
                <button onClick={submitForm} disabled={!step3Valid || submitting}
                  style={{ width: "100%", background: step3Valid ? "var(--blue)" : "rgba(255,255,255,0.08)", color: step3Valid ? "#fff" : "rgba(255,255,255,0.2)", border: "none", borderRadius: 8, padding: 14, fontWeight: 700, fontSize: "0.86rem", letterSpacing: "0.04em", textTransform: "uppercase", cursor: step3Valid ? "pointer" : "not-allowed", marginBottom: 10, transition: "all 0.2s" }}>
                  {submitting ? "Submitting..." : "Submit my details →"}
                </button>
                <p style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.18)", textAlign: "center", lineHeight: 1.5 }}>
                  Your details are never shared or sold. We&apos;ll only contact you about your program.
                </p>
                <button onClick={() => setStep(2)} style={{ display: "block", width: "100%", textAlign: "center", background: "none", border: "none", color: "rgba(255,255,255,0.25)", cursor: "pointer", fontSize: "0.78rem", marginTop: 8 }}>← Back</button>
              </div>
            )}

            {/* Done */}
            {step === "done" && (
              <div style={{ textAlign: "center", padding: "8px 0" }}>
                <div style={{ fontSize: "2.2rem", marginBottom: 12 }}>✅</div>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: 24 }}>
                  Or book your Blueprint Testing Session now — we&apos;ll set your program up from there:
                </p>
                <a href="https://booking.clinic1.com/online-booking/wZet4fM4" target="_blank" rel="noopener"
                  style={{ display: "block", background: "var(--blue)", color: "#fff", textDecoration: "none", borderRadius: 8, padding: "14px 18px", fontWeight: 700, fontSize: "0.86rem", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 10 }}>
                  📅 Book Blueprint Testing Session
                </a>
                <a href="tel:0483918427"
                  style={{ display: "block", background: "transparent", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.15)", textDecoration: "none", borderRadius: 8, padding: "13px 18px", fontSize: "0.84rem", fontWeight: 600 }}>
                  📞 Call us: 0483 918 427
                </a>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
