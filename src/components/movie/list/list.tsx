"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { ListMovie, Movie } from "@/types/movie";
import Image from "next/legacy/image";
import Link from "next/link";
import "../styles.css";
import { Genre, Genres } from "@/types/genre";
import SingleMovie from "../single/single";

const MovieList = ({
  movies,
  genres,
}: {
  movies: ListMovie;
  genres: Genres;
}) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={10}
      slidesOffsetBefore={24}
      breakpoints={{
        640: {
          slidesPerView: 2.5,
        },
        768: {
          slidesPerView: 3.5,
          slidesOffsetBefore: 96,
        },
        1024: {
          slidesPerView: 4.5,
          slidesOffsetBefore: 96,
        },
        1280: {
          slidesPerView: 5.5,
          slidesOffsetBefore: 96,
        },
      }}
      modules={[Navigation]}
      navigation
      pagination={{ clickable: true }}
    >
      {movies.results.map((movie: Movie) => (
        <SwiperSlide
          key={movie.id}
          className="transition-all duration-300 transform group w-52"
        >
          <SingleMovie genres={genres} movie={movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MovieList;
