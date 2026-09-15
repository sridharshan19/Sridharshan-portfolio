import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/resume", label: "Resume" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" }
  ];

  const linkClass = ({ isActive }) =>
    `relative rounded-full px-4 py-2 text-sm font-extrabold transition clickable ${isActive
      ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
      : "text-slate-600 hover:bg-slate-900/5 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
    }`;

  return (
    <motion.nav
      className="glass-navbar fixed left-0 top-0 z-50 w-full"
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55 }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-3 clickable" onClick={() => setIsOpen(false)}>
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-brand-indigo/15 dark:bg-white dark:text-slate-950">
            <span className="font-display text-xl font-black">S</span>
          </div>
          <div>
            <h1 className="font-display text-base font-black leading-none tracking-tight text-slate-950 dark:text-white">
              SRIDHARSHAN
            </h1>
            <p className="mt-1 text-[10px] font-black uppercase tracking-[0.24em] text-brand-indigo dark:text-brand-cyan">
              FULL STACK
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white/50 p-1 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 bg-white/70 text-brand-indigo shadow-sm transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5 dark:text-brand-cyan clickable"
            aria-label="Toggle theme mode"
            title="Toggle theme mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <button
            onClick={() => setIsOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 bg-white/70 text-slate-700 shadow-sm transition dark:border-white/10 dark:bg-white/5 dark:text-white md:hidden clickable"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden border-t border-slate-200 bg-white/90 px-5 py-5 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/90"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="grid gap-2">
              {navLinks.map((link) => (
                <NavLink key={link.to} to={link.to} onClick={() => setIsOpen(false)} className={linkClass}>
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
