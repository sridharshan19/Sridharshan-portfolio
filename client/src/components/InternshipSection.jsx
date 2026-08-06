import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

function InternshipCard({ intern, idx }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    const rX = -(mouseY / (height / 2)) * 12; // tilt max 12deg
    const rY = (mouseX / (width / 2)) * 12;

    setTilt({ x: rX, y: rY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-card glow-border p-8 relative overflow-hidden flex flex-col justify-between transition-all duration-300 group"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: tilt.x === 0 ? "transform 0.4s ease" : "none"
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: idx * 0.15 }}
    >
      {/* Light gradient highlight */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-indigo/5 to-brand-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div>
        {/* Header Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <span className="text-xs bg-brand-purple/10 text-brand-purple px-4 py-1.5 rounded-full border border-brand-purple/20 font-bold uppercase tracking-wider">
            {intern.year}
          </span>
          <span className="text-xs text-brand-cyan font-extrabold tracking-widest uppercase">
            ⏱ {intern.duration}
          </span>
        </div>

        {/* Title & Company */}
        <h3 className="text-2xl font-display font-extrabold text-slate-900 dark:text-white group-hover:text-brand-purple transition-colors duration-300 mb-1">
          {intern.role}
        </h3>
        <p className="text-sm text-slate-600 dark:text-gray-400 font-semibold mb-6">
          {intern.company}
        </p>

        {/* Bullets List */}
        <ul className="space-y-3.5 mb-6">
          {intern.bullets.map((bullet, bIdx) => (
            <li key={bIdx} className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-brand-pink mt-1 flex-shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 pt-4 border-t border-slate-200 dark:border-white/5 text-[10px] text-gray-500 font-bold tracking-widest uppercase flex items-center justify-between">
        <span>Internship Experience</span>
        <span className="text-brand-pink">Verified ✓</span>
      </div>
    </motion.div>
  );
}

export default function InternshipSection({ internships }) {
  if (!internships) return null;

  return (
    <section id="internships" className="section-shell bg-white/[0.002]">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-indigo/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container">
        {/* Title */}
        <div className="mb-14 max-w-3xl">
          <span className="section-kicker">Professional Internships</span>
          <h2 className="section-heading">
            Industry exposure and systems building.
          </h2>
          <p className="section-subtitle">
            Applying algorithmic theories to production databases, Spring Boot APIs, and MERN software suites.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {internships.map((intern, idx) => (
            <InternshipCard key={idx} intern={intern} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
