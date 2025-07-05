import React, { useEffect } from "react";
import { KomedyMovies } from "../../components/Api/Api";
import FetchMovies from "../../components/FetchMovies/FetchMovies";
import { useDispatch } from "react-redux";
import { fetchCategoryData } from "../../ContextData/Page";

function Komedy() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryData({ category: "Komedy", page: 1 }));
  }, [dispatch]);
  return (
    <div>
      <FetchMovies
        getMovies={KomedyMovies}
        title="افلام-كوميدية"
        category="Komedy"
      />
    </div>
  );
}

export default Komedy;
