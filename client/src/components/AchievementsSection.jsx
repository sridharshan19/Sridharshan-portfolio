import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaAward, FaMedal } from "react-icons/fa";

function AchievementCard({ ach, idx }) {
  const [isHovered, setIsHovered] = useState(false);
  const confettiPieces = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        id: i,
        x: ((i % 7) - 3) * 26,
        y: -70 - (i % 5) * 18,
        size: 5 + (i % 4),
        rotate: i * 31,
        color: ["#3B82F6", "#8B5CF6", "#22D3EE", "#F59E0B", "#60A5FA"][i % 5],
        delay: (i % 4) * 0.04
      })),
    []
  );

  return (
    <motion.article
      className="glass-card glow-border group relative flex min-h-[20rem] cursor-pointer flex-col justify-between overflow-hidden p-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.55, delay: idx * 0.1 }}
      whileHover={{ y: -6 }}
    >
      <AnimatePresence>
        {isHovered && (
          <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
            {confettiPieces.map((piece) => (
              <motion.span
                key={piece.id}
                className="absolute left-1/2 top-1/2 rounded-sm"
                style={{
                  width: `${piece.size}px`,
                  height: `${piece.size}px`,
                  backgroundColor: piece.color
                }}
                initial={{ opacity: 0, x: 0, y: 0, scale: 0.6, rotate: 0 }}
                animate={{ opacity: [0, 1, 0], x: piece.x, y: piece.y, scale: [0.6, 1, 0.4], rotate: piece.rotate }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, delay: piece.delay, ease: "easeOut" }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="mb-6 flex items-center justify-between">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#3B82F6] dark:text-[#22D3EE]">
            <FaMedal /> Recognition
          </span>
          <span className="text-sm font-bold text-[#8B5CF6]">{ach.year}</span>
        </div>

        <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] text-2xl text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] transition group-hover:scale-105">
          <FaAward />
        </div>

        <h3 className="font-display text-2xl font-bold tracking-tight text-slate-950 transition group-hover:text-[#3B82F6] dark:text-[#F8FAFC] dark:group-hover:text-[#22D3EE]">
          {ach.title}
        </h3>
        <p className="mt-2.5 text-xs font-bold uppercase tracking-[0.16em] text-[#22D3EE]">{ach.issuer}</p>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-[#94A3B8]">{ach.description}</p>
      </div>

      <div className="relative z-20 mt-8 flex items-center justify-between border-t border-slate-200 pt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:border-[rgba(148,163,184,0.15)] dark:text-[#94A3B8]">
        <span>Achievement</span>
        <span className="text-[#F59E0B]">
          {ach.title?.toLowerCase().includes("first")
            ? "First Prize"
            : ach.title?.toLowerCase().includes("finalist")
              ? "National Finalist"
              : "Recognized"}
        </span>
      </div>
    </motion.article>
  );
}

export default function AchievementsSection({ achievements }) {
  if (!achievements) return null;

  return (
    <section id="achievements" className="section-shell">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#3B82F6]/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="section-container">
        <div className="mb-14 max-w-3xl">
          <span className="section-kicker">Awards</span>
          <h2 className="section-heading">Recognition earned through building.</h2>
          <p className="section-subtitle">
            Hackathon results and technical milestones that show practical execution under constraints.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {achievements.map((ach, idx) => (
            <AchievementCard key={ach.title} ach={ach} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
