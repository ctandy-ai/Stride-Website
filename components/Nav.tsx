"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/#method", label: "The Problem" },
  { href: "/#program", label: "Program" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/performance-programs", label: "Performance" },
  { href: "/combat-sports-physio", label: "Combat" },
  { href: "/acl-rehab", label: "ACL" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openModal = useCallback(() => {
    window.dispatchEvent(new Event("openModal"));
    if (typeof (window as any).gtag !== "undefined") {
      (window as any).gtag("event", "conversion", {
        send_to: "AW-753839414/OXjOCO_rhpscELbauucC",
      });
    }
    setMenuOpen(false);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const linkStyle: React.CSSProperties = {
    color: "rgba(255,255,255,0.5)",
    fontSize: "0.82rem",
    fontWeight: 500,
    textDecoration: "none",
    transition: "color .2s",
  };

  return (
    <>
      <nav style={{ position: "relative", zIndex: 400 }}>
        {/* Logo */}
        <Link href="/" className="nav-logo flex-shrink-0" onClick={closeMenu}>
          <Image
            src="https://assets.cdn.filesafe.space/uGjKGDMcGryVhkZ0uDcj/media/65d412163c4a574adb19516f.png"
            alt="Stride Sports Physio & Performance"
            width={120}
            height={32}
            style={{ height: 32, width: "auto" }}
            unoptimized
          />
        </Link>

        {/* Desktop links */}
        <div className="nav-desktop-links" style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} style={linkStyle}>
              {link.label}
            </Link>
          ))}
          <a
            href="https://booking.clinic1.com/online-booking/qPzrwR2A"
            target="_blank" rel="noopener"
            style={{ ...linkStyle, color: "#68b4ff" }}
          >
            Existing Client →
          </a>
        </div>

        {/* Desktop CTA */}
        <button
          className="nav-cta nav-desktop-cta"
          onClick={openModal}
          style={{
            background: "var(--blue)", color: "#fff", border: "none",
            padding: "12px 26px", fontFamily: "var(--font-inter)",
            fontSize: "0.88rem", fontWeight: 700, letterSpacing: "0.04em",
            textTransform: "uppercase", cursor: "pointer",
            transition: "background .2s", whiteSpace: "nowrap", borderRadius: 2,
          }}
        >
          Book my assessment →
        </button>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          style={{
            display: "none",
            background: "none", border: "none",
            color: "#fff", fontSize: "1.5rem",
            cursor: "pointer", padding: "4px 8px",
            lineHeight: 1,
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: 66,
              left: 0,
              right: 0,
              zIndex: 399,
              background: "rgba(9,20,33,0.99)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              padding: "20px var(--px-m) 28px",
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}
          >
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                style={{
                  color: "rgba(255,255,255,0.75)",
                  textDecoration: "none",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  padding: "14px 0",
                  borderBottom: i < navLinks.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  display: "block",
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://booking.clinic1.com/online-booking/qPzrwR2A"
              target="_blank" rel="noopener"
              onClick={closeMenu}
              style={{
                color: "#68b4ff", textDecoration: "none",
                fontSize: "1.05rem", fontWeight: 600,
                padding: "14px 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                display: "block",
              }}
            >
              Existing Client →
            </a>
            <button
              onClick={openModal}
              style={{
                marginTop: 20,
                background: "var(--blue)", color: "#fff", border: "none",
                borderRadius: 4, padding: "16px",
                fontFamily: "var(--font-inter)", fontWeight: 700,
                fontSize: "0.92rem", letterSpacing: "0.04em",
                textTransform: "uppercase", cursor: "pointer",
                width: "100%",
              }}
            >
              Book my assessment →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
