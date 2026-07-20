import { motion } from "framer-motion";
import { Target, Lightbulb, GraduationCap, MapPin, Mail, Briefcase } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Counter from "./ui/Counter";
import { profile, stats, education } from "../data/portfolio";

const highlights = [
  {
    icon: Lightbulb,
    title: "What I Do",
    text: "Build web apps, automate business processes, and support IT & bookkeeping operations.",
  },
  {
    icon: Target,
    title: "My Goal",
    text: "Help businesses improve efficiency through technology while growing as a developer.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    text: education[0].degree,
  },
];

const About = () => {
  return (
    <section id="about" className="section-pad">
      <SectionHeading
        eyebrow="About Me"
        title="Turning business problems into digital solutions"
        subtitle="A little more about who I am and what drives me."
      />

      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card p-7"
        >
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-200">
            {profile.objective}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Info icon={MapPin} label="Location" value={profile.location} />
            <Info icon={Mail} label="Email" value={profile.email} />
            <Info icon={Briefcase} label="Focus" value="Web Dev • IT • Bookkeeping" />
            <Info icon={GraduationCap} label="Degree" value="BS Information Technology" />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="rounded-2xl border border-slate-200/70 bg-brand-primary/5 p-4 dark:border-white/10 dark:bg-brand-secondary/10"
              >
                <h.icon className="mb-2 text-brand-primary dark:text-brand-secondary" size={22} />
                <p className="text-sm font-semibold">{h.title}</p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{h.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Animated stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="card flex flex-col justify-center p-6 text-center">
              <p className="text-4xl font-extrabold text-brand-primary dark:text-brand-secondary">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Info = ({ icon: Icon, label, value }) => (
  <div className="flex items-start gap-3">
    <Icon className="mt-0.5 shrink-0 text-brand-primary dark:text-brand-secondary" size={18} />
    <div>
      <p className="text-xs uppercase tracking-wide text-slate-400">{label}</p>
      <p className="text-sm font-medium">{value}</p>
    </div>
  </div>
);

export default About;
