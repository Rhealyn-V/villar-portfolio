import { useEffect, useState } from "react";

const article = (word = "") => (/^[aeiou]/i.test(word) ? "an" : "a");

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// "I'm a Web Developer" / "I'm an IT Support Specialist" — the article is
// computed from the word being shown. Static (first word) for reduced motion.
const Typewriter = ({ words = [], prefix = "I'm", typingSpeed = 85, deletingSpeed = 40, pause = 1600 }) => {
  const [reduced] = useState(prefersReducedMotion);
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState(reduced ? (words[0] || "").length : 0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced || words.length === 0) return;
    const word = words[index];
    if (!deleting && sub === word.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && sub === 0) {
      const t = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      }, 200);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setSub((s) => s + (deleting ? -1 : 1)), deleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(t);
  }, [sub, deleting, index, words, reduced, typingSpeed, deletingSpeed, pause]);

  const word = words[index] || "";

  return (
    <>
      <span className="sr-only">
        {prefix} {words.map((w) => `${article(w)} ${w}`).join(", ")}.
      </span>
      <span aria-hidden="true">
        {prefix} {article(word)}{" "}
        <span className="text-accent">{word.substring(0, sub)}</span>
        {!reduced && (
          <span className="caret ml-0.5 inline-block h-[1em] w-[3px] translate-y-[0.15em] bg-brand dark:bg-brand-light" />
        )}
      </span>
    </>
  );
};

export default Typewriter;
