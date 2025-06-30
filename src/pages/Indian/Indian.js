import React from "react";
import FetchMovies from "../../components/FetchMovies/FetchMovies";
import { InidanMovies } from "../../components/Api/Api";

function Indian() {
  return (
    <div>
      <FetchMovies getMovies={InidanMovies} title="افلام هندية" />
    </div>
  );
}

export default Indian;
