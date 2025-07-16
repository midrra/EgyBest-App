import React from "react";
import MainType from "../MovieType/MainType";
import { MovieCatData, years, language, sort, country } from "./MoviesCatData";

function Series({}) {
  return (
    <div>
      <MainType
        selectData={MovieCatData}
        title1="يعرض الان"
        title2="افضل المسلسلات"
        title3="يعرض اليوم"
        title4="الاكثر مشاهدة"
        mediaType="series"
        years={years}
        language={language}
        sort={sort}
        country={country}
      />
    </div>
  );
}

export default Series;
