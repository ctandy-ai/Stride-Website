"use client";

import { useEffect, useRef, useState } from "react";
import { fireGtag, CONV } from "@/lib/conversions";
import Link from "next/link";

const stats = [
  { n: "500+", label: "athletes guided back to sport" },
  { n: "5K+",  label: "coached rehab hours" },
  { n: "20+",  label: "sporting teams worked with" },
];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    // On mobile, defer video load until after page load to protect LCP
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (!isMobile) {
      // Desktop: load immediately
      setVideoReady(true);
      return;
    }
    // Mobile: load video after window load event
    const load = () => setVideoReady(true);
    if (document.readyState === "complete") {
      load();
    } else {
      window.addEventListener("load", load, { once: true });
    }
    return () => window.removeEventListener("load", load);
  }, []);

  const openModal = () => {
    if (typeof (window as any).openModal === "function") (window as any).openModal();
  };

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100dvh",
        minHeight: 600,
        maxHeight: "100dvh",
        overflow: "hidden",
        paddingTop: 66,
      }}
    >
      {/* ── Video background ── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        {/* Poster image — always visible immediately, is the LCP element */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-poster.webp"
          alt=""
          fetchPriority="high"
          decoding="async"
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center",
            filter: "blur(0.6px)",
            zIndex: 0,
          }}
        />
        {/* Video — desktop: loads immediately; mobile: loads after window.load */}
        {videoReady && (
          <video
            ref={videoRef}
            autoPlay muted loop playsInline
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              objectFit: "cover", objectPosition: "center",
              filter: "blur(0.6px)",
              zIndex: 1,
            }}
          >
            <source src="/hero-loop.webm" type="video/webm" />
            <source src="/hero-loop.mp4" type="video/mp4" />
          </video>
        )}
        <div
          style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(9,20,33,0.97) 0%, rgba(9,20,33,0.80) 40%, rgba(9,20,33,0.35) 70%, transparent 100%)",
          }}
        />
      </div>

      {/* ── Main content (2-col desktop) ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0 var(--px) 88px",
          zIndex: 5,
        }}
        className="hero-content-wrap"
      >
        <div className="hero-grid">
          {/* ── Left column ── */}
          <div className="hero-left">
            {/* Eyebrow — Inter 15px bold */}
            <div
              style={{
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontSize: "15px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#7DB4FF",
                marginBottom: 14,
              }}
            >
              Sports Physio in Moonee Ponds
            </div>

            {/* H1 */}
            <h1
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(3.2rem, 7.5vw, 7rem)",
                lineHeight: 0.9,
                letterSpacing: "0.02em",
                color: "#fff",
                marginBottom: 20,
              }}
            >
              Know Exactly
              <br />
              <span style={{ color: "#7DB4FF" }}>Where You Stand.</span>
            </h1>

            {/* Subline */}
            <p
              style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: "clamp(0.9rem, 1.4vw, 1.08rem)",
                lineHeight: 1.65,
                maxWidth: 480,
                marginBottom: 28,
              }}
            >
              Find out what&apos;s wrong, what&apos;s causing it and exactly what to do next — with a written plan for getting back to your sport.
            </p>

            {/* Buttons */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", marginBottom: 12 }}>
              <button className="btn btn-primary" onClick={openModal}>
                Book my assessment — $145 <span className="arr">→</span>
              </button>
              <a
                href="tel:+61483918427"
                className="btn btn-white hero-call-desktop"
                style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}
                onClick={() => fireGtag(CONV.phoneCall)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.26h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Call us
              </a>
            </div>

            {/* Microcopy — bumped to 14px + contrast */}
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "14px", margin: 0 }}>
              No referral needed &nbsp;·&nbsp; Private health claimable &nbsp;·&nbsp; Same-week appointments usually available
            </p>
          </div>

          {/* ── Right column — proof card (desktop only) ── */}
          <div
            className="hero-proof-card"
            style={{
              background: "rgba(9,20,33,0.82)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.14)",
              borderRadius: 16,
              padding: "28px 24px",
              alignSelf: "flex-end",
            }}
          >
            {/* "Across our team" label above stats */}
            <div
              style={{
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.65)",
                marginBottom: 20,
              }}
            >
              Across our team
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 20 }}>
              {stats.map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                  <span style={{ fontFamily: "var(--font-bebas)", fontSize: "2.2rem", color: "#fff", lineHeight: 1 }}>
                    {s.n}
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "14px", lineHeight: 1.3 }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 16 }}>
              <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", marginBottom: 6 }}>
                Our team has worked with
              </div>
              <div style={{ color: "rgba(255,255,255,0.85)", fontSize: "14px", lineHeight: 1.5 }}>
                Melbourne Storm (NRL) · Essendon VFL · Western Bulldogs
              </div>
            </div>
          </div>
        </div>

        {/* ── Compact proof card for MOBILE only ── */}
        <div
          className="hero-proof-mobile"
          style={{
            background: "rgba(9,20,33,0.75)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 12,
            padding: "14px 16px",
            marginTop: 14,
          }}
        >
          {/* "Across our team" label on mobile */}
          <div
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.65)",
              textAlign: "center",
              marginBottom: 10,
            }}
          >
            Across our team
          </div>
          <div style={{ display: "flex", justifyContent: "space-around", marginBottom: 10 }}>
            {stats.map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-bebas)", fontSize: "1.6rem", color: "#fff", lineHeight: 1 }}>{s.n}</div>
                <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", lineHeight: 1.3, maxWidth: 72 }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 8, textAlign: "center" }}>
            <span style={{ color: "rgba(255,255,255,0.55)", fontSize: "14px" }}>Our team has worked with </span>
            <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px" }}>Melbourne Storm (NRL) · Essendon VFL · Western Bulldogs</span>
          </div>
        </div>
      </div>

      {/* ── Bottom hours strip (desktop only) ── */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 6,
          background: "rgba(9,20,33,0.92)",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "12px var(--px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          flexWrap: "wrap",
        }}
        className="hero-hours-strip"
      >
        <div
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "14px",
            lineHeight: 1.5,
            display: "flex",
            gap: "6px 20px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <span>13 Puckle St, Moonee Ponds</span>
          <span>Mon–Fri 7:30am–7:30pm</span>
          <span>Sat 7:30am–1pm</span>
          <Link
            href="/acute-sports-injury-clinic"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              color: "#fff",
              fontWeight: 600,
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", display: "inline-block", flexShrink: 0 }} />
            Sun 9am–2pm · Acute Sports Injury Clinic →
          </Link>
        </div>
        <a
          href="tel:+61483918427"
          style={{
            background: "#fff",
            color: "var(--navy)",
            border: "none",
            padding: "8px 18px",
            borderRadius: 6,
            fontWeight: 700,
            fontSize: "14px",
            textDecoration: "none",
            whiteSpace: "nowrap",
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            letterSpacing: "0.03em",
            textTransform: "uppercase",
            flexShrink: 0,
          }}
          onClick={() => fireGtag(CONV.phoneCall)}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.26h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          Call us
        </a>
      </div>

      {/* Responsive CSS is in globals.css — .hero-grid, .hero-proof-mobile, .hero-call-desktop, .hero-hours-strip, .sticky-bar-mobile */}
    </section>
  );
}
