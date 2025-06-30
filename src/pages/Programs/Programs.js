import React from "react";
import FetchMovies from "../../components/FetchMovies/FetchMovies";
import { ProgramMovies } from "../../components/Api/Api";

function Programs() {
  return (
    <div>
      <FetchMovies getMovies={ProgramMovies} title="برامج" />
    </div>
  );
}

export default Programs;
