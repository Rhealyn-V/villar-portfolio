import { HashLink } from "react-router-hash-link";
import { Github, Linkedin, Facebook, Mail, ArrowUp, Heart } from "lucide-react";
import { profile, socials } from "../data/portfolio";

const footerLinks = [
  { label: "About", to: "/#about" },
  { label: "Experience", to: "/#experience" },
  { label: "Skills", to: "/#skills" },
  { label: "Projects", to: "/#projects" },
  { label: "Resume", to: "/#resume" },
  { label: "Contact", to: "/#contact" },
];

const Footer = () => {
  return (
    <footer className="border-t border-slate-200/70 bg-white/60 backdrop-blur-md dark:border-white/10 dark:bg-slate-900/60">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-gradient font-bold text-white">
                RV
              </span>
              <span className="text-lg font-bold">
                Rhealyn <span className="gradient-text">Villar</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-slate-500 dark:text-slate-400">
              {profile.title}
            </p>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              {profile.location}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {footerLinks.map((l) => (
                <li key={l.to}>
                  <HashLink
                    smooth
                    to={l.to}
                    className="text-slate-600 transition hover:text-brand-primary dark:text-slate-300 dark:hover:text-brand-secondary"
                  >
                    {l.label}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Connect
            </h3>
            <div className="flex gap-3">
              {[
                { icon: Github, href: socials.github },
                { icon: Linkedin, href: socials.linkedin },
                { icon: Facebook, href: socials.facebook },
                { icon: Mail, href: `mailto:${socials.email}` },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border border-slate-200/70 bg-white/70 text-brand-primary transition-all hover:scale-110 hover:bg-brand-primary hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-brand-secondary dark:hover:bg-brand-secondary dark:hover:text-slate-900"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <a href={`mailto:${socials.email}`} className="btn-primary mt-5 text-xs">
              <Mail size={14} /> Email Me
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200/70 pt-6 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400 sm:flex-row">
          <p className="flex items-center gap-1.5">
            © {new Date().getFullYear()} Rhealyn Villar.
          </p>
          <HashLink
            smooth
            to="/#home"
            className="inline-flex items-center gap-1.5 text-brand-primary hover:text-brand-secondary dark:text-brand-secondary"
          >
            Back to top <ArrowUp size={14} />
          </HashLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
