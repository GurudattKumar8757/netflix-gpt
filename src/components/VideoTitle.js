import React from "react";
import { PlayIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";

const VideoTitle = ({ movieId }) => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const mainMovie = movies.filter((movie) => movie.id === movieId);
  return (
    <div className="absolute w-full px-24 pt-[25%] aspect-video bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold text-white">{mainMovie[0].title}</h1>
      <p className="w-2/4 py-6 text-lg text-white">{mainMovie[0].overview}</p>
      <div className="flex gap-4">
        <button className="flex items-center gap-1 text-xl text-black bg-white rounded-lg px-7 hover:bg-opacity-80">
          <PlayIcon className="w-5 h-5" />
          Play
        </button>
        <button className="flex items-center w-auto p-3 px-4 text-xl text-white bg-gray-500 bg-opacity-50 rounded-lg">
          <InformationCircleIcon className="w-5 h-5" /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
