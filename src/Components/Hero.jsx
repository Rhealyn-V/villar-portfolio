import { HashLink } from "react-router-hash-link";
import { ArrowDown, Download, MapPin } from "lucide-react";
import Typewriter from "./ui/Typewriter";
import SocialLinks from "./ui/SocialLinks";
import { profile } from "../data/portfolio";
import { positioning, contact } from "../data/site";

const Hero = () => (
  <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden pt-28 sm:pt-32">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60rem_30rem_at_10%_-10%,rgb(190_24_93/0.10),transparent_60%)] dark:bg-[radial-gradient(60rem_30rem_at_10%_-10%,rgb(244_114_182/0.12),transparent_60%)]"
    />
    <div className="container-page grid items-center gap-12 pb-16 md:pb-20 lg:grid-cols-[1.25fr_1fr]">
      <div>
        <p className="chip-accent mb-6">
          <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
          {contact.availability}
        </p>

        <h1 id="hero-title" className="tracking-tight">
          <span className="block text-lg font-semibold text-slate-700 dark:text-slate-300 sm:text-xl">
            Hi, I&apos;m {profile.name}
          </span>
          <span className="mt-3 block text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-[3.4rem]">
            {positioning.title}
          </span>
        </h1>

        <p className="mt-5 text-xl font-semibold text-slate-800 dark:text-slate-200 sm:text-2xl">
          <Typewriter words={profile.roles} />
        </p>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-700 dark:text-slate-300 sm:text-lg">
          {positioning.supportingLine}
        </p>

        <p className="text-muted mt-4 flex items-center gap-2 text-sm">
          <MapPin size={16} aria-hidden="true" className="text-accent" />
          {contact.location}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <HashLink smooth to="/#work" className="btn-primary">
            View my work <ArrowDown size={16} aria-hidden="true" />
          </HashLink>
          <a href={profile.resumeFile} download className="btn-secondary">
            <Download size={16} aria-hidden="true" /> Download resume (PDF)
          </a>
        </div>

        <SocialLinks className="mt-8" />
      </div>

      <div className="relative mx-auto w-full max-w-[18rem] sm:max-w-sm">
        <div
          aria-hidden="true"
          className="absolute -inset-3 -z-10 rotate-3 rounded-[2rem] bg-brand/15 dark:bg-brand-light/15"
        />
        <img
          src={profile.photo.src}
          width={profile.photo.width}
          height={profile.photo.height}
          alt={`Portrait of ${profile.name}`}
          fetchPriority="high"
          decoding="async"
          className="aspect-square w-full rounded-[1.75rem] border-4 border-white object-cover shadow-lift dark:border-slate-800"
        />
      </div>
    </div>
  </section>
);

export default Hero;
