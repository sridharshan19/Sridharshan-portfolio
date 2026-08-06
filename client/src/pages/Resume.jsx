import React from "react";
import { FaPrint, FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";

export default function Resume({ personal, education, internships, projects, skills, certifications, achievements, codingProfiles }) {
  const handlePrint = () => { window.print(); };

  /* ── PDF-only compact descriptions ── */
  const pdfDesc = {
    NatureCart:              "Built a role-based farm-to-consumer marketplace with inventory management, order tracking, analytics dashboards and PDF report generation.",
    TransTrack:              "Developed a fleet management system with driver tracking, trip/expense analytics, Brevo SMTP notifications and JWT-secured APIs.",
    "NextGen Resume Builder":"Created a dynamic resume builder with live templates, auto-save, Google OAuth authentication and Razorpay premium payment integration.",
    LeaveMate:               "Built a leave management platform with employee request workflows, admin approval dashboards, real-time status updates and visual metrics.",
  };

  /* Page 1 projects (indices 0-1), Page 2 projects (indices 2-3) */
  const p1Projects = (projects || []).slice(0, 2);
  const p2Projects = (projects || []).slice(2, 4);

  const renderPdfProject = (proj) => (
    <article key={proj.title} className="pdf-entry pdf-proj">
      <div className="pdf-proj-head">
        <div className="pdf-proj-left">
          <span className="pdf-proj-name">{proj.title}</span>
          <span className="pdf-proj-tag">{proj.tagline}</span>
        </div>
        <a href={proj.github} target="_blank" rel="noopener noreferrer" className="pdf-link">
          GitHub&nbsp;<FaExternalLinkAlt style={{fontSize:"7pt",verticalAlign:"middle"}}/>
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
            margin: 0 0 2px;
            font-size: 10pt;
            color: #374151;
            line-height: 1.3;
          }
          .pdf-bullets {
            margin: 0 0 3px 14px;
            padding: 0;
          }
          .pdf-bullets li {
            font-size: 10pt;
            color: #374151;
            margin: 0 0 3px;
            line-height: 1.3;
          }

          /* ── Project-specific ── */
          .pdf-proj { margin-bottom: 8px; }
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
            margin: 2px 0;
            font-size: 9.5pt;
            color: #374151;
            line-height: 1.3;
          }
          .pdf-tech {
            margin: 2px 0 0;
            font-size: 9.5pt;
            color: #374151;
            line-height: 1.2;
          }
          .pdf-tech strong { color: #111827; font-weight: 700; }

          /* ── Skills 2-col grid ── */
          .pdf-skills {
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 20px;
            row-gap: 3px;
          }
          .pdf-skill-row {
            font-size: 10pt;
            color: #374151;
            line-height: 1.3;
          }
          .pdf-skill-row strong { color: #111827; font-weight: 700; }

          /* ── Certifications 3-col ── */
          .pdf-cert-table { display: grid; gap: 4px; }
          .pdf-cert-row {
            display: grid;
            grid-template-columns: 2.8fr 1fr 0.4fr;
            gap: 8px;
            align-items: baseline;
          }
          .pdf-cert-row span { font-size: 9.5pt; color: #374151; line-height: 1.25; }
          .pdf-cert-row strong { font-size: 9.5pt; font-weight: 600; color: #111827; }
          .pdf-cert-row .pdf-cert-year { color: #6b7280; text-align: right; }
          .pdf-cert-row a {
            font-size: 9.5pt;
            color: #2563eb;
            text-decoration: none;
            font-weight: 600;
          }

          /* ── Coding Profiles 3-col ── */
          .pdf-profile-table { display: grid; gap: 4px; }
          .pdf-profile-row {
            display: grid;
            grid-template-columns: 0.7fr 2fr 0.7fr;
            gap: 8px;
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
                    {p.solved} Problems&nbsp;|&nbsp;
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
          WEBSITE / SCREEN LAYOUT (unchanged)
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
            <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4 pb-1.5 border-b border-slate-200 dark:border-white/10">
              Education
            </h2>
            <div className="space-y-4">
              {education?.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">{edu.institution}</h3>
                    <p className="text-xs text-brand-indigo dark:text-brand-cyan font-semibold">{edu.degree}</p>
                    <p className="text-xs text-slate-600 dark:text-gray-400 mt-1 font-medium">{edu.details}</p>
                  </div>
                  <div className="text-right text-xs flex-shrink-0">
                    <span className="font-bold text-slate-700 dark:text-gray-300 block">{edu.period}</span>
                    <span className="font-semibold text-brand-indigo dark:text-brand-purple">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Screen Internships ── */}
          <div className="mb-8">
            <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4 pb-1.5 border-b border-slate-200 dark:border-white/10">
              Internships
            </h2>
            <div className="space-y-6">
              {internships?.map((intern, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">{intern.role}</h3>
                      <p className="text-xs text-brand-indigo dark:text-brand-cyan font-semibold">{intern.company}</p>
                    </div>
                    <div className="text-right text-xs text-slate-600 dark:text-gray-300 font-bold flex-shrink-0">
                      <span>{intern.year} ({intern.duration})</span>
                    </div>
                  </div>
                  <ul className="list-disc pl-5 space-y-1">
                    {intern.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed font-medium">{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ── Screen Projects ── */}
          <div className="mb-8">
            <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4 pb-1.5 border-b border-slate-200 dark:border-white/10">
              Projects
            </h2>
            <div className="space-y-6">
              {projects?.map((proj, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-start gap-4 mb-1">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">{proj.title}</h3>
                      <p className="text-xs text-brand-indigo dark:text-brand-cyan font-semibold">{proj.tagline}</p>
                    </div>
                    <a href={proj.github} target="_blank" rel="noopener noreferrer" className="text-xs text-brand-indigo dark:text-brand-purple hover:underline flex items-center gap-1.5 font-bold">
                      GitHub <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed mb-2 font-medium">{proj.description}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {proj.features.map((feat, fIdx) => (
                      <span key={fIdx} className="text-[10px] bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 px-2 py-0.5 rounded text-slate-600 dark:text-gray-400">
                        • {feat}
                      </span>
                    ))}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-gray-500 font-semibold uppercase tracking-wider">
                    Technologies: {proj.tech.join(", ")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Screen Achievements ── */}
          <div className="mb-8">
            <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4 pb-1.5 border-b border-slate-200 dark:border-white/10">
              Achievements
            </h2>
            <div className="space-y-4">
              {achievements?.map((ach, idx) => (
                <div key={idx} className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">{ach.title}</h3>
                    <p className="text-xs text-slate-600 dark:text-gray-400 mt-1 font-medium">{ach.description}</p>
                  </div>
                  <div className="text-right text-xs flex-shrink-0">
                    <span className="font-bold text-slate-700 dark:text-gray-300 block">{ach.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Screen Skills ── */}
          <div className="mb-8">
            <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4 pb-1.5 border-b border-slate-200 dark:border-white/10">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-600 dark:text-gray-400 font-medium">
              <div><strong className="text-slate-800 dark:text-white">Programming Languages:</strong> {skills?.programming.map(s => s.name).join(", ")}</div>
              <div><strong className="text-slate-800 dark:text-white">Web & Frontend:</strong> {skills?.frontend.map(s => s.name).join(", ")}</div>
              <div><strong className="text-slate-800 dark:text-white">Backend & Frameworks:</strong> {skills?.backend.map(s => s.name).join(", ")}</div>
              <div><strong className="text-slate-800 dark:text-white">Databases:</strong> {skills?.database.map(s => s.name).join(", ")}</div>
              <div><strong className="text-slate-800 dark:text-white">Tools & Platforms:</strong> {skills?.tools.map(s => s.name).join(", ")}</div>
              <div><strong className="text-slate-800 dark:text-white">Deployment:</strong> {skills?.deployment.map(s => s.name).join(", ")}</div>
            </div>
          </div>

          {/* ── Screen Coding Profiles ── */}
          <div className="mb-8">
            <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4 pb-1.5 border-b border-slate-200 dark:border-white/10">
              Coding Profiles
            </h2>
            <div className="space-y-4">
              {codingProfiles?.map((plat, idx) => (
                <div key={idx} className="flex justify-between items-center gap-4">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">{plat.platform}</h3>
                    <p className="text-xs text-slate-600 dark:text-gray-400 mt-1 font-medium">
                      Solved {plat.solved} | {plat.rating} | {plat.globalRank}
                    </p>
                  </div>
                  <a href={plat.profileUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-brand-indigo dark:text-brand-cyan hover:underline font-bold flex items-center gap-1">
                    Profile <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* ── Screen Certifications ── */}
          <div className="mb-8">
            <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4 pb-1.5 border-b border-slate-200 dark:border-white/10">
              Certifications
            </h2>
            <div className="space-y-3">
              {certifications?.map((cert, idx) => (
                <div key={idx} className="grid grid-cols-3 gap-4 items-center text-xs">
                  <div className="text-left">
                    <strong className="text-slate-800 dark:text-white font-bold">{cert.title}</strong>
                  </div>
                  <div className="text-left">
                    <a
                      href={cert.provider.toLowerCase().includes("udemy") ? "https://www.udemy.com" : cert.provider.toLowerCase().includes("hackerrank") ? "https://www.hackerrank.com" : "https://www.cambridgeenglish.org/exams-and-tests/linguaskill/"}
                      target="_blank" rel="noopener noreferrer"
                      className="text-brand-indigo dark:text-brand-cyan hover:underline font-bold"
                    >
                      {cert.provider}
                    </a>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-slate-700 dark:text-gray-300">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
