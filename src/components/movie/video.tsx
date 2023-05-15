"use client";
import { getMovieTrailer } from "@/services/movie.service";
import { Trailer, Trailers } from "@/types/video";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

const Videos = ({ videos }: { videos: Trailers }) => {
  return (
    // <Swiper
    //   className="relative"
    //   modules={[Navigation]}
    //   navigation
    //   slidesPerView={1}
    //   spaceBetween={10}
    //   breakpoints={{
    //     640: { slidesPerView: 2 },
    //     768: { slidesPerView: 3 },
    //     1024: { slidesPerView: 4 },
    //     1280: { slidesPerView: 5 },
    //   }}
    // >
    //   {videos.results.map((video) => (
    //     <VideoItem key={video.id} video={video} />
    //   ))}
    // </Swiper>
    // create horizonal scroll for videos
    <div className="flex flex-row gap-4 mx-auto overflow-x-auto">
      {videos.results.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </div>
  );
};

const VideoItem = ({ video }: { video: Trailer }) => {
  return (
    // <SwiperSlide className="relative block">
    <iframe
      src={`https://www.youtube.com/embed/${video.key}`}
      allowFullScreen
      className="relative w-full h-full overflow-hidden rounded-lg shadow-lg shadow-red-500 aspect-video"
    />
    // </SwiperSlide>
  );
};

export default Videos;
