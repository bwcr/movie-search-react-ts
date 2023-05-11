import { getMovieTrailer } from "@/services/movie.service";
import { Trailer } from "@/types/video";
import React from "react";

const Video = ({ video }: { video: Trailer }) => {
  return (
    <div className="flex flex-col items-start justify-start w-full min-h-screen gap-6 p-6 md:flex-row md:justify-center md:items-center md:p-24">
      <div className="backdrop w-full  h-1/2 absolute top-0 left-0 z-[-1]">
        <iframe
          src={`https://www.youtube.com/embed/${video.key}`}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
