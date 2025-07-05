import React, { useEffect } from "react";
import FetchMovies from "../../components/FetchMovies/FetchMovies";
import { DocumentaryMovies } from "../../components/Api/Api";
import { useDispatch } from "react-redux";
import { fetchCategoryData } from "../../ContextData/Page";

function Documentary() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryData({ category: "documentary", page: 1 }));
  }, [dispatch]);

  return (
    <div>
      <FetchMovies
        getMovies={DocumentaryMovies}
        title="افلام وثائقية"
        category="documentary"
      />
    </div>
  );
}

export default Documentary;
