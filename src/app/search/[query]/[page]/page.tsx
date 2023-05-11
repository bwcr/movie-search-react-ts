"use client";
import { Suspense } from "react";
import Search from "@/components/homepage/search";
import MovieGrid from "@/components/movie/list/grid";
import MovieList from "@/components/movie/list/list";
import { getGenres } from "@/services/genre.service";
import { searchMovies } from "@/services/movie.service";
import { Genres } from "@/types/genre";
import { ListMovie } from "@/types/movie";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/20/solid";
import React from "react";
import { useRouter } from "next/navigation";

const Page = async ({
  params,
}: {
  params: { query: string; page: string };
}) => {
  const router = useRouter();
  const { query, page } = params;
  const results: ListMovie = await searchMovies(query, parseInt(page));
  const genres: Genres = await getGenres();
  return (
    <>
      <div className="px-6 mx-auto md:px-24">
        <h2 className="text-xl font-bold md:text-2xl">Search Results</h2>
      </div>
      <div className="w-full mt-8">
        <MovieGrid genres={genres} movies={results} />
        {/* Prev and Next */}
        <div className="flex justify-between px-6 mt-8 md:px-24">
          <button
            className="px-4 py-2 font-bold text-white transition duration-300 ease-in-out bg-transparent border border-red-500 rounded hover:bg-red-500 hover:text-white focus:bg-red-500 focus:text-white"
            onClick={() => {
              router.push(`/search/${query}/${parseInt(page) - 1}`, undefined, {
                shallow: true,
              });
            }}
          >
            Prev
          </button>
          <span className="px-4 py-2 font-bold text-white bg-red-500 rounded">
            Page {page}
          </span>
          <button
            className="px-4 py-2 font-bold text-white transition duration-300 ease-in-out bg-transparent border border-red-500 rounded hover:bg-red-500 hover:text-white focus:bg-red-500 focus:text-white"
            onClick={() => {
              router.push(`/search/${query}/${parseInt(page) + 1}`, undefined, {
                shallow: true,
              });
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Page;
