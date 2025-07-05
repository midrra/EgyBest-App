import React, { useEffect } from "react";
import FetchMovies from "../../components/FetchMovies/FetchMovies";
import { ActionMovies } from "../../components/Api/Api";
import { useDispatch } from "react-redux";
import { fetchCategoryData } from "../../ContextData/Page";

function Action() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryData({ category: "action", page: 1 }));
  }, [dispatch]);
  return (
    <div>
      <FetchMovies
        getMovies={ActionMovies}
        title="افلام اكشن"
        category="action"
      />
    </div>
  );
}
export default Action;
