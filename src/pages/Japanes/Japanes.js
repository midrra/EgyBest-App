import React, { useEffect } from "react";
import { JapaneseMovies } from "../../components/Api/Api";
import FetchMovies from "../../components/FetchMovies/FetchMovies";
import { useDispatch } from "react-redux";
import { fetchCategoryData } from "../../ContextData/Page";

function JapanesMovies() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryData({ category: "japanese", page: 1 }));
  }, [dispatch]);

  return (
    <div>
      <FetchMovies
        getMovies={JapaneseMovies}
        title="افلام يابانية"
        category="japanese"
      />
    </div>
  );
}

export default JapanesMovies;
