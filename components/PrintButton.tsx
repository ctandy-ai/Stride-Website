"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="bg-[var(--blue)] text-white px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
    >
      Print / Save as PDF
    </button>
  );
}
