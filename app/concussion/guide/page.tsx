import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Acute Recovery & Care Guide — Stride Concussion",
  description:
    "Stride concussion acute recovery guide. First 48 hours, 21-day clock, red flags, and pain management.",
};

export default function ConcussionGuide() {
  return (
    <div style={{ paddingTop: 66 }}>
      <main className="min-h-screen bg-[var(--off)]">
        <div className="max-w-2xl mx-auto px-6 py-12">

          {/* Back */}
          <Link href="/concussion" className="text-[var(--blue)] font-mono text-sm hover:underline mb-8 inline-block">
            ← Concussion resources
          </Link>

          {/* Header */}
          <div className="bg-[var(--navy)] rounded-2xl p-8 mb-8 print:bg-white print:border print:border-gray-300">
            <p className="text-[var(--blue)] font-mono text-xs uppercase tracking-widest mb-2">
              Stride Sports Physio &amp; Performance
            </p>
            <h1 className="font-bebas text-4xl text-white mb-1 print:text-gray-900">
              Acute Recovery &amp; Care Guide
            </h1>
            <p className="text-[rgba(255,255,255,0.55)] text-sm print:text-gray-500">
              Concussion management — first 48 hours
            </p>
          </div>

          {/* Athlete details */}
          <div className="bg-white border border-[var(--brd)] rounded-xl p-6 mb-6">
            <h2 className="font-bebas text-2xl text-[var(--navy)] mb-4">Your Details</h2>
            <div className="grid grid-cols-1 gap-3">
              {[
                { label: "Athlete name", value: "" },
                { label: "Date of injury (Day 0)", value: "" },
                { label: "Next appointment", value: "" },
                { label: "Stride clinician", value: "" },
              ].map(({ label }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="text-[var(--muted)] text-sm w-52 shrink-0">{label}</span>
                  <div className="flex-1 border-b border-dashed border-[var(--stone)] h-6" />
                </div>
              ))}
            </div>
          </div>

          {/* Before next visit */}
          <div className="bg-white border border-[var(--brd)] rounded-xl p-6 mb-6">
            <h2 className="font-bebas text-2xl text-[var(--navy)] mb-4">Before Your Next Visit</h2>
            <ul className="space-y-3">
              {[
                "Rest your body and your brain. No sport, training or gym.",
                "Do not drive until your doctor says you can.",
                "Fill in your symptom diary each evening and bring it with you.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[var(--blue)] mt-0.5">✓</span>
                  <span className="text-[var(--navy)] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 21-day clock */}
          <div className="bg-[var(--blue-dim)] border border-[var(--blue-glow)] rounded-xl p-6 mb-6">
            <h2 className="font-bebas text-2xl text-[var(--navy)] mb-2">The 21-Day Clock</h2>
            <p className="text-[var(--navy)] text-sm leading-relaxed">
              The brain needs time to recover. Most concussion symptoms resolve within 21 days, but every person is different. Do not rush back to sport, training, or screen-heavy activity. Your clinician will guide you through the return-to-sport stages only when you are symptom-free at rest.
            </p>
          </div>

          {/* Headache management */}
          <div className="bg-white border border-[var(--brd)] rounded-xl p-6 mb-6">
            <h2 className="font-bebas text-2xl text-[var(--navy)] mb-3">Headache Management</h2>
            <p className="text-[var(--navy)] text-sm leading-relaxed mb-3">
              Paracetamol (e.g. Panadol) at the recommended dose is safe to take for headache relief.
            </p>
            <p className="text-[var(--muted)] text-sm">
              <strong className="text-[var(--navy)]">Avoid:</strong> Anti-inflammatories (ibuprofen, naprogesic), alcohol, and codeine-containing medications in the first 48 hours unless directed by your doctor.
            </p>
          </div>

          {/* Red flags */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
            <h2 className="font-bebas text-2xl text-red-700 mb-3">⚠ Red Flags — Go to Emergency</h2>
            <p className="text-red-600 text-sm mb-3">
              If any of the following occur, go to your nearest emergency department immediately or call <strong>000</strong>:
            </p>
            <ul className="space-y-2">
              {[
                "Repeated vomiting",
                "Headache that keeps building and doesn't settle",
                "Increasing confusion or disorientation",
                "Weakness or numbness in arms or legs",
                "A seizure or convulsion",
                "Fluid from the ear or nose",
                "One pupil noticeably larger than the other",
              ].map((flag) => (
                <li key={flag} className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">•</span>
                  <span className="text-red-700 text-sm">{flag}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & disclaimer */}
          <div className="border-t border-[var(--brd)] pt-6">
            <p className="text-[var(--navy)] font-semibold text-sm mb-1">Stride Sports Physio &amp; Performance</p>
            <p className="text-[var(--muted)] text-sm">
              0483 918 427 · info@stridephysiohealth.com.au · stridephysiohealth.com.au
            </p>
            <p className="text-[var(--muted)] text-xs mt-4 leading-relaxed">
              <em>Disclaimer: This document provides acute management support. Final medical clearance to return to competitive contact sport must be obtained from a registered medical practitioner (GP or Sports Physician).</em>
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}
