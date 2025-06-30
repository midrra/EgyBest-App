import React from "react";
import { KomedyMovies } from "../../components/Api/Api";
import FetchMovies from "../../components/FetchMovies/FetchMovies";

function Komedy() {
  return (
    <div>
      <FetchMovies getMovies={KomedyMovies} title="افلام-كوميدية" />
    </div>
  );
}

export default Komedy;
