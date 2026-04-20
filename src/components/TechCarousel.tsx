"use client";

import { motion } from "framer-motion";

const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Firebase",
  "Tailwind CSS",
  "Framer Motion",
  "JavaScript",
  "PostgreSQL",
  "REST API",
  "Cloudinary",
];

export default function TechCarousel() {
  return (
    <section className="py-24 bg-background overflow-hidden relative border-y border-zinc-900">
      {/* Background Glows for the section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cinematic-blue to-transparent opacity-30" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cinematic-red to-transparent opacity-30" />

      <div className="mx-auto px-4 md:px-6 max-w-6xl mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white/50 uppercase">
          Tech <span className="text-white">Stack</span>
        </h2>
      </div>

      <div className="relative flex">
        {/* Infinite Marquee Container */}
        <motion.div
          animate={{ x: [0, "-33.333%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex whitespace-nowrap gap-12 w-max"
          whileHover={{ animationPlayState: "paused" }} // This is a bit of a hack in motion, usually we use animate controls
        >
          {/* Double the technologies to create infinite effect */}
          {[...technologies, ...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 bg-zinc-900/50 px-8 py-4 rounded-xl border border-zinc-800 hover:border-cinematic-blue/50 hover:bg-zinc-800/80 transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-2 h-2 rounded-full bg-cinematic-blue/50 group-hover:bg-cinematic-blue glow-blue group-hover:scale-125 transition-all" />
              <span className="text-2xl font-bold text-zinc-400 group-hover:text-white tracking-widest uppercase">
                {tech}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Gradient Fades on edges */}
      <div className="absolute top-0 left-0 h-full w-40 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute top-0 right-0 h-full w-40 bg-gradient-to-l from-background to-transparent z-10" />
    </section>
  );
}
