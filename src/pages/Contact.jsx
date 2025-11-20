import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-20 px-6 bg-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-[450px] h-[450px] bg-orange-600/20 rounded-full blur-3xl -top-10 -left-10"></div>
      <div className="absolute w-[450px] h-[450px] bg-orange-500/20 rounded-full blur-3xl bottom-0 right-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            action="https://formspree.io/f/mvglvaab"
            method="POST"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-xl bg-white/10 border border-white/10 p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6 text-orange-400">
              Send me a message
            </h3>

            {/* Name */}
            <div className="mb-4">
              <label className="block text-gray-300 mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-300 mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-gray-300 mb-1">Message</label>
              <textarea
                name="message"
                required
                className="w-full h-32 p-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 resize-none focus:outline-none focus:border-orange-500"
                placeholder="Enter your message"
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 bg-orange-600 hover:bg-orange-700 transition text-white font-semibold rounded-lg shadow-lg shadow-orange-600/20"
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center backdrop-blur-xl bg-white/10 border border-white/10 p-8 rounded-2xl shadow-lg"
          >
            <p className="mb-5 text-2xl font-light">If you have any fun creative or meaningful projects in your mind then feel free to reach me out..</p>
            <h3 className="text-2xl font-semibold mb-6 text-orange-400">
              Connect with me
            </h3>

            <div className="flex flex-col gap-5 text-lg">
              {/* GitHub */}
              
              <a
                href="https://github.com/Sudhanshu-Ray10"
                target="_blank"
                className="flex items-center gap-3 hover:text-orange-400 transition"
              >
                <FaGithub className="text-3xl" /> GitHub
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/sudhanshu-ray-84352928b"
                target="_blank"
                className="flex items-center gap-3 hover:text-orange-400 transition"
              >
                <FaLinkedin className="text-3xl" /> LinkedIn
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919508524116"
                target="_blank"
                className="flex items-center gap-3 hover:text-orange-400 transition"
              >
                <FaWhatsapp className="text-3xl" /> WhatsApp
              </a>

              {/* Email */}
              <a
                href="mailto:sudhanshray10@gmail.com"
                className="flex items-center gap-3 hover:text-orange-400 transition"
              >
                <FaEnvelope className="text-3xl" /> Email Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
