import React, { useEffect } from "react";
import FetchMovies from "../../components/FetchMovies/FetchMovies";
import { StageMovies } from "../../components/Api/Api";
import { useDispatch } from "react-redux";
import { fetchCategoryData } from "../../ContextData/Page";

function Stage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryData({ category: "stage", page: 1 }));
  }, [dispatch]);

  return (
    <div>
      <FetchMovies getMovies={StageMovies} title="المسرح" category="stage" />
    </div>
  );
}

export default Stage;
