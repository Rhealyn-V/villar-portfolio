import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0 })}
      aria-label="Back to top"
      className="no-print fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-brand text-white shadow-lift hover:bg-brand-hover dark:bg-brand-light dark:text-slate-950"
    >
      <ArrowUp size={20} aria-hidden="true" />
    </button>
  );
};

export default ScrollToTop;
