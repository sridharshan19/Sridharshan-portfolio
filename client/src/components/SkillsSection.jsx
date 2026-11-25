import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaPalette,
  FaPython,
  FaReact,
  FaServer
} from "react-icons/fa";
import {
  SiC,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiRailway,
  SiRender,
  SiSpringboot,
  SiTailwindcss,
  SiVercel
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { staggerContainer, staggerItem } from "../animations/motionVariants";

function getSkillIcon(name = "") {
  const n = name.toLowerCase();
  if (n === "java") return <FaJava className="text-orange-400" />;
  if (n === "c") return <SiC className="text-[#3B82F6]" />;
  if (n === "python") return <FaPython className="text-yellow-400" />;
  if (n.includes("javascript")) return <FaJs className="text-yellow-400" />;
  if (n.includes("html")) return <FaHtml5 className="text-orange-500" />;
  if (n === "css") return <FaCss3Alt className="text-[#3B82F6]" />;
  if (n.includes("react")) return <FaReact className="text-[#22D3EE]" />;
  if (n.includes("tailwind")) return <SiTailwindcss className="text-[#22D3EE]" />;
  if (n.includes("node")) return <FaNodeJs className="text-emerald-400" />;
  if (n.includes("express")) return <SiExpress className="text-slate-300" />;
  if (n.includes("spring")) return <SiSpringboot className="text-emerald-400" />;
  if (n.includes("mongo")) return <SiMongodb className="text-emerald-400" />;
  if (n.includes("mysql")) return <SiMysql className="text-[#3B82F6]" />;
  if (n === "git") return <FaGitAlt className="text-orange-500" />;
  if (n === "github") return <FaGithub className="text-slate-800 dark:text-[#F8FAFC]" />;
  if (n.includes("vs code")) return <VscVscode className="text-[#3B82F6]" />;
  if (n.includes("postman")) return <SiPostman className="text-orange-400" />;
  if (n.includes("canva")) return <FaPalette className="text-[#22D3EE]" />;
  if (n.includes("vercel")) return <SiVercel className="text-slate-800 dark:text-[#F8FAFC]" />;
  if (n.includes("render")) return <SiRender className="text-[#22D3EE]" />;
  if (n.includes("railway")) return <SiRailway className="text-[#8B5CF6]" />;
  return <FaServer className="text-[#3B82F6]" />;
}

export default function SkillsSection({ skills }) {
  if (!skills) return null;

  const categories = [
    { key: "programming", title: "Programming Languages" },
    { key: "frontend", title: "Web & Frontend" },
    { key: "backend", title: "Backend Technologies" },
    { key: "database", title: "Databases" },
    { key: "tools", title: "Tools & Platforms" },
    { key: "deployment", title: "Deployment Platforms" }
  ];

  return (
    <section id="skills" className="section-shell">
      <div className="pointer-events-none absolute top-20 right-0 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-[120px]" />

      <div className="section-container">
        <div className="mb-12 max-w-3xl">
          <span className="section-kicker">Technical Capabilities</span>
          <h2 className="section-heading">
            Skills shaped around <span className="text-glow-gradient">full-stack delivery</span>.
          </h2>
          <p className="section-subtitle">
            Technologies and engineering tools across backend APIs, modern React interfaces, databases, and cloud deployment.
          </p>
        </div>

        <div className="space-y-10">
          {categories.map((cat) => {
            const items = skills[cat.key] || [];
            if (items.length === 0) return null;

            return (
              <div key={cat.key} className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2.5 dark:border-[rgba(148,163,184,0.15)]">
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-[#F8FAFC]">
                    {cat.title}
                  </h3>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[#3B82F6] dark:text-[#22D3EE]">
                    {items.length} {items.length === 1 ? "Skill" : "Skills"}
                  </span>
                </div>

                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                >
                  {items.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={staggerItem}
                      whileHover={{ y: -3 }}
                      className="glass-card glow-border p-4 flex flex-col justify-between gap-3 group"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-slate-200 bg-slate-50 text-lg transition-transform duration-300 group-hover:scale-110 dark:border-[rgba(148,163,184,0.15)] dark:bg-[#0D1220]">
                            {getSkillIcon(skill.name)}
                          </div>
                          <span className="font-display text-sm font-bold text-slate-900 dark:text-[#F8FAFC] truncate">
                            {skill.name}
                          </span>
                        </div>

                        {typeof skill.level === "number" && (
                          <span className="text-xs font-bold text-[#3B82F6] dark:text-[#22D3EE] shrink-0">
                            {skill.level}%
                          </span>
                        )}
                      </div>

                      {typeof skill.level === "number" && (
                        <div className="w-full h-1.5 bg-slate-200 dark:bg-[#080B14] rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#22D3EE] rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.85, ease: "easeOut" }}
                          />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
