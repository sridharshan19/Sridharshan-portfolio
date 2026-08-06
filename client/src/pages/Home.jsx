import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaTrophy, FaChevronRight, FaRegEnvelope, FaTerminal, FaChartLine, FaJava, FaJs, FaReact, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiSpringboot, SiMongodb, SiMysql, SiHibernate, SiExpress } from "react-icons/si";
import HeroSection from "../components/HeroSection";
import CountUp from "react-countup";

const TERMINAL_LOG_QUEUE = [
  "Initializing local developer workspace...",
  "Querying REST API from server port 5000...",
  "Backend endpoints loaded: /api/portfolio",
  "Connecting portfolio data source...",
  "Fetching LeetCode solves: 300+ records fetched.",
  "Fetching SkillRack solver status: Gold badge level.",
  "Injecting animated glowing backdrop layers...",
  "Vite bundler: 1084 modules compiled successfully.",
  "-------------------------------------------------------",
  "✓ Sridharshan's Portfolio Online. Welcome, Visitor!"
];

// Real-time Mock Compiler Terminal Console Widget
function TerminalCard() {
  const [logs, setLogs] = useState([]);
  const logQueue = [
    "Initializing local developer workspace...",
    "Querying REST API from server port 5005...",
    "Backend endpoints loaded: /api/personal, /api/projects",
    "Connecting database pools at coimbatore-pool...",
    "Fetching LeetCode solves: 300+ records fetched.",
    "Fetching SkillRack solver status: Gold badge level.",
    "Injecting animated glowing backdrop layers...",
    "Vite bundler: 1083 modules compiled successfully.",
    "-------------------------------------------------------",
    "✓ Sridharshan's Portfolio Online. Welcome, Visitor!"
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < logQueue.length) {
        const currentLog = logQueue[index];
        setLogs((prev) => [...prev, currentLog]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-[10px] md:text-xs text-brand-teal text-left space-y-1.5 p-4 rounded-2xl bg-slate-950/90 dark:bg-black/60 border border-slate-200 dark:border-white/5 h-[165px] overflow-y-auto custom-scrollbar shadow-inner">
      {logs.map((log, idx) => (
        <div key={idx} className={(log && log.startsWith("✓")) ? "text-brand-purple font-extrabold" : "text-slate-500 dark:text-slate-400"}>
          <span className="text-brand-indigo font-bold mr-1.5">&gt;</span> {log}
        </div>
      ))}
      {logs.length < logQueue.length && (
        <span className="inline-block w-1.5 h-3.5 bg-brand-teal animate-pulse" />
      )}
    </div>
  );
}

// Custom SVG Animated Curve Trajectory Chart Widget
function ProblemSolvingChart() {
  return (
    <div className="relative w-full h-[135px] flex items-end justify-center pt-2">
      <svg className="w-full h-full" viewBox="0 0 100 50">
        <defs>
          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Animated Curve */}
        <motion.path
          d="M 0 45 Q 25 35 50 22 T 100 6"
          fill="none"
          stroke="#6366f1"
          strokeWidth="1.8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        {/* Gradient fill */}
        <path
          d="M 0 45 Q 25 35 50 22 T 100 6 L 100 50 L 0 50 Z"
          fill="url(#chartGradient)"
        />

        {/* Pulse indicators */}
        <circle cx="50" cy="22" r="1.5" fill="#8b5cf6" />
        <circle cx="100" cy="6" r="3.5" fill="#0ea5e9" className="animate-ping" style={{ transformOrigin: "100px 6px" }} />
        <circle cx="100" cy="6" r="1.8" fill="#0ea5e9" />
      </svg>
      <div className="absolute bottom-1 right-2 text-[8px] font-black text-brand-teal tracking-widest uppercase">
        Trajectory: Exponential
      </div>
    </div>
  );
}

