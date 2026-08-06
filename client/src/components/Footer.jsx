import React, { useEffect, useState } from "react";
import { FaArrowUp, FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

export default function Footer({ personal }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => setShowScrollTop(window.scrollY > 420);
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  const socialLinks = [
    { icon: <FaGithub />, url: personal?.github || "#", label: "GitHub", external: true },
    { icon: <FaLinkedin />, url: personal?.linkedin || "#", label: "LinkedIn", external: true },
    { icon: <FaEnvelope />, url: personal?.email ? `mailto:${personal.email}` : "#", label: "Email" },
    { icon: <FaPhone />, url: personal?.phone ? `tel:${personal.phone}` : "#", label: "Phone" }
  ];

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white/45 py-12 backdrop-blur dark:border-white/10 dark:bg-slate-950/45">
      <div className="section-container">
        <div className="glass-card p-8 md:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-white dark:bg-white dark:text-slate-950">
                <span className="font-display text-2xl font-black">S</span>
              </div>
              <h3 className="font-display text-2xl font-black tracking-tight text-slate-950 dark:text-white">
                {personal?.name || "Sridharshan M N"}
              </h3>
              <p className="mt-2 text-sm font-semibold text-slate-600 dark:text-slate-400">
                MERN & Java Full Stack Developer — open for meaningful product work.
              </p>
            </div>

            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="grid h-12 w-12 place-items-center rounded-2xl border border-slate-200 bg-white/70 text-slate-600 transition hover:-translate-y-1 hover:border-brand-indigo/30 hover:text-brand-indigo dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-brand-cyan clickable"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-6 text-xs font-bold text-slate-500 dark:border-white/10 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; {new Date().getFullYear()} Sridharshan M N. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand-teal animate-pulse" />
              <span>Open for collaboration and full-time opportunities</span>
            </div>
          </div>
        </div>
      </div>

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-40 grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-white shadow-2xl shadow-brand-indigo/20 transition hover:-translate-y-1 dark:bg-white dark:text-slate-950 clickable"
          title="Scroll back to top"
          aria-label="Scroll back to top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
}
