import React from "react";
import ContactSection from "../components/ContactSection";

export default function Contact({ personal }) {
  return (
    <div className="pt-6">
      <ContactSection personal={personal} />
    </div>
  );
}