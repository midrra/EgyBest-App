import React from "react";
import FetchMovies from "../../components/FetchMovies/FetchMovies";
import { ChineseMovies } from "../../components/Api/Api";

function Chinese() {
  return (
    <div>
      <FetchMovies getMovies={ChineseMovies} title="افلام صينية" />
    </div>
  );
}

export default Chinese;
