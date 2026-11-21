import { Code2, Database, Workflow, Wrench, ClipboardList } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { services } from "../data/portfolio";

const icons = { code: Code2, database: Database, workflow: Workflow, wrench: Wrench, clipboard: ClipboardList };
// 2 wide cards, then 3 — avoids an orphan card on large screens.
const spans = ["lg:col-span-3", "lg:col-span-3", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2"];

const Services = () => (
  <section id="services" aria-labelledby="services-title" className="section bg-white dark:bg-slate-900">
    <div className="container-page">
      <SectionHeading
        id="services-title"
        eyebrow="Services"
        title="How I can help"
        subtitle="From custom systems to records and reporting and day-to-day IT, here's where I add value."
      />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
        {services.map((s, i) => {
          const Icon = icons[s.icon] || Code2;
          return (
            <Reveal as="li" key={s.title} delay={i * 50} className={`card p-6 ${spans[i] || "lg:col-span-2"} ${i === services.length - 1 ? "sm:col-span-2 lg:col-span-2" : ""}`}>
              <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand dark:bg-brand-light/10 dark:text-brand-light">
                <Icon size={22} aria-hidden="true" />
              </span>
              <h3 className="text-lg font-bold">{s.title}</h3>
              <p className="text-muted mt-2 text-sm leading-relaxed">{s.desc}</p>
            </Reveal>
          );
        })}
      </ul>
    </div>
  </section>
);

export default Services;
