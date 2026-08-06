import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaAward, FaCode, FaLaptopCode, FaSeedling } from "react-icons/fa";
import SriImage from "../assets/Sri.png";

export default function AboutSection({ personal }) {
  const statsData = [
    { value: 300, suffix: "+", label: "LeetCode problems", icon: <FaCode /> },
    { value: 400, suffix: "+", label: "SkillRack problems", icon: <FaLaptopCode /> },
    { value: 2, suffix: "+", label: "Hackathon awards", icon: <FaAward /> },
    { value: 4, suffix: "+", label: "Featured projects", icon: <FaSeedling /> }
  ];

  return (
    <section id="about" className="section-shell">
      <div className="section-container">
        <div className="mb-14 max-w-3xl">
          <span className="section-kicker">About me</span>
          <h2 className="section-heading">
            Engineering student with a product-builder mindset.
          </h2>
          <p className="section-subtitle">
            I combine core engineering discipline with full-stack software development, focusing on practical interfaces,
            secure APIs, and systems that feel smooth to use.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card glow-border h-full overflow-hidden p-4">
              <img
                src={SriImage}
                alt={personal?.name || "Sridharshan M N"}
                className="h-[32rem] w-full rounded-[1.35rem] object-cover object-top grayscale-[20%] transition duration-500 hover:grayscale-0"
              />
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-slate-950 p-4 text-white dark:bg-white dark:text-slate-950">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Focus</p>
                  <p className="mt-1 text-sm font-extrabold">Full-stack apps</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Status</p>
                  <p className="mt-1 text-sm font-extrabold text-brand-teal">Open to work</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7 space-y-6">
            <motion.div
              className="glass-card p-8 md:p-10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              <h3 className="font-display text-2xl md:text-3xl font-black tracking-tight text-slate-950 dark:text-white">
                Full-stack developer crafting usable dashboards, APIs, and responsive product flows.
              </h3>
              <div className="mt-6 space-y-4 text-sm md:text-base leading-8 text-slate-600 dark:text-slate-400 font-medium">
                <p>
                  I’m pursuing B.E. Electrical and Electronics Engineering at Sri Eshwar College of Engineering while
                  actively building with React, Node.js, Express, MongoDB, Spring Boot, and MySQL.
                </p>
                <p>
                  My strongest interest is turning messy real-world workflows into clean interfaces: admin dashboards,
                  authentication flows, reports, analytics, and role-based systems.
                </p>
                <p className="rounded-2xl border border-brand-cyan/20 bg-brand-cyan/10 p-4 text-slate-800 dark:text-cyan-100">
                  Career Objective: Join a developer-centric team where I can grow through practical engineering,
                  problem solving, and production-minded software delivery.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
              {statsData.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  className="glass-card p-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-white dark:bg-white dark:text-slate-950">
                    {stat.icon}
                  </div>
                  <h4 className="font-display text-3xl font-black text-slate-950 dark:text-white">
                    <CountUp end={stat.value} duration={2.2} enableScrollSpy scrollSpyDelay={100} />
                    {stat.suffix}
                  </h4>
                  <p className="mt-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
