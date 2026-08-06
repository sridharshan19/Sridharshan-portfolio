import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaCheckCircle, FaPaperPlane, FaSpinner } from "react-icons/fa";

export default function ContactForm() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_default";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_default";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

    if (!publicKey) {
      setTimeout(() => {
        setStatus("success");
        setFormData({ user_name: "", user_email: "", subject: "", message: "" });
      }, 900);
      return;
    }

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then(
      () => {
        setStatus("success");
        setFormData({ user_name: "", user_email: "", subject: "", message: "" });
      },
      (error) => {
        console.error("EmailJS Error:", error);
        setStatus("error");
        setErrorMsg("Could not deliver message right now. Please email directly instead.");
      }
    );
  };

  const labelClass = "mb-2 text-xs font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400";

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success-card"
            className="flex flex-col items-center justify-center rounded-3xl border border-brand-teal/20 bg-brand-teal/10 px-6 py-12 text-center"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35 }}
          >
            <FaCheckCircle className="mb-5 text-6xl text-brand-teal" />
            <h3 className="font-display text-2xl font-black text-slate-950 dark:text-white">Message captured</h3>
            <p className="mt-2 max-w-sm text-sm leading-7 text-slate-600 dark:text-slate-400">
              Thanks for reaching out. If EmailJS is not configured, this portfolio runs in demo mode.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-7 rounded-2xl bg-slate-950 px-6 py-3 text-sm font-extrabold text-white transition hover:-translate-y-1 dark:bg-white dark:text-slate-950 clickable"
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
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-5"
            >
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className={labelClass}>Name</label>
                <input
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
                <label className={labelClass}>Email</label>
                <input
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
              <label className={labelClass}>Subject</label>
              <input
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
              <label className={labelClass}>Message</label>
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me what you are building..."
                className="glass-input resize-none px-4 py-3 text-sm"
              />
            </div>

            {status === "error" && <p className="text-sm font-bold text-brand-pink">{errorMsg}</p>}

            <button
              type="submit"
              disabled={status === "sending"}
              className="glow-btn flex w-full items-center justify-center gap-3 rounded-2xl bg-slate-950 px-6 py-4 text-sm font-extrabold text-white shadow-2xl shadow-brand-indigo/20 transition hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-slate-950 clickable"
            >
              {status === "sending" ? (
                <>
                  <FaSpinner className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Send message
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
