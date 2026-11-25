import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaChevronRight, FaRegEnvelope, FaTerminal, FaChartLine, FaJava, FaJs, FaReact, FaGitAlt, FaGithub, FaExternalLinkAlt, FaLaptopCode, FaTrophy } from "react-icons/fa";
import { SiSpringboot, SiMongodb, SiMysql, SiHibernate, SiLeetcode } from "react-icons/si";
import HeroSection from "../components/HeroSection";
import CountUp from "react-countup";
import { staggerContainer, staggerItem } from "../animations/motionVariants";

const TERMINAL_LOG_QUEUE = [
  "Initializing developer environment...",
  "Querying REST API at /api/portfolio...",
  "Loaded Java Full Stack & MERN project catalog.",
  "Fetching LeetCode solves: 300+ records verified.",
  "Fetching SkillRack status: Silver / Gold badges.",
  "Activating Framer Motion smooth transitions...",
  "-------------------------------------------------------",
  "✓ Sridharshan's Portfolio Online. Welcome, Visitor!"
];

const parseMetric = (val, fallback) => {
  const n = parseInt(String(val || "").replace(/\D/g, ""), 10);
  return Number.isNaN(n) ? fallback : n;
};

function TerminalCard() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < TERMINAL_LOG_QUEUE.length) {
        const currentLog = TERMINAL_LOG_QUEUE[index];
        setLogs((prev) => [...prev, currentLog]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-[11px] sm:text-xs text-[#22D3EE] text-left space-y-1.5 p-4 rounded-xl bg-[#080B14] border border-[rgba(148,163,184,0.15)] h-[165px] overflow-y-auto shadow-inner">
      {logs.map((log, idx) => (
        <div key={idx} className={log && log.startsWith("✓") ? "text-[#22D3EE] font-semibold" : "text-[#94A3B8]"}>
          <span className="text-[#3B82F6] font-bold mr-1.5">&gt;</span> {log}
        </div>
      ))}
      {logs.length < TERMINAL_LOG_QUEUE.length && (
        <span className="inline-block w-1.5 h-3.5 bg-[#22D3EE] animate-pulse" />
      )}
    </div>
  );
}

function ProblemSolvingChart() {
  return (
    <div className="relative w-full h-[135px] flex items-end justify-center pt-2">
      <svg className="w-full h-full" viewBox="0 0 100 50">
        <defs>
          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 0 45 Q 25 35 50 22 T 100 6"
          fill="none"
          stroke="#3B82F6"
          strokeWidth="1.8"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
        <path
          d="M 0 45 Q 25 35 50 22 T 100 6 L 100 50 L 0 50 Z"
          fill="url(#chartGradient)"
        />
        <circle cx="50" cy="22" r="1.6" fill="#8B5CF6" />
        <circle cx="100" cy="6" r="3.4" fill="#22D3EE" className="animate-ping" style={{ transformOrigin: "100px 6px" }} />
        <circle cx="100" cy="6" r="1.8" fill="#22D3EE" />
      </svg>
      <div className="absolute bottom-1 right-2 text-[9px] font-bold text-[#22D3EE] tracking-widest uppercase">
        Consistent Growth
      </div>
    </div>
  );
}

export default function Home({ personal, statistics, codingProfiles, projects, achievements }) {
  const leetcodeProfile = codingProfiles?.find((p) => p.platform === "LeetCode");
  const skillrackProfile = codingProfiles?.find((p) => p.platform === "SkillRack");
  const leetcodeCount = parseMetric(leetcodeProfile?.solved || statistics?.leetcodeSolved, 300);
  const skillrackCount = parseMetric(skillrackProfile?.solved || statistics?.skillrackSolved, 400);
  const leetcodeRating = leetcodeProfile?.rating?.replace("Contest Rating: ", "") || "1579";
  const skillrackBadge = skillrackProfile?.rating || "Silver / Gold Badges";
  const primaryAchievement = achievements?.find((a) => a.title?.toLowerCase().includes("first")) || achievements?.[0];
  const featuredProjects = (() => {
    const withDemo = (projects || []).filter((p) => p.demo && p.demo !== "#");
    return withDemo.length >= 2 ? withDemo.slice(0, 2) : (projects || []).slice(0, 2);
  })();

  return (
    <div className="space-y-8">
      {/* Split Hero Section */}
      <HeroSection personal={personal} />

      {/* Bento Grid Developer Dashboard */}
      <section className="section-container pb-16">
        <div className="mb-10 text-left">
          <span className="section-kicker">Developer Telemetry</span>
          <h2 className="section-heading">
            Engineering <span className="text-glow-gradient">At A Glance</span>
          </h2>
          <p className="section-subtitle">
            Competitive programming milestones, core technologies, and featured full-stack applications.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Card 1: LeetCode Metrics */}
          <motion.div
            variants={staggerItem}
            className="glass-card glow-border p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-5">
                <div className="w-11 h-11 bg-[#F59E0B]/10 border border-[#F59E0B]/25 rounded-xl flex items-center justify-center text-xl text-[#F59E0B]">
                  <SiLeetcode />
                </div>
                <span className="text-[10px] text-[#F59E0B] bg-[#F59E0B]/10 border border-[#F59E0B]/25 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                  LeetCode
                </span>
              </div>
              <h3 className="text-4xl font-display font-bold text-slate-900 dark:text-[#F8FAFC] tracking-tight">
                <CountUp end={leetcodeCount} duration={1.8} enableScrollSpy />+
              </h3>
              <p className="text-sm text-slate-600 dark:text-[#94A3B8] mt-2">
                Algorithmic problems solved across data structures and algorithms.
              </p>
            </div>
            <div className="border-t border-slate-200 dark:border-[rgba(148,163,184,0.15)] pt-4 mt-6 flex justify-between items-center text-xs">
              <span className="text-slate-500 dark:text-[#94A3B8] font-semibold uppercase">Contest Rating</span>
              <span className="font-display font-bold text-[#3B82F6] dark:text-[#22D3EE]">{leetcodeRating}</span>
            </div>
          </motion.div>

          {/* Card 2: SkillRack Progress */}
          <motion.div
            variants={staggerItem}
            className="glass-card glow-border p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-5">
                <div className="w-11 h-11 bg-[#8B5CF6]/10 border border-[#8B5CF6]/25 rounded-xl flex items-center justify-center text-xl text-[#8B5CF6]">
                  <FaLaptopCode />
                </div>
                <span className="text-[10px] text-[#8B5CF6] bg-[#8B5CF6]/10 border border-[#8B5CF6]/25 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                  SkillRack
                </span>
              </div>
              <h3 className="text-4xl font-display font-bold text-slate-900 dark:text-[#F8FAFC] tracking-tight">
                <CountUp end={skillrackCount} duration={1.8} enableScrollSpy />+
              </h3>
              <p className="text-sm text-slate-600 dark:text-[#94A3B8] mt-2">
                Programming challenges completed through consistent daily practice.
              </p>
            </div>
            <div className="border-t border-slate-200 dark:border-[rgba(148,163,184,0.15)] pt-4 mt-6 flex justify-between items-center text-xs">
              <span className="text-slate-500 dark:text-[#94A3B8] font-semibold uppercase">Badges</span>
              <span className="font-display font-bold text-[#8B5CF6]">{skillrackBadge}</span>
            </div>
          </motion.div>

          {/* Card 3: Hackathon Awards */}
          <motion.div
            variants={staggerItem}
            className="glass-card glow-border p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-5">
                <div className="w-11 h-11 bg-[#22D3EE]/10 border border-[#22D3EE]/25 rounded-xl flex items-center justify-center text-xl text-[#22D3EE]">
                  <FaTrophy />
                </div>
                <span className="text-[10px] text-[#22D3EE] bg-[#22D3EE]/10 border border-[#22D3EE]/25 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                  Hackathons
                </span>
              </div>
              <h3 className="text-4xl font-display font-bold text-slate-900 dark:text-[#F8FAFC] tracking-tight">
                1st <span className="text-lg text-slate-500 dark:text-[#94A3B8]">Prize</span>
              </h3>
              <p className="text-sm text-slate-600 dark:text-[#94A3B8] mt-2">
                {primaryAchievement
                  ? `${primaryAchievement.title} (${primaryAchievement.year}). Finalist at CIT INTELLINA 2025.`
                  : "Career Readiness Hackathon 2026 & CIT INTELLINA 2025 Finalist."}
              </p>
            </div>
            <div className="border-t border-slate-200 dark:border-[rgba(148,163,184,0.15)] pt-4 mt-6 flex justify-between items-center text-xs">
              <span className="text-slate-500 dark:text-[#94A3B8] font-semibold uppercase">Institution</span>
              <span className="font-semibold text-slate-700 dark:text-[#F8FAFC]">SECE · Coimbatore</span>
            </div>
          </motion.div>

          {/* Card 4: Terminal Output */}
          <motion.div
            variants={staggerItem}
            className="glass-card glow-border p-6 md:col-span-2 flex flex-col justify-between"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-[10px] text-[#3B82F6] dark:text-[#22D3EE] bg-[#3B82F6]/10 border border-[#3B82F6]/25 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider flex items-center gap-1.5">
                <FaTerminal className="text-[10px]" /> Runtime Status
              </span>
              <span className="text-[11px] text-slate-500 dark:text-[#94A3B8] font-mono">portfolio.sh</span>
            </div>
            <TerminalCard />
          </motion.div>

          {/* Card 5: Core Stack */}
          <motion.div
            variants={staggerItem}
            className="glass-card glow-border p-6 flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] text-[#8B5CF6] bg-[#8B5CF6]/10 border border-[#8B5CF6]/25 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                Core Stack
              </span>
              <h4 className="text-lg font-display font-bold text-slate-900 dark:text-[#F8FAFC] mt-4 mb-3">
                Primary Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Java", icon: <FaJava className="text-orange-400" /> },
                  { label: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
                  { label: "Spring Boot", icon: <SiSpringboot className="text-emerald-400" /> },
                  { label: "Hibernate", icon: <SiHibernate className="text-slate-400" /> },
                  { label: "React", icon: <FaReact className="text-[#22D3EE]" /> },
                  { label: "MongoDB", icon: <SiMongodb className="text-emerald-500" /> },
                  { label: "MySQL", icon: <SiMysql className="text-[#3B82F6]" /> },
                  { label: "Git", icon: <FaGitAlt className="text-orange-500" /> }
                ].map((tech) => (
                  <span
                    key={tech.label}
                    className="text-[11px] bg-slate-100 dark:bg-[#0D1220] border border-slate-200 dark:border-[rgba(148,163,184,0.15)] px-2.5 py-1 rounded-lg font-medium flex items-center gap-1.5 text-slate-700 dark:text-[#F8FAFC]"
                  >
                    {tech.icon} {tech.label}
                  </span>
                ))}
              </div>
            </div>
            <Link to="/skills" className="text-xs text-[#3B82F6] dark:text-[#22D3EE] hover:underline font-semibold flex items-center gap-1 mt-6 clickable">
              Explore All Skills <FaChevronRight className="text-[10px]" />
            </Link>
          </motion.div>

          {/* Card 6: Featured Projects Highlight */}
          <motion.div
            variants={staggerItem}
            className="glass-card glow-border p-6 md:col-span-2 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/25 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                  Featured Builds
                </span>
                <Link to="/projects" className="text-xs text-[#3B82F6] dark:text-[#22D3EE] hover:underline flex items-center gap-1 font-semibold clickable">
                  All Projects <FaChevronRight className="text-[10px]" />
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {featuredProjects.map((proj) => (
                  <div
                    key={proj.title}
                    className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 dark:border-[rgba(148,163,184,0.15)] dark:bg-[#0D1220]/90 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-lg">{proj.icon}</span>
                        <div className="flex items-center gap-2.5">
                          {proj.demo && proj.demo !== "#" && (
                            <a
                              href={proj.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-500 hover:text-[#3B82F6] dark:text-[#94A3B8] dark:hover:text-[#22D3EE] clickable"
                              aria-label={`${proj.title} Live Demo`}
                              title="Live Demo"
                            >
                              <FaExternalLinkAlt className="text-xs" />
                            </a>
                          )}
                          <a
                            href={proj.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-500 hover:text-[#3B82F6] dark:text-[#94A3B8] dark:hover:text-[#22D3EE] clickable"
                            aria-label={`${proj.title} GitHub`}
                            title="GitHub"
                          >
                            <FaGithub />
                          </a>
                        </div>
                      </div>
                      <h4 className="mt-2 font-display text-base font-bold text-slate-900 dark:text-[#F8FAFC]">
                        {proj.title}
                      </h4>
                      <p className="mt-1 text-xs text-slate-600 dark:text-[#94A3B8] line-clamp-2">
                        {proj.description}
                      </p>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {proj.tech.slice(0, 3).map((t) => (
                        <span key={t} className="text-[10px] px-2 py-0.5 rounded-md bg-white dark:bg-[#151D2E] border border-slate-200 dark:border-[rgba(148,163,184,0.15)] text-slate-700 dark:text-[#94A3B8]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 7: Growth Chart */}
          <motion.div
            variants={staggerItem}
            className="glass-card glow-border p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] text-[#22D3EE] bg-[#22D3EE]/10 border border-[#22D3EE]/25 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <FaChartLine className="text-[10px]" /> Problem Solving
                </span>
                <span className="text-[10px] text-slate-500 dark:text-[#94A3B8] font-mono">DSA</span>
              </div>
              <ProblemSolvingChart />
            </div>
          </motion.div>

          {/* Card 8: CTA Block */}
          <motion.div
            variants={staggerItem}
            className="glass-card glow-border p-8 md:col-span-3 text-center relative overflow-hidden flex flex-col items-center justify-center"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#22D3EE]" />
            <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-[#F8FAFC] mb-3 max-w-xl">
              Let&apos;s Build Scalable Software Together
            </h3>
            <p className="text-sm text-slate-600 dark:text-[#94A3B8] max-w-lg mb-6 leading-relaxed">
              Seeking full-stack software engineering roles and impactful product collaborations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="glow-btn px-7 py-3.5 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white text-sm font-semibold rounded-xl shadow-[0_0_24px_rgba(59,130,246,0.35)] transition hover:-translate-y-0.5 flex items-center gap-2 clickable"
              >
                <FaRegEnvelope className="text-sm" />
                Get In Touch
              </Link>
              <Link
                to="/about"
                className="px-7 py-3.5 rounded-xl border border-slate-300 dark:border-[rgba(148,163,184,0.2)] bg-white/70 dark:bg-[#0D1220] text-slate-900 dark:text-[#F8FAFC] text-sm font-semibold transition hover:border-[#22D3EE]/50 flex items-center gap-2 clickable"
              >
                About &amp; Experience <FaExternalLinkAlt className="text-[10px]" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
