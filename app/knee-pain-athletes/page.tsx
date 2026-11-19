import type { Metadata } from "next";
import Script from "next/script";
import KneePainPage from "@/components/sections/KneePainPage";
import CTA from "@/components/sections/CTA";
import BookingModal from "@/components/BookingModal";
import InjuryQuiz from "@/components/sections/InjuryQuiz";

export const metadata: Metadata = {
  title: "Knee Pain Physio for Athletes — Moonee Ponds | Stride",
  description:
    "Knee pain from sport? Patellar tendon, kneecap and meniscus problems assessed and managed in Moonee Ponds. Written plan from day one. From $145.",
  alternates: { canonical: "/knee-pain-athletes" },
  openGraph: {
    title: "Knee Pain Physio for Athletes — Moonee Ponds | Stride",
    description: "Knee pain from sport? Patellar tendon, kneecap and meniscus problems assessed and managed in Moonee Ponds. Written plan from day one. From $145.",
    images: [{ url: "https://www.stridephysiohealth.com.au/og-image.jpg", width: 1200, height: 630, alt: "Stride Sports Physio & Performance — Moonee Ponds" }],
    url: "https://www.stridephysiohealth.com.au/knee-pain-athletes",
  },
  twitter: { card: "summary_large_image", images: ["https://www.stridephysiohealth.com.au/og-image.jpg"] },
};

const faqs = [
  {
    q: "Do I need a scan?",
    a: "Usually not to start. Most knee problems can be diagnosed from a thorough assessment. We'll refer you for imaging if it's needed.",
  },
  {
    q: "Can I keep playing?",
    a: "Often yes, with modifications. We'll tell you what's safe and what to hold back on.",
  },
  {
    q: "How long will it take?",
    a: "It depends on the problem and how long it's been going. You'll get a written timeline after your second session.",
  },
  {
    q: "Do I need a referral?",
    a: "No.",
  },
  {
    q: "Am I overreacting by booking?",
    a: "No. Most athletes wait to see if something settles. If it hasn't, or it keeps coming back, it's worth knowing why. Sometimes the answer is reassuring.",
  },
  {
    q: "Will you just give me more exercises?",
    a: "Often fewer, better placed. Rehab works best when it fits into your normal training, not on top of it.",
  },
];

export default function KneePainAthletesPage() {
  return (
    <>
      <KneePainPage faqs={faqs} />
      <CTA />
      <BookingModal />
      <InjuryQuiz />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </>
  );
}
