import { Award, ExternalLink } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { certifications, education } from "../data/portfolio";
import { isRealUrl } from "../data/site";

const Certifications = () => (
  <section id="certifications" aria-labelledby="certifications-title" className="section bg-white dark:bg-slate-900">
    <div className="container-page">
      <SectionHeading id="certifications-title" eyebrow="Certifications & education" title="Credentials" />
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="text-muted mb-4 text-sm font-semibold uppercase tracking-wide">Certifications & awards</h3>
          <ul className="space-y-4">
            {certifications.map((c) => (
              <Reveal as="li" key={c.title} className="card flex items-start gap-4 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand dark:bg-brand-light/10 dark:text-brand-light">
                  <Award size={20} aria-hidden="true" />
                </span>
                <div className="flex-1">
                  <h4 className="font-semibold">{c.title}</h4>
                  <p className="text-muted text-sm">
                    {c.issuer} · {c.date}
                  </p>
                  {isRealUrl(c.credentialUrl) && (
                    <a href={c.credentialUrl} target="_blank" rel="noopener noreferrer" className="link mt-2 inline-flex items-center gap-1 text-sm">
                      View credential <ExternalLink size={13} aria-hidden="true" />
                      <span className="sr-only">for {c.title} (opens in a new tab)</span>
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-muted mb-4 text-sm font-semibold uppercase tracking-wide">Education</h3>
          <ol className="space-y-4">
            {education.map((e) => (
              <Reveal as="li" key={e.degree} className="card p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="font-semibold">{e.degree}</h4>
                  <span className="text-muted text-sm">{e.period}</span>
                </div>
                <p className="text-muted text-sm">{e.school}</p>
                {e.details && <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{e.details}</p>}
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </div>
  </section>
);

export default Certifications;
