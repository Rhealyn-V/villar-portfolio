import Reveal from "./Reveal";

const SectionHeading = ({ id, eyebrow, title, subtitle, align = "left" }) => (
  <Reveal className={`mb-10 max-w-2xl md:mb-12 ${align === "center" ? "mx-auto text-center" : ""}`}>
    {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
    <h2 id={id} className="text-3xl font-bold tracking-tight sm:text-4xl">
      {title}
    </h2>
    {subtitle && <p className="text-muted mt-4 text-base leading-relaxed">{subtitle}</p>}
  </Reveal>
);

export default SectionHeading;
