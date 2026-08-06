import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import ContactForm from "./ContactForm";

export default function ContactSection({ personal }) {
  if (!personal) return null;

  const contacts = [
    {
      icon: <FaEnvelope className="text-brand-pink" />,
      title: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
      color: "hover:border-brand-pink/30"
    },
    {
      icon: <FaPhoneAlt className="text-brand-teal" />,
      title: "Phone / WhatsApp",
      value: personal.phone,
      href: `tel:${personal.phone}`,
      color: "hover:border-brand-teal/30"
    },
    {
      icon: <FaMapMarkerAlt className="text-brand-purple" />,
      title: "Location",
      value: "Tamil Nadu, India",
      href: "https://maps.google.com/?q=Tamil+Nadu,+India",
      color: "hover:border-brand-purple/30"
    }
  ];

  return (
    <section id="contact" className="section-shell">
      {/* Background radial gradients */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container">
        {/* Title */}
        <div className="mb-14 max-w-3xl">
          <span className="section-kicker">Contact</span>
          <h2 className="section-heading">
            Let’s talk about the next useful thing.
          </h2>
          <p className="section-subtitle">
            Send an opportunity, collaboration idea, or project brief. Direct email and phone actions are available too.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          {/* Left: Contact Info + Stylized Map */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              {contacts.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`glass-card p-6 flex items-center gap-5 group transition-all duration-300 ${item.color} clickable`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <span className="text-2xl bg-slate-100 dark:bg-white/5 w-12 h-12 rounded-xl flex items-center justify-center border border-slate-200 dark:border-white/10 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-0.5">
                      {item.title}
                    </h4>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-brand-purple transition-colors duration-300">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Stylized Dark Grid Globe Map Background */}
            <motion.div
              className="glass-card p-6 h-64 flex flex-col justify-center items-center relative overflow-hidden group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* World Grid SVG Background */}
              <svg
                className="absolute inset-0 w-full h-full opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                stroke="currentColor"
                strokeWidth="0.2"
                fill="none"
              >
                {/* Horizontal grid lines */}
                {Array.from({ length: 9 }).map((_, i) => (
                  <line key={`h-${i}`} x1="0" y1={(i + 1) * 10} x2="100" y2={(i + 1) * 10} />
                ))}
                {/* Vertical grid lines */}
                {Array.from({ length: 9 }).map((_, i) => (
                  <line key={`v-${i}`} x1={(i + 1) * 10} y1="0" x2={(i + 1) * 10} y2="100" />
                ))}
                {/* Simulated contour lines */}
                <circle cx="50" cy="50" r="25" strokeWidth="0.15" />
                <circle cx="50" cy="50" r="35" strokeWidth="0.15" />
                <path d="M10,50 Q30,40 50,50 T90,50" strokeWidth="0.3" strokeDasharray="1,1" />
              </svg>

              <div className="relative z-10 text-center flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center mb-3 animate-pulse">
                  <FaMapMarkerAlt className="text-brand-purple text-lg" />
                </div>
                <h4 className="text-sm font-display font-bold text-slate-900 dark:text-white mb-1">
                  Based in Tamil Nadu, India
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed font-medium">
                  Available for remote cooperation worldwide and on-site opportunities.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Contact Form */}
          <motion.div
            className="lg:col-span-7 glass-card glow-border p-8 md:p-10 flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-2">
              Send a <span className="text-glow-gradient">Message</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mb-8">
              Fill out the form below to initiate communication
            </p>
            
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
