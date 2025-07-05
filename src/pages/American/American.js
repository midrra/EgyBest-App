import React, { useEffect } from "react";
import FetchMovies from "../../components/FetchMovies/FetchMovies";
import { AmericanMovies } from "../../components/Api/Api";
import { useDispatch } from "react-redux";
import { fetchCategoryData } from "../../ContextData/Page";

function American() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryData({ category: "american", page: 1 }));
  }, [dispatch]);

  return (
    <div>
      <FetchMovies
        getMovies={AmericanMovies}
        title="افلام امريكية"
        category="american"
      />
    </div>
  );
}

export default American;
