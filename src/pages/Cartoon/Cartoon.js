import React, { useEffect } from "react";
import FetchMovies from "../../components/FetchMovies/FetchMovies";
import { CartoonMovies } from "../../components/Api/Api";
import { useDispatch } from "react-redux";
import { fetchCategoryData } from "../../ContextData/Page";

function Cartoon() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryData({ category: "cartoon", page: 1 }));
  }, [dispatch]);

  return (
    <div>
      <FetchMovies
        getMovies={CartoonMovies}
        title="افلام كرتون"
        category="cartoon"
      />
    </div>
  );
}

export default Cartoon;
