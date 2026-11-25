import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaChartLine,
  FaCss3Alt,
  FaExternalLinkAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaReact,
  FaRobot,
  FaSms
} from "react-icons/fa";
import {
  SiBrevo,
  SiDocker,
  SiExpress,
  SiFramer,
  SiGoogle,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiRazorpay,
  SiSpringboot,
  SiSpringsecurity,
  SiTailwindcss,
  SiTypescript,
  SiVite
} from "react-icons/si";

function getTechIcon(tech) {
  const t = tech.toLowerCase();
  if (t.includes("next")) return <SiNextdotjs className="text-slate-800 dark:text-[#F8FAFC] text-xs" />;
  if (t.includes("typescript")) return <SiTypescript className="text-[#3B82F6] text-xs" />;
  if (t.includes("java") && !t.includes("javascript")) return <FaJava className="text-orange-400 text-xs" />;
  if (t.includes("javascript") || t === "js") return <FaJs className="text-yellow-400 text-xs" />;
  if (t.includes("react")) return <FaReact className="text-[#22D3EE] text-xs" />;
  if (t.includes("spring security")) return <SiSpringsecurity className="text-emerald-400 text-xs" />;
  if (t.includes("spring")) return <SiSpringboot className="text-emerald-400 text-xs" />;
  if (t.includes("mysql")) return <SiMysql className="text-[#3B82F6] text-xs" />;
  if (t.includes("mongo")) return <SiMongodb className="text-emerald-400 text-xs" />;
  if (t.includes("node")) return <FaNodeJs className="text-emerald-400 text-xs" />;
  if (t.includes("express")) return <SiExpress className="text-slate-300 text-xs" />;
  if (t.includes("tailwind")) return <SiTailwindcss className="text-[#22D3EE] text-xs" />;
  if (t.includes("vite")) return <SiVite className="text-[#8B5CF6] text-xs" />;
  if (t.includes("html")) return <FaHtml5 className="text-orange-500 text-xs" />;
  if (t.includes("css")) return <FaCss3Alt className="text-[#3B82F6] text-xs" />;
  if (t.includes("recharts")) return <FaChartLine className="text-[#3B82F6] text-xs" />;
  if (t.includes("razorpay")) return <SiRazorpay className="text-[#3B82F6] text-xs" />;
  if (t.includes("google")) return <SiGoogle className="text-rose-400 text-xs" />;
  if (t.includes("brevo")) return <SiBrevo className="text-emerald-400 text-xs" />;
  if (t.includes("framer")) return <SiFramer className="text-[#8B5CF6] text-xs" />;
  if (t.includes("jwt") || t.includes("security")) return <SiJsonwebtokens className="text-amber-400 text-xs" />;
  if (t.includes("ai") || t.includes("copilot")) return <FaRobot className="text-[#22D3EE] text-xs" />;
  if (t.includes("docker")) return <SiDocker className="text-[#3B82F6] text-xs" />;
  if (t.includes("twilio") || t.includes("sms")) return <FaSms className="text-rose-400 text-xs" />;
  return null;
}

export default function ProjectCard({ project, index, onSelect }) {
  const hasDemo = Boolean(project.demo && project.demo !== "#");

  return (
    <motion.article
      className="glass-card glow-border group relative flex h-full flex-col overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -5 }}
    >
      {/* Futuristic Visual Header / Banner */}
      <div className="relative h-40 w-full overflow-hidden border-b border-slate-200 dark:border-[rgba(148,163,184,0.15)] bg-gradient-to-br from-[#0D1220] via-[#111827] to-[#151D2E] p-6">
        <div className="grid-backdrop absolute inset-0 opacity-60 transition-transform duration-500 group-hover:scale-105" />
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#3B82F6]/20 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
        <div className="pointer-events-none absolute -bottom-10 left-8 h-32 w-32 rounded-full bg-[#8B5CF6]/20 blur-2xl" />

        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex items-center justify-between gap-3">
            <span className="inline-flex items-center rounded-full border border-[#3B82F6]/35 bg-[#3B82F6]/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#22D3EE]">
              {project.tagline}
            </span>
            <span className="font-mono text-xs font-bold text-[#94A3B8]">
              #{String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-[rgba(148,163,184,0.2)] bg-[#080B14]/90 text-2xl shadow-lg transition-transform duration-500 group-hover:scale-110">
              {project.icon || "💻"}
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#F8FAFC] transition-colors group-hover:text-[#22D3EE]">
              {project.title}
            </h3>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <p className="text-sm leading-relaxed text-slate-600 dark:text-[#94A3B8]">
          {project.description}
        </p>

        <div className="mt-5">
          <h4 className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-[#94A3B8]">
            Key Capabilities
          </h4>
          <ul className="grid gap-1.5 sm:grid-cols-2">
            {project.features.slice(0, 4).map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-xs font-medium text-slate-700 dark:text-[#F8FAFC]/90">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#22D3EE]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Badges */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-slate-200 bg-slate-100/80 dark:border-[rgba(148,163,184,0.15)] dark:bg-[#0D1220] px-2.5 py-1 text-[11px] font-semibold text-slate-700 dark:text-[#94A3B8] flex items-center gap-1.5"
            >
              {getTechIcon(tech)}
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-auto pt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 dark:border-[rgba(148,163,184,0.15)]">
          <div className="flex items-center gap-2.5">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-100 px-3.5 py-2 text-xs font-semibold text-slate-800 transition hover:border-[#3B82F6]/50 hover:text-[#3B82F6] dark:border-[rgba(148,163,184,0.2)] dark:bg-[#0D1220] dark:text-[#F8FAFC] dark:hover:border-[#22D3EE]/50 dark:hover:text-[#22D3EE] clickable"
            >
              <FaGithub /> GitHub
            </a>

            {hasDemo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] px-3.5 py-2 text-xs font-semibold text-white shadow-[0_0_16px_rgba(59,130,246,0.3)] transition hover:opacity-95 clickable"
              >
                <FaExternalLinkAlt className="text-[10px]" /> Live Demo
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={() => onSelect && onSelect(project)}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#3B82F6] dark:text-[#22D3EE] hover:underline clickable"
          >
            Details <FaArrowRight className="text-[10px]" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
