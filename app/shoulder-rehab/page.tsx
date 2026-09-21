import InjuryPageTemplate from "@/components/sections/InjuryPageTemplate";

export default function ShoulderRehabPage() {
  return (
    <InjuryPageTemplate
      eyebrow="Shoulder Injury Rehab · Moonee Ponds, Melbourne"
      injury="Shoulder"
      headline="Shoulder Rehab."
      headlineAccent="Full range. Full power."
      subtext="Shoulder injuries are not one injury — they're a dozen different presentations that need to be correctly identified before rehabilitation can be effective. Getting the diagnosis right matters."
      problemTitle="What goes wrong with shoulder rehab"
      problems={[
        {
          title: "Generic rotator cuff programs",
          body: "Not all shoulder injuries are rotator cuff tears. Labral pathology, instability, AC joint injuries, and biceps tendinopathy all present differently and require different management.",
        },
        {
          title: "Avoiding loading when loading is needed",
          body: "Rotator cuff tendons respond to progressive load. Avoiding overhead work indefinitely doesn't rehabilitate the tendon — it weakens it. Controlled, progressive loading is the evidence base.",
        },
        {
          title: "No return-to-sport criteria",
          body: "Returning to overhead sport — throwing, swimming, contact — requires specific criteria: strength ratios, range of motion, sport-specific movement screening. 'Pain-free' is not enough.",
        },
      ]}
      approach="We assess the full shoulder complex — rotator cuff strength and endurance, scapular control, joint range of motion, and sport-specific demands. Your program is built around the actual injury, not a generic shoulder protocol. Overhead athletes get overhead-specific programming."
      timeline="Rotator cuff tendinopathy: 6–12 weeks. Partial tears: 8–16 weeks. Full tears (non-surgical): 3–6 months. Surgical repair: 6–12 months. Instability: 3–6 months depending on management pathway."
      faqs={[
        {
          q: "Do I need surgery for a rotator cuff tear?",
          a: "Not always. Many partial and even some full-thickness rotator cuff tears are managed successfully without surgery. Factors include tear size, your activity demands, and how you respond to conservative management.",
        },
        {
          q: "I play a throwing sport — will I get back to full function?",
          a: "Yes, with appropriate rehabilitation. Overhead throwing athletes need specific programming and return-to-throw protocols. We understand those demands and build your program around them.",
        },
        {
          q: "How long until I can lift overhead again?",
          a: "Depends on the injury. For tendinopathy, overhead loading is often reintroduced within weeks — progressively. Surgical cases typically begin overhead work at 3–4 months post-op.",
        },
      ]}
    />
  );
}
