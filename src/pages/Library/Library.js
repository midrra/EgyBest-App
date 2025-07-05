import React, { useEffect } from "react";
import FetchMovies from "../../components/FetchMovies/FetchMovies";
import { LibraryMovies } from "../../components/Api/Api";
import { useDispatch } from "react-redux";
import { fetchCategoryData } from "../../ContextData/Page";

function Library() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryData({ category: "library", page: 1 }));
  }, [dispatch]);

  return (
    <div>
      <FetchMovies
        getMovies={LibraryMovies}
        title="المكتبة"
        category="library"
      />
    </div>
  );
}

export default Library;
