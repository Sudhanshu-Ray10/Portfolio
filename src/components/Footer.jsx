import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-white text-gray-900 py-12 px-6 overflow-hidden">

      {/* Orange Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-orange-600/25 rounded-full blur-3xl -top-32 -left-20"></div>
      <div className="absolute w-[450px] h-[450px] bg-orange-500/25 rounded-full blur-3xl bottom-0 right-0"></div>

      <div className="relative z-20 max-w-5xl mx-auto text-center flex flex-col items-center">

        {/* Name */}
        <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-4">
          Sudhanshu Ray
        </h2>

        {/* Tagline */}
        <p className="text-gray-300 text-sm mb-8">
          Creating Interactive & Modern Digital Experiences.
        </p>

        {/* Social Icons */}
        <div className="flex gap-8 text-lg mb-8">
          
          <a
            href="https://github.com/Sudhanshu-Ray10"
            target="_blank"
            className="hover:text-orange-400 transition transform hover:scale-110"
          >
            <FaGithub className="text-3xl" />
          </a>

          <a
            href="https://www.linkedin.com/in/sudhanshu-ray-84352928b"
            target="_blank"
            className="hover:text-orange-400 transition transform hover:scale-110"
          >
            <FaLinkedin className="text-3xl" />
          </a>

          <a
            href="https://wa.me/9508524116"
            target="_blank"
            className="hover:text-orange-400 transition transform hover:scale-110"
          >
            <FaWhatsapp className="text-3xl" />
          </a>

          <a
            href="mailto:sudhanshray10@gmail.com"
            className="hover:text-orange-400 transition transform hover:scale-110"
          >
            <FaEnvelope className="text-3xl" />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-6"></div>

        {/* Copyright */}
        <p className="text-gray-400 text-xs">
          © {new Date().getFullYear()} Sudhanshu Ray • All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
