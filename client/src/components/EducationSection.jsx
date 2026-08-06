import React from "react";
import { motion } from "framer-motion";

export default function EducationSection({ education }) {
  if (!education) return null;

  return (
    <section id="education" className="section-shell">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-pink/5 rounded-full blur-3xl pointer-events-none" />

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
                  <div className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-bg-dark border-4 border-brand-purple transform -translate-x-1/2 z-10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-ping" />
                  </div>

                  {/* Timeline Card */}
                  <motion.div
                    className="w-full md:w-1/2 pl-10 md:pl-0 md:px-8"
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="glass-card glow-border p-6 relative group hover:border-brand-purple/20 transition-all duration-300">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="text-[10px] bg-brand-purple/10 text-brand-purple px-3 py-1 rounded-full border border-brand-purple/20 font-bold uppercase tracking-wider">
                          {item.period}
                        </span>
                        <span className="text-sm font-extrabold text-brand-cyan">
                          {item.score}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white group-hover:text-brand-purple transition-colors duration-300 mb-1">
                        {item.degree}
                      </h3>
                      
                      <p className="text-xs font-semibold text-slate-600 dark:text-gray-400 mb-4">
                        {item.institution}
                      </p>
                      
                      <p className="text-xs text-gray-500 leading-relaxed font-medium">
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
