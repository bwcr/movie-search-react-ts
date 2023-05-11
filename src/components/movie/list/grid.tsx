import React from "react";
import { ListMovie, Movie } from "@/types/movie";
import { Genre, Genres } from "@/types/genre";
import SingleMovie from "../single/single";

const MovieGrid = ({
  movies,
  genres,
}: {
  movies: ListMovie;
  genres: Genres;
}) => {
  return (
    <div className="grid grid-cols-2 gap-4 px-6 mx-auto md:px-24 lg:grid-cols-3 xl:grid-cols-4">
      {movies.results.map((movie: Movie) => {
        return <SingleMovie key={movie.id} genres={genres} movie={movie} />;
      })}
    </div>
  );
};

export default MovieGrid;
