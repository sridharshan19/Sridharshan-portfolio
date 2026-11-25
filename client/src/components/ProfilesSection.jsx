import React from "react";
import { motion } from "framer-motion";
import { SiLeetcode } from "react-icons/si";
import { FaLaptopCode, FaExternalLinkAlt } from "react-icons/fa";
import CountUp from "react-countup";

export default function ProfilesSection({ codingProfiles }) {
  if (!codingProfiles) return null;

  const parseNum = (str, fallback = 0) => {
    const num = parseInt(String(str || "").replace(/\D/g, ""), 10);
    return Number.isNaN(num) ? fallback : num;
  };

  const platformMeta = {
    LeetCode: {
      icon: <SiLeetcode className="text-[#F59E0B]" />,
      color: "border-[#F59E0B]/25 hover:border-[#F59E0B]/50",
      glow: "shadow-[0_0_24px_rgba(245,158,11,0.12)]",
      desc: "Regular solver on algorithmic design, data structures, and optimized computation."
    },
    SkillRack: {
      icon: <FaLaptopCode className="text-[#22D3EE]" />,
      color: "border-[#22D3EE]/25 hover:border-[#22D3EE]/50",
      glow: "shadow-[0_0_24px_rgba(34,211,238,0.12)]",
      desc: "Consistent competitive programmer tackling daily coding tests and logic problems."
    }
  };

  // Enhance profiles with matching icons, colors, and parsed counts
  const profileDetails = codingProfiles.map((profile) => {
    const meta = platformMeta[profile.platform] || {
      icon: <FaLaptopCode className="text-[#3B82F6]" />,
      color: "border-[#3B82F6]/25 hover:border-[#3B82F6]/50",
      glow: "shadow-[0_0_24px_rgba(59,130,246,0.12)]",
      desc: "Consistent competitive programming and problem-solving practice."
    };
    return {
      ...profile,
      ...meta,
      problemsVal: parseNum(profile.solved, 0)
    };
  });

  return (
    <section id="profiles" className="section-shell">
      <div className="pointer-events-none absolute top-1/2 left-1/4 w-72 h-72 bg-[#22D3EE]/10 rounded-full blur-[110px]" />

      <div className="section-container">
        <div className="mb-12 max-w-3xl">
          <span className="section-kicker">Competitive Coding</span>
          <h2 className="section-heading">
            Coding <span className="text-glow-gradient">Profiles</span>
          </h2>
          <p className="section-subtitle">
            Algorithmic problem-solving consistency across LeetCode and SkillRack.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
          {profileDetails.map((profile, idx) => (
            <motion.div
              key={profile.platform || idx}
              className={`glass-card glow-border p-7 border ${profile.color} relative overflow-hidden flex flex-col justify-between group ${profile.glow}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div>
                {/* Platform Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3.5">
                    <span className="text-3xl bg-slate-100 dark:bg-[#0D1220] w-12 h-12 rounded-xl flex items-center justify-center border border-slate-200 dark:border-[rgba(148,163,184,0.15)] group-hover:scale-105 transition-transform duration-300">
                      {profile.icon}
                    </span>
                    <div>
                      <h3 className="text-xl font-display font-bold text-slate-900 dark:text-[#F8FAFC]">
                        {profile.platform}
                      </h3>
                      <span className="text-[11px] text-slate-500 dark:text-[#94A3B8] font-semibold uppercase tracking-wider">
                        {profile.globalRank}
                      </span>
                    </div>
                  </div>
                  
                  <a
                    href={profile.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 dark:text-[#94A3B8] hover:text-[#3B82F6] dark:hover:text-[#22D3EE] transition-colors p-2.5 rounded-xl bg-slate-100 dark:bg-[#0D1220] border border-slate-200 dark:border-[rgba(148,163,184,0.15)] clickable"
                    title={`View ${profile.platform} Profile`}
                  >
                    <FaExternalLinkAlt className="text-sm" />
                  </a>
                </div>

                <p className="text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed mb-6">
                  {profile.desc}
                </p>

                <div className="grid grid-cols-2 gap-4 bg-slate-100/70 dark:bg-[#0D1220] p-4 rounded-xl border border-slate-200 dark:border-[rgba(148,163,184,0.15)] mb-5">
                  <div>
                    <span className="text-[10px] text-slate-500 dark:text-[#94A3B8] font-bold uppercase tracking-wider block mb-1">
                      Problems Solved
                    </span>
                    <h4 className="text-2xl font-display font-bold text-slate-900 dark:text-[#F8FAFC]">
                      <CountUp
                        end={profile.problemsVal}
                        duration={2}
                        enableScrollSpy
                        scrollSpyDelay={100}
                      />+
                    </h4>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 dark:text-[#94A3B8] font-bold uppercase tracking-wider block mb-1">
                      Rating / Badges
                    </span>
                    <h4 className="text-sm font-display font-bold text-[#3B82F6] dark:text-[#22D3EE] mt-1.5">
                      {profile.rating.split(": ")[1] || profile.rating}
                    </h4>
                  </div>
                </div>
              </div>

              <div className="text-[10px] text-slate-500 dark:text-[#94A3B8] font-bold tracking-widest uppercase flex items-center justify-between border-t border-slate-200 dark:border-[rgba(148,163,184,0.15)] pt-4">
                <span>Competitive Coding</span>
                <span className="text-[#22D3EE]">Active ✓</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
