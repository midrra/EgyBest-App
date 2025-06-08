import React, { useState, useEffect } from "react";
import MovieDetail from "../MovieDetail/MovieDetail";
import axios from "axios";

const API_KEY = "88170d99a195633ba877280a25be1735";
const BASE_URL = "https://api.themoviedb.org/3";

const MovieFilter = ({ filters }) => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (filters) => {
    try {
      console.log(filters, "isTV");
      const isTV = filters.type === "tv";
      const params = {
        api_key: API_KEY,
        language: filters.translation,
        sort_by: filters.accuracy,
        page: 1,
      };

      // Strict filtering for original language
      if (filters.language) {
        params.with_original_language = filters.language;
      }

      // Strict year filtering
      if (filters.year) {
        if (isTV) {
          params["first_air_date.gte"] = `${filters.year}-01-01`;
          params["first_air_date.lte"] = `${filters.year}-12-31`;
        } else {
          params.primary_release_year = filters.year;
        }
      }

      // Country filter (only for movies)
      if (!isTV && filters.country) {
        params.region = filters.country;
      }

      const url = isTV
        ? "https://api.themoviedb.org/3/discover/tv"
        : "https://api.themoviedb.org/3/discover/movie";

      const { data } = await axios.get(url, { params });
      console.log(data, "the data response");
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies(filters);
  }, [filters]);

  return <MovieDetail movies={movies} />;
};

export default MovieFilter;
