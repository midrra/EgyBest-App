import React, { useEffect, useState } from "react";
import CenterialContainer from "../../components/CenteralContainer/CenteralContainer";
import { animeApi } from "../../components/Api/Api";
import MovieDetail from "../../components/GiveMore/MovieDetail";
import styles from "./Anime.module.scss";

const Anime = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const anime = async () => {
      const result = await animeApi();
      setMovies(result);
    };
    anime();
  }, []);

  return (
    <CenterialContainer>
      <h1 className={styles.title}>انمي</h1>
      <MovieDetail movies={movies} />
    </CenterialContainer>
  );
};

export default Anime;
