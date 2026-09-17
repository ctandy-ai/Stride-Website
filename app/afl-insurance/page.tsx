"use client";
import { useState } from "react";
import Link from "next/link";
import PrintButton from "@/components/PrintButton";

/* ─── Types ──────────────────────────────────────────────── */
type Tab = "cover" | "calculator" | "form";
type Gender = "Male" | "Female" | "Other" | "Prefer not to say" | "";
type Activity = "Playing" | "Training" | "Travelling" | "Warm up / Cool down" | "Other" | "";
type Grade = "Senior" | "Reserve" | "Junior" | "Not applicable" | "";
type Surface = "Grass" | "Synthetic grass" | "Asphalt" | "Concrete" | "Indoor" | "Timber" | "";
type Weather = "Fine" | "Rain" | "Extreme heat" | "Extreme cold" | "";
type SurfaceCond = "Wet" | "Dry" | "Muddy" | "Indoor" | "";

interface Form {
  name: string; addressLine1: string; addressLine2: string; postcode: string;
  occupation: string; phone: string; email: string; dob: string;
  gender: Gender; injuryDate: string; injuryTimeAM: boolean;
  clubName: string; association: string; injuryDescription: string;
  activity: Activity; activityOther: string;
  locationIndoor: boolean; grade: Grade; division: string;
  surface: Surface; weather: Weather; surfaceCond: SurfaceCond;
  resumeWork: string; resumeTraining: string; resumePlaying: string;
  hasPHI: boolean | null; phiProvider: string;
  phiPhysio: boolean; phiAmbulance: boolean; phiHospital: boolean; phiDental: boolean;
  hasAmbulanceMembership: boolean | null;
  bankName: string; accountName: string; bsb: string; accountNumber: string;
  signatureDate: string;
}

const EMPTY: Form = {
  name: "", addressLine1: "", addressLine2: "", postcode: "",
  occupation: "", phone: "", email: "", dob: "",
  gender: "", injuryDate: "", injuryTimeAM: true,
  clubName: "", association: "", injuryDescription: "",
  activity: "", activityOther: "",
  locationIndoor: false, grade: "", division: "",
  surface: "", weather: "", surfaceCond: "",
  resumeWork: "", resumeTraining: "", resumePlaying: "",
  hasPHI: null, phiProvider: "",
  phiPhysio: false, phiAmbulance: false, phiHospital: false, phiDental: false,
  hasAmbulanceMembership: null,
  bankName: "", accountName: "", bsb: "", accountNumber: "",
  signatureDate: "",
};

/* ─── Calculator ──────────────────────────────────────────── */
function calcReimbursement(sessions: number, costPerSession: number) {
  const capped = Math.min(costPerSession, 150);
  let gross = 0;
  for (let i = 1; i <= sessions; i++) {
    const rate = i <= 5 ? 0.95 : i <= 10 ? 0.80 : 0.50;
    gross += capped * rate;
    if (gross >= 1000) { gross = 1000; break; }
  }
  const net = Math.max(0, gross - 100);
  return { gross: Math.round(gross * 100) / 100, net: Math.round(net * 100) / 100, hitCap: gross >= 1000 };
}

