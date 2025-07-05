import React, { useEffect } from "react";
import FetchMovies from "../../components/FetchMovies/FetchMovies";
import { InidanMovies } from "../../components/Api/Api";
import { useDispatch } from "react-redux";
import { fetchCategoryData } from "../../ContextData/Page";

function Indian() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryData({ category: "indian", page: 1 }));
  }, [dispatch]);
  return (
    <div>
      <FetchMovies
        getMovies={InidanMovies}
        title="افلام هندية"
        category="indian"
      />
    </div>
  );
}

export default Indian;
