import React from "react";
import { motion } from "framer-motion";
import { BsDot } from "react-icons/bs";

const Experiences = [
  {
    role: "Full-Stack Developer",
    duration: "June 2025 - July 2025",
    tasks: [
      "Make a school admission form including validations & dashboard.",
      "Built an internal Admin Panel for managing content dynamically.",
      "Utilized React 19, Firebase, Firestore, and Tailwind in a Vite setup.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full py-20 px-6 bg-[#0d0d0d] text-white relative overflow-hidden"
    >
      {/* Orange Glowing Background Shapes */}
      <div className="absolute w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[180px] -top-20 -left-20"></div>
      <div className="absolute w-[450px] h-[450px] bg-orange-600/20 rounded-full blur-[180px] bottom-0 right-0"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-16">
          Experience
        </h2>

        <div className="space-y-12">
          {Experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative p-8 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/10 shadow-lg hover:shadow-orange-500/20 transition-all"
            >
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-orange-500 to-orange-700 rounded-full"></div>

              {/* Role */}
              <h3 className="text-3xl font-bold mb-2 text-orange-400">
                {exp.role}
              </h3>

              {/* Duration */}
              <p className="text-gray-300 font-medium mb-6">
                {exp.duration}
              </p>

              {/* Tasks List */}
              <ul className="space-y-3">
                {exp.tasks.map((task, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-lg text-gray-200"
                  >
                    <BsDot className="text-orange-500 text-3xl -mt-1" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
