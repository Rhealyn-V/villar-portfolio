import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  ExternalLink,
  Trophy,
  Medal,
  MapPin,
  Users,
  ChevronLeft,
  ChevronRight,
  X,
  ShieldCheck,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { certifications, achievements, badmintonAchievements, organizedTournaments } from "../data/portfolio";

const medalColors = {
  Gold: "bg-amber-400/20 text-amber-500 border-amber-400/40 dark:bg-amber-400/10 dark:text-amber-300",
  Silver: "bg-slate-300/30 text-slate-600 border-slate-300/50 dark:bg-slate-300/10 dark:text-slate-200",
  Bronze: "bg-amber-700/20 text-amber-700 border-amber-700/40 dark:bg-amber-700/10 dark:text-amber-400",
};

const TournamentCard = ({ t, onOpenGallery }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const images = t.images && t.images.length > 0 ? t.images : [t.poster];
  const imageCount = images.length;

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev === 0 ? imageCount - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev === imageCount - 1 ? 0 : prev + 1));
  };

  return (
    <div className="card w-[280px] sm:w-[310px] shrink-0 overflow-hidden p-4 flex flex-col justify-between border border-slate-200/90 dark:border-white/10 bg-white dark:bg-slate-900 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
      <div>
        {/* Image Container with In-Card Slider Controls matching reference screenshot */}
        <div className="relative h-44 sm:h-48 w-full rounded-xl overflow-hidden bg-slate-950 group">
          <img
            src={images[activeIdx]}
            alt={`${t.title} - photo ${activeIdx + 1}`}
            onError={(e) => {
              e.currentTarget.src = "/badminton-logo.jpg";
            }}
            className="h-full w-full object-cover transition-transform duration-500"
          />

          {/* Top Right Counter Badge (e.g. 2/4) */}
          <div className="absolute top-2.5 right-2.5 rounded-md bg-black/75 px-2 py-0.5 text-[11px] font-mono font-semibold text-white backdrop-blur-sm shadow z-10">
            {activeIdx + 1}/{imageCount}
          </div>

          {/* Left Arrow Button inside image */}
          {imageCount > 1 && (
            <button
              onClick={handlePrev}
              aria-label="Previous Photo"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-1.5 text-white hover:bg-black/90 transition backdrop-blur-sm z-10 opacity-90 group-hover:opacity-100"
            >
              <ChevronLeft size={14} />
            </button>
          )}

          {/* Right Arrow Button inside image */}
          {imageCount > 1 && (
            <button
              onClick={handleNext}
              aria-label="Next Photo"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-1.5 text-white hover:bg-black/90 transition backdrop-blur-sm z-10 opacity-90 group-hover:opacity-100"
            >
              <ChevronRight size={14} />
            </button>
          )}

          {/* Bottom Center Dot Indicators */}
          {imageCount > 1 && (
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIdx(i);
                  }}
                  className={`rounded-full transition-all ${
                    activeIdx === i
                      ? "w-2.5 h-1.5 bg-white"
                      : "w-1.5 h-1.5 bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Card Content - Centered Title & Text matching reference screenshot */}
        <div className="pt-4 pb-2 px-1 text-center flex flex-col items-center">
          <h4 className="font-extrabold text-base text-slate-900 dark:text-white leading-tight">
            {t.title}
          </h4>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed max-w-[260px]">
            {t.description}
          </p>

          {/* Explore Button / Link */}
          <button
            onClick={() => onOpenGallery(t, activeIdx)}
            className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-brand-primary dark:text-brand-secondary hover:underline"
          >
            Explore tournament <ExternalLink size={12} />
          </button>
        </div>
      </div>

      {/* Bottom Thumbnail Strip matching reference screenshot */}
      {imageCount > 1 && (
        <div className="mt-3 flex items-center justify-center gap-2 pt-2 border-t border-slate-100 dark:border-white/5">
          {images.map((imgUrl, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`h-10 w-12 rounded-lg border-2 overflow-hidden shrink-0 transition-all ${
                activeIdx === i
                  ? "border-brand-primary ring-2 ring-brand-primary/20 scale-105"
                  : "border-slate-200 dark:border-slate-800 opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={imgUrl}
                alt={`Thumbnail ${i + 1}`}
                onError={(e) => {
                  e.currentTarget.src = "/badminton-logo.jpg";
                }}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const Certificates = () => {
  const scrollRef = useRef(null);
  const [selectedTournament, setSelectedTournament] = useState(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const showArrows = organizedTournaments.length > 3;

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const openGallery = (tournament, initialIdx = 0) => {
    setSelectedTournament(tournament);
    setActiveImageIdx(initialIdx);
  };

  const closeGallery = () => {
    setSelectedTournament(null);
  };

  return (
    <section id="certificates" className="section-pad">
      <SectionHeading
        eyebrow="Certificates & Achievements"
        title="Credentials, Honors & Athletic Accomplishments"
        subtitle="Professional certifications, IT qualifications, and athletic honors in Badminton."
      />

      {/* Badminton Achievements Hero Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="card mb-12 overflow-hidden p-6 sm:p-8 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-secondary/5 border-brand-primary/20"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200/80 pb-6 dark:border-white/10">
          <div className="flex items-center gap-4">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-gradient text-white shadow-glow">
              <Trophy size={28} />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  {badmintonAchievements.organization}
                </h3>
              </div>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                STRASUC Olympics Varsity Athlete — Cavite State University (CvSU)
              </p>
            </div>
          </div>
        </div>

        {/* Medals List Grid */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {badmintonAchievements.medals.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-3.5 rounded-xl border border-slate-200/70 bg-white/70 p-4 shadow-sm dark:border-white/10 dark:bg-slate-900/60"
            >
              <div
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl border ${
                  medalColors[m.medal] || medalColors.Gold
                }`}
              >
                <Medal size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <span
                  className={`inline-block rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                    medalColors[m.medal] || medalColors.Gold
                  }`}
                >
                  {m.medal} Medal
                </span>
                <h4 className="mt-1 text-sm font-bold text-slate-900 dark:text-white leading-snug">
                  {m.title}
                </h4>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
                  <span className="inline-flex items-center gap-1 font-medium text-brand-primary dark:text-brand-secondary">
                    <Trophy size={12} /> {m.event}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={12} /> {m.venue}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Organized Badminton Tournaments Section */}
      <div className="mb-12">
        <div className="mb-6 text-center">
          <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Organized Badminton Tournaments
          </h3>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            {showArrows
              ? "Swipe or click through some of my organized tournaments below."
              : "Tournaments I conceptualized, managed, and executed."}
          </p>
        </div>

        {/* Carousel Container with Centered Cards when <= 3 & Side Navigation Arrows when > 3 */}
        <div className="relative px-2 sm:px-6">
          {/* Left Arrow Button (shown only when > 3 cards) */}
          {showArrows && (
            <button
              onClick={() => handleScroll("left")}
              aria-label="Previous Tournaments"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-xl transition-all hover:scale-110 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            >
              <ChevronLeft size={22} />
            </button>
          )}

          {/* Centered / Scrollable Track */}
          <div
            ref={scrollRef}
            className={`flex gap-6 overflow-x-auto px-2 py-4 scroll-smooth scrollbar-none ${
              showArrows ? "justify-start" : "justify-center flex-wrap sm:flex-nowrap"
            }`}
          >
            {organizedTournaments.map((t) => (
              <TournamentCard key={t.title} t={t} onOpenGallery={openGallery} />
            ))}
          </div>

          {/* Right Arrow Button (shown only when > 3 cards) */}
          {showArrows && (
            <button
              onClick={() => handleScroll("right")}
              aria-label="Next Tournaments"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-xl transition-all hover:scale-110 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            >
              <ChevronRight size={22} />
            </button>
          )}
        </div>
      </div>

      {/* Gallery Lightbox Modal */}
      <AnimatePresence>
        {selectedTournament && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-900 border border-slate-200 dark:border-white/10"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-slate-200 p-4 dark:border-white/10">
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                    {selectedTournament.title}
                  </h3>
                  <p className="text-xs text-brand-primary dark:text-brand-secondary font-medium">
                    {selectedTournament.subtitle} · {selectedTournament.role}
                  </p>
                </div>
                <button
                  onClick={closeGallery}
                  className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Main Image Display */}
              <div className="relative flex h-80 sm:h-96 items-center justify-center bg-slate-950">
                <img
                  src={selectedTournament.images[activeImageIdx] || selectedTournament.poster}
                  alt={`${selectedTournament.title} photo ${activeImageIdx + 1}`}
                  onError={(e) => {
                    e.currentTarget.src = "/badminton-logo.jpg";
                  }}
                  className="max-h-full max-w-full object-contain"
                />

                {/* Left/Right controls inside modal */}
                {selectedTournament.images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setActiveImageIdx((prev) =>
                          prev === 0 ? selectedTournament.images.length - 1 : prev - 1
                        )
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white hover:bg-black"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={() =>
                        setActiveImageIdx((prev) =>
                          prev === selectedTournament.images.length - 1 ? 0 : prev + 1
                        )
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white hover:bg-black"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                <div className="absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                  {activeImageIdx + 1} / {selectedTournament.images.length}
                </div>
              </div>

              {/* Modal Description & Highlights */}
              <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-white/10 text-xs">
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                  {selectedTournament.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedTournament.highlights.map((h, i) => (
                    <span key={i} className="inline-flex items-center gap-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 text-[11px] text-emerald-700 dark:text-emerald-300 font-medium">
                      <ShieldCheck size={12} /> {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Certifications */}
        <div>
          <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <Award className="text-brand-primary dark:text-brand-secondary" size={20} />
            Certifications & Training
          </h3>
          <div className="space-y-4">
            {certifications.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="card flex items-start gap-4 p-5"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-gradient text-white">
                  <Award size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{c.title}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {c.issuer} · {c.date}
                  </p>
                </div>
                {c.credentialUrl && (
                  <a
                    href={c.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-brand-primary hover:text-brand-secondary dark:text-brand-secondary"
                    aria-label="View credential"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <Trophy className="text-brand-accent" size={20} />
            Key Highlights & Achievements
          </h3>
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card space-y-4 p-6"
          >
            {achievements.map((a, idx) => (
              <li key={idx} className="flex gap-3 text-sm text-slate-600 dark:text-slate-300">
                <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-accent/20">
                  <Trophy size={12} className="text-brand-accent" />
                </span>
                <span>{a}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
