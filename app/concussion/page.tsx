import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Concussion Resources — Stride Sports Physio",
  description:
    "Concussion recovery guide and symptom diary for Stride athletes. Acute care instructions and daily tracking tool.",
};

export default function ConcussionHub() {
  return (
    <div style={{ paddingTop: 66 }}>
      <main className="min-h-screen bg-[var(--off)]">
        <div className="max-w-2xl mx-auto px-6 py-16">

          {/* Header */}
          <div className="mb-12">
            <p className="text-[var(--blue)] font-mono text-sm uppercase tracking-widest mb-3">
              Stride Sports Physio &amp; Performance
            </p>
            <h1 className="font-bebas text-5xl text-[var(--navy)] mb-4">
              Concussion Resources
            </h1>
            <p className="text-[var(--muted)] text-base leading-relaxed">
              Your clinician has shared these resources with you following your concussion assessment.
              Use the guide for your first 48 hours and fill in your symptom diary each evening.
            </p>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-4">

            <Link href="/concussion/guide">
              <div className="group bg-[var(--navy)] rounded-2xl p-8 hover:bg-[var(--navy-light)] transition-colors cursor-pointer">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[var(--blue)] font-mono text-xs uppercase tracking-widest mb-2">
                      Document 1
                    </p>
                    <h2 className="text-white font-bebas text-3xl mb-2">
                      Acute Recovery &amp; Care Guide
                    </h2>
                    <p className="text-[rgba(255,255,255,0.55)] text-sm leading-relaxed">
                      Your first 48 hours, the 21-day clock, red flags for emergency, and pain management advice.
                    </p>
                  </div>
                  <span className="text-[var(--blue)] text-2xl ml-4 mt-1 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>

            <Link href="/concussion/diary">
              <div className="group bg-white border border-[var(--brd)] rounded-2xl p-8 hover:border-[var(--blue)] transition-colors cursor-pointer">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[var(--blue)] font-mono text-xs uppercase tracking-widest mb-2">
                      Document 2
                    </p>
                    <h2 className="text-[var(--navy)] font-bebas text-3xl mb-2">
                      Symptom Diary
                    </h2>
                    <p className="text-[var(--muted)] text-sm leading-relaxed">
                      Daily tracking for headache, dizziness, brain fog, light sensitivity, sleep, and activities. Bring to your next visit.
                    </p>
                  </div>
                  <span className="text-[var(--blue)] text-2xl ml-4 mt-1 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>

          </div>

          {/* Emergency callout */}
          <div className="mt-8 bg-red-50 border border-red-200 rounded-xl p-5">
            <p className="text-red-700 font-semibold text-sm mb-1">⚠ If symptoms worsen — go to emergency</p>
            <p className="text-red-600 text-sm">
              Repeated vomiting · headache that keeps building · increasing confusion · weakness · seizure · fluid from ear or nose → nearest ED or call <strong>000</strong>
            </p>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-[var(--brd)]">
            <p className="text-[var(--muted)] text-xs">
              Stride Sports Physio &amp; Performance · 0483 918 427 · info@stridephysiohealth.com.au
            </p>
            <p className="text-[var(--muted)] text-xs mt-1">
              These resources provide acute management support only. Final medical clearance to return to competitive contact sport must be obtained from a registered medical practitioner.
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}
