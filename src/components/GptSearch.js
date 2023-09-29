import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BACKGROUND_IMAGE } from "../utils/constant";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="object-cover h-screen md:h-full"
          src={BACKGROUND_IMAGE}
          alt="background"
        />
      </div>
      <div>
        {/* GPT Search Bar */}
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
