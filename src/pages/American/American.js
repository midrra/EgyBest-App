import React from "react";
import FetchMovies from "../../components/FetchMovies/FetchMovies";
import { AmericanMovies } from "../../components/Api/Api";

function American() {
  return (
    <div>
      <FetchMovies getMovies={AmericanMovies} title="افلام امريكية" />
    </div>
  );
}

export default American;
