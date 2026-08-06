import React from "react";
import AboutSection from "../components/AboutSection";
import EducationSection from "../components/EducationSection";
import InternshipSection from "../components/InternshipSection";

export default function About({ personal, statistics, education, internships }) {
  return (
    <div className="pt-6 space-y-6">
      <AboutSection personal={personal} statistics={statistics} />
      <EducationSection education={education} />
      <InternshipSection internships={internships} />
    </div>
  );
}