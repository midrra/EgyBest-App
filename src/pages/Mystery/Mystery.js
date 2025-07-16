import React, { useEffect } from "react";
import FetchMovies from "../../components/FetchMovies/FetchMovies";
import { MysteryMovies } from "../../components/Api/Api";
import { useDispatch } from "react-redux";
import { fetchCategoryData } from "../../ContextData/Page";

const Mystery = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryData({ category: "mystery", page: 2 }));
  }, [dispatch]);

  return (
    <div>
      <FetchMovies
        getMovies={MysteryMovies}
        title="افلام غموض"
        category="mystery"
      />
    </div>
  );
};

export default Mystery;
