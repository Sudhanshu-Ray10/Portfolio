import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { GiCricketBat } from "react-icons/gi";
import { BiMusic } from "react-icons/bi";

const About = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        id="about"
        className="relative flex flex-col md:flex-row items-center justify-center px-8 py-16 bg-[#f9f9f9] text-gray-800 overflow-hidden"
      >
        {/* Decorative Background Glow */}
        <div className="absolute w-[500px] h-[500px] bg-orange-200 opacity-20 rounded-full blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-[500px] h-[500px] bg-orange-300 opacity-20 rounded-full blur-3xl bottom-0 right-0"></div>

        {/* Profile Image With Unique Animated Rings */}
        <motion.div
          className="relative z-20 w-72 h-72 rounded-full mb-10 md:mb-0 md:mr-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Gradient Ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-400 to-orange-700 blur-[2px] animate-pulse"></div>

          {/* Floating Animation */}
          <motion.img
            src="Sudhanshu.jpg"
            alt="pfp"
            className="absolute inset-0 object-cover w-full h-full rounded-full shadow-2xl"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Content */}
        <div className="text-center md:text-left max-w-xl backdrop-blur-xl bg-white/60 p-8 rounded-2xl shadow-lg border border-orange-200/40">
          
          {/* Section Title */}
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-700 to-orange-500 bg-clip-text text-transparent">
            ./About Me
          </h2>

          {/* Typing Name */}
          <div className="text-3xl font-semibold mb-4 text-gray-900">
            <span className="text-orange-600">I’m </span>
            <Typewriter
              words={["Sudhanshu Ray.", "a Creative Developer."]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </div>

          {/* About Text */}
          <motion.p
            className="text-lg text-gray-700 mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Passionate about crafting innovative digital experiences, I
            specialize in full-stack development with a focus on React, Node.js,
            and modern web technologies. With a keen eye for design and a drive
            for problem-solving, I create user-centric, elegant, and efficient
            solutions.
          </motion.p>

          {/* Quote Box Improved */}
          <div className="border border-orange-400/70 rounded-2xl p-5 bg-white/50 shadow-sm">
            <p className="text-gray-700 text-lg font-medium text-center">
             "The best way to predict your future is to create it".</p>
          </div>

          {/* Hobbies Section */}
          <div className="mt-8 text-gray-700">
            <p className="font-semibold text-orange-600 mb-3 text-lg">
              Hobbies:
            </p>

            <ul className="flex flex-wrap gap-10 justify-center md:justify-start font-bold">
              <motion.li
                className="flex items-center gap-3 bg-white/60 px-4 py-2 rounded-lg shadow hover:shadow-lg cursor-pointer hover:scale-105 transition"
                whileHover={{ rotate: -2 }}
              >
                <GiCricketBat className="text-4xl text-orange-600" /> Cricket
              </motion.li>

              <motion.li
                className="flex items-center gap-3 bg-white/60 px-4 py-2 rounded-lg shadow hover:shadow-lg cursor-pointer hover:scale-105 transition"
                whileHover={{ rotate: 2 }}
              >
                <BiMusic className="text-4xl text-orange-600" /> Music
              </motion.li>
            </ul>
          </div>

          {/* Button */}
          <motion.button
            onClick={scrollToContact}
            className="mt-8 bg-orange-600 text-white px-7 py-3 rounded-xl font-semibold hover:bg-orange-700 shadow-lg hover:shadow-orange-300/40 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </div>
      </section>
    </>
  );
};

export default About;
