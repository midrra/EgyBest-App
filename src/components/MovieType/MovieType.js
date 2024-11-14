import React, { useState, useEffect } from "react";

import CenterialContainer from "../CenteralContainer/CenteralContainer.js";
import { moviesApi } from "../Api/Api";
import MainTypes from "./MainTypes.js";
import { MovieCatData } from "./MovieCatData.js";

const MovieType = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovie, setFilteredMovie] = useState([]);
  const [kind, setKind] = useState({ kind: "" });

  useEffect(() => {
    ////Fetch Trending Api
    const trending = async () => {
      const data = await moviesApi("day");
      setFilteredMovie(data);
      setMovies(data);

      console.log(data);

      if (kind.sort === "year") {
        const filter = movies.filter((f) => {
          const { release_date, first_air_date } = f;
          return (
            release_date?.slice(0, 4) === kind.kind ||
            first_air_date?.slice(0, 4) === kind.kind
          );
        });
        console.log(filter);
        // setMovies(filter);
        setFilteredMovie(filter);
      }

      if (kind.sort === "lang") {
        const filter = movies.filter((f) => f.original_language === kind.kind);
        setFilteredMovie(filter);
      }

      if (kind.sort === "sor") {
        const filter = movies.filter((f) => f.media_type === kind.kind);
        setFilteredMovie(filter);
      }

      if (kind.sort === "coun") {
        const filter = movies.filter((f) => {
          const { origin_country } = f;
          if (!origin_country) return "";
          return origin_country[0] === kind.kind;
        });
        setFilteredMovie(filter);
      }
    };
    trending();
  }, [kind]);

  return (
    <CenterialContainer>
      <MainTypes
        filteredMovie={filteredMovie}
        setKind={setKind}
        MovieCatData={MovieCatData}
      />
    </CenterialContainer>
  );
};

export default MovieType;
