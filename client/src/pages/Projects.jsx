import React from "react";
import ProjectsSection from "../components/ProjectsSection";

export default function Projects({ projects }) {
  return (
    <div className="pt-6">
      <ProjectsSection projects={projects} />
    </div>
  );
}