import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Download, FileText, Eye } from "lucide-react";
import { profile } from "../data/portfolio";

const ResumeSection = () => {
  return (
    <section id="resume" className="section-pad">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl bg-brand-gradient p-10 text-center text-white shadow-glow sm:p-14"
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10" />

        <div className="relative">
          <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-white/20 backdrop-blur">
            <FileText size={30} />
          </div>
          <h2 className="text-3xl font-bold sm:text-4xl">My Resume</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/90">
            An ATS-friendly, recruiter-ready summary of my experience, projects, and skills.
            View it online or download a copy.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/resume"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-primary transition-all hover:scale-105"
            >
              <Eye size={16} /> View Resume
            </Link>
            <a
              href={profile.resumeFile}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/15"
            >
              <Download size={16} /> Download PDF
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ResumeSection;
