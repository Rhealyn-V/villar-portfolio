import { Github, Linkedin, Facebook, Mail, MessageCircle } from "lucide-react";
import { activeSocials, contact } from "../../data/site";

const icons = { github: Github, linkedin: Linkedin, facebook: Facebook };

// Only renders socials with a real URL (see data/site.js), plus email/Viber.
const SocialLinks = ({ includeContact = true, className = "" }) => {
  const links = [
    ...activeSocials.map((s) => ({ ...s, icon: icons[s.id], external: true })),
    ...(includeContact
      ? [
          { id: "email", label: "Email", url: `mailto:${contact.email}`, icon: Mail },
          { id: "viber", label: "Viber", url: contact.viberHref, icon: MessageCircle },
        ]
      : []),
  ];

  return (
    <ul className={`flex flex-wrap items-center gap-2 ${className}`}>
      {links.map(({ id, label, url, icon: Icon, external }) => (
        <li key={id}>
          <a
            href={url}
            className="icon-btn"
            aria-label={label}
            title={label}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            <Icon size={18} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
