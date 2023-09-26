import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const min = Math.ceil(0);
  const max = Math.floor(movies.length - 1);
  const index = Math.floor(Math.random() * (max - min + 1)) + min;

  const mainMovie = movies[index];

  const { id } = mainMovie;

  return (
    <div>
      <VideoTitle movieId={id} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
