import React from "react";
import { FaGraduationCap, FaLaptopCode, FaTrophy, FaBriefcase, FaCode } from "react-icons/fa";

export default function Blog() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6 space-y-16">
      {/* Header Banner */}
      <div className="text-center md:text-left">
        <span className="section-kicker">📖 Articles & Journey</span>
        <h1 className="mt-2 text-4xl md:text-5xl font-display font-extrabold text-slate-950 dark:text-white tracking-tight">
          Developer <span className="text-glow-gradient">Stories & Highlights</span>
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300 max-w-3xl font-medium">
          Detailed insights into my full-stack engineering internships, competitive programming trajectory, hackathon achievements, and major architecture projects.
        </p>
      </div>

      {/* PROFESSIONAL EXPERIENCE SECTION */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-indigo/10 text-brand-indigo dark:text-brand-cyan text-lg">
            <FaBriefcase />
          </div>
          <h2 className="text-2xl font-display font-extrabold text-slate-950 dark:text-white">
            Professional Experience Writeups
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Experience 1 */}
          <div className="glass-card glow-border p-7 rounded-2xl border border-slate-200 dark:border-white/10 flex flex-col justify-between hover:border-brand-indigo/30 transition-all duration-300">
            <div>
              <div className="flex justify-between items-start gap-4 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">MERN Stack Intern</h3>
                  <p className="text-xs font-bold text-brand-indigo dark:text-brand-cyan mt-1">RV Techlearn Institute</p>
                </div>
                <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  2025
                </span>
              </div>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
                Gained hands-on experience in developing full-stack web applications using <strong>MongoDB, Express.js, React.js, and Node.js</strong>. Developed skills in frontend and backend development through project-based learning, real-time implementation, and RESTful API integration.
              </p>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="glass-card glow-border p-7 rounded-2xl border border-slate-200 dark:border-white/10 flex flex-col justify-between hover:border-brand-purple/30 transition-all duration-300">
            <div>
              <div className="flex justify-between items-start gap-4 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Java Full Stack Developer</h3>
                  <p className="text-xs font-bold text-brand-purple dark:text-brand-cyan mt-1">RAMPeX Technologies</p>
                </div>
                <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  2025
                </span>
              </div>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
                Created full-stack web applications using <strong>React</strong> for the frontend and <strong>Spring Boot 3</strong> for the backend. Designed RESTful APIs, managed state, and implemented <strong>JWT authentication with role-based access control</strong> and MySQL integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED ARCHITECTURE BREAKDOWN */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-cyan/10 text-brand-cyan text-lg">
            <FaLaptopCode />
          </div>
          <h2 className="text-2xl font-display font-extrabold text-slate-950 dark:text-white">
            Architecture Case Studies
          </h2>
        </div>

        <div className="grid gap-6">
          <div className="glass-card p-8 rounded-2xl border border-slate-200 dark:border-white/10">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">LeaveMate — Workflow Automation</h3>
            <p className="text-xs font-extrabold text-brand-indigo dark:text-brand-cyan mb-3 uppercase tracking-wider">MERN Stack • MongoDB • Express.js • React.js • Node.js</p>
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
              A simplified leave management application that automates and streamlines employee leave applications, approval hierarchies, and department statistics. Users can apply for leaves effortlessly while managers approve requests via visual dashboards.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl border border-slate-200 dark:border-white/10">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Event Insight — Anonymous Feedback Engine</h3>
            <p className="text-xs font-extrabold text-brand-purple dark:text-brand-cyan mb-3 uppercase tracking-wider">MERN Stack • Time-Locked Confidential Feedback</p>
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
              An anonymous feedback management system built with MERN Stack. Attendees provide candid feedback to event organizers during conferences, with feedback contents encrypted and unlocked exclusively on the event's final day.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl border border-slate-200 dark:border-white/10">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">NextGen Resume Builder — SaaS Platform</h3>
            <p className="text-xs font-extrabold text-brand-teal mb-3 uppercase tracking-wider">Spring Boot • React.js • JWT • Razorpay</p>
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
              A comprehensive resume builder with Live Preview and Custom ATS Templates. Features user authentication with JWT, profile image uploads, client-side PDF rendering, and Razorpay payment gateway integration.
            </p>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS & COMPETITIVE PROGRAMMING */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-amber-500/10 text-amber-500 text-lg">
            <FaTrophy />
          </div>
          <h2 className="text-2xl font-display font-extrabold text-slate-950 dark:text-white">
            Hackathons & Coding Milestones
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-white/10">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">INTELLINA Hackathon Finalist</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-bold mb-3">Coimbatore Institute of Technology (CIT)</p>
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
              Selected as a national finalist for designing a web-based mentor-student progress tracker helping faculty monitor academic trajectory and activity submissions.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-slate-200 dark:border-white/10">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Competitive Problem Solving</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-bold mb-3">LeetCode & SkillRack Platforms</p>
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 font-medium">
              Solved 300+ problems on LeetCode (Contest Rating 1579) and 400+ problems on SkillRack (Gold Badge Rank), demonstrating algorithmic proficiency in Java and JavaScript.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}