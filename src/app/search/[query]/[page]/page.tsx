"use client";
import MovieGrid from "@/components/movie/list/grid";
import { getGenres } from "@/services/genre.service";
import { searchMovies } from "@/services/movie.service";
import { Genres } from "@/types/genre";
import { ListMovie } from "@/types/movie";
import React from "react";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { getRegions } from "@/services/region.service";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import dynamic from "next/dynamic";
import { ListRegion } from "@/types/regions";
import Filters from "@/components/search/filter";
import { useQuery } from "@tanstack/react-query";

const Page = async ({
  params,
}: {
  params: { query: string; page: string };
}) => {
  const search = useSearchParams();
  const filter = {
    include_adult: search.get("include_adult") === "true",
    year: search.get("year") || "",
    region: search.get("region") || "",
    primary_release_year: search.get("primary_release_year") || "",
  };

  const genres: Genres = await getGenres();

  const { query, page } = params;
  const results: ListMovie = await searchMovies(query, parseInt(page), filter);

  return (
    <>
      <div className="px-6 mx-auto md:px-24">
        <h2 className="text-xl font-bold md:text-2xl">Search Results</h2>
      </div>
      <div className="flex justify-between px-6 mt-8 md:px-24">
        <Filters />
      </div>
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
    </>
  );
};

export default Page;
