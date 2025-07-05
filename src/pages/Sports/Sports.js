import React, { useEffect } from "react";
import FetchMovies from "../../components/FetchMovies/FetchMovies";
import { SportMovies } from "../../components/Api/Api";
import { useDispatch } from "react-redux";
import { fetchCategoryData } from "../../ContextData/Page";

function Sports() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoryData({ category: "sports", page: 1 }));
  }, [dispatch]);

  return (
    <div>
      <FetchMovies getMovies={SportMovies} title="رياضة" category="sports" />
    </div>
  );
}

export default Sports;
