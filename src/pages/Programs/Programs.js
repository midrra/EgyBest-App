import React, { useEffect } from "react";
import FetchMovies from "../../components/FetchMovies/FetchMovies";
import { ProgramMovies } from "../../components/Api/Api";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryData } from "../../ContextData/Page";

function Programs() {
  const programs = useSelector((state) => state.movies.programs);
  console.log(programs, "from Programs page");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoryData({ category: "programs", page: 1 }));
  }, [dispatch]);

  return (
    <div>
      <FetchMovies
        getMovies={ProgramMovies}
        title="برامج"
        category="programs"
      />
    </div>
  );
}

export default Programs;
