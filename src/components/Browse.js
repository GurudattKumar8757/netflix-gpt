import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/*

        MainContainer
          - Video Background
          - Video Title
        
        SecondaryContainer
          - Movie List * n
            - Card * n  

        */}
      Browse
    </div>
  );
};

export default Browse;
