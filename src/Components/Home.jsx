import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import {
  Download,
  FolderGit2,
  Mail,
  Sparkles,
  Github,
  Linkedin,
  Facebook,
  Phone,
  MapPin,
} from "lucide-react";
import Typewriter from "./ui/Typewriter";
import { profile, socials, stats } from "../data/portfolio";
import Counter from "./ui/Counter";

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-brand-radial pt-28"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-brand-secondary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-brand-accent/20 blur-3xl" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-2">
        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="chip mb-5">
            <Sparkles size={14} /> {profile.availability}
          </span>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Hi, I'm <span className="gradient-text">Rhealyn Villar</span>
          </h1>

          <p className="mt-4 text-xl font-semibold sm:text-2xl">
            I'm a <Typewriter words={profile.roles} />
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {profile.summary}
          </p>

          <p className="mt-4 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <MapPin size={16} className="text-brand-primary dark:text-brand-secondary" />
            {profile.location}
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={profile.resumeFile} download className="btn-primary">
              <Download size={16} /> Download Resume
            </a>
            <HashLink smooth to="/#projects" className="btn-outline">
              <FolderGit2 size={16} /> View Projects
            </HashLink>
            <HashLink smooth to="/#contact" className="btn-accent">
              <Sparkles size={16} /> Hire Me
            </HashLink>
            <a href={`mailto:${profile.email}`} className="btn-outline">
              <Mail size={16} /> Contact Me
            </a>
          </div>

          {/* Socials */}
          <div className="mt-8 flex items-center gap-3">
            {[
              { icon: Github, href: socials.github, label: "GitHub" },
              { icon: Linkedin, href: socials.linkedin, label: "LinkedIn" },
              { icon: Facebook, href: socials.facebook, label: "Facebook" },
              { icon: Mail, href: `mailto:${socials.email}`, label: "Email" },
              { icon: Phone, href: `tel:${socials.phone}`, label: "Phone" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-slate-200/70 bg-white/70 text-brand-primary transition-all hover:scale-110 hover:bg-brand-primary hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-brand-secondary dark:hover:bg-brand-secondary dark:hover:text-slate-900"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right: photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mx-auto flex justify-center"
        >
          <div className="relative animate-floaty">
            <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-brand-gradient opacity-30 blur-2xl" />
            <div className="overflow-hidden rounded-[2.5rem] border-4 border-white/70 shadow-glow dark:border-white/10">
              <img
                src={profile.photo}
                alt="Rhealyn Villar"
                className="h-80 w-72 object-cover sm:h-96 sm:w-80"
              />
            </div>
            {/* Floating stat badges */}
            <div className="glass absolute -bottom-6 -left-6 rounded-2xl px-4 py-3 text-center">
              <p className="text-2xl font-extrabold text-brand-primary dark:text-brand-secondary">
                <Counter value={stats[0].value} suffix={stats[0].suffix} />
              </p>
              <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                Years Experience
              </p>
            </div>
            <div className="glass absolute -right-6 top-8 rounded-2xl px-4 py-3 text-center">
              <p className="text-2xl font-extrabold text-brand-primary dark:text-brand-secondary">
                <Counter value={stats[1].value} suffix={stats[1].suffix} />
              </p>
              <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                Projects Built
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
