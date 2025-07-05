import React, { useEffect } from "react";
import FetchMovies from "../../components/FetchMovies/FetchMovies";
import { ChineseMovies } from "../../components/Api/Api";
import { useDispatch } from "react-redux";
import { fetchCategoryData } from "../../ContextData/Page";
function Chinese() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryData({ category: "chinese", page: 1 }));
  }, [dispatch]);

  return (
    <div>
      <FetchMovies
        getMovies={ChineseMovies}
        title="افلام صينية"
        category="chinese"
      />
    </div>
  );
}

export default Chinese;
