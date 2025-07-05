import React, { useEffect } from "react";
import FetchMovies from "../../components/FetchMovies/FetchMovies";
import { RomanceMovies } from "../../components/Api/Api";
import { useDispatch } from "react-redux";
import { fetchCategoryData } from "../../ContextData/Page";

const Romance = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryData({ category: "romance", page: 1 }));
  }, [dispatch]);

  return (
    <div>
      <FetchMovies
        getMovies={RomanceMovies}
        title="افلام رومانسية"
        category="romance"
      />
    </div>
  );
};

export default Romance;
