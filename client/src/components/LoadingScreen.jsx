import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const duration = 2000; // 2 seconds total load
    const intervalTime = 20; 
    const steps = duration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min(Math.floor((currentStep / steps) * 100), 100);
      setProgress(nextProgress);

      if (currentStep >= steps) {
        clearInterval(interval);
        setTimeout(() => {
          setIsFinished(true);
          if (onComplete) onComplete();
        }, 300);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          className="fixed inset-0 bg-[#050816] z-[99999] flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
          <div className="relative flex flex-col items-center max-w-sm px-6 text-center">
            {/* Pulsing Glowing Brand Logo */}
            <motion.div
              className="w-20 h-20 bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-pink rounded-2xl flex items-center justify-center shadow-2xl relative"
              initial={{ scale: 0.8, rotate: -10 }}
              animate={{ 
                scale: [0.8, 1, 0.95, 1],
                rotate: [0, 10, -5, 0]
              }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            >
              {/* Outer pulsing glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-pink rounded-2xl blur-lg opacity-60 animate-pulse" />
              <span className="text-white font-display font-extrabold text-3xl relative z-10">S</span>
            </motion.div>

            {/* Title */}
            <motion.h2
              className="mt-8 text-2xl font-display font-bold text-white tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              SRIDHARSHAN M N
            </motion.h2>

            <motion.p
              className="text-xs text-brand-purple tracking-widest uppercase mt-2 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Portfolio Loading
            </motion.p>

            {/* Percentage Text */}
            <div className="mt-12 font-display text-4xl font-extrabold text-transparent bg-gradient-to-r from-white to-gray-400 bg-clip-text">
              {progress}%
            </div>

            {/* Progress Container */}
            <div className="w-64 h-1.5 bg-white/5 rounded-full mt-4 overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-pink rounded-full shadow-[0_0_8px_#8B5CF6]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </div>

            <p className="text-[10px] text-gray-500 mt-6 tracking-wider">
              Preparing premium futuristic experience...
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
