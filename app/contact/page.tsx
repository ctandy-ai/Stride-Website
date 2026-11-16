"use client";

import { fireGtag, CONV } from "@/lib/conversions";

export default function ContactPage() {
  return (
    <div style={{ paddingTop: 66 }}>
      {/* Hero */}
      <div
        style={{
          background: "var(--navy)",
          padding: "80px var(--px) 64px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(3rem, 7vw, 6rem)",
            lineHeight: 0.9,
            letterSpacing: "0.02em",
            color: "#fff",
            marginBottom: 24,
          }}
        >
          Get in touch.
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.65)",
            maxWidth: 520,
            margin: "0 auto",
            fontSize: "1.1rem",
            lineHeight: 1.7,
          }}
        >
          Stride Sports Physio &amp; Performance — 13 Puckle Street, Moonee Ponds.
        </p>
      </div>

      {/* Contact details */}
      <div
        style={{
          background: "var(--navy)",
          padding: "60px var(--px) 80px",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 32,
              marginBottom: 48,
            }}
          >
            {/* Address */}
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: 12,
                padding: "32px 28px",
                borderTop: "3px solid var(--orange)",
              }}
            >
              <div
                style={{
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-dm-mono)",
                  letterSpacing: "0.1em",
                  color: "var(--orange)",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                Address
              </div>
              <p style={{ color: "#fff", fontSize: "1rem", lineHeight: 1.6, margin: 0 }}>
                13 Puckle Street<br />
                Moonee Ponds VIC 3039
              </p>
            </div>

            {/* Phone */}
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: 12,
                padding: "32px 28px",
                borderTop: "3px solid var(--orange)",
              }}
            >
              <div
                style={{
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-dm-mono)",
                  letterSpacing: "0.1em",
                  color: "var(--orange)",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                Phone
              </div>
              <a
                href="tel:+61483918427"
                onClick={() => fireGtag(CONV.phoneCall)}
                style={{
                  color: "#fff",
                  fontSize: "1.15rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                0483 918 427
              </a>
            </div>

            {/* Hours */}
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: 12,
                padding: "32px 28px",
                borderTop: "3px solid var(--orange)",
              }}
            >
              <div
                style={{
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-dm-mono)",
                  letterSpacing: "0.1em",
                  color: "var(--orange)",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                Hours
              </div>
              <p style={{ color: "rgba(255,255,255,0.80)", fontSize: "0.95rem", lineHeight: 1.8, margin: 0 }}>
                Mon–Fri 7:30am–7:30pm<br />
                Sat 7:30am–1pm<br />
                Sun 9am–2pm <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem" }}>(Acute Sports Injury Clinic)</span>
              </p>
            </div>
          </div>

          {/* Booking button */}
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <a
              href="https://stride-physiotherapy-and-health-group.au1.cliniko.com/bookings?business_id=76801"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              onClick={() => fireGtag(CONV.clinikoClick)}
              style={{ display: "inline-block" }}
            >
              Book Online →
            </a>
          </div>

          {/* Map */}
          <div style={{ borderRadius: 12, overflow: "hidden" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0!2d144.9169!3d-37.7652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c6a0b59d3%3A0x5045675218cce!2s13%20Puckle%20St%2C%20Moonee%20Ponds%20VIC%203039!5e0!3m2!1sen!2sau!4v1"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: 8, display: "block" }}
              allowFullScreen
              loading="lazy"
              title="Stride Sports Physio location"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
