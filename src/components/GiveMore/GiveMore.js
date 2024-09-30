import React, { useState, useEffect, Fragment, useCallback } from "react";
import styles from "./GiveMore.module.scss";
import CenterialContainer from "../CenteralContainer/CenteralContainer";
import MovieSketch from "../MovieSketch/MovieSketch";
import { Mdata } from "../Api/Mdata";
import { SecondData } from "../Api/SecondData";
import { useLocation, useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { Navigate, Link, redirect } from "react-router-dom";
import More from "../../pages/More";
import {
  PushSpinner,
  TraceSpinner,
  RainbowSpinner,
  RingSpinner,
  SwishSpinner,
  PongSpinner,
  MetroSpinner,
  JellyfishSpinner,
} from "react-spinners-kit";

const GiveMore = () => {
  const [update, setUpdate] = useState([]);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // fetch(
  //   `https://api.themoviedb.org/3/discover/movie?api_key=88170d99a195633ba877280a25be1735`
  // );

  // "https://api.themoviedb.org/3/trending/all/day?api_key=88170d99a195633ba877280a25be1735"
  async function allMovies() {
    try {
      const request = await fetch(
        // "https://api.github.com/repos/facebook/react/issues"
        "https://api.themoviedb.org/3/trending/all/day?api_key=88170d99a195633ba877280a25be1735"
      );

      if (request.status != 200) throw Error("Something went wrong");

      const respond = await request.json();
      return respond.results;
    } catch (e) {
      return e.message;
    }
  }

  const movieItmes = useCallback(
    async function () {
      const respond = await allMovies();
      setLoading(true);
      setTimeout(() => {
        setMovies((oldMovies) => [...oldMovies, ...respond]);
        setLoading(false);
      }, 2000);
    },
    [movies]
  );

  const cutTitleHandler = (t) => {
    if (t.length > 30) {
      return "..." + t.split("").slice(0, 30).join("");
    }
    return t;
  };

  const detailHandler = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <Fragment>
      <InfiniteScroll
        dataLength={movies.length}
        next={movieItmes}
        hasMore={true}
        loader={
          <div className={styles.more}>
            <button>...See More</button>
          </div>
        }
      >
        <div className={styles.container}>
          {movies?.map((movie) => (
            <div
              className={styles.inner}
              key={movie.id}
              onClick={() => detailHandler(movie.id)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
              <p>
                {cutTitleHandler(
                  movie.title ? movie.original_title : movie.original_name
                )}
              </p>
            </div>
          ))}
        </div>
        <div className={styles.spinnerContainer}>
          <div className="spinne">
            <MetroSpinner size={40} color="green" loading={loading} />
          </div>
        </div>
      </InfiniteScroll>
    </Fragment>
  );
};

export default GiveMore;
