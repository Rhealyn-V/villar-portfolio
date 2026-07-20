import { useEffect, useState } from "react";

// Animated typing effect that cycles through an array of words.
const Typewriter = ({ words = [], typingSpeed = 90, deletingSpeed = 45, pause = 1400 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    // Finished typing the current word -> pause, then start deleting
    if (!deleting && subIndex === words[index].length) {
      const timeout = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timeout);
    }

    // Finished deleting -> move to next word
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (deleting ? -1 : 1)),
      deleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words, typingSpeed, deletingSpeed, pause]);

  return (
    <span className="text-brand-secondary">
      {words[index]?.substring(0, subIndex)}
      <span className="ml-0.5 inline-block w-[3px] animate-blink bg-brand-secondary align-middle" style={{ height: "1em" }} />
    </span>
  );
};

export default Typewriter;
