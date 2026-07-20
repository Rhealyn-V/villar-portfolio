import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Facebook,
  CheckCircle2,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { profile, socials } from "../data/portfolio";

const Contacts = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    // Opens the visitor's email client pre-filled (no backend required).
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const contactItems = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${socials.phone}` },
    { icon: MapPin, label: "Location", value: profile.location, href: null },
  ];

  return (
    <section id="contact" className="section-pad">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Work Together"
        subtitle="Have a project, role, or opportunity in mind? I'd love to hear from you."
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          {contactItems.map((c) => (
            <div key={c.label} className="card flex items-center gap-4 p-5">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-gradient text-white">
                <c.icon size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wide text-slate-400">{c.label}</p>
                {c.href ? (
                  <a
                    href={c.href}
                    className="break-words font-medium hover:text-brand-primary dark:hover:text-brand-secondary"
                  >
                    {c.value}
                  </a>
                ) : (
                  <p className="font-medium">{c.value}</p>
                )}
              </div>
            </div>
          ))}

          <div className="card p-5">
            <p className="mb-3 text-sm font-semibold">Find me online</p>
            <div className="flex gap-3">
              {[
                { icon: Github, href: socials.github, label: "GitHub" },
                { icon: Linkedin, href: socials.linkedin, label: "LinkedIn" },
                { icon: Facebook, href: socials.facebook, label: "Facebook" },
                { icon: Mail, href: `mailto:${socials.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-slate-200/70 bg-white/70 text-brand-primary transition-all hover:scale-110 hover:bg-brand-primary hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-brand-secondary dark:hover:bg-brand-secondary dark:hover:text-slate-900"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card space-y-4 p-6 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" placeholder="Your name" />
            <Field label="Email" name="email" type="email" placeholder="you@email.com" />
          </div>
          <Field label="Subject" name="subject" placeholder="What is this about?" />
          <div>
            <label className="mb-1.5 block text-sm font-medium">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Tell me about your project or opportunity..."
              className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/30 dark:border-white/10 dark:bg-slate-900/60"
            />
          </div>
          <button type="submit" className="btn-primary w-full">
            <Send size={16} /> Send Message
          </button>
          {sent && (
            <p className="flex items-center justify-center gap-2 text-sm text-brand-primary dark:text-brand-secondary">
              <CheckCircle2 size={16} /> Your email app should now be open — thank you!
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

const Field = ({ label, name, type = "text", placeholder }) => (
  <div>
    <label className="mb-1.5 block text-sm font-medium">{label}</label>
    <input
      type={type}
      name={name}
      required
      placeholder={placeholder}
      className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm outline-none transition focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/30 dark:border-white/10 dark:bg-slate-900/60"
    />
  </div>
);

export default Contacts;
