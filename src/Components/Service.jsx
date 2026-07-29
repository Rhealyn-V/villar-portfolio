import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { services } from "../data/portfolio";

const Service = () => {
  return (
    <section id="services" className="section-pad">
      <SectionHeading
        eyebrow="Services"
        title="What I Can Do For You"
        subtitle="From building custom systems to keeping your books and IT running — here's how I help businesses work smarter."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = Icons[s.icon] || Icons.Sparkles;
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="card group p-6"
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-brand-gradient text-white shadow-glow transition-transform group-hover:scale-110">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {s.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
