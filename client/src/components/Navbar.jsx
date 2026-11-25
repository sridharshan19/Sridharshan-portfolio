import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/skills", label: "Skills" },
    { to: "/projects", label: "Projects" },
    { to: "/resume", label: "Resume" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" }
  ];

  const linkClass = ({ isActive }) =>
    `relative rounded-lg px-3.5 py-2 text-xs font-semibold tracking-wide transition-all duration-200 clickable ${
      isActive
        ? "bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white shadow-[0_0_18px_rgba(59,130,246,0.3)]"
        : "text-slate-600 hover:text-slate-950 hover:bg-slate-900/5 dark:text-[#94A3B8] dark:hover:text-[#F8FAFC] dark:hover:bg-white/5"
    }`;

  return (
    <motion.nav
      className="glass-navbar sticky top-0 z-50 w-full"
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3.5">
        {/* Left: Brand Initials & Name */}
        <Link
          to="/"
          className="flex items-center gap-3 group clickable"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] text-white shadow-[0_0_24px_rgba(59,130,246,0.35)] transition-transform duration-300 group-hover:scale-105">
            <span className="font-display text-lg font-bold tracking-tight">S</span>
          </div>
          <div>
            <span className="block font-display text-sm sm:text-base font-bold leading-none tracking-tight text-slate-950 dark:text-[#F8FAFC]">
              SRIDHARSHAN M N
            </span>
            <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.22em] text-[#3B82F6] dark:text-[#22D3EE]">
              Full Stack Developer
            </span>
          </div>
        </Link>

        {/* Right: Desktop Navigation Links + Theme Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-1 rounded-xl border border-slate-200/80 bg-white/60 px-2 py-1.5 backdrop-blur-md dark:border-[rgba(148,163,184,0.15)] dark:bg-[#111827]/80">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `relative rounded-lg px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 clickable ${
                    isActive
                      ? "bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white shadow-[0_0_18px_rgba(59,130,246,0.35)]"
                      : "text-slate-600 hover:text-slate-950 hover:bg-slate-200/60 dark:text-[#94A3B8] dark:hover:text-[#F8FAFC] dark:hover:bg-white/5"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white/80 text-[#3B82F6] transition hover:border-[#3B82F6]/50 dark:border-[rgba(148,163,184,0.15)] dark:bg-[#111827] dark:text-[#22D3EE] dark:hover:border-[#22D3EE]/50 clickable"
            aria-label="Toggle color theme"
            title="Toggle color theme"
          >
            {darkMode ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
          </button>

          <button
            onClick={() => setIsOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white/80 text-slate-700 transition dark:border-[rgba(148,163,184,0.15)] dark:bg-[#111827] dark:text-[#F8FAFC] lg:hidden clickable"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden border-t border-slate-200 bg-white/95 px-4 py-4 backdrop-blur-xl dark:border-[rgba(148,163,184,0.15)] dark:bg-[#0D1220]/95"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
          >
            <div className="grid gap-1.5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setIsOpen(false)}
                  className={linkClass}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
