import { useEffect, useState, useRef } from "react";
import { Menu, X, Search, Briefcase, Award, Trophy, Code2, ArrowRight } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import DarkModeToggle from "./DarkModeToggle";
import { projects, skillGroups, experience, certifications } from "../data/portfolio";

const primaryLinks = [
  { label: "Home", to: "/#home" },
  { label: "About", to: "/#about" },
  { label: "Experience", to: "/#experience" },
  { label: "Skills", to: "/#skills" },
  { label: "Projects", to: "/#projects" },
  { label: "Certificates", to: "/#certificates" },
  { label: "Resume", to: "/#resume" },
  { label: "Contact", to: "/#contact" },
];

// Essential desktop links to keep the header clean & un-crowded
const desktopLinks = [
  { label: "Home", to: "/#home" },
  { label: "About", to: "/#about" },
  { label: "Projects", to: "/#projects" },
  { label: "Certificates", to: "/#certificates" },
  { label: "Resume", to: "/#resume" },
  { label: "Contact", to: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Collect searchable items
  const getSearchResults = () => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    const results = [];

    // Search Projects
    projects.forEach((p) => {
      if (
        p.title.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.stack.some((s) => s.toLowerCase().includes(q)) ||
        p.features.some((f) => f.toLowerCase().includes(q))
      ) {
        results.push({
          type: "Project",
          icon: Code2,
          title: p.title,
          subtitle: p.tagline,
          link: "/#projects",
        });
      }
    });

    // Search Skills
    skillGroups.forEach((group) => {
      group.skills.forEach((s) => {
        if (s.name.toLowerCase().includes(q) || group.category.toLowerCase().includes(q)) {
          results.push({
            type: "Skill",
            icon: Briefcase,
            title: s.name,
            subtitle: group.category,
            link: "/#skills",
          });
        }
      });
    });

    // Search Experience
    experience.forEach((job) => {
      if (
        job.role.toLowerCase().includes(q) ||
        job.company.toLowerCase().includes(q) ||
        job.summary.toLowerCase().includes(q)
      ) {
        results.push({
          type: "Experience",
          icon: Briefcase,
          title: `${job.role} @ ${job.company}`,
          subtitle: job.period,
          link: "/#experience",
        });
      }
    });

    // Search Badminton & Certifications
    if (
      "badminton".includes(q) ||
      "strasuc".includes(q) ||
      "olympics".includes(q) ||
      "doubles".includes(q) ||
      "singles".includes(q)
    ) {
      results.push({
        type: "Achievement",
        icon: Trophy,
        title: "CvSU Badminton STRASUC Olympics Medals",
        subtitle: "Gold, Silver & Bronze Medalist",
        link: "/#certificates",
      });
    }

    certifications.forEach((c) => {
      if (c.title.toLowerCase().includes(q) || c.issuer.toLowerCase().includes(q)) {
        results.push({
          type: "Certification",
          icon: Award,
          title: c.title,
          subtitle: c.issuer,
          link: "/#certificates",
        });
      }
    });

    return results.slice(0, 6);
  };

  const searchResults = getSearchResults();

  const linkClass =
    "rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-700 transition-all duration-200 hover:bg-brand-primary/15 hover:text-brand-primary dark:text-slate-200 dark:hover:bg-brand-secondary/15 dark:hover:text-brand-secondary whitespace-nowrap";

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-3 sm:px-6 pt-3 transition-all duration-300">
      {/* Clean Un-crowded Glassmorphism Navbar Container */}
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 rounded-2xl transition-all duration-300 ${
          scrolled
            ? "border border-white/40 bg-white/85 backdrop-blur-xl shadow-xl dark:border-white/10 dark:bg-slate-900/90"
            : "border border-white/20 bg-white/70 backdrop-blur-lg shadow-md dark:border-white/10 dark:bg-slate-900/70"
        }`}
      >
        {/* Brand Logo */}
        <HashLink smooth to="/#home" className="flex items-center gap-2.5 shrink-0">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-gradient font-bold text-white shadow-glow text-sm">
            RV
          </span>
          <span className="hidden text-base font-extrabold tracking-tight sm:block whitespace-nowrap">
            Rhealyn <span className="gradient-text">Villar</span>
          </span>
        </HashLink>

        {/* Clean Desktop Links */}
        <div className="hidden items-center gap-1 md:flex">
          {desktopLinks.map((l) => (
            <HashLink key={l.to} smooth to={l.to} className={linkClass}>
              {l.label}
            </HashLink>
          ))}
        </div>

        {/* Expandable Compact Search Bar & Right Actions */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Expandable Search Input */}
          <div className="relative" ref={searchRef}>
            <div className="relative flex items-center">
              <Search size={15} className="absolute left-3 text-slate-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchOpen(true);
                }}
                onFocus={() => setIsSearchOpen(true)}
                className="w-28 sm:w-36 focus:w-56 rounded-full border border-slate-200/80 bg-white/80 py-1.5 pl-8 pr-7 text-xs text-slate-800 placeholder-slate-400 backdrop-blur-md transition-all duration-300 focus:border-brand-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 dark:border-white/10 dark:bg-slate-800/80 dark:text-slate-100 dark:placeholder-slate-500 dark:focus:border-brand-secondary"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setIsSearchOpen(false);
                  }}
                  className="absolute right-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  <X size={13} />
                </button>
              )}
            </div>

            {/* Search Dropdown */}
            {isSearchOpen && searchQuery.trim().length > 0 && (
              <div className="absolute right-0 top-full mt-2 w-72 sm:w-80 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-2 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/95 z-50">
                <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Search Results ({searchResults.length})
                </div>
                {searchResults.length > 0 ? (
                  <div className="space-y-1">
                    {searchResults.map((res, i) => {
                      const Icon = res.icon;
                      return (
                        <HashLink
                          key={i}
                          smooth
                          to={res.link}
                          onClick={() => setIsSearchOpen(false)}
                          className="flex items-center justify-between rounded-xl px-3 py-2 text-xs transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                          <div className="flex items-center gap-2.5 overflow-hidden">
                            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-brand-primary/10 text-brand-primary dark:bg-brand-secondary/10 dark:text-brand-secondary">
                              <Icon size={14} />
                            </span>
                            <div className="truncate">
                              <p className="font-semibold text-slate-800 dark:text-slate-100 truncate">
                                {res.title}
                              </p>
                              <p className="text-[10px] text-slate-500 truncate">{res.subtitle}</p>
                            </div>
                          </div>
                          <ArrowRight size={13} className="text-slate-400 shrink-0 ml-2" />
                        </HashLink>
                      );
                    })}
                  </div>
                ) : (
                  <div className="p-4 text-center text-xs text-slate-500 dark:text-slate-400">
                    No matching results found for "{searchQuery}"
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Hire Me Button */}
          <HashLink
            smooth
            to="/#contact"
            className="btn-primary !py-1.5 !px-3.5 text-xs whitespace-nowrap flex-nowrap shrink-0 hidden sm:inline-flex"
          >
            Hire Me
          </HashLink>

          {/* Dark Mode Toggle */}
          <DarkModeToggle />

          {/* Mobile Hamburger Toggle */}
          <button
            className="grid h-9 w-9 place-items-center rounded-full border border-slate-200/70 bg-white/70 text-brand-primary dark:border-white/10 dark:bg-white/5 dark:text-brand-secondary md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden mt-2">
          <div className="mx-auto max-w-6xl flex flex-col gap-1 rounded-2xl border border-white/30 bg-white/95 p-4 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/95">
            {primaryLinks.map((l) => (
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
              className="btn-primary mt-2 whitespace-nowrap flex-nowrap text-center justify-center"
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
