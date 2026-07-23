"use client";

import { Button } from "@/components/ui/button";
import { TutorsSectionType } from "@/lib/data/website/home";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

type TutorsSectionProps = {
  data: TutorsSectionType;
};

const ExpertTutorsSection = ({ data }: TutorsSectionProps) => {
  return (
    <div className="bg-background-lightblue">
      <div className="max-w-6xl mx-auto py-12 md:py-16 lg:py-20 px-4">
        <h4 className="text-background-secondary text-center text-lg md:text-2xl">
          {data.title}
        </h4>

        <h2 className="text-black text-center text-2xl md:text-4xl">
          {data.subtitle}
        </h2>

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
  className="my-8 px-2 md:px-0"
>
          {data.experts.map((expert, index) => (
            <SwiperSlide key={index}>
             <div className="group overflow-hidden rounded-lg border border-gray-300 bg-white transition-colors hover:bg-background-secondary shadow-sm">
  <img
    src={expert.image}
    alt={expert.name}
    className="w-full h-56 sm:h-60 object-cover"
  />

  <div className="p-4">
    <h2 className="text-center text-lg font-semibold text-black group-hover:text-white">
      {expert.name}
    </h2>

    <h4 className="mt-1 text-center text-sm text-gray-500 group-hover:text-white">
      {expert.qualification}
    </h4>

    <div className="mt-5 flex items-center justify-between text-sm">
      <span className="text-gray-500 group-hover:text-white">
        {expert.location}
      </span>

      <Link
        href="#"
        className="font-medium text-background-secondary group-hover:text-white"
      >
        View Profile
      </Link>
    </div>
  </div>
</div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Button
          size="lg"
          className="w-full rounded-full bg-background-secondary py-6 text-md text-white hover:border-background-secondary hover:bg-white hover:text-background-secondary"
        >
          VIEW MORE
        </Button>
      </div>
    </div>
  );
};

export default ExpertTutorsSection;