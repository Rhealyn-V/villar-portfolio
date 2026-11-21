import { Link } from "react-router-dom";
import { Download, Eye, FileType2 } from "lucide-react";
import Reveal from "./ui/Reveal";
import { profile } from "../data/portfolio";
import { positioning, isRealUrl } from "../data/site";

// Dark pink band: white text on #9D174D→#BE185D stays above 6:1 (WCAG AA).
const ResumeSection = () => (
  <section id="resume" aria-labelledby="resume-title" className="section">
    <div className="container-page">
      <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-hover to-brand px-6 py-12 text-center text-white sm:px-12 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-pink-100">Resume</p>
        <h2 id="resume-title" className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          {positioning.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-pink-50">{positioning.supportingLine}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/resume" className="btn bg-white text-brand hover:bg-pink-50">
            <Eye size={16} aria-hidden="true" /> View resume
          </Link>
          <a href={profile.resumeFile} download className="btn border border-white/70 text-white hover:bg-white/10">
            <Download size={16} aria-hidden="true" /> Download PDF
          </a>
          {isRealUrl(profile.resumeFileDocx) && (
            <a href={profile.resumeFileDocx} download className="btn border border-white/70 text-white hover:bg-white/10">
              <FileType2 size={16} aria-hidden="true" /> Download Word
            </a>
          )}
        </div>
      </Reveal>
    </div>
  </section>
);

export default ResumeSection;
