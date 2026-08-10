import React from "react";
import { FaPrint, FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";

export default function Resume({ personal, education, internships, projects, skills, certifications, achievements, codingProfiles }) {
  const handlePrint = () => { window.print(); };

  /* ── PDF-only compact descriptions ── */
  const pdfDesc = {
    NatureCart:              "Built a role-based farm-to-consumer marketplace with inventory management, order tracking, analytics dashboards and PDF report generation.",
    TransTrack:              "Developed a fleet management system with driver tracking, trip/expense analytics, Brevo SMTP notifications and JWT-secured APIs.",
    TrackNest:               "Built a subscription & expense SaaS with stateless JWT dual-token auth, automated Spring cron billing alerts via Twilio SMS & Email, and Docker deployment.",
    "NextGen Resume Builder":"Created a dynamic resume builder with live templates, auto-save, Google OAuth authentication and Razorpay premium payment integration.",
    LeaveMate:               "Built a leave management platform with employee request workflows, admin approval dashboards, real-time status updates and visual metrics.",
    "WorkSphere HRMS":       "Enterprise-grade HR operations platform with 5-tier RBAC, shift attendance engine, automated payroll calculator, PDF payslips, asset vault, & AI HR Copilot.",
  };

  /* Page 1 projects (indices 0-1), Page 2 projects (indices 2+) */
  const p1Projects = (projects || []).slice(0, 2);
  const p2Projects = (projects || []).slice(2);

  const renderPdfProject = (proj) => (
    <article key={proj.title} className="pdf-entry pdf-proj">
      <div className="pdf-proj-head">
        <div className="pdf-proj-left">
          <span className="pdf-proj-name">{proj.title}</span>
          <span className="pdf-proj-tag">{proj.tagline}</span>
        </div>
        <a href={proj.github} target="_blank" rel="noopener noreferrer" className="pdf-link">
          GitHub ↗
        </a>
      </div>
      <p className="pdf-body">{pdfDesc[proj.title] || proj.description}</p>
      <p className="pdf-feats">
        {proj.features.map((f, i) => (
          <span key={i}>• {f}&nbsp;&nbsp;</span>
        ))}
      </p>
      <p className="pdf-tech"><strong>Tech:</strong> {proj.tech.join(" • ")}</p>
    </article>
  );

  return (
    <div className="py-12 relative overflow-hidden resume-wrapper">

      {/* ═══════════════════════════════════════════════════
          GLOBAL STYLE: pdf-resume hidden on screen,
          screen-resume hidden during print
      ═══════════════════════════════════════════════════ */}
      <style dangerouslySetInnerHTML={{ __html: `

        /* ── Screen: hide PDF layer ── */
        .pdf-resume { display: none; }

        /* ══════════════════════════════════════════════
           @media print  —  PDF-only styles
        ══════════════════════════════════════════════ */
        @media print {
          @page {
            size: A4;
            margin: 14mm 15mm;
          }

          /* Kill everything except pdf-resume */
          body, html { background: #fff !important; margin: 0 !important; padding: 0 !important; }
          .screen-resume, .floating-print-btn,
          nav, footer, button,
          .custom-cursor-dot, .custom-cursor-outline,
          .fixed, .aurora-bg, .no-print, canvas {
            display: none !important;
          }
          main { padding-top: 0 !important; }

          /* Show PDF layer */
          .pdf-resume {
            display: block !important;
            font-family: 'Inter', Arial, sans-serif;
            font-size: 10pt;
            color: #111827;
            line-height: 1.3;
            background: #fff;
          }

          /* ── Pages ── */
          .pdf-page {
            width: 100%;
            background: #fff;
            color: #111827;
          }
          .pdf-page-1 {
            page-break-after: always;
            break-after: page;
          }
          .pdf-page-2 {
            page-break-after: auto;
            break-after: auto;
          }
          /* Page 1 — more breathing room to fill the page naturally */
          .pdf-page-1 .pdf-sec {
            margin-bottom: 16px;
          }
          .pdf-page-1 .pdf-entry {
            margin-bottom: 11px;
          }
          .pdf-page-1 .pdf-proj {
            margin-bottom: 12px;
          }
          .pdf-page-1 .pdf-bullets li {
            margin-bottom: 4px;
          }
          .pdf-page-1 .pdf-body {
            margin-bottom: 3px;
          }
          /* Page 2 — keep tighter spacing */
          .pdf-page-2 .pdf-sec {
            margin-bottom: 13px;
          }

          /* ── Header ── */
          .pdf-header {
            display: grid;
            grid-template-columns: 1.5fr 1fr;
            gap: 12px;
            align-items: start;
            border-bottom: 1.5px solid #d1d5db;
            padding-bottom: 8px;
            margin-bottom: 10px;
          }
          .pdf-header h1 {
            margin: 0 0 3px;
            font-size: 26pt;
            font-weight: 800;
            color: #111827;
            line-height: 1.05;
            letter-spacing: -0.3px;
          }
          .pdf-hdr-title {
            margin: 0;
            font-size: 12pt;
            font-weight: 700;
            color: #2563eb;
            line-height: 1.2;
            text-transform: uppercase;
            letter-spacing: 0.4px;
          }
          .pdf-contact {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 3px;
            justify-content: center;
          }
          .pdf-contact a {
            display: flex;
            align-items: center;
            gap: 5px;
            font-size: 9.5pt;
            color: #374151;
            text-decoration: none;
            line-height: 1.25;
            white-space: nowrap;
          }
          .pdf-contact a svg {
            color: #2563eb;
            flex-shrink: 0;
          }

          /* ── Section wrapper ── */
          .pdf-sec {
            margin: 0 0 10px;
            break-inside: avoid;
            page-break-inside: avoid;
          }
          .pdf-sec h2 {
            margin: 0 0 5px;
            padding-bottom: 2px;
            border-bottom: 1px solid #d1d5db;
            font-size: 15pt;
            font-weight: 700;
            color: #111827;
            text-transform: uppercase;
            letter-spacing: 0.3px;
            line-height: 1.15;
          }

          /* ── Generic entry ── */
          .pdf-entry {
            margin-bottom: 8px;
            break-inside: avoid;
            page-break-inside: avoid;
          }
          .pdf-entry-head {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 8px;
            margin-bottom: 2px;
          }
          .pdf-entry h3 {
            margin: 0;
            font-size: 12pt;
            font-weight: 700;
            color: #111827;
            line-height: 1.2;
          }
          .pdf-sub {
            margin: 1px 0 0;
            font-size: 10.5pt;
            font-weight: 600;
            color: #2563eb;
            line-height: 1.2;
          }
          .pdf-date {
            flex-shrink: 0;
            font-size: 9.5pt;
            font-weight: 600;
            color: #6b7280;
            text-align: right;
            line-height: 1.2;
            white-space: nowrap;
          }
          .pdf-body {
            margin: 0 0 3px;
            font-size: 10pt;
            color: #374151;
            line-height: 1.32;
          }
          .pdf-bullets {
            margin: 0 0 4px 14px;
            padding: 0;
          }
          .pdf-bullets li {
            font-size: 10pt;
            color: #374151;
            margin: 0 0 3px;
            line-height: 1.32;
          }

          /* ── Project-specific ── */
          .pdf-proj { margin-bottom: 9px; }
          .pdf-proj-head {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            gap: 8px;
            margin-bottom: 2px;
          }
          .pdf-proj-left {
            display: flex;
            align-items: baseline;
            gap: 8px;
            flex-wrap: wrap;
          }
          .pdf-proj-name {
            font-size: 12pt;
            font-weight: 700;
            color: #111827;
            line-height: 1.2;
          }
          .pdf-proj-tag {
            font-size: 10.5pt;
            font-weight: 600;
            color: #2563eb;
            line-height: 1.2;
          }
          .pdf-link {
            flex-shrink: 0;
            font-size: 9.5pt;
            font-weight: 600;
            color: #2563eb;
            text-decoration: none;
            white-space: nowrap;
          }
          .pdf-feats {
            margin: 3px 0;
            font-size: 9.5pt;
            color: #374151;
            line-height: 1.32;
          }
          .pdf-tech {
            margin: 3px 0 0;
            font-size: 9.5pt;
            color: #374151;
            line-height: 1.22;
          }
          .pdf-tech strong { color: #111827; font-weight: 700; margin-right: 2px; }

          /* ── Skills 2-col grid ── */
          .pdf-skills {
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 40px;
            row-gap: 4px;
          }
          .pdf-skill-row {
            font-size: 10pt;
            color: #374151;
            line-height: 1.3;
          }
          .pdf-skill-row strong { color: #111827; font-weight: 700; }

          /* ── Certifications 3-col ── */
          .pdf-cert-table { display: grid; gap: 5px; }
          .pdf-cert-row {
            display: grid;
            grid-template-columns: 2.6fr 1fr 0.42fr;
            gap: 10px;
            align-items: baseline;
          }
          .pdf-cert-row span { font-size: 9.5pt; color: #374151; line-height: 1.25; }
          .pdf-cert-row strong { font-size: 9.5pt; font-weight: 600; color: #111827; }
          .pdf-cert-row .pdf-cert-year {
            color: #6b7280;
            text-align: right;
            font-weight: 500;
          }
          .pdf-cert-row a {
            font-size: 9.5pt;
            color: #2563eb;
            text-decoration: none;
            font-weight: 600;
          }

          /* ── Coding Profiles 3-col ── */
          .pdf-profile-table { display: grid; gap: 5px; }
          .pdf-profile-row {
            display: grid;
            grid-template-columns: 0.65fr 2fr 0.62fr;
            gap: 10px;
            align-items: baseline;
          }
          .pdf-profile-row span { font-size: 9.5pt; color: #374151; line-height: 1.25; }
          .pdf-profile-row strong { font-size: 9.5pt; font-weight: 700; color: #111827; }
          .pdf-profile-row a {
            font-size: 9.5pt;
            color: #2563eb;
            text-decoration: none;
            font-weight: 600;
            text-align: right;
            white-space: nowrap;
          }

          /* ── Achievement compact ── */
          .pdf-ach-entry { margin-bottom: 7px; break-inside: avoid; }
          .pdf-ach-head {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            gap: 8px;
          }
          .pdf-ach-head h3 {
            margin: 0;
            font-size: 12pt;
            font-weight: 700;
            color: #111827;
            line-height: 1.2;
          }
          .pdf-ach-meta {
            font-size: 9.5pt;
            color: #6b7280;
            font-weight: 600;
            white-space: nowrap;
            flex-shrink: 0;
          }
          .pdf-ach-sub {
            margin: 1px 0;
            font-size: 10pt;
            color: #2563eb;
            font-weight: 600;
            line-height: 1.2;
          }
          .pdf-ach-body {
            margin: 1px 0 0;
            font-size: 10pt;
            color: #374151;
            line-height: 1.3;
          }
        }
      `}} />

      {/* ══════════════════════════════════════════════
          PRINT-ONLY PDF LAYOUT (hidden on screen)
      ══════════════════════════════════════════════ */}
      <div className="pdf-resume" aria-hidden="true">

        {/* ─── PAGE 1: Header + Education + Internships + NatureCart + TransTrack ─── */}
        <div className="pdf-page pdf-page-1">

          {/* Header */}
          <header className="pdf-header">
            <div>
              <h1>{personal?.name || "SRIDHARSHAN M N"}</h1>
              <p className="pdf-hdr-title">Java Full Stack Developer</p>
            </div>
            <div className="pdf-contact">
              <a href={personal?.phone ? `tel:${personal.phone}` : "#"}>
                <FaPhoneAlt />{personal?.phone}
              </a>
              <a href={personal?.email ? `mailto:${personal.email}` : "#"}>
                <FaEnvelope />{personal?.email}
              </a>
              <a href={personal?.github} target="_blank" rel="noopener noreferrer">
                <FaGithub />{personal?.github?.replace(/^https?:\/\/(www\.)?/, "") || "github.com/sridharshan19"}
              </a>
              <a href={personal?.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />{personal?.linkedin?.replace(/^https?:\/\/(www\.)?/, "") || "linkedin.com/in/sridharshan"}
              </a>
            </div>
          </header>

          {/* Education */}
          <section className="pdf-sec">
            <h2>Education</h2>
            {education?.map((edu) => (
              <article key={`${edu.institution}-${edu.degree}`} className="pdf-entry">
                <div className="pdf-entry-head">
                  <div>
                    <h3>{edu.institution}</h3>
                    <p className="pdf-sub">{edu.degree}</p>
                  </div>
                  <div className="pdf-date">
                    <div>{edu.period}</div>
                    <div style={{color:"#2563eb",fontWeight:600}}>{edu.score}</div>
                  </div>
                </div>
                <p className="pdf-body" style={{marginTop:"1px"}}>{edu.details}</p>
              </article>
            ))}
          </section>

          {/* Internships */}
          <section className="pdf-sec">
            <h2>Internships</h2>
            {internships?.map((intern) => (
              <article key={`${intern.company}-${intern.role}`} className="pdf-entry">
                <div className="pdf-entry-head">
                  <div>
                    <h3>{intern.role}</h3>
                    <p className="pdf-sub">{intern.company}</p>
                  </div>
                  <span className="pdf-date">{intern.year} | {intern.duration}</span>
                </div>
                <ul className="pdf-bullets">
                  {intern.bullets.slice(0, 3).map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          {/* Projects — Page 1 (NatureCart + TransTrack) */}
          <section className="pdf-sec">
            <h2>Projects</h2>
            {p1Projects.map(renderPdfProject)}
          </section>
        </div>

        {/* ─── PAGE 2: NextGen + LeaveMate + Achievements + Skills + Profiles + Certs ─── */}
        <div className="pdf-page pdf-page-2">

          {/* Projects — Page 2 (NextGen + LeaveMate) */}
          <section className="pdf-sec">
            <h2>Projects <span style={{fontSize:"9pt",fontWeight:400,color:"#6b7280"}}>(continued)</span></h2>
            {p2Projects.map(renderPdfProject)}
          </section>

          {/* Achievements */}
          <section className="pdf-sec">
            <h2>Achievements</h2>
            {achievements?.map((ach) => (
              <div key={ach.title} className="pdf-ach-entry">
                <div className="pdf-ach-head">
                  <h3>{ach.title}</h3>
                  <span className="pdf-ach-meta">{ach.issuer} | {ach.year}</span>
                </div>
                <p className="pdf-ach-body">
                  {ach.title.includes("INTELLINA")
                    ? "National Finalist – Mentor–Student Tracker web application"
                    : "First Prize – Designed and built an industry-grade project within 24 hours"}
                </p>
              </div>
            ))}
          </section>

          {/* Skills */}
          <section className="pdf-sec">
            <h2>Skills</h2>
            <div className="pdf-skills">
              <div className="pdf-skill-row"><strong>Programming:</strong> {skills?.programming.map(s=>s.name).join(", ")}</div>
              <div className="pdf-skill-row"><strong>Frontend:</strong> {skills?.frontend.map(s=>s.name).join(", ")}</div>
              <div className="pdf-skill-row"><strong>Backend:</strong> {skills?.backend.map(s=>s.name).join(", ")}</div>
              <div className="pdf-skill-row"><strong>Databases:</strong> {skills?.database.map(s=>s.name).join(", ")}</div>
              <div className="pdf-skill-row"><strong>Tools:</strong> {skills?.tools.map(s=>s.name).join(", ")}</div>
              <div className="pdf-skill-row"><strong>Deployment:</strong> {skills?.deployment.map(s=>s.name).join(", ")}</div>
            </div>
          </section>

          {/* Coding Profiles */}
          <section className="pdf-sec">
            <h2>Coding Profiles</h2>
            <div className="pdf-profile-table">
              {codingProfiles?.map((p) => (
                <div key={p.platform} className="pdf-profile-row">
                  <strong>{p.platform}</strong>
                  <span>
                    {p.solved}&nbsp;|&nbsp;
                    {p.rating.replace("Contest Rating: ","Rating ")}
                    {p.globalRank && ` | ${p.globalRank.replace("Global Rank: ","Rank ")}`}
                  </span>
                  <a href={p.profileUrl} target="_blank" rel="noopener noreferrer">
                    Profile&nbsp;<FaExternalLinkAlt style={{fontSize:"7pt",verticalAlign:"middle"}}/>
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="pdf-sec">
            <h2>Certifications</h2>
            <div className="pdf-cert-table">
              {certifications?.map((cert) => {
                const providerUrl = cert.provider.toLowerCase().includes("udemy")
                  ? "https://www.udemy.com"
                  : cert.provider.toLowerCase().includes("hackerrank")
                  ? "https://www.hackerrank.com"
                  : "https://www.cambridgeenglish.org/exams-and-tests/linguaskill/";
                return (
                  <div key={`${cert.title}-${cert.year}`} className="pdf-cert-row">
                    <strong>{cert.title}</strong>
                    <a href={providerUrl} target="_blank" rel="noopener noreferrer">{cert.provider}</a>
                    <span className="pdf-cert-year">{cert.year}</span>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          WEBSITE / SCREEN LAYOUT (enhanced with icons)
      ══════════════════════════════════════════════ */}

      {/* Floating Print Button */}
      <div className="fixed bottom-8 right-8 md:bottom-auto md:top-24 md:right-8 z-30 no-print floating-print-btn">
        <button
          onClick={handlePrint}
          className="glow-btn flex items-center gap-2 px-5 py-3.5 bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-cyan text-white font-bold rounded-full shadow-2xl shadow-brand-indigo/30 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer clickable"
          title="Print / Save ATS PDF"
        >
          <FaPrint className="text-base" />
          <span className="hidden sm:inline text-xs uppercase tracking-wider">Save PDF</span>
        </button>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .tech-chip {
          display:inline-flex; align-items:center; gap:5px; padding:3px 9px;
          border-radius:6px; font-size:11px; font-weight:500;
          border:1px solid rgba(148,163,184,0.2); background:rgba(148,163,184,0.07);
          color:#64748b; transition:all 0.2s ease; cursor:default; white-space:nowrap;
        }
        .dark .tech-chip { background:rgba(255,255,255,0.05); border-color:rgba(255,255,255,0.08); color:#94a3b8; }
        .tech-chip:hover { background:rgba(99,102,241,0.1); border-color:rgba(99,102,241,0.3); color:#6366f1; transform:translateY(-1px); box-shadow:0 4px 12px rgba(99,102,241,0.15); }
        .dark .tech-chip:hover { background:rgba(99,102,241,0.15); border-color:rgba(99,102,241,0.4); color:#a5b4fc; }
        .tech-chip .tc-dot { width:7px; height:7px; border-radius:50%; flex-shrink:0; display:inline-block; }
        .proj-card {
          border-radius:12px; border:1px solid rgba(148,163,184,0.15);
          padding:20px; background:rgba(148,163,184,0.03);
          transition:all 0.3s ease; position:relative; overflow:hidden;
        }
        .proj-card::before {
          content:''; position:absolute; inset:0;
          background:linear-gradient(135deg,rgba(99,102,241,0.04) 0%,transparent 60%);
          opacity:0; transition:opacity 0.3s ease;
        }
        .proj-card:hover { border-color:rgba(99,102,241,0.3); box-shadow:0 8px 32px rgba(99,102,241,0.12); transform:translateY(-2px); }
        .proj-card:hover::before { opacity:1; }
        .dark .proj-card { background:rgba(255,255,255,0.02); border-color:rgba(255,255,255,0.06); }
        .dark .proj-card:hover { border-color:rgba(99,102,241,0.4); box-shadow:0 8px 32px rgba(99,102,241,0.2); }
        .skill-card { border-radius:10px; border:1px solid rgba(148,163,184,0.12); padding:16px; background:rgba(148,163,184,0.02); transition:border-color 0.2s; }
        .skill-card:hover { border-color:rgba(99,102,241,0.2); }
        .dark .skill-card { background:rgba(255,255,255,0.02); border-color:rgba(255,255,255,0.05); }
        .feat-chip {
          display:inline-flex; align-items:center; gap:4px; padding:3px 9px;
          border-radius:20px; font-size:11px; font-weight:500;
          background:rgba(99,102,241,0.08); color:#6366f1; border:1px solid rgba(99,102,241,0.15); transition:all 0.15s;
        }
        .feat-chip:hover { background:rgba(99,102,241,0.15); border-color:rgba(99,102,241,0.3); }
        .dark .feat-chip { background:rgba(99,102,241,0.12); color:#a5b4fc; border-color:rgba(99,102,241,0.2); }
        .entry-card { padding:16px; border-radius:12px; border:1px solid rgba(148,163,184,0.12); background:rgba(148,163,184,0.025); transition:border-color 0.2s, background 0.2s; }
        .entry-card:hover { border-color:rgba(99,102,241,0.2); background:rgba(99,102,241,0.02); }
        .dark .entry-card { background:rgba(255,255,255,0.015); border-color:rgba(255,255,255,0.05); }
        .dark .entry-card:hover { border-color:rgba(99,102,241,0.3); background:rgba(99,102,241,0.05); }
      `}} />

      <div className="max-w-4xl mx-auto px-6 relative z-10 screen-resume">
        <div className="glass-card border border-slate-200 dark:border-white/5 p-8 md:p-12 shadow-2xl resume-container text-slate-800 dark:text-gray-200 mt-6">

          {/* ── Screen Header ── */}
          <div className="border-b border-slate-200 dark:border-white/10 pb-6 mb-8 flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
                {personal?.name || "SRIDHARSHAN M N"}
              </h1>
              <p className="text-base text-brand-indigo dark:text-brand-cyan font-extrabold tracking-wider uppercase mt-1">
                Java Full Stack Developer
              </p>
            </div>
            <div className="text-sm space-y-2 flex flex-col items-center md:items-end font-medium">
              <a href={`tel:${personal?.phone}`} className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-brand-indigo dark:hover:text-brand-cyan transition-colors duration-300">
                <FaPhoneAlt className="text-brand-indigo dark:text-brand-cyan text-xs shrink-0" />
                <span>{personal?.phone}</span>
              </a>
              <a href={`mailto:${personal?.email}`} className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-brand-indigo dark:hover:text-brand-cyan transition-colors duration-300">
                <FaEnvelope className="text-brand-indigo dark:text-brand-cyan text-xs shrink-0" />
                <span>{personal?.email}</span>
              </a>
              <a href={personal?.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-brand-indigo dark:hover:text-brand-cyan transition-colors duration-300">
                <FaGithub className="text-brand-indigo dark:text-brand-cyan text-xs shrink-0" />
                <span>{personal?.github?.replace(/^https?:\/\/(www\.)?/, "") || "github.com/sridharshan19"}</span>
              </a>
              <a href={personal?.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-brand-indigo dark:hover:text-brand-cyan transition-colors duration-300">
                <FaLinkedin className="text-brand-indigo dark:text-brand-cyan text-xs shrink-0" />
                <span>{personal?.linkedin?.replace(/^https?:\/\/(www\.)?/, "") || "linkedin.com"}</span>
              </a>
            </div>
          </div>

          {/* ── Screen Education ── */}
          <div className="mb-8">
            <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4 pb-1.5 border-b border-slate-200 dark:border-white/10">Education</h2>
            <div className="space-y-3">
              {education?.map((edu, idx) => (
                <div key={idx} className="entry-card flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">{edu.institution}</h3>
                    <p className="text-xs text-brand-indigo dark:text-brand-cyan font-semibold mt-0.5">{edu.degree}</p>
                    <p className="text-xs text-slate-500 dark:text-gray-400 mt-1 font-medium">{edu.details}</p>
                  </div>
                  <div className="text-right text-xs flex-shrink-0">
                    <span className="font-bold text-slate-600 dark:text-gray-300 block">{edu.period}</span>
                    <span className="font-bold text-brand-indigo dark:text-brand-cyan mt-1 block">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Screen Internships ── */}
          <div className="mb-8">
            <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4 pb-1.5 border-b border-slate-200 dark:border-white/10">Internships</h2>
            <div className="space-y-4">
              {internships?.map((intern, idx) => (
                <div key={idx} className="entry-card">
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">{intern.role}</h3>
                      <p className="text-xs text-brand-indigo dark:text-brand-cyan font-semibold mt-0.5">{intern.company}</p>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-brand-indigo/10 dark:bg-brand-indigo/20 text-brand-indigo dark:text-brand-cyan flex-shrink-0">
                      {intern.year} · {intern.duration}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {intern.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-gray-400 leading-relaxed font-medium">
                        <span className="text-brand-indigo dark:text-brand-cyan mt-0.5 flex-shrink-0">▸</span>{bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ── Screen Projects ── */}
          <div className="mb-8">
            <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4 pb-1.5 border-b border-slate-200 dark:border-white/10">Projects</h2>
            <div className="space-y-4">
              {projects?.map((proj, idx) => (
                <div key={idx} className="proj-card">
                  <div className="flex justify-between items-start gap-4 mb-2 relative z-10">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">{proj.title}</h3>
                      <p className="text-xs text-brand-indigo dark:text-brand-cyan font-semibold mt-0.5">{proj.tagline}</p>
                    </div>
                    <a href={proj.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-800 dark:bg-white/10 text-white hover:bg-brand-indigo dark:hover:bg-brand-indigo transition-colors flex-shrink-0 relative z-10">
                      <FaGithub /> GitHub
                    </a>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed mb-3 font-medium relative z-10">{proj.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3 relative z-10">
                    {proj.features.map((feat, fIdx) => (
                      <span key={fIdx} className="feat-chip">• {feat}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 relative z-10">
                    {proj.tech.map((t, tIdx) => (
                      <span key={tIdx} className="tech-chip">
                        <span className="tc-dot" style={{background: getTechColor(t)}} />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Screen Achievements ── */}
          <div className="mb-8">
            <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4 pb-1.5 border-b border-slate-200 dark:border-white/10">Achievements</h2>
            <div className="space-y-3">
              {achievements?.map((ach, idx) => (
                <div key={idx} className="entry-card flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">{ach.title}</h3>
                    <p className="text-xs text-slate-600 dark:text-gray-400 mt-1 font-medium">{ach.description}</p>
                  </div>
                  <span className="font-bold text-brand-indigo dark:text-brand-cyan text-xs flex-shrink-0">{ach.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Screen Skills (icon chips) ── */}
          <div className="mb-8">
            <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4 pb-1.5 border-b border-slate-200 dark:border-white/10">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "Programming Languages", items: skills?.programming },
                { label: "Web & Frontend",         items: skills?.frontend },
                { label: "Backend & Frameworks",   items: skills?.backend },
                { label: "Databases",              items: skills?.database },
                { label: "Tools & Platforms",      items: skills?.tools },
                { label: "Deployment",             items: skills?.deployment },
              ].map(({ label, items }) => (
                <div key={label} className="skill-card">
                  <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2.5">{label}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {items?.map((s) => (
                      <span key={s.name} className="tech-chip">
                        <span className="tc-dot" style={{background: getTechColor(s.name)}} />
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Screen Coding Profiles ── */}
          <div className="mb-8">
            <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4 pb-1.5 border-b border-slate-200 dark:border-white/10">Coding Profiles</h2>
            <div className="space-y-3">
              {codingProfiles?.map((plat, idx) => (
                <div key={idx} className="entry-card flex justify-between items-center gap-4">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">{plat.platform}</h3>
                    <p className="text-xs text-slate-500 dark:text-gray-400 mt-0.5 font-medium">
                      {plat.solved} Solved &nbsp;·&nbsp; {plat.rating} &nbsp;·&nbsp; {plat.globalRank}
                    </p>
                  </div>
                  <a href={plat.profileUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg border border-brand-indigo/30 text-brand-indigo dark:text-brand-cyan hover:bg-brand-indigo hover:text-white dark:hover:bg-brand-indigo transition-colors flex-shrink-0">
                    Profile <FaExternalLinkAlt className="text-[9px]" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* ── Screen Certifications ── */}
          <div className="mb-8">
            <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4 pb-1.5 border-b border-slate-200 dark:border-white/10">Certifications</h2>
            <div className="space-y-2">
              {certifications?.map((cert, idx) => (
                <div key={idx} className="entry-card grid grid-cols-[1fr_auto_auto] gap-4 items-center text-xs">
                  <strong className="text-slate-800 dark:text-white font-semibold">{cert.title}</strong>
                  <a
                    href={cert.provider.toLowerCase().includes("udemy") ? "https://www.udemy.com" : cert.provider.toLowerCase().includes("hackerrank") ? "https://www.hackerrank.com" : "https://www.cambridgeenglish.org/exams-and-tests/linguaskill/"}
                    target="_blank" rel="noopener noreferrer"
                    className="text-brand-indigo dark:text-brand-cyan hover:underline font-semibold whitespace-nowrap"
                  >
                    {cert.provider}
                  </a>
                  <span className="font-bold text-slate-500 dark:text-gray-400 text-right whitespace-nowrap">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

/* ── Tech color dot helper (screen-only, not used in PDF) ── */
function getTechColor(name = "") {
  const c = {
    "Java":"#f89820","C":"#555591","Python":"#3776ab","JavaScript":"#f7df1e",
    "HTML":"#e34f26","CSS":"#1572b6","React":"#61dafb","React 19":"#61dafb","React.js":"#61dafb",
    "Tailwind":"#06b6d4","Tailwind CSS":"#06b6d4","Bootstrap":"#7952b3",
    "Node":"#339933","Node.js":"#339933","Express":"#4a4a4a","Express.js":"#4a4a4a",
    "Spring Boot":"#6db33f","Spring Boot 3":"#6db33f","Spring Boot 3.3":"#6db33f","Spring Security":"#6db33f","MongoDB":"#47a248","MySQL":"#4479a1",
    "Git":"#f05032","GitHub":"#6e40c9","VS Code":"#007acc","Postman":"#ff6c37",
    "Canva":"#00c4cc","Vite":"#646cff","Render":"#46e3b7","Vercel":"#888888",
    "Railway":"#555555","Recharts":"#8884d8","JWT":"#d63aff","JWT Security":"#d63aff",
    "Google OAuth":"#4285f4","Razorpay":"#072654","Brevo SMTP":"#0092ff",
    "Docker":"#2496ed","Twilio SMS":"#f22f46","Framer Motion":"#e535ab"
  };
  return c[name] || "#6366f1";
}
