import React from "react";
import { motion } from "framer-motion";

export default function EducationSection({ education }) {
  if (!education) return null;

  return (
    <section id="education" className="section-shell">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#8B5CF6]/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="section-container">
        {/* Title */}
        <div className="mb-14 max-w-3xl">
          <span className="section-kicker">Education Timeline</span>
          <h2 className="section-heading">
            Academic milestones and credentials.
          </h2>
          <p className="section-subtitle">
            Studying Electrical and Electronics Engineering with active software development credentials.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] timeline-line transform -translate-x-1/2" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {education.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-stretch ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Left spacer for desktop */}
                  <div className="w-full md:w-1/2 hidden md:block" />

                  {/* Centered Node Icon/Circle */}
                  <div className="absolute left-4 md:left-1/2 w-5 h-5 rounded-full bg-[#080B14] border-4 border-[#3B82F6] transform -translate-x-1/2 z-10 flex items-center justify-center shadow-[0_0_14px_rgba(59,130,246,0.5)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]" />
                  </div>

                  {/* Timeline Card */}
                  <motion.div
                    className="w-full md:w-1/2 pl-10 md:pl-0 md:px-8"
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="glass-card glow-border p-6 relative group">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="text-[10px] bg-[#3B82F6]/10 text-[#3B82F6] dark:text-[#22D3EE] px-3 py-1 rounded-full border border-[#3B82F6]/25 font-bold uppercase tracking-wider">
                          {item.period}
                        </span>
                        <span className="text-sm font-bold text-[#8B5CF6] dark:text-[#22D3EE]">
                          {item.score}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-display font-bold text-slate-900 dark:text-[#F8FAFC] group-hover:text-[#3B82F6] dark:group-hover:text-[#22D3EE] transition-colors duration-300 mb-1">
                        {item.degree}
                      </h3>
                      
                      <p className="text-xs font-semibold text-slate-600 dark:text-[#94A3B8] mb-3">
                        {item.institution}
                      </p>
                      
                      <p className="text-xs text-slate-500 dark:text-[#94A3B8] leading-relaxed">
                        {item.details}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
