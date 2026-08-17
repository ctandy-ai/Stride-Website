"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PerformanceModal from "@/components/PerformanceModal";

/* ─── Data ───────────────────────────────── */

const problemCards = [
  {
    n: "01",
    title: "Your program is generic",
    body: "It was written for a sport, or a position, or a season. It was not written for you. It cannot be, because nobody assessed you first.",
  },
  {
    n: "02",
    title: "Progress is measured by feel",
    body: "Feeling fitter is not evidence. Neither is a heavier bar. Both can improve while the thing actually limiting you sits untouched.",
  },
  {
    n: "03",
    title: "The limiter is often invisible",
    body: "How fast you produce force. How well you absorb landing. Whether one side is quietly doing less. None of that shows up in how a session feels.",
  },
];

const mechSteps = [
  {
    n: "01",
    title: "We assess before we program",
    body: "Nobody goes into a program off a website. Your first session is a movement screen and athlete profile, and it is where the picture gets built.",
  },
  {
    n: "02",
    title: "Every quality gets graded against your sport",
    body: "What your game asks for, and where you currently sit against it. That comparison is the whole basis of your program.",
  },
  {
    n: "03",
    title: "Your program targets the gap",
    body: "The work goes where the shortfall is. Everything else is maintained, not chased.",
  },
  {
    n: "04",
    title: "We re-measure every six to eight weeks",
    body: "Because a plan built on a picture from three months ago is a plan built on a guess.",
  },
];

const inclusionsRows = [
  {
    feature: "Individualised program",
    ap: { main: "Included", sub: "Built from your testing" },
    sc: { main: "Included", sub: "Built from templates and your assessment" },
  },
  {
    feature: "Gym access and coaching",
    ap: { main: "Included", sub: "" },
    sc: { main: "Included", sub: "" },
  },
  {
    feature: "Program review and progression",
    ap: { main: "Included", sub: "" },
    sc: { main: "Included", sub: "" },
  },
  {
    feature: "Field sessions",
    featureSub: "Running, acceleration, speed",
    ap: { main: "Included", sub: "" },
    sc: { addon: "Add $20 / week" },
  },
  {
    feature: "Recovery",
    featureSub: "Compression, ice baths",
    ap: { soon: true },
    sc: { soon: true, sub: "Will add at $10 / week" },
  },
  {
    feature: "Performance testing",
    featureSub: "Every 6–8 weeks",
    ap: { main: "Included", sub: "$279 value each round" },
    sc: { addon: "$195 per test", sub: "30% member discount" },
  },
  {
    feature: "Six week block structure",
    ap: { main: "Yes", sub: "" },
    sc: { main: "Yes", sub: "" },
  },
];

const faqItems = [
  {
    q: "How do you decide what goes in my program?",
    a: "Every physical quality that matters for your sport gets graded against what your sport actually demands. Your program then targets the gap between the two. That is why we can explain any exercise in your program, and why the program changes when your assessment changes.",
  },
  {
    q: "I already train. Why do I need an assessment?",
    a: "Because training and knowing what to train are different problems. Most athletes we see are already working hard. The assessment is about making sure that work is pointed at the thing that will actually move your performance.",
  },
  {
    q: "What if the assessment says I don't need either program?",
    a: "Then we will tell you. Sometimes the honest answer is rehab first, or that what you are already doing is fine and you need one thing adjusted rather than a whole program. You will get a straight answer.",
  },
  {
    q: "What happens after six weeks?",
    a: "At the end of a block you sit down with your coach to review progress and decide what the next block looks like. Most athletes continue — but that conversation happens every time, not automatically. You're not locked into anything beyond the block you're in.",
  },
  {
    q: "Can I pause?",
    a: "Yes. Pauses are available on request with reasonable notice. If something comes up, let us know early and we'll work it out.",
  },
  {
    q: "What if I'm injured?",
    a: "Book the assessment. If you're in pain or carrying an injury, the performance programs aren't the right first step — but the assessment is where we work out what's going on and point you in the right direction. If you're ready for performance training once you've cleared rehab, we'll get you into a program from there.",
  },
  {
    q: "Do I have to take the add-ons in the S&C program?",
    a: "No. Field sessions, recovery and performance testing are all optional. Nothing is automatically included or automatically charged. Take none of them and pay $90 a week.",
  },
  {
    q: "How is this different from a gym membership?",
    a: "A gym membership gives you access to equipment. These programs give you a coach, a program built specifically for you, regular review and progression, and — in Athlete Performance — objective performance testing every six to eight weeks. You're not writing your own sessions or figuring out what to do when something isn't working.",
  },
  {
    q: "What actually happens at a testing session?",
    a: "Testing measures things that training alone can't tell you: how quickly you produce force, how well you use the stretch-shortening cycle, whether there's a meaningful difference between your left and right sides. It's a structured session, not a general fitness test. The results feed directly back into your program.",
  },
  {
    q: "Can I move between programs?",
    a: "Yes. If you start on S&C and want to move to Athlete Performance for the next block — or vice versa — that's a straightforward conversation at your block review.",
  },
  {
    q: "Do I need to be a competitive athlete?",
    a: "No. These programs are for anyone who trains seriously and wants to do it properly — competitive athletes, recreational athletes, people who play sport on weekends and want to stay in the game longer. The level of competition doesn't matter. The quality of the work does.",
  },
];

const BOOKING_URL = "https://booking.clinic1.com/online-booking/wZet4fM4";

/* ─── Page ───────────────────────────────── */

