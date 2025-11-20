import React, { useState } from "react";
import {
  FaReact,
  FaNode,
  FaHtml5,
  FaJs,
  FaGithub,
  FaJava,
  FaCss3,
  FaAngular,
} from "react-icons/fa";
import {
  SiFirebase,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiC,
  SiCplusplus,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3 className="text-blue-600" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Angular", icon: <FaAngular className="text-red-600" /> },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-sky-400" />,
        },
      ],
    },
    {
      title: "Backend / Database",
      skills: [
        { name: "Node.js", icon: <FaNode className="text-green-600" /> },
        { name: "Express.js", icon: <SiExpress className="text-white" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "C", icon: <SiC className="text-blue-400" /> },
        { name: "C++", icon: <SiCplusplus className="text-indigo-400" /> },
        { name: "Java", icon: <FaJava className="text-orange-600" /> },
      ],
    },
    {
      title: "Tools & Deployment",
      skills: [{ name: "GitHub", icon: <FaGithub className="text-white" /> }],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="pt-16 pb-20 bg-black text-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold tracking-wide text-orange-400 drop-shadow-lg">
          ./Skills
        </h1>
        <p className="text-gray-300 text-sm mt-1">
          Technologies I work with & contribute using!
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 justify-center mb-10 flex-wrap">
        {skillCategories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 rounded-full text-sm transition-all duration-300 
              ${
                activeTab === index
                  ? "bg-orange-500 text-black shadow-xl shadow-orange-600/40 scale-110"
                  : "bg-transparent border border-orange-500 text-orange-400 hover:bg-orange-600 hover:text-black"
              }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-6 md:px-20">
        {skillCategories[activeTab].skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-md rounded-xl border border-orange-500/30 
            p-5 flex flex-col items-center gap-3 transition-all duration-300
            hover:scale-110 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-600/40"
          >
            <div className="text-5xl">{skill.icon}</div>
            <p className="text-sm font-medium tracking-wide">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
