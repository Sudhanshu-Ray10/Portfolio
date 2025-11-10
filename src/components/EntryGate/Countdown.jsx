import { motion } from "framer-motion";

const Countdown = ({ number }) => {
  return (
    <motion.div
      key={number}
      className="absolute flex items-center justify-center inset-0 select-none"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1.1, opacity: 1 }}
      exit={{ scale: 0.5, opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* 🔆 Soft dark radial background for contrast */}
      <div className="absolute inset-0 bg-gradient-radial from-black/80 via-black/40 to-transparent" />

      {/* 💥 Glowing countdown number */}
      <motion.span
        className="text-[10rem] md:text-[14rem] font-extrabold text-yellow-300 drop-shadow-[0_0_25px_rgba(255,255,150,0.8)]"
        initial={{ scale: 0.8, opacity: 0.7, filter: "brightness(0.8)" }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.7, 1, 0.9],
          filter: [
            "brightness(1)",
            "brightness(1.8)",
            "brightness(1)",
          ],
          textShadow: [
            "0 0 20px rgba(255, 240, 180, 0.8)",
            "0 0 40px rgba(255, 220, 120, 1)",
            "0 0 25px rgba(255, 240, 150, 0.8)",
          ],
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      >
        {number}
      </motion.span>
    </motion.div>
  );
};

export default Countdown;
