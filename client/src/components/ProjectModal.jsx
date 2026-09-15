import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaGithub, FaExternalLinkAlt, FaCheckCircle, FaCode } from "react-icons/fa";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          className="glass-card relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-2xl dark:border-white/10 dark:bg-slate-900/95 md:p-8"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-slate-100 text-slate-600 transition hover:bg-slate-200 dark:border-white/10 dark:bg-white/10 dark:text-slate-300 dark:hover:bg-white/20 clickable"
            aria-label="Close modal"
          >
            <FaTimes />
          </button>

          {/* Header */}
          <div className="pr-10">
            <span className="inline-flex rounded-full border border-brand-indigo/20 bg-brand-indigo/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-brand-indigo dark:text-brand-cyan">
              {project.tagline}
            </span>
            <h2 className="mt-3 font-display text-2xl font-black text-slate-950 dark:text-white md:text-3xl">
              {project.title}
            </h2>
          </div>

          {/* Description */}
          <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {project.description}
          </p>

          {/* Key Features */}
          <div className="mt-6 border-t border-slate-200 pt-5 dark:border-white/10">
            <h3 className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-brand-indigo dark:text-brand-cyan">
              <FaCheckCircle className="text-brand-teal" /> Key Technical Capabilities
            </h3>
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {project.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Badges */}
          <div className="mt-6 border-t border-slate-200 pt-5 dark:border-white/10">
            <h3 className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              <FaCode /> Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="mt-8 flex flex-wrap items-center justify-end gap-3 border-t border-slate-200 pt-6 dark:border-white/10">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-xs font-extrabold text-slate-800 shadow-sm transition hover:bg-slate-100 dark:border-white/10 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 clickable"
            >
              <FaGithub className="text-sm" /> View Source Code
            </a>
            {project.demo && project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-btn flex items-center gap-2 rounded-xl bg-brand-indigo px-5 py-2.5 text-xs font-extrabold text-white shadow-lg shadow-brand-indigo/30 transition hover:scale-105 active:scale-95 clickable"
              >
                <FaExternalLinkAlt className="text-xs" /> Live Demo
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
