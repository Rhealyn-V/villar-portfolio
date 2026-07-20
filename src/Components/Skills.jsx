import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { skillGroups, skillTags, softSkills } from "../data/portfolio";

const Bar = ({ name, level }) => (
  <div>
    <div className="mb-1 flex items-center justify-between text-sm">
      <span className="font-medium">{name}</span>
      <span className="text-slate-400">{level}%</span>
    </div>
    <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full rounded-full bg-brand-gradient"
      />
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="section-pad">
      <SectionHeading
        eyebrow="Skills"
        title="Technical & Professional Skills"
        subtitle="A blend of development, database, office, and administration skills — proficiency levels are self-assessed."
      />

      {/* Progress bars */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="card p-6"
          >
            <h3 className="mb-4 text-base font-bold text-brand-primary dark:text-brand-secondary">
              {group.category}
            </h3>
            <div className="space-y-4">
              {group.skills.map((s) => (
                <Bar key={s.name} {...s} />
              ))}
            </div>
          </motion.div>
        ))}
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

      {/* Soft skills */}
      <div className="mt-12">
        <h3 className="mb-4 text-center text-lg font-bold">Soft Skills</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {softSkills.map((s) => (
            <span
              key={s}
              className="inline-flex items-center gap-2 rounded-full border border-brand-accent/40 bg-brand-accent/10 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200"
            >
              <BadgeCheck size={15} className="text-brand-accent" />
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
