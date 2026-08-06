import React from "react";
import { motion } from "framer-motion";

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
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container">
        <div className="mb-14 max-w-3xl">
          <span className="section-kicker">Capabilities</span>
          <h2 className="section-heading">Skills shaped around full-stack delivery.</h2>
          <p className="section-subtitle">
            Practical tools across frontend, backend, data, deployment, and day-to-day engineering workflows.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.key}
              className="glass-card glow-border p-6 flex flex-col h-full hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-white/10 pb-3 tracking-wide">
                {cat.title}
              </h3>
              
              <div className="space-y-5 flex-grow">
                {skills[cat.key]?.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-semibold">
                      <span className="text-slate-700 dark:text-slate-300 tracking-wide font-medium">
                        {skill.name}
                      </span>
                      <span className="text-brand-purple">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar with viewport animate */}
                    <div className="w-full h-1.5 bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden relative">
                      <motion.div
                        className="h-full bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-cyan rounded-full shadow-[0_0_6px_#8B5CF6]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: sIdx * 0.05 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
