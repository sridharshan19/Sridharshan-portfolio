import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 relative z-10">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-md flex flex-col items-center"
      >
        {/* Large Glowing 404 */}
        <h1 className="text-9xl font-display font-extrabold text-transparent bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-cyan bg-clip-text filter drop-shadow-[0_0_20px_rgba(99,102,241,0.3)] animate-pulse">
          404
        </h1>
        
        <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white mt-6 mb-4">
          Lost in Cyber Space?
        </h2>
        
        <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-10 font-medium">
          The coordinate you requested does not exist or has been shifted in the network grid. Let's redirect you back to safety.
        </p>

        <Link
          to="/"
          className="glow-btn px-8 py-3.5 bg-gradient-to-r from-brand-indigo to-brand-purple text-white font-bold rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105 clickable"
        >
          Return Home
        </Link>
      </motion.div>
    </div>
  );
}
