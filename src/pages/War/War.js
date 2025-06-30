import React from "react";
import FetchMovies from "../../components/FetchMovies/FetchMovies";
import { WarMovies } from "../../components/Api/Api";

function War() {
  return (
    <div>
      <FetchMovies getMovies={WarMovies} title="افلام حرب" />
    </div>
  );
}

export default War;
