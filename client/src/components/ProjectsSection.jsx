import React from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection({ projects }) {
  if (!projects) return null;

  return (
    <section id="projects" className="section-shell">
      {/* Decorative Blur */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-brand-pink/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container">
        {/* Title */}
        <div className="mb-14 max-w-3xl">
          <span className="section-kicker">Featured Projects</span>
          <h2 className="section-heading">
            Built to solve real world workflows.
          </h2>
          <p className="section-subtitle">
            A collection of web platforms and integrations designed to make daily tasks smoother.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
