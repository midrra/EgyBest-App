import React from "react";
import FetchMovies from "../../components/FetchMovies/FetchMovies";
import { SportMovies } from "../../components/Api/Api";

function Sports() {
  return (
    <div>
      <FetchMovies getMovies={SportMovies} title="رياضة" />
    </div>
  );
}

export default Sports;
