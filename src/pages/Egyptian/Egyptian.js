import React, { useEffect } from "react";
import FetchMovies from "../../components/FetchMovies/FetchMovies";
import { EgyptianMovies } from "../../components/Api/Api";
import { useDispatch } from "react-redux";
import { fetchCategoryData } from "../../ContextData/Page";

function Egyptian() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryData({ category: "egyptian", page: 1 }));
  }, [dispatch]);

  return (
    <div>
      <FetchMovies
        getMovies={EgyptianMovies}
        title="افلام مصرية"
        category="egyptian"
      />
    </div>
  );
}

export default Egyptian;
