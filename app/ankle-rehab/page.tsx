import InjuryPageTemplate from "@/components/sections/InjuryPageTemplate";

export default function AnkleRehabPage() {
  return (
    <InjuryPageTemplate
      eyebrow="Ankle Injury Rehab · Moonee Ponds, Melbourne"
      injury="Ankle"
      headline="Ankle Rehab."
      headlineAccent="Built to go again."
      subtext="Ankle sprains are the most common injury in sport — and the most undertreated. 'Walk it off' is how athletes develop chronic instability and re-injury rates above 70%."
      problemTitle="What goes wrong with ankle rehab"
      problems={[
        {
          title: "Undertreated from the start",
          body: "Most ankle sprains get RICE and a Tubigrip. Without proper rehabilitation, the ligament heals with reduced proprioception and mechanical instability — setting up the next sprain.",
        },
        {
          title: "No balance or proprioception work",
          body: "Ankle stability depends on neuromuscular control as much as ligament integrity. If balance retraining isn't in your program, you're not fully rehabbing the injury.",
        },
        {
          title: "Premature return to sport",
          body: "Returning as soon as pain settles is how 70%+ of athletes re-sprain. Functional return criteria — hop testing, cutting, sport-specific agility — need to be met before you play.",
        },
      ]}
      approach="We assess ligament integrity, peroneal muscle strength, ankle ROM and balance. Rehabilitation is progressive — swelling and range of motion first, then strength and balance, then sport-specific loading and agility. Return to sport is criteria-based, not time-based."
      timeline="Grade I sprains: 1–2 weeks. Grade II: 3–6 weeks. Grade III (complete tear): 6–12 weeks. Chronic instability with repeated sprains may take longer to address the underlying deficits."
      faqs={[
        {
          q: "My ankle sprain happened weeks ago — is it too late to rehab it?",
          a: "No. Chronic ankle instability is very treatable. In fact, many athletes present to us after multiple re-sprains — addressing the underlying deficits now prevents the next one.",
        },
        {
          q: "Do I need a scan?",
          a: "Not always. We can assess clinically whether imaging is needed. Significant bruising, inability to weight-bear, or bony tenderness are indications for an X-ray to rule out fracture.",
        },
        {
          q: "Can I still train with an ankle sprain?",
          a: "Often yes, with modification. Upper body work, pool sessions, cycling — keeping you moving matters. We'll tell you exactly what you can and can't do.",
        },
      ]}
    />
  );
}
