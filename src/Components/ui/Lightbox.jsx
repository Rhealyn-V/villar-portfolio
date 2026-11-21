import { useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Accessible image dialog: focus moves in and is trapped, Esc closes,
// ←/→ navigate, focus returns to the trigger on close, page scroll is locked.
const Lightbox = ({ images, index, onClose, onIndexChange, title }) => {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const open = index !== null && index !== undefined && images.length > 0;
  const count = images.length;

  const go = useCallback(
    (delta) => onIndexChange((index + delta + count) % count),
    [index, count, onIndexChange]
  );

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight" && count > 1) go(1);
      else if (e.key === "ArrowLeft" && count > 1) go(-1);
      else if (e.key === "Tab") {
        const focusables = dialogRef.current?.querySelectorAll("button");
        if (!focusables?.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, count, go, onClose]);

  if (!open) return null;
  const img = images[index];

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950/90 p-3 sm:p-6"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${title ? `${title} — ` : ""}image ${index + 1} of ${count}`}
        className="relative flex max-h-full w-full max-w-5xl flex-col"
      >
        <div className="mb-3 flex items-center justify-between gap-3 text-white">
          <p className="truncate text-sm font-medium">
            {title && <span className="mr-2">{title}</span>}
            <span className="text-slate-300">
              {index + 1} / {count}
            </span>
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Close"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <figure className="flex min-h-0 flex-1 flex-col items-center">
          <img
            src={img.src}
            alt={img.alt || img.caption || ""}
            width={img.width}
            height={img.height}
            className="max-h-[75vh] w-auto max-w-full rounded-lg object-contain"
          />
          {img.caption && (
            <figcaption className="mt-3 text-center text-sm text-slate-200">{img.caption}</figcaption>
          )}
        </figure>

        {count > 1 && (
          <div className="mt-4 flex justify-center gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Previous image"
            >
              <ChevronLeft size={22} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Next image"
            >
              <ChevronRight size={22} aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lightbox;
