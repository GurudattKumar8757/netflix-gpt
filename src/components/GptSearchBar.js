import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex items-center justify-center w-full mx-auto">
      <form className="grid w-1/2 grid-cols-12 bg-black rounded-md">
        <input
          type="text"
          className="col-span-9 p-2 m-4 rounded-md"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="flex items-center justify-center col-span-3 gap-1 px-4 py-2 m-4 text-white bg-red-700 rounded-lg">
          <MagnifyingGlassIcon className="w-5 h-5" />
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
