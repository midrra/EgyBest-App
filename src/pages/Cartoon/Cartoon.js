import React from "react";
import FetchMovies from "../../components/FetchMovies/FetchMovies";
import { CartoonMovies } from "../../components/Api/Api";

function Cartoon() {
  return (
    <div>
      <FetchMovies getMovies={CartoonMovies} title="افلام كرتون" />
    </div>
  );
}

export default Cartoon;
