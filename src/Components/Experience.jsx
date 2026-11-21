import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { experience } from "../data/portfolio";

const Experience = () => (
  <section id="experience" aria-labelledby="experience-title" className="section">
    <div className="container-page">
      <SectionHeading
        id="experience-title"
        eyebrow="Experience"
        title="Where the systems thinking comes from"
        subtitle="Roles in operations, IT support, and administration — the day-to-day problems my software is built to solve."
      />
      <ol className="relative ml-2 max-w-3xl border-l-2 border-slate-200 dark:border-slate-800">
        {experience.map((job) => (
          <Reveal as="li" key={`${job.role}-${job.period}`} className="relative mb-8 pl-8 last:mb-0">
            <span
              aria-hidden="true"
              className="absolute -left-[9px] top-6 h-4 w-4 rounded-full border-4 border-paper bg-brand dark:border-slate-950 dark:bg-brand-light"
            />
            <article className="card p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-bold">{job.role}</h3>
                <p className="text-accent text-sm font-semibold">{job.period}</p>
              </div>
              <p className="text-muted mt-1 text-sm">
                {job.company} · {job.location}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {job.points.map((p, i) => (
                  <li key={p} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${i === 0 ? "bg-brand dark:bg-brand-light" : "bg-slate-400 dark:bg-slate-600"}`}
                    />
                    <span className={i === 0 ? "font-medium text-slate-900 dark:text-slate-100" : ""}>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
