import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { skillTiers, softSkills } from "../data/portfolio";

const Skills = () => (
  <section id="skills" aria-labelledby="skills-title" className="section bg-white dark:bg-slate-900">
    <div className="container-page">
      <SectionHeading
        id="skills-title"
        eyebrow="Skills"
        title="What I work with"
        subtitle="Grouped by how often I actually use each one."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {skillTiers.map((t, i) => (
          <Reveal key={t.tier} delay={i * 60} className="card p-6">
            <h3 className="text-lg font-bold">{t.tier}</h3>
            <p className="text-muted mt-1 text-sm">{t.note}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {t.skills.map((s) => (
                <li key={s.name} className={i === 0 ? "chip-accent" : "chip"}>
                  {s.name}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8">
        <h3 className="text-muted text-sm font-semibold uppercase tracking-wide">Working style</h3>
        <ul className="mt-3 flex flex-wrap gap-2">
          {softSkills.map((s) => (
            <li key={s} className="chip">
              {s}
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  </section>
);

export default Skills;
