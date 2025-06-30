import React from "react";
import FetchMovies from "../../components/FetchMovies/FetchMovies";
import { ScienceFictionMovies } from "../../components/Api/Api";

function ScienceFiction() {
  return (
    <div>
      <FetchMovies getMovies={ScienceFictionMovies} title="افلام خيال علمي" />
    </div>
  );
}

export default ScienceFiction;
