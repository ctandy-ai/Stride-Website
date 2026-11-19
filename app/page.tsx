"use client";

import { useEffect } from "react";
import Script from "next/script";
import Hero from "@/components/sections/Hero";
import WhereAreYouAt from "@/components/sections/WhereAreYouAt";
import Services from "@/components/sections/Services";
import Problem from "@/components/sections/Problem";
import MacroLook from "@/components/sections/MacroLook";
import CuriosityHook from "@/components/sections/CuriosityHook";
import HowItWorks from "@/components/sections/HowItWorks";
import Accelerator from "@/components/sections/Accelerator";
import Pricing from "@/components/sections/Pricing";
import WhoItsFor from "@/components/sections/WhoItsFor";
import Solution from "@/components/sections/Solution";
import FAQ from "@/components/sections/FAQ";
import MooneePonds from "@/components/sections/MooneePonds";
import CTA from "@/components/sections/CTA";
import BookingModal from "@/components/BookingModal";
import InjuryQuiz from "@/components/sections/InjuryQuiz";
import InjuryCards from "@/components/sections/InjuryCards";
import StickyBookBtn from "@/components/ui/StickyBookBtn";

export default function Home() {
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
      {/* 1. Hero */}
      <Hero />

      {/* 2. Where are you at? */}
      <WhereAreYouAt />

      {/* 3. Social proof strip */}
      <Services />

      {/* 3. Injury entry / what we treat */}
      <InjuryCards />

      {/* 4. Problem — §5.2 "Sore doesn't always mean broken" */}
      <Problem />

      {/* 5. §5.3 "We look at more than where it hurts" */}
      <MacroLook />

      {/* 6. Curiosity hook — "Do you know your numbers?" */}
      <CuriosityHook />

      {/* 7. "What happens after you book" */}
      <HowItWorks />

      {/* 8. Pricing */}
      <Pricing />

      {/* 9. Everything included / Return to Perform */}
      <Accelerator />

      {/* 10. §5.4 "Is Stride right for you?" */}
      <WhoItsFor />

      {/* 11. Team */}
      <Solution />
      <MooneePonds />

      {/* 12. FAQ (existing + §5.5 additions) */}
      <FAQ />

      {/* 13. Closing module §5.7 */}
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
            { "@type": "Question", "name": "What\u2019s included in the $145 Initial Assessment?", "acceptedAnswer": { "@type": "Answer", "text": "A two-part process. Session 1 ($145): what\u2019s wrong and what\u2019s been causing it (45 min). Session 2 ($185): strength, movement and sport-specific tests, measured, not eyeballed. After both sessions you\u2019ll have a clear diagnosis, a written week-by-week return program, and a target return date." } },
            { "@type": "Question", "name": "Can I use private health insurance?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We use HICAPS for on-the-spot private health rebate claiming. Medicare EPC plans are also accepted with a valid GP referral." } },
            { "@type": "Question", "name": "What if I have a combat sports injury (BJJ, MMA, boxing)?", "acceptedAnswer": { "@type": "Answer", "text": "Our Senior Physiotherapist Tom Yeung works primarily with combat sport athletes \u2014 BJJ, MMA, boxing and wrestling. He has a deep background in combat training and understands the unique demands, culture, and timelines of competitive grappling and striking sports." } },
            { "@type": "Question", "name": "Am I overreacting by booking?", "acceptedAnswer": { "@type": "Answer", "text": "No. Most athletes wait to see if something settles. If it hasn't, or it keeps coming back, it's worth knowing why. Sometimes the answer is reassuring." } },
            { "@type": "Question", "name": "Will you just give me more exercises?", "acceptedAnswer": { "@type": "Answer", "text": "Often fewer, better placed. Rehab works best when it fits into your normal training, not on top of it." } },
            { "@type": "Question", "name": "Do I have to stop training?", "acceptedAnswer": { "@type": "Answer", "text": "Rarely completely. We'll show you what you can keep doing and how to adjust the rest." } }
          ]
        }) }}
      />
    </>
  );
}
