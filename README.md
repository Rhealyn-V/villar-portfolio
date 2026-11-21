# Rhealyn Villar — Portfolio

**Junior Web Developer — Business Systems & Automation.**
I build web apps that replace manual, paper-based processes, backed by hands-on experience
in admin, IT support, and operations.

Live: https://villar-portfolio.vercel.app

## Stack

React 19 · Vite 7 · Tailwind CSS 3 · React Router 7 · lucide-react / react-icons.
No animation library: scroll reveals are a tiny CSS + IntersectionObserver enhancement
(`src/Components/ui/Reveal.jsx`) that never hides content when JS is missing.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # serve the build
npm run lint
```

## Where things live

| To change… | Edit |
|---|---|
| Positioning, SEO text, email/phone, social links | `src/data/site.js` (+ mirror SEO text in `index.html`) |
| Projects, case studies, experience, skills, tournaments, certifications | `src/data/portfolio.js` |
| Colours, radius, shadows | `tailwind.config.js`, `src/index.css` |
| Case-study screenshots | `public/projects/<slug>/` (see README in each folder) |
| Sitemap (add new case studies) | `public/sitemap.xml` |

Stats on the site (projects built, live deployments, technologies) are computed from the
data, so they can't drift out of sync. Social links with an empty URL are hidden.

## Contact form

Set `VITE_FORMSPREE_ID` (see `.env.example`) locally and in Vercel → Settings →
Environment Variables. Without it, the Contact section shows a direct Email / Viber call to
action instead of a form.

## Resume PDF

`public/Rhealyn-Villar-Resume.pdf` is generated from the `/resume` page. After editing data,
open `/resume` → Print → Save as PDF (A4, margins default) and replace the file.

## Outstanding TODOs

See [`TODO.md`](./TODO.md).
