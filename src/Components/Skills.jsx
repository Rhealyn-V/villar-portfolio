import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiPhp,
  SiMysql,
  SiPhpmyadmin,
  SiSupabase,
  SiGoogleappsscript,
  SiGit,
  SiGithub,
  SiVercel,
  SiGooglesheets,
  SiGoogledocs,
  SiGoogleforms,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";
import { BsFileEarmarkExcelFill, BsFileEarmarkWordFill, BsFileEarmarkPptFill } from "react-icons/bs";
import { Trophy, FileText, Boxes, Code2 } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { skillGroups, skillTags } from "../data/portfolio";

// Logo + brand colour for each skill. `mono` logos (black brand marks) switch
// to white in dark mode so they stay visible.
const logos = {
  html: { Icon: SiHtml5, color: "#E34F26" },
  css: { Icon: SiCss3, color: "#1572B6" },
  javascript: { Icon: SiJavascript, color: "#E5B800" },
  react: { Icon: SiReact, color: "#149ECA" },
  nextjs: { Icon: SiNextdotjs, mono: true },
  php: { Icon: SiPhp, color: "#777BB4" },
  api: { Icon: TbApi, color: "#BE185D" },
  mysql: { Icon: SiMysql, color: "#4479A1" },
  phpmyadmin: { Icon: SiPhpmyadmin, color: "#6C78AF" },
  supabase: { Icon: SiSupabase, color: "#3ECF8E" },
  appsscript: { Icon: SiGoogleappsscript, color: "#4285F4" },
  git: { Icon: SiGit, color: "#F05032" },
  github: { Icon: SiGithub, mono: true },
  vercel: { Icon: SiVercel, mono: true },
  vscode: { Icon: VscVscode, color: "#007ACC" },
  excel: { Icon: BsFileEarmarkExcelFill, color: "#217346" },
  sheets: { Icon: SiGooglesheets, color: "#34A853" },
  word: { Icon: BsFileEarmarkWordFill, color: "#2B579A" },
  docs: { Icon: SiGoogledocs, color: "#4285F4" },
  powerpoint: { Icon: BsFileEarmarkPptFill, color: "#D24726" },
  forms: { Icon: SiGoogleforms, color: "#7248B9" },
  trophy: { Icon: Trophy, color: "#D97706" },
  documents: { Icon: FileText, color: "#BE185D" },
  inventory: { Icon: Boxes, color: "#BE185D" },
};

const SkillTile = ({ name, icon }) => {
  const { Icon, color, mono } = logos[icon] || { Icon: Code2, color: "#BE185D" };
  return (
    <li className="group flex min-w-0 items-center gap-3 rounded-xl border border-slate-200/80 bg-white/80 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-primary/40 hover:shadow-md dark:border-white/10 dark:bg-slate-900/60 dark:hover:border-brand-secondary/40">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-slate-50 ring-1 ring-slate-200/70 transition-transform group-hover:scale-110 dark:bg-slate-800 dark:ring-white/10">
        <Icon
          size={22}
          aria-hidden="true"
          className={mono ? "text-slate-900 dark:text-white" : undefined}
          style={mono ? undefined : { color }}
        />
      </span>
      <span className="min-w-0 text-sm font-medium leading-tight text-slate-800 dark:text-slate-200">{name}</span>
    </li>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section-pad">
      <SectionHeading
        eyebrow="Skills"
        title="Technical & Professional Skills"
        subtitle="The languages, tools, and platforms I use to build systems and keep operations running."
      />

      {/* Logo tiles grouped by category */}
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, i) => {
          const fullWidth = skillGroups.length % 2 === 1 && i === skillGroups.length - 1;
          return (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className={`card p-6 ${fullWidth ? "md:col-span-2" : ""}`}
          >
            <h3 className="mb-4 border-b border-slate-100 pb-2 text-base font-bold text-brand-primary dark:border-white/10 dark:text-brand-secondary">
              {group.category}
            </h3>
            <ul className={`grid grid-cols-1 gap-3 sm:grid-cols-2 ${fullWidth ? "lg:grid-cols-3" : ""}`}>
              {group.skills.map((s) => (
                <SkillTile key={s.name} {...s} />
              ))}
            </ul>
          </motion.div>
          );
        })}
      </div>

      {/* Tag cloud */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {Object.entries(skillTags).map(([group, tags]) => (
          <div key={group} className="card p-6">
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {group}
            </h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
