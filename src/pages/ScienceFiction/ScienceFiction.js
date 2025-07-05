import React, { useEffect } from "react";
import FetchMovies from "../../components/FetchMovies/FetchMovies";
import { ScienceFictionMovies } from "../../components/Api/Api";
import { useDispatch } from "react-redux";
import { fetchCategoryData } from "../../ContextData/Page";

function ScienceFiction() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryData({ category: "science", page: 1 }));
  }, [dispatch]);

  return (
    <div>
      <FetchMovies
        getMovies={ScienceFictionMovies}
        title="افلام خيال علمي"
        category="science"
      />
    </div>
  );
}

export default ScienceFiction;
