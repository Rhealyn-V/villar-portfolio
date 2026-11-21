import { GraduationCap, MapPin, Briefcase } from "lucide-react";
import Reveal from "./ui/Reveal";
import Counter from "./ui/Counter";
import { profile, stats } from "../data/portfolio";
import { contact } from "../data/site";

const About = () => (
  <section id="about" aria-labelledby="about-title" className="border-y border-slate-200 bg-white py-14 dark:border-slate-800 dark:bg-slate-900 md:py-16">
    <div className="container-page grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
      <Reveal>
        <p className="eyebrow mb-3">About</p>
        <h2 id="about-title" className="text-2xl font-bold tracking-tight sm:text-3xl">
          From operations to code
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-700 dark:text-slate-300">{profile.about}</p>
        <ul className="mt-6 grid gap-4 text-sm sm:grid-cols-3">
          {[
            { icon: GraduationCap, label: "Education", value: profile.degree },
            { icon: MapPin, label: "Based in", value: contact.location },
            { icon: Briefcase, label: "Focus", value: "Business systems & automation" },
          ].map(({ icon: Icon, label, value }) => (
            <li key={label} className="flex gap-3">
              <Icon size={18} aria-hidden="true" className="text-accent mt-0.5 shrink-0" />
              <div>
                <p className="text-muted text-xs font-medium uppercase tracking-wide">{label}</p>
                <p className="mt-0.5 font-medium text-slate-900 dark:text-slate-100">{value}</p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal as="dl" delay={80} className="grid grid-cols-2 gap-3 sm:gap-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col-reverse rounded-card border border-slate-200 bg-paper p-5 dark:border-slate-800 dark:bg-slate-950">
            <dt className="text-muted mt-1 text-sm">{s.label}</dt>
            <dd className="text-accent text-3xl font-extrabold sm:text-4xl">
              <Counter value={s.value} suffix={s.suffix} />
            </dd>
          </div>
        ))}
      </Reveal>
    </div>
  </section>
);

export default About;
