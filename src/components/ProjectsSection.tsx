"use client";

import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Istyle-AR",
    description: "An AR-based fashion try-on application that leverages machine learning to overlay clothes on user images in real-time.",
    image: "/iStyleAr.png",
    tags: ["React Native", "Three.js", "MediaPipe", "TensorFlow"],
    githubUrl: "https://github.com/dashboard",
    liveUrl: "https://istylear.netlify.app/",
  },
  {
    title: "NearBuy",
    description: "A community-driven marketplace for everyone to buy locally and sell instantly. Connect with neighbors to trade pre-loved items safely and quickly.",
    image: "/nearbuy.png",
    tags: ["Next.js", "Tailwind CSS", "MongoDB", "Clerk Auth"],
    githubUrl: "https://github.com/Sudhanshu-Ray10/NearGo",
    liveUrl: "https://nearus.netlify.app/",
  },
  {
    title: "Lost and Found",
    description: "A centralized portal for university campuses to report and track lost items using a verification-based matching system.",
    image: "/Lost.png",
    tags: ["React", "Firebase", "Express", "Clerk Auth"],
    githubUrl: "https://github.com/Sudhanshu-Ray10/Lost-Found",
    liveUrl: "https://retrievia-lost-found-system-for.onrender.com/",
  },
  {
    title: "ShareGo",
    description: "A file-sharing utility designed for speed and security, featuring end-to-end encryption and peer-to-peer transfers.",
    image: "/Share.png",
    tags: ["WebRTC", "Socket.io", "React", "Node.js"],
    githubUrl: "https://github.com/Sudhanshu-Ray10/Sharego",
    liveUrl: "https://shareuse.netlify.app/",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-24 relative bg-background">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-cinematic-blue/5 blur-[150px] -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-cinematic-red/5 blur-[150px] translate-x-1/2" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16 space-y-4">
          <div className="px-4 py-1 border border-cinematic-blue/40 rounded-full bg-cinematic-blue/5 backdrop-blur-sm">
             <span className="text-xs font-mono text-cinematic-blue tracking-tighter uppercase font-black italic">Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white text-center">
            Recent <span className="text-gradient-cinematic">Creations</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cinematic-blue to-cinematic-red rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              index={i}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
