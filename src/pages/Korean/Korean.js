import React, { useEffect } from "react";
import FetchMovies from "../../components/FetchMovies/FetchMovies";
import { koreanMovies } from "../../components/Api/Api";
import { useDispatch } from "react-redux";
import { fetchCategoryData } from "../../ContextData/Page";

function KoreanMovies() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryData({ category: "korean", page: 1 }));
  }, [dispatch]);

  return (
    <div>
      <FetchMovies
        getMovies={koreanMovies}
        title="افلام كورية"
        category="korean"
      />
    </div>
  );
}

export default KoreanMovies;
