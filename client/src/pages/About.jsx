import React from "react";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import EducationSection from "../components/EducationSection";
import InternshipSection from "../components/InternshipSection";
import ProfilesSection from "../components/ProfilesSection";
import AchievementsSection from "../components/AchievementsSection";
import CertificationsSection from "../components/CertificationsSection";

export default function About({
  personal,
  statistics,
  education,
  internships,
  skills,
  achievements,
  certifications,
  codingProfiles
}) {
  return (
    <div className="pt-6 space-y-6">
      <AboutSection personal={personal} statistics={statistics} />
      <SkillsSection skills={skills} />
      <EducationSection education={education} />
      <InternshipSection internships={internships} />
      <ProfilesSection codingProfiles={codingProfiles} />
      <AchievementsSection achievements={achievements} />
      <CertificationsSection certifications={certifications} />
    </div>
  );
}