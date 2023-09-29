import React from "react";
import { POSTER_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="pr-4 w-52">
      <img alt="Movie Poster" src={POSTER_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
