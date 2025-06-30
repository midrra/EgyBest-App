import React from "react";
import FetchMovies from "../../components/FetchMovies/FetchMovies";
import { DocumentaryMovies } from "../../components/Api/Api";

function Documentary() {
  return (
    <div>
      <FetchMovies getMovies={DocumentaryMovies} title="افلام وثائقية" />
    </div>
  );
}

export default Documentary;
