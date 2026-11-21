// ============================================================================
// SITE CONFIG — positioning, SEO, contact details and social links.
// Keep the <head> tags in index.html in sync with `seo` below.
// ============================================================================

export const site = {
  url: "https://villar-portfolio.vercel.app",
  name: "Rhealyn Villar",
  initials: "RV",
};

// One positioning statement, reused everywhere (hero, footer, resume, SEO).
export const positioning = {
  title: "Junior Web Developer — Business Systems & Automation",
  supportingLine:
    "I build web apps that replace manual, paper-based processes, backed by hands-on experience in admin, IT support, and operations.",
};

export const seo = {
  title: `${site.name} | ${positioning.title}`,
  description: `${positioning.supportingLine} Based in Naic, Cavite, Philippines.`,
  ogImage: "/og-image.jpg", // 1200×630
};

export const contact = {
  email: "villar.rhealyn.01@gmail.com",
  phone: "+63 916 625 9559",
  phoneHref: "tel:+639166259559",
  viberHref: "viber://chat?number=%2B639166259559",
  location: "Naic, Cavite, Philippines",
  availability: "Open to work — full-time, remote, or freelance",
};

// Contact form: set VITE_FORMSPREE_ID in Vercel → Project → Settings →
// Environment Variables (and in a local .env file). See .env.example.
// When it's empty the site shows a direct email / Viber call to action instead
// of a form, so visitors never see a form that doesn't send.
export const formspreeId = import.meta.env.VITE_FORMSPREE_ID || "";

// Social links. Any entry whose URL is empty or still contains "[" is hidden
// automatically, so placeholders never render as dead links.
export const socials = [
  { id: "github", label: "GitHub", url: "https://github.com/rhealyn-v" },
  // TODO: add your LinkedIn profile URL, e.g. "https://www.linkedin.com/in/your-handle"
  { id: "linkedin", label: "LinkedIn", url: "" },
  // TODO: add your Facebook URL (optional — leave empty to keep it hidden)
  { id: "facebook", label: "Facebook", url: "" },
];

export const isRealUrl = (url) =>
  typeof url === "string" && url.trim() !== "" && !url.includes("[");

export const activeSocials = socials.filter((s) => isRealUrl(s.url));
