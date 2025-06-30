import React from "react";
import FetchMovies from "../../components/FetchMovies/FetchMovies";
import { ArabicMovies } from "../../components/Api/Api";

function Arabic() {
  return (
    <div>
      <FetchMovies getMovies={ArabicMovies} title="افلام عربية" />
    </div>
  );
}

export default Arabic;
