"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, FileText } from "lucide-react";

export default function ContactSection() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/dashboard",
      icon: <Github className="w-6 h-6" />,
      color: "cinematic-blue",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/sudhanshu-ray-84352928b",
      icon: <Linkedin className="w-6 h-6" />,
      color: "cinematic-red",
    },
    {
      name: "Connect via Mail",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=sudhanshray10@gmail.com",
      icon: <Mail className="w-6 h-6" />,
      color: "white",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/+919508524116",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.345.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
      color: "whatsapp",
    },
  ];

  return (
    <section className="py-32 relative bg-background border-t border-zinc-900 overflow-hidden">
      {/* Cinematic Pulse Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cinematic-blue/5 blur-[120px] rounded-full animate-pulse" />

      <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
        <div className="space-y-8">
             <div className="inline-block px-6 py-2 border border-cinematic-blue/30 bg-cinematic-blue/5 rounded-full backdrop-blur-sm">
                <span className="text-xs font-mono font-black text-cinematic-blue tracking-widest uppercase italic">Get In Touch</span>
             </div>
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter">
            Let's build <span className="text-gradient-cinematic">something</span> together.
          </h2>
          <p className="text-xl text-zinc-400 font-medium max-w-2xl mx-auto">
            Ready to bring your ideas to life or talk about DSA? Feel free to reach out to me!
          </p>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-6">
          {socialLinks.map((link, i) => {
            const isMail = link.href.startsWith('mailto:');
            return (
              <motion.a
                key={i}
                href={link.href}
                target={isMail ? "_self" : "_blank"}
                rel={isMail ? undefined : "noopener noreferrer"}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-3 px-8 py-4 bg-zinc-900/50 border border-zinc-800 hover:border-${link.color}/40 rounded-2xl transition-all group`}
              >
                <div className={`p-2 bg-background/80 rounded-lg group-hover:scale-110 group-hover:text-${link.color} transition-all`}>
                  {link.icon}
                </div>
                <span className="text-xl font-bold text-zinc-300 group-hover:text-white">{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.a>
            );
          })}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.5 }}
           className="mt-20"
        >
          <a 
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group inline-flex px-10 py-5 bg-white text-black font-black text-xl rounded-2xl hover:scale-105 transition-all duration-500 overflow-hidden shadow-2xl"
          >
            <span className="relative z-10 flex items-center space-x-3">
              <FileText className="w-6 h-6" />
              <span>DOWNLOAD RESUME</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cinematic-blue via-cinematic-red to-cinematic-blue opacity-0 group-hover:opacity-20 transition-opacity blur-md" />
          </a>
        </motion.div>

        {/* Footer info */}
        <div className="mt-40 pt-12 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6 text-zinc-600 font-mono text-sm uppercase tracking-widest">
            <p>© 2026 SUDHANSHU RAY. ALL RIGHTS RESERVED.</p>
            <div className="flex space-x-8">
                <span className="cursor-default hover:text-white transition-colors">EST. 2026</span>
                <span className="cursor-default hover:text-white transition-colors cursor-help group relative">
                    LOC: EARTH
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-2 bg-zinc-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        Building globally 🌍
                    </div>
                </span>
            </div>
        </div>
      </div>
    </section>
  );
}
