"use server";
import MovieList from "@/components/movie/list/list";
import { getGenres } from "@/services/genre.service";
import {
  getMovieLatest,
  getMovieNowPlaying,
  getMoviePopular,
  getMovieTopRated,
  getMovieUpcoming,
} from "@/services/movie.service";
import { Genres } from "@/types/genre";
import Search from "@/components/homepage/search";

export default async function Home() {
  const popular = getMoviePopular();
  const latest = getMovieLatest();
  const nowPlaying = getMovieNowPlaying();
  const topRated = getMovieTopRated();
  const upcoming = getMovieUpcoming();
  const genres: Genres = await getGenres();

  const movies = await Promise.all([
    popular,
    latest,
    nowPlaying,
    topRated,
    upcoming,
  ]);
  return (
    <main className="min-h-screen">
      {/* Create a big search bar */}
      <Search />
      {/* Create a list of movies */}
      <section id="popular" className="pt-6">
        <div className="px-6 mx-auto md:px-24">
          <h2 className="text-xl font-bold md:text-2xl">Popular Movies</h2>
        </div>
        <div className="w-full mt-8">
          <MovieList genres={genres} movies={movies[0]} />
        </div>
      </section>
      <section id="now-playing" className="pt-6">
        <div className="px-6 mx-auto md:px-24">
          <h2 className="text-xl font-bold md:text-2xl">Now Playing Movies</h2>
        </div>
        <div className="w-full mt-8">
          <MovieList genres={genres} movies={movies[2]} />
        </div>
      </section>
      <section id="top-rated" className="pt-6">
        <div className="px-6 mx-auto md:px-24">
          <h2 className="text-xl font-bold md:text-2xl">Top Rated Movies</h2>
        </div>
        <div className="w-full mt-8">
          <MovieList genres={genres} movies={movies[3]} />
        </div>
      </section>
      <section id="upcoming" className="pt-6">
        <div className="px-6 mx-auto md:px-24">
          <h2 className="text-xl font-bold md:text-2xl">Upcoming Movies</h2>
        </div>
        <div className="w-full mt-8">
          <MovieList genres={genres} movies={movies[4]} />
        </div>
      </section>
    </main>
  );
}
