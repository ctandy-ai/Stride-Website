"use client";

import { useState, useEffect } from "react";

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
        background: "rgba(11,23,36,0.97)",
        backdropFilter: "blur(12px)",
        borderTop: "1px solid rgba(255,255,255,0.09)",
        padding: "12px var(--px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
      }}
      className="md:hidden"
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#22c55e",
            animation: "pulse 2s infinite",
          }}
        />
        <div>
          <div style={{ color: "#fff", fontWeight: 700, fontSize: "0.85rem" }}>Stride Sports Physio</div>
          <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.72rem" }}>Now accepting new athletes</div>
        </div>
      </div>
      <button
        onClick={openModal}
        style={{
          background: "var(--blue)",
          color: "#fff",
          border: "none",
          padding: "12px 20px",
          borderRadius: 8,
          fontWeight: 700,
          fontSize: "0.88rem",
          cursor: "pointer",
          whiteSpace: "nowrap",
        }}
      >
        Book my assessment →
      </button>
    </div>
  );
}
