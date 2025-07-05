import React from "react";
import MovieDetail from "../MovieDetail/MovieDetail";
import CenterialContainer from "../CenteralContainer/CenteralContainer";
import { MetroSpinner } from "react-spinners-kit";
import Categories from "../Categories/Categories";
import styles from "./FetchMovies.module.scss";
import Pagination from "../Pagination/Pagination";
import { useSelector } from "react-redux";

function FetchMovies({ title, category }) {
  const { data, totalPages, loading } = useSelector(
    (state) => state.movies[category]
  );

  return (
    <CenterialContainer>
      {loading ? (
        <div className={loading ? styles.spinner : ""}>
          <MetroSpinner size={80} color="green" loading={loading} />
        </div>
      ) : (
        <>
          <h1 className="pb-4">{title}</h1>
          <MovieDetail movies={data.results} />
          <Pagination category={category} totalPages={totalPages} />
          <Categories position="relative" ActiveWidth={true} full={true} />
        </>
      )}
    </CenterialContainer>
  );
}

export default FetchMovies;
