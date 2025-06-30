import React from "react";
import FetchMovies from "../../components/FetchMovies/FetchMovies";
import { EgyptianMovies } from "../../components/Api/Api";

function Egyptian() {
  return (
    <div>
      <FetchMovies getMovies={EgyptianMovies} title="افلام مصرية" />
    </div>
  );
}

export default Egyptian;
