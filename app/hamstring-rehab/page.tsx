import InjuryPageTemplate from "@/components/sections/InjuryPageTemplate";

export default function HamstringRehabPage() {
  return (
    <InjuryPageTemplate
      eyebrow="Hamstring & Calf Rehab · Moonee Ponds, Melbourne"
      injury="Hamstring & Calf"
      headline="Hamstring & Calf Rehab."
      headlineAccent="Sprint again."
      subtext="Soft tissue injuries have the highest recurrence rate in sport. The research is clear — progressive loading, not rest, prevents re-injury. We build programs that get you back faster and keep you there."
      problemTitle="What goes wrong with hamstring and calf rehab"
      problems={[
        {
          title: "Inadequate loading in early rehab",
          body: "The instinct to rest a hamstring or calf strain is understandable — but tendons and muscle-tendon junctions need progressive load to heal correctly. Passive rest alone produces weaker, less resilient tissue.",
        },
        {
          title: "No sprint mechanics assessment",
          body: "Hamstring injuries in running sports are often driven by sprint mechanics — overstriding, poor hip extension, pelvic instability. Treating the injury without addressing the mechanism leads to re-injury.",
        },
        {
          title: "Premature return to full speed",
          body: "The most dangerous moment for hamstring re-injury is the first few weeks back at full training. A structured return-to-sprint protocol — with speed gates and volume limits — is essential.",
        },
      ]}
      approach="We assess the injury (grade, location, mechanism), calf or hamstring strength and flexibility, and running mechanics where relevant. Rehabilitation is progressive — early pain-free loading, then eccentric strength work (Nordic curls, heel raises), then sport-specific speed and power work. We use a structured return-to-sprint protocol for running athletes."
      timeline="Grade I hamstring/calf: 1–3 weeks. Grade II: 3–6 weeks. Grade III (significant tear): 6–12 weeks. Recurrent injuries or proximal hamstring tendinopathy: longer — we address the underlying cause."
      faqs={[
        {
          q: "I've had multiple hamstring strains — why does it keep happening?",
          a: "Recurrent hamstring injuries usually have an underlying cause — strength deficit, sprint mechanics issue, inadequate rehabilitation of the original injury, or returning too soon. We assess all of these and address the root cause.",
        },
        {
          q: "Can I still train with a hamstring strain?",
          a: "Yes, with modification. Pool running, upper body and non-painful lower body work keeps you moving. We'll tell you exactly what's safe and what to avoid.",
        },
        {
          q: "When can I sprint again?",
          a: "Depends on grade and sport demands. Grade I: often within 2 weeks with progression. Grade II: 4–6 weeks minimum with a structured return-to-sprint protocol. We don't clear you for full sprinting until strength and movement criteria are met.",
        },
      ]}
    />
  );
}
