import { useEffect, useRef } from "react";

// Fade-up on scroll, as an enhancement only. Content is rendered visible; it is
// hidden just before animating, and only when it starts below the fold, motion
// is allowed, and IntersectionObserver exists. If JS never runs, nothing hides.
const Reveal = ({ as: Tag = "div", delay = 0, className = "", style, children, ...rest }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    el.classList.add("reveal-pending");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.classList.remove("reveal-pending");
        el.classList.add("reveal-in");
        io.disconnect();
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      el.classList.remove("reveal-pending");
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={delay ? { ...style, "--reveal-delay": `${delay}ms` } : style}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
