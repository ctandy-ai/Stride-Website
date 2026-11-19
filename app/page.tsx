"use client";

import { useEffect } from "react";
import Script from "next/script";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Problem from "@/components/sections/Problem";
import Accelerator from "@/components/sections/Accelerator";
import Pricing from "@/components/sections/Pricing";
import Solution from "@/components/sections/Solution";
import FAQ from "@/components/sections/FAQ";
import MooneePonds from "@/components/sections/MooneePonds";
import CTA from "@/components/sections/CTA";
import BookingModal from "@/components/BookingModal";
import InjuryQuiz from "@/components/sections/InjuryQuiz";
import InjuryCards from "@/components/sections/InjuryCards";
import StickyBookBtn from "@/components/ui/StickyBookBtn";

export default function Home() {
  // Open modals when navigating to hash anchors
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#self-check") {
      const tryOpen = () => {
        if (typeof (window as any).openQuizModal === "function") {
          (window as any).openQuizModal();
        } else {
          setTimeout(tryOpen, 100);
        }
      };
      tryOpen();
    } else if (hash === "#book") {
      const tryOpen = () => {
        if (typeof (window as any).openModal === "function") {
          (window as any).openModal();
        } else {
          setTimeout(tryOpen, 100);
        }
      };
      tryOpen();
    }
  }, []);

  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <InjuryCards />
      <Problem />
      <Accelerator />
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
      <MooneePonds />
      <FAQ />
      <CTA />

      {/* Modals */}
      <BookingModal />
      <InjuryQuiz />
      <StickyBookBtn />

      {/* FAQPage structured data */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "What is Return to Perform?", "acceptedAnswer": { "@type": "Answer", "text": "Return to Perform is Stride\u2019s all-inclusive sports injury program. It combines weekly 1:1 physiotherapy, a personalised S&C program, gym access, and return-to-sport clearance testing \u2014 all for a single weekly fee of $185. It starts with a two-part Initial Assessment ($145 + $185), after which every athlete has a written week-by-week plan and a target return date." } },
            { "@type": "Question", "name": "Who is this for?", "acceptedAnswer": { "@type": "Answer", "text": "Any competitive athlete dealing with a sports injury \u2014 AFL, netball, rugby, soccer, BJJ, MMA, boxing, wrestling, running, or any other sport. We work with athletes of all levels from amateur to professional." } },
            { "@type": "Question", "name": "Do I need a referral?", "acceptedAnswer": { "@type": "Answer", "text": "No referral is needed for a standard physiotherapy appointment. If you want to use your Medicare EPC (Enhanced Primary Care plan), you\u2019ll need a GP referral before your appointment. Private health insurance and HICAPS are available on the day." } },
            { "@type": "Question", "name": "What\u2019s included in the $145 Initial Assessment?", "acceptedAnswer": { "@type": "Answer", "text": "A two-part process. Session 1 ($145): a thorough conversation to establish first principles \u2014 your injury history, sport demands and where you want to get back to. Session 2 ($185): a 60-minute hands-on deep dive combining treatment and movement assessment. After both sessions you\u2019ll have a clear diagnosis, a written week-by-week return program, and a target return date." } },
            { "@type": "Question", "name": "Can I use private health insurance?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We use HICAPS for on-the-spot private health rebate claiming. Medicare EPC plans are also accepted with a valid GP referral." } },
            { "@type": "Question", "name": "What if I have a combat sports injury (BJJ, MMA, boxing)?", "acceptedAnswer": { "@type": "Answer", "text": "Our Senior Physiotherapist Tom Yeung works primarily with combat sport athletes — BJJ, MMA, boxing and wrestling. He has a deep background in combat training and understands the unique demands, culture, and timelines of competitive grappling and striking sports." } }
          ]
        }) }}
      />
    </>
  );
}
