import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieDetail from "../components/MovieDetail/MovieDetail";
import CenterialContainer from "../components/CenteralContainer/CenteralContainer";
import { fetchEgyptianMovies } from "../components/Api/Api";

const API_KEY = "88170d99a195633ba877280a25be1735";

function EgpyptionMovies() {
  const [movies, setMovies] = useState([]);

  const getData = async () => {
    try {
      const response = await fetchEgyptianMovies();
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
      <h1 className="pb-4">افلام مصرية</h1>
      <MovieDetail movies={movies} />
    </CenterialContainer>
  );
}

export default EgpyptionMovies;
