import { useState } from "react";
import { CalendarClock, ClipboardCheck, Truck, Radio, Images, Medal } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Lightbox from "./ui/Lightbox";
import { athletics, organizingSkills, organizedTournaments } from "../data/portfolio";

const pillarIcons = [CalendarClock, ClipboardCheck, Truck, Radio];
const medalStyle = {
  Gold: "bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300",
  Silver: "bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-200",
  Bronze: "bg-orange-100 text-orange-900 dark:bg-orange-950 dark:text-orange-300",
};

const Leadership = () => {
  const [gallery, setGallery] = useState({ t: null, index: null });

  return (
    <section id="leadership" aria-labelledby="leadership-title" className="section">
      <div className="container-page">
        <SectionHeading
          id="leadership-title"
          eyebrow="Leadership & sports"
          title="Running tournaments is project management"
          subtitle="I've organized three badminton tournaments end to end. Each one is a small project with a fixed date, many people to coordinate, and no second chance on the day."
        />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {organizingSkills.map((s, i) => {
            const Icon = pillarIcons[i];
            return (
              <Reveal as="li" key={s.title} delay={i * 50} className="rounded-card border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                <Icon size={20} aria-hidden="true" className="text-accent" />
                <h3 className="mt-3 font-bold">{s.title}</h3>
                <p className="text-muted mt-1 text-sm">{s.text}</p>
              </Reveal>
            );
          })}
        </ul>

        <h3 className="mt-14 text-xl font-bold">Tournaments I organized</h3>
        <div className="mt-5 grid gap-6 md:grid-cols-3">
          {organizedTournaments.map((t, i) => (
            <Reveal as="article" key={t.id} delay={i * 60} className="card flex flex-col overflow-hidden">
              <button
                type="button"
                onClick={() => setGallery({ t, index: 0 })}
                className="group relative block aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800"
                aria-label={`View ${t.images.length} ${t.images.length === 1 ? "photo" : "photos"} from ${t.title}`}
              >
                <img
                  src={t.thumb.src}
                  width={t.thumb.width}
                  height={t.thumb.height}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transform-none"
                />
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-semibold text-white">
                  <Images size={13} aria-hidden="true" /> {t.images.length}
                </span>
              </button>
              <div className="flex flex-1 flex-col p-5">
                <h4 className="text-lg font-bold">{t.title}</h4>
                <p className="text-accent mt-0.5 text-sm font-semibold">{t.role}</p>
                <p className="text-muted mt-3 text-sm leading-relaxed">{t.description}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {t.highlights.map((h) => (
                    <li key={h} className="chip">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="card mt-14 p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <Medal size={22} aria-hidden="true" className="text-accent" />
            <h3 className="text-xl font-bold">{athletics.headline}</h3>
          </div>
          <p className="text-muted mt-1 text-sm">{athletics.detail}</p>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2">
            {athletics.medals.map((m) => (
              <li key={`${m.title}-${m.year}`} className="flex items-start gap-3 rounded-xl border border-slate-200 p-4 dark:border-slate-800">
                <span className={`rounded-md px-2 py-0.5 text-xs font-bold ${medalStyle[m.medal]}`}>{m.medal}</span>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-slate-100">{m.title}</p>
                  <p className="text-muted text-sm">
                    {m.event} · {m.venue}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>

      <Lightbox
        images={gallery.t?.images || []}
        index={gallery.index}
        title={gallery.t?.title}
        onClose={() => setGallery({ t: null, index: null })}
        onIndexChange={(index) => setGallery((g) => ({ ...g, index }))}
      />
    </section>
  );
};

export default Leadership;
