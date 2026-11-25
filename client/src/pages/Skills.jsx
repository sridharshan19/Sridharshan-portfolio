import React from "react";
import SkillsSection from "../components/SkillsSection";
import ProfilesSection from "../components/ProfilesSection";

export default function Skills({ skills, codingProfiles }) {
  return (
    <div className="pt-4 space-y-4">
      <SkillsSection skills={skills} />
      <ProfilesSection codingProfiles={codingProfiles} />
    </div>
  );
}
