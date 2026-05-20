"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Coffee, Code2, Heart, BarChart2 } from "lucide-react";

const stats = [
  { value: "6+", label: "Years of Experience" },
  { value: "10+", label: "Cross-border team collaboration" },
  { value: "40+", label: "Product launches delivered" },
  { value: null, icon: BarChart2, label: "Focused on SEO and performance" },
];

const highlights = [
  { icon: Code2, text: "Clean, maintainable code" },
  { icon: Heart, text: "Passionate about AI" },
  { icon: Coffee, text: "Remote-first mindset" },
  { icon: MapPin, text: "Based in UK" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-28 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-y-1/2 rounded-full bg-indigo-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
          variants={fadeUp}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-xs font-mono font-medium text-indigo-400 tracking-widest uppercase">
            About
          </span>
          <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-indigo-500/50 to-transparent" />
        </motion.div>

        <motion.h2
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          variants={fadeUp}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-16"
        >
          A bit about me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — bio */}
          <div className="space-y-6">
            <motion.p
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={2}
              variants={fadeUp}
              className="text-base sm:text-lg text-slate-400 leading-relaxed"
            >
              I&apos;m a frontend-focused software engineer with{" "}
              6+ years of
              experience building fast, accessible, and beautiful web
              applications. I specialise in React and modern TypeScript ecosystems.
            </motion.p>

            <motion.p
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={3}
              variants={fadeUp}
              className="text-base text-slate-500 leading-relaxed"
            >
              Currently working part-time while taking on select freelance
              projects. I care deeply about performance, design systems, and the
              craft of turning complex problems into elegant, intuitive
              interfaces.
            </motion.p>

            <motion.p
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={4}
              variants={fadeUp}
              className="text-base text-slate-500 leading-relaxed"
            >
              When I&apos;m not coding, you&apos;ll find me reading about
              distributed systems, contributing to open-source projects, or
              experimenting with new frontend technologies.
            </motion.p>

          </div>

          {/* Right — stats + globe visual */}
          <div className="space-y-6">
            {/* Stats grid */}
            <dl className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  custom={i + 3}
                  variants={fadeUp}
                  className="glass glass-hover rounded-2xl p-5 group"
                >
                  <dd className="text-3xl sm:text-4xl font-extrabold gradient-text mb-1">
                    {"icon" in stat && stat.icon
                      ? <stat.icon size={36} className="text-indigo-400" />
                      : stat.value}
                  </dd>
                  <dt className="text-xs text-slate-500 font-medium">{stat.label}</dt>
                </motion.div>
              ))}
            </dl>

          </div>
        </div>
      </div>
    </section>
  );
}