export default function PerformancePrograms() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [incTab, setIncTab] = useState<"ap" | "sc" | "none">("none");
  const [builderMode, setBuilderMode] = useState<"ap" | "sc">("ap");
  const [hasField, setHasField] = useState(false);
  const [hasTesting, setHasTesting] = useState(false);

  const openModal = () => window.dispatchEvent(new Event("openModal"));

  /* Refs for section animations */
  const problemRef = useRef(null);
  const villainRef = useRef(null);
  const mechRef = useRef(null);
  const programsRef = useRef(null);
  const inclRef = useRef(null);
  const testingRef = useRef(null);
  const routingRef = useRef(null);
  const costRef = useRef(null);
  const addonsRef = useRef(null);
  const howToRef = useRef(null);
  const faqRef = useRef(null);
  const ctaRef = useRef(null);

  const problemInView = useInView(problemRef, { once: true, margin: "-80px" });
  const villainInView = useInView(villainRef, { once: true, margin: "-80px" });
  const mechInView = useInView(mechRef, { once: true, margin: "-80px" });
  const programsInView = useInView(programsRef, { once: true, margin: "-80px" });
  const inclInView = useInView(inclRef, { once: true, margin: "-80px" });
  const testingInView = useInView(testingRef, { once: true, margin: "-80px" });
  const routingInView = useInView(routingRef, { once: true, margin: "-80px" });
  const costInView = useInView(costRef, { once: true, margin: "-80px" });
  const addonsInView = useInView(addonsRef, { once: true, margin: "-80px" });
  const howToInView = useInView(howToRef, { once: true, margin: "-80px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-80px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  /* Cost builder */
  const scWeekly = 90 + (hasField ? 20 : 0);
  const scBlock = scWeekly * 6 + (hasTesting ? 195 : 0);

  return (
    <>
      <Nav />

      {/* ① HERO */}
      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: 720,
          paddingTop: 66,
          overflow: "hidden",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <Image
          src="/gym-section.jpg"
          alt=""
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center 25%" }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background:
              "linear-gradient(to right,rgba(7,17,28,0.98) 0%,rgba(7,17,28,0.92) 55%,rgba(7,17,28,0.55) 80%,rgba(7,17,28,0.25) 100%),linear-gradient(to top,rgba(7,17,28,0.95) 0%,rgba(7,17,28,0.50) 50%,rgba(7,17,28,0.15) 100%)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "0 var(--px) 72px",
            maxWidth: 700,
            width: "100%",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <div className="ey ey-blue" style={{ marginBottom: 16 }}>
              Performance Programs · Moonee Ponds
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="sh sh-white"
            style={{ fontSize: "clamp(3rem,5vw,5rem)", marginBottom: 0 }}
          >
            Training hard
            <br />
            is easy.
            <br />
            <span style={{ color: "var(--blue)" }}>
              Training the right
              <br />
              thing is the hard part.
            </span>
          </motion.h1>

          {/* Price chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: "flex", gap: 16, marginTop: 28, marginBottom: 36, flexWrap: "wrap" }}
          >
            {[
              { name: "Athlete Performance", price: "$145", unit: "/wk" },
              { name: "S&C Performance", price: "$90", unit: "/wk" },
            ].map((chip) => (
              <div
                key={chip.name}
                style={{
                  background: "rgba(27,144,245,0.10)",
                  border: "1px solid rgba(27,144,245,0.28)",
                  padding: "14px 22px",
                  borderRadius: 2,
                  minWidth: 160,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    fontSize: "0.58rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.45)",
                    marginBottom: 6,
                  }}
                >
                  {chip.name}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "2.2rem",
                    letterSpacing: "0.03em",
                    color: "#fff",
                    lineHeight: 1,
                  }}
                >
                  {chip.price}
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 400,
                      color: "rgba(255,255,255,0.40)",
                      marginLeft: 4,
                    }}
                  >
                    {chip.unit}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              fontSize: "1.08rem",
              fontWeight: 400,
              lineHeight: 1.82,
              color: "rgba(255,255,255,0.65)",
              maxWidth: 560,
              marginBottom: 36,
            }}
          >
            Most athletes are following a program nobody can fully explain. We
            will tell you exactly what is holding you back, why every exercise
            in your program is there, and which of our two programs you actually
            need. Sometimes that is the cheaper one.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.44 }}
            style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}
          >
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener"
              className="btn btn-primary"
            >
              Book a Blueprint Testing Session <span className="arr">→</span>
            </a>
            <button
              onClick={openModal}
              className="btn btn-ghost"
            >
              Book a Call
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{
              marginTop: 16,
              fontFamily: "var(--font-dm-mono)",
              fontSize: "0.60rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.38)",
            }}
          >
            Athlete Performance $145/wk &nbsp;·&nbsp; S&amp;C Performance
            $90/wk &nbsp;·&nbsp; Both in six week blocks
          </motion.p>
        </div>
      </section>

      {/* ② THE PROBLEM */}
      <section
        ref={problemRef}
        style={{ background: "var(--off)", padding: "80px var(--px)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={problemInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 52 }}
        >
          <div
            style={{
              fontFamily: "var(--font-dm-mono)",
              fontSize: "0.62rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--blue)",
              marginBottom: 12,
            }}
          >
            The gap nobody talks about
          </div>
          <h2
            className="sh sh-navy"
            style={{ fontSize: "clamp(2.4rem,4vw,4rem)", marginBottom: 0 }}
          >
            You can work extremely hard
            <br />
            on the wrong thing for an entire season
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={problemInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.88,
            color: "#4A6070",
            maxWidth: 680,
            marginBottom: 48,
          }}
        >
          <p>
            Nearly every athlete we assess is already training. Most of them are
            training hard. That is almost never the problem.
          </p>
          <p style={{ marginTop: 16 }}>
            The problem is that hard work only pays when it is pointed at the
            right thing. And most athletes have never been told what their right
            thing is, because nobody measured it.
          </p>
        </motion.div>

        {/* Problem cards - 2-col grid: copy + standalone cards (Problem.tsx pattern) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {problemCards.map((card, i) => (
              <motion.div
                key={card.n}
                initial={{ opacity: 0, x: -20 }}
                animate={problemInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15 + 0.2, duration: 0.5 }}
                style={{
                  display: "flex",
                  gap: 20,
                  padding: 20,
                  background: "#fff",
                  borderRadius: 12,
                  border: "1px solid var(--stone)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    fontSize: "0.58rem",
                    letterSpacing: "0.18em",
                    color: "var(--blue)",
                    flex: "0 0 28px",
                    paddingTop: 4,
                  }}
                >
                  {card.n}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.0rem",
                      fontWeight: 700,
                      color: "var(--navy)",
                      marginBottom: 10,
                      lineHeight: 1.3,
                    }}
                  >
                    {card.title}
                  </h3>
                  <p style={{ fontSize: "0.88rem", lineHeight: 1.7, color: "#4A6070" }}>
                    {card.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={problemInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{ position: "sticky", top: 100 }}
          >
            <Image
              src="/training-section.jpg"
              alt="Athlete training at Stride"
              width={600}
              height={700}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: 16,
                objectFit: "cover",
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* ③ THE VILLAIN */}
      <section
        ref={villainRef}
        style={{
          background: "var(--navy)",
          padding: "80px var(--px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: 840, position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={villainInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(2.6rem,4.5vw,4.4rem)",
              lineHeight: 0.95,
              letterSpacing: "0.02em",
              color: "#fff",
              marginBottom: 40,
              position: "relative",
              paddingLeft: 28,
              borderLeft: "3px solid var(--blue)",
            }}
          >
            The issue is not effort.
            <br />
            It is guesswork wearing
            <br />a coach&apos;s shirt.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={villainInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ display: "flex", flexDirection: "column", gap: 18 }}
          >
            {[
              "Ask most athletes why their program contains what it contains and you get one of three answers. Because the coach likes those exercises. Because that is what the team does. Or a shrug.",
              "None of those are reasons. They are habits.",
              "And here is what makes it expensive: a program built on habit will still make you sweat, still make you sore, and still feel like progress. You can run that loop for a full season and arrive at finals no better prepared than you started, having done everything asked of you.",
              "That is the part that frustrates us. Not athletes who do not work. Athletes who work hard and get nothing back for it.",
            ].map((text, i) => (
              <p
                key={i}
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.88,
                  color: "rgba(255,255,255,0.62)",
                }}
              >
                {text}
              </p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ④ THE MECHANISM */}
      <section
        ref={mechRef}
        style={{
          background: "var(--navy)",
          padding: "80px var(--px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid bg */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(27,144,245,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(27,144,245,0.04) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
            pointerEvents: "none",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={mechInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 52, position: "relative", zIndex: 1 }}
        >
          <div
            style={{
              fontFamily: "var(--font-dm-mono)",
              fontSize: "0.62rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginBottom: 12,
            }}
          >
            How we do it differently
          </div>
          <h2
            className="sh sh-white"
            style={{ fontSize: "clamp(2.4rem,4vw,4rem)" }}
          >
            Every exercise in your program
            <br />
            can be explained. All of it traces
            <br />
            back to something we measured.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={mechInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.88,
            color: "rgba(255,255,255,0.58)",
            maxWidth: 680,
            marginBottom: 52,
            position: "relative",
            zIndex: 1,
          }}
        >
          We use a classification system across every physical quality that
          matters for your sport: strength, how fast you produce force,
          elasticity, speed, how well you change direction, how much load you
          can absorb week to week. Each one gets graded against what your sport
          actually demands of it. That tells us three things immediately: what
          is already good enough, what is holding you back, and what is not
          worth your time. Then your program targets the gap.
        </motion.p>

        {/* 2×2 step grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            border: "1px solid var(--brd-i)",
            position: "relative",
            zIndex: 1,
          }}
        >
          {mechSteps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 20 }}
              animate={mechInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
              style={{
                padding: "36px 32px",
                borderRight: i % 2 === 0 ? "1px solid var(--brd-i)" : "none",
                borderBottom: i < 2 ? "1px solid var(--brd-i)" : "none",
                background: "rgba(255,255,255,0.02)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Ghost number */}
              <div
                style={{
                  position: "absolute",
                  right: -10,
                  top: -20,
                  fontFamily: "var(--font-bebas)",
                  fontSize: "9rem",
                  lineHeight: 1,
                  color: "rgba(27,144,245,0.06)",
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                {i + 1}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  fontSize: "0.58rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--blue)",
                  marginBottom: 14,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {step.n}
              </div>
              <h3
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: 8,
                  lineHeight: 1.35,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: "0.90rem",
                  lineHeight: 1.72,
                  color: "rgba(255,255,255,0.50)",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ⑤ TWO PROGRAMS */}
      <section
        ref={programsRef}
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 580 }}
      >
        {/* Left: image */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <Image
            src="/gym-section.jpg"
            alt="Coached training session at Stride"
            fill
            style={{ objectFit: "cover", objectPosition: "right 30%" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right,transparent 60%,rgba(9,20,33,0.5) 100%),linear-gradient(to top,rgba(9,20,33,0.5) 0%,transparent 50%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 24,
              left: 24,
              background: "rgba(9,20,33,0.85)",
              backdropFilter: "blur(12px)",
              border: "1px solid var(--brd-im)",
              padding: "12px 18px",
              borderRadius: 2,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-dm-mono)",
                fontSize: "0.54rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.38)",
                marginBottom: 4,
              }}
            >
              Moonee Ponds
            </div>
            <div
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "1.6rem",
                color: "#fff",
                lineHeight: 1,
              }}
            >
              13 Puckle St
            </div>
          </div>
        </div>

        {/* Right: copy + cards */}
        <div
          style={{
            background: "var(--off)",
            padding: "52px 44px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 24,
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={programsInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div
              style={{
                fontFamily: "var(--font-dm-mono)",
                fontSize: "0.62rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginBottom: 12,
              }}
            >
              Two ways in
            </div>
            <h2
              className="sh sh-navy"
              style={{ fontSize: "clamp(2rem,3.5vw,3.2rem)", marginBottom: 16 }}
            >
              The difference is not how hard you train. It is how much of the
              picture we can see.
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.82,
                color: "#4A6070",
                marginBottom: 24,
              }}
            >
              Both programs are coached, individualised and reviewed. Both run
              in six week blocks. The real difference is whether objective
              testing is built into your rhythm or bought when you want it.
            </p>
          </motion.div>

          {/* Athlete Performance card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={programsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.5 }}
            style={{
              background: "#fff",
              border: "1px solid var(--brd)",
              borderTop: "3px solid var(--blue)",
              padding: "28px 24px",
              borderRadius: 12,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "1.8rem",
                letterSpacing: "0.02em",
                color: "var(--navy)",
                lineHeight: 1,
                marginBottom: 4,
              }}
            >
              Athlete Performance
            </div>
            <div
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "2.6rem",
                color: "var(--blue)",
                lineHeight: 1,
                marginBottom: 2,
              }}
            >
              $145
            </div>
            <div
              style={{
                fontSize: "0.78rem",
                fontWeight: 500,
                color: "var(--muted)",
                marginBottom: 12,
              }}
            >
              per week · six week blocks
            </div>
            <p
              style={{
                fontSize: "0.90rem",
                lineHeight: 1.72,
                color: "#4A6070",
                borderTop: "1px solid var(--brd)",
                paddingTop: 12,
              }}
            >
              Everything in one plan. Individualised programming, gym access and
              coaching, field sessions for running and speed, recovery, and full
              performance testing every six to eight weeks. Best for athletes
              who want every variable managed and measured.
            </p>
          </motion.div>

          {/* S&C Performance card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={programsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.5 }}
            style={{
              background: "#fff",
              border: "1px solid var(--brd)",
              padding: "28px 24px",
              borderRadius: 12,
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "1.8rem",
                letterSpacing: "0.02em",
                color: "var(--navy)",
                lineHeight: 1,
                marginBottom: 4,
              }}
            >
              S&amp;C Performance
            </div>
            <div
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "2.6rem",
                color: "var(--blue)",
                lineHeight: 1,
                marginBottom: 2,
              }}
            >
              $90
            </div>
            <div
              style={{
                fontSize: "0.78rem",
                fontWeight: 500,
                color: "var(--muted)",
                marginBottom: 12,
              }}
            >
              per week · six week blocks
            </div>
            <p
              style={{
                fontSize: "0.90rem",
                lineHeight: 1.72,
                color: "#4A6070",
                borderTop: "1px solid var(--brd)",
                paddingTop: 12,
              }}
            >
              Coached, individualised strength and conditioning with full gym
              access. Field sessions, recovery and testing available when you
              want them, not bundled in. Best for athletes who mainly need
              direction, structure and a coach who is paying attention.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ⑥ INCLUSIONS TABLE */}
      <section
        ref={inclRef}
        id="compare"
        style={{ background: "var(--navy)", padding: "80px var(--px)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inclInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 52 }}
        >
          <div
            style={{
              fontFamily: "var(--font-dm-mono)",
              fontSize: "0.62rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
              marginBottom: 12,
            }}
          >
            What&apos;s included
          </div>
          <h2 className="sh sh-white" style={{ fontSize: "clamp(2.4rem,4vw,4rem)" }}>
            Everything, side by side
          </h2>
        </motion.div>

        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inclInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            style={{
              display: "flex",
              borderBottom: "2px solid rgba(255,255,255,0.10)",
              marginBottom: 36,
            }}
          >
            {(["ap", "sc", "none"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setIncTab(tab)}
                style={{
                  background: "none",
                  border: "none",
                  padding: "14px 28px",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                  color:
                    incTab === tab ? "#fff" : "rgba(255,255,255,0.35)",
                  cursor: "pointer",
                  position: "relative",
                  borderBottom:
                    incTab === tab
                      ? "2px solid var(--blue)"
                      : "2px solid transparent",
                  marginBottom: -2,
                  transition: "color 0.2s",
                }}
              >
                {tab === "ap"
                  ? "Athlete Performance"
                  : tab === "sc"
                  ? "S&C Performance"
                  : "Both"}
              </button>
            ))}
          </motion.div>

          {/* Table */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inclInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.5 }}
            style={{ overflowX: "auto" }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                tableLayout: "fixed",
              }}
            >
              <thead>
                <tr style={{ background: "rgba(255,255,255,0.04)" }}>
                  <th
                    style={{
                      padding: "16px 20px",
                      textAlign: "left",
                      fontFamily: "var(--font-dm-mono)",
                      fontSize: "0.60rem",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.22)",
                      fontWeight: 400,
                      borderRight: "1px solid var(--brd-i)",
                      width: "36%",
                    }}
                  />
                  <th
                    style={{
                      padding: "16px 20px",
                      textAlign: "left",
                      fontFamily: "var(--font-dm-mono)",
                      fontSize: "0.74rem",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "#fff",
                      fontWeight: 400,
                      borderRight: "1px solid var(--brd-i)",
                      background:
                        incTab === "ap"
                          ? "rgba(27,144,245,0.08)"
                          : "transparent",
                    }}
                  >
                    Athlete Performance
                    <br />
                    <span
                      style={{
                        color: "var(--blue)",
                        fontSize: "0.85rem",
                        fontWeight: 700,
                      }}
                    >
                      $145 / week
                    </span>
                  </th>
                  <th
                    style={{
                      padding: "16px 20px",
                      textAlign: "left",
                      fontFamily: "var(--font-dm-mono)",
                      fontSize: "0.74rem",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "#fff",
                      fontWeight: 400,
                      background:
                        incTab === "sc"
                          ? "rgba(27,144,245,0.08)"
                          : "transparent",
                    }}
                  >
                    S&amp;C Performance
                    <br />
                    <span
                      style={{
                        color: "rgba(255,255,255,0.55)",
                        fontSize: "0.85rem",
                        fontWeight: 400,
                      }}
                    >
                      $90 / week
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {inclusionsRows.map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <td
                      style={{
                        padding: "18px 20px",
                        borderRight: "1px solid rgba(255,255,255,0.06)",
                        fontSize: "0.88rem",
                        fontWeight: 600,
                        color: "rgba(255,255,255,0.75)",
                        verticalAlign: "top",
                      }}
                    >
                      {row.feature}
                      {row.featureSub && (
                        <span
                          style={{
                            display: "block",
                            fontSize: "0.78rem",
                            color: "rgba(255,255,255,0.38)",
                            fontWeight: 400,
                            marginTop: 2,
                          }}
                        >
                          {row.featureSub}
                        </span>
                      )}
                    </td>
                    {/* AP cell */}
                    <td
                      style={{
                        padding: "18px 20px",
                        borderRight: "1px solid rgba(255,255,255,0.06)",
                        fontSize: "0.88rem",
                        verticalAlign: "top",
                        background:
                          incTab === "ap"
                            ? "rgba(27,144,245,0.05)"
                            : "transparent",
                      }}
                    >
                      {row.ap.soon ? (
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 4,
                            background: "rgba(232,131,58,0.14)",
                            border: "1px solid rgba(232,131,58,0.28)",
                            color: "#E8833A",
                            fontFamily: "var(--font-dm-mono)",
                            fontSize: "0.50rem",
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            padding: "3px 8px",
                            borderRadius: 2,
                          }}
                        >
                          Coming soon
                        </span>
                      ) : row.ap.main ? (
                        <>
                          <span style={{ color: "#34d399", marginRight: 5 }}>
                            ✓
                          </span>
                          <span style={{ color: "#fff", fontWeight: 500 }}>
                            {row.ap.main}
                          </span>
                          {row.ap.sub && (
                            <span
                              style={{
                                display: "block",
                                color: "rgba(255,255,255,0.52)",
                                fontSize: "0.84rem",
                                fontWeight: 400,
                                marginTop: 2,
                              }}
                            >
                              {row.ap.sub}
                            </span>
                          )}
                        </>
                      ) : null}
                    </td>
                    {/* SC cell */}
                    <td
                      style={{
                        padding: "18px 20px",
                        fontSize: "0.88rem",
                        verticalAlign: "top",
                        background:
                          incTab === "sc"
                            ? "rgba(27,144,245,0.05)"
                            : "transparent",
                      }}
                    >
                      {row.sc.soon ? (
                        <>
                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 4,
                              background: "rgba(232,131,58,0.14)",
                              border: "1px solid rgba(232,131,58,0.28)",
                              color: "#E8833A",
                              fontFamily: "var(--font-dm-mono)",
                              fontSize: "0.50rem",
                              letterSpacing: "0.14em",
                              textTransform: "uppercase",
                              padding: "3px 8px",
                              borderRadius: 2,
                            }}
                          >
                            Coming soon
                          </span>
                          {row.sc.sub && (
                            <span
                              style={{
                                display: "block",
                                color: "rgba(255,255,255,0.52)",
                                fontSize: "0.84rem",
                                fontWeight: 400,
                                marginTop: 2,
                              }}
                            >
                              {row.sc.sub}
                            </span>
                          )}
                        </>
                      ) : row.sc.addon ? (
                        <>
                          <span style={{ color: "var(--blue)", fontWeight: 600 }}>
                            {row.sc.addon}
                          </span>
                          {row.sc.sub && (
                            <span
                              style={{
                                display: "block",
                                color: "rgba(255,255,255,0.52)",
                                fontSize: "0.84rem",
                                fontWeight: 400,
                                marginTop: 2,
                              }}
                            >
                              {row.sc.sub}
                            </span>
                          )}
                        </>
                      ) : row.sc.main ? (
                        <>
                          <span style={{ color: "#34d399", marginRight: 5 }}>
                            ✓
                          </span>
                          <span style={{ color: "#fff", fontWeight: 500 }}>
                            {row.sc.main}
                          </span>
                          {row.sc.sub && (
                            <span
                              style={{
                                display: "block",
                                color: "rgba(255,255,255,0.52)",
                                fontSize: "0.84rem",
                                fontWeight: 400,
                                marginTop: 2,
                              }}
                            >
                              {row.sc.sub}
                            </span>
                          )}
                        </>
                      ) : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inclInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.25, duration: 0.5 }}
            style={{
              marginTop: 20,
              fontSize: "0.88rem",
              color: "rgba(255,255,255,0.42)",
              lineHeight: 1.65,
              borderTop: "1px solid var(--brd-i)",
              paddingTop: 20,
            }}
          >
            Nothing in the S&amp;C column is hidden or upsold at signup. You
            choose what you add, and you can add nothing at all.
          </motion.p>
        </div>
      </section>

      {/* ⑦ TESTING */}
      <section
        ref={testingRef}
        style={{ background: "var(--navy-mid)", padding: "80px var(--px)" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={testingInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div
              style={{
                fontFamily: "var(--font-dm-mono)",
                fontSize: "0.62rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: 16,
              }}
            >
              The part that actually separates them
            </div>
            <h2
              className="sh sh-white"
              style={{ fontSize: "clamp(2rem,3.5vw,3.5rem)", marginBottom: 28 }}
            >
              A coach can see your technique. A coach cannot see your rate of
              force development.
            </h2>
            {[
              "Watch an athlete train and you learn a lot. Whether they hold position under load. Whether the bar is going up. Whether they look sharp or flat today. Good coaches read all of that continuously, and it is genuinely useful.",
              "Here is what watching cannot tell you: how quickly you produce force from a standstill, how much energy you get back out of a stretch, and whether your left side is doing meaningfully less work than your right.",
              "Those are frequently the exact things capping an athlete. Which means you can train hard and well for six weeks, on everything visible, and never once touch the thing that is actually limiting you.",
            ].map((text, i) => (
              <p
                key={i}
                className="bt-inv"
                style={{ marginTop: i === 0 ? 0 : 16 }}
              >
                {text}
              </p>
            ))}
            <p className="bt-inv" style={{ marginTop: 16 }}>
              <strong>
                Testing every six to eight weeks is how we stop that happening.
              </strong>{" "}
              It re-anchors the plan against numbers instead of impressions.
              Built into Athlete Performance. Available to S&amp;C members at
              $195 instead of $279.
            </p>
          </motion.div>

          {/* Testing visual */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={testingInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.6 }}
            style={{
              position: "relative",
              border: "1px solid var(--brd-im)",
              overflow: "hidden",
              borderRadius: 12,
            }}
          >
            {/* Top accent line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 3,
                background:
                  "linear-gradient(to right,var(--blue),rgba(115,245,245,0.8),transparent)",
                zIndex: 2,
              }}
            />
            <Image
              src="/training-section.jpg"
              alt="Performance testing movement analysis"
              width={600}
              height={500}
              style={{ width: "100%", display: "block", objectFit: "cover" }}
            />
            {/* Stat overlay */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background:
                  "linear-gradient(to top,rgba(7,17,28,0.97) 0%,rgba(7,17,28,0.65) 55%,transparent 100%)",
                padding: 28,
                display: "flex",
                gap: 24,
                flexWrap: "wrap",
                zIndex: 1,
              }}
            >
              {[
                { val: "6–8", label: "Weeks between\ntesting rounds" },
                { val: "$279", label: "Standard value\nper round" },
                { val: "$195", label: "S&C member\nrate" },
              ].map((stat) => (
                <div key={stat.val} style={{ flex: 1, minWidth: 70 }}>
                  <div
                    style={{
                      fontFamily: "var(--font-bebas)",
                      fontSize: "2.6rem",
                      color: "var(--blue)",
                      lineHeight: 1,
                      marginBottom: 4,
                    }}
                  >
                    {stat.val}
                  </div>
                  <div
                    style={{
                      fontSize: "0.76rem",
                      fontWeight: 400,
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.45,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ⑧ WHICH ONE IS YOU */}
      <section
        ref={routingRef}
        style={{
          position: "relative",
          overflow: "hidden",
          background: "#080F17",
        }}
      >
        {/* Radial glow bg */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            background:
              "radial-gradient(ellipse at 15% 60%, rgba(27,144,245,0.13) 0%, transparent 50%),radial-gradient(ellipse at 85% 20%, rgba(11,126,142,0.09) 0%, transparent 45%)",
          }}
        />

        <div
          style={{ position: "relative", zIndex: 1, padding: "80px var(--px)" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={routingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: 16 }}
          >
            <div
              style={{
                fontFamily: "var(--font-dm-mono)",
                fontSize: "0.62rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: 12,
              }}
            >
              Self-select
            </div>
            <h2 className="sh sh-white" style={{ fontSize: "clamp(2.4rem,4vw,4rem)" }}>
              Read these as situations,
              <br />
              not personality types
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={routingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            style={{
              fontSize: "1.0rem",
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.55)",
              marginBottom: 28,
              fontStyle: "italic",
            }}
          >
            Most people know which column they are in by the second bullet.
          </motion.p>

          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}
          >
            {/* Athlete Performance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={routingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.5 }}
              style={{
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderTop: "3px solid var(--blue)",
                padding: "36px 32px",
                borderRadius: 12,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "1.8rem",
                  letterSpacing: "0.02em",
                  color: "#fff",
                  lineHeight: 1,
                  marginBottom: 6,
                }}
              >
                Athlete Performance
              </div>
              <div
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.12em",
                  color: "rgba(27,144,245,0.8)",
                  marginBottom: 22,
                }}
              >
                $145 / week · everything included
              </div>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 11 }}>
                {[
                  "You compete and want to know objectively whether you're improving",
                  "You've plateaued and can't tell why",
                  "Your sport asks for speed, repeat efforts or change of direction",
                  "You want running, gym and recovery handled as one plan",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: 1.65,
                      color: "rgba(255,255,255,0.72)",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                    }}
                  >
                    <span
                      style={{
                        color: "var(--blue)",
                        fontWeight: 700,
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    >
                      →
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* S&C Performance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={routingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.5 }}
              style={{
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderTop: "3px solid rgba(255,255,255,0.30)",
                padding: "36px 32px",
                borderRadius: 12,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "1.8rem",
                  letterSpacing: "0.02em",
                  color: "#fff",
                  lineHeight: 1,
                  marginBottom: 6,
                }}
              >
                S&amp;C Performance
              </div>
              <div
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.12em",
                  color: "rgba(255,255,255,0.40)",
                  marginBottom: 22,
                }}
              >
                $90 / week · add what you need
              </div>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 11 }}>
                {[
                  "You have a training base and mainly need direction, structure and accountability",
                  "What's holding you back is technique or general strength — not something hidden",
                  "You do your own running, or your sport doesn't ask much of it",
                  "You want quality coaching without the full package",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: 1.65,
                      color: "rgba(255,255,255,0.72)",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                    }}
                  >
                    <span
                      style={{
                        color: "rgba(255,255,255,0.35)",
                        fontWeight: 700,
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    >
                      →
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Injured note */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={routingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.5 }}
            style={{
              marginTop: 24,
              padding: "24px 28px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.10)",
              borderLeft: "3px solid var(--muted)",
              borderRadius: 4,
            }}
          >
            <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "rgba(255,255,255,0.60)" }}>
              <strong style={{ color: "#fff" }}>
                Currently injured or in pain?
              </strong>{" "}
              Neither program is your first step. Book the assessment anyway. We
              will work out what is going on and tell you honestly whether you
              need rehab first. Plenty of people do, and it is a much better use
              of your money than training around a problem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ⑨ THE NUMBERS — Cost builder */}
      <section
        ref={costRef}
        style={{
          background: "var(--navy)",
          padding: "80px var(--px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "repeating-linear-gradient(-55deg,transparent,transparent 30px,rgba(255,255,255,0.012) 30px,rgba(255,255,255,0.012) 31px)",
            pointerEvents: "none",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={costInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 52, position: "relative", zIndex: 1 }}
        >
          <div
            style={{
              fontFamily: "var(--font-dm-mono)",
              fontSize: "0.62rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
              marginBottom: 12,
            }}
          >
            No surprises
          </div>
          <h2 className="sh sh-white" style={{ fontSize: "clamp(2.4rem,4vw,4rem)" }}>
            What it actually costs,
            <br />
            per six week block
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.82,
              color: "rgba(255,255,255,0.58)",
              marginTop: 14,
              maxWidth: 640,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Six weeks is how people commit, so that is how we will show it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={costInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.5 }}
          style={{
            maxWidth: 760,
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid var(--brd-im)",
              overflow: "hidden",
              borderRadius: 8,
            }}
          >
            {/* Program tabs */}
            <div style={{ display: "flex", borderBottom: "1px solid var(--brd-i)" }}>
              {(["ap", "sc"] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => {
                    setBuilderMode(mode);
                    if (mode === "ap") {
                      setHasField(false);
                      setHasTesting(false);
                    }
                  }}
                  style={{
                    flex: 1,
                    padding: "20px 24px",
                    background:
                      builderMode === mode
                        ? "rgba(27,144,245,0.10)"
                        : "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "0.92rem",
                    fontWeight: 600,
                    color:
                      builderMode === mode
                        ? "#fff"
                        : "rgba(255,255,255,0.35)",
                    letterSpacing: "0.01em",
                    transition: "all 0.2s",
                    position: "relative",
                  }}
                >
                  {mode === "ap"
                    ? "Athlete Performance — $145/wk"
                    : "S&C Performance — $90/wk"}
                  {builderMode === mode && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 2,
                        background: "var(--blue)",
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* AP panel */}
            {builderMode === "ap" && (
              <div style={{ padding: 28 }}>
                <div
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    fontSize: "0.56rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.30)",
                    marginBottom: 10,
                  }}
                >
                  Included in every block
                </div>
                {[
                  { label: "Individualised programming + gym + coaching", val: "✓ Included" },
                  { label: "Field sessions — running, acceleration, speed", val: "✓ Included" },
                  { label: "Performance testing (every 6–8 weeks, $279 value)", val: "✓ Included" },
                  { label: "Recovery", val: "Coming soon", soon: true },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "8px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                    }}
                  >
                    <span style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.70)", flex: 1 }}>
                      {item.label}
                    </span>
                    <span
                      style={{
                        fontSize: "0.82rem",
                        color: item.soon ? "#E8833A" : "#34d399",
                        fontWeight: 600,
                      }}
                    >
                      {item.val}
                    </span>
                  </div>
                ))}
                <p
                  style={{
                    marginTop: 20,
                    fontSize: "0.88rem",
                    color: "rgba(255,255,255,0.42)",
                    lineHeight: 1.65,
                  }}
                >
                  One testing round alone is worth $279. The programming,
                  coaching, gym, field sessions and recovery come to about $591
                  across the six weeks.
                </p>
              </div>
            )}

            {/* SC panel */}
            {builderMode === "sc" && (
              <div style={{ padding: 28 }}>
                <div
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    fontSize: "0.56rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.30)",
                    marginBottom: 10,
                  }}
                >
                  Always included
                </div>
                {[
                  "Individualised programming + gym + coaching",
                  "Program review and progression",
                ].map((label) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "8px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                    }}
                  >
                    <span style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.70)", flex: 1 }}>
                      {label}
                    </span>
                    <span style={{ fontSize: "0.82rem", color: "#34d399", fontWeight: 600 }}>
                      ✓ Included
                    </span>
                  </div>
                ))}

                <div
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    fontSize: "0.56rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.30)",
                    marginBottom: 12,
                    marginTop: 20,
                  }}
                >
                  Add what you need
                </div>

                {/* Field sessions addon */}
                <div
                  onClick={() => setHasField((v) => !v)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "13px 14px",
                    border: `1px solid ${hasField ? "rgba(27,144,245,0.45)" : "rgba(255,255,255,0.07)"}`,
                    background: hasField ? "rgba(27,144,245,0.09)" : "rgba(255,255,255,0.02)",
                    marginBottom: 8,
                    cursor: "pointer",
                    borderRadius: 4,
                    transition: "all 0.2s",
                  }}
                >
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      border: `1.5px solid ${hasField ? "var(--blue)" : "rgba(255,255,255,0.20)"}`,
                      borderRadius: 2,
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: hasField ? "var(--blue)" : "transparent",
                      transition: "all 0.2s",
                    }}
                  >
                    {hasField && (
                      <span style={{ color: "#fff", fontSize: "0.75rem" }}>✓</span>
                    )}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "0.90rem", fontWeight: 600, color: "rgba(255,255,255,0.80)" }}>
                      Field sessions
                    </div>
                    <div
                      style={{
                        fontSize: "0.78rem",
                        color: "rgba(255,255,255,0.38)",
                        lineHeight: 1.45,
                        marginTop: 2,
                      }}
                    >
                      Running, acceleration and speed work on the field
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-dm-mono)",
                      fontSize: "0.78rem",
                      fontWeight: 500,
                      color: "var(--blue)",
                      flexShrink: 0,
                    }}
                  >
                    +$20 / week
                  </div>
                </div>

                {/* Recovery (disabled) */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "13px 14px",
                    border: "1px solid rgba(255,255,255,0.07)",
                    background: "rgba(255,255,255,0.02)",
                    marginBottom: 8,
                    cursor: "not-allowed",
                    borderRadius: 4,
                    opacity: 0.5,
                  }}
                >
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      border: "1.5px solid rgba(255,255,255,0.20)",
                      borderRadius: 2,
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "0.90rem", fontWeight: 600, color: "rgba(255,255,255,0.80)" }}>
                      Recovery
                    </div>
                    <div
                      style={{
                        fontSize: "0.78rem",
                        color: "rgba(255,255,255,0.38)",
                        lineHeight: 1.45,
                        marginTop: 2,
                      }}
                    >
                      Compression, ice baths — not available yet
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-dm-mono)",
                      fontSize: "0.78rem",
                      fontWeight: 500,
                      color: "#E8833A",
                      flexShrink: 0,
                    }}
                  >
                    Coming soon
                  </div>
                </div>

                {/* Performance testing addon */}
                <div
                  onClick={() => setHasTesting((v) => !v)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "13px 14px",
                    border: `1px solid ${hasTesting ? "rgba(27,144,245,0.45)" : "rgba(255,255,255,0.07)"}`,
                    background: hasTesting ? "rgba(27,144,245,0.09)" : "rgba(255,255,255,0.02)",
                    cursor: "pointer",
                    borderRadius: 4,
                    transition: "all 0.2s",
                  }}
                >
                  <div
                    style={{
                      width: 18,
                      height: 18,
                      border: `1.5px solid ${hasTesting ? "var(--blue)" : "rgba(255,255,255,0.20)"}`,
                      borderRadius: 2,
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: hasTesting ? "var(--blue)" : "transparent",
                      transition: "all 0.2s",
                    }}
                  >
                    {hasTesting && (
                      <span style={{ color: "#fff", fontSize: "0.75rem" }}>✓</span>
                    )}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "0.90rem", fontWeight: 600, color: "rgba(255,255,255,0.80)" }}>
                      Performance testing
                    </div>
                    <div
                      style={{
                        fontSize: "0.78rem",
                        color: "rgba(255,255,255,0.38)",
                        lineHeight: 1.45,
                        marginTop: 2,
                      }}
                    >
                      One round per block · $195 member rate (normally $279)
                    </div>
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-dm-mono)",
                      fontSize: "0.78rem",
                      fontWeight: 500,
                      color: "var(--blue)",
                      flexShrink: 0,
                    }}
                  >
                    +$195 / block
                  </div>
                </div>
              </div>
            )}

            {/* Total bar */}
            <div
              style={{
                padding: "20px 28px",
                background: "rgba(27,144,245,0.08)",
                borderTop: "1px solid rgba(27,144,245,0.20)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    fontSize: "0.60rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.40)",
                  }}
                >
                  Your estimated cost
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "2.8rem",
                    color: "#fff",
                    lineHeight: 1,
                  }}
                >
                  {builderMode === "ap" ? "$145" : `$${scWeekly}`}
                </div>
                <div
                  style={{
                    fontSize: "0.78rem",
                    color: "rgba(255,255,255,0.35)",
                    marginTop: 4,
                  }}
                >
                  per week
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    fontSize: "0.60rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.40)",
                  }}
                >
                  Six week block
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "2rem",
                    color: "#fff",
                    lineHeight: 1,
                  }}
                >
                  {builderMode === "ap" ? "$870" : `$${scBlock}`}
                </div>
                <div
                  style={{
                    fontSize: "0.78rem",
                    color: "rgba(255,255,255,0.35)",
                    marginTop: 4,
                  }}
                >
                  total
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: 24,
              padding: "24px 28px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid var(--brd-im)",
              borderLeft: "3px solid var(--blue)",
              fontSize: "1.0rem",
              lineHeight: 1.82,
              color: "rgba(255,255,255,0.72)",
              borderRadius: 4,
            }}
          >
            <strong style={{ color: "#fff" }}>
              If you want the full package, Athlete Performance is the cheaper
              way to get it.
            </strong>{" "}
            And if you only want coached programming, $90 a week is the right
            answer — and we would genuinely rather you took it than paid us for
            things you will not use.
          </div>
        </motion.div>
      </section>

      {/* ⑩ ADD-ONS */}
      <section
        ref={addonsRef}
        style={{ background: "var(--stone)", padding: "80px var(--px)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={addonsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 52 }}
        >
          <div
            style={{
              fontFamily: "var(--font-dm-mono)",
              fontSize: "0.62rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginBottom: 12,
            }}
          >
            S&amp;C Performance add-ons
          </div>
          <h2 className="sh sh-navy" style={{ fontSize: "clamp(2.4rem,4vw,4rem)", marginBottom: 16 }}>
            Build the program
            <br />
            you actually need
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.82,
              color: "#4A6070",
              maxWidth: 640,
            }}
          >
            S&amp;C members add what is relevant and ignore the rest. Nothing
            switches on automatically and nothing is charged unless you ask for
            it.
          </p>
        </motion.div>

        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}
        >
          {[
            {
              name: "Field Sessions",
              price: "$20",
              unit: "per week",
              desc: "Running, acceleration and speed work. Programmed alongside your gym sessions, not separate from them.",
              muted: false,
            },
            {
              name: "Recovery",
              price: "$10",
              unit: "per week · when available",
              desc: "Compression and ice baths. Not live yet. Mark yourself as interested at your assessment.",
              muted: true,
              soon: true,
            },
            {
              name: "Performance Testing",
              price: "$195",
              unit: "per round · 30% member discount",
              desc: "Full performance testing at a 30% member discount off the standard $279 rate. Run every six to eight weeks when you want an objective read on where you are at.",
              muted: false,
            },
          ].map((addon, i) => (
            <motion.div
              key={addon.name}
              initial={{ opacity: 0, y: 20 }}
              animate={addonsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.1, duration: 0.5 }}
              style={{
                background: "#fff",
                border: "1px solid var(--brd)",
                padding: "28px 24px",
                borderRadius: 12,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "1.4rem",
                  letterSpacing: "0.02em",
                  color: addon.muted ? "var(--muted)" : "var(--navy)",
                  lineHeight: 1,
                  marginBottom: 4,
                }}
              >
                {addon.name}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "2.2rem",
                  color: addon.muted ? "var(--muted)" : "var(--blue)",
                  lineHeight: 1,
                  marginBottom: 2,
                }}
              >
                {addon.price}
              </div>
              <div
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  color: "var(--muted)",
                  marginBottom: 12,
                }}
              >
                {addon.unit}
              </div>
              <p
                style={{
                  fontSize: "0.90rem",
                  lineHeight: 1.72,
                  color: "#4A6070",
                  borderTop: "1px solid var(--brd)",
                  paddingTop: 12,
                }}
              >
                {addon.desc}
              </p>
              {addon.soon && (
                <div style={{ marginTop: 10 }}>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 4,
                      background: "rgba(232,131,58,0.14)",
                      border: "1px solid rgba(232,131,58,0.28)",
                      color: "#E8833A",
                      fontFamily: "var(--font-dm-mono)",
                      fontSize: "0.50rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      padding: "3px 8px",
                      borderRadius: 2,
                    }}
                  >
                    Coming soon
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ⑪ HOW TO START */}
      <section
        ref={howToRef}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: 540,
        }}
      >
        {/* Left */}
        <div
          style={{
            background: "var(--navy)",
            padding: "72px var(--px)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: -60,
              right: -60,
              width: 320,
              height: 320,
              borderRadius: "50%",
              background:
                "radial-gradient(circle,rgba(27,144,245,0.09) 0%,transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              fontFamily: "var(--font-dm-mono)",
              fontSize: "0.62rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)",
              marginBottom: 16,
            }}
          >
            How to start
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={howToInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="sh sh-white"
            style={{ fontSize: "clamp(2rem,3.5vw,3.5rem)" }}
          >
            Nobody gets a program
            <br />
            before we have seen
            <br />
            them move
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={howToInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="bt-inv"
            style={{ marginTop: 20, maxWidth: 440 }}
          >
            We will not recommend a program off a website, and we will not sell
            you the more expensive one because you asked nicely. The
            recommendation gets made in the room, after the Blueprint session.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={howToInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginTop: 28,
              padding: "16px 20px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid var(--brd-im)",
              borderRadius: 8,
              maxWidth: 400,
            }}
          >
            <div>
              <div style={{ fontSize: "0.84rem", fontWeight: 700, color: "#fff" }}>
                Blueprint Testing Session — $279
              </div>
              <div
                style={{
                  fontSize: "0.76rem",
                  color: "rgba(255,255,255,0.42)",
                  lineHeight: 1.5,
                  marginTop: 2,
                }}
              >
                Your starting point. The session every program is built from.
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right */}
        <div
          style={{
            background: "var(--navy-light)",
            padding: "72px 52px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <ol style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              {
                title: "Book a Blueprint Testing Session",
                body: "Your starting point. Full movement assessment, athlete profile and sport-specific grading. Everything your program is built from.",
                price: "$279",
                priceLabel: "Blueprint Testing Session",
              },
              {
                title: "We tell you which program fits",
                body: "Based on what we measured — not what sounds good. Including when the right answer is the $90 program.",
              },
              {
                title: "Program build (if applicable)",
                body: "If your assessment indicates Athlete Performance, a second 90 minute session covers full testing and program build. $185.",
              },
              {
                title: "Start your first six week block",
                body: "Your program is ready. You're in.",
              },
            ].map((step, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={howToInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.12 + 0.15, duration: 0.5 }}
                style={{
                  display: "flex",
                  gap: 20,
                  position: "relative",
                  paddingBottom: i < 3 ? 28 : 0,
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    background: "var(--blue)",
                    color: "#fff",
                    fontFamily: "var(--font-dm-mono)",
                    fontSize: "0.72rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    borderRadius: 4,
                    marginTop: 2,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {i + 1}
                </div>
                {i < 3 && (
                  <div
                    style={{
                      position: "absolute",
                      left: 15,
                      top: 34,
                      bottom: 0,
                      width: 1,
                      background: "var(--brd-im)",
                    }}
                  />
                )}
                <div>
                  <div style={{ fontWeight: 700, color: "#fff", fontSize: "0.98rem", marginBottom: 4 }}>
                    {step.title}
                  </div>
                  <div
                    style={{
                      fontSize: "0.86rem",
                      color: "rgba(255,255,255,0.50)",
                      lineHeight: 1.65,
                    }}
                  >
                    {step.body}
                  </div>
                  {step.price && (
                    <>
                      <div
                        style={{
                          fontFamily: "var(--font-bebas)",
                          fontSize: "2.2rem",
                          color: "var(--blue)",
                          lineHeight: 1,
                          marginTop: 6,
                        }}
                      >
                        {step.price}
                      </div>
                      <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.40)" }}>
                        {step.priceLabel}
                      </div>
                    </>
                  )}
                </div>
              </motion.li>
            ))}
          </ol>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={howToInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.55, duration: 0.5 }}
            style={{ marginTop: 28 }}
          >
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener"
              className="btn btn-primary"
            >
              Book a Blueprint Testing Session{" "}
              <span className="arr">→</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ⑫ FAQ */}
      <section
        ref={faqRef}
        style={{ background: "var(--off)", padding: "80px var(--px)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={faqInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 52 }}
        >
          <div
            style={{
              fontFamily: "var(--font-dm-mono)",
              fontSize: "0.62rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--blue)",
              marginBottom: 12,
            }}
          >
            Questions
          </div>
          <h2 className="sh sh-navy" style={{ fontSize: "clamp(2.4rem,4vw,4rem)" }}>
            Common questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={faqInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          style={{
            maxWidth: 720,
            margin: "0 auto",
            borderTop: "1px solid var(--brd)",
          }}
        >
          {faqItems.map((item, i) => (
            <div
              key={i}
              style={{ borderBottom: "1px solid var(--brd)" }}
            >
              <button
                onClick={() =>
                  setOpenFaq(openFaq === i ? null : i)
                }
                style={{
                  width: "100%",
                  textAlign: "left",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "22px 0",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 16,
                  fontFamily: "inherit",
                  fontSize: "1.0rem",
                  fontWeight: 600,
                  color: openFaq === i ? "var(--blue)" : "var(--navy)",
                  lineHeight: 1.45,
                  transition: "color 0.2s",
                }}
              >
                {item.q}
                <span
                  style={{
                    fontSize: "1.3rem",
                    color: "var(--blue)",
                    flexShrink: 0,
                    lineHeight: 1,
                    transform: openFaq === i ? "rotate(45deg)" : "none",
                    transition: "transform 0.25s",
                  }}
                >
                  +
                </span>
              </button>
              <div
                style={{
                  maxHeight: openFaq === i ? 500 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.35s ease",
                }}
              >
                <p
                  style={{
                    padding: "0 0 22px",
                    fontSize: "0.97rem",
                    lineHeight: 1.82,
                    color: "#4A6070",
                  }}
                >
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ⑬ FINAL CTA */}
      <section
        ref={ctaRef}
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "96px var(--px)",
          textAlign: "center",
        }}
      >
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/training-section.jpg"
            alt=""
            fill
            style={{ objectFit: "cover", objectPosition: "center 35%", filter: "brightness(0.18) saturate(0.6)" }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg,rgba(7,17,28,0.88) 0%,rgba(12,28,50,0.82) 100%)",
            zIndex: 0,
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ position: "relative", zIndex: 1 }}
        >
          <div
            style={{
              fontFamily: "var(--font-dm-mono)",
              fontSize: "0.62rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.45)",
              marginBottom: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
            }}
          >
            Ready to start
          </div>
          <h2
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(3.2rem,6vw,6rem)",
              lineHeight: 0.9,
              letterSpacing: "0.02em",
              color: "#fff",
              marginBottom: 18,
            }}
          >
            Find out what is actually
            <br />
            holding you back
          </h2>
          <p
            style={{
              fontSize: "1.08rem",
              color: "rgba(255,255,255,0.60)",
              lineHeight: 1.8,
              maxWidth: 520,
              margin: "0 auto 36px",
            }}
          >
            One session. We measure what your sport demands, grade where you
            currently sit against it, and tell you exactly what is holding you
            back. Then you decide what to do with that.
          </p>
          <div
            style={{
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener"
              style={{
                background: "#fff",
                color: "var(--navy)",
                border: "none",
                padding: "18px 44px",
                fontFamily: "var(--font-inter)",
                fontSize: "1.02rem",
                fontWeight: 700,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                cursor: "pointer",
                borderRadius: 2,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                transition: "all 0.2s",
              }}
            >
              Book a Blueprint Testing Session · $279{" "}
              <span style={{ color: "var(--blue)" }}>→</span>
            </a>
            <button
              onClick={openModal}
              className="btn btn-ghost"
            >
              Book a Call
            </button>
            <a
              href="tel:+61483918427"
              className="btn btn-ghost"
            >
              Call us
            </a>
          </div>
          <p
            style={{
              marginTop: 20,
              fontSize: "0.78rem",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            13 Puckle St, Moonee Ponds · Blueprint Testing Session $279
          </p>
        </motion.div>
      </section>

      <Footer />
      <PerformanceModal />
    </>
  );
}
