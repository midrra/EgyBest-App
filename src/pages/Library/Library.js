import React from "react";
import FetchMovies from "../../components/FetchMovies/FetchMovies";
import { LibraryMovies } from "../../components/Api/Api";

function Library() {
  return (
    <div>
      {" "}
      <FetchMovies getMovies={LibraryMovies} title="المكتبة" />{" "}
    </div>
  );
}

export default Library;
