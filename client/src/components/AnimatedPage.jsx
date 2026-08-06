import { motion } from "framer-motion";

export default function AnimatedPage({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}     // page enters from below
      animate={{ opacity: 1, y: 0 }}      // visible state
      exit={{ opacity: 0, y: -30 }}       // exit animation
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}