import { Link } from "react-router-dom";
import { Printer, ArrowLeft, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import {
  profile,
  socials,
  experience,
  education,
  skillTags,
  softSkills,
  projects,
  certifications,
  achievements,
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
        <div className="flex gap-3">
          <a href={profile.resumeFile} download className="btn-outline">
            Download PDF
          </a>
          <button onClick={() => window.print()} className="btn-primary">
            <Printer size={16} /> Print / Save as PDF
          </button>
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
            <span className="inline-flex items-center gap-1">
              <Github size={13} /> {socials.github}
            </span>
            <span className="inline-flex items-center gap-1">
              <Linkedin size={13} /> {socials.linkedin}
            </span>
          </div>
        </header>

        {/* Summary */}
        <Divider title="Professional Summary" />
        <p className="text-sm leading-relaxed text-slate-700">{profile.objective}</p>

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
              <h3 className="text-sm font-bold text-slate-900">
                {p.title}{" "}
                <span className="font-normal text-slate-500">
                  · {p.stack.join(", ")}
                </span>
              </h3>
              <p className="text-sm text-slate-700">{p.description}</p>
              <p className="mt-0.5 text-xs text-slate-500">
                <span className="font-semibold">Features:</span> {p.features.join(", ")}
              </p>
            </div>
          ))}
        </div>

        {/* Education */}
        <Divider title="Education" />
        {education.map((e, i) => (
          <div key={i} className="flex flex-wrap items-baseline justify-between">
            <div>
              <h3 className="text-sm font-bold text-slate-900">{e.degree}</h3>
              <p className="text-sm text-slate-700">{e.school}</p>
            </div>
            <span className="text-xs text-slate-500">{e.period}</span>
          </div>
        ))}

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

        {/* Achievements */}
        <Divider title="Achievements" />
        <ul className="list-disc space-y-0.5 pl-5 text-sm text-slate-700">
          {achievements.map((a) => (
            <li key={a}>{a}</li>
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
