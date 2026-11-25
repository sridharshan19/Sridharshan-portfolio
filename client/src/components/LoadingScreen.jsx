import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const duration = 900;
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
        }, 180);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          className="fixed inset-0 bg-[#080B14] z-[99999] flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
        >
          <div className="relative flex flex-col items-center max-w-sm px-6 text-center">
            <motion.div
              className="w-16 h-16 bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rounded-2xl flex items-center justify-center shadow-[0_0_32px_rgba(59,130,246,0.45)] relative"
              initial={{ scale: 0.9 }}
              animate={{ scale: [0.95, 1.03, 0.95] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            >
              <span className="text-white font-display font-bold text-2xl relative z-10">S</span>
            </motion.div>

            <motion.h2
              className="mt-6 text-xl font-display font-bold text-[#F8FAFC] tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              SRIDHARSHAN M N
            </motion.h2>

            <p className="text-[11px] text-[#22D3EE] tracking-widest uppercase mt-1.5 font-semibold">
              Full Stack Developer
            </p>

            <div className="w-56 h-1 bg-white/10 rounded-full mt-6 overflow-hidden relative">
              <div
                className="h-full bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#22D3EE] rounded-full transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
