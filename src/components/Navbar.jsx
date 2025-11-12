import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
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
  const menuRef = useRef();

  const toggleHamburger = () => {
    setIsOpen((prev) => !prev);
  };

  // Close on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false);
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Navbar Wrapper */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/70 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between gap-5">
          {/* Logo */}
          <div className="flex gap-2 items-center">
            <img src="vite.svg" alt="logo" className="w-8 h-8" />
            <h2 className="font-extrabold text-lg">Sudhanshu’s Portfolio</h2>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                spy={true}
                activeClass="active-style"
                duration={500}
                className="cursor-pointer hover:text-orange-400 transition-all"
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

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleHamburger}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                initial={false}
                animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
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
            initial={{ opacity: 0, scaleY: 0, y: -50 }}
            animate={{ opacity: 1, scaleY: 1, y: 0 }}
            exit={{ opacity: 0, scaleY: 0, y: -50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="md:hidden flex flex-col items-center gap-5 bg-gray-900 text-white py-6 origin-top z-40 shadow-lg"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                spy={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                activeClass="active-style"
                className="flex gap-3 text-lg font-medium hover:text-orange-400 transition-all"
              >
                {link.label}
              </Link>
            ))}

            {/* Resume + Exit */}
            <div className="flex flex-col gap-4 mt-4">
              <a
                href="/Resume.pdf"
                download
                className="flex items-center gap-2 border-2 border-orange-500 rounded-full px-4 py-2 hover:bg-orange-500 transition-all"
              >
                <FaDownload />
                Resume
              </a>

              <button
                onClick={() => setIsOpen(false)}
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
