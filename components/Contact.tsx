"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, Linkedin, Github, CheckCircle, Loader2 } from "lucide-react";

const socialLinks = [
  { icon: Mail, label: "Email", value: "rainglusman@gmail.com", href: "mailto:rainglusman@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/feed", href: "https://www.linkedin.com/feed" },
  { icon: Github, label: "GitHub", value: "github.com/Rainez", href: "https://github.com/Rainez" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setFormState("success");
    } catch {
      setFormState("error");
    }
  };

  return (
    <section id="contact" ref={ref} className="relative py-28 overflow-hidden">
      {/* BG glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-indigo-600/8 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
          variants={fadeUp}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-xs font-mono font-medium text-indigo-400 tracking-widest uppercase">
            Contact
          </span>
          <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-indigo-500/50 to-transparent" />
        </motion.div>

        <motion.h2
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          variants={fadeUp}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Let&apos;s{" "}
          <span className="gradient-text">work together</span>
        </motion.h2>

        <motion.p
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={2}
          variants={fadeUp}
          className="text-slate-500 text-base max-w-xl mb-16"
        >
          Have a project in mind or want to chat about frontend engineering?
          I&apos;m always open to interesting conversations and collaborations.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={3}
            variants={fadeUp}
          >
            {formState === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-2xl p-10 flex flex-col items-center justify-center text-center h-full min-h-[340px]"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                  <CheckCircle size={26} className="text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message sent!</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                  Thanks for reaching out. I&apos;ll get back to you within 1–2 business days.
                </p>
                <button
                  onClick={() => { setFormState("idle"); setForm({ name: "", email: "", message: "" }); }}
                  className="mt-6 px-5 py-2 rounded-xl text-sm text-indigo-400 border border-indigo-500/30 hover:bg-indigo-500/10 transition-colors"
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 space-y-5" suppressHydrationWarning>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-400" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all duration-200"
                      suppressHydrationWarning
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-400" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all duration-200"
                      suppressHydrationWarning
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-400" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all duration-200 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={formState === "loading"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm text-white disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
                  style={{ background: "linear-gradient(135deg, #6366f1, #a855f7)" }}
                >
                  {formState === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send message
                    </>
                  )}
                </motion.button>
                {formState === "error" && (
                  <p className="text-xs text-red-400 text-center mt-2">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </motion.div>

          {/* Right side — info */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={4}
            variants={fadeUp}
            className="space-y-6"
          >
            {/* Availability card */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Available for hire</p>
                  <p className="text-xs text-slate-500">Currently accepting new projects</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                I&apos;m open to freelance projects, full-time remote roles, and technical
                consulting engagements. Typical response time is within 24 hours.
              </p>
            </div>

            {/* Social links */}
            <address className="not-italic glass rounded-2xl p-6 space-y-4">
              <p className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-4">
                Reach me directly
              </p>
              <ul role="list" className="space-y-4">
                {socialLinks.map(({ icon: Icon, label, value, href }) => (
                  <li key={label}>
                    <motion.a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3.5 group"
                    >
                      <div aria-hidden="true" className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/20 group-hover:border-indigo-500/40 transition-all duration-200 shrink-0">
                        <Icon size={15} className="text-indigo-400" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-600">{label}</p>
                        <p className="text-sm text-slate-300 group-hover:text-indigo-300 transition-colors">
                          {value}
                        </p>
                      </div>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </address>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
