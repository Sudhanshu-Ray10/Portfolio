import { motion } from "framer-motion";

const GateOverlay = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2.1 }}
    className="absolute inset-0 flex items-center justify-center overflow-hidden bg-black"
  >

    {/* Glowing Gradient Background Shapes */}
    <div className="absolute w-[700px] h-[700px] bg-orange-600/20 rounded-full blur-[180px] -top-20 -left-20"></div>
    <div className="absolute w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[180px] bottom-0 right-0"></div>

    {/* Floating Particles */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: -200,
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          className="absolute w-1 h-1 rounded-full bg-orange-400 shadow-[0_0_10px_2px_rgba(255,125,0,0.8)]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>

    {/* Center Content */}
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.3, duration: 1.5, ease: "easeOut" }}
      className="text-center px-4"
    >
      <motion.h1
        className="text-5xl md:text-7xl font-bold tracking-widest text-white drop-shadow-xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1.5 }}
      >
        Welcome to My Domain
      </motion.h1>

      <motion.p
        className="mt-6 text-lg md:text-2xl text-orange-300 font-medium tracking-wide drop-shadow"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        Where Creativity Meets Innovation
      </motion.p>
    </motion.div>

  </motion.div>
);

export default GateOverlay;
