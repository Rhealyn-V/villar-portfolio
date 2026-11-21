import { useEffect, useRef, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";
import { site } from "../data/site";

const links = [
  { label: "Work", to: "/#work" },
  { label: "Services", to: "/#services" },
  { label: "Experience", to: "/#experience" },
  { label: "Skills", to: "/#skills" },
  { label: "Leadership", to: "/#leadership" },
  { label: "Resume", to: "/#resume" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <nav
        aria-label="Main"
        className={`mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl border px-3 py-2 backdrop-blur-md transition-shadow sm:px-4 ${
          scrolled
            ? "border-slate-200 bg-white/90 shadow-card dark:border-slate-800 dark:bg-slate-900/90"
            : "border-transparent bg-white/70 dark:bg-slate-900/70"
        }`}
      >
        <HashLink smooth to="/#home" className="flex shrink-0 items-center gap-2.5 rounded-xl" onClick={close}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-sm font-bold text-white dark:bg-brand-light dark:text-slate-950">
            {site.initials}
          </span>
          <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white">{site.name}</span>
        </HashLink>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.to}>
              <HashLink
                smooth
                to={l.to}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:text-brand dark:text-slate-300 dark:hover:text-brand-light"
              >
                {l.label}
              </HashLink>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <HashLink smooth to="/#contact" className="btn-primary btn-sm hidden sm:inline-flex">
            Contact me
          </HashLink>
          <DarkModeToggle />
          <button
            ref={toggleRef}
            type="button"
            className="icon-btn lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="card mx-auto mt-2 max-w-6xl p-3 lg:hidden"
        >
          <ul className="grid gap-1 sm:grid-cols-2">
            {links.map((l) => (
              <li key={l.to}>
                <HashLink
                  smooth
                  to={l.to}
                  onClick={close}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-slate-800 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800"
                >
                  {l.label}
                </HashLink>
              </li>
            ))}
          </ul>
          <HashLink smooth to="/#contact" onClick={close} className="btn-primary mt-2 w-full sm:hidden">
            Contact me
          </HashLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
