import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { useTransition } from "../context/TransitionContext";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setIsEntered } = useTransition();

  const navLinks = [
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "projects", label: "Projects" },
    { to: "experience", label: "Experience" },
    { to: "testimonial", label: "Testimonials" },
    { to: "contact", label: "Contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  const toggleHamburger = () => setIsOpen((p) => !p);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Keep scroll only for visual "scrolled" state (do NOT auto-close here)
  useEffect(() => {
    const handleScrollForHeader = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScrollForHeader, { passive: true });
    handleScrollForHeader();
    return () => window.removeEventListener("scroll", handleScrollForHeader);
  }, []);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!isOpen) return;
      if (menuRef.current && !menuRef.current.contains(e.target) && btnRef.current && !btnRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  // Close when a wheel/touch gesture starts outside the menu (prevents closing when scrolling inside menu)
  useEffect(() => {
    const handlePotentialClose = (e) => {
      if (!isOpen) return;
      if (menuRef.current && !menuRef.current.contains(e.target) && btnRef.current && !btnRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("wheel", handlePotentialClose, { passive: true });
    window.addEventListener("touchstart", handlePotentialClose, { passive: true });
    return () => {
      window.removeEventListener("wheel", handlePotentialClose);
      window.removeEventListener("touchstart", handlePotentialClose);
    };
  }, [isOpen]);

  // Escape key to close
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  // Highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((l) => l.to);
      const scrollPosition = window.scrollY + 100;
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  return (
    <>
      {/* Navbar Wrapper */}
      <div
        className={`sticky top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-white/70 backdrop-blur-md shadow-lg" : "bg-black text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between gap-5">
          {/* Logo */}
          <div className="flex gap-2 items-center">
            <img src="Sudhanshu.jpg" alt="logo" className="w-12 h-12 rounded-full" />
            <h2 className="font-extrabold text-orange-600 text-3xl">Sudhanshu’s Portfolio</h2>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={`/home#${link.to}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.to);
                }}
                className={`cursor-pointer hover:text-orange-400 transition-all ${
                  activeSection === link.to ? "active-style" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Resume */}
          <div className="hidden md:flex">
            <a href="/Resume.pdf" download>
              <div className="flex items-center gap-3.5 border-2 rounded-full px-3 py-2 hover:bg-orange-500 hover:border-orange-500 transition-all">
                <FaDownload />
                Resume
              </div>
            </a>
          </div>

          <button
            type="button"
            onClick={() => {
              navigate("/");
              setIsOpen(false);
              setIsEntered(false);
            }}
            className="items-center justify-center gap-2 border-2 border-red-600 rounded-full px-4 py-2 hover:bg-red-600 transition-all hidden md:flex"
          >
            <IoExitOutline /> Exit
          </button>

          {/* Mobile Hamburger */}
          <div className="md:hidden relative z-50">
            <motion.button
              ref={btnRef}
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={() => {
                // Ensure cross reliably closes
                if (isOpen) setIsOpen(false);
                else setIsOpen(true);
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="relative z-50"
            >
              <motion.div initial={false} animate={isOpen ? { rotate: 180 } : { rotate: 0 }} transition={{ duration: 0.25 }}>
                {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            initial={{ opacity: 0, scaleY: 0, y: -20 }}
            animate={{ opacity: 1, scaleY: 1, y: 0 }}
            exit={{ opacity: 0, scaleY: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="md:hidden flex flex-col items-center gap-5 fixed top-[92px] w-full bg-white py-4 origin-top z-40 shadow-lg"
          >
            {navLinks.map((link) => (
              <a
                key={link.to}
                href={`#${link.to}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.to);
                  setIsOpen(false);
                }}
                className={`flex gap-3 text-lg font-medium hover:text-orange-400 transition-all ${
                  activeSection === link.to ? "active-style" : ""
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Resume + Exit */}
            <div className="flex flex-col gap-4 mt-4">
              <a href="/Resume.pdf" download className="flex items-center gap-2 border-2 border-orange-500 rounded-full px-4 py-2 hover:bg-orange-500 transition-all">
                <FaDownload />
                Resume
              </a>

              <button
                type="button"
                onClick={() => {
                  navigate("/");
                  setIsOpen(false);
                  setIsEntered(false);
                }}
                className="flex items-center justify-center gap-2 border-2 border-red-600 rounded-full px-4 py-2 hover:bg-red-600 transition-all"
              >
                <IoExitOutline /> Exit
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
