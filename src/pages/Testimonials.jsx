import React, { useRef } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    client: "Mr.Vikash",
    client_post: "Manager",
    remark: "Sudhanshu developed a beautiful education platform",
    organization: "3i-infotech",
    stars: 5,
  },
  {
    client: "Mr.Vikash",
    client_post: "Manager",
    remark: "Sudhanshu developed a beautiful education platform",
    organization: "3i-infotech",
    stars: 5,
  },
  {
    client: "Mr.Vikash",
    client_post: "Manager",
    remark: "Sudhanshu developed a beautiful education platform",
    organization: "3i-infotech",
    stars: 5,
  },
  {
    client: "Mr.Vikash",
    client_post: "Manager",
    remark: "Sudhanshu developed a beautiful education platform",
    organization: "3i-infotech",
    stars: 5,
  },
];

export default function Testimonials() {
  const swiperRef = useRef(null);

  return (
    <section
      id="testimonials"
      className="relative py-16 px-6 bg-[#f9f9f9] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-orange-300 opacity-20 rounded-full blur-3xl -top-10 left-10"></div>
      <div className="absolute w-[450px] h-[450px] bg-orange-400 opacity-20 rounded-full blur-3xl bottom-0 right-0"></div>

      <div className="flex flex-col text-center justify-center relative z-10">
        <h1 className="text-5xl font-bold mb-12 bg-gradient-to-r from-orange-700 to-orange-500 bg-clip-text text-transparent">
          Testimonials
        </h1>

        <div className="relative w-full max-w-3xl mx-auto">

          {/* Custom Left Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-orange-600 text-white px-3 py-2 shadow-xl rounded-full z-10 hover:bg-orange-700 transition"
            onClick={() => swiperRef.current.slidePrev()}
          >
            ❮
          </motion.button>

          {/* Custom Right Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-orange-600 text-white px-3 py-2 shadow-xl rounded-full z-10 hover:bg-orange-700 transition"
            onClick={() => swiperRef.current.slideNext()}
          >
            ❯
          </motion.button>

          <Swiper
            modules={[Pagination, Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={40}
            pagination={{ clickable: true }}
            navigation={false}
            className="w-full"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="p-8 mx-4 rounded-3xl backdrop-blur-xl bg-white/60 border border-orange-300/30 shadow-xl hover:shadow-orange-200 transition-all"
                >
                  {/* Organization Title */}
                  <h2 className="text-2xl font-bold text-gray-900">
                    {item.organization}
                  </h2>

                  {/* Quote */}
                  <p className="mt-5 text-gray-700 text-lg leading-relaxed italic">
                    “{item.remark}”
                  </p>

                  {/* Client Info */}
                  <div className="mt-6 font-semibold text-gray-900">
                    <span>- {item.client}</span>
                    <div className="text-sm font-medium text-gray-500">
                      ({item.client_post})
                    </div>
                  </div>

                  {/* Star Ratings */}
                  <div className="flex gap-2 justify-center mt-5">
                    {Array.from({ length: 5 }).map((_, i) =>
                      i < item.stars ? (
                        <FaStar key={i} size={22} className="text-orange-600" />
                      ) : (
                        <FaRegStar
                          key={i}
                          size={22}
                          className="text-gray-400"
                        />
                      )
                    )}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
