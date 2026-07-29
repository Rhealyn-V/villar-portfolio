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
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { profile, socials } from "../data/portfolio";

const Contacts = () => {
  const [sent, setSent] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const name = data.get("name");
    const email = data.get("email");
    const customSubject = data.get("subject") || "Portfolio Inquiry";
    const message = data.get("message");

    setSubmittedData({ name, email, subject: customSubject, message });

    const subject = encodeURIComponent(`[Portfolio Inquiry] ${customSubject} - ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    // Direct Gmail Web Compose link
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${subject}&body=${body}`;
    // Standard mailto link
    const mailtoUrl = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    // Open Gmail web compose in a new tab
    window.open(gmailUrl, "_blank");

    // Also trigger mailto as fallback for default mail apps
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 500);

    setSent(true);
  };

  const contactItems = [
    { icon: Mail, label: "Direct Gmail", value: profile.email, href: `mailto:${profile.email}` },
    { icon: MessageCircle, label: "Viber / Mobile", value: profile.phone, href: `viber://chat?number=%2B639166259559` },
    { icon: Phone, label: "Call / SMS", value: profile.phone, href: `tel:${socials.phone}` },
    { icon: MapPin, label: "Location", value: profile.location, href: null },
  ];

  return (
    <section id="contact" className="section-pad">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Work Together"
        subtitle="Have a project, role, or opportunity in mind? Send a message directly to my email or reach out on Viber."
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
                    className="break-words font-medium text-brand-primary hover:underline dark:text-brand-secondary"
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
                { icon: MessageCircle, href: `viber://chat?number=%2B639166259559`, label: "Viber" },
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
            <div className="space-y-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs text-slate-700 dark:text-slate-200">
              <p className="flex items-center gap-2 font-bold text-emerald-600 dark:text-emerald-300">
                <CheckCircle2 size={16} /> Message prepared for Gmail!
              </p>
              <p>
                Your message has been formatted to send directly to <strong>{profile.email}</strong>.
              </p>
              {submittedData && (
                <div className="pt-2">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${encodeURIComponent(`[Portfolio Inquiry] ${submittedData.subject} - ${submittedData.name}`)}&body=${encodeURIComponent(`Name: ${submittedData.name}\nEmail: ${submittedData.email}\n\nMessage:\n${submittedData.message}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-bold text-brand-primary underline dark:text-brand-secondary"
                  >
                    Click here if Gmail did not open automatically <ExternalLink size={12} />
                  </a>
                </div>
              )}
            </div>
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
