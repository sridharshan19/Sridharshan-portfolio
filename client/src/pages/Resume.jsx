import React from "react";
import { FaPrint, FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";

export default function Resume({ personal, education, internships, projects, skills, certifications }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="py-12 relative overflow-hidden resume-wrapper">
      {/* Print CSS overrides - makes it 100% black & white, standard fonts, single-column, 100% ATS-friendly text */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          /* Hide non-resume webpage elements */
          body, html, #root, main, .resume-wrapper, .resume-container {
            background: #ffffff !important;
            color: #000000 !important;
            font-family: Arial, sans-serif !important;
            overflow: visible !important;
            height: auto !important;
            min-height: auto !important;
            display: block !important;
          }
          nav, footer, button, .custom-cursor-dot, .custom-cursor-outline, .fixed, .aurora-bg, .no-print, canvas, .floating-print-btn {
            display: none !important;
          }
          main {
            padding-top: 0 !important;
          }
          .resume-container {
            border: none !important;
            background: transparent !important;
            color: #000000 !important;
            padding: 0 !important;
            max-width: 100% !important;
            box-shadow: none !important;
          }
          .section-title {
            color: #000000 !important;
            border-bottom: 2px solid #000000 !important;
            padding-bottom: 3px !important;
            margin-top: 20px !important;
            margin-bottom: 10px !important;
            font-size: 14pt !important;
            text-transform: uppercase !important;
            font-weight: bold !important;
          }
          .bullet-point {
            color: #000000 !important;
            margin-bottom: 3px !important;
          }
          a {
            color: #000000 !important;
            text-decoration: underline !important;
          }
          .grid {
            display: block !important;
          }
          .md\\:grid-cols-2 {
            display: block !important;
          }
          .flex {
            display: flex !important;
          }
          .justify-between {
            justify-content: space-between !important;
          }
          .items-center {
            align-items: center !important;
          }
          h1, h2, h3, h4, p, span, li, strong {
            color: #000000 !important;
            text-shadow: none !important;
          }
          h1 {
            font-size: 22pt !important;
            margin-bottom: 5px !important;
          }
          h3 {
            font-size: 12pt !important;
          }
          .badge {
            border: none !important;
            background: transparent !important;
            color: #000000 !important;
            padding: 0 !important;
            font-weight: bold !important;
          }
          .skill-group {
            margin-bottom: 8px !important;
          }
          .page-break {
            page-break-before: always;
          }
        }
      `}} />

      {/* Floating Action Button for printing (desktop/mobile overlay) */}
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

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Resume Card starts directly with name details at the very top of the page */}
        <div className="glass-card border border-slate-200 dark:border-white/5 p-8 md:p-12 shadow-2xl resume-container text-slate-800 dark:text-gray-200 mt-6">
          
          {/* Header Section (Direct Start) */}
          <div className="border-b border-slate-200 dark:border-white/10 pb-6 mb-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
            <div>
              <h1 className="text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
                {personal?.name || "SRIDHARSHAN M N"}
              </h1>
              <p className="text-base text-brand-indigo dark:text-brand-cyan font-semibold tracking-wider uppercase mt-1">
                Java Full Stack & MERN Stack Developer
              </p>
            </div>
            
            {/* Contacts */}
            <div className="text-sm text-slate-600 dark:text-gray-400 space-y-1.5 flex flex-col items-center md:items-end font-medium">
              <span className="flex items-center gap-2.5">
                <FaPhoneAlt className="text-brand-indigo dark:text-brand-purple no-print" /> {personal?.phone}
              </span>
              <span className="flex items-center gap-2.5">
                <FaEnvelope className="text-brand-indigo dark:text-brand-purple no-print" /> {personal?.email}
              </span>
              
              <div className="flex gap-4 mt-2">
                <a href={personal?.github} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-1">
                  <FaGithub className="no-print" /> GitHub
                </a>
                <a href={personal?.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-1">
                  <FaLinkedin className="no-print" /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Education Block */}
          <div className="mb-8">
            <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4 pb-1.5 border-b border-slate-200 dark:border-white/10 section-title">
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
                  <div className="text-right text-xs">
                    <span className="font-bold text-slate-700 dark:text-gray-300 block">{edu.period}</span>
                    <span className="font-semibold text-brand-indigo dark:text-brand-purple badge">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience / Internships Block */}
          <div className="mb-8">
            <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4 pb-1.5 border-b border-slate-200 dark:border-white/10 section-title">
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
                    <div className="text-right text-xs text-slate-600 dark:text-gray-300 font-bold">
                      <span>{intern.year} ({intern.duration})</span>
                    </div>
                  </div>
                  
                  <ul className="list-disc pl-5 space-y-1">
                    {intern.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed bullet-point font-medium">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Block */}
          <div className="mb-8">
            <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4 pb-1.5 border-b border-slate-200 dark:border-white/10 section-title">
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
                    <a href={proj.github} target="_blank" rel="noopener noreferrer" className="text-xs text-brand-indigo dark:text-brand-purple hover:underline flex items-center gap-1.5 no-print">
                      GitHub <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  </div>
                  
                  <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed mb-2 font-medium">
                    {proj.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-2">
                    {proj.features.map((feat, fIdx) => (
                      <span key={fIdx} className="text-[10px] bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 px-2 py-0.5 rounded text-slate-600 dark:text-gray-400 badge">
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

          {/* Skills Block */}
          <div className="mb-8 page-break">
            <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4 pb-1.5 border-b border-slate-200 dark:border-white/10 section-title">
              Skills
            </h2>
            <div className="space-y-3.5 text-xs text-slate-600 dark:text-gray-400 font-medium">
              <div className="skill-group"><strong className="text-slate-800 dark:text-white">Programming Languages:</strong> {skills?.programming.map(s => s.name).join(", ")}</div>
              <div className="skill-group"><strong className="text-slate-800 dark:text-white">Web & Frontend:</strong> {skills?.frontend.map(s => s.name).join(", ")}</div>
              <div className="skill-group"><strong className="text-slate-800 dark:text-white">Backend & Frameworks:</strong> {skills?.backend.map(s => s.name).join(", ")}</div>
              <div className="skill-group"><strong className="text-slate-800 dark:text-white">Databases:</strong> {skills?.database.map(s => s.name).join(", ")}</div>
              <div className="skill-group"><strong className="text-slate-800 dark:text-white">Tools & Platforms:</strong> {skills?.tools.map(s => s.name).join(", ")}</div>
              <div className="skill-group"><strong className="text-slate-800 dark:text-white">Deployment:</strong> {skills?.deployment.map(s => s.name).join(", ")}</div>
            </div>
          </div>

          {/* Certifications Block */}
          <div className="mb-8">
            <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-4 pb-1.5 border-b border-slate-200 dark:border-white/10 section-title">
              Certifications
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              {certifications?.map((cert, idx) => (
                <li key={idx} className="text-xs text-slate-600 dark:text-gray-400 bullet-point font-medium">
                  <strong className="text-slate-800 dark:text-white">{cert.title}</strong> — {cert.provider} ({cert.year})
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
}