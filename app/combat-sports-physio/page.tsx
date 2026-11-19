import type { Metadata } from "next";
import Script from "next/script";
import CTA from "@/components/sections/CTA";
import BookingModal from "@/components/BookingModal";
import InjuryQuiz from "@/components/sections/InjuryQuiz";
import CombatSportsPage from "@/components/sections/CombatSportsPage";

export const metadata: Metadata = {
  title: "Combat Sports Physio Melbourne — BJJ, MMA, Boxing | Stride",
  description:
    "Physio for BJJ, MMA, boxing and wrestling athletes in Moonee Ponds. Keep training through rehab, with return cleared by testing. From $145.",
  alternates: { canonical: "/combat-sports-physio" },
  openGraph: {
    title: "Combat Sports Physio Melbourne — BJJ, MMA, Boxing | Stride",
    description: "Physio for BJJ, MMA, boxing and wrestling athletes in Moonee Ponds. Keep training through rehab, with return cleared by testing. From $145.",
    images: [{ url: "https://www.stridephysiohealth.com.au/og-image.jpg", width: 1200, height: 630, alt: "Stride Sports Physio & Performance — Moonee Ponds" }],
    url: "https://www.stridephysiohealth.com.au/combat-sports-physio",
  },
  twitter: { card: "summary_large_image", images: ["https://www.stridephysiohealth.com.au/og-image.jpg"] },
};

const faqs = [
  {
    q: "Will I have to stop training?",
    a: "Rarely completely. We'll show you what you can keep doing and how to modify the rest.",
  },
  {
    q: "Do I need a referral?",
    a: "No. Book directly.",
  },
  {
    q: "What does it cost?",
    a: "The Initial Assessment is $145 across two sessions, including diagnosis, testing and a written plan. Private health claimable.",
  },
  {
    q: "Hurt at training on the weekend?",
    a: "Our Sunday clinic runs 9am–2pm. Walk in, no booking or referral needed.",
  },
  {
    q: "Am I overreacting by booking?",
    a: "No. Most athletes wait to see if something settles. If it hasn't, or it keeps coming back, it's worth knowing why. Sometimes the answer is reassuring.",
  },
];

export default function CombatSportsPhysioPage() {
  return (
    <>
      <CombatSportsPage faqs={faqs} />
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
