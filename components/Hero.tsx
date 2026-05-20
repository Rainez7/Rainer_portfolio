"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";


const floatingCode: { top?: string; left?: string; right?: string; delay: number; text: string }[] = [];

const socialLinks = [
  { icon: Github, href: "https://github.com/Rainez", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/feed", label: "LinkedIn" },
  { icon: Mail, href: "mailto:rainglusman@gmail.com", label: "Email" },
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number; y: number; vx: number; vy: number; size: number; alpha: number;
    }> = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${p.alpha})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      aria-label="Hero — introduction"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Particle canvas — decorative */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.7 }}
      />

      {/* Radial glow — decorative */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-purple-600/8 blur-[100px]" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-pink-600/6 blur-[80px]" />
      </div>

      {/* Floating code snippets — decorative */}
      {floatingCode.map((item, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className="absolute hidden lg:block font-mono text-xs text-indigo-400/20 whitespace-nowrap select-none pointer-events-none"
          style={{ top: item.top, left: item.left, right: item.right }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 + item.delay, duration: 0.8 }}
        >
          {item.text}
        </motion.span>
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
        {/* Status badge */}
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] mb-6"
        >
          <span className="text-white">Rainer </span>
          <br />
          <span className="gradient-text">Glusman</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl font-medium text-slate-400 mb-4"
        >
          Software Engineer{" "}
          <span aria-hidden="true" className="text-indigo-400">·</span>{" "}
          Frontend Specialist
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.62, duration: 0.6 }}
          className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          6+ years of experience building modern web applications, focused on responsive design, fast performance, and strong backend systems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.nav
          aria-label="Primary actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
            whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(99,102,241,0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-white overflow-hidden"
            style={{ background: "linear-gradient(135deg, #6366f1, #a855f7)" }}
          >
            <span className="relative z-10">View Projects</span>
            <ArrowDown size={16} className="relative z-10 transition-transform duration-300 group-hover:translate-y-0.5" />
            <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
        </motion.nav>

        {/* Social links */}
        <motion.address
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="not-italic"
        >
          <ul className="flex items-center justify-center gap-3" role="list">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <li key={label}>
                <motion.a
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.93 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white border border-white/[0.08] hover:border-indigo-500/40 hover:bg-indigo-500/[0.1] transition-all duration-300"
                >
                  <Icon size={18} aria-hidden="true" />
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.address>
      </div>

    </section>
  );
}
