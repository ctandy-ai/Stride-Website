"use client";

import { useState } from "react";

const CLUB_DEC_URL =
  "https://dochub.com/m/shared-document/stride-/2GQ1NXoKy5D4OLLKDkW6bx/club-declaration-template?dt=-v_Z8sdje_3T-uLryB32";

export default function ClubDeclarationCard() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (!email.trim()) return;
    const subject = encodeURIComponent("Stride Sports Injury Clinic — Club Declaration Form");
    const body = encodeURIComponent(
      `Hi,\n\nFollowing your assessment at Stride Sports Physio & Performance, please find your Club Declaration form below.\n\nThis form needs to be completed by your club secretary and submitted with your Physician Report to marshaflclaims.com.au to process your sports insurance claim.\n\nClub Declaration form:\n${CLUB_DEC_URL}\n\nIf you have any questions, please don't hesitate to contact us.\n\nStride Sports Physio & Performance\n13 Puckle St, Moonee Ponds VIC 3039\n0483 918 427`
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 8, overflow: "hidden" }}>
      {/* Header */}
      <div style={{
        padding: "10px 16px",
        background: "rgba(255,255,255,0.12)",
        fontSize: "0.72rem", fontWeight: 700,
        letterSpacing: "0.08em", textTransform: "uppercase", color: "#fff",
      }}>
        Club Declaration
      </div>

      <div style={{ padding: "24px 20px", display: "flex", flexDirection: "column", gap: 16 }}>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>
          Your club secretary completes and signs this form. Print it to bring to your club, or send it directly to the athlete&apos;s email below.
        </p>

        {/* Print button */}
        <a
          href={CLUB_DEC_URL}
          target="_blank"
          rel="noopener"
          style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
            padding: "11px 20px",
            border: "1px solid rgba(255,255,255,0.25)",
            borderRadius: 4,
            color: "#fff",
            textDecoration: "none",
            fontSize: "0.84rem",
            fontWeight: 600,
            letterSpacing: "0.03em",
          }}
        >
          🖨 Open &amp; print form
        </a>

        {/* Email to athlete */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 16 }}>
          <div style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 10 }}>
            Email form to athlete
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <input
              type="email"
              placeholder="Athlete email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              style={{
                flex: 1,
                padding: "10px 14px",
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: 4,
                color: "#fff",
                fontSize: "0.88rem",
                outline: "none",
              }}
            />
            <button
              onClick={handleSend}
              style={{
                padding: "10px 18px",
                background: sent ? "rgba(27,144,245,0.3)" : "var(--blue)",
                border: "none",
                borderRadius: 4,
                color: "#fff",
                fontSize: "0.84rem",
                fontWeight: 700,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "background .2s",
              }}
            >
              {sent ? "✓ Opened" : "Send →"}
            </button>
          </div>
          <div style={{ fontSize: "0.74rem", color: "rgba(255,255,255,0.3)", marginTop: 8 }}>
            Opens Gmail compose with form link pre-filled
          </div>
        </div>
      </div>
    </div>
  );
}
