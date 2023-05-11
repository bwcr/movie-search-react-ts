import {
  getMovie,
  getMovieCredits,
  getMovieRecommendations,
  getMovieTrailer,
  getSimilarMovies,
} from "@/services/movie.service";
import { ListMovie, Movie } from "@/types/movie";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/20/solid";
import { ListCredits } from "@/types/credits";
import CastList from "@/components/movie/cast";
import MovieList from "@/components/movie/list/list";
import Video from "@/components/movie/video";
import { getGenres } from "@/services/genre.service";
import { Genres } from "@/types/genre";

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const movie: Movie = await getMovie(id);
  const credits: ListCredits = await getMovieCredits(id);
  const similar: ListMovie = await getSimilarMovies(id);
  const { title, overview, poster_path } = movie;
  const genres: Genres = await getGenres();
  const video = await getMovieTrailer(id);

  return (
    <div className="flex flex-col items-start justify-start w-full min-h-screen gap-6 py-6 md:py-24">
      <div className="flex flex-col items-start justify-start w-full gap-6 p-6 md:flex-row md:justify-center md:items-center md:p-24">
        <div className="blur-sm w-full h-1/2 absolute top-0 left-0 z-[-1]">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          className="rounded-md shadow-xl"
          style={{
            aspectRatio: "2/3",
          }}
          width={250}
          height={350}
        />
        <div className="flex flex-col items-start justify-start p-6 rounded-md bg-gray-900/50 md:justify-center backdrop-blur-md">
          {movie.vote_average && (
            <div className="flex flex-row flex-wrap items-center justify-center gap-1">
              <StarIcon className="w-6" />
              <div className="p-1 font-bold text-white bg-yellow-500 rounded-full text-md">
                {movie.vote_average.toFixed(1)}
              </div>
            </div>
          )}

          {movie.genre_ids && (
            <div className="flex flex-row items-center justify-start mt-4">
              {movie.genre_ids.map((genre_id) => {
                const genre = genres.genres.find(
                  (genre) => genre.id === genre_id
                );
                return (
                  <div
                    key={genre_id}
                    className="px-2 py-1 text-xs font-bold text-white bg-gray-900 rounded-md"
                  >
                    {genre?.name}
                  </div>
                );
              })}
            </div>
          )}
          <h1 className="mt-4 text-2xl font-bold text-white md:text-4xl">
            {title}
          </h1>
          <h2 className="mt-2 font-medium text-white text-md md:text-lg">
            {movie.release_date && movie.release_date.split("-")[0]}
          </h2>
          <p className="max-w-md mt-4 text-sm md:text-md">{overview}</p>
        </div>
      </div>
      {/* Top Cast */}
      <div className="w-full h-full">
        <div className="block mt-4">
          <div className="px-6 mx-auto md:px-24">
            <h2 className="text-xl font-bold md:text-2xl">Top Cast</h2>
          </div>
          <div className="mt-4">
            {/* Cast */}
            <CastList credits={credits} />
          </div>
        </div>
        {/* Similar Movies */}
        {similar.results.length > 0 && (
          <div className="block mt-4">
            <div className="px-6 mx-auto md:px-24">
              <h2 className="text-xl font-bold md:text-2xl">Similar Movies</h2>
            </div>
            <div className="mt-4">
              <MovieList genres={genres} movies={similar} />
            </div>
          </div>
        )}
        {movie.video && (
          <div className="block mt-4">
            <div className="px-6 mx-auto md:px-24">
              <h2 className="text-xl font-bold md:text-2xl">Trailer</h2>
            </div>
            <Video video={video} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
