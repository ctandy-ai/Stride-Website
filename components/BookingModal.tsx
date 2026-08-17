"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Step = 1 | 2 | 3 | "done";

interface FormData {
  sport: string;
  injury: string;
  urgency: string;
  prog: string;
  name: string;
  phone: string;
  email: string;
}

export default function BookingModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState<FormData>({
    sport: "", injury: "", urgency: "", prog: "", name: "", phone: "", email: "",
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    const handleClose = () => { setOpen(false); setStep(1); };

    // Listen for modal open via DOM (from other components)
    const observer = new MutationObserver(() => {
      const modal = document.getElementById("modal");
      if (modal?.classList.contains("open")) {
        setOpen(true);
        modal.classList.remove("open");
      }
    });
    const modal = document.getElementById("modal-trigger");
    if (modal) observer.observe(modal, { attributes: true });

    window.addEventListener("openModal", handleOpen);
    window.addEventListener("closeModal", handleClose);
    return () => {
      window.removeEventListener("openModal", handleOpen);
      window.removeEventListener("closeModal", handleClose);
      observer.disconnect();
    };
  }, []);

  // Expose openModal globally
  useEffect(() => {
    (window as any).openModal = () => {
      setOpen(true);
      if (typeof (window as any).gtag !== "undefined") {
        (window as any).gtag("event", "conversion", {
          send_to: "AW-753839414/OXjOCO_rhpscELbauucC",
        });
      }
    };
    (window as any).closeModal = () => { setOpen(false); setStep(1); };
  }, []);

  const pick = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const step1Valid = formData.sport && formData.injury;
  const step2Valid = formData.urgency && formData.prog;
  const step3Valid = formData.name && formData.phone && formData.email;

  const submitForm = async () => {
    if (!step3Valid) return;
    setSubmitting(true);
    try {
      await fetch("https://api.stridephysiohealth.com.au/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "booking-modal", ...formData }),
      });
    } catch {}
    setStep("done");
    setSubmitting(false);
  };

  const sportOpts = [
    { ico: "🏉", label: "AFL / Rugby" },
    { ico: "🏐", label: "Netball" },
    { ico: "⚽", label: "Soccer / Football" },
    { ico: "🏃", label: "Running / Other" },
  ];
  const injuryOpts = [
    { ico: "🦵", label: "Lower limb" },
    { ico: "💪", label: "Upper limb" },
    { ico: "🔙", label: "Back / Spine" },
    { ico: "❓", label: "Not sure yet" },
  ];
  const urgencyOpts = [
    { ico: "⚡", label: "ASAP — season / match deadline", full: true },
    { ico: "📅", label: "This week" },
    { ico: "🗓", label: "Next 2 weeks" },
  ];
  const progOpts = [
    { ico: "🏋️", label: "Rehab Accelerator — full program" },
    { ico: "📋", label: "Single consultation first" },
  ];

  const overlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) { setOpen(false); setStep(1); }
  };

  const stepLabels: Record<Step, string> = {
    1: "Step 1 of 3",
    2: "Step 2 of 3",
    3: "Step 3 of 3",
    done: "",
  };
  const stepHeadings: Record<Step, string> = {
    1: "What's the injury?",
    2: "When do you need to be back?",
    3: "Your details",
    done: "",
  };
  const stepSubs: Record<Step, string> = {
    1: "Tell us what brought you in — we'll match you with the right specialist.",
    2: "We'll make sure we can meet your timeline.",
    3: "We'll confirm your appointment within 2 hours.",
    done: "",
  };

  const btnBase: React.CSSProperties = {
    width: "100%",
    background: "var(--blue)",
    color: "#fff",
    border: "none",
    padding: "16px",
    borderRadius: 8,
    fontWeight: 700,
    fontSize: "1rem",
    cursor: "pointer",
    marginTop: 16,
    transition: "background .2s",
  };
  const btnDisabled: React.CSSProperties = { ...btnBase, background: "#ccc", cursor: "not-allowed" };
  const optBase: React.CSSProperties = {
    display: "flex", alignItems: "center", gap: 10, border: "2px solid #E8E6E0",
    borderRadius: 8, padding: "12px 16px", cursor: "pointer", transition: "all .2s",
    background: "#fff", width: "100%", textAlign: "left", marginBottom: 8,
  };
  const optSelected: React.CSSProperties = { ...optBase, borderColor: "var(--blue)", background: "rgba(27,144,245,0.06)" };

  const renderOpts = (field: keyof FormData, opts: { ico: string; label: string; full?: boolean }[]) => (
    <div style={{ marginBottom: 16 }}>
      {opts.map((o) => (
        <button
          key={o.label}
          style={formData[field] === o.label ? optSelected : optBase}
          onClick={() => pick(field, o.label)}
        >
          <span style={{ fontSize: "1.2rem" }}>{o.ico}</span>
          <span style={{ fontWeight: 500 }}>{o.label}</span>
        </button>
      ))}
    </div>
  );

  if (!open) return null;

  return (
    <div
      onClick={overlayClick}
      style={{
        position: "fixed", inset: 0, background: "rgba(0,0,0,0.65)",
        backdropFilter: "blur(4px)", zIndex: 900, display: "flex",
        alignItems: "center", justifyContent: "center", padding: 20,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        style={{
          background: "#fff", borderRadius: 16, padding: 32, maxWidth: 480,
          width: "100%", maxHeight: "90vh", overflowY: "auto", position: "relative",
        }}
      >
        <button
          onClick={() => { setOpen(false); setStep(1); }}
          style={{ position: "absolute", top: 16, right: 16, background: "none", border: "none", fontSize: "1.2rem", cursor: "pointer", color: "#666" }}
        >
          ✕
        </button>

        {step !== "done" && (
          <>
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--blue)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>
              {stepLabels[step]}
            </div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--navy)", marginBottom: 6 }}>
              {stepHeadings[step]}
            </h3>
            <p style={{ color: "#7A8F9E", marginBottom: 20, fontSize: "0.95rem" }}>
              {stepSubs[step]}
            </p>
            {/* Dots */}
            <div style={{ display: "flex", gap: 6, marginBottom: 24 }}>
              {([1, 2, 3] as const).map((n) => (
                <div key={n} style={{
                  width: 24, height: 6, borderRadius: 3,
                  background: (typeof step === "number" && step >= n) ? "var(--blue)" : "#E8E6E0",
                  transition: "background .3s",
                }} />
              ))}
            </div>
          </>
        )}

        {step === 1 && (
          <>
            <label style={{ fontSize: "0.85rem", fontWeight: 700, display: "block", marginBottom: 8, color: "var(--navy)" }}>Your sport</label>
            {renderOpts("sport", sportOpts)}
            <label style={{ fontSize: "0.85rem", fontWeight: 700, display: "block", marginBottom: 8, color: "var(--navy)" }}>Injury area</label>
            {renderOpts("injury", injuryOpts)}
            <button
              style={step1Valid ? btnBase : btnDisabled}
              disabled={!step1Valid}
              onClick={() => step1Valid && setStep(2)}
            >
              Continue →
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <label style={{ fontSize: "0.85rem", fontWeight: 700, display: "block", marginBottom: 8, color: "var(--navy)" }}>How urgent?</label>
            {renderOpts("urgency", urgencyOpts)}
            <label style={{ fontSize: "0.85rem", fontWeight: 700, display: "block", marginBottom: 8, color: "var(--navy)" }}>Program</label>
            {renderOpts("prog", progOpts)}
            <button style={step2Valid ? btnBase : btnDisabled} disabled={!step2Valid} onClick={() => step2Valid && setStep(3)}>
              Continue →
            </button>
            <button onClick={() => setStep(1)} style={{ background: "none", border: "none", color: "var(--muted)", cursor: "pointer", marginTop: 12, display: "block" }}>← Back</button>
          </>
        )}

        {step === 3 && (
          <>
            {(["name", "phone", "email"] as const).map((field) => (
              <div key={field} style={{ marginBottom: 14 }}>
                <label style={{ fontSize: "0.85rem", fontWeight: 700, display: "block", marginBottom: 6, color: "var(--navy)", textTransform: "capitalize" }}>
                  {field === "phone" ? "Mobile number" : field === "email" ? "Email address" : "Your name"}
                </label>
                <input
                  type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                  placeholder={field === "phone" ? "04xx xxx xxx" : field === "email" ? "you@email.com" : "First name"}
                  value={formData[field]}
                  onChange={(e) => setFormData((prev) => ({ ...prev, [field]: e.target.value }))}
                  style={{ width: "100%", border: "2px solid #E8E6E0", borderRadius: 8, padding: "12px 14px", fontSize: "1rem", outline: "none" }}
                />
              </div>
            ))}
            <button
              style={step3Valid && !submitting ? btnBase : btnDisabled}
              disabled={!step3Valid || submitting}
              onClick={submitForm}
            >
              {submitting ? "Submitting..." : "Submit my details →"}
            </button>
            <p style={{ fontSize: "0.75rem", color: "var(--muted)", marginTop: 8 }}>Your details are never shared or sold. We&apos;ll only contact you about your booking.</p>
            <button onClick={() => setStep(2)} style={{ background: "none", border: "none", color: "var(--muted)", cursor: "pointer", marginTop: 8, display: "block" }}>← Back</button>
          </>
        )}

        {step === "done" && (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{ fontSize: "3rem", marginBottom: 12 }}>✅</div>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--navy)", marginBottom: 8 }}>Ready to book.</h3>
            <p style={{ color: "#7A8F9E", marginBottom: 24 }}>Choose how you&apos;d like to confirm your appointment:</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a
                href="https://booking.clinic1.com/online-booking/wZet4fM4"
                target="_blank"
                rel="noopener"
                style={{ background: "var(--blue)", color: "#fff", padding: "14px 20px", borderRadius: 8, textDecoration: "none", fontWeight: 700, fontSize: "0.95rem" }}
              >
                📅 &nbsp;New Client — Book Assessment
              </a>
              <a
                href="https://booking.clinic1.com/online-booking/qPzrwR2A"
                target="_blank"
                rel="noopener"
                style={{ background: "#0d7de8", color: "#fff", padding: "14px 20px", borderRadius: 8, textDecoration: "none", fontWeight: 700, fontSize: "0.95rem" }}
              >
                🔄 &nbsp;Existing Client — Book Appointment
              </a>
              <div style={{ color: "var(--muted)", fontSize: "0.8rem", margin: "4px 0" }}>need help choosing?</div>
              <a
                href="tel:0483918427"
                style={{ border: "2px solid #E8E6E0", color: "var(--navy)", padding: "14px 20px", borderRadius: 8, textDecoration: "none", fontWeight: 700, fontSize: "0.95rem" }}
              >
                📞 &nbsp;Call us: 0483 918 427
              </a>
              <p style={{ fontSize: "0.8rem", color: "var(--muted)", marginTop: 4 }}>Our team will help you choose the right appointment type and answer any questions before you book.</p>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
