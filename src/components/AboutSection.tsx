"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Zap, Rocket, Brain } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-32 relative bg-background border-t border-zinc-900 overflow-hidden">
      {/* Cinematic Background elements */}
      <div className="absolute -left-24 top-1/4 w-96 h-96 bg-cinematic-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -right-24 bottom-1/4 w-96 h-96 bg-cinematic-red/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left: Interactive Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
             <div className="relative aspect-square max-w-xs md:max-w-md mx-auto group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-cinematic-blue/20 to-cinematic-red/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 glass-morphism shadow-2xl">
                   <Image 
                     src="/about-visual.png" 
                     alt="Abstract Tech Artwork" 
                     fill 
                     sizes="(max-width: 768px) 100vw, 50vw"
                     className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>

                {/* Floating Experience Badge */}
                <motion.div 
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 4, repeat: Infinity }}
                   className="absolute -bottom-6 -right-6 glass-morphism p-6 rounded-2xl border border-cinematic-blue/30 shadow-xl nav-glow"
                >
                   <p className="text-3xl font-black text-white">10+</p>
                   <p className="text-[10px] uppercase tracking-widest text-cinematic-blue font-bold">Projects Built</p>
                </motion.div>
             </div>
          </motion.div>

          {/* Right: Compelling Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-cinematic-blue font-mono tracking-[0.3em] text-xs uppercase font-bold">Crafting Digital Experiences</span>
              <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-white leading-none">
                Beyond Just <br />
                <span className="text-gradient-cinematic">Lines of Code.</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-zinc-400 leading-relaxed font-medium max-w-xl">
              <p>
                I&apos;m <span className="text-white font-bold">Sudhanshu Ray</span>, and I genuinely love the process of building things from scratch. For me, coding isn&apos;t just about making a site work—it&apos;s about the logic, the craft, and the satisfaction of seeing a complex idea come to life.
              </p>
              <p>
                I spend most of my time diving into <span className="text-cinematic-blue italic">Data Structures</span> and figuring out how to make web apps <span className="text-cinematic-red italic">fast and dependable</span>. I&apos;m all about creating software that is well-structured under the hood and feels effortless to use.
              </p>
            </div>

            {/* Metric Cards Row */}
            <div className="grid grid-cols-3 gap-4 pt-4">
               {[
                 { icon: <Rocket className="w-5 h-5" />, label: "Scalable", sub: "Architectures" },
                 { icon: <Zap className="w-5 h-5" />, label: "High", sub: "Performance" },
                 { icon: <Brain className="w-5 h-5" />, label: "DSA", sub: "Mastery" },
               ].map((item, i) => (
                 <div key={i} className="glass-morphism p-4 rounded-xl border border-white/5 hover:border-cinematic-blue/30 transition-all duration-500 group">
                    <div className="text-cinematic-blue mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <p className="text-xs font-black uppercase tracking-widest text-white">{item.label}</p>
                    <p className="text-[10px] text-zinc-500 font-medium">{item.sub}</p>
                 </div>
               ))}
            </div>

            <div className="pt-6">
              <div className="inline-flex items-center space-x-3 text-white font-bold group cursor-pointer">
                <span className="tracking-[0.2em] uppercase text-xs">Check out my approach</span>
                <div className="w-12 h-[1px] bg-white/20 group-hover:w-20 group-hover:bg-cinematic-blue transition-all duration-500" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
