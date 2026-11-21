import { SiReact, SiPhp, SiMysql, SiGooglesheets, SiGoogleappsscript } from "react-icons/si";

const map = {
  React: SiReact,
  PHP: SiPhp,
  MySQL: SiMysql,
  "Google Sheets": SiGooglesheets,
  "Google Apps Script": SiGoogleappsscript,
};

const StackIcons = ({ stack = [], className = "" }) => (
  <ul className={`flex flex-wrap gap-2 ${className}`} aria-label="Tech stack">
    {stack.map((name) => {
      const Icon = map[name];
      return (
        <li key={name} className="chip">
          {Icon && <Icon size={13} aria-hidden="true" />}
          {name}
        </li>
      );
    })}
  </ul>
);

export default StackIcons;
