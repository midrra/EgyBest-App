import React, { useEffect } from "react";
import FetchMovies from "../../components/FetchMovies/FetchMovies";
import { Crime } from "../../components/Api/Api";
import { useDispatch } from "react-redux";
import { fetchCategoryData } from "../../ContextData/Page";

function Crimes() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoryData({ category: "crime", page: 1 }));
  }, [dispatch]);

  console.log("thsi crime is working fine");
  return (
    <div>
      <FetchMovies getMovies={Crime} title="افلام جريمة" category="crime" />
    </div>
  );
}

export default Crimes;
