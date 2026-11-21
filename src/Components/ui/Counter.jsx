import { useEffect, useRef } from "react";

// Renders the final number by default. If it starts off-screen and motion is
// allowed, it counts up once it scrolls into view. Screen readers always get
// the final value.
const Counter = ({ value, suffix = "", duration = 1200 }) => {
  const ref = useRef(null);
  const final = `${value}${suffix}`;

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    let raf;
    el.textContent = `0${suffix}`;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        el.textContent = `${Math.round((1 - Math.pow(1 - p, 3)) * value)}${suffix}`;
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      el.textContent = final;
    };
  }, [value, suffix, duration, final]);

  return (
    <>
      <span ref={ref} aria-hidden="true">
        {final}
      </span>
      <span className="sr-only">{final}</span>
    </>
  );
};

export default Counter;
