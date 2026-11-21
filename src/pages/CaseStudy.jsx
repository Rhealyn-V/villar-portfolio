import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, ImageOff, ZoomIn } from "lucide-react";
import { getProject, projects } from "../data/portfolio";
import StatusBadge from "../Components/ui/StatusBadge";
import StackIcons from "../Components/ui/StackIcons";
import ProjectActions from "../Components/ui/ProjectActions";
import Lightbox from "../Components/ui/Lightbox";
import Reveal from "../Components/ui/Reveal";
import { DemoCredentials } from "../Components/ProjectCard";
import usePageMeta from "../hooks/usePageMeta";
import NotFound from "./NotFound";

// Problem → My role → What I built → Tech & architecture → Screenshots → Results → What I'd do next
const Block = ({ id, n, title, children }) => (
  <Reveal as="section" aria-labelledby={id} className="grid gap-4 border-t border-slate-200 py-10 dark:border-slate-800 md:grid-cols-[14rem_1fr] md:gap-10">
    <h2 id={id} className="text-xl font-bold">
      <span className="text-accent mr-2 font-mono text-sm">{String(n).padStart(2, "0")}</span>
      {title}
    </h2>
    <div className="text-base leading-relaxed text-slate-700 dark:text-slate-300">{children}</div>
  </Reveal>
);

const Bullets = ({ items }) => (
  <ul className="space-y-2">
    {items.map((t) => (
      <li key={t} className="flex gap-3">
        <Check size={18} aria-hidden="true" className="text-accent mt-1 shrink-0" />
        <span>{t}</span>
      </li>
    ))}
  </ul>
);

const CaseStudy = () => {
  const { slug } = useParams();
  const project = getProject(slug);
  const [index, setIndex] = useState(null);

  usePageMeta({
    title: project ? `${project.title} — Case study` : "Case study not found",
    description: project?.outcome,
    path: `/projects/${slug}`,
  });

  if (!project || !project.caseStudy) return <NotFound />;
  const cs = project.caseStudy;
  const realShots = cs.screenshots.filter((s) => s.src);
  const others = projects.filter((p) => p.caseStudy && p.slug !== slug);

  return (
    <article className="pb-20 pt-28 sm:pt-32">
      <div className="container-page">
        <Link to="/#work" className="link inline-flex items-center gap-1.5 text-sm">
          <ArrowLeft size={15} aria-hidden="true" /> All work
        </Link>

        <header className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <StatusBadge status={project.status} />
              <span className="text-muted text-sm">{project.category}</span>
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">{project.title}</h1>
            <p className="mt-4 text-lg text-slate-700 dark:text-slate-300 sm:text-xl">{project.outcome}</p>
          </div>
          <div className="space-y-4 lg:justify-self-end">
            <StackIcons stack={project.stack} />
            <ProjectActions project={project} showCaseStudy={false} />
            <DemoCredentials project={project} />
          </div>
        </header>

        {project.cover && (
          <div className="card mt-10 overflow-hidden">
            <img
              src={project.cover.src}
              width={project.cover.width}
              height={project.cover.height}
              alt={project.cover.alt}
              className="h-auto w-full"
              fetchPriority="high"
            />
          </div>
        )}

        <div className="mt-12">
          <Block id="cs-problem" n={1} title="Problem">
            <div className="space-y-4">
              {cs.problem.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Block>

          <Block id="cs-role" n={2} title="My role">
            <div className="space-y-4">
              {cs.role.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Block>

          <Block id="cs-built" n={3} title="What I built">
            <ul className="grid gap-4 sm:grid-cols-2">
              {cs.modules.map((m) => (
                <li key={m.name} className="rounded-card border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                  <h3 className="font-semibold">{m.name}</h3>
                  <p className="text-muted mt-1 text-sm">{m.items.join(" · ")}</p>
                </li>
              ))}
            </ul>
          </Block>

          <Block id="cs-tech" n={4} title="Tech & architecture">
            <Bullets items={cs.architecture} />
          </Block>

          <Block id="cs-shots" n={5} title="Screenshots">
            <ul className="grid gap-4 sm:grid-cols-2">
              {cs.screenshots.map((s) =>
                s.src ? (
                  <li key={s.caption}>
                    <button
                      type="button"
                      onClick={() => setIndex(realShots.indexOf(s))}
                      className="group block w-full overflow-hidden rounded-card border border-slate-200 bg-white text-left dark:border-slate-800 dark:bg-slate-900"
                      aria-label={`Enlarge screenshot: ${s.caption}`}
                    >
                      <span className="relative block aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
                        <img
                          src={s.src}
                          width={s.width}
                          height={s.height}
                          alt=""
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transform-none"
                        />
                        <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-slate-950/70 text-white">
                          <ZoomIn size={16} aria-hidden="true" />
                        </span>
                      </span>
                      <span className="text-muted block px-4 py-3 text-sm">{s.caption}</span>
                    </button>
                  </li>
                ) : (
                  <li
                    key={s.caption}
                    className="flex aspect-video flex-col items-center justify-center gap-2 rounded-card border-2 border-dashed border-slate-300 bg-slate-50 p-4 text-center dark:border-slate-700 dark:bg-slate-900"
                  >
                    <ImageOff size={22} aria-hidden="true" className="text-slate-500" />
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{s.caption}</p>
                    <p className="text-muted text-xs">Screenshot coming soon</p>
                  </li>
                )
              )}
            </ul>
          </Block>

          <Block id="cs-results" n={6} title="Results">
            <Bullets items={cs.results} />
          </Block>

          <Block id="cs-next" n={7} title="What I'd do next">
            <Bullets items={cs.next} />
          </Block>
        </div>

        {others.length > 0 && (
          <nav aria-label="More case studies" className="mt-6 border-t border-slate-200 pt-10 dark:border-slate-800">
            <p className="eyebrow">Next case study</p>
            {others.map((p) => (
              <Link key={p.slug} to={`/projects/${p.slug}`} className="group mt-3 flex items-center justify-between gap-4 rounded-card border border-slate-200 bg-white p-5 hover:border-brand dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-light">
                <span>
                  <span className="block text-lg font-bold text-slate-900 dark:text-white">{p.title}</span>
                  <span className="text-muted text-sm">{p.outcome}</span>
                </span>
                <ArrowRight size={20} aria-hidden="true" className="text-accent shrink-0" />
              </Link>
            ))}
          </nav>
        )}
      </div>

      <Lightbox
        images={realShots.map((s) => ({ ...s, alt: s.caption }))}
        index={index}
        title={project.title}
        onClose={() => setIndex(null)}
        onIndexChange={setIndex}
      />
    </article>
  );
};

export default CaseStudy;
