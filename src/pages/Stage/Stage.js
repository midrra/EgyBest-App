import React from "react";
import FetchMovies from "../../components/FetchMovies/FetchMovies";
import { StageMovies } from "../../components/Api/Api";

function Stage() {
  return (
    <div>
      <FetchMovies getMovies={StageMovies} title="المسرح" />
    </div>
  );
}

export default Stage;
