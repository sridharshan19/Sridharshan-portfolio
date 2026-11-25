import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaChevronDown, FaChevronUp, FaLaptopCode, FaTrophy } from "react-icons/fa";

const EXPERIENCE_POSTS = [
  {
    id: "rv-techlearn",
    category: "Internship",
    title: "MERN Stack Intern",
    subtitle: "RV Techlearn Institute",
    badge: "2025 · 17 Days",
    preview:
      "Hands-on full-stack training across MongoDB, Express.js, React.js, and Node.js with project-based API integration.",
    details:
      "Built responsive React user interfaces connected to RESTful Express/Node services, practiced MongoDB schema modeling and CRUD operations, and sharpened full-stack debugging workflows."
  },
  {
    id: "rampex",
    category: "Internship",
    title: "Java Full Stack Developer Intern",
    subtitle: "RAMPeX Technologies",
    badge: "2025 · 15 Days",
    preview:
      "Developed full-stack web applications using React for the frontend and Spring Boot with MySQL on the backend.",
    details:
      "Designed modular REST APIs with JWT authentication, database persistence in MySQL, and reusable React UI components following clean full-stack architecture."
  }
];

const ARCHITECTURE_POSTS = [
  {
    id: "worksphere",
    category: "Architecture",
    title: "WorkSphere HRMS — Enterprise Workforce Platform",
    subtitle: "React 19 · Spring Boot 3 · MongoDB · JWT Security",
    preview:
      "Enterprise-grade HR operations suite unifying 5-tier dynamic RBAC, automated shift attendance, and payroll processing.",
    details:
      "Architected role-based access control across 5 permission tiers, automated shift punctuality calculations, monthly payroll PDF payslip generation, hardware asset lifecycle tracking, employee messaging, and an AI HR Copilot."
  },
  {
    id: "tracknest",
    category: "SaaS & Backend",
    title: "TrackNest — Smart Subscription & Expense Manager",
    subtitle: "React 19 · Spring Boot 3.3 · MongoDB · Docker · Twilio SMS",
    preview:
      "Multi-container financial platform with dual-token JWT authentication, Recharts gauges, and automated renewal alerts.",
    details:
      "Implemented stateless access/refresh token rotation with Spring Security, scheduled daily Spring cron jobs dispatching renewal alerts via Twilio SMS and email, category spending thresholds, and Docker Compose + Nginx deployment."
  },
  {
    id: "nextgen",
    category: "Full Stack",
    title: "NextGen Resume Builder — Dynamic CV Platform",
    subtitle: "Spring Boot · React · MySQL · Google OAuth · Razorpay",
    preview:
      "Dynamic resume creator featuring responsive ATS templates, auto-save state, Google OAuth 2.0, and Razorpay checkout.",
    details:
      "Combined real-time template previews with auto-saved state persistence in MySQL, seamless Google OAuth single sign-on, Razorpay premium payment verification, and high-resolution PDF export."
  }
];

const MILESTONE_POSTS = [
  {
    id: "sece-hackathon",
    category: "Hackathon",
    title: "Career Readiness Hackathon — First Prize",
    subtitle: "Sri Eshwar College of Engineering (2026)",
    preview:
      "Secured First Prize by designing, architecting, and shipping an industry-grade project within a 24-hour sprint.",
    details:
      "Collaborated under tight 24-hour constraints to define the problem scope, build full-stack APIs and frontend flows, and present a working production-minded solution to judges."
  },
  {
    id: "intellina",
    category: "Hackathon",
    title: "INTELLINA Hackathon Finalist",
    subtitle: "Coimbatore Institute of Technology (2025)",
    preview:
      "Shortlisted as a national finalist for building a web-based mentor-student progress tracker application.",
    details:
      "Designed structured workflows helping faculty monitor student academic milestones, mentorship feedback, and activity submissions in one dashboard."
  },
  {
    id: "dsa-journey",
    category: "Competitive Coding",
    title: "Competitive Problem Solving Trajectory",
    subtitle: "LeetCode & SkillRack Platforms",
    preview:
      "Solved 300+ problems on LeetCode (Contest Rating 1579) and 400+ problems on SkillRack (Silver / Gold Badges).",
    details:
      "Practiced arrays, trees, graphs, dynamic programming, and greedy optimization consistently in Java and JavaScript to improve time and space complexity."
  }
];

function BlogCard({ post }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      className="glass-card glow-border p-6 flex flex-col justify-between"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -3 }}
    >
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 text-[#3B82F6] dark:text-[#22D3EE]">
            {post.category}
          </span>
          {post.badge && (
            <span className="text-[11px] font-semibold text-[#94A3B8]">{post.badge}</span>
          )}
        </div>

        <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-[#F8FAFC]">
          {post.title}
        </h3>
        <p className="text-xs font-semibold text-[#8B5CF6] dark:text-[#22D3EE] mt-1 mb-3">
          {post.subtitle}
        </p>

        <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-[#94A3B8]">
          {post.preview}
        </p>

        {expanded && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-3 pt-3 border-t border-slate-200 dark:border-[rgba(148,163,184,0.15)] text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-[#F8FAFC]/90"
          >
            {post.details}
          </motion.p>
        )}
      </div>

      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#3B82F6] dark:text-[#22D3EE] hover:underline self-start clickable"
      >
        {expanded ? (
          <>
            Show Less <FaChevronUp className="text-[10px]" />
          </>
        ) : (
          <>
            Read More <FaChevronDown className="text-[10px]" />
          </>
        )}
      </button>
    </motion.article>
  );
}

export default function Blog() {
  return (
    <div className="section-container py-12 space-y-14">
      <div className="max-w-3xl">
        <span className="section-kicker">Articles &amp; Journey</span>
        <h1 className="section-heading">
          Developer <span className="text-glow-gradient">Stories &amp; Case Studies</span>
        </h1>
        <p className="section-subtitle">
          Notes from my full-stack engineering internships, system architecture builds, hackathons, and competitive programming practice.
        </p>
      </div>

      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl border border-[#3B82F6]/30 bg-[#3B82F6]/10 text-[#3B82F6] dark:text-[#22D3EE]">
            <FaBriefcase />
          </div>
          <h2 className="text-2xl font-display font-bold text-slate-950 dark:text-[#F8FAFC]">
            Internship Writeups
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {EXPERIENCE_POSTS.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 text-[#8B5CF6]">
            <FaLaptopCode />
          </div>
          <h2 className="text-2xl font-display font-bold text-slate-950 dark:text-[#F8FAFC]">
            Architecture Case Studies
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {ARCHITECTURE_POSTS.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl border border-[#22D3EE]/30 bg-[#22D3EE]/10 text-[#22D3EE]">
            <FaTrophy />
          </div>
          <h2 className="text-2xl font-display font-bold text-slate-950 dark:text-[#F8FAFC]">
            Hackathons &amp; Coding Milestones
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {MILESTONE_POSTS.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
