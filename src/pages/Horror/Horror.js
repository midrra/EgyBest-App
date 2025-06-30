import React from "react";
import FetchMovies from "../../components/FetchMovies/FetchMovies";
import { HorrorMovies } from "../../components/Api/Api";

function Horror() {
  return (
    <div>
      <FetchMovies getMovies={HorrorMovies} title="افلام رعب" />
    </div>
  );
}

export default Horror;
