import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Stride Sports Physio | Moonee Ponds",
  description:
    "Meet the team at Stride Sports Physio & Performance — Chris Tandy, Tom Yeung, Conner Van Turnhout and Jordan Schorel. Sports injury physiotherapists and osteopath in Moonee Ponds, Melbourne.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Stride Sports Physio | Moonee Ponds",
    description:
      "Meet the team at Stride Sports Physio & Performance — Chris Tandy, Tom Yeung, Conner Van Turnhout and Jordan Schorel. Sports injury physiotherapists and osteopath in Moonee Ponds, Melbourne.",
    images: [{ url: 'https://www.stridephysiohealth.com.au/og-image.jpg', width: 1200, height: 630, alt: 'Stride Sports Physio & Performance — Moonee Ponds' }],
    url: 'https://www.stridephysiohealth.com.au/about',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://www.stridephysiohealth.com.au/og-image.jpg'],
  },
};

function TeamCard({ role, name, items }: { role: string; name: string; items: string[] }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.05)",
        borderRadius: 12,
        padding: "36px 32px",
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
        {role}
      </div>
      <h2
        style={{
          fontFamily: "var(--font-bebas)",
          fontSize: "2.2rem",
          color: "#fff",
          letterSpacing: "0.03em",
          marginBottom: 20,
        }}
      >
        {name}
      </h2>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {items.map((item, i) => (
          <li
            key={i}
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "0.95rem",
              lineHeight: 1.5,
              paddingLeft: 20,
              position: "relative",
            }}
          >
            <span style={{ position: "absolute", left: 0, color: "var(--orange)" }}>→</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AboutPage() {
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
          The team behind Stride.
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.65)",
            maxWidth: 600,
            margin: "0 auto",
            fontSize: "1.1rem",
            lineHeight: 1.7,
          }}
        >
          Sports injury physiotherapists in Moonee Ponds, Melbourne.
        </p>
      </div>

      {/* Team */}
      <div
        style={{
          background: "var(--navy)",
          padding: "60px var(--px) 80px",
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 40,
          }}
        >
          {/* Chris Tandy */}
          <TeamCard
            role="Director & Senior Physiotherapist"
            name="Chris Tandy"
            items={[
              "Master of Sports Physiotherapy (La Trobe)",
              "7 years with Melbourne Storm (NRL)",
              "4 years with Essendon VFL",
            ]}
          />

          {/* Tom Yeung */}
          <TeamCard
            role="Senior Athletic Physiotherapist"
            name="Tom Yeung"
            items={[
              "Bachelor of Physiotherapy, La Trobe University",
              "Founder, Combat Sports Consulting",
              "Specialises in BJJ, MMA, boxing and wrestling rehabilitation",
            ]}
          />

          {/* Conner Van Turnhout */}
          <TeamCard
            role="Athletic Physiotherapist"
            name="Conner Van Turnhout"
            items={[
              "Bachelor of Physiotherapy + PG Certificate in Sports Physiotherapy (Otago)",
              "Currently completing Master of Sports Physiotherapy, La Trobe",
              "Background in Rugby Union and CrossFit",
            ]}
          />

          {/* Jordan Schorel */}
          <TeamCard
            role="Osteopath — Sunday Acute Sports Injury Clinic"
            name="Jordan Schorel"
            items={[
              "Bachelor of Health Science / Master of Osteopathy",
              "Lead clinician, Sunday Acute Sports Injury Clinic (9am–2pm)",
              "First-point-of-care assessment and management for sport injuries",
            ]}
          />
        </div>

        {/* AHPRA statement */}
        <div
          style={{
            maxWidth: 900,
            margin: "48px auto 0",
            padding: "24px 32px",
            background: "rgba(255,255,255,0.04)",
            borderRadius: 8,
            borderLeft: "3px solid rgba(255,255,255,0.15)",
          }}
        >
          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "0.88rem",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            All physiotherapists and osteopaths at Stride Sports Physio & Performance are registered with the Australian Health Practitioner Regulation Agency (AHPRA).
          </p>
        </div>

        {/* CTA */}
        <div
          style={{
            maxWidth: 900,
            margin: "48px auto 0",
            textAlign: "center",
          }}
        >
          <a
            href="/#book"
            className="btn btn-primary"
            style={{ display: "inline-block" }}
          >
            Book an Appointment →
          </a>
        </div>
      </div>
    </div>
  );
}
