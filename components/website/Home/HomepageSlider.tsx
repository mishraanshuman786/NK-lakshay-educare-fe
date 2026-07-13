"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const HomepageSlider = () => {
  return (
    <div className="w-full  relative">
      
        <button className="prev-btn absolute top-1/2 w-12 h-12 -translate-y-1/2 font-bold left-6 px-4 py-2 z-10 bg-background-secondary text-white rounded-full">
          ← 
        </button>

        <button className="next-btn absolute px-4 py-2 w-12 h-12 top-1/2 font-bold -translate-y-1/2 right-6 z-10 bg-background-secondary text-white rounded-full">
           →
        </button>
     

      {/* slider  */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
      >
         
        <SwiperSlide>
            <img src="/slider/slider2.webp" className="w-full object-cover h-[700px]" alt="slider1" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/slider/slider3.webp" className="w-full object-cover h-[700px]" alt="slider1" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/slider/slider4.webp" className="w-full object-cover h-[700px]" alt="slider1" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="/slider/slider5.webp" className="w-full object-cover h-[700px]" alt="slider1" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomepageSlider;
