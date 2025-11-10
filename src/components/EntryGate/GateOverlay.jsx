import { motion } from "framer-motion";

const GateOverlay = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2 }}
    className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm"
  >
    <motion.h1
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 1.5 }}
      className="text-5xl md:text-7xl font-semibold text-white tracking-widest"
    >
      Welcome to My Domain
    </motion.h1>
  </motion.div>
);

export default GateOverlay;
