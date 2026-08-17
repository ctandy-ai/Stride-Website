"use client";

// Team + Testimonials section
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const testimonials = [
  {
    text: "Three months with Stride completely changed how I approached my rehab. I was never in the dark about the next steps or where I was going. The team made the whole process feel manageable when it could've been really overwhelming.",
    em: "I was never in the dark about the next steps or where I was going.",
    name: "James K.",
    role: "AFL · Forward Pocket",
    av: "JK",
  },
  {
    text: "Finally a physio that actually understands the demands of jiu-jitsu. They didn't just tell me to stop training — they mapped out exactly what I could do while the shoulder healed. Back to comp in 6 weeks, on schedule.",
    em: "they mapped out exactly what I could do",
    name: "Alex W.",
    role: "BJJ Blue Belt · Competitor",
    av: "AW",
  },
  {
    text: "The Rehab Accelerator is genuinely different to anything I've tried before. I had a written plan after my first appointment — timelines, milestones, the whole thing. I knew exactly where I was at every step of the way.",
    em: "I had a written plan after my first appointment",
    name: "Marcus T.",
    role: "Netball · State League",
    av: "MT",
  },
];

const team = [
  {
    name: "Chris Tandy",
    role: "Director · Senior Athletic Physiotherapist · Coach",
    bio: "Masters of Sports Physiotherapy, La Trobe University. 11 years embedded at Melbourne Storm NRL — premierships in 2017 and 2020. Essendon Football Club VFL. Published researcher in warm-up protocols. The methodology that keeps elite athletes on the park now drives every program at Stride.",
    boldBio: "11 years embedded at Melbourne Storm NRL",
    img: "https://assets.cdn.filesafe.space/uGjKGDMcGryVhkZ0uDcj/media/66f50afea0a6fb0523531782.webp",
  },
  {
    name: "Tom Yeung",
    role: "Senior Athletic Physiotherapist · Coach",
    bio: "Bachelor of Physiotherapy, La Trobe University, with additional training in Sports & Exercise Rehabilitation. Avid gym-goer with a background in combat training — Tom brings genuine understanding of the demands combat athletes face. He knows why a 12-week full rest prescription doesn't work for a competitor.",
    boldBio: "Avid gym-goer with a background in combat training",
    img: null,
  },
  {
    name: "Conner Van Turnhout",
    role: "Athletic Physiotherapist · Coach",
    bio: "Bachelor of Physiotherapy and Postgraduate Certificate in Sports Physiotherapy, University of Otago — currently completing a Master of Sports Physiotherapy at La Trobe. Keen CrossFitter with a background in Rugby Union, Conner understands the physical demands of sport and the importance of staying active. Evidence-based care tailored to help you achieve your goals.",
    boldBio: "Keen CrossFitter with a background in Rugby Union",
    img: null,
  },
];

export default function Solution() {
  const refT = useRef(null);
  const inViewT = useInView(refT, { once: true, margin: "-80px" });
  const refTeam = useRef(null);
  const inViewTeam = useInView(refTeam, { once: true, margin: "-80px" });

  return (
    <>
      {/* Testimonials */}
      <div ref={refT} id="proof" style={{ background: "var(--off)", padding: "96px var(--px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 20 }}>
            <div>
              <div className="ey ey-navy">What athletes say</div>
              <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 0.9, color: "var(--navy)", letterSpacing: "0.02em" }}>
                Real athletes.<br /><span className="orange">Real clubs.</span>
              </h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ color: "#F5C518", fontSize: "1.3rem" }}>★★★★★</span>
              <div>
                <div style={{ color: "var(--navy)", fontWeight: 700 }}>5.0 <span style={{ color: "var(--muted)", fontWeight: 400 }}>Google rating</span></div>
                <div style={{ fontSize: "0.7rem", color: "var(--muted)" }}>Moonee Ponds clinic</div>
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inViewT ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  padding: 28,
                  border: "1px solid var(--stone)",
                }}
              >
                <div style={{ color: "var(--blue)", fontSize: "3rem", lineHeight: 0.8, marginBottom: 12, fontFamily: "Georgia" }}>&quot;</div>
                <p style={{ color: "#4A6070", lineHeight: 1.7, marginBottom: 20, fontSize: "0.95rem" }}>
                  {t.text}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: "var(--blue-dim)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--blue)",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                    }}
                  >
                    {t.av}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: "var(--navy)", fontSize: "0.9rem" }}>{t.name}</div>
                    <div style={{ color: "var(--muted)", fontSize: "0.75rem" }}>{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div ref={refTeam} style={{ background: "var(--navy)", padding: "96px var(--px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="ey ey-blue" style={{ justifyContent: "center" }}>Who you&apos;ll work with</div>
            <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 0.9, color: "#fff", letterSpacing: "0.02em" }}>
              Elite sport expertise.<br /><span className="orange">In your corner.</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 28 }}>
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inViewTeam ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  borderRadius: 16,
                  overflow: "hidden",
                }}
              >
                <div style={{ height: 240, background: "var(--navy-light)", position: "relative", overflow: "hidden" }}>
                  {member.img ? (
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      style={{ objectFit: "cover", objectPosition: "top center" }}
                      unoptimized
                    />
                  ) : (
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", color: "rgba(255,255,255,0.2)", fontSize: "4rem" }}>
                      👤
                    </div>
                  )}
                </div>
                <div style={{ padding: 24 }}>
                  <div style={{ color: "var(--blue)", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>
                    {member.role}
                  </div>
                  <div style={{ color: "#fff", fontWeight: 800, fontSize: "1.2rem", marginBottom: 12 }}>{member.name}</div>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem", lineHeight: 1.7 }}>
                    {member.bio.split(member.boldBio).map((part, pi) => (
                      <span key={pi}>
                        {part}
                        {pi < member.bio.split(member.boldBio).length - 1 && (
                          <strong style={{ color: "rgba(255,255,255,0.8)" }}>{member.boldBio}</strong>
                        )}
                      </span>
                    ))}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
