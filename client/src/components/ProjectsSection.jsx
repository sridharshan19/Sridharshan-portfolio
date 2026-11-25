import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function ProjectsSection({ projects }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  if (!projects) return null;

  const categories = ["All", "Full Stack", "Spring Boot", "MERN Stack", "SaaS"];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    if (selectedCategory === "All") return matchesSearch;
    if (selectedCategory === "Spring Boot") {
      return matchesSearch && project.tech.some((t) => t.toLowerCase().includes("spring"));
    }
    if (selectedCategory === "MERN Stack") {
      return matchesSearch && (project.tech.some((t) => t.toLowerCase().includes("mongo")) || project.tagline.toLowerCase().includes("mern"));
    }
    if (selectedCategory === "SaaS") {
      return matchesSearch && (project.title.includes("TrackNest") || project.title.includes("WorkSphere") || project.tagline.toLowerCase().includes("saas"));
    }
    if (selectedCategory === "Full Stack") {
      return matchesSearch && (project.tagline.toLowerCase().includes("full stack") || project.tech.length >= 4);
    }
    return matchesSearch;
  });

  return (
    <section id="projects" className="section-shell">
      {/* Decorative Blur */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container">
        {/* Title */}
        <div className="mb-10 max-w-3xl">
          <span className="section-kicker">Featured Projects</span>
          <h2 className="section-heading">
            Built to solve real world workflows.
          </h2>
          <p className="section-subtitle">
            A collection of web platforms and integrations designed to make daily tasks smoother.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-xl px-4 py-2 text-xs font-semibold transition clickable ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white shadow-[0_0_18px_rgba(59,130,246,0.3)]"
                    : "border border-slate-200 bg-white/70 text-slate-600 hover:border-[#3B82F6]/40 dark:border-[rgba(148,163,184,0.15)] dark:bg-[#111827] dark:text-[#94A3B8] dark:hover:text-[#F8FAFC]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative max-w-xs w-full">
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400" />
            <input
              type="text"
              placeholder="Search projects or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="glass-input py-2.5 pl-9 pr-4 text-xs"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 dark:border-[rgba(148,163,184,0.2)] p-12 text-center">
            <p className="text-sm font-semibold text-slate-500 dark:text-[#94A3B8]">
              No projects found matching "{searchQuery}" in category "{selectedCategory}".
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-4 text-xs font-bold text-[#3B82F6] dark:text-[#22D3EE] hover:underline clickable"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title || index}
                project={project}
                index={index}
                onSelect={(proj) => setSelectedProject(proj)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            key={selectedProject.title}
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
