import { motion } from "framer-motion";
import { Briefcase, MapPin, CalendarDays } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { experience } from "../data/portfolio";

const Experience = () => {
  return (
    <section id="experience" className="section-pad">
      <SectionHeading
        eyebrow="Experience"
        title="My Professional Journey"
        subtitle="Roles across administration, IT support, billing, and finance — the foundation behind my systems-thinking approach to development."
      />

      <div className="relative mx-auto max-w-3xl">
        {/* vertical line */}
        <span className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-brand-primary via-brand-secondary to-transparent sm:left-1/2" />

        <div className="space-y-10">
          {experience.map((job, i) => (
            <motion.div
              key={job.role + i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative pl-12 sm:w-1/2 sm:pl-0 ${
                i % 2 === 0 ? "sm:pr-10 sm:text-right" : "sm:ml-auto sm:pl-10"
              }`}
            >
              {/* dot */}
              <span
                className={`absolute left-2.5 top-2 grid h-4 w-4 place-items-center rounded-full bg-brand-gradient ring-4 ring-white dark:ring-brand-dark sm:left-auto ${
                  i % 2 === 0 ? "sm:-right-2" : "sm:-left-2"
                }`}
              />

              <div className="card p-6">
                <span className="chip mb-2">
                  <CalendarDays size={13} /> {job.period}
                </span>
                <h3 className="text-lg font-bold text-brand-primary dark:text-brand-secondary">
                  {job.role}
                </h3>
                <p className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-slate-600 dark:text-slate-300 sm:justify-end">
                  <span className="inline-flex items-center gap-1">
                    <Briefcase size={14} /> {job.company}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={14} /> {job.location}
                  </span>
                </p>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                  {job.summary}
                </p>
                <ul
                  className={`mt-3 space-y-1.5 text-sm text-slate-600 dark:text-slate-300 ${
                    i % 2 === 0 ? "sm:list-none" : ""
                  }`}
                >
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-2 text-left sm:justify-start">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
