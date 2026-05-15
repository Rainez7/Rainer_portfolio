"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/Rainez", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/feed", label: "LinkedIn" },
  { icon: Mail, href: "mailto:rainglusman@gmail.com", label: "Email" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/[0.06] overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 group"
              suppressHydrationWarning
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-indigo-500/20">
                R
              </div>
              <span className="font-semibold text-white/80 group-hover:text-white transition-colors">
                Rainer<span className="text-indigo-400">.</span>
              </span>
            </button>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social + scroll to top */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-white border border-white/[0.06] hover:border-indigo-500/30 hover:bg-indigo-500/[0.08] transition-all duration-200"
                >
                  <Icon size={15} />
                </motion.a>
              ))}

              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Back to top"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-white border border-white/[0.06] hover:border-indigo-500/30 hover:bg-indigo-500/[0.08] transition-all duration-200 ml-1"
              >
                <ArrowUp size={15} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/[0.04] flex items-center justify-center">
          <small className="text-xs text-slate-600 not-italic">
            © 2022 Rainer Glusman. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}
