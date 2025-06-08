import React, { useEffect, useState } from "react";
import CenterialContainer from "../../components/CenteralContainer/CenteralContainer";
import { animeApi } from "../../components/Api/Api";
import MovieDetail from "../../components/MovieDetail/MovieDetail";
import styles from "./Anime.module.scss";
import axios from "axios";

const API_KEY = "88170d99a195633ba877280a25be1735";

const Anime = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchAnimeSeries = async () => {
      const response = await axios.get(
        "https://api.themoviedb.org/3/discover/tv",
        {
          params: {
            api_key: API_KEY,
            with_genres: 16,
            with_original_language: "ja",
            sort_by: "popularity.desc",
            page: 1,
          },
        }
      );

      setMovies(response.data.results);
    };
    fetchAnimeSeries();
  }, []);

  return (
    <CenterialContainer>
      <h1 className={styles.title}>انمي</h1>
      <MovieDetail movies={movies} />
    </CenterialContainer>
  );
};

export default Anime;
