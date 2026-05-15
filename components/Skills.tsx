"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    color: "indigo",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS", level: 94 },
      { name: "Framer Motion", level: 88 },
      { name: "GraphQL", level: 80 },
    ],
  },
  {
    title: "Backend & Tools",
    color: "purple",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "PostgreSQL", level: 75 },
      { name: "Prisma / Drizzle", level: 78 },
      { name: "Docker", level: 70 },
      { name: "AWS / Vercel", level: 76 },
    ],
  },
  {
    title: "Design & Process",
    color: "pink",
    skills: [
      { name: "Figma", level: 88 },
      { name: "Design Systems", level: 85 },
      { name: "Accessibility (a11y)", level: 82 },
      { name: "Agile / Scrum", level: 90 },
      { name: "Performance Opt.", level: 87 },
    ],
  },
];

const techTags = [
  "React", "Next.js", "TypeScript", "JavaScript", "Node.js",
  "Tailwind CSS", "Framer Motion", "GraphQL", "REST APIs", "PostgreSQL",
  "Prisma", "Redis", "Docker", "AWS", "Vercel", "Git", "Figma",
  "Vitest", "Playwright", "Storybook", "Zustand", "React Query",
  "tRPC", "Zod", "dnd-kit", "Radix UI", "shadcn/ui",
];

const colorMap: Record<string, { bar: string; glow: string; tag: string }> = {
  indigo: {
    bar: "from-indigo-500 to-indigo-400",
    glow: "rgba(99,102,241,0.25)",
    tag: "bg-indigo-500/10 border-indigo-500/20 text-indigo-300",
  },
  purple: {
    bar: "from-purple-500 to-purple-400",
    glow: "rgba(168,85,247,0.25)",
    tag: "bg-purple-500/10 border-purple-500/20 text-purple-300",
  },
  pink: {
    bar: "from-pink-500 to-pink-400",
    glow: "rgba(236,72,153,0.25)",
    tag: "bg-pink-500/10 border-pink-500/20 text-pink-300",
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="relative py-28 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full bg-purple-600/5 blur-[130px] pointer-events-none" />

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
            Skills
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
          My{" "}
          <span className="gradient-text">toolkit</span>
        </motion.h2>

        {/* Skill bars */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((cat, ci) => {
            const colors = colorMap[cat.color];
            return (
              <motion.section
                key={cat.title}
                aria-labelledby={`skill-cat-${ci}`}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={ci + 2}
                variants={fadeUp}
                className="glass rounded-2xl p-6 hover:border-white/[0.12] transition-all duration-300"
                style={{
                  boxShadow: inView ? `0 0 40px ${colors.glow}` : "none",
                  transition: "box-shadow 1s ease",
                }}
              >
                <h3 id={`skill-cat-${ci}`} className="text-sm font-bold text-white mb-5">{cat.title}</h3>
                <ul role="list" className="space-y-4">
                  {cat.skills.map((skill, si) => (
                    <li key={skill.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs text-slate-400 font-medium">{skill.name}</span>
                        <span className="text-xs text-slate-600 font-mono" aria-hidden="true">{skill.level}%</span>
                      </div>
                      <div
                        role="progressbar"
                        aria-label={skill.name}
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        className="h-1.5 rounded-full bg-white/[0.05] overflow-hidden"
                      >
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${colors.bar}`}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            delay: ci * 0.1 + si * 0.07 + 0.4,
                            duration: 0.9,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.section>
            );
          })}
        </div>

        {/* Tech tag cloud */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={6}
          variants={fadeUp}
        >
          <p className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-5">
            Technologies I work with
          </p>
          <ul role="list" aria-label="Technologies" className="flex flex-wrap gap-2">
            {techTags.map((tag, i) => (
              <motion.li
                key={tag}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.025, duration: 0.35 }}
                whileHover={{ scale: 1.06, y: -2 }}
                className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium cursor-default
                  bg-white/[0.03] border border-white/[0.07] text-slate-400
                  hover:bg-indigo-500/[0.1] hover:border-indigo-500/30 hover:text-indigo-300
                  transition-all duration-200"
              >
                {tag}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
