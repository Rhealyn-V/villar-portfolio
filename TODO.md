# Content only you can fill in

Search the code for `TODO` to jump to each spot.

## Links & accounts
- [ ] LinkedIn URL — `src/data/site.js` → `socials` (hidden until filled). Also add it to `sameAs` in the JSON-LD in `index.html`.
- [ ] Facebook URL (optional) — `src/data/site.js`.
- [ ] Formspree form ID — set `VITE_FORMSPREE_ID` in Vercel env vars (see `.env.example`). Until then, Contact shows email/Viber buttons.
- [ ] Repo URLs for each project (`repoUrl` in `src/data/portfolio.js`) — "Code" buttons stay hidden while empty.

## Case studies (`src/data/portfolio.js` → `caseStudy`)
- [ ] CHEM & CDSC — "Problem": how was the work done before, and what went wrong?
- [ ] CHEM & CDSC — "My role": solo or team, and what you owned.
- [ ] CHEM & CDSC — "Tech & architecture": confirm API style, where the PHP back end is hosted, auth approach.
- [ ] CHEM & CDSC — "Results": real measured outcomes (e.g. "cut trip-booking time from X to Y"). No numbers were invented.
- [ ] CHEM & CDSC — "What I'd do next": suggestions were drafted; keep, edit, or replace.
- [ ] Screenshots: add real images to `public/projects/chem-transport/` and `public/projects/cdsc-industrial-supply/`, then set `src`, `width`, `height` on the placeholder entries. Use demo data only.
- [ ] TRES Prime Drive — add a case study + screenshots when ready.

## Demo credentials
- [ ] Create **demo-only** accounts for the CHEM and CDSC live demos (sample data, never real client logins) and fill `demoCredentials`. Until then the site says "Demo login available on request".
- [ ] Rotate the passwords of the accounts that appeared in the old login screenshots (CHEM, CDSC, Bluescale). Usernames were visible in images still in git history.

## Facts to verify
- [ ] CCTV Watcher duties (`experience` in `src/data/portfolio.js`) — current bullets describe scheduling/memo work; confirm or correct.
- [ ] "3+ years of work experience" stat.
- [ ] Skill tier placement (Daily use / Comfortable / Learning) — mapped from your old percentages.
- [ ] Tournament highlights for GAWJUS and EBT (e.g. "Live scoreboard", "Bracket management").
- [ ] Real event photos for GAWJUS and EBT (stock Unsplash photos were removed).

## Files
- [ ] Re-export the Word resume (old one says "Bookkeeping Assistant" and has `[PLACEHOLDER]`s), then set `profile.resumeFileDocx`. The old `public/Rhealyn-Villar-Resume.docx` is still publicly reachable by URL — replace or delete it.
- [ ] `docs/RESUME.md` and `docs/BRANDING_AND_SEO.md` still use the old Bookkeeping positioning and mention POS/Payroll projects that aren't on the site.
