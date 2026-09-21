import InjuryPageTemplate from "@/components/sections/InjuryPageTemplate";

export default function HipGroinRehabPage() {
  return (
    <InjuryPageTemplate
      eyebrow="Hip & Groin Injury Rehab · Moonee Ponds, Melbourne"
      injury="Hip & Groin"
      headline="Hip & Groin Rehab."
      headlineAccent="Back to full power."
      subtext="Hip and groin injuries are among the most complex in sport — poorly understood, commonly misdiagnosed, and often undertreated. Getting the diagnosis right is where the rehab starts."
      problemTitle="What goes wrong with hip and groin rehab"
      problems={[
        {
          title: "Misdiagnosis is common",
          body: "Groin pain in athletes has over a dozen potential sources — adductor strain, hip flexor, FAI, sports hernia, osteitis pubis. Treatment only works when the diagnosis is right.",
        },
        {
          title: "Rest without rehabilitation",
          body: "Groin injuries respond poorly to rest alone. Active management — progressive loading, strength work, movement retraining — produces better outcomes than passive treatment.",
        },
        {
          title: "Ignoring the hip's role in sport",
          body: "Groin injuries in AFL, soccer, and combat sports are often driven by hip strength deficits, poor pelvic control, and rotational demands. Treating the site of pain without addressing the cause leads to recurrence.",
        },
      ]}
      approach="We take a full clinical assessment — hip ROM, adductor and hip flexor strength testing, pelvis stability, and sport-specific movement analysis. We differentiate between the common injury types and build your program around the actual diagnosis, not a generic 'groin strain' protocol."
      timeline="Adductor strains: 2–6 weeks depending on grade. Hip flexor: 2–4 weeks. FAI and sports hernia: variable — may require specialist consultation. Osteitis pubis: 6–12 weeks minimum."
      faqs={[
        {
          q: "How do I know if it's a groin strain or something more serious?",
          a: "Clinical assessment is the starting point. Symptoms, mechanism, and physical testing help differentiate between muscle strains, FAI, sports hernia, and other sources. Imaging is arranged when indicated.",
        },
        {
          q: "I play AFL — is this a common injury?",
          a: "Very common. The rotational and kicking demands of AFL place significant load on the groin and hip complex. We work with AFL athletes regularly and understand the sport's specific demands.",
        },
        {
          q: "Can I still train?",
          a: "Usually yes, with modification. Lower body work may need to be adjusted, but maintaining fitness and upper body strength during rehabilitation is always the goal.",
        },
      ]}
    />
  );
}
