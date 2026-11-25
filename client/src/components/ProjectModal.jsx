import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaTimes, FaGithub, FaExternalLinkAlt, FaCheckCircle, FaCode } from "react-icons/fa";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} details`}
    >
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 bg-[#080B14]/80 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Modal Window */}
      <motion.div
        className="glass-card relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-[rgba(148,163,184,0.2)] dark:bg-[#111827] md:p-8"
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-slate-100 text-slate-600 transition hover:bg-slate-200 dark:border-[rgba(148,163,184,0.2)] dark:bg-[#0D1220] dark:text-[#94A3B8] dark:hover:text-[#F8FAFC] clickable"
          aria-label="Close modal"
        >
          <FaTimes />
        </button>

        {/* Header */}
        <div className="pr-12">
          <span className="inline-flex rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#3B82F6] dark:text-[#22D3EE]">
            {project.tagline}
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold text-slate-950 dark:text-[#F8FAFC] md:text-3xl">
            {project.title}
          </h2>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-[#94A3B8]">
          {project.description}
        </p>

        {/* Key Features */}
        <div className="mt-6 border-t border-slate-200 pt-5 dark:border-[rgba(148,163,184,0.15)]">
          <h3 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#3B82F6] dark:text-[#22D3EE]">
            <FaCheckCircle className="text-[#22D3EE]" /> Key Technical Capabilities
          </h3>
          <ul className="grid gap-2.5 sm:grid-cols-2">
            {project.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs font-medium text-slate-700 dark:text-[#F8FAFC]"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#22D3EE]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Badges */}
        <div className="mt-6 border-t border-slate-200 pt-5 dark:border-[rgba(148,163,184,0.15)]">
          <h3 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-[#94A3B8]">
            <FaCode /> Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-slate-200 bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:border-[rgba(148,163,184,0.15)] dark:bg-[#0D1220] dark:text-[#F8FAFC]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="mt-8 flex flex-wrap items-center justify-end gap-3 border-t border-slate-200 pt-6 dark:border-[rgba(148,163,184,0.15)]">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-xs font-semibold text-slate-800 shadow-sm transition hover:border-[#3B82F6]/50 dark:border-[rgba(148,163,184,0.2)] dark:bg-[#0D1220] dark:text-[#F8FAFC] dark:hover:border-[#22D3EE]/50 clickable"
          >
            <FaGithub className="text-sm" /> View Source Code
          </a>
          {project.demo && project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] px-5 py-2.5 text-xs font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] transition hover:opacity-95 clickable"
            >
              <FaExternalLinkAlt className="text-xs" /> Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}
