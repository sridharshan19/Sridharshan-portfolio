import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaExternalLinkAlt, FaGithub, FaJava, FaJs, FaReact, FaNodeJs, FaBootstrap, FaHtml5, FaCss3Alt, FaChartLine, FaCreditCard } from "react-icons/fa";
import { SiSpringboot, SiMongodb, SiMysql, SiExpress, SiTailwindcss, SiVite } from "react-icons/si";

function getTechIcon(tech) {
  const t = tech.toLowerCase();
  if (t.includes("java") && !t.includes("javascript")) return <FaJava className="text-red-500 text-xs" />;
  if (t.includes("javascript") || t === "js") return <FaJs className="text-yellow-500 text-xs" />;
  if (t.includes("react")) return <FaReact className="text-cyan-400 text-xs animate-spin-slow" style={{ animationDuration: "12s" }} />;
  if (t.includes("springboot") || t.includes("spring boot") || t.includes("spring")) return <SiSpringboot className="text-green-500 text-xs" />;
  if (t.includes("mysql")) return <SiMysql className="text-blue-500 text-xs" />;
  if (t.includes("mongodb") || t === "mongo") return <SiMongodb className="text-green-600 text-xs" />;
  if (t.includes("node")) return <FaNodeJs className="text-green-500 text-xs" />;
  if (t.includes("express")) return <SiExpress className="text-slate-400 text-xs" />;
  if (t.includes("tailwind")) return <SiTailwindcss className="text-cyan-500 text-xs" />;
  if (t.includes("bootstrap")) return <FaBootstrap className="text-purple-600 text-xs" />;
  if (t.includes("vite")) return <SiVite className="text-purple-500 text-xs" />;
  if (t.includes("html")) return <FaHtml5 className="text-orange-500 text-xs" />;
  if (t.includes("css")) return <FaCss3Alt className="text-blue-500 text-xs" />;
  if (t.includes("recharts")) return <FaChartLine className="text-blue-400 text-xs" />;
  if (t.includes("razorpay")) return <FaCreditCard className="text-blue-600 text-xs" />;
  return null;
}

export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: -(mouseY / (rect.height / 2)) * 7,
      y: (mouseX / (rect.width / 2)) * 7
    });
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="glass-card glow-border group relative flex h-full flex-col overflow-hidden p-7 md:p-8"
      style={{
        transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: tilt.x === 0 ? "transform 0.45s ease" : "none"
      }}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
    >
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-brand-cyan/10 blur-2xl transition group-hover:bg-brand-pink/15" />

      <div className="relative z-10 flex items-start justify-between gap-4">
        <div>
          <span className="inline-flex rounded-full border border-brand-indigo/20 bg-brand-indigo/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-brand-indigo dark:text-brand-cyan">
            {project.tagline}
          </span>
          <h3 className="mt-5 font-display text-2xl font-black tracking-tight text-slate-950 transition group-hover:text-brand-indigo dark:text-white dark:group-hover:text-brand-cyan">
            {project.title}
          </h3>
        </div>

        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-slate-950 text-lg font-black text-white shadow-lg shadow-slate-950/10 dark:bg-white dark:text-slate-950">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      <p className="relative z-10 mt-5 text-sm leading-7 text-slate-600 dark:text-slate-400">
        {project.description}
      </p>

      <div className="relative z-10 mt-7">
        <h4 className="mb-3 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          Key features
        </h4>
        <ul className="grid gap-2 sm:grid-cols-2">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative z-10 mt-8 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-slate-200 bg-white/60 dark:border-white/10 dark:bg-white/5 px-3 py-1.5 text-[11px] font-extrabold text-slate-600 dark:text-slate-300 flex items-center gap-1.5"
          >
            {getTechIcon(tech)}
            {tech}
          </span>
        ))}
      </div>

      <div className="relative z-10 mt-auto flex items-center justify-between border-t border-slate-200 pt-6 dark:border-white/10">
        <div className="flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 bg-white/70 text-slate-600 transition hover:-translate-y-1 hover:text-brand-indigo dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-brand-cyan clickable"
            title="View GitHub repository"
          >
            <FaGithub />
          </a>
          {project.demo && project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 bg-white/70 text-slate-600 transition hover:-translate-y-1 hover:text-brand-indigo dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-brand-cyan clickable"
              title="Launch live demo"
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
        <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-brand-indigo dark:text-brand-cyan">
          Case study <FaArrowRight className="text-[10px]" />
        </span>
      </div>
    </motion.article>
  );
}
