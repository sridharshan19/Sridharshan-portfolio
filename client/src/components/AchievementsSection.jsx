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
        color: ["#4F46E5", "#06B6D4", "#EC4899", "#F59E0B", "#14B8A6"][i % 5],
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
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/25 bg-brand-gold/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-brand-gold">
            <FaMedal /> Recognition
          </span>
          <span className="text-sm font-black text-brand-pink">{ach.year}</span>
        </div>

        <div className="mb-6 grid h-16 w-16 place-items-center rounded-3xl bg-slate-950 text-2xl text-white transition group-hover:scale-110 dark:bg-white dark:text-slate-950">
          <FaAward />
        </div>

        <h3 className="font-display text-2xl font-black tracking-tight text-slate-950 transition group-hover:text-brand-pink dark:text-white">
          {ach.title}
        </h3>
        <p className="mt-3 text-xs font-black uppercase tracking-[0.18em] text-brand-cyan">{ach.issuer}</p>
        <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-400">{ach.description}</p>
      </div>

      <div className="relative z-20 mt-8 flex items-center justify-between border-t border-slate-200 pt-4 text-[10px] font-black uppercase tracking-[0.18em] text-slate-500 dark:border-white/10 dark:text-slate-400">
        <span>Achievement</span>
        <span className="text-brand-gold">First Prize</span>
      </div>
    </motion.article>
  );
}

export default function AchievementsSection({ achievements }) {
  if (!achievements) return null;

  return (
    <section id="achievements" className="section-shell">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

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
