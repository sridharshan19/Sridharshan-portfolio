import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaAward, FaCode, FaGraduationCap, FaLaptopCode, FaSeedling } from "react-icons/fa";
import SriImage from "../assets/Sri.png";

export default function AboutSection({ personal, statistics }) {
  const parseNum = (str, fallback) => {
    if (!str) return fallback;
    const num = parseInt(String(str).replace(/\D/g, ""), 10);
    return isNaN(num) ? fallback : num;
  };

  const statsData = [
    { value: parseNum(statistics?.leetcodeSolved, 300), suffix: "+", label: "LeetCode Problems", icon: <FaCode /> },
    { value: parseNum(statistics?.skillrackSolved, 400), suffix: "+", label: "SkillRack Problems", icon: <FaLaptopCode /> },
    { value: parseNum(statistics?.hackathonsWon, 2), suffix: "+", label: "Hackathon Awards", icon: <FaAward /> },
    { value: parseNum(statistics?.projectsCompleted, 6), suffix: "+", label: "Featured Projects", icon: <FaSeedling /> }
  ];

  return (
    <section id="about" className="section-shell">
      <div className="section-container">
        <div className="mb-12 max-w-3xl">
          <span className="section-kicker">About Me</span>
          <h2 className="section-heading">
            Engineering student with a <span className="text-glow-gradient">product-builder</span> mindset.
          </h2>
          <p className="section-subtitle">
            Combining core engineering discipline with full-stack software development, focusing on practical interfaces,
            secure REST APIs, and responsive systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Portrait & Quick Info Cards */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card glow-border h-full overflow-hidden p-4 flex flex-col justify-between">
              <div className="relative overflow-hidden rounded-xl border border-slate-200 dark:border-[rgba(148,163,184,0.15)] bg-[#080B14]">
                <img
                  src={SriImage}
                  alt={personal?.name || "Sridharshan M N"}
                  className="h-[26rem] sm:h-[30rem] w-full object-cover object-top transition duration-500 hover:scale-[1.02]"
                />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-[#3B82F6]/25 bg-[#3B82F6]/10 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#3B82F6] dark:text-[#22D3EE]">
                    Education
                  </p>
                  <p className="mt-1 text-sm font-bold text-slate-900 dark:text-[#F8FAFC]">
                    B.E. EEE (2023–2027)
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-[rgba(148,163,184,0.15)] dark:bg-[#0D1220]">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-[#94A3B8]">
                    Availability
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#22D3EE]">Open to work</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative, Education & Metrics */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            <motion.div
              className="glass-card glow-border p-7 md:p-9"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-[#3B82F6] dark:text-[#22D3EE] mb-4">
                <FaGraduationCap className="text-base" />
                <span>Developer Journey &amp; Focus</span>
              </div>

              <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-slate-950 dark:text-[#F8FAFC]">
                Full-stack developer crafting scalable dashboards, APIs, and responsive product flows.
              </h3>

              <div className="mt-5 space-y-4 text-sm md:text-[15px] leading-7 text-slate-600 dark:text-[#94A3B8]">
                <p>
                  {personal?.bio ||
                    "I am pursuing B.E. Electrical and Electronics Engineering at Sri Eshwar College of Engineering while actively building full-stack applications with Java, Spring Boot, React, Node.js, Express, MongoDB, and MySQL."}
                </p>
                <p>
                  My strongest technical interest lies in turning complex real-world workflows into clean, reliable software:
                  role-based enterprise dashboards, JWT authentication flows, financial analytics, and automated notifications.
                </p>
                <div className="rounded-xl border border-[#3B82F6]/25 bg-gradient-to-r from-[#3B82F6]/10 to-[#8B5CF6]/10 p-4 text-slate-800 dark:text-[#F8FAFC]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#3B82F6] dark:text-[#22D3EE] block mb-1">
                    Career Objective
                  </span>
                  Join a developer-centric engineering team where I can contribute to production software delivery while growing through practical systems engineering and problem solving.
                </div>
              </div>
            </motion.div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
              {statsData.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  className="glass-card glow-border p-5"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#3B82F6]/20 to-[#8B5CF6]/20 border border-[#3B82F6]/30 text-[#3B82F6] dark:text-[#22D3EE]">
                    {stat.icon}
                  </div>
                  <h4 className="font-display text-2xl sm:text-3xl font-bold text-slate-950 dark:text-[#F8FAFC]">
                    <CountUp end={stat.value} duration={1.8} enableScrollSpy scrollSpyDelay={100} />
                    {stat.suffix}
                  </h4>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-[#94A3B8]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
