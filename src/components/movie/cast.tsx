/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Image from "next/image";
import { ListCredits } from "@/types/credits";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

const CastList = ({ credits }: { credits: ListCredits }) => {
  const castList = credits.cast.slice(0, 12);

  return (
    <Swiper
      slidesPerView={5.5 - 2}
      spaceBetween={10}
      slidesOffsetBefore={24}
      breakpoints={{
        640: {
          slidesPerView: 3.5 - 2,
        },
        768: {
          slidesPerView: 7.5 - 2,
          slidesOffsetBefore: 96,
        },
        1024: {
          slidesPerView: 11.5 - 2,
          slidesOffsetBefore: 96,
        },
        1280: {
          slidesPerView: 13.5 - 2,
          slidesOffsetBefore: 96,
        },
      }}
      modules={[Navigation]}
      navigation
    >
      {castList.map((cast) => (
        <SwiperSlide key={cast.id} className="relative">
          <div className="flex flex-col items-center justify-center">
            <div className="relative">
              <img
                src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                alt={cast.name}
                className="object-cover w-20 h-20 rounded-full"
              />
            </div>
            <span className="mt-2 text-sm font-bold text-center text-white">
              {cast.name}
            </span>
          </div>
        </SwiperSlide>
      ))}
      <SwiperSlide className="relative">
        <span className="flex items-center justify-center w-20 h-20 p-6 text-sm font-bold text-center text-white bg-gray-800 bg-opacity-50 rounded-full">
          +{credits.cast.length - 12} more
        </span>
      </SwiperSlide>
    </Swiper>
  );
};

export default CastList;
