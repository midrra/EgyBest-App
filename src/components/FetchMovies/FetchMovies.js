import React, { useEffect, useState } from "react";
import MovieDetail from "../MovieDetail/MovieDetail";
import CenterialContainer from "../CenteralContainer/CenteralContainer";
import { fetchEgyptianMovies } from "../Api/Api";
import { MetroSpinner } from "react-spinners-kit";
import Categories from "../Categories/Categories";
import styles from "./FetchMovies.module.scss";

function FetchMovies({ getMovies, title }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await getMovies();
      setLoading(false);
      console.log(response.data.results);
      setMovies(response.data.results);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <CenterialContainer>
      <div className={loading ? styles.spinner : ""}>
        <MetroSpinner size={80} color="green" loading={loading} />
      </div>
      <h1 className="pb-4">{title}</h1>
      <MovieDetail movies={movies} />
      <Categories position="relative" ActiveWidth={true} full={true} />
    </CenterialContainer>
  );
}

export default FetchMovies;
