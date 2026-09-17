import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Concussion Symptom Diary — Stride Sports Physio",
  description:
    "Daily concussion symptom tracker for Stride athletes. Record headache, dizziness, brain fog, light sensitivity, sleep, and activity each day.",
};

const DAYS = [
  { label: "Day 0", day: "Sunday" },
  { label: "Day 1", day: "Monday" },
  { label: "Day 2", day: "Tuesday" },
  { label: "Day 3", day: "Wednesday" },
  { label: "Day 4", day: "Thursday" },
  { label: "Day 5", day: "Friday" },
  { label: "Day 6", day: "Saturday" },
];

const SYMPTOMS = [
  "Headache (0–10)",
  "Dizziness",
  "Brain fog",
  "Light sensitivity",
  "Noise sensitivity",
  "Sleep last night",
  "What I did today",
  "What made it worse",
];

export default function ConcussionDiary() {
  return (
    <div style={{ paddingTop: 66 }}>
      <main className="min-h-screen bg-[var(--off)]">
        <div className="max-w-3xl mx-auto px-6 py-12">

          {/* Back */}
          <Link href="/concussion" className="text-[var(--blue)] font-mono text-sm hover:underline mb-8 inline-block">
            ← Concussion resources
          </Link>

          {/* Header */}
          <div className="bg-[var(--navy)] rounded-2xl p-8 mb-8">
            <p className="text-[var(--blue)] font-mono text-xs uppercase tracking-widest mb-2">
              Stride Sports Physio &amp; Performance
            </p>
            <h1 className="font-bebas text-4xl text-white mb-1">
              Concussion Symptom Diary
            </h1>
            <p className="text-[rgba(255,255,255,0.55)] text-sm">
              Fill in each evening. Bring to your next appointment.
            </p>
          </div>

          {/* Athlete details */}
          <div className="bg-white border border-[var(--brd)] rounded-xl p-6 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <span className="text-[var(--muted)] text-sm shrink-0">Athlete:</span>
                <div className="flex-1 border-b border-dashed border-[var(--stone)] h-6" />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[var(--muted)] text-sm shrink-0">Date of injury (Day 0):</span>
                <div className="flex-1 border-b border-dashed border-[var(--stone)] h-6" />
              </div>
            </div>
          </div>

          {/* Print button */}
          <div className="flex justify-end mb-6 print:hidden">
            <PrintButton />
          </div>

          {/* Diary entries */}
          <div className="space-y-6">
            {DAYS.map(({ label, day }) => (
              <div key={label} className="bg-white border border-[var(--brd)] rounded-xl overflow-hidden">
                <div className="bg-[var(--navy)] px-6 py-3 flex items-center justify-between">
                  <span className="font-bebas text-xl text-white">{day}</span>
                  <span className="text-[var(--blue)] font-mono text-xs uppercase tracking-widest">{label}</span>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {SYMPTOMS.map((symptom) => (
                      <div key={symptom} className="flex items-center gap-3">
                        <span className="text-[var(--muted)] text-sm w-44 shrink-0">{symptom}</span>
                        <div className="flex-1 border-b border-dashed border-[var(--stone)] h-6" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-10 border-t border-[var(--brd)] pt-6">
            <p className="text-[var(--navy)] font-semibold text-sm mb-1">Stride Sports Physio &amp; Performance</p>
            <p className="text-[var(--muted)] text-sm">
              0483 918 427 · info@stridephysiohealth.com.au · stridephysiohealth.com.au
            </p>
            <p className="text-[var(--muted)] text-xs mt-4 leading-relaxed">
              <em>Progressing through return-to-sport stages does not constitute competitive clearance. Final clearance must be obtained from a registered medical practitioner (GP or Sports Physician).</em>
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}
