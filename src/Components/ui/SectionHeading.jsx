import { motion } from "framer-motion";

const SectionHeading = ({ eyebrow, title, subtitle, align = "center" }) => {
  const alignment = align === "left" ? "text-left items-start" : "text-center items-center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 flex flex-col ${alignment}`}
    >
      {eyebrow && (
        <span className="chip mb-3 uppercase tracking-wider">{eyebrow}</span>
      )}
      <h2 className="text-3xl font-bold sm:text-4xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-300">
          {subtitle}
        </p>
      )}
      <span className="mt-5 h-1 w-20 rounded-full bg-brand-gradient" />
    </motion.div>
  );
};

export default SectionHeading;
