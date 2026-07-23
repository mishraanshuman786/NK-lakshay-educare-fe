"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { OurTeamSliderType } from "@/lib/data/website/about";
import "swiper/css";
import { Autoplay } from "swiper/modules";

type OurTeamSliderProps = {
  data: OurTeamSliderType;
};

const OurTeamSlider = ({ data }: OurTeamSliderProps) => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h3 className="text-center text-lg md:text-xl font-medium text-background-secondary mb-2">
        {data.title}
      </h3>

      <h1 className="text-center text-2xl md:text-4xl font-medium">
        {data.subtitle}
      </h1>

      <Swiper
        modules={[Autoplay]}
        loop
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 12,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        className="my-8"
      >
        {data.teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="overflow-hidden rounded-md border border-gray-300 bg-white shadow-sm">
              <img
                src={member.pic}
                alt={member.name}
                className="h-60 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="text-center text-base font-medium">
                  {member.name}
                </h3>

                <h4 className="mt-1 text-center text-sm text-gray-600">
                  {member.role}
                </h4>

                <hr className="my-3 border-gray-200" />

                <h3 className="text-center text-sm text-gray-600">
                  {member.qualification}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurTeamSlider;