import React from "react";
import { JapaneseMovies } from "../../components/Api/Api";
import FetchMovies from "../../components/FetchMovies/FetchMovies";

function JapanesMovies() {
  return (
    <div>
      <FetchMovies getMovies={JapaneseMovies} title="افلام يابانية" />
    </div>
  );
}

export default JapanesMovies;
