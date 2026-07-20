import { useState } from "react";
import { toast } from "sonner";
import { Magnetic, MaskLineScroll, Reveal } from "./motion";

const Field = ({ id, label, type = "text", value, onChange, textarea }) => (
  <div className="relative pt-6">
    <label
      htmlFor={id}
      className={`absolute left-0 font-mono text-[11px] tracking-[0.15em] uppercase transition-all duration-300 ${
        value ? "top-0 text-teal" : "top-8 text-cream/40"
      }`}
    >
      {label}
    </label>
    {textarea ? (
      <textarea
        id={id}
        data-testid={`contact-${id}`}
        rows={3}
        value={value}
        onChange={onChange}
        className="w-full resize-none bg-transparent border-b border-cream/25 py-2 text-lg text-cream focus:border-teal focus:outline-none transition-colors duration-300"
      />
    ) : (
      <input
        id={id}
        data-testid={`contact-${id}`}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent border-b border-cream/25 py-2 text-lg text-cream focus:border-teal focus:outline-none transition-colors duration-300"
      />
    )}
  </div>
);

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast.error("Please share your name and email.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("Thank you — we'll be in touch shortly.");
    setForm({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" data-testid="contact-section" className="bg-ink py-24 md:py-36">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-14">
        <div className="lg:col-span-5">
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-teal mb-6">— Connect Us</p>
          <h2 className="font-serif font-light tracking-tight leading-[0.95] text-5xl sm:text-6xl lg:text-7xl text-cream">
            <MaskLineScroll>Let&apos;s protect</MaskLineScroll>
            <MaskLineScroll delay={0.1} className="italic text-teal">what matters.</MaskLineScroll>
          </h2>

          <div className="mt-14 space-y-6 font-mono text-sm text-cream/60">
            <Reveal>
              <a href="tel:+919911159883" className="link-underline block text-cream">+91 99111 59883</a>
            </Reveal>
            <Reveal delay={0.06}>
              <a href="mailto:connect-us@cloudroplets.io" className="link-underline block text-cream">
                connect-us@cloudroplets.io
              </a>
            </Reveal>
            <Reveal delay={0.12}>
              <span className="block">cloudroplets.io</span>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form onSubmit={submit} data-testid="contact-form" className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
            <Field id="name" label="Your Name" value={form.name} onChange={set("name")} />
            <Field id="email" label="Email Address" type="email" value={form.email} onChange={set("email")} />
            <div className="sm:col-span-2">
              <Field id="company" label="Company" value={form.company} onChange={set("company")} />
            </div>
            <div className="sm:col-span-2">
              <Field id="message" label="How can we help?" value={form.message} onChange={set("message")} textarea />
            </div>
            <div className="sm:col-span-2 pt-6">
              <Magnetic className="inline-block">
                <button
                  type="submit"
                  data-testid="contact-submit"
                  className="inline-flex items-center gap-3 rounded-full bg-teal text-ink px-9 py-4 font-mono text-[11px] tracking-[0.2em] uppercase hover:bg-cream transition-colors duration-400"
                >
                  Send Message →
                </button>
              </Magnetic>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
