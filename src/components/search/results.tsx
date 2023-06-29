import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import React from "react";
import MovieGrid from "../movie/list/grid";
import Link from "next/link";
import { Genres } from "@/types/genre";
import { ListMovie } from "@/types/movie";
import { getGenres } from "@/services/genre.service";
import { searchMovies } from "@/services/movie.service";
export const Results = async ({
  params,
  filter,
}: {
  params: { query: string; page: string };
  filter: {
    include_adult: boolean;
    year: string;
    region: string;
    primary_release_year: string;
  };
}) => {
  const genres: Genres = await getGenres();

  const { query, page } = params;
  const results: ListMovie = await searchMovies(query, parseInt(page), filter);
  return (
    <div className="w-full mt-8">
      {!results.results.length ? (
        <div className="flex flex-col items-center justify-center w-full h-96">
          <MagnifyingGlassIcon className="w-12 h-12 text-gray-400" />
          <p className="mt-4 text-lg font-bold text-gray-400">
            No movies found
          </p>
        </div>
      ) : (
        <>
          <MovieGrid genres={genres} movies={results} />
          <div className="flex justify-between px-6 mt-8 md:px-24">
            <Link
              href={`/search/${query}/${parseInt(page) - 1}?include_adult=${
                filter.include_adult
              }&year=${filter.year}&region=${
                filter.region
              }&primary_release_year=${filter.primary_release_year}`}
              className="px-4 py-2 font-bold text-white transition duration-300 ease-in-out bg-transparent border border-red-500 rounded hover:bg-red-500 hover:text-white focus:bg-red-500 focus:text-white"
            >
              Prev
            </Link>
            <span className="px-4 py-2 font-bold text-white bg-red-500 rounded">
              Page {page}
            </span>
            <Link
              href={`/search/${query}/${parseInt(page) + 1}?include_adult=${
                filter.include_adult
              }&year=${filter.year}&region=${
                filter.region
              }&primary_release_year=${filter.primary_release_year}`}
              className="px-4 py-2 font-bold text-white transition duration-300 ease-in-out bg-transparent border border-red-500 rounded hover:bg-red-500 hover:text-white focus:bg-red-500 focus:text-white"
            >
              Next
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
