import React, { useState, useEffect, Fragment, useCallback } from "react";
import styles from "./GiveMore.module.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import MovieDetail from "../MovieDetail/MovieDetail";
import { MetroSpinner } from "react-spinners-kit";

const GiveMore = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  async function allMovies() {
    try {
      const request = await fetch(
        "https://api.themoviedb.org/3/trending/all/day?api_key=88170d99a195633ba877280a25be1735"
      );

      if (request.status != 200) throw Error("Something went wrong");

      const respond = await request.json();
      return respond.results;
    } catch (e) {
      console.log(e);
      return;
    }
  }
  const movieItmes = useCallback(async function () {
    const respond = await allMovies();
    setLoading(true);
    setTimeout(() => {
      setMovies((oldMovies) => [...oldMovies, ...respond]);
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    movieItmes();
  }, []);

  return (
    <Fragment>
      <InfiniteScroll
        dataLength={movies.length}
        next={movieItmes}
        hasMore={true}
        loader={
          <>
            <div className={styles.spinnerContainer}>
              <div className="spinner">
                <MetroSpinner size={40} color="green" loading={loading} />
              </div>
            </div>
            <div className={styles.more}>
              <button onClick={movieItmes}>...See More</button>
            </div>
          </>
        }
      >
        <MovieDetail movies={movies} />
      </InfiniteScroll>
    </Fragment>
  );
};

export default GiveMore;
