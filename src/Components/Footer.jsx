import { HashLink } from "react-router-hash-link";
import { positioning, site, contact } from "../data/site";
import SocialLinks from "./ui/SocialLinks";

const Footer = () => (
  <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
    <div className="container-page flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
      <div className="max-w-md">
        <p className="text-lg font-bold text-slate-900 dark:text-white">{site.name}</p>
        <p className="text-accent mt-1 text-sm font-semibold">{positioning.title}</p>
        <p className="text-muted mt-3 text-sm leading-relaxed">{positioning.supportingLine}</p>
        <p className="text-muted mt-3 text-sm">{contact.location}</p>
      </div>
      <div>
        <p className="mb-3 text-sm font-semibold text-slate-900 dark:text-white">Get in touch</p>
        <SocialLinks />
        <a href={`mailto:${contact.email}`} className="link mt-4 inline-block text-sm">
          {contact.email}
        </a>
      </div>
    </div>
    <div className="container-page flex flex-col items-center justify-between gap-3 border-t border-slate-200 py-6 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-400 sm:flex-row">
      <p>© {new Date().getFullYear()} {site.name}</p>
      <HashLink smooth to="/#home" className="link">
        Back to top
      </HashLink>
    </div>
  </footer>
);

export default Footer;
