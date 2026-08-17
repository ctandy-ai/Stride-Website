import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Stride Sports Physio & Performance",
  description:
    "Privacy Policy for Stride Sports Physio & Performance. How we collect, use, and protect your personal and health information.",
};

export default function PrivacyPolicy() {
  return (
    <div style={{ background: "var(--navy)", color: "rgba(255,255,255,0.82)", minHeight: "100vh", paddingTop: 66 }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "60px 24px 80px" }}>
        <Link href="/" style={{ display: "inline-block", marginBottom: 32, fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>
          ← Back to Stride Sports Physio
        </Link>

        <h1 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#fff", marginBottom: 6 }}>Privacy Policy</h1>
        <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", marginBottom: 40 }}>Last updated: April 2026</p>

        {[
          {
            title: "1. About This Policy",
            content: `This Privacy Policy explains how Stride Sports Physio & Performance (ABN 99 632 016 016, referred to as "Stride", "we", "us", or "our") collects, uses, stores, discloses, and protects your personal information, including health information.

We are bound by the Privacy Act 1988 (Cth), the Australian Privacy Principles (APPs), and applicable state and territory health records legislation, including the Health Records Act 2001 (Vic).

We are committed to protecting the privacy and confidentiality of all individuals who interact with our clinic, website, and digital platforms.`,
          },
          {
            title: "2. Information We Collect",
            content: `Personal Information: Full name, date of birth, gender; contact details (phone number, email address, postal address); emergency contact details; payment and billing information; occupation and employer details; sporting club affiliation; communication preferences.

Health Information: Medical history, injury history, and surgical history; assessment findings, clinical notes, diagnosis, and treatment plans; imaging results (X-ray, MRI, CT, ultrasound); referral letters from other health practitioners; exercise programs and rehabilitation progress; functional movement assessments and performance data; insurance claim information.

Website and Digital Information: IP address, browser type, device type; pages viewed, time spent on site, referring URLs; cookie data and analytics identifiers; information submitted through online forms.`,
          },
          {
            title: "3. How We Collect Information",
            content: `We collect personal and health information directly from you when you book an appointment, complete intake forms, attend consultations, or submit enquiries; from third parties including referring doctors, specialists, other health practitioners, sporting clubs, and insurers; and from our digital platforms including our website, online booking system, and analytics tools.`,
          },
          {
            title: "4. Why We Collect and Use Your Information",
            content: `We use your information to: provide physiotherapy assessment, treatment, and rehabilitation services; manage your clinical care; prescribe and deliver exercise and S&C programs; process payments and manage accounts; submit and manage insurance claims; communicate with you and other practitioners involved in your care; meet our legal and regulatory obligations; improve our services and patient experience; and conduct internal business operations and quality assurance.`,
          },
          {
            title: "5. Disclosure of Your Information",
            content: `We may disclose your information to other health practitioners involved in your care (with your consent), sporting clubs and team staff (with your consent), insurance providers, payment processors, our professional advisers, government and regulatory bodies where required by law, and contracted service providers who assist us in operating our business.

We will NEVER sell your personal or health information to third parties. We will NEVER share your health information for advertising or marketing purposes.`,
          },
          {
            title: "6. Marketing Communications",
            content: `We may send you marketing communications only with your explicit opt-in consent. You can unsubscribe at any time by clicking the "unsubscribe" link in any marketing email, replying STOP to any marketing SMS, or contacting us directly. Unsubscribing from marketing will not affect clinical communications about your care.`,
          },
          {
            title: "7. Data Storage and Security",
            content: `We take reasonable steps to protect your information from misuse, interference, loss, unauthorised access, modification, or disclosure. Our security measures include encrypted data transmission (SSL/TLS), access controls on clinical systems, secure cloud-based storage through reputable providers, regular review of security practices, and staff training on privacy obligations.`,
          },
          {
            title: "8. Access and Correction",
            content: `You have the right to access the personal and health information we hold about you, and to request corrections if the information is inaccurate, incomplete, or out of date. To request access or correction, contact us using the details below.`,
          },
          {
            title: "9. Complaints",
            content: `If you believe we have not complied with this Privacy Policy or the APPs, please contact us to lodge a complaint. We will respond within 30 days. If you are not satisfied with our response, you may contact the Office of the Australian Information Commissioner (OAIC) at www.oaic.gov.au.`,
          },
          {
            title: "10. Contact Us",
            content: `Privacy Officer: Chris Tandy
Address: 13 Puckle Street, Moonee Ponds VIC 3039
Phone: 0483 918 427
Email: admin@stridephysiohealth.com.au
Website: www.stridephysiohealth.com.au`,
          },
        ].map((section, i) => (
          <div key={i}>
            <h2
              style={{
                fontSize: "1.05rem",
                fontWeight: 600,
                color: "#fff",
                marginTop: 36,
                marginBottom: 12,
                paddingBottom: 6,
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {section.title}
            </h2>
            <p style={{ marginBottom: 14, lineHeight: 1.7, whiteSpace: "pre-line" }}>
              {section.content}
            </p>
          </div>
        ))}

        <div
          style={{
            marginTop: 60,
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.08)",
            fontSize: "0.72rem",
            color: "rgba(255,255,255,0.25)",
            textAlign: "center",
          }}
        >
          © 2025 Stride Sports Physiotherapy & Performance · ABN 99 632 016 016
        </div>
      </div>
    </div>
  );
}