export default function Home({ personal }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <div className="space-y-12">
      {/* Split Hero Section */}
      <HeroSection personal={personal} />

      {/* Bento Grid Dashboard Wrapper */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        
        {/* Section Title */}
        <div className="mb-10 text-left">
          <span className="section-kicker">📊 Executive Dashboard</span>
          <h2 className="section-heading mt-2">
            At A <span className="text-glow-gradient">Glance</span>
          </h2>
        </div>

        {/* Bento Layout Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          
          {/* Card 1: LeetCode Metrics (1 Col) */}
          <motion.div
            variants={itemVariants}
            className="glass-card glow-border p-6 flex flex-col justify-between hover:border-brand-indigo/30 transition-all duration-300 group"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-[#F89F1B]/10 rounded-xl flex items-center justify-center text-2xl">
                  🧩
                </div>
                <span className="text-[10px] text-[#F89F1B] bg-[#F89F1B]/10 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                  LeetCode
                </span>
              </div>
              <h3 className="text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
                <CountUp end={300} duration={2} enableScrollSpy />+
              </h3>
              <p className="text-sm text-slate-600 dark:text-gray-400 mt-2 font-medium">
                Coding Problems Solved successfully.
              </p>
            </div>
            
            <div className="border-t border-slate-200 dark:border-white/5 pt-4 mt-6 flex justify-between items-center text-xs">
              <span className="text-slate-500 dark:text-slate-400 font-bold uppercase">Contest Rating:</span>
              <span className="font-display font-extrabold text-brand-indigo">1579</span>
            </div>
          </motion.div>

          {/* Card 2: SkillRack Progress (1 Col) */}
          <motion.div
            variants={itemVariants}
            className="glass-card glow-border p-6 flex flex-col justify-between hover:border-brand-purple/30 transition-all duration-300 group"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-brand-purple/10 rounded-xl flex items-center justify-center text-2xl text-brand-purple">
                  <FaCode />
                </div>
                <span className="text-[10px] text-brand-purple bg-brand-purple/10 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                  SkillRack
                </span>
              </div>
              <h3 className="text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
                <CountUp end={400} duration={2} enableScrollSpy />+
              </h3>
              <p className="text-sm text-slate-600 dark:text-gray-400 mt-2 font-medium">
                Programming Problems Solved.
              </p>
            </div>
            
            <div className="border-t border-slate-200 dark:border-white/5 pt-4 mt-6 flex justify-between items-center text-xs">
              <span className="text-slate-500 dark:text-slate-400 font-bold uppercase">Badges:</span>
              <span className="font-display font-extrabold text-brand-purple">Gold Level</span>
            </div>
          </motion.div>

          {/* Card 3: Hackathon Awards (1 Col) */}
          <motion.div
            variants={itemVariants}
            className="glass-card glow-border p-6 flex flex-col justify-between hover:border-brand-cyan/30 transition-all duration-300 group"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-brand-teal/10 rounded-xl flex items-center justify-center text-xl text-brand-teal">
                  🏆
                </div>
                <span className="text-[10px] text-brand-teal bg-brand-teal/10 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                  Awards
                </span>
              </div>
              <h3 className="text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
                1st <span className="text-lg text-slate-500">Prize</span>
              </h3>
              <p className="text-sm text-slate-600 dark:text-gray-400 mt-2 font-medium">
                SECE Career Readiness Hackathon 2026. Finalist at CIT Intellina 2025.
              </p>
            </div>
            
            <div className="border-t border-slate-200 dark:border-white/5 pt-4 mt-6 flex justify-between items-center text-xs">
              <span className="text-slate-500 dark:text-slate-400 font-bold uppercase">Location:</span>
              <span className="font-semibold text-slate-700 dark:text-gray-300">Coimbatore</span>
            </div>
          </motion.div>

          {/* Card 4: New Mock Compiler Console Graphic Card (2 Cols Width) */}
          <motion.div
            variants={itemVariants}
            className="glass-card glow-border p-6 md:col-span-2 flex flex-col justify-between hover:border-brand-indigo/30 transition-all duration-300 group"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] text-brand-indigo bg-brand-indigo/10 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <FaTerminal className="text-[10px]" /> Local Terminal Instance
                </span>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">logs.sh</span>
              </div>
              
              <TerminalCard />
            </div>
          </motion.div>

          {/* Card 5: Technology Stack Capabilities Card (1 Col Width) */}
          <motion.div
            variants={itemVariants}
            className="glass-card glow-border p-6 flex flex-col justify-between hover:border-brand-purple/30 transition-all duration-300 group"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] text-brand-purple bg-brand-purple/10 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                  Tech Capabilities
                </span>
              </div>
              <h4 className="text-lg font-display font-extrabold text-slate-900 dark:text-white mb-3">
                Core Stack
              </h4>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-[10px] bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-3 py-1 rounded-xl font-bold flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                  <FaJava className="text-red-500 text-xs" /> Java
                </span>
                <span className="text-[10px] bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-3 py-1 rounded-xl font-bold flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                  <FaJs className="text-yellow-500 text-xs" /> JavaScript
                </span>
                <span className="text-[10px] bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-3 py-1 rounded-xl font-bold flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                  <SiSpringboot className="text-green-500 text-xs" /> Spring Boot
                </span>
                <span className="text-[10px] bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-3 py-1 rounded-xl font-bold flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                  <SiHibernate className="text-slate-400 text-xs" /> JPA / Hibernate
                </span>
                <span className="text-[10px] bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-3 py-1 rounded-xl font-bold flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                  <FaReact className="text-cyan-400 text-xs animate-spin-slow" style={{ animationDuration: "12s" }} /> React
                </span>
                <span className="text-[10px] bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-3 py-1 rounded-xl font-bold flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                  <SiMongodb className="text-green-600 text-xs" /> MongoDB
                </span>
                <span className="text-[10px] bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-3 py-1 rounded-xl font-bold flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                  <SiMysql className="text-blue-500 text-xs" /> MySQL
                </span>
                <span className="text-[10px] bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-3 py-1 rounded-xl font-bold flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                  <FaGitAlt className="text-orange-600 text-xs" /> Git
                </span>
              </div>
            </div>
            
            <Link to="/about" className="text-xs text-brand-purple hover:underline font-semibold flex items-center gap-1 mt-6">
              View Detailed Skills <FaChevronRight className="text-[10px]" />
            </Link>
          </motion.div>

          {/* Card 6: Top Featured Project (2 Cols Width) */}
          <motion.div
            variants={itemVariants}
            className="glass-card glow-border p-6 md:col-span-2 flex flex-col justify-between hover:border-brand-indigo/30 transition-all duration-300 group"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] text-brand-indigo bg-brand-indigo/10 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                  Featured Product
                </span>
                <Link to="/projects" className="text-xs text-brand-indigo hover:underline flex items-center gap-1 font-semibold">
                  All Projects <FaChevronRight className="text-[10px]" />
                </Link>
              </div>
              
              <h3 className="text-2xl font-display font-extrabold text-slate-900 dark:text-white group-hover:text-brand-indigo transition-colors duration-300">
                NatureCart — Farm Marketplace
              </h3>
              <p className="text-sm text-slate-600 dark:text-gray-400 mt-2 leading-relaxed font-medium">
                Developed a full-stack farm-to-consumer marketplace with inventory management, order tracking, and analytics dashboards. Integrated PDF report exports.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="text-[10px] bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-3 py-1 rounded-xl font-bold flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                <FaReact className="text-cyan-400 text-xs animate-spin-slow" style={{ animationDuration: "12s" }} /> React
              </span>
              <span className="text-[10px] bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-3 py-1 rounded-xl font-bold flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                <FaNodeJs className="text-green-500 text-xs" /> Node.js
              </span>
              <span className="text-[10px] bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-3 py-1 rounded-xl font-bold flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                <SiExpress className="text-slate-400 text-xs" /> Express
              </span>
              <span className="text-[10px] bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-3 py-1 rounded-xl font-bold flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                <SiMongodb className="text-green-600 text-xs" /> MongoDB
              </span>
            </div>
          </motion.div>

          {/* Card 7: New Svg Problem Solving Chart Graphic Card (1 Col Width) */}
          <motion.div
            variants={itemVariants}
            className="glass-card glow-border p-6 flex flex-col justify-between hover:border-brand-cyan/30 transition-all duration-300 group"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] text-brand-cyan bg-brand-cyan/10 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <FaChartLine className="text-[10px]" /> Metric Growth
                </span>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">Q1-Q4</span>
              </div>
              
              <ProblemSolvingChart />
            </div>
          </motion.div>

          {/* Card 8: Interactive Call to Action Block (3 Cols Full Span) */}
          <motion.div
            variants={itemVariants}
            className="glass-card glow-border p-8 md:col-span-3 text-center relative overflow-hidden flex flex-col items-center justify-center hover:border-brand-cyan/30 transition-all duration-300 group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-cyan" />
            
            <h3 className="text-2xl md:text-3xl font-display font-extrabold text-slate-900 dark:text-white mb-3 max-w-xl">
              Let's Build Something Exceptional Together
            </h3>
            
            <p className="text-sm text-slate-600 dark:text-gray-400 max-w-lg mb-6 font-medium leading-relaxed">
              Seeking engineering opportunities or full stack integration pipelines. Let's start the dialogue.
            </p>

            <Link
              to="/contact"
              className="glow-btn px-8 py-3.5 bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-cyan text-white text-sm font-bold rounded-xl shadow-lg transition-transform hover:scale-105 flex items-center gap-2 clickable"
            >
              <FaRegEnvelope className="text-sm" />
              Contact Hub
            </Link>
          </motion.div>

        </motion.div>

      </div>
    </div>
  );
}
