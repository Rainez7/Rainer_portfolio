"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Smartphone, Monitor, Palette } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Full-stack web applications built with Next.js, React, and TypeScript. From landing pages to complex SaaS platforms — performant, accessible, and scalable.",
    features: ["Next.js / React", "REST & GraphQL APIs", "Performance & SEO", "CI/CD pipelines"],
    gradient: "from-indigo-500/20 to-blue-600/20",
    glow: "rgba(99,102,241,0.15)",
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/10 border-indigo-500/20",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Cross-platform mobile apps with React Native that feel truly native. Shared codebase across iOS and Android without compromising on quality or UX.",
    features: ["React Native", "iOS & Android", "Expo managed workflow", "App Store deployment"],
    gradient: "from-purple-500/20 to-violet-600/20",
    glow: "rgba(168,85,247,0.15)",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10 border-purple-500/20",
  },
  {
    icon: Monitor,
    title: "Desktop Development",
    description:
      "Cross-platform desktop apps using Electron and Tauri. Bring web technologies to the desktop with native OS integrations and offline capabilities.",
    features: ["Electron / Tauri", "Windows, Mac, Linux", "Native OS APIs", "Auto-updates"],
    gradient: "from-cyan-500/20 to-teal-600/20",
    glow: "rgba(6,182,212,0.15)",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10 border-cyan-500/20",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "End-to-end product design from wireframes to polished high-fidelity prototypes. Design systems, component libraries, and user research-driven interfaces.",
    features: ["Figma prototyping", "Design systems", "User research", "Component libraries"],
    gradient: "from-pink-500/20 to-rose-600/20",
    glow: "rgba(236,72,153,0.15)",
    iconColor: "text-pink-400",
    iconBg: "bg-pink-500/10 border-pink-500/20",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const card = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      ref={ref}
      aria-labelledby="services-heading"
      className="relative py-28 overflow-hidden"
    >
      {/* BG glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-indigo-600/5 blur-[130px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-xs font-mono font-medium text-indigo-400 tracking-widest uppercase">
            Services
          </span>
          <div aria-hidden="true" className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-indigo-500/50 to-transparent" />
        </motion.div>

        <motion.h2
          id="services-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5"
        >
          What I&apos;m{" "}
          <span className="gradient-text">doing</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-slate-500 text-base max-w-xl mb-16"
        >
          I cover the full spectrum of front end development with a strong focus on quality and user experience.
        </motion.p>

        {/* Service cards grid */}
        <motion.ul
          role="list"
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.li
                key={service.title}
                variants={card}
                className="group relative glass rounded-2xl overflow-hidden hover:border-white/[0.12] transition-all duration-300 flex flex-col"
                style={{ "--glow": service.glow } as React.CSSProperties}
                whileHover={{
                  y: -4,
                  boxShadow: `0 20px 60px ${service.glow}`,
                  transition: { duration: 0.25 },
                }}
              >
                {/* Top gradient band */}
                <div
                  aria-hidden="true"
                  className={`h-1 w-full bg-gradient-to-r ${service.gradient.replace("/20", "")} opacity-60`}
                />

                <div className="p-6 flex flex-col flex-1">
                  {/* Icon */}
                  <div
                    className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-5 ${service.iconBg} transition-transform duration-300 group-hover:scale-110`}
                    aria-hidden="true"
                  >
                    <Icon size={20} className={service.iconColor} />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white mb-3 group-hover:text-indigo-100 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-500 leading-relaxed mb-5 flex-1">
                    {service.description}
                  </p>

                  {/* Feature list */}
                  <ul role="list" aria-label={`${service.title} features`} className="space-y-2">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-xs text-slate-400">
                        <span
                          aria-hidden="true"
                          className={`w-1.5 h-1.5 rounded-full shrink-0 ${service.iconColor.replace("text-", "bg-")}`}
                        />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover glow overlay */}
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 bg-gradient-to-b ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl`}
                />
              </motion.li>
            );
          })}
        </motion.ul>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-slate-500 mb-4">
            Need something not listed above?
          </p>
          <motion.a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium text-indigo-300 border border-indigo-500/30 hover:border-indigo-500/60 hover:bg-indigo-500/[0.08] hover:text-indigo-200 transition-all duration-300"
          >
            Let&apos;s talk
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
