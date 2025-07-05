import React, { useEffect } from "react";
import FetchMovies from "../../components/FetchMovies/FetchMovies";
import { TranGermanMovies } from "../../components/Api/Api";
import { useDispatch } from "react-redux";
import { fetchCategoryData } from "../../ContextData/Page";

function TranslatedGermanMovies() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoryData({ category: "translatedMovies", page: 1 }));
  }, [dispatch]);

  return (
    <div>
      <FetchMovies
        getMovies={TranGermanMovies}
        title="افلام مترجمة"
        category="translatedMovies"
      />
    </div>
  );
}

export default TranslatedGermanMovies;
