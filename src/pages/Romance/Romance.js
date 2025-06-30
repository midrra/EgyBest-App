import React from "react";
import FetchMovies from "../../components/FetchMovies/FetchMovies";
import { RomanceMovies } from "../../components/Api/Api";

const Romance = () => {
  return (
    <div>
      <FetchMovies getMovies={RomanceMovies} title="افلام رومانسية" />
    </div>
  );
};

export default Romance;
