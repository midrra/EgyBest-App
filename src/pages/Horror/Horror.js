import React, { useEffect } from "react";
import FetchMovies from "../../components/FetchMovies/FetchMovies";
import { HorrorMovies } from "../../components/Api/Api";
import { useDispatch } from "react-redux";
import { fetchCategoryData } from "../../ContextData/Page";

function Horror() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryData({ category: "hororr", page: 1 }));
  }, [dispatch]);

  return (
    <div>
      <FetchMovies
        getMovies={HorrorMovies}
        title="افلام رعب"
        category="hororr"
      />
    </div>
  );
}

export default Horror;
