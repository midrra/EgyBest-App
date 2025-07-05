import React, { useEffect } from "react";
import FetchMovies from "../../components/FetchMovies/FetchMovies";
import { WarMovies } from "../../components/Api/Api";
import { useDispatch } from "react-redux";
import { fetchCategoryData } from "../../ContextData/Page";

function War() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryData({ category: "war", page: 1 }));
  }, [dispatch]);

  return (
    <div>
      <FetchMovies getMovies={WarMovies} title="افلام حرب" category="war" />
    </div>
  );
}

export default War;
