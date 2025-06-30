import React from "react";
import FetchMovies from "../../components/FetchMovies/FetchMovies";
import { ActionMovies } from "../../components/Api/Api";

function Action() {
  return (
    <div>
      <FetchMovies getMovies={ActionMovies} title="افلام اكشن" />
    </div>
  );
}
export default Action;
