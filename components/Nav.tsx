"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";

export default function Nav() {
  const openModal = useCallback(() => {
    const modal = document.getElementById("modal");
    if (modal) modal.classList.add("open");
    // Google Ads conversion
    if (typeof (window as any).gtag !== "undefined") {
      (window as any).gtag("event", "conversion", {
        send_to: "AW-753839414/OXjOCO_rhpscELbauucC",
      });
    }
  }, []);

  return (
    <nav>
      <Link href="/" className="nav-logo flex-shrink-0">
        <Image
          src="https://assets.cdn.filesafe.space/uGjKGDMcGryVhkZ0uDcj/media/65d412163c4a574adb19516f.png"
          alt="Stride Sports Physio & Performance"
          width={120}
          height={32}
          style={{ height: 32, width: "auto" }}
          unoptimized
        />
      </Link>
      <div className="nav-links hidden md:flex items-center gap-7">
        <Link href="/#method" className="nav-link" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.82rem", fontWeight: 500, textDecoration: "none", transition: "color .2s" }}>
          The Problem
        </Link>
        <Link href="/#program" className="nav-link" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.82rem", fontWeight: 500, textDecoration: "none" }}>
          Program
        </Link>
        <Link href="/#pricing" className="nav-link" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.82rem", fontWeight: 500, textDecoration: "none" }}>
          Pricing
        </Link>
        <Link href="/performance-programs" className="nav-link" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.82rem", fontWeight: 500, textDecoration: "none" }}>
          Performance
        </Link>
        <Link href="/combat-sports-physio" className="nav-link" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.82rem", fontWeight: 500, textDecoration: "none" }}>
          Combat
        </Link>
        <Link href="/acl-rehab" className="nav-link" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.82rem", fontWeight: 500, textDecoration: "none" }}>
          ACL
        </Link>
        <a
          href="https://booking.clinic1.com/online-booking/qPzrwR2A"
          className="nav-link"
          target="_blank"
          rel="noopener"
          style={{ color: "#68b4ff", fontSize: "0.82rem", fontWeight: 500, textDecoration: "none" }}
        >
          Existing Client →
        </a>
      </div>
      <button
        className="nav-cta"
        onClick={openModal}
        style={{
          background: "var(--blue)",
          color: "#fff",
          border: "none",
          padding: "12px 26px",
          fontFamily: "var(--font-inter)",
          fontSize: "0.88rem",
          fontWeight: 700,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          cursor: "pointer",
          transition: "background .2s",
          whiteSpace: "nowrap",
          borderRadius: 2,
        }}
      >
        Book my assessment →
      </button>
    </nav>
  );
}
