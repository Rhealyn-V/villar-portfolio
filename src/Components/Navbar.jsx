import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import DarkModeToggle from "./DarkModeToggle";
import { profile } from "../data/portfolio";

const links = [
  { label: "Home", to: "/#home" },
  { label: "About", to: "/#about" },
  { label: "Experience", to: "/#experience" },
  { label: "Skills", to: "/#skills" },
  { label: "Projects", to: "/#projects" },
  { label: "Certificates", to: "/#certificates" },
  { label: "Resume", to: "/#resume" },
  { label: "Contact", to: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass =
    "rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-brand-primary/10 hover:text-brand-primary dark:text-slate-200 dark:hover:bg-brand-secondary/10 dark:hover:text-brand-secondary";

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/30 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-brand-dark/70"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        {/* Brand */}
        <HashLink smooth to="/#home" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-gradient font-bold text-white shadow-glow">
            RV
          </span>
          <span className="hidden text-lg font-bold tracking-tight sm:block">
            Rhealyn <span className="gradient-text">Villar</span>
          </span>
        </HashLink>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <HashLink key={l.to} smooth to={l.to} className={linkClass}>
              {l.label}
            </HashLink>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <HashLink smooth to="/#contact" className="btn-primary hidden md:inline-flex">
            Hire Me
          </HashLink>
          <a
            href={profile.resumeFile}
            className="btn-outline hidden xl:inline-flex"
            download
          >
            <Download size={16} /> Resume
          </a>
          <DarkModeToggle />
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200/70 bg-white/70 text-brand-primary dark:border-white/10 dark:bg-white/5 dark:text-brand-secondary lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden">
          <div className="mx-4 mb-4 flex flex-col gap-1 rounded-2xl border border-white/30 bg-white/90 p-4 shadow-card backdrop-blur-xl dark:border-white/10 dark:bg-brand-dark/95">
            {links.map((l) => (
              <HashLink
                key={l.to}
                smooth
                to={l.to}
                onClick={() => setOpen(false)}
                className={linkClass}
              >
                {l.label}
              </HashLink>
            ))}
            <HashLink
              smooth
              to="/#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              Hire Me
            </HashLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
