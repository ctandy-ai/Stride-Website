import InjuryPageTemplate from "@/components/sections/InjuryPageTemplate";

export default function AchillesRehabPage() {
  return (
    <InjuryPageTemplate
      eyebrow="Achilles Tendon Rehab · Moonee Ponds, Melbourne"
      injury="Achilles Tendon"
      headline="Achilles Rehab."
      headlineAccent="Back to running."
      subtext="Achilles injuries are one of the most common — and most mismanaged — in sport. Load it too early and you re-tear. Rest it too long and you lose the tendon's capacity. We get the balance right."
      problemTitle="What goes wrong with Achilles rehab"
      problems={[
        {
          title: "Too much rest, too soon",
          body: "Tendons need load to heal. Complete rest early in management is often the wrong call — it reduces tendon capacity without addressing the load that caused the injury.",
        },
        {
          title: "No progressive return-to-run protocol",
          body: "Going from walking to running without a structured loading program is how Achilles injuries recur. Return-to-run needs to be planned, progressive and monitored.",
        },
        {
          title: "Missing the underlying cause",
          body: "Achilles injuries rarely happen in isolation. Calf strength deficits, ankle stiffness, hip weakness — the cause of the load spike matters as much as treating the tendon.",
        },
      ]}
      approach="We assess the full kinetic chain — not just the tendon. Calf strength and endurance are tested, ankle ROM assessed, and running/jumping mechanics screened. Your program is built around progressive tendon loading (heavy slow resistance, then plyometric loading, then sport-specific) with a structured return-to-run protocol."
      timeline="Most Achilles tendinopathies respond in 8–12 weeks with proper loading. Partial or full ruptures (non-surgical) require 3–6 months. Surgical repair: 6–12 months."
      faqs={[
        {
          q: "Do I need surgery for an Achilles rupture?",
          a: "Not always. Non-surgical management of Achilles ruptures with early functional rehabilitation produces comparable outcomes to surgical repair in many cases. We'll assess your injury and give you an honest recommendation.",
        },
        {
          q: "Can I still train with Achilles pain?",
          a: "Often yes — with modification. We adjust load and find what you can do while the tendon is managed. Complete rest is rarely the right answer.",
        },
        {
          q: "How long before I can run again?",
          a: "For tendinopathy, structured return-to-run typically begins at 4–6 weeks. For ruptures, 3–4 months minimum. Timeline depends on your presentation and progress.",
        },
      ]}
    />
  );
}
