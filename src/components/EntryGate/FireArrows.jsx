import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FireArrows = () => {
  const [arrows, setArrows] = useState([]);

  useEffect(() => {
    // Generate 180 arrows dynamically
    const arrowCount = 380;
    const newArrows = Array.from({ length: arrowCount }).map((_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      z: Math.random() * 1000, // Simulate depth
      delay: Math.random() * 0.5,
      duration: 0.8 + Math.random() * 0.8,
      rotate: -30 + Math.random() * 60,
      scale: 0.6 + Math.random() * 1.2,
    }));
    setArrows(newArrows);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {/* 🔥 Intense flicker & fireball pulse background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-yellow-600/100 via-orange-600/80 to-transparent"
        animate={{
          opacity: [0.2, 0.5, 0.9, 0.4],
          filter: ["brightness(0.9)", "brightness(1.3)", "brightness(1)"],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.2,
          ease: "easeInOut",
        }}
      />

      {/* 💥 Flash bursts like explosion */}
      <motion.div
        className="absolute inset-0 bg-yellow-300/90"
        animate={{
          opacity: [0, 0.2, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 0.4,
          ease: "easeInOut",
        }}
      />

      {/* 🎥 Slight camera shake effect */}
      <motion.div
        className="absolute inset-0"
        animate={{
          x: [0, 5, -5, 0],
          y: [0, -4, 4, 0],
          rotate: [0, 1.2, -1.2, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        {arrows.map((arrow) => (
          <motion.div
            key={arrow.id}
            className="absolute origin-top"
            style={{
              left: arrow.x,
              transform: `rotate(${arrow.rotate}deg) scale(${arrow.scale}) translateZ(${arrow.z}px)`,
              perspective: "800px",
            }}
            initial={{
              y: -150,
              opacity: 0,
            }}
            animate={{
              y: [0, window.innerHeight + 250],
              x: [arrow.x, arrow.x + Math.random() * 40 - 20],
              opacity: [0.3, 1, 0],
              scale: [arrow.scale, arrow.scale * 1.5], // Feels like coming closer
            }}
            transition={{
              duration: arrow.duration,
              delay: arrow.delay,
              repeat: Infinity,
            }}
          >
            {/* 🔱 Arrow design */}
            <div
              className="w-[3px] h-20 bg-gradient-to-b from-yellow-200 via-orange-500 to-red-700 shadow-[0_0_25px_6px_rgba(255,200,0,0.8)]"
              style={{
                filter: "blur(0.8px)",
                borderRadius: "2px",
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FireArrows;
