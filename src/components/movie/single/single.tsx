import React from "react";
import { Movie } from "@/types/movie";
import { Genre, Genres } from "@/types/genre";
import Link from "next/link";
import Image from "next/image";

const SingleMovie = ({ movie, genres }: { movie: Movie; genres: Genres }) => {
  return (
    <Link
      href={`/movie/${movie.id}`}
      className="relative outline-none group"
      style={{
        aspectRatio: "2/3",
      }}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="object-cover transition-all rounded-md shadow cursor-pointer group-hover:shadow-red-500 group-hover:shadow-lg group-focus:shadow-red-500 group-focus:shadow-lg"
        height={"350"}
        width={"250"}
      />
      <h3 className="mt-2 font-bold text-white text-md md:text-lg">
        {movie.title}
      </h3>
      <span className="text-xs text-gray-400">
        {/* show only one genre */}
        {movie.genre_ids.length > 0 &&
          genres.genres.filter((genre: Genre) => {
            return movie.genre_ids.includes(genre.id);
          })[0].name}
      </span>
    </Link>
  );
};

export default SingleMovie;
