"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const HomepageSlider = () => {
  return (
    <div className="relative w-full">
      {/* Previous Button */}
      <button className="prev-btn absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-background-secondary text-white shadow-lg transition hover:scale-110">
        ←
      </button>

      {/* Next Button */}
      <button className="next-btn absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-background-secondary text-white shadow-lg transition hover:scale-110">
        →
      </button>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        slidesPerView={1}
        spaceBetween={0}
        loop
        speed={1200}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {[
          "/slider/slider2.webp",
          "/slider/slider3.webp",
          "/slider/slider4.webp",
          "/slider/slider5.webp",
        ].map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="h-[220px] w-full object-cover sm:h-[350px] md:h-[500px] lg:h-[650px] xl:h-[700px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomepageSlider;