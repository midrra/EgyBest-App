// import React from "react";
import CenterialContainer from "../CenteralContainer/CenteralContainer";

import "./Program.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { MovieCard } from "./MovieCard";

const Program = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchMovie = async () => {
    // const URL = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`;
    const URL = `https://api.themoviedb.org/3/trending/all/day?api_key=88170d99a195633ba877280a25be1735`;
    const data = await axios.get(URL, {
      headers: {
        Authorization: "Bearer API KEY",
        Accept: "application/json",
      },
    });
    setData((prevData) => [...prevData, ...data.data.results]);
    setLoading(false);
  };
  useEffect(() => {
    fetchMovie();
  }, [page]);

  const handleScroll = () => {
    if (
      document.body.scrollHeight - 300 <
      window.scrollY + window.innerHeight
    ) {
      setLoading(true);
    }
  };

  function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }

  // window.addEventListener("scroll", debounce(handleScroll, 500));

  useEffect(() => {
    if (loading == true) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [loading]);

  return (
    <CenterialContainer>
      <div className="App">
        <header className="App-header">
          Popular movies according to Tmdb
          <div className="movieCardContainer">
            {data.length > 1 &&
              data.map((item) => {
                return (
                  <MovieCard
                    key={item.id}
                    title={item.original_title}
                    description={item.overview}
                    rating={item.vote_average}
                    imageURL={item.poster_path}
                  />
                );
              })}
            {loading && <h1>Loading....</h1>}
          </div>
        </header>
      </div>
    </CenterialContainer>
  );

  // return (
  //   <CenterialContainer>
  //     <div>برامج</div>
  //   </CenterialContainer>
  // );
};

export default Program;