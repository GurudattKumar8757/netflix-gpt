import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  //   console.log(title, movies[0]);
  return (
    <div className="px-6 ">
      <h1 className="py-4 text-xl font-medium text-white">{title}</h1>
      <div className="flex overflow-x-scroll scroll-none">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
