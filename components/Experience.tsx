"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, ExternalLink } from "lucide-react";

const experiences = [
  {
    role: "IT Support Specialist",
    company: "Whitbread company, London, UK",
    url: "#",
    period: "2021 - Present",
    type: "",
    description:
      "Provided first-line technical support for 30+ end users by resolving hardware, software and network issues while managing ServiceNow tickets. Collaborating with Tier 2 teams and maintaining high customer satisfaction with a 90% first-contact resolution rate.",
    tech: ["ServiceNow", "macOS", "Linux", "Cisco AnyConnect", "Windows Server"],
  },
  {
    role: "Web Developer",
    company: "Fiverr Freelancer",
    url: "#",
    period: "2018 - 2021",
    type: "",
    description:
      "Built responsive, accessible web apps for clients across fintech and e-commerce. Developed a custom component library that reduced development time by 30%. Collaborated closely with design and backend teams in an agile environment.",
    tech: ["React", "Javascript", "PHP", "Tailwind CSS", "Node.js"],
  },
  {
    role: "Junior Front End Developer",
    company: "Civitta company, Tallinn, Estonia",
    url: "#",
    period: "2014 - 2017",
    type: "Contract",
    description:
      "Delivered 15+ websites and web applications for local and international clients. Gained strong foundations in modern HTML/CSS, JavaScript, and performance optimization. Also built mobile-first, SEO-optimized marketing sites.",
    tech: ["JavaScript", "React", "SCSS", "WordPress", "PHP"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="relative py-28 overflow-hidden">
      {/* BG glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2 rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />

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
            Experience
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
          Work history
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — decorative */}
          <div aria-hidden="true" className="absolute left-6 md:left-8 top-0 bottom-0 w-px timeline-line opacity-40" />

          <ol className="space-y-10" aria-label="Work history timeline">
            {experiences.map((exp, i) => (
              <motion.li
                key={exp.company}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={i + 2}
                variants={fadeUp}
                className="relative pl-16 md:pl-20 group"
              >
                {/* Timeline dot — decorative */}
                <div aria-hidden="true" className="absolute left-4 md:left-6 top-5 w-5 h-5 rounded-full bg-[#050510] border-2 border-indigo-500/60 group-hover:border-indigo-400 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors duration-300" />
                </div>

                {/* Card */}
                <article className="glass glass-hover rounded-2xl p-6 md:p-7 group-hover:shadow-[0_0_40px_rgba(99,102,241,0.08)]">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{exp.role}</h3>
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
                      >
                        <Briefcase size={13} aria-hidden="true" />
                        {exp.company}
                        <ExternalLink size={11} className="opacity-60" aria-hidden="true" />
                      </a>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
                      <time className="font-mono text-xs text-slate-500">{exp.period}</time>
                      {exp.type && <span className="tag self-start sm:self-auto">{exp.type}</span>}
                    </div>
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed mb-5">{exp.description}</p>

                  <ul role="list" aria-label="Technologies used" className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <li key={t} className="tag text-[11px]">{t}</li>
                    ))}
                  </ul>
                </article>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Technologies */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={experiences.length + 2}
          variants={fadeUp}
          className="mt-16"
        >
          <p className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-5">
            Technologies I work with
          </p>
          <ul role="list" aria-label="Technologies" className="flex flex-wrap gap-2">
            {[
              "React", "Javascript", "PHP", "Typescript", "Node.js",
              "Tailwind CSS", "Rest APIs", "PostgreSQL", "Docker",
              "Claude", "Cursor", "WordPress/Shopify",
            ].map((tech) => (
              <li
                key={tech}
                className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium cursor-default bg-white/[0.03] border border-white/[0.07] text-slate-400 hover:bg-indigo-500/[0.1] hover:border-indigo-500/30 hover:text-indigo-300 transition-all duration-200"
              >
                {tech}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
