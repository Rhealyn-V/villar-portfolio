import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Layers,
  ArrowUpRight,
  Truck,
  Factory,
  Boxes,
  ShoppingCart,
  FileSpreadsheet,
  CheckCircle2,
  Clock,
  Loader2,
  Trophy,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { projects } from "../data/portfolio";

const accentMap = {
  primary: "from-brand-primary to-brand-secondary",
  secondary: "from-brand-secondary to-brand-primary",
  accent: "from-brand-accent to-brand-primary",
};

const logoIconMap = {
  Truck: Truck,
  Factory: Factory,
  Boxes: Boxes,
  ShoppingCart: ShoppingCart,
  FileSpreadsheet: FileSpreadsheet,
  Trophy: Trophy,
};

const getStatusBadge = (status) => {
  switch (status) {
    case "Completed":
      return {
        label: "Completed",
        icon: CheckCircle2,
        className:
          "bg-slate-900/95 text-emerald-400 border-emerald-500/50 shadow-xl",
      };
    case "In Progress":
      return {
        label: "In Progress",
        icon: Clock,
        className:
          "bg-slate-900/95 text-amber-400 border-amber-500/50 shadow-xl",
      };
    case "Processing":
      return {
        label: "Processing",
        icon: Loader2,
        className:
          "bg-slate-900/95 text-sky-400 border-sky-500/50 shadow-xl",
      };
    default:
      return {
        label: status || "In Progress",
        icon: Clock,
        className:
          "bg-slate-900/95 text-slate-300 border-slate-700 shadow-xl",
      };
  }
};

const RenderLogo = ({ logo, size = 20, className = "" }) => {
  if (typeof logo === "string" && (logo.startsWith("/") || logo.startsWith("http"))) {
    return (
      <img
        src={logo}
        alt="Project Logo"
        className={`object-contain rounded-md ${className}`}
        style={{ width: size, height: size }}
      />
    );
  }
  const Icon = logoIconMap[logo] || Layers;
  return <Icon size={size} className={className} />;
};

const ProjectCard = ({ p, i }) => {
  const statusBadge = getStatusBadge(p.status);
  const StatusIcon = statusBadge.icon;
  const cardCoverImage = p.loginImage || p.image;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: i * 0.06 }}
      className="card flex flex-col overflow-hidden"
    >
      {/* Header / cover */}
      <div
        className={`relative flex h-60 items-center justify-center overflow-hidden bg-gradient-to-br ${
          accentMap[p.accent] || accentMap.primary
        }`}
      >
        {cardCoverImage ? (
          <img
            src={cardCoverImage}
            alt={`${p.title} Preview`}
            className="h-full w-full object-cover transition-all duration-500 hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-white/90">
            <RenderLogo logo={p.logo} size={52} className="drop-shadow-md" />
          </div>
        )}

        {/* Top Left Badges */}
        <div className="absolute left-3 top-3 flex items-center gap-2">
          {/* Logo Badge */}
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900/95 text-white backdrop-blur-md shadow-xl border border-white/20 p-1.5">
            <RenderLogo logo={p.logo} size={22} />
          </span>
          {/* Category */}
          <span className="rounded-full bg-slate-900/95 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md border border-white/20 shadow-xl">
            {p.category}
          </span>
        </div>

        {/* Top Right Status Badge (Solid high-contrast background) */}
        <div className="absolute right-3 top-3">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold shadow-xl backdrop-blur-xl ${statusBadge.className}`}
          >
            <StatusIcon size={14} className={p.status === "Processing" ? "animate-spin" : ""} />
            {statusBadge.label}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white p-1.5 shadow-sm dark:border-white/10 dark:bg-slate-800">
            <RenderLogo logo={p.logo} size={24} />
          </div>
          <div>
            <h3 className="text-lg font-bold leading-snug">
              {p.title}
            </h3>
            <p className="text-xs font-medium text-brand-primary dark:text-brand-secondary">
              {p.tagline}
            </p>
          </div>
        </div>

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
};

const Projects = () => {
  return (
    <section id="projects" className="section-pad">
      <SectionHeading
        eyebrow="Projects"
        title="Featured Projects"
        subtitle="Real-world business systems I've designed and built — featuring official project logos, status tracking, and login page previews."
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
