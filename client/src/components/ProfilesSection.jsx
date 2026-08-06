import React from "react";
import { motion } from "framer-motion";
import { SiLeetcode } from "react-icons/si";
import { FaLaptopCode, FaExternalLinkAlt } from "react-icons/fa";
import CountUp from "react-countup";

export default function ProfilesSection({ codingProfiles }) {
  if (!codingProfiles) return null;

  // Enhance profiles with matching icons and colors
  const profileDetails = [
    {
      ...codingProfiles[0], // LeetCode
      icon: <SiLeetcode className="text-[#FFA116]" />,
      color: "border-[#FFA116]/20 hover:border-[#FFA116]/40",
      glow: "shadow-[0_0_15px_rgba(255,161,22,0.15)]",
      desc: "Regular solver on algorithmic design, data structures, and optimized computation.",
      problemsVal: 300
    },
    {
      ...codingProfiles[1], // SkillRack
      icon: <FaLaptopCode className="text-[#06B6D4]" />,
      color: "border-[#06B6D4]/20 hover:border-[#06B6D4]/40",
      glow: "shadow-[0_0_15px_rgba(6,182,212,0.15)]",
      desc: "Consistent competitive programmer tackling daily coding tests and logic problems.",
      problemsVal: 400
    }
  ];

  return (
    <section id="profiles" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">
            Coding <span className="text-glow-gradient">Profiles</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-indigo to-brand-pink mx-auto rounded-full" />
        </div>

        {/* Profiles Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {profileDetails.map((profile, idx) => (
            <motion.div
              key={idx}
              className={`glass-card p-8 border ${profile.color} relative overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:scale-[1.02] ${profile.glow}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <div>
                {/* Platform Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3.5">
                    <span className="text-4xl bg-slate-100 dark:bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center border border-slate-200 dark:border-white/10 group-hover:scale-110 transition-transform duration-300">
                      {profile.icon}
                    </span>
                    <div>
                      <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">
                        {profile.platform}
                      </h3>
                      <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">
                        {profile.globalRank}
                      </span>
                    </div>
                  </div>
                  
                  <a
                    href={profile.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-brand-purple/20 clickable"
                    title={`View ${profile.platform} Profile`}
                  >
                    <FaExternalLinkAlt className="text-sm" />
                  </a>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed mb-6 font-medium">
                  {profile.desc}
                </p>

                {/* Animated counter details */}
                <div className="grid grid-cols-2 gap-4 bg-slate-100/50 dark:bg-white/5 p-4 rounded-2xl border border-slate-200 dark:border-white/5 mb-6">
                  <div>
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block mb-1">
                      Problems Solved
                    </span>
                    <h4 className="text-2xl font-display font-extrabold text-slate-900 dark:text-white">
                      <CountUp
                        end={profile.problemsVal}
                        duration={2.5}
                        enableScrollSpy
                        scrollSpyDelay={100}
                      />+
                    </h4>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block mb-1">
                      Rating/Metric
                    </span>
                    <h4 className="text-sm font-display font-bold text-brand-purple mt-1.5">
                      {profile.rating.split(": ")[1] || profile.rating}
                    </h4>
                  </div>
                </div>
              </div>

              <div className="text-[10px] text-gray-500 font-bold tracking-widest uppercase flex items-center justify-between border-t border-slate-200 dark:border-white/5 pt-4">
                <span>Competitive Coding</span>
                <span className="text-brand-cyan">Active ✓</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
