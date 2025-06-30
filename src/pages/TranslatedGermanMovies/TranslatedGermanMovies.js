import React from "react";
import FetchMovies from "../../components/FetchMovies/FetchMovies";
import { TranGermanMovies } from "../../components/Api/Api";

function TranslatedGermanMovies() {
  return (
    <div>
      <FetchMovies getMovies={TranGermanMovies} title="افلام مترجمة" />
    </div>
  );
}

export default TranslatedGermanMovies;
