import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Booking Confirmed | Stride Sports Physio",
  description: "Your booking is confirmed. We look forward to seeing you at Stride Sports Physio & Performance.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/thank-you" },
};

export default function ThankYouPage() {
  return (
    <>
      {/* Google Ads conversion — Cliniko Booking Completed */}
      <Script id="gads-booking-conversion" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('event', 'conversion', {
            send_to: 'AW-18138589776/nxyBCN6TnLkdENDUk8lD',
            value: 145.0,
            currency: 'AUD',
            transaction_id: ''
          });
        `}
      </Script>

      <div style={{ paddingTop: 66, minHeight: "100vh", background: "var(--navy)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", maxWidth: 600, padding: "0 var(--px)" }}>
          <div style={{ fontSize: "4rem", marginBottom: 24 }}>✅</div>
          <h1
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(3rem, 7vw, 5rem)",
              lineHeight: 0.9,
              letterSpacing: "0.02em",
              color: "#fff",
              marginBottom: 20,
            }}
          >
            Booking confirmed.
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: 32 }}>
            We&apos;ll be in touch to confirm your appointment details. If you have any questions before your first session, call us on{" "}
            <a href="tel:0483918427" style={{ color: "var(--blue)", textDecoration: "none" }}>0483 918 427</a>.
          </p>
          <a
            href="/"
            style={{
              display: "inline-block",
              background: "var(--blue)",
              color: "#fff",
              padding: "14px 32px",
              borderRadius: 4,
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "0.9rem",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Back to Stride →
          </a>
          <p style={{ marginTop: 24, color: "rgba(255,255,255,0.35)", fontSize: "0.82rem" }}>
            13 Puckle Street, Moonee Ponds · Mon–Fri 7:30am–7:30pm · Sat 7:30am–1pm
          </p>
        </div>
      </div>
    </>
  );
}