/* ─── Styles ──────────────────────────────────────────────── */
const inp: React.CSSProperties = {
  width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.14)",
  borderRadius: 7, padding: "9px 12px", color: "#fff", fontSize: "0.88rem",
  outline: "none", boxSizing: "border-box",
};
const lbl: React.CSSProperties = {
  display: "block", fontSize: "0.72rem", color: "rgba(255,255,255,0.40)",
  letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 5,
};
const sec: React.CSSProperties = {
  fontFamily: "var(--font-bebas)", fontSize: "1.3rem", letterSpacing: "0.04em",
  color: "#fff", marginBottom: 14, paddingBottom: 8, borderBottom: "1px solid rgba(255,255,255,0.08)",
};
const row2: React.CSSProperties = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 };
const chkRow = (label: string, checked: boolean, onChange: () => void) => (
  <label key={label} style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", fontSize: "0.88rem", color: "rgba(255,255,255,0.75)" }}>
    <input type="checkbox" checked={checked} onChange={onChange} style={{ accentColor: "var(--blue)", width: 15, height: 15 }} />
    {label}
  </label>
);
const radioGroup = <T extends string>(options: T[], value: T | "", onChange: (v: T) => void) => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
    {options.map(opt => (
      <label key={opt} style={{ display: "flex", alignItems: "center", gap: 6, cursor: "pointer", fontSize: "0.88rem", color: value === opt ? "#fff" : "rgba(255,255,255,0.55)" }}>
        <input type="radio" checked={value === opt} onChange={() => onChange(opt)}
          style={{ accentColor: "var(--blue)" }} />
        {opt}
      </label>
    ))}
  </div>
);

/* ─── Print row ───────────────────────────────────────────── */
const PrintRow = ({ label, value }: { label: string; value: string }) => (
  <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 10 }}>
    <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.78rem", width: 200, flexShrink: 0 }}>{label}</span>
    {value
      ? <span style={{ color: "#fff", fontSize: "0.88rem" }}>{value}</span>
      : <div style={{ flex: 1, borderBottom: "1px dashed rgba(255,255,255,0.12)", height: 20 }} />}
  </div>
);

