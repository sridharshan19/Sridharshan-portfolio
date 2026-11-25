import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaCheckCircle, FaEnvelope, FaExclamationTriangle, FaPaperPlane, FaSpinner } from "react-icons/fa";
import { submitContactForm } from "../services/portfolioService";

export default function ContactForm({ recipientEmail = "sridharshans556@gmail.com" }) {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const buildMailtoHref = () => {
    const subject = encodeURIComponent(formData.subject || "Portfolio Inquiry");
    const body = encodeURIComponent(
      `Name: ${formData.user_name}\nEmail: ${formData.user_email}\n\n${formData.message}`
    );
    return `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      try {
        await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
        setStatus("success");
        setFormData({ user_name: "", user_email: "", subject: "", message: "" });
        return;
      } catch (error) {
        console.error("EmailJS Error:", error);
      }
    }

    try {
      await submitContactForm(formData);
      setStatus("success");
      setFormData({ user_name: "", user_email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Contact API Error:", error);
      setStatus("error");
      setErrorMsg(
        "Could not reach the backend server or EmailJS service. Make sure the backend server is running (`npm run dev`), or use the direct email button below."
      );
    }
  };

  const labelClass = "mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-slate-600 dark:text-[#94A3B8]";

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success-card"
            className="flex flex-col items-center justify-center rounded-2xl border border-[#22D3EE]/30 bg-[#22D3EE]/10 px-6 py-12 text-center"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3 }}
          >
            <FaCheckCircle className="mb-4 text-5xl text-[#22D3EE]" />
            <h3 className="font-display text-2xl font-bold text-slate-950 dark:text-[#F8FAFC]">
              Message Sent
            </h3>
            <p className="mt-2 max-w-sm text-sm leading-7 text-slate-600 dark:text-[#94A3B8]">
              Thank you for reaching out. I will get back to you as soon as possible.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-7 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 clickable"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="form-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className={labelClass}>Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="user_name"
                    required
                    value={formData.user_name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="glass-input px-4 py-3 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className={labelClass}>Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="user_email"
                    required
                    value={formData.user_email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="glass-input px-4 py-3 text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className={labelClass}>Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project, opportunity, or collaboration"
                  className="glass-input px-4 py-3 text-sm"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className={labelClass}>Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me what you are building..."
                  className="glass-input resize-none px-4 py-3 text-sm"
                />
              </div>

              {status === "error" && (
                <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-xs sm:text-sm text-rose-600 dark:text-rose-300 space-y-3">
                  <p className="flex items-start gap-2 font-medium">
                    <FaExclamationTriangle className="mt-0.5 shrink-0" />
                    <span>{errorMsg}</span>
                  </p>
                  <a
                    href={buildMailtoHref()}
                    className="inline-flex items-center gap-2 rounded-lg border border-rose-400/40 bg-rose-500/15 px-3.5 py-2 text-xs font-semibold text-rose-700 dark:text-rose-200 hover:bg-rose-500/25 clickable"
                  >
                    <FaEnvelope /> Open in Email App
                  </a>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="glow-btn flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] px-6 py-4 text-sm font-semibold text-white shadow-[0_0_24px_rgba(59,130,246,0.35)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 clickable"
              >
                {status === "sending" ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
