import { Link } from "react-router-dom";
import { Printer, ArrowLeft, Mail, Phone, MapPin, Download, FileType2, Trophy } from "lucide-react";
import {
  profile,
  experience,
  education,
  skillTags,
  softSkills,
  projects,
  certifications,
  achievements,
  badmintonAchievements,
} from "../data/portfolio";

const Divider = ({ title }) => (
  <h2 className="mb-3 mt-6 border-b-2 border-brand-primary pb-1 text-sm font-bold uppercase tracking-widest text-brand-primary">
    {title}
  </h2>
);

const Resume = () => {
  return (
    <div className="min-h-screen bg-slate-100 py-8 dark:bg-brand-dark">
      {/* Toolbar (hidden when printing) */}
      <div className="no-print mx-auto mb-6 flex max-w-4xl items-center justify-between px-5">
        <Link to="/" className="btn-outline">
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
        <div className="flex flex-wrap gap-3">
          <button onClick={() => window.print()} className="btn-primary">
            <Download size={16} /> Save as PDF
          </button>
          <button onClick={() => window.print()} className="btn-outline">
            <Printer size={16} /> Print Resume
          </button>
          <a href={profile.resumeFileDocx} download className="btn-outline">
            <FileType2 size={16} /> Word
          </a>
        </div>
      </div>

      {/* Resume sheet */}
      <article className="print-container mx-auto max-w-4xl bg-white p-8 text-slate-800 shadow-card sm:p-12">
        {/* Header */}
        <header className="border-b-2 border-slate-200 pb-4">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
            {profile.name}
          </h1>
          <p className="mt-1 text-base font-semibold text-brand-primary">{profile.title}</p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-slate-600">
            <span className="inline-flex items-center gap-1">
              <Mail size={13} /> {profile.email}
            </span>
            <span className="inline-flex items-center gap-1">
              <Phone size={13} /> {profile.phone}
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin size={13} /> {profile.location}
            </span>
          </div>
        </header>

        {/* Summary */}
        <Divider title="Professional Summary" />
        <p className="text-sm leading-relaxed text-slate-700">{profile.objective}</p>

        {/* Education */}
        <Divider title="Education History" />
        <div className="space-y-3">
          {education.map((e, i) => (
            <div key={i} className="flex flex-wrap items-baseline justify-between gap-1 border-b border-slate-100 pb-2.5 last:border-b-0">
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded bg-brand-primary/10 px-2 py-0.5 text-[11px] font-bold text-brand-primary">
                    {e.level}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900">{e.degree}</h3>
                </div>
                <p className="text-sm font-medium text-slate-700 mt-0.5">{e.school}</p>
                {e.details && (
                  <p className="text-xs text-slate-500 italic mt-0.5">{e.details}</p>
                )}
              </div>
              <span className="text-xs font-semibold text-slate-600">{e.period}</span>
            </div>
          ))}
        </div>

        {/* Experience */}
        <Divider title="Professional Experience" />
        <div className="space-y-4">
          {experience.map((job, i) => (
            <div key={i}>
              <div className="flex flex-wrap items-baseline justify-between gap-1">
                <h3 className="text-sm font-bold text-slate-900">
                  {job.role} — <span className="font-medium">{job.company}</span>
                </h3>
                <span className="text-xs text-slate-500">{job.period}</span>
              </div>
              <p className="text-xs italic text-slate-500">{job.location}</p>
              <ul className="mt-1.5 list-disc space-y-0.5 pl-5 text-sm text-slate-700">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Projects */}
        <Divider title="Key Projects" />
        <div className="space-y-3">
          {projects.map((p, i) => (
            <div key={i}>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900">
                  {p.title}{" "}
                  <span className="font-normal text-slate-500">
                    · {p.stack.join(", ")}
                  </span>
                </h3>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded border border-emerald-300 bg-emerald-50 text-emerald-700">
                  {p.status}
                </span>
              </div>
              <p className="text-sm text-slate-700">{p.description}</p>
              <p className="mt-0.5 text-xs text-slate-500">
                <span className="font-semibold">Features:</span> {p.features.join(", ")}
              </p>
            </div>
          ))}
        </div>

        {/* Badminton & Athletic Achievements */}
        <Divider title="Badminton Achievements & Leadership" />
        <div className="mb-2 space-y-3">
          <div>
            <p className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
              <Trophy size={15} className="text-amber-500" />
              Badminton Tournaments Organized:
            </p>
            <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm text-slate-700">
              {badmintonAchievements.tournamentsOrganizedList.map((t, idx) => (
                <li key={idx} className="font-semibold text-slate-800">{t}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
              <Trophy size={15} className="text-amber-500" />
              {badmintonAchievements.organization} Honors:
            </p>
            <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm text-slate-700">
              {badmintonAchievements.medals.map((m, i) => (
                <li key={i}>
                  <span className="font-semibold">{m.title}</span> — {m.event} ({m.venue})
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Skills */}
        <Divider title="Technical Skills" />
        <div className="space-y-1 text-sm text-slate-700">
          {Object.entries(skillTags).map(([group, tags]) => (
            <p key={group}>
              <span className="font-semibold text-slate-900">{group}: </span>
              {tags.join(", ")}
            </p>
          ))}
        </div>

        {/* Soft skills */}
        <Divider title="Soft Skills" />
        <p className="text-sm text-slate-700">{softSkills.join(" · ")}</p>

        {/* Certifications */}
        <Divider title="Certifications" />
        <ul className="list-disc space-y-0.5 pl-5 text-sm text-slate-700">
          {certifications.map((c, i) => (
            <li key={i}>
              {c.title} — {c.issuer} ({c.date})
            </li>
          ))}
        </ul>

        {/* Key Highlights */}
        <Divider title="Key Highlights" />
        <ul className="list-disc space-y-0.5 pl-5 text-sm text-slate-700">
          {achievements.map((a, idx) => (
            <li key={idx}>{a}</li>
          ))}
        </ul>

        <p className="mt-6 text-center text-xs font-medium italic text-slate-500">
          References available upon request.
        </p>
      </article>
    </div>
  );
};

export default Resume;