/* ─── Main component ──────────────────────────────────────── */
export default function AFLInsurance() {
  const [tab, setTab] = useState<Tab>("cover");
  const [form, setForm] = useState<Form>(EMPTY);
  const [sessions, setSessions] = useState(6);
  const [costPerSession, setCostPerSession] = useState(150);

  const set = (k: keyof Form, v: any) => setForm(f => ({ ...f, [k]: v }));
  const calc = calcReimbursement(sessions, costPerSession);

  /* ─── Tab nav ─── */
  const tabs: { id: Tab; label: string }[] = [
    { id: "cover", label: "Your Cover" },
    { id: "calculator", label: "Claim Calculator" },
    { id: "form", label: "Claim Form" },
  ];

  return (
    <div style={{ background: "var(--navy)", minHeight: "100vh", paddingTop: 66 }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "60px 24px 80px" }}>

        {/* Header */}
        <div className="no-print">
          <div className="ey ey-blue" style={{ marginBottom: 10 }}>Stride Sports Physio · AFL Coverage</div>
          <h1 className="sh sh-white" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", marginBottom: 8 }}>
            Your AFL Insurance Guide
          </h1>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.9rem", lineHeight: 1.65, marginBottom: 36, maxWidth: 560 }}>
            Community AFL players are covered by the NRPP Bronze tier through Marsh/Echelon. Here&apos;s what you&apos;re entitled to, how much you can claim, and how to complete your claim form.
          </p>

          {/* Tab bar */}
          <div style={{ display: "flex", gap: 4, marginBottom: 40, borderBottom: "1px solid rgba(255,255,255,0.09)", paddingBottom: 0 }}>
            {tabs.map(t => (
              <button key={t.id} onClick={() => setTab(t.id)} style={{
                background: "none", border: "none", cursor: "pointer",
                padding: "10px 18px", fontSize: "0.88rem", fontWeight: 600,
                color: tab === t.id ? "#fff" : "rgba(255,255,255,0.40)",
                borderBottom: tab === t.id ? "2px solid var(--blue)" : "2px solid transparent",
                transition: "all 0.15s",
              }}>{t.label}</button>
            ))}
          </div>
        </div>

        {/* ══════════ TAB: COVER ══════════ */}
        {tab === "cover" && (
          <div className="no-print">

            <div style={{ background: "rgba(27,144,245,0.08)", border: "1px solid rgba(27,144,245,0.22)", borderRadius: 14, padding: "24px 28px", marginBottom: 28 }}>
              <div className="ey ey-blue" style={{ marginBottom: 8 }}>Bronze Tier — Standard AFL Cover</div>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
                As a registered community AFL player, you are automatically covered by the National Risk Protection Program (NRPP) Bronze tier, administered by Echelon Australia on behalf of Marsh Sport. This covers <strong style={{ color: "#fff" }}>non-Medicare medical costs</strong> arising from accidental injury during sanctioned club activities.
              </p>
            </div>

            {/* What's covered */}
            <h2 style={sec}>Physiotherapy Reimbursement</h2>
            <div style={{ border: "1px solid rgba(255,255,255,0.09)", borderRadius: 12, overflow: "hidden", marginBottom: 28 }}>
              {[
                { sessions: "Sessions 1–5", rate: "95%", cap: "$150/session" },
                { sessions: "Sessions 6–10", rate: "80%", cap: "$150/session" },
                { sessions: "Sessions 11+", rate: "50%", cap: "$150/session" },
              ].map((r, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 80px 120px", padding: "14px 20px", background: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "transparent", borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                  <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.88rem" }}>{r.sessions}</span>
                  <span style={{ color: "var(--blue)", fontWeight: 700, fontSize: "0.88rem" }}>{r.rate}</span>
                  <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.82rem" }}>max {r.cap}</span>
                </div>
              ))}
            </div>

            {/* Key limits */}
            <h2 style={sec}>Key Limits</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 28 }}>
              {[
                { label: "Physio sub-limit", value: "$1,000 per claim" },
                { label: "Total claim limit", value: "$2,000 per claim" },
                { label: "Excess", value: "$100 per claim" },
                { label: "Session cap", value: "$150 per session" },
                { label: "Claim window", value: "270 days from injury" },
                { label: "Benefit period", value: "52 weeks" },
              ].map(({ label, value }) => (
                <div key={label} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "14px 16px" }}>
                  <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.09em", marginBottom: 4 }}>{label}</div>
                  <div style={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem" }}>{value}</div>
                </div>
              ))}
            </div>

            {/* What's NOT covered */}
            <h2 style={sec}>What&apos;s Not Covered</h2>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", marginBottom: 32 }}>
              {[
                "Medicare items — including doctor/GP fees, surgeon fees, and the Medicare gap",
                "Pre-existing conditions or illness (accident only)",
                "Injuries outside sanctioned club activities",
                "Any amount already rebated by private health insurance",
              ].map(item => (
                <li key={item} style={{ display: "flex", gap: 10, marginBottom: 10, color: "rgba(255,255,255,0.55)", fontSize: "0.88rem", lineHeight: 1.6 }}>
                  <span style={{ color: "#f87171", flexShrink: 0 }}>✗</span>{item}
                </li>
              ))}
            </ul>

            {/* Submit to */}
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 12, padding: "20px 24px", marginBottom: 28 }}>
              <h2 style={{ ...sec, marginBottom: 10, borderBottom: "none", paddingBottom: 0 }}>Where to Submit</h2>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem", margin: 0, lineHeight: 1.7 }}>
                <strong style={{ color: "#fff" }}>Email:</strong> sportsclaims@echelonaustralia.com.au<br />
                <strong style={{ color: "#fff" }}>Post:</strong> Echelon Claims Services, GPO Box 1693, Adelaide SA 5001<br />
                <strong style={{ color: "#fff" }}>Phone:</strong> 1800 640 009
              </p>
            </div>

            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => setTab("calculator")} style={{ flex: 1, background: "var(--blue)", color: "#fff", border: "none", borderRadius: 10, padding: "14px", fontWeight: 700, fontSize: "0.9rem", cursor: "pointer" }}>
                Estimate my claim →
              </button>
              <button onClick={() => setTab("form")} style={{ flex: 1, background: "rgba(255,255,255,0.06)", color: "#fff", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 10, padding: "14px", fontWeight: 700, fontSize: "0.9rem", cursor: "pointer" }}>
                Complete claim form →
              </button>
            </div>
          </div>
        )}

        {/* ══════════ TAB: CALCULATOR ══════════ */}
        {tab === "calculator" && (
          <div className="no-print">
            <h2 style={sec}>Estimate Your Physio Claim</h2>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem", marginBottom: 28, lineHeight: 1.6 }}>
              Based on Bronze tier rates. Assumes all sessions are physiotherapy at Stride. The $100 excess applies per claim, and the $1,000 physio sub-limit caps total reimbursement.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 32 }}>
              <div>
                <label style={lbl}>Number of physio sessions</label>
                <input type="number" min={1} max={30} value={sessions}
                  onChange={e => setSessions(Math.max(1, parseInt(e.target.value) || 1))}
                  style={inp} />
              </div>
              <div>
                <label style={lbl}>Stride charge per session ($)</label>
                <input type="number" min={1} max={500} value={costPerSession}
                  onChange={e => setCostPerSession(Math.max(1, parseInt(e.target.value) || 1))}
                  style={inp} />
                <p style={{ color: "rgba(255,255,255,0.30)", fontSize: "0.72rem", marginTop: 4 }}>NRPP caps at $150/session regardless</p>
              </div>
            </div>

            {/* Breakdown */}
            <div style={{ border: "1px solid rgba(255,255,255,0.09)", borderRadius: 12, overflow: "hidden", marginBottom: 20 }}>
              {[1,2,3].map(tier => {
                const [from, to, rate] = tier === 1 ? [1,5,0.95] : tier === 2 ? [6,10,0.80] : [11,999,0.50];
                const sessionsInTier = Math.max(0, Math.min(sessions, to) - from + 1);
                if (sessionsInTier <= 0) return null;
                const capped = Math.min(costPerSession, 150);
                const tierGross = sessionsInTier * capped * rate;
                return (
                  <div key={tier} style={{ display: "grid", gridTemplateColumns: "1fr 80px 80px 110px", padding: "12px 20px", background: tier % 2 !== 0 ? "rgba(255,255,255,0.03)" : "transparent", borderBottom: "1px solid rgba(255,255,255,0.06)", fontSize: "0.85rem" }}>
                    <span style={{ color: "rgba(255,255,255,0.65)" }}>Sessions {from}–{to === 999 ? sessions : to} ({sessionsInTier} sessions)</span>
                    <span style={{ color: "var(--blue)" }}>{(rate*100).toFixed(0)}%</span>
                    <span style={{ color: "rgba(255,255,255,0.45)" }}>${(capped * rate).toFixed(2)}/ea</span>
                    <span style={{ color: "#fff", textAlign: "right" }}>${tierGross.toFixed(2)}</span>
                  </div>
                );
              }).filter(Boolean)}
            </div>

            {/* Result */}
            <div style={{ background: "rgba(27,144,245,0.08)", border: "1px solid rgba(27,144,245,0.25)", borderRadius: 12, padding: "20px 24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                <span style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.88rem" }}>Total claimable (before excess)</span>
                <span style={{ color: "#fff", fontWeight: 700 }}>${calc.gross.toFixed(2)}{calc.hitCap ? " (capped at $1,000)" : ""}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14, paddingBottom: 14, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <span style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.88rem" }}>Less $100 excess</span>
                <span style={{ color: "#f87171", fontWeight: 700 }}>− $100.00</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "rgba(255,255,255,0.90)", fontWeight: 700 }}>Estimated net reimbursement</span>
                <span style={{ color: "var(--blue)", fontWeight: 800, fontSize: "1.3rem" }}>${calc.net.toFixed(2)}</span>
              </div>
              {costPerSession > 150 && (
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.75rem", marginTop: 10, marginBottom: 0 }}>
                  Note: Your session cost (${costPerSession}) exceeds the $150 NRPP cap. The ${costPerSession - 150} gap per session is not covered by NRPP.
                </p>
              )}
            </div>

            <div style={{ marginTop: 20 }}>
              <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.72rem", lineHeight: 1.6, marginBottom: 16 }}>
                Estimate only. Actual reimbursement is at Echelon&apos;s discretion. Claim through private health insurance first where possible — NRPP covers non-Medicare expenses not otherwise reimbursed. Does not include Medicare items.
              </p>
              <button onClick={() => setTab("form")} style={{ width: "100%", background: "var(--blue)", color: "#fff", border: "none", borderRadius: 10, padding: "14px", fontWeight: 700, fontSize: "0.9rem", cursor: "pointer" }}>
                Complete my claim form →
              </button>
            </div>
          </div>
        )}

        {/* ══════════ TAB: FORM ══════════ */}
        {tab === "form" && (
          <div>
            {/* Print actions — hidden on print */}
            <div className="no-print" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
              <div>
                <h2 style={{ ...sec, marginBottom: 4, borderBottom: "none", paddingBottom: 0 }}>Section A — Claimant Details</h2>
                <p style={{ color: "rgba(255,255,255,0.40)", fontSize: "0.82rem" }}>Fill in your details, then print or save as PDF to submit to Echelon.</p>
              </div>
              <PrintButton />
            </div>

            {/* ─── PRINT HEADER (only visible when printing) ─── */}
            <div className="print-only" style={{ display: "none", marginBottom: 24, paddingBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
              <div style={{ fontFamily: "var(--font-bebas)", fontSize: "1.8rem", color: "#fff", letterSpacing: "0.04em" }}>NRPP Personal Injury Claim Form — Section A</div>
              <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", marginTop: 4 }}>Echelon Australia Pty Ltd · sportsclaims@echelonaustralia.com.au · GPO Box 1693, Adelaide SA 5001</div>
            </div>

            {/* Personal details */}
            <div className="no-print" style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
              <h3 style={sec}>Personal Details</h3>
              <div><label style={lbl}>Full name</label><input style={inp} value={form.name} onChange={e=>set("name",e.target.value)} placeholder="First and last name" /></div>
              <div><label style={lbl}>Address line 1</label><input style={inp} value={form.addressLine1} onChange={e=>set("addressLine1",e.target.value)} placeholder="Street address" /></div>
              <div style={row2}>
                <div><label style={lbl}>Address line 2</label><input style={inp} value={form.addressLine2} onChange={e=>set("addressLine2",e.target.value)} placeholder="Suburb, state" /></div>
                <div><label style={lbl}>Postcode</label><input style={inp} value={form.postcode} onChange={e=>set("postcode",e.target.value)} placeholder="3000" /></div>
              </div>
              <div style={row2}>
                <div><label style={lbl}>Occupation</label><input style={inp} value={form.occupation} onChange={e=>set("occupation",e.target.value)} /></div>
                <div><label style={lbl}>Phone number</label><input style={inp} value={form.phone} onChange={e=>set("phone",e.target.value)} type="tel" /></div>
              </div>
              <div style={row2}>
                <div><label style={lbl}>Email address</label><input style={inp} value={form.email} onChange={e=>set("email",e.target.value)} type="email" /></div>
                <div><label style={lbl}>Date of birth</label><input style={inp} value={form.dob} onChange={e=>set("dob",e.target.value)} placeholder="DD/MM/YYYY" /></div>
              </div>
              <div><label style={lbl}>Gender</label>{radioGroup<Gender>(["Male","Female","Other","Prefer not to say"], form.gender, v=>set("gender",v))}</div>
            </div>

            {/* Injury details */}
            <div className="no-print" style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
              <h3 style={sec}>Injury Details</h3>
              <div style={row2}>
                <div><label style={lbl}>Date of injury</label><input style={inp} value={form.injuryDate} onChange={e=>set("injuryDate",e.target.value)} placeholder="DD/MM/YYYY" /></div>
                <div><label style={lbl}>Time of injury</label>
                  <div style={{ display: "flex", gap: 12, marginTop: 4 }}>
                    {radioGroup<"AM"|"PM">(["AM","PM"], form.injuryTimeAM ? "AM" : "PM", v=>set("injuryTimeAM", v==="AM"))}
                  </div>
                </div>
              </div>
              <div style={row2}>
                <div><label style={lbl}>Club name</label><input style={inp} value={form.clubName} onChange={e=>set("clubName",e.target.value)} placeholder="e.g. Essendon Doutta Stars" /></div>
                <div><label style={lbl}>Association name</label><input style={inp} value={form.association} onChange={e=>set("association",e.target.value)} placeholder="e.g. EDFL" /></div>
              </div>
              <div><label style={lbl}>Describe your injury and how it happened</label>
                <textarea style={{ ...inp, height: 90, resize: "vertical" }} value={form.injuryDescription} onChange={e=>set("injuryDescription",e.target.value)} placeholder="Describe what happened, which body part was injured, and the mechanism of injury..." />
              </div>
            </div>

            {/* Research data */}
            <div className="no-print" style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
              <h3 style={sec}>Injury Research Data</h3>
              <div><label style={lbl}>Activity at time of injury</label>{radioGroup<Activity>(["Playing","Training","Travelling","Warm up / Cool down","Other"], form.activity, v=>set("activity",v))}
                {form.activity==="Other" && <input style={{ ...inp, marginTop: 8 }} value={form.activityOther} onChange={e=>set("activityOther",e.target.value)} placeholder="Please describe" />}
              </div>
              <div style={row2}>
                <div><label style={lbl}>Location</label>{radioGroup<"Indoor"|"Outdoor">(["Indoor","Outdoor"], form.locationIndoor ? "Indoor" : "Outdoor", v=>set("locationIndoor",v==="Indoor"))}</div>
                <div><label style={lbl}>Grade</label>{radioGroup<Grade>(["Senior","Reserve","Junior","Not applicable"], form.grade, v=>set("grade",v))}</div>
              </div>
              <div><label style={lbl}>Division</label><input style={inp} value={form.division} onChange={e=>set("division",e.target.value)} placeholder="e.g. Division 1" /></div>
              <div><label style={lbl}>Surface type</label>{radioGroup<Surface>(["Grass","Synthetic grass","Asphalt","Concrete","Indoor","Timber"], form.surface, v=>set("surface",v))}</div>
              <div style={row2}>
                <div><label style={lbl}>Weather</label>{radioGroup<Weather>(["Fine","Rain","Extreme heat","Extreme cold"], form.weather, v=>set("weather",v))}</div>
                <div><label style={lbl}>Surface conditions</label>{radioGroup<SurfaceCond>(["Wet","Dry","Muddy","Indoor"], form.surfaceCond, v=>set("surfaceCond",v))}</div>
              </div>
            </div>

            {/* Resumption */}
            <div className="no-print" style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
              <h3 style={sec}>Expected Resumption Dates</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
                <div><label style={lbl}>Return to work</label><input style={inp} value={form.resumeWork} onChange={e=>set("resumeWork",e.target.value)} placeholder="DD/MM/YYYY" /></div>
                <div><label style={lbl}>Return to training</label><input style={inp} value={form.resumeTraining} onChange={e=>set("resumeTraining",e.target.value)} placeholder="DD/MM/YYYY" /></div>
                <div><label style={lbl}>Return to playing</label><input style={inp} value={form.resumePlaying} onChange={e=>set("resumePlaying",e.target.value)} placeholder="DD/MM/YYYY" /></div>
              </div>
            </div>

            {/* PHI */}
            <div className="no-print" style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
              <h3 style={sec}>Private Health Insurance</h3>
              <div><label style={lbl}>Do you have private health insurance?</label>{radioGroup<"Yes"|"No">(["Yes","No"], form.hasPHI===null?"":form.hasPHI?"Yes":"No", v=>set("hasPHI",v==="Yes"))}</div>
              {form.hasPHI && <>
                <div><label style={lbl}>Provider name</label><input style={inp} value={form.phiProvider} onChange={e=>set("phiProvider",e.target.value)} placeholder="e.g. Medibank, Bupa, HCF" /></div>
                <div><label style={lbl}>What does your PHI cover?</label>
                  <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 4 }}>
                    {chkRow("Physiotherapy", form.phiPhysio, ()=>set("phiPhysio",!form.phiPhysio))}
                    {chkRow("Ambulance", form.phiAmbulance, ()=>set("phiAmbulance",!form.phiAmbulance))}
                    {chkRow("Hospital", form.phiHospital, ()=>set("phiHospital",!form.phiHospital))}
                    {chkRow("Dental", form.phiDental, ()=>set("phiDental",!form.phiDental))}
                  </div>
                </div>
              </>}
              <div><label style={lbl}>Ambulance membership?</label>{radioGroup<"Yes"|"No">(["Yes","No"], form.hasAmbulanceMembership===null?"":form.hasAmbulanceMembership?"Yes":"No", v=>set("hasAmbulanceMembership",v==="Yes"))}</div>
            </div>

            {/* Bank */}
            <div className="no-print" style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
              <h3 style={sec}>Payment Details (EFT)</h3>
              <div style={row2}>
                <div><label style={lbl}>Bank name</label><input style={inp} value={form.bankName} onChange={e=>set("bankName",e.target.value)} /></div>
                <div><label style={lbl}>Account name</label><input style={inp} value={form.accountName} onChange={e=>set("accountName",e.target.value)} /></div>
              </div>
              <div style={row2}>
                <div><label style={lbl}>BSB</label><input style={inp} value={form.bsb} onChange={e=>set("bsb",e.target.value)} placeholder="000-000" /></div>
                <div><label style={lbl}>Account number</label><input style={inp} value={form.accountNumber} onChange={e=>set("accountNumber",e.target.value)} /></div>
              </div>
            </div>

            {/* Declaration note */}
            <div className="no-print" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 10, padding: "16px 20px", marginBottom: 24 }}>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.8rem", lineHeight: 1.65, margin: 0 }}>
                <strong style={{ color: "#fff" }}>Declaration:</strong> By printing and signing this form you confirm the information is true and correct, the injury was accidental, not pre-existing, and you authorise Echelon/Marsh to access relevant medical and insurance records to assess your claim.
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }} className="no-print">
              <div><label style={lbl}>Date of signature</label><input style={{ ...inp, width: 180 }} value={form.signatureDate} onChange={e=>set("signatureDate",e.target.value)} placeholder="DD/MM/YYYY" /></div>
              <PrintButton />
            </div>

            {/* ─── PRINT VERSION ─── */}
            <div className="print-only" style={{ display: "none" }}>
              <div style={{ marginBottom: 24 }}>
                <h3 style={sec}>Personal Details</h3>
                <PrintRow label="Full name" value={form.name} />
                <PrintRow label="Address" value={[form.addressLine1, form.addressLine2, form.postcode].filter(Boolean).join(", ")} />
                <PrintRow label="Occupation" value={form.occupation} />
                <PrintRow label="Phone" value={form.phone} />
                <PrintRow label="Email" value={form.email} />
                <PrintRow label="Date of birth" value={form.dob} />
                <PrintRow label="Gender" value={form.gender} />
              </div>
              <div style={{ marginBottom: 24 }}>
                <h3 style={sec}>Injury Details</h3>
                <PrintRow label="Date of injury" value={form.injuryDate} />
                <PrintRow label="Time of injury" value={form.injuryTimeAM ? "AM" : "PM"} />
                <PrintRow label="Club name" value={form.clubName} />
                <PrintRow label="Association" value={form.association} />
                <PrintRow label="Injury description" value={form.injuryDescription} />
                <PrintRow label="Activity" value={form.activity === "Other" ? form.activityOther : form.activity} />
                <PrintRow label="Location" value={form.locationIndoor ? "Indoor" : "Outdoor"} />
                <PrintRow label="Grade" value={form.grade} />
                <PrintRow label="Division" value={form.division} />
                <PrintRow label="Surface type" value={form.surface} />
                <PrintRow label="Weather" value={form.weather} />
                <PrintRow label="Surface conditions" value={form.surfaceCond} />
              </div>
              <div style={{ marginBottom: 24 }}>
                <h3 style={sec}>Resumption Dates</h3>
                <PrintRow label="Return to work" value={form.resumeWork} />
                <PrintRow label="Return to training" value={form.resumeTraining} />
                <PrintRow label="Return to playing" value={form.resumePlaying} />
              </div>
              <div style={{ marginBottom: 24 }}>
                <h3 style={sec}>Private Health Insurance</h3>
                <PrintRow label="Has PHI" value={form.hasPHI===null?"":form.hasPHI?"Yes":"No"} />
                {form.hasPHI && <>
                  <PrintRow label="Provider" value={form.phiProvider} />
                  <PrintRow label="Covers" value={[form.phiPhysio&&"Physio",form.phiAmbulance&&"Ambulance",form.phiHospital&&"Hospital",form.phiDental&&"Dental"].filter(Boolean).join(", ")} />
                </>}
                <PrintRow label="Ambulance membership" value={form.hasAmbulanceMembership===null?"":form.hasAmbulanceMembership?"Yes":"No"} />
              </div>
              <div style={{ marginBottom: 24 }}>
                <h3 style={sec}>EFT Payment Details</h3>
                <PrintRow label="Bank" value={form.bankName} />
                <PrintRow label="Account name" value={form.accountName} />
                <PrintRow label="BSB" value={form.bsb} />
                <PrintRow label="Account number" value={form.accountNumber} />
              </div>
              <div style={{ marginTop: 32, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.15)" }}>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.75rem", lineHeight: 1.65, marginBottom: 24 }}>
                  I declare that to the best of my knowledge and belief the information in this form is true and correct. The injury was sustained accidentally during a sanctioned club activity and was not pre-existing. I authorise Echelon Australia Pty Ltd and Marsh Sport to obtain any information relevant to this claim from any medical practitioner, hospital, or other insurer.
                </p>
                <div style={{ display: "flex", gap: 40 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.3)", height: 40, marginBottom: 6 }} />
                    <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)" }}>Claimant&apos;s Signature (parent/guardian if under 18)</span>
                  </div>
                  <div style={{ width: 200 }}>
                    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.3)", height: 40, marginBottom: 6, display: "flex", alignItems: "flex-end", paddingBottom: 4 }}>
                      {form.signatureDate && <span style={{ color: "#fff", fontSize: "0.88rem" }}>{form.signatureDate}</span>}
                    </div>
                    <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)" }}>Date</span>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: 32, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.10)", fontSize: "0.72rem", color: "rgba(255,255,255,0.25)" }}>
                Submit with receipts to: sportsclaims@echelonaustralia.com.au or GPO Box 1693, Adelaide SA 5001 · Echelon Australia Pty Ltd (ABN 96 085 720 056) · Claims manager for NRPP Policy AFL 01112024
              </div>
            </div>

          </div>
        )}

        {/* Footer */}
        <div className="no-print" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 20, marginTop: 48 }}>
          <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.22)", lineHeight: 1.65, margin: 0 }}>
            This tool is provided by Stride Sports Physio &amp; Performance to assist community AFL players understand and access their NRPP Bronze cover. It is for educational purposes only and does not constitute insurance or legal advice. Claim decisions are at the absolute discretion of Echelon Australia / Marsh Sport acting as Trustee. Always claim through private health insurance first.
          </p>
        </div>

      </div>
    </div>
  );
}
