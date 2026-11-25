import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaDownload, FaEnvelope, FaGithub, FaJava, FaLinkedin, FaReact } from "react-icons/fa";
import { SiMongodb, SiMysql, SiSpringboot } from "react-icons/si";
import SriImage from "../assets/Sri.png";

export default function HeroSection({ personal }) {
  const socialLinks = [
    { href: personal?.github || "#", icon: <FaGithub />, label: "GitHub", external: true },
    { href: personal?.linkedin || "#", icon: <FaLinkedin />, label: "LinkedIn", external: true },
    { href: personal?.email ? `mailto:${personal.email}` : "#", icon: <FaEnvelope />, label: "Email", external: false }
  ];

  const floatingBadges = [
    {
      label: "Java",
      icon: <FaJava className="text-orange-400" />,
      position: "-top-3 -left-3 sm:-left-6"
    },
    {
      label: "Spring Boot",
      icon: <SiSpringboot className="text-emerald-400" />,
      position: "-top-3 -right-3 sm:-right-6"
    },
    {
      label: "React",
      icon: <FaReact className="text-[#22D3EE]" />,
      position: "bottom-12 -left-3 sm:-left-7"
    },
    {
      label: "MySQL & MongoDB",
      icon: (
        <span className="flex items-center gap-1">
          <SiMysql className="text-[#3B82F6]" />
          <SiMongodb className="text-emerald-400" />
        </span>
      ),
      position: "-bottom-3 right-4 sm:right-6"
    }
  ];

  return (
    <section id="hero" className="relative min-h-[calc(100vh-4.5rem)] flex items-center overflow-hidden py-14 md:py-20">
      {/* Subtle futuristic background orbs */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-[#3B82F6]/15 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/5 h-80 w-80 rounded-full bg-[#8B5CF6]/15 blur-[120px]" />

      <div className="section-container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        {/* LEFT SIDE – INTRODUCTION */}
        <div className="lg:col-span-7 text-left">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="section-kicker mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-[#22D3EE] animate-pulse" />
            Open to Full-Stack Developer Roles
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="text-sm sm:text-base font-semibold tracking-wide text-[#3B82F6] dark:text-[#22D3EE] mb-2"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-display font-bold tracking-tight leading-[1.08] text-slate-950 dark:text-[#F8FAFC]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            Sridharshan M N
          </motion.h1>

          <motion.h2
            className="mt-3 text-2xl sm:text-3xl md:text-4xl font-display font-bold tracking-tight text-glow-gradient"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            className="mt-3 text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase text-slate-600 dark:text-[#94A3B8]"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
          >
            Java <span className="text-[#3B82F6] mx-1.5">|</span> Spring Boot <span className="text-[#8B5CF6] mx-1.5">|</span> React <span className="text-[#22D3EE] mx-1.5">|</span> Web Development
          </motion.p>

          <motion.p
            className="mt-6 max-w-xl text-sm sm:text-base leading-relaxed text-slate-600 dark:text-[#94A3B8]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I am a passionate Full Stack Developer focused on building modern, scalable, and user-friendly web applications. I enjoy solving problems and developing practical software solutions using Java, Spring Boot, React, and modern web technologies.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.36 }}
          >
            <Link
              to="/projects"
              className="glow-btn inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_28px_rgba(59,130,246,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_0_36px_rgba(139,92,246,0.45)] clickable"
            >
              Explore My Projects <FaArrowRight className="text-xs" />
            </Link>

            <Link
              to="/resume"
              className="inline-flex items-center gap-2.5 rounded-xl border border-slate-300 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-900 backdrop-blur transition hover:-translate-y-0.5 hover:border-[#3B82F6]/60 dark:border-[rgba(148,163,184,0.2)] dark:bg-[#111827]/90 dark:text-[#F8FAFC] dark:hover:border-[#22D3EE]/60 dark:hover:bg-[#151D2E] clickable"
            >
              <FaDownload className="text-xs text-[#3B82F6] dark:text-[#22D3EE]" />
              Download Resume
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="mt-8 flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.42 }}
          >
            <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-500 dark:text-[#94A3B8] mr-1">
              Connect
            </span>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                aria-label={link.label}
                title={link.label}
                className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white/80 text-slate-700 transition hover:-translate-y-0.5 hover:border-[#3B82F6]/50 hover:text-[#3B82F6] dark:border-[rgba(148,163,184,0.15)] dark:bg-[#111827]/90 dark:text-[#94A3B8] dark:hover:border-[#22D3EE]/50 dark:hover:text-[#22D3EE] clickable"
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT SIDE – PROFILE PRESENTATION */}
        <motion.div
          className="lg:col-span-5 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative w-full max-w-[380px] floating-icon">
            {/* Ambient Outer Glow */}
            <div className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-[#3B82F6]/30 via-[#8B5CF6]/25 to-[#22D3EE]/25 blur-2xl opacity-75" />

            {/* Neon Gradient Border Frame */}
            <div className="relative rounded-[1.75rem] bg-gradient-to-br from-[#3B82F6] via-[#8B5CF6] to-[#22D3EE] p-[2px] shadow-[0_24px_70px_rgba(8,11,20,0.8)]">
              <div className="relative rounded-[1.65rem] bg-white dark:bg-[#111827] p-3.5 overflow-hidden">
                {/* Futuristic Top Status Strip */}
                <div className="mb-3 flex items-center justify-between rounded-xl border border-slate-200/80 bg-slate-50 px-3.5 py-2 dark:border-[rgba(148,163,184,0.15)] dark:bg-[#0D1220]">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#3B82F6]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#8B5CF6]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#22D3EE]" />
                  </div>
                  <span className="font-mono text-[10px] font-semibold tracking-wider text-slate-500 dark:text-[#94A3B8]">
                    profile.dev
                  </span>
                </div>

                {/* Profile Photo */}
                <div className="relative h-[340px] sm:h-[380px] w-full overflow-hidden rounded-2xl border border-slate-200 dark:border-[rgba(148,163,184,0.15)] bg-[#080B14]">
                  <img
                    src={SriImage}
                    alt={personal?.name || "Sridharshan M N"}
                    className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#080B14]/85 via-[#080B14]/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl border border-white/15 bg-[#080B14]/75 px-3.5 py-2 backdrop-blur-md">
                    <span className="text-xs font-semibold text-[#F8FAFC]">Sridharshan M N</span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#22D3EE]">
                      B.E. EEE · 2027
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Surrounding Tech Badges */}
            {floatingBadges.map((badge) => (
              <div
                key={badge.label}
                className={`hidden sm:flex items-center gap-2 rounded-xl border border-slate-200 bg-white/95 px-3 py-2 text-xs font-semibold text-slate-800 shadow-lg backdrop-blur-md dark:border-[rgba(148,163,184,0.2)] dark:bg-[#151D2E]/95 dark:text-[#F8FAFC] absolute z-20 ${badge.position}`}
              >
                {badge.icon}
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
