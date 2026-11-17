"use client";

// Sports Physio in Moonee Ponds — local SEO section
// Brief: lower-middle of homepage, before FAQ

import { fireGtag, CONV } from "@/lib/conversions";

const BOOKING_URL =
  "https://stride-physiotherapy-and-health-group.au1.cliniko.com/bookings";
const PHONE = "tel:+61483918427";
const PHONE_DISPLAY = "0483 918 427";

// Opening hours sourced from existing JSON-LD schema in layout.tsx
const HOURS = [
  { days: "Monday – Friday", time: "7:30 am – 7:30 pm" },
  { days: "Saturday", time: "7:30 am – 1:00 pm" },
  // TODO: confirm with Chris — Sunday Acute Clinic hours (currently 9am–2pm per schema)
  { days: "Sunday", time: "9:00 am – 2:00 pm (Acute Clinic)" },
];

export default function MooneePonds() {
  return (
    <section
      id="moonee-ponds"
      style={{
        background: "var(--navy)",
        padding: "80px var(--px)",
        borderTop: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Eyebrow */}
        <div
          className="ey ey-blue"
          style={{ marginBottom: 20 }}
        >
          Local sports physio
        </div>

        {/* Heading */}
        <h2
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(2.8rem, 6vw, 4.8rem)",
            lineHeight: 0.95,
            letterSpacing: "0.02em",
            color: "#fff",
            marginBottom: 32,
          }}
        >
          Sports Physio in{" "}
          <span className="orange">Moonee Ponds.</span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 56,
            alignItems: "start",
          }}
          className="moonee-grid"
        >
          {/* Left — copy + hours + buttons */}
          <div>
            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "1.05rem",
                lineHeight: 1.75,
                marginBottom: 20,
              }}
            >
              Stride is a sports physio clinic at 13 Puckle St, Moonee Ponds
              — a short walk from Moonee Ponds station and the Puckle St
              shops. We work with players and athletes from Moonee Ponds,
              Essendon, Ascot Vale, Flemington, Strathmore, Aberfeldie and
              Essendon North, across footy, soccer, netball, basketball,
              running and combat sports.
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "0.95rem",
                lineHeight: 1.7,
                marginBottom: 32,
              }}
            >
              {/* TODO: confirm with Chris — okay to name Oak Park FC and Doutta Stars FC here? */}
              Stride is the club physio for Oak Park FC and Essendon Doutta
              Stars FC in the EDFL.
            </p>

            {/* Hours */}
            <div
              style={{
                borderLeft: "3px solid var(--blue)",
                paddingLeft: 20,
                marginBottom: 36,
              }}
            >
              <div
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "0.72rem",
                  fontFamily: "var(--font-dm-mono)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                Opening hours
              </div>
              {HOURS.map((h) => (
                <div
                  key={h.days}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 16,
                    color: "rgba(255,255,255,0.75)",
                    fontSize: "0.9rem",
                    marginBottom: 6,
                  }}
                >
                  <span>{h.days}</span>
                  <span style={{ color: "rgba(255,255,255,0.5)" }}>
                    {h.time}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener"
                className="btn btn-primary"
              >
                Book online →
              </a>
              <a
                href={PHONE}
                className="btn btn-secondary"
                onClick={() => fireGtag(CONV.phoneCall)}
              >
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          {/* Right — lazy-loaded Google Map */}
          <div
            style={{
              borderRadius: 12,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.1)",
              aspectRatio: "4/3",
              background: "rgba(255,255,255,0.04)",
            }}
          >
            <iframe
              title="Stride Sports Physio — 13 Puckle St Moonee Ponds"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0!2d144.9169!3d-37.7652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4e5e6e5e5e%3A0x0!2s13+Puckle+St%2C+Moonee+Ponds+VIC+3039!5e0!3m2!1sen!2sau!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* Responsive: stack on mobile */}
      <style>{`
        @media (max-width: 768px) {
          .moonee-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
