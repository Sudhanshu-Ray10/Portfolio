"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Intersection Observer for Active Section
    const options = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Trigger when section is in the middle of viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    navLinks.forEach((link) => {
      const id = link.href.replace("#", "");
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-[100] flex flex-col items-start md:items-center transition-all duration-500 ${isScrolled ? "pt-6" : "pt-8"
        }`}
    >
      <div className={`w-fit md:w-full md:max-w-7xl transition-all duration-500 flex items-center justify-between px-4 md:px-6 ${isScrolled
        ? "glass-morphism nav-glow py-3.5 rounded-full border border-white/10 scale-[1.01]"
        : "py-4"
        }`}>
        <div className="flex items-center gap-27">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-black tracking-tighter cursor-pointer"
          >
            <span className="text-white">SUDHANSHU</span>
            <span className="text-gradient-cinematic">.RAY</span>
          </motion.div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${isActive ? "text-cinematic-blue " : "text-zinc-500 hover:text-white"
                  }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-cinematic-blue rounded-full shadow-[0_0_15px_rgba(0,242,255,0.8)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="https://github.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/sudhanshu-ray-84352928b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 bg-zinc-900 border border-zinc-500/30 text-[10px] font-black uppercase tracking-[0.2em] text-white rounded-full hover:border-cinematic-red hover:shadow-[0_0_15_rgba(255,0,68,0.4)] transition-all cursor-pointer inline-block"
          >
            Hire Me
          </a>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden absolute left-4 top-full mt-4 w-[92%] max-w-[500px] glass-morphism border border-white/10 overflow-y-auto overflow-x-hidden max-h-[calc(100vh-6rem)] rounded-[2.5rem] shadow-2xl"
        >
          <div className="p-8 flex flex-col items-center justify-center space-y-6 text-center">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-black uppercase tracking-[0.2em] transition-all duration-300 ${isActive ? "text-cinematic-blue scale-110" : "text-zinc-500 hover:text-white"
                    }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-4 border-t border-zinc-700/50 space-y-3">
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-black uppercase tracking-[0.2em] text-cinematic-blue hover:text-white transition-all block"
              >
                Download Resume
              </a>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-full px-6 py-2.5 bg-zinc-900 border border-zinc-500/30 text-[10px] font-black uppercase tracking-[0.2em] text-white rounded-full hover:border-cinematic-red hover:shadow-[0_0_15px_rgba(255,0,68,0.4)] transition-all"
              >
                Close Menu
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
