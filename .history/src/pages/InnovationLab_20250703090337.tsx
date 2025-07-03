import React from "react";
import { ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import NavBar from "../components/NavBar";

const InnovationLab: React.FC = () => {
  return (
    <main className="pt-20">
      <NavBar />

      {/* Hero Section with Carousel */}
     <section className="bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 py-12">
  <div className="max-w-full mx-auto px-4">
    <h1 className="text-3xl sm:text-4xl font-bold text-center text-primary-800 mb-6">
      Oxford Innovation Lab
    </h1>
    <p className="text-center text-sage-700 mb-8 max-w-2xl mx-auto">
      Where creativity meets technology—fostering innovation, collaboration, and transformative learning.
    </p>

    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
      spaceBetween={20}
      slidesPerView={1}
      className="rounded-xl overflow-hidden shadow-lg"
    >
      {[
        "/files/laptop.jpg",
        "/files/robot.avif",
        "/files/team.jpg",
        "/files/draw.jpg",
      ].map((src, idx) => (
        <SwiperSlide key={idx}>
          <img
            src={src}
            alt={`Innovation Lab Slide ${idx + 1}`}
            className="w-full h-96 object-cover sm:h-[30rem]"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>

    </main>
  );
};

export default InnovationLab;
