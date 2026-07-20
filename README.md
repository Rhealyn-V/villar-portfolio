# Rhealyn Villar — Professional Portfolio

A modern, responsive, ATS-aware developer portfolio for **Rhealyn Villar** —
Admin Assistant · IT Support · Junior Web Developer · Bookkeeping Assistant.

Built with **React + Vite + Tailwind CSS + Framer Motion + Lucide Icons**.

## ✨ Features

- **Single-page portfolio** with smooth-scroll sections: Hero, About, Experience timeline,
  Skills (progress bars + tag cloud + soft skills), Services, Featured Projects,
  Certificates & Achievements, Resume CTA, Contact form, Footer.
- **Dedicated printable resume** at `/resume` (ATS-friendly, one-click Print → Save as PDF).
- **Dark / Light mode** with persistence.
- **Animated** hero typing effect, count-up statistics, scroll-reveal, glassmorphism, rounded cards.
- **SEO-ready** meta tags, Open Graph, and keywords (`index.html`).
- **Brand system:** Lexend font; palette `#087581`, `#13CDCD`, `#FFB544`, `#F8FAFC`, `#0F172A`.
- **All content in one file** — `src/data/portfolio.js`.

## 🚀 Getting started

```bash
npm install
npm run dev        # local dev server
npm run build      # production build → dist/
npm run preview    # preview the production build
npm run lint       # lint
```

## ✍️ How to customize

| To change… | Edit |
|---|---|
| Text, skills, projects, experience, socials, contact | `src/data/portfolio.js` |
| Colors, fonts, shadows | `tailwind.config.js` |
| SEO title / description / keywords | `index.html` |
| Your photo | replace `public/mypicture.jpg` (also `favicon.jpg`, `og-image.jpg`) |
| Downloadable PDF | add `public/Rhealyn-Villar-Resume.pdf`, or use `/resume` → Print → Save as PDF |

> Search the codebase for `[PLACEHOLDER]`-style markers (e.g. `[COMPANY NAME]`,
> `[YOUR PHONE NUMBER]`) and fill in your real details.

## 📄 Documents

- `docs/RESUME.md` — ATS-friendly **and** recruiter-friendly resume text.
- `docs/BRANDING_AND_SEO.md` — headlines, meta description, keywords, About Me,
  professional summary, project descriptions, and personal-brand tips.

## ☁️ Deploy

Deploy the `dist/` output to **Vercel**, **Netlify**, or **GitHub Pages**.
On Vercel: import the repo, framework **Vite**, build `npm run build`, output `dist`.

---

Built with React & Tailwind CSS.
