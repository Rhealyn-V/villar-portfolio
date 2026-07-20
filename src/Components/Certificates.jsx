import { motion } from "framer-motion";
import { Award, ExternalLink, Trophy } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { certifications, achievements } from "../data/portfolio";

const Certificates = () => {
  return (
    <section id="certificates" className="section-pad">
      <SectionHeading
        eyebrow="Certificates & Achievements"
        title="Credentials & Milestones"
        subtitle="Certifications and highlights. This section is easy to update — add new entries in src/data/portfolio.js."
      />

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Certifications */}
        <div>
          <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <Award className="text-brand-primary dark:text-brand-secondary" size={20} />
            Certifications
          </h3>
          <div className="space-y-4">
            {certifications.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="card flex items-start gap-4 p-5"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-gradient text-white">
                  <Award size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{c.title}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {c.issuer} · {c.date}
                  </p>
                </div>
                {c.credentialUrl && (
                  <a
                    href={c.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-brand-primary hover:text-brand-secondary dark:text-brand-secondary"
                    aria-label="View credential"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <Trophy className="text-brand-accent" size={20} />
            Key Achievements
          </h3>
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card space-y-4 p-6"
          >
            {achievements.map((a) => (
              <li key={a} className="flex gap-3 text-sm text-slate-600 dark:text-slate-300">
                <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-accent/20">
                  <Trophy size={12} className="text-brand-accent" />
                </span>
                <span>{a}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
