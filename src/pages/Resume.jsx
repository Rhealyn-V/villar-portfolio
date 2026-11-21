import { Link } from "react-router-dom";
import { Printer, ArrowLeft, Download } from "lucide-react";
import {
  profile,
  experience,
  education,
  skillTiers,
  softSkills,
  projects,
  certifications,
  achievements,
  organizedTournaments,
  athletics,
} from "../data/portfolio";
import { positioning, contact, site, activeSocials } from "../data/site";
import usePageMeta from "../hooks/usePageMeta";

// The printable resume is a "paper" document, so the sheet stays white in dark
// mode; only the surrounding page and toolbar follow the theme.
const Heading = ({ children }) => (
  <h2 className="mb-2 mt-6 border-b-2 border-brand pb-1 text-xs font-bold uppercase tracking-[0.18em] text-brand">
    {children}
  </h2>
);

const Resume = () => {
  usePageMeta({ title: "Resume", path: "/resume" });
  const links = [site.url.replace("https://", ""), ...activeSocials.map((s) => s.url.replace("https://", ""))];

  return (
    <div className="min-h-screen bg-slate-100 py-8 dark:bg-slate-950">
      <div className="no-print container-page mb-6 flex max-w-4xl flex-wrap items-center justify-between gap-3">
        <Link to="/" className="btn-secondary">
          <ArrowLeft size={16} aria-hidden="true" /> Back to portfolio
        </Link>
        <div className="flex flex-wrap gap-2">
          <a href={profile.resumeFile} download className="btn-primary">
            <Download size={16} aria-hidden="true" /> Download PDF
          </a>
          <button type="button" onClick={() => window.print()} className="btn-secondary">
            <Printer size={16} aria-hidden="true" /> Print
          </button>
        </div>
      </div>

      <main id="main">
        <article className="print-container mx-auto max-w-4xl bg-white p-6 text-slate-800 shadow-card sm:p-12 [&_h1]:text-slate-900 [&_h3]:text-slate-900">
          <header className="border-b border-slate-200 pb-4">
            <h1 className="text-3xl font-extrabold tracking-tight">{profile.name}</h1>
            <p className="mt-1 text-base font-semibold text-brand">{positioning.title}</p>
            <p className="mt-2 text-sm text-slate-700">{positioning.supportingLine}</p>
            <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-700">
              <span>{contact.email}</span>
              <span>{contact.phone}</span>
              <span>{contact.location}</span>
              {links.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </p>
          </header>

          <Heading>Summary</Heading>
          <p className="text-sm leading-relaxed text-slate-700">{profile.summary}</p>

          <Heading>Projects</Heading>
          <div className="space-y-3">
            {projects.map((p) => (
              <div key={p.slug} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-sm font-bold">
                    {p.title} <span className="font-normal text-slate-600">· {p.stack.join(", ")}</span>
                  </h3>
                  <span className="text-xs font-medium text-slate-600">
                    {p.status === "Completed" ? "Completed" : "In development"}
                  </span>
                </div>
                <p className="text-sm text-slate-700">{p.description}</p>
                {p.liveUrl && <p className="text-xs text-slate-600">Live demo: {p.liveUrl.replace("https://", "")}</p>}
              </div>
            ))}
          </div>

          <Heading>Experience</Heading>
          <div className="space-y-4">
            {experience.map((job) => (
              <div key={`${job.role}-${job.period}`} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-sm font-bold">
                    {job.role} — <span className="font-medium">{job.company}</span>
                  </h3>
                  <span className="text-xs text-slate-600">
                    {job.period} · {job.location}
                  </span>
                </div>
                <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm text-slate-700">
                  {job.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Heading>Skills</Heading>
          <div className="space-y-1 text-sm text-slate-700">
            {skillTiers.map((t) => (
              <p key={t.tier}>
                <span className="font-semibold text-slate-900">{t.tier}: </span>
                {t.skills.map((s) => s.name).join(", ")}
              </p>
            ))}
            <p>
              <span className="font-semibold text-slate-900">Working style: </span>
              {softSkills.join(", ")}
            </p>
          </div>

          <Heading>Education</Heading>
          <div className="space-y-2">
            {education.map((e) => (
              <div key={e.degree} className="flex flex-wrap items-baseline justify-between gap-2 text-sm">
                <p>
                  <span className="font-bold text-slate-900">{e.degree}</span> — {e.school}
                </p>
                <span className="text-xs text-slate-600">{e.period}</span>
              </div>
            ))}
          </div>

          <Heading>Certifications</Heading>
          <ul className="list-disc space-y-0.5 pl-5 text-sm text-slate-700">
            {certifications.map((c) => (
              <li key={c.title}>
                {c.title} — {c.issuer} ({c.date})
              </li>
            ))}
          </ul>

          <Heading>Leadership</Heading>
          <ul className="list-disc space-y-0.5 pl-5 text-sm text-slate-700">
            {organizedTournaments.map((t) => (
              <li key={t.id}>
                {t.role}, {t.title}
              </li>
            ))}
            <li>
              {athletics.headline}: {athletics.medals.map((m) => `${m.medal} (${m.title}, ${m.year})`).join("; ")}
            </li>
          </ul>

          <Heading>Highlights</Heading>
          <ul className="list-disc space-y-0.5 pl-5 text-sm text-slate-700">
            {achievements.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </article>
      </main>
    </div>
  );
};

export default Resume;
