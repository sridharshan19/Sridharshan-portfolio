import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaJava, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiSpringboot, SiMongodb, SiMysql } from "react-icons/si";
import SriImage from "../assets/Sri.png";

export default function HeroSection({ personal }) {
  const socialLinks = [
    { href: personal?.github, icon: <FaGithub />, label: "GitHub" },
    { href: personal?.linkedin, icon: <FaLinkedin />, label: "LinkedIn" },
    { href: `mailto:${personal?.email || ""}`, icon: <FaEnvelope />, label: "Email" },
    { href: `tel:${personal?.phone || ""}`, icon: <FaPhone />, label: "Phone" }
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20">
      <div className="section-container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="section-kicker mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-brand-teal animate-pulse" />
            Available for full-stack opportunities
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-display font-extrabold tracking-tight leading-tight mb-4 text-glow-gradient"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {personal?.name || "SRIDHARSHAN M N"}
          </motion.h1>

          {/* Animated Designation Typing */}
          <motion.div
            className="text-lg md:text-2xl font-display text-slate-300 font-medium mb-6 h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-slate-400">I am a </span>
            <TypeAnimation
              sequence={[
                "Java Full Stack Developer",
                1500,
                "Spring Boot Developer",
                1500,
                "Problem Solver",
                1500,
                "Competitive Programmer",
                1500
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-brand-indigo dark:text-brand-teal font-bold"
            />
          </motion.div>

          {/* Short bio excerpt */}
          <motion.p
            className="text-slate-600 dark:text-gray-400 text-sm md:text-base max-w-xl mb-8 leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {personal?.bio}
          </motion.p>

          {/* Tech stack logos row */}
          <motion.div 
            className="flex items-center gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mr-2">Stack:</span>
            <div className="flex gap-4 text-2xl text-slate-500 dark:text-slate-400">
              <span className="hover:text-red-500 transition duration-300 cursor-help" title="Java"><FaJava /></span>
              <span className="hover:text-yellow-500 transition duration-300 cursor-help" title="JavaScript"><FaJs /></span>
              <span className="hover:text-green-500 transition duration-300 cursor-help" title="Spring Boot"><SiSpringboot /></span>
              <span className="hover:text-cyan-400 transition duration-300 animate-spin-slow cursor-help" style={{ animationDuration: "12s" }} title="React"><FaReact /></span>
              <span className="hover:text-green-600 transition duration-300 cursor-help" title="MongoDB"><SiMongodb /></span>
              <span className="hover:text-blue-500 transition duration-300 cursor-help" title="MySQL"><SiMysql /></span>
              <span className="hover:text-orange-600 transition duration-300 cursor-help" title="Git"><FaGitAlt /></span>
            </div>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            className="flex flex-wrap gap-4 items-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link
              to="/projects"
              className="glow-btn inline-flex items-center gap-3 rounded-2xl bg-slate-950 px-6 py-4 text-sm font-extrabold text-white shadow-2xl shadow-brand-indigo/20 transition hover:-translate-y-1 dark:bg-white dark:text-slate-950 clickable"
            >
              Explore work <FaArrowRight className="text-xs" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/70 px-6 py-4 text-sm font-extrabold text-slate-900 backdrop-blur transition hover:-translate-y-1 hover:border-brand-cyan/40 dark:border-white/10 dark:bg-white/5 dark:text-white clickable"
            >
              Hire me
            </Link>

            <Link
              to="/resume"
              className="inline-flex items-center gap-3 rounded-2xl px-2 py-4 text-sm font-extrabold text-brand-indigo transition hover:text-brand-purple dark:text-brand-cyan clickable"
            >
              View resume
            </Link>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === "Email" || link.label === "Phone" ? undefined : "_blank"}
                rel={link.label === "Email" || link.label === "Phone" ? undefined : "noopener noreferrer"}
                aria-label={link.label}
                title={link.label}
                className="grid h-12 w-12 place-items-center rounded-2xl border border-slate-200 bg-white/70 text-slate-600 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-brand-indigo/30 hover:text-brand-indigo dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-brand-cyan clickable"
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="lg:col-span-5 w-full flex justify-center group"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.15 }}
        >
          <div className="glass-card w-full max-w-md h-[400px] lg:h-[480px] overflow-hidden p-6 relative flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-3 w-3 rounded-full bg-brand-pink animate-pulse" />
              <span className="h-3 w-3 rounded-full bg-brand-gold animate-pulse" style={{ animationDelay: "0.2s" }} />
              <span className="h-3 w-3 rounded-full bg-brand-teal animate-pulse" style={{ animationDelay: "0.4s" }} />
            </div>
            
            <div className="rounded-2xl border border-slate-200/70 bg-white/45 p-4 text-xs font-bold text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 text-center z-10">
              Java Full Stack / Enterprise Systems Developer
            </div>

            <div className="flex-1 mt-4 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-950/20 relative">
              <img
                src={SriImage}
                alt="Sridharshan M N"
                className="w-full h-full object-cover object-top grayscale-[15%] group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-[1.01]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
