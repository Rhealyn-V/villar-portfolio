import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Github, Hammer } from "lucide-react";
import { isRealUrl } from "../../data/site";

// Only renders buttons that go somewhere real. No "#" links, ever.
const ProjectActions = ({ project, showCaseStudy = true, size = "" }) => {
  const { slug, title, caseStudy, liveUrl, repoUrl, status } = project;
  const hasLive = isRealUrl(liveUrl);
  const hasRepo = isRealUrl(repoUrl);
  const sm = size === "sm" ? "btn-sm" : "";

  return (
    <div className="flex flex-wrap gap-2">
      {showCaseStudy && caseStudy && (
        <Link to={`/projects/${slug}`} className={`btn-primary ${sm}`}>
          Read case study <ArrowRight size={15} aria-hidden="true" />
          <span className="sr-only">: {title}</span>
        </Link>
      )}
      {hasLive && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${showCaseStudy && caseStudy ? "btn-secondary" : "btn-primary"} ${sm}`}
        >
          <ExternalLink size={15} aria-hidden="true" /> Live demo
          <span className="sr-only">of {title} (opens in a new tab)</span>
        </a>
      )}
      {!hasLive && status !== "Completed" && (
        <span className={`btn-disabled ${sm}`} aria-disabled="true">
          <Hammer size={15} aria-hidden="true" /> In development
        </span>
      )}
      {hasRepo && (
        <a href={repoUrl} target="_blank" rel="noopener noreferrer" className={`btn-secondary ${sm}`}>
          <Github size={15} aria-hidden="true" /> Code
          <span className="sr-only">for {title} (opens in a new tab)</span>
        </a>
      )}
    </div>
  );
};

export default ProjectActions;
