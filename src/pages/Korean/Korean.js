import React from "react";
import FetchMovies from "../../components/FetchMovies/FetchMovies";
import { koreanMovies } from "../../components/Api/Api";

function KoreanMovies() {
  return (
    <div>
      <FetchMovies getMovies={koreanMovies} title="افلام كورية" />
    </div>
  );
}

export default KoreanMovies;
