import { motion } from "framer-motion";
import { ExternalLink, Github, Layers, ArrowUpRight } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { projects } from "../data/portfolio";

const accentMap = {
  primary: "from-brand-primary to-brand-secondary",
  secondary: "from-brand-secondary to-brand-primary",
  accent: "from-brand-accent to-brand-primary",
};

const ProjectCard = ({ p, i }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5, delay: i * 0.06 }}
    className="card flex flex-col overflow-hidden"
  >
    {/* Header / cover */}
    <div
      className={`relative flex h-36 items-center justify-center bg-gradient-to-br ${
        accentMap[p.accent] || accentMap.primary
      }`}
    >
      {p.image ? (
        <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
      ) : (
        <Layers className="text-white/90" size={44} />
      )}
      <span className="absolute right-3 top-3 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
        {p.category}
      </span>
    </div>

    <div className="flex flex-1 flex-col p-6">
      <h3 className="text-lg font-bold">{p.title}</h3>
      <p className="mt-1 text-sm font-medium text-brand-primary dark:text-brand-secondary">
        {p.tagline}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {p.description}
      </p>

      {/* Features */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {p.features.slice(0, 8).map((f) => (
          <span
            key={f}
            className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
          >
            {f}
          </span>
        ))}
        {p.features.length > 8 && (
          <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400">
            +{p.features.length - 8} more
          </span>
        )}
      </div>

      {/* Stack + links */}
      <div className="mt-auto pt-5">
        <div className="mb-4 flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a
            href={p.liveUrl || "#"}
            target={p.liveUrl ? "_blank" : undefined}
            rel="noreferrer"
            className={`btn-primary flex-1 !py-2 text-xs ${
              p.liveUrl ? "" : "pointer-events-none opacity-50"
            }`}
          >
            <ExternalLink size={14} /> {p.liveUrl ? "Live Demo" : "Demo soon"}
          </a>
          <a
            href={p.repoUrl || "#"}
            target={p.repoUrl ? "_blank" : undefined}
            rel="noreferrer"
            className={`btn-outline !py-2 text-xs ${
              p.repoUrl ? "" : "pointer-events-none opacity-50"
            }`}
          >
            <Github size={14} /> Code
          </a>
        </div>
      </div>
    </div>
  </motion.article>
);

const Projects = () => {
  return (
    <section id="projects" className="section-pad">
      <SectionHeading
        eyebrow="Projects"
        title="Featured Projects"
        subtitle="Real-world business systems I've designed and built — from fleet management to payroll automation."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="https://github.com/rhealyn-v"
          target="_blank"
          rel="noreferrer"
          className="btn-outline"
        >
          <Github size={16} /> See more on GitHub <ArrowUpRight size={14} />
        </a>
      </div>
    </section>
  );
};

export default Projects;
