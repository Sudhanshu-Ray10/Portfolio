"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl,
  index,
}: ProjectCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Map mouse position to rotation (-15 to 15 degrees)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <>
      {/* Desktop Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        className="hidden md:block relative group h-[450px] w-full rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-cinematic-blue/40 transition-colors duration-500 overflow-hidden"
      >
        <div
          style={{
            transform: "translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
          className="absolute inset-4 flex flex-col"
        >
          {/* Project Header */}
          <div className="flex justify-between items-start mb-4">
            <div className="px-3 py-1 bg-zinc-800/80 rounded-full border border-zinc-700">
              <span className="text-xs font-mono text-cinematic-blue/80 uppercase tracking-widest">
                Project #{index + 1}
              </span>
            </div>
            <div className="flex space-x-3 pointer-events-auto relative z-50">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/50 hover:bg-cinematic-blue/20 rounded-full transition-all border border-transparent hover:border-cinematic-blue/40 hover:scale-110"
                >
                  <Github className="w-5 h-5 text-white" />
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/50 hover:bg-cinematic-red/20 rounded-full transition-all border border-transparent hover:border-cinematic-red/40 hover:scale-110"
                >
                  <ExternalLink className="w-5 h-5 text-white" />
                </a>
              )}
            </div>
          </div>

          {/* Project Title & Description */}
          <div className="mt-auto">
            <h3 className="text-3xl font-black text-white mb-2 group-hover:text-cinematic-blue transition-colors">
              {title}
            </h3>
            <p className="text-sm text-zinc-400 line-clamp-3 mb-4 font-medium leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-zinc-950/40 text-zinc-500 rounded border border-zinc-900 group-hover:border-cinematic-blue/20 transition-all"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Image Overlay with Depth */}
        <div
          style={{
            transform: "translateZ(25px)",
          }}
          className="absolute inset-0 z-[-1] overflow-hidden"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover opacity-30 grayscale transition-all duration-700 group-hover:opacity-60 group-hover:grayscale-0 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
          
          {/* Glow Effects on Hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cinematic-blue/5 blur-[80px]" />
          </div>
        </div>

        {/* Border Gleam */}
        <div className="absolute inset-[-1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10 pointer-events-none">
          <div className="absolute inset-0 rounded-2xl border border-cinematic-blue/30 glow-blue opacity-50" />
        </div>
      </motion.div>

      {/* Mobile Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="md:hidden relative rounded-2xl bg-zinc-900/60 border border-zinc-800 overflow-hidden"
      >
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-4 flex justify-between items-center hover:bg-zinc-900/40 transition-colors"
        >
          <h3 className="text-xl font-black text-white text-left">{title}</h3>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-5 h-5 text-cinematic-blue" />
          </motion.div>
        </button>

        <motion.div
          initial={false}
          animate={{ height: isExpanded ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="px-4 pb-4 space-y-4 border-t border-zinc-800">
            {/* Image */}
            <div className="relative h-48 rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent" />
            </div>

            {/* Description */}
            <p className="text-sm text-zinc-400 font-medium leading-relaxed">
              {description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-zinc-950/40 text-zinc-500 rounded border border-zinc-900"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 bg-background/80 hover:bg-cinematic-blue/20 rounded-lg transition-all border border-transparent hover:border-cinematic-blue/40 flex items-center justify-center gap-2 text-sm font-bold text-white"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 bg-background/80 hover:bg-cinematic-red/20 rounded-lg transition-all border border-transparent hover:border-cinematic-red/40 flex items-center justify-center gap-2 text-sm font-bold text-white"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
