"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--navy)",
        color: "rgba(255,255,255,0.45)",
        padding: "64px var(--px) 32px",
      }}
    >
      <div
        className="footer-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "48px",
          maxWidth: 1200,
          margin: "0 auto 48px",
        }}
      >
        <div>
          <div className="footer-logo" style={{ marginBottom: 20 }}>
            <Image
              src="https://assets.cdn.filesafe.space/uGjKGDMcGryVhkZ0uDcj/media/65d412163c4a574adb19516f.png"
              alt="Stride Sports Physio & Performance"
              width={140}
              height={36}
              unoptimized
              style={{ height: 36, width: "auto" }}
            />
          </div>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(255,255,255,0.45)" }}>
            Melbourne&apos;s sports injury rehab specialists. Structured, sport-specific rehabilitation from first appointment to return to play.
            <br /><br />
            <strong style={{ color: "rgba(255,255,255,0.45)" }}>13 Puckle Street, Moonee Ponds VIC 3039</strong><br />
            Mon–Fri 7:30am–7:30pm · Sat 7:30am–1pm
          </p>
        </div>
        <div>
          <div style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff", marginBottom: 16 }}>Programs</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { href: "/#program", label: "Rehab Accelerator" },
              { href: "/#pricing", label: "Pricing" },
              { href: "/performance-programs", label: "S\u0026C Performance" },
              { href: "#", label: "Book online", modal: true },
              { href: "https://booking.clinic1.com/online-booking/wZet4fM4", label: "Book Gym", external: true },
            ].map((item) => (
              item.modal ? (
                <a
                  key={item.label}
                  href="#"
                  onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event("openModal")); }}
                  style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none", fontSize: "0.9rem" }}
                >
                  {item.label}
                </a>
              ) : item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener"
                  style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none", fontSize: "0.9rem" }}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none", fontSize: "0.9rem" }}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff", marginBottom: 16 }}>Company</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { href: "https://stridephysiohealth.com.au/about", label: "About Stride", external: true },
              { href: "https://www.preparedtoplay.com.au", label: "Prepared to Play", external: true },
              { href: "https://stridephysiohealth.com.au/contact", label: "Contact us", external: true },
              { href: "tel:0483918427", label: "0483 918 427" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener" : undefined}
                style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none", fontSize: "0.9rem" }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          paddingTop: 24,
          borderTop: "1px solid rgba(255,255,255,0.09)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div style={{ fontSize: "0.8rem" }}>© 2026 Stride Sports Physiotherapy & Performance. All rights reserved.</div>
        <div style={{ display: "flex", gap: 20 }}>
          <Link href="/privacy-policy" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none", fontSize: "0.8rem" }}>Privacy Policy</Link>
          <a href="https://www.ahpra.gov.au/Registration/Advertising-guidelines.aspx" target="_blank" rel="noopener" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none", fontSize: "0.8rem" }}>AHPRA Guidelines</a>
        </div>
      </div>
    </footer>
  );
}
