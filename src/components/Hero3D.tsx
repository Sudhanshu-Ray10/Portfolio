"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

const panels = [
  {
    angle: 0,
    title: "Sudhanshu Ray",
    subtitle: "Full Stack Developer | DSA Enthusiast",
  },
  {
    angle: 45,
    quote: "Always learning. Always building. Always improving.",
  },
  {
    angle: 90,
    quote: "Passionate developer building scalable and intelligent web apps.",
  },
  {
    angle: 135,
    skills: ["React", "Node", "MongoDB", "Tailwind", "DSA"],
  },
];

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth out the scroll value
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Map scroll (0 to 1) to rotation (0 to 360)
  const rotation = useTransform(smoothProgress, [0, 1], [0, 360]);
  const perspective = "1000px";

  // Individual panel animations based on scroll progress
  // We'll show different content at different progress markers
  const opacity1 = useTransform(smoothProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const scale1 = useTransform(smoothProgress, [0, 0.15, 0.25], [1, 1, 0.8]);

  const opacity2 = useTransform(smoothProgress, [0.15, 0.25, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(smoothProgress, [0.15, 0.25, 0.45, 0.55], [20, 0, 0, -20]);

  const opacity3 = useTransform(smoothProgress, [0.45, 0.55, 0.75, 0.85], [0, 1, 1, 0]);
  const y3 = useTransform(smoothProgress, [0.45, 0.55, 0.75, 0.85], [20, 0, 0, -20]);

  const opacity4 = useTransform(smoothProgress, [0.75, 0.85, 1], [0, 1, 1]);
  const y4 = useTransform(smoothProgress, [0.75, 0.85, 1], [20, 0, 0]);

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full bg-background">
      {/* Sticky container for the 3D scene */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Cinematic Background Glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cinematic-blue/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cinematic-red/20 rounded-full blur-[120px] animate-pulse delay-700" />

        {/* 3D Visual Center */}
        <div
          className="relative z-10 w-64 h-64 md:w-80 md:h-80 select-none cursor-default"
          style={{ perspective }}
        >
          <motion.div
            className="w-full h-full relative"
            style={{
              rotateY: rotation,
              rotateX: 10,
              transformStyle: "preserve-3d",
            }}
          >
            {/* The actual profile image card */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-cinematic-blue/50 glow-blue backface-hidden shadow-2xl">
              <Image
                src="/profile.png"
                alt="Sudhanshu Ray"
                fill
                className="object-cover transition-transform duration-500 scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            {/* Back side of the card (optional, but adds to 3D feel) */}
            <div
              className="absolute inset-0 rounded-2xl bg-zinc-900 border-2 border-cinematic-red/50 glow-red"
              style={{
                transform: "rotateY(180deg)",
                backfaceVisibility: "hidden",
              }}
            >
              <div className="w-full h-full flex items-center justify-center p-8 text-center text-cinematic-red/80 font-mono text-xl animate-pulse">
                {`{ building_future: 
                Ready to code your dream project? }`}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Panels */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          {/* 0° Panel */}
          <motion.div
            style={{ opacity: opacity1, scale: scale1 }}
            className="absolute flex flex-col items-center text-center px-4 md:p-6 space-y-2 mt-[450px]"
          >
            <h1 className="text-3xl md:text-7xl font-black tracking-tight text-white">
              Sudhanshu <span className="text-gradient-cinematic">Ray</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 font-medium">
              Full Stack Web Developer | DSA Enthusiast
            </p>
          </motion.div>

          {/* 90° Panel */}
          <motion.div
            style={{ opacity: opacity2, y: y2 }}
            className="absolute flex flex-col items-center text-center max-w-lg px-4 md:p-6 space-y-4 mt-[450px]"
          >
            <p className="text-lg md:text-4xl font-semibold italic text-cinematic-blue leading-tight">
              "Always learning. Always building. Always improving."
            </p>
          </motion.div>

          {/* 180° Panel */}
          <motion.div
            style={{ opacity: opacity3, y: y3 }}
            className="absolute flex flex-col items-center text-center max-w-xl px-4 md:p-6 space-y-4 mt-[450px]"
          >
            <p className="text-base md:text-3xl font-bold text-white px-2 md:px-8 py-2 md:py-4 border-l-4 border-cinematic-red glass-morphism rounded-r-lg shadow-xl shadow-red-900/20">
              Passionate developer building scalable and intelligent web apps.
            </p>
          </motion.div>

          {/* 270° Panel */}
          <motion.div
            style={{ opacity: opacity4, y: y4 }}
            className="absolute flex flex-col items-center text-center px-4 md:p-6 mt-[450px]"
          >
            <div className="flex flex-wrap justify-center gap-4">
              {["React", "Node.js", "MongoDB", "Tailwind", "DSA"].map((tech, i) => (
                <span
                  key={tech}
                  className="px-6 py-2 bg-zinc-900/80 border border-cinematic-blue/30 text-cinematic-blue rounded-full text-lg font-mono shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Progress Indicator (Vertical Line) */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 h-48 w-[2px] bg-zinc-800 rounded-full overflow-hidden">
          <motion.div
            className="w-full bg-cinematic-red"
            style={{ height: useTransform(smoothProgress, [0, 1], ["0%", "100%"]) }}
          />
        </div>

        {/* Scroll Hint */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-4 flex flex-col items-center text-zinc-500 font-mono text-[10px] tracking-[0.3em] opacity-50"
        >
          <span>SCROLL TO EXPLORE</span>
          <div className="w-[0.5px] h-10 bg-gradient-to-b from-zinc-500 to-transparent mt-3" />
        </motion.div>
      </div>
    </div>
  );
}
