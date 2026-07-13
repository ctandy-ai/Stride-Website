# PHASE-1-BRIEF.md — Stride Website Phase 1 Build

Complete, self-contained task brief. Work on a branch named `phase-1-build`. Do NOT touch `main`. Read `CLAUDE.md` first. When finished, push the branch so a PR can be opened for review — do not merge anything.

---

## Task 1 — Global naming and consistency fixes (all pages)

1. Replace every instance of "Motion Code Pro" with **MotionCode Pro**.
2. Reconcile experience claims to one consistent set across all pages: use **"11 years at Melbourne Storm NRL"** for Chris individually and **"15+ years combined elite sport experience"** wherever the pair are described together. Remove any "11+ years elite sport experience" phrasing attached to the pair.
3. Remove every "$xxx value" line from all pricing sections (e.g. "$441 value", "$900 value", "$1,200 value", "$147.50/wk", "$70+/session").

## Task 2 — Extract embedded images (all pages)

Each HTML file is ~2 MB because images are embedded as base64 data URIs.
1. Extract every base64 image to `/assets/`, converting to WebP (quality ~80) where the source is PNG/JPEG. Keep the logo's transparency.
2. Replace the data URIs with file references; add `width`/`height` attributes and `loading="lazy"` on all images below the first viewport.
3. Target: each HTML file under 500 KB.

## Task 3 — Replace the pricing section (all three pages: index, moonee-ponds, acl-rehab)

Replace the entire "Transparent pricing / One program. Two ways in." section with the following structure and copy. Keep the existing card/section styling conventions; the layout is: assessment card full-width or top, then the two continuation options side by side beneath it.

**Section header:** Simple, transparent pricing — Everyone starts the same way.

**Step 1 — The only way in**

> **Initial Athlete Assessment — $330, delivered across two sessions**
> Every athlete starts here — injured or not. Two sessions, booked together, usually within the same week.
> - **Part 1 · Consult & Athlete Profile — 45 minutes · $145.** Your injury, your history, your sport, your season. You leave with a diagnosis, a provisional roadmap, and a clear list of what you can keep doing from day one.
> - **Part 2 · Testing & Program Build — 90 minutes in the gym · $185.** Objective testing on the gym floor — strength, jump and hop testing against the demands of your sport. You leave with your written, week-by-week program, a target return timeframe, and our recommendation for the path that fits you.
> - Private health claimable on the spot · HICAPS available · Medicare EPC accepted

**Step 2 — Then choose how you continue**

> At the end of your assessment, we'll recommend one of two paths — based on your injury, your testing, and your goals. The choice is always yours.
>
> **Sessional Care — book as you need**
> - **Standard consult — 30 minutes · $145.** Treatment and program review, booked when you need it.
> - **Extended consult — 60 minutes · $185.** For bigger sessions — retesting, program rebuilds, complex presentations.
> - Your program updated at each session
> - Right fit for straightforward injuries, niggles and check-ins
>
> **Rehab Accelerator — $185 per week, all-inclusive**
> - Weekly 1:1 physiotherapy session and program review
> - Individualised, sport-specific S&C program — updated every week
> - Gym and coaching access, plus direct messaging access to your physio
> - Objective testing at every progression gate, through to return-to-sport clearance
> - Right fit for significant injuries, return-to-play timelines, and athletes who want the full program
>
> *For perspective: a full week of the Accelerator — session, program, gym access, messaging and testing — costs the same as one extended consult.*

**Closing line for the section (italic):** Feeling better isn't being ready. Whichever path you choose, every decision is built on what we measure — not on how the injury feels this week.

**CTAs:** All "Book my assessment" / "Book a consult" buttons in these sections point to the existing Cliniko booking link. Do not present the Accelerator as directly purchasable — its card carries no booking button, only the assessment CTA.

## Task 4 — Replace the flagship promise wording (all three pages)

Wherever the site promises a plan from the **first appointment** (the "Our commitment at every first appointment" block, hero sub-copy, and closing CTA copy such as "You'll leave your first session with a written plan and a target return date"), replace with:

> **Our commitment:** By the end of your Initial Athlete Assessment, you will have a written, week-by-week program and a target return timeframe — based on your injury, your sport, and your objective test results. Not a guess.
>
> And you won't leave Part 1 empty-handed: you'll walk out of your first session with a diagnosis, a provisional roadmap, and what you can keep training from day one.

Replace the 01–04 process strip (Assess / Plan / Execute / Clear) everywhere it appears with:

> **01 Assess** — Full athlete profile, injury history and sport demands (Part 1)
> **02 Test** — Objective strength, jump and hop testing in the gym (Part 2)
> **03 Build** — Written week-by-week program and target return timeframe (Part 2)
> **04 Progress & Clear** — Weekly physio + S&C; return confirmed by testing, not the calendar

## Task 5 — Replace the testimonial section (all pages where it appears)

Remove the star-rating testimonial cards (James K., Alex W., Marcus T.) and the "★★★★★ 5.0 Google rating" badges, including the one in the hero of the Moonee Ponds and ACL pages. Replace the section with:

> **What every athlete gets. No exceptions.**
> - A written program and target return timeframe by the end of your Initial Athlete Assessment
> - Objective testing at every progression gate — you'll always know where you stand
> - A physio who knows your sport, your position and your competition calendar
> - Something you can keep training from day one

## Task 6 — Soften outcome claims

1. Replace the hero line "Return Faster. Return Stronger." with **"Return Ready. Return Stronger."** on all pages where it appears.
2. On `acl-rehab.html`, remove the "Up to 73% reduction in ACL re-injury risk" statistic block entirely (it can return later with a citation).
3. Replace the satisfaction-commitment paragraph ("If it's not right, we'll make it right...") with:

> We want every athlete to feel the difference from the first session. If your initial experience doesn't meet that standard, contact us directly and we'll discuss the right way forward for your situation.

## Task 7 — Fix the Decap CMS config

`admin/config.yml` points at repo `ctandy-ai/stride-landing` and file `stride-v13.html`, neither of which exists here. Update it to `repo: ctandy-ai/Stride-Website`, `branch: main`, `file: index.html`, and update the pricing fields to match the new structure (assessment total, Part 1 rate, Part 2 rate, standard consult rate, extended consult rate, Accelerator weekly rate).

## Acceptance checklist (verify before finishing)

- [ ] Zero instances of "Motion Code Pro" (space) remain; zero instances of "VueMotion" appear anywhere
- [ ] No "$xxx value" lines remain
- [ ] All three content pages under 500 KB; images load from `/assets/`
- [ ] Pricing section identical (funnel model) on all three pages; Accelerator has no direct booking CTA
- [ ] No "first appointment" plan promise remains; new commitment wording on all pages
- [ ] No testimonials, star ratings, or Google-rating badges remain
- [ ] No "Return Faster" or "73%" claims remain
- [ ] Experience-years claims consistent across pages
- [ ] Australian spelling throughout new copy
- [ ] Pages open correctly in a browser (visually check each one if tooling allows)
