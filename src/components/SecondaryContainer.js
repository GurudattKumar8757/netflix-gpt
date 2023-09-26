import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  console.log("Popular", popularMovies);
  console.log("Now Playing", nowPlayingMovies);
  return (
    <div className="bg-black">
      <div className="relative z-20 pl-12 -mt-40">
        <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
        <MovieList title={"Trending"} movies={nowPlayingMovies} />
        <MovieList title={"Popular"} movies={popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={nowPlayingMovies} />
        <MovieList title={"Horror"} movies={nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
