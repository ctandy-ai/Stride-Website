# CLAUDE.md — Stride Sports Physio Website

Context for any Claude Code session working on this repository.

## What this is
Static marketing site for Stride Sports Physio and Performance (Moonee Ponds, Melbourne).
Pages: `index.html` (home), `sports-physio-moonee-ponds.html` (local SEO), `acl-rehab.html`, `privacy-policy.html`.
Deploys from `main` — **whatever is on `main` is live**. All work happens on feature branches, merged via reviewed PR only.

## Golden rules
- NEVER commit directly to `main`.
- Australian spelling throughout (personalised, programme is NOT used — "program" is correct in AU sport context, colour, individualised).
- Shared blocks (pricing, team, footer, quiz) are duplicated across pages — any edit to one must be applied to all pages in the same commit.
- Do not add banner/hero decorative images. Keep the existing boxed, slide-style aesthetic.
- Booking links point to Cliniko — never change booking URLs without explicit instruction.

## Canonical terms (do not deviate)
- Platform: **MotionCode Pro** (one word "MotionCode", then "Pro"). Replaces any instance of "Motion Code Pro". Launching with Prepared to Play. "VueMotion" is internal-only and must not appear on the site.
- Program name: **Rehab Accelerator** ($185/week).
- Entry product: **Initial Athlete Assessment** — two parts: Part 1 Consult & Athlete Profile (45 min, $145), Part 2 Testing & Program Build (90 min, $185), $330 total.
- Sessional rates: Standard consult 30 min $145 · Extended consult 60 min $185.
- Progression system: **Return (Red) → Learn (White) → Develop (Blue) → Perform (Black)**.
- Locked phrases (use verbatim when they appear): "Pain-free is the start line", "Change the gate, not the goal", "Feeling better isn't being ready", "The game finds your weakest link".

## Brand palette
INK #0C3B52 · SKY #46BCF4 · TEAL #0FA8BC · TEAL DARK #0B7E8E · CYAN #73F5F5 · PAPER #EFF8FC · AMBER #E8833A · RED #C0473B · BLUE #2E9BD6.
Belt fills: Red #C0473B, White #E4EDF2, Blue #2E9BD6, Black #0C3B52.

## Voice
Athlete-facing, plain second-person "you", short punchy sentences, direct-response tone. No hype adjectives. No testimonials about clinical care (AHPRA advertising rules) — use process/expectation framing instead.

## Compliance guardrails
- No testimonials or star ratings about clinical care.
- No outcome guarantees ("return faster", "% risk reduction") without cited sources and qualified framing.
- Never state or imply guaranteed recovery timeframes.
