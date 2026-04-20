"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Freelance",
    role: "Full Stack Developer",
    duration: "2025 - Present",
    description: "Developing custom web solutions for clients, focusing on React/Next.js and Node.js ecosystems.",
    tech: ["Next.js", "Clerk", "Supabase", "Prisma"],
  },
  {
    company: "Self-Project Lead",
    role: "Open Source Contributor",
    duration: "2025 - 2026",
    description: "Leading development of various open-source utilities and contributing to community projects.",
    tech: ["JavaScript", "React", "Git", "GitHub"],
  },
  {
    company: "University-:MIT ADT UNIVERSITY",
    role: "Computer Science Student",
    duration: "2023 - Present",
    description: "Focusing on DSA, Operating Systems, DBMS and Core CS fundamentals with high academic standing.",
    tech: ["C++", "Java", "DSA", "Problem Solving"],
  },
];

export default function ExperienceSection() {
  return (
    <section className="py-24 relative bg-background border-t border-zinc-900 overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-zinc-900/20 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <div className="text-center mb-20 space-y-4">
             <div className="inline-block px-4 py-1.5 rounded-full border border-cinematic-red/40 bg-cinematic-red/5 backdrop-blur-md">
                <span className="text-[10px] font-black uppercase tracking-widest text-cinematic-red">Career Progression</span>
             </div>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Professional <span className="text-gradient-cinematic">Timeline</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cinematic-blue via-cinematic-red to-transparent md:-translate-x-1/2" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center justify-between ${i % 2 === 0 ? "md:flex-row-reverse text-left md:text-right" : "text-left"}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-background border-2 border-cinematic-blue rounded-full -translate-x-[7px] md:-translate-x-2 z-20 glow-blue shadow-blue-500/20" />

                {/* Experience Card */}
                <div className="w-full md:w-[45%] pl-8 md:pl-0 md:px-8 space-y-3">
                  <span className="text-cinematic-blue font-mono font-bold text-sm tracking-widest uppercase">{exp.duration}</span>
                  <div className="space-y-1">
                    <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-none">{exp.company}</h3>
                    <p className="text-lg font-bold text-zinc-400 italic font-mono">{exp.role}</p>
                  </div>
                  <p className="text-zinc-500 leading-relaxed max-w-md mx-auto md:mx-0">{exp.description}</p>
                  <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-start" : "md:justify-start"}`}>
                    {exp.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-[10px] font-bold text-zinc-400 rounded-md uppercase tracking-widest">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Visual Placeholder for the other side */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
