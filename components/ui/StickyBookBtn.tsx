"use client";

import { useState, useEffect } from "react";
import { fireGtag, CONV } from "@/lib/conversions";

export default function StickyBookBtn() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const openModal = () => {
    if (typeof (window as any).openModal === "function") (window as any).openModal();
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        background: "rgba(9,20,33,0.97)",
        backdropFilter: "blur(12px)",
        borderTop: "1px solid rgba(255,255,255,0.09)",
        padding: "10px var(--px)",
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}
      className="sticky-bar-mobile"
    >
      {/* Call us — solid white */}
      <a
        href="tel:+61483918427"
        style={{
          flex: "0 0 auto",
          background: "#fff",
          color: "var(--navy)",
          border: "none",
          padding: "13px 20px",
          borderRadius: 8,
          fontWeight: 700,
          fontSize: "0.85rem",
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          gap: 7,
          letterSpacing: "0.03em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}
        onClick={() => fireGtag(CONV.phoneCall)}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.26h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        Call us
      </a>

      {/* Book online — blue, full width remaining */}
      <button
        onClick={openModal}
        style={{
          flex: 1,
          background: "var(--blue)",
          color: "#fff",
          border: "none",
          padding: "13px 16px",
          borderRadius: 8,
          fontWeight: 700,
          fontSize: "0.85rem",
          cursor: "pointer",
          letterSpacing: "0.03em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          textAlign: "center",
        }}
      >
        Book my assessment — $145 →
      </button>
    </div>
  );
}
