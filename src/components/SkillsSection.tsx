"use client";

import { motion } from "framer-motion";
import { 
  ChevronDown, Code2, Database, Layout, Terminal, 
  Atom, Zap, Wind, Activity, FileCode, Server, Flame, Globe, Cloud, Coffee, GitBranch, Binary, Cpu, Network, Box, Rocket
} from "lucide-react";
import { useState } from "react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout className="w-6 h-6 text-cinematic-blue" />,
    skills: [
      { name: "React.js", icon: <Atom className="w-4 h-4" /> },
      { name: "Next.js", icon: <Rocket className="w-4 h-4" /> },
      { name: "Tailwind CSS", icon: <Wind className="w-4 h-4" /> },
      { name: "Framer Motion", icon: <Activity className="w-4 h-4" /> },
      { name: "JavaScript", icon: <FileCode className="w-4 h-4" /> },
    ],
    accent: "cinematic-blue",
  },
  {
    title: "Backend & Database",
    icon: <Database className="w-6 h-6 text-cinematic-red" />,
    skills: [
      { name: "Node.js", icon: <Server className="w-4 h-4" /> },
      { name: "Express.js", icon: <Zap className="w-4 h-4" /> },
      { name: "MongoDB", icon: <Database className="w-4 h-4" /> },
      { name: "PostgreSQL", icon: <Database className="w-4 h-4" /> },
      { name: "Firebase", icon: <Flame className="w-4 h-4" /> },
      { name: "REST APIs", icon: <Globe className="w-4 h-4" /> },
      { name: "Cloudinary", icon: <Cloud className="w-4 h-4" /> },
    ],
    accent: "cinematic-red",
  },
  {
    title: "Languages & Tools",
    icon: <Terminal className="w-6 h-6 text-white" />,
    skills: [
      { name: "C", icon: <Terminal className="w-4 h-4" /> },
      { name: "C++", icon: <Terminal className="w-4 h-4" /> },
      { name: "Java", icon: <Coffee className="w-4 h-4" /> },
      { name: "Python", icon: <Code2 className="w-4 h-4" /> },
      { name: "Git", icon: <GitBranch className="w-4 h-4" /> },
    ],
    accent: "white",
  },
  {
    title: "Computer Science",
    icon: <Code2 className="w-6 h-6 text-cinematic-blue" />,
    skills: [
      { name: "DSA", icon: <Binary className="w-4 h-4" /> },
      { name: "Operating Systems", icon: <Cpu className="w-4 h-4" /> },
      { name: "DBMS", icon: <Database className="w-4 h-4" /> },
      { name: "Computer Networks", icon: <Network className="w-4 h-4" /> },
      { name: "OOPs", icon: <Box className="w-4 h-4" /> },
    ],
    accent: "cinematic-blue",
  },
];

export default function SkillsSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-24 relative bg-background border-t border-zinc-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
             Professional <span className="text-gradient-cinematic">Abilities</span>
          </h2>
          <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest italic">Always honing my craft</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className={`p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-${category.accent}/40 transition-all cursor-pointer group relative overflow-hidden`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-background/80 rounded-xl border border-zinc-700 shadow-xl group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white transition-colors">{category.title}</h3>
                </div>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                >
                  <ChevronDown className="w-5 h-5 text-zinc-500" />
                </motion.div>
              </div>

              <motion.div
                initial={false}
                animate={{ height: expandedIndex === index ? "auto" : "0px", opacity: expandedIndex === index ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center px-4 py-2 bg-background border border-zinc-900 text-zinc-400 rounded-lg text-sm font-bold uppercase tracking-wider hover:border-cinematic-blue/30 hover:text-white transition-all shadow-lg group/skill"
                    >
                      <span className="mr-2 text-zinc-500 group-hover/skill:text-cinematic-blue transition-colors">
                        {skill.icon}
                      </span>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Decorative Glow */}
              <div className={`absolute -right-4 -bottom-4 w-24 h-24 bg-${category.accent}/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
