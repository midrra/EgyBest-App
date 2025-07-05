import React, { useEffect } from "react";
import FetchMovies from "../../components/FetchMovies/FetchMovies";
import { ArabicMovies } from "../../components/Api/Api";
import { useDispatch } from "react-redux";
import { fetchCategoryData } from "../../ContextData/Page";

function Arabic() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryData({ category: "arabic", page: 1 }));
  }, [dispatch]);

  return (
    <div>
      <FetchMovies
        getMovies={ArabicMovies}
        title="افلام عربية"
        category="arabic"
      />
    </div>
  );
}

export default Arabic;
