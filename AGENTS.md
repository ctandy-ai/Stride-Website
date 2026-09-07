# STRIDE WEBSITE — AGENT NOTES

## ⚠️ Architecture (read before touching anything)

- **Framework:** Next.js app served via **Netlify** — NOT static HTML
- **Live site:** `https://stridephysiohealth.com.au` → Netlify auto-deploys from `main`
- **Root-level `.html` files** (`index.html`, `acl-rehab.html` etc.) are OLD STATIC FILES. Netlify ignores them. Do NOT edit them.

## Correct source locations

| What | Where |
|---|---|
| Homepage layout | `app/page.tsx` |
| Team section (staff profiles) | `components/sections/Solution.tsx` → `team` array |
| Sunday Clinic section | `components/sections/SundayClinic.tsx` |
| All other sections | `components/sections/*.tsx` |
| Static assets (photos) | `public/` |

## Deploy

```bash
git add . && git commit -m "description" && git push origin main
```
Netlify builds automatically (~90 seconds). Check live site to confirm.

---

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
