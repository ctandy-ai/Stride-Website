"use client";

import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Problem from "@/components/sections/Problem";
import Accelerator from "@/components/sections/Accelerator";
import Gym from "@/components/sections/Gym";
import CombatSports from "@/components/sections/CombatSports";
import ACLRehab from "@/components/sections/ACLRehab";
import SundayClinic from "@/components/sections/SundayClinic";
import Pricing from "@/components/sections/Pricing";
import Solution from "@/components/sections/Solution";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import BookingModal from "@/components/BookingModal";
import InjuryQuiz from "@/components/sections/InjuryQuiz";
import StickyBookBtn from "@/components/ui/StickyBookBtn";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Problem />
      <Accelerator />
      <Gym />

      {/* Class Timetable */}
      <section style={{ background: "#f6f8fa", padding: "48px 24px", textAlign: "center" }}>
        <div className="ey ey-blue" style={{ justifyContent: "center", marginBottom: 8 }}>Class Schedule</div>
        <h2 style={{ fontSize: "1.8rem", marginBottom: 24, color: "var(--navy)" }}>Find a session that fits your week</h2>
        <div style={{ maxWidth: 1000, margin: "0 auto", borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 16px rgba(0,0,0,.08)" }}>
          <iframe
            src="https://booking.clinic1.com/class-timetable/STRDI-SPORS-PHYST/embed"
            width="100%"
            height="800"
            style={{ border: 0, display: "block" }}
            title="Class Timetable"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
          />
        </div>
      </section>



      {/* Performance Programs callout */}
      <section id="performance" style={{ background: "var(--navy)", padding: "80px var(--px)" }}>
        <div className="section-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <div className="ey ey-blue" style={{ marginBottom: 16 }}>Not injured? Still want to get better.</div>
            <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(2.8rem, 5vw, 4.5rem)", lineHeight: 0.9, color: "#fff", letterSpacing: "0.02em", marginBottom: 20 }}>
              Performance programs<br /><span style={{ color: "var(--blue)" }}>built around your sport.</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem", lineHeight: 1.7, marginBottom: 28, maxWidth: 480 }}>
              We measure what your sport actually demands, grade where you sit against it, and build a program around the gap. No generic templates. No guesswork.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 24 }}>
              <div style={{ background: "rgba(27,144,245,0.12)", border: "1px solid rgba(27,144,245,0.3)", borderRadius: 8, padding: "14px 20px" }}>
                <div style={{ color: "var(--blue)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 4 }}>Athlete Performance</div>
                <div style={{ color: "#fff", fontWeight: 800, fontSize: "1.4rem" }}>$145<span style={{ fontSize: "0.85rem", fontWeight: 400, color: "rgba(255,255,255,0.5)" }}>/wk</span></div>
              </div>
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "14px 20px" }}>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 4 }}>S&amp;C Performance</div>
                <div style={{ color: "#fff", fontWeight: 800, fontSize: "1.4rem" }}>$90<span style={{ fontSize: "0.85rem", fontWeight: 400, color: "rgba(255,255,255,0.5)" }}>/wk</span></div>
              </div>
            </div>
            <a
              href="/performance-programs"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "var(--blue)", color: "#fff", textDecoration: "none",
                padding: "14px 28px", borderRadius: 2,
                fontFamily: "var(--font-inter)", fontSize: "0.88rem", fontWeight: 700,
                letterSpacing: "0.04em", textTransform: "uppercase",
              }}
            >
              See both programs →
            </a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { n: "01", title: "Blueprint Testing Session", desc: "We test what your sport demands and grade where you currently sit. You leave with a written report and a program built around your actual gaps." },
              { n: "02", title: "Six-week blocks", desc: "Programs run in six-week blocks. Coach-supervised, sport-specific, updated every session based on your data." },
              { n: "03", title: "Tell you which one you need", desc: "Sometimes that\'s the cheaper program. We\'ll tell you honestly before you commit." },
            ].map((item) => (
              <div key={item.n} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ color: "var(--blue)", fontFamily: "var(--font-mono)", fontSize: "0.7rem", fontWeight: 700, marginTop: 3, flexShrink: 0 }}>{item.n}</div>
                <div>
                  <div style={{ color: "#fff", fontWeight: 700, marginBottom: 4 }}>{item.title}</div>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CombatSports />
      <ACLRehab />
      <SundayClinic />
      <Pricing />

      {/* Guarantee */}
      <div style={{ background: "var(--off)", padding: "96px var(--px)", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div className="ey ey-navy" style={{ justifyContent: "center" }}>Our commitment</div>
          <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 0.9, color: "var(--navy)", letterSpacing: "0.02em", marginBottom: 20 }}>
            If it&apos;s not right,<br /><span className="orange">we&apos;ll make it right.</span>
          </h2>
          <p className="bt" style={{ marginBottom: 32 }}>
            We&apos;re confident in our approach — and we back that up with a genuine commitment to your experience.
            <br /><br />
            <strong>If you&apos;re not satisfied with your initial consultation, contact us and we&apos;ll work to make it right.</strong>{" "}
            We take every concern seriously and will discuss what options are appropriate for your situation.
            <br /><br />
            We want every athlete who walks through our door to feel the difference from the first appointment.
            That&apos;s not a marketing line — it&apos;s how we&apos;ve operated since 2017.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => typeof (window as any).openModal === "function" && (window as any).openModal()}
          >
            Book my assessment <span className="arr">→</span>
          </button>
        </div>
      </div>

      <Solution />
      <FAQ />
      <CTA />

      {/* Modals */}
      <BookingModal />
      <InjuryQuiz />
      <StickyBookBtn />
    </>
  );
}
