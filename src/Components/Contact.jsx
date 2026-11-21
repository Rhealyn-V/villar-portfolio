import { useState } from "react";
import { Mail, MessageCircle, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import SocialLinks from "./ui/SocialLinks";
import { contact, formspreeId } from "../data/site";

const channels = [
  { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { icon: MessageCircle, label: "Viber", value: contact.phone, href: contact.viberHref },
  { icon: Phone, label: "Call / SMS", value: contact.phone, href: contact.phoneHref },
  { icon: MapPin, label: "Location", value: contact.location },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const validate = ({ name, email, message }) => {
  const errors = {};
  if (!name.trim()) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(email.trim())) errors.email = "Please enter a valid email address.";
  if (message.trim().length < 10) errors.message = "Please write at least 10 characters.";
  return errors;
};

const ContactForm = () => {
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      form.querySelector(`[name="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          _subject: values.subject ? `Portfolio: ${values.subject}` : `Portfolio inquiry from ${values.name}`,
          message: values.message,
          _gotcha: form.elements._gotcha?.value || "",
        }),
      });
      if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
      setStatus("success");
      setValues({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const field = (name, label, props = {}) => (
    <div>
      <label htmlFor={`cf-${name}`} className="mb-1.5 block text-sm font-medium text-slate-900 dark:text-slate-100">
        {label}
        {props.optional && <span className="text-muted font-normal"> (optional)</span>}
      </label>
      {props.textarea ? (
        <textarea
          id={`cf-${name}`}
          name={name}
          rows={5}
          value={values[name]}
          onChange={onChange}
          aria-invalid={!!errors[name]}
          aria-describedby={errors[name] ? `cf-${name}-error` : undefined}
          className="input"
        />
      ) : (
        <input
          id={`cf-${name}`}
          name={name}
          type={props.type || "text"}
          autoComplete={props.autoComplete}
          value={values[name]}
          onChange={onChange}
          aria-invalid={!!errors[name]}
          aria-describedby={errors[name] ? `cf-${name}-error` : undefined}
          className="input"
        />
      )}
      {errors[name] && (
        <p id={`cf-${name}-error`} className="mt-1.5 text-sm text-red-700 dark:text-red-400">
          {errors[name]}
        </p>
      )}
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="card space-y-4 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        {field("name", "Name", { autoComplete: "name" })}
        {field("email", "Email", { type: "email", autoComplete: "email" })}
      </div>
      {field("subject", "Subject", { optional: true })}
      {field("message", "Message", { textarea: true })}
      {/* Honeypot for bots — hidden from people and assistive tech */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-60">
        <Send size={16} aria-hidden="true" /> {status === "sending" ? "Sending…" : "Send message"}
      </button>

      <div aria-live="polite" role="status">
        {status === "success" && (
          <p className="flex items-start gap-2 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-200">
            <CheckCircle2 size={18} aria-hidden="true" className="mt-0.5 shrink-0" />
            Thanks — your message was sent. I&apos;ll reply by email soon.
          </p>
        )}
        {status === "error" && (
          <p className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-900 dark:border-red-900 dark:bg-red-950 dark:text-red-200">
            <AlertCircle size={18} aria-hidden="true" className="mt-0.5 shrink-0" />
            <span>
              Sorry, the message couldn&apos;t be sent. Please email me directly at{" "}
              <a className="font-semibold underline" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
              .
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

// Shown when no form endpoint is configured: a clear, working call to action.
const DirectContact = () => (
  <div className="card flex flex-col justify-center p-6 sm:p-10">
    <h3 className="text-2xl font-bold">The fastest way to reach me</h3>
    <p className="text-muted mt-3 leading-relaxed">
      Send an email with a line about the role or project, or message me on Viber.
    </p>
    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
      <a href={`mailto:${contact.email}?subject=${encodeURIComponent("Portfolio inquiry")}`} className="btn-primary">
        <Mail size={16} aria-hidden="true" /> Email me
      </a>
      <a href={contact.viberHref} className="btn-secondary">
        <MessageCircle size={16} aria-hidden="true" /> Message on Viber
      </a>
    </div>
  </div>
);

const Contact = () => (
  <section id="contact" aria-labelledby="contact-title" className="section bg-white dark:bg-slate-900">
    <div className="container-page">
      <SectionHeading
        id="contact-title"
        eyebrow="Contact"
        title="Let's work together"
        subtitle="Hiring for a junior developer, IT support, or operations role — or need a system built? I'd like to hear about it."
      />
      <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
        <Reveal as="ul" className="space-y-3">
          {channels.map((c) => (
            <li key={c.label} className="flex items-center gap-4 rounded-card border border-slate-200 p-4 dark:border-slate-800">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand dark:bg-brand-light/10 dark:text-brand-light">
                <c.icon size={20} aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-muted text-xs font-medium uppercase tracking-wide">{c.label}</p>
                {c.href ? (
                  <a href={c.href} className="link break-words">
                    {c.value}
                  </a>
                ) : (
                  <p className="font-medium text-slate-900 dark:text-slate-100">{c.value}</p>
                )}
              </div>
            </li>
          ))}
          <li className="pt-2">
            <SocialLinks includeContact={false} />
          </li>
        </Reveal>
        <Reveal delay={80}>{formspreeId ? <ContactForm /> : <DirectContact />}</Reveal>
      </div>
    </div>
  </section>
);

export default Contact;
