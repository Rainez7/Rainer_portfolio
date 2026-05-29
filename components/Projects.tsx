"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Star, GitFork } from "lucide-react";

const projects = [
  {
    title: "Bazhane",
    description:
      "A modern, component-based luxury e-commerce frontend built on a React/Next.js-style framework, likely powered by a headless Shopify backend, optimised for performance, visual storytelling, and conversion.",
    image: "/Bazhane.png",
    color: "from-teal-500/20 to-green-600/20",
    accent: "#14b8a6",
    glow: "rgba(20,184,166,0.15)",
    tech: ["React", "Next.js", "HTML5 / CSS3", "jQuery", "PHP", "Node.js", "NestJS", "MySQL", "PostgreSQL"],
    github: "#",
    live: "https://bazhane.com.ua/en/",
    stars: 91,
    forks: 17,
    featured: true,
  },
  {
    title: "Guzema",
    description:
      "The site is a highly visual, product-focused e-commerce interface built on a decoupled commerce architecture, where the frontend is separated from the backend commerce engine (likely Shopify). The frontend behaves like a React-based single-page application with server-side rendering for SEO, optimised for fast product browsing and image-heavy storytelling.",
    image: "/Guzema.png",
    color: "from-rose-500/20 to-orange-600/20",
    accent: "#f43f5e",
    glow: "rgba(244,63,94,0.15)",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Shopify"],
    github: "#",
    live: "https://guzema.com/",
    stars: 74,
    forks: 13,
    featured: true,
  },
  {
    title: "Kings rental car",
    description:
      "Built and maintained a responsive car rental booking website with features for vehicle search, filtering, and reservations. Developed dynamic UI components, integrated APIs for real-time availability and pricing, and ensured mobile responsiveness and cross-browser compatibility. Focused on performance optimization and improving overall user experience.",
    image: "/kingsrentalcars.png",
    color: "from-rose-500/20 to-orange-600/20",
    accent: "#f43f5e",
    glow: "rgba(244,63,94,0.15)",
    tech: ["HTML5 / CSS3", "jQuery", "JavaScript", "React", "PHP", "MySQL", "Next.js"],
    github: "#",
    live: "https://kingsrentalcars.com/en",
    stars: 74,
    forks: 13,
    featured: true,
  },
  {
    title: "PRYA",
    description:
      "The website is focused on affordable luxury, jewellery, and fashion accessories. Technically, it is a heavily optimised Shopify storefront designed for high-volume social commerce traffic from Instagram, TikTok, and paid ads.",
    image: "/praya.png",
    color: "from-violet-500/20 to-fuchsia-600/20",
    accent: "#8b5cf6",
    glow: "rgba(139,92,246,0.15)",
    tech: ["Shopify", "JavaScript", "React", "jQuery", "Swiper.js", "core-js"],
    github: "#",
    live: "https://prya.co.uk/",
    stars: 0,
    forks: 0,
    featured: true,
  },
  {
    title: "Verholy",
    description:
      "The website combines high-performance frontend development, mobile-friendly architecture, secure booking systems, API integrations, and optimised user journeys to create a premium online presence for a luxury resort and spa destination.",
    image: "/Formify.png",
    color: "from-purple-500/20 to-pink-600/20",
    accent: "#a855f7",
    glow: "rgba(168,85,247,0.15)",
    tech: ["HTML5", "CSS3", "JavaScript", "React", "WordPress", "PHP", "jQuery", "MySQL"],
    github: "#",
    live: "https://verholy.com/en/",
    stars: 512,
    forks: 71,
    featured: false,
  },
  {
    title: "Namastarryn",
    description:
      "Modern wellness and yoga subscription website built as a conversion-focused landing experience for a personal brand. The site promotes online yoga, breathwork, meditation, and movement coaching through a membership product.",
    image: "/namastarryn.png",
    color: "from-emerald-500/20 to-teal-600/20",
    accent: "#10b981",
    glow: "rgba(16,185,129,0.15)",
    tech: ["HTML5", "JavaScript", "Next.js", "React", "Tailwind CSS", "Stripe"],
    github: "#",
    live: "https://namastarryn.com/",
    stars: 189,
    forks: 22,
    featured: false,
  },
  {
    title: "Taryan",
    description:
      "The project is built on a monolithic CMS architecture (1C-Bitrix) where the frontend is tightly coupled with server-side PHP templates. Pages are rendered on the server and delivered as fully formed HTML, with JavaScript used mainly for progressive enhancement.",
    image: "/Tarjan.png",
    color: "from-indigo-500/20 to-sky-600/20",
    accent: "#6366f1",
    glow: "rgba(99,102,241,0.15)",
    tech: ["JavaScript", "jQuery", "HTML5/CSS3", "Bootstrap", "Swiper", "PHP", "MySQL"],
    github: "#",
    live: "https://www.taryangroup.com/",
    stars: 58,
    forks: 11,
    featured: false,
  },
  {
    title: "Silverskin",
    description:
      "Developed and maintained an e-commerce coffee brand platform. Implemented responsive UI components, online store functionality, SEO optimisation, analytics integration, and performance enhancements to deliver a scalable and user-friendly shopping experience across devices.",
    image: "/silverskincoffe.png",
    color: "from-orange-500/20 to-rose-600/20",
    accent: "#f97316",
    glow: "rgba(249,115,22,0.15)",
    tech: ["JavaScript", "jQuery", "PHP", "MySQL", "WordPress", "WooCommerce", "Bootstrap", "Cloudflare", "Google Analytics"],
    github: "#",
    live: "https://silverskincoffee.ie/",
    stars: 97,
    forks: 15,
    featured: false,
  },
  {
    title: "Raisky",
    description:
      "Luxury travel concierge platform, building responsive and user-friendly interfaces for bespoke travel services. Developed UI components for service pages, enquiry forms, and travel packages, ensuring smooth navigation and high-quality user experience.",
    image: "/raisky.png",
    color: "from-cyan-500/20 to-blue-600/20",
    accent: "#06b6d4",
    glow: "rgba(6,182,212,0.15)",
    tech: ["HTML5 / CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS", "REST API"],
    github: "#",
    live: "https://raisky.travel/en/",
    stars: 143,
    forks: 19,
    featured: false,
  },
  {
    title: "SH",
    description:
      "The website is a fairly standard Shopify Liquid storefront with a heavily theme-driven UI layer, enhanced by performance scripts and marketing integrations.",
    image: "/sh.png",
    color: "from-emerald-500/20 to-teal-600/20",
    accent: "#10b981",
    glow: "rgba(16,185,129,0.15)",
    tech: ["Shopify", "Shopify Liquid", "JavaScript", "LazySizes", "CDN", "Shopify Checkout"],
    github: "#",
    live: "https://www.shjewellery.com.au/",
    stars: 189,
    forks: 22,
    featured: false,
  },
  {
    title: "Puzzleslide",
    description:
      "Developed an interactive puzzle game web application. Implemented responsive UI components, dynamic game logic, optimised state management, and cloud deployment on Vercel to deliver a fast and engaging user experience.",
    image: "/puzzleslide.png",
    color: "from-cyan-500/20 to-blue-600/20",
    accent: "#06b6d4",
    glow: "rgba(6,182,212,0.15)",
    tech: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Vercel"],
    github: "#",
    live: "https://puzzleslide.vercel.app/",
    stars: 143,
    forks: 19,
    featured: false,
  },
  {
    title: "Forecast",
    description:
      "Real-time weather application with dark mode support, accurate live forecasts, and responsive user interface design. Built with modern frontend technologies to provide current weather conditions, hourly updates, location-based forecasting, temperature tracking, humidity, wind speed, and dynamic weather visuals.",
    image: "/forecast.png",
    color: "from-violet-500/20 to-fuchsia-600/20",
    accent: "#8b5cf6",
    glow: "rgba(139,92,246,0.15)",
    tech: ["React.js", "Tailwind CSS", "Context API", "OpenWeather API"],
    github: "#",
    live: "https://main--sky-update.netlify.app/",
    stars: 376,
    forks: 48,
    featured: false,
  },
  {
    title: "Luxury for you",
    description:
      "Built and maintained frontend features for a luxury fashion e-commerce website using modern web technologies, focusing on responsive design, performance optimisation, reusable UI components, accessibility, and seamless user experience across desktop and mobile devices.",
    image: "/luxuryforyou.png",
    color: "from-indigo-500/20 to-purple-600/20",
    accent: "#6366f1",
    glow: "rgba(99,102,241,0.15)",
    tech: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Magento", "PHP"],
    github: "#",
    live: "https://luxuryforyou.com/gb_en",
    stars: 248,
    forks: 34,
    featured: false,
  },
  {
    title: "Fraser",
    description:
      "Built and maintained frontend features for a luxury fashion e-commerce website using modern web technologies, focusing on responsive design, performance optimisation, reusable UI components, accessibility, and seamless user experience across desktop and mobile devices.",
    image: "/fraser.png",
    color: "from-indigo-500/20 to-purple-600/20",
    accent: "#6366f1",
    glow: "rgba(99,102,241,0.15)",
    tech: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Magento", "PHP"],
    github: "#",
    live: "https://www.fraseryachts.com/",
    stars: 248,
    forks: 34,
    featured: false,
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [showAll, setShowAll] = useState(true);

  const visibleProjects = showAll ? projects : projects.filter((p) => p.featured);

  return (
    <section id="projects" ref={ref} className="relative py-28 overflow-hidden">
      {/* BG glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-indigo-600/6 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-xs font-mono font-medium text-indigo-400 tracking-widest uppercase">
            Projects
          </span>
          <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-indigo-500/50 to-transparent" />
        </motion.div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
          >
            Selected work
          </motion.h2>

        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.article
                key={project.title}
                variants={item}
                layout
                exit={{ opacity: 0, scale: 0.94 }}
                className="group relative glass rounded-2xl overflow-hidden hover:border-white/[0.12] transition-all duration-300 flex flex-col"
                whileHover={{
                  y: -4,
                  boxShadow: `0 20px 60px ${project.glow}`,
                  transition: { duration: 0.25 },
                }}
              >
                {/* Card header / visual */}
                <div
                  className={`relative h-36 bg-gradient-to-br ${project.color} overflow-hidden`}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black text-white/20 border border-white/10"
                        style={{ background: `${project.accent}20` }}
                      >
                        {project.title.slice(0, 2)}
                      </div>
                    </div>
                  )}
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent" />

                  {/* Hover overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/30 flex items-center justify-center gap-3 backdrop-blur-sm"
                  >

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
                        aria-label="Live demo"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </motion.div>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-base font-bold text-white group-hover:text-indigo-200 transition-colors">
                      {project.title}
                    </h3>
                    <dl className="flex items-center gap-3 shrink-0">
                      <div className="flex items-center gap-1 text-[11px] text-slate-500">
                        <Star size={11} className="text-amber-400/70" aria-hidden="true" />
                        <dt className="sr-only">Stars</dt>
                        <dd>{project.stars}</dd>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-slate-500">
                        <GitFork size={11} aria-hidden="true" />
                        <dt className="sr-only">Forks</dt>
                        <dd>{project.forks}</dd>
                      </div>
                    </dl>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed flex-1 mb-4">
                    {project.description}
                  </p>

                  <ul role="list" aria-label="Technologies used" className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <li key={t} className="tag text-[10px] py-0.5">{t}</li>
                    ))}
                  </ul>
                </div>

                {/* Mobile full-card link */}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10 md:hidden"
                    aria-label={`Open ${project.title}`}
                  />
                )}

                {/* Hover glow overlay */}
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 bg-gradient-to-b ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl`}
                />
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
