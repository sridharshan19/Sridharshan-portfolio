import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowUp, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer({ personal }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => setShowScrollTop(window.scrollY > 420);
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/skills", label: "Skills" },
    { to: "/projects", label: "Projects" },
    { to: "/resume", label: "Resume" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" }
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: personal?.github || "#", label: "GitHub", external: true },
    { icon: <FaLinkedin />, url: personal?.linkedin || "#", label: "LinkedIn", external: true },
    { icon: <FaEnvelope />, url: personal?.email ? `mailto:${personal.email}` : "#", label: "Email" }
  ];

  return (
    <footer className="relative border-t border-slate-200 bg-white/65 py-12 backdrop-blur-md dark:border-[rgba(148,163,184,0.15)] dark:bg-[#0D1220]/85">
      <div className="section-container">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Left: Brand */}
          <div className="flex items-center gap-3.5">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] text-white shadow-[0_0_24px_rgba(59,130,246,0.3)]">
              <span className="font-display text-xl font-bold">S</span>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold tracking-tight text-slate-950 dark:text-[#F8FAFC]">
                {personal?.name || "SRIDHARSHAN M N"}
              </h3>
              <p className="text-xs font-medium text-slate-600 dark:text-[#94A3B8]">
                Full Stack Developer · Java · Spring Boot · React
              </p>
            </div>
          </div>

          {/* Center: Navigation Links */}
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-xs font-semibold text-slate-600 transition-colors hover:text-[#3B82F6] dark:text-[#94A3B8] dark:hover:text-[#22D3EE] clickable"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-2.5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white/80 text-slate-600 transition hover:-translate-y-0.5 hover:border-[#3B82F6]/50 hover:text-[#3B82F6] dark:border-[rgba(148,163,184,0.15)] dark:bg-[#111827] dark:text-[#94A3B8] dark:hover:border-[#22D3EE]/50 dark:hover:text-[#22D3EE] clickable"
                aria-label={link.label}
                title={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs font-medium text-slate-500 dark:border-[rgba(148,163,184,0.15)] dark:text-[#94A3B8] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {personal?.name || "Sridharshan M N"}. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#22D3EE] animate-pulse" />
            <span>Open to Full-Stack Software Engineering Opportunities</span>
          </div>
        </div>
      </div>

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] text-white shadow-[0_0_24px_rgba(59,130,246,0.4)] transition hover:-translate-y-1 clickable"
          title="Scroll back to top"
          aria-label="Scroll back to top"
        >
          <FaArrowUp className="text-sm" />
        </button>
      )}
    </footer>
  );
}
