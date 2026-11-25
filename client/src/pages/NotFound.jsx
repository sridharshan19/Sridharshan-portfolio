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
        <h1 className="text-8xl md:text-9xl font-display font-bold text-transparent bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#22D3EE] bg-clip-text filter drop-shadow-[0_0_24px_rgba(59,130,246,0.3)]">
          404
        </h1>
        
        <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-[#F8FAFC] mt-6 mb-4">
          Coordinate Not Found
        </h2>
        
        <p className="text-slate-600 dark:text-[#94A3B8] text-sm leading-relaxed mb-10 font-medium">
          The requested route does not exist or has shifted in the network grid. Return to the main dashboard.
        </p>

        <Link
          to="/"
          className="glow-btn px-7 py-3.5 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white text-sm font-semibold rounded-xl shadow-[0_0_25px_rgba(59,130,246,0.35)] transition-all duration-300 hover:scale-105 clickable"
        >
          Return Home
        </Link>
      </motion.div>
    </div>
  );
}
