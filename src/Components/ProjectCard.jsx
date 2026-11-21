import { Check, KeyRound } from "lucide-react";
import StatusBadge from "./ui/StatusBadge";
import StackIcons from "./ui/StackIcons";
import ProjectActions from "./ui/ProjectActions";
import { isRealUrl } from "../data/site";

export const ProjectCover = ({ project, className = "", eager = false }) => {
  if (project.cover) {
    return (
      <img
        src={project.cover.src}
        width={project.cover.width}
        height={project.cover.height}
        alt={project.cover.alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }
  // Branded placeholder until a real screenshot exists.
  return (
    <div
      className={`grid h-full w-full place-items-center bg-gradient-to-br from-brand-soft to-slate-100 dark:from-slate-800 dark:to-slate-900 ${className}`}
      aria-hidden="true"
    >
      {project.logo ? (
        <img src={project.logo.src} width={80} height={80} alt="" loading="lazy" className="h-20 w-20 rounded-2xl object-contain" />
      ) : (
        <span className="text-accent text-4xl font-extrabold tracking-tight">
          {project.title.split(" ").map((w) => w[0]).slice(0, 2).join("")}
        </span>
      )}
    </div>
  );
};

export const DemoCredentials = ({ project }) => {
  if (!isRealUrl(project.liveUrl)) return null;
  const creds = project.demoCredentials;
  return (
    <p className="text-muted flex items-start gap-2 text-xs">
      <KeyRound size={14} aria-hidden="true" className="mt-0.5 shrink-0" />
      {creds ? (
        <span>
          Demo login: <code className="font-mono text-slate-800 dark:text-slate-200">{creds.username}</code> /{" "}
          <code className="font-mono text-slate-800 dark:text-slate-200">{creds.password}</code>
        </span>
      ) : (
        <span>Demo login available on request — the demo uses sample data only.</span>
      )}
    </p>
  );
};

const ProjectCard = ({ project, featured = false, headingLevel = "h3" }) => {
  const H = headingLevel;
  return (
    <article
      className={`card card-hover flex h-full flex-col overflow-hidden ${featured ? "lg:grid lg:grid-cols-[1.2fr_1fr]" : ""}`}
    >
      <div className={`relative overflow-hidden bg-slate-100 dark:bg-slate-800 ${featured ? "aspect-[2/1] lg:aspect-auto" : "aspect-[2/1]"}`}>
        <ProjectCover project={project} />
      </div>

      <div className={`flex flex-1 flex-col ${featured ? "p-6 sm:p-8" : "p-6"}`}>
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge status={project.status} />
          <span className="text-muted text-xs font-medium">{project.category}</span>
          {featured && <span className="chip-accent">Featured</span>}
        </div>

        <H className={`mt-3 font-bold leading-snug ${featured ? "text-2xl sm:text-3xl" : "text-xl"}`}>{project.title}</H>
        <p className="mt-2 text-base text-slate-700 dark:text-slate-300">{project.outcome}</p>

        <ul className="mt-4 grid gap-2 text-sm text-slate-700 dark:text-slate-300">
          {project.keyFeatures.slice(0, 4).map((f) => (
            <li key={f} className="flex gap-2">
              <Check size={16} aria-hidden="true" className="text-accent mt-0.5 shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-auto space-y-4 pt-6">
          <StackIcons stack={project.stack} />
          <ProjectActions project={project} size={featured ? "" : "sm"} />
          <DemoCredentials project={project} />
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
