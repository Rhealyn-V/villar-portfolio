import { ArrowUpRight, Github } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/portfolio";
import { socials, isRealUrl } from "../data/site";

const FeaturedWork = () => {
  const featured = projects.find((p) => p.featured) || projects[0];
  const rest = projects.filter((p) => p !== featured);
  const github = socials.find((s) => s.id === "github");

  return (
    <section id="work" aria-labelledby="work-title" className="section">
      <div className="container-page">
        <SectionHeading
          id="work-title"
          eyebrow="Featured work"
          title="Systems that replace manual work"
          subtitle="Business systems I've designed and built, from transport operations to inventory and automation."
        />

        <Reveal>
          <ProjectCard project={featured} featured />
        </Reveal>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 80} className="h-full">
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>

        {github && isRealUrl(github.url) && (
          <div className="mt-10 text-center">
            <a href={github.url} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Github size={16} aria-hidden="true" /> More on GitHub <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedWork;
