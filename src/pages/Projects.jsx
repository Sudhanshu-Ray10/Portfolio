import React from "react";
import { useRef } from "react";
import {
  SiReact,
  SiTailwindcss,
  SiFirebase,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiExpress,
} from "react-icons/si";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const projects = [
  {
    title: "University Lost & Found",
    image: "Lost And Found.jpeg",
    tools: [SiHtml5, SiCss3, SiJavascript, SiExpress],
    link: "https://retrievia-lost-found-system-for.onrender.com/",
    Status: true,
  },
  {
    title: "Istyle-Ar",
    image: "Istyle-AR.jpeg",
    tools: [SiReact, SiTailwindcss, SiFirebase],
    link: "",
    Status: false,
  },
  {
    title: "Youtube-Clone",
    image: "Youtube.png",
    tools: [SiReact, SiCss3],
    link: "",
    Status: true,
  },
  {
    title: "Spotify-Clone",
    image: "Spotify.png",
    tools: [SiHtml5, SiCss3, SiJavascript],
    link: "https://github.com/Sudhanshu-Ray10/Spotify-Frontend-Clone.git",
    Status: true,
  },
];

const Projects = () => {
  const swiperRef = useRef(null);
  return (
    <section id="Project" className="relative py-20 px-8 bg-[#f9f9f9] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute w-[500px] h-[500px] bg-orange-300 opacity-20 rounded-full blur-3xl -top-20 -left-20"></div>
      <div className="absolute w-[450px] h-[450px] bg-orange-400 opacity-20 rounded-full blur-3xl bottom-0 right-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-orange-500 mb-14">
          ./My Projects
        </h2>

        {/* Swiper Carousel */}
        {/* Custom Left Button */}
<motion.button
  whileHover={{ scale: 1.1 }}
  className="absolute left-0 top-1/2 -translate-y-1/2 bg-orange-600 text-white px-4 py-3 shadow-xl rounded-full z-20 hover:bg-orange-700 transition"
  onClick={() => swiperRef.current.slidePrev()}
>
  ❮
</motion.button>

{/* Custom Right Button */}
<motion.button
  whileHover={{ scale: 1.1 }}
  className="absolute right-0 top-1/2 -translate-y-1/2 bg-orange-600 text-white px-4 py-3 shadow-xl rounded-full z-20 hover:bg-orange-700 transition"
  onClick={() => swiperRef.current.slideNext()}
>
  ❯
</motion.button>

<Swiper
  modules={[Pagination]}
  onSwiper={(swiper) => (swiperRef.current = swiper)}
  pagination={{ clickable: true }}
  spaceBetween={40}
  centeredSlides={false}
  breakpoints={{
    320: { slidesPerView: 1 },
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  className="pb-12"
>
  {projects.map((p, index) => (
    <SwiperSlide key={index}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.03 }}
        className="relative group rounded-3xl shadow-xl overflow-hidden border border-orange-300/40 backdrop-blur-xl bg-white/60 hover:shadow-orange-300/40 transition-all"
      >
        {/* Image */}
        <div className="relative h-56 w-full overflow-hidden">
          <img
            src={p.image}
            alt={p.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

          <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white drop-shadow-lg">
            {p.title}
          </h3>
        </div>

        {/* Info */}
        <div className="p-6 text-gray-700 text-center">
          <div className="flex justify-center gap-4 my-4">
            {p.tools.map((Icon, idx) => (
              <Icon key={idx} className="text-3xl text-orange-600 drop-shadow" />
            ))}
          </div>

          <motion.a
            href={p.Status ? p.link : "#"}
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-block w-full py-3 mt-2 rounded-xl font-semibold text-white shadow-lg transition
              ${
                p.Status
                  ? "bg-orange-600 hover:bg-orange-700 shadow-orange-300/30"
                  : "bg-gray-500 pointer-events-none"
              }`}
          >
            {p.Status ? "View Project" : "In Progress"}
          </motion.a>
        </div>
      </motion.div>
    </SwiperSlide>
  ))}
</Swiper>

      </div>
    </section>
  );
};

export default Projects;
