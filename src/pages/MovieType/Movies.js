import React from "react";
import MainType from "./MainType";
import { MovieCatData } from "./MovieCatData";
import { years, language, sort, country } from "./MovieCatData.js";

function Movies() {
  return (
    <div>
      <MainType
        selectData={MovieCatData}
        title1="احدث الاضافات"
        title2="افضل الافلام"
        title3="افلام قادمة"
        title4="افلام"
        mediaType="movies"
        years={years}
        language={language}
        sort={sort}
        country={country}
      />
    </div>
  );
}

export default Movies;
