import React from "react";
import styles from "./MovieSketch.module.scss";
import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import StateType from "./StateType";

const MovieSketch = (props) => {
  const navigate = useNavigate();

  const styledInfo = {
    transform: `translateX(${props.move}px)`,
    width: `${props.width}`,
    height: `${props.height}`,
  };

  const real = (date) => date.slice(0, 4);
  const vote = (v) => v.toFixed(1);

  return (
    <div
      className={styles["info-container"]}
      style={{ flexWrap: `${props.wrap}` }}
    >
      {props.movies.map((movie, i) => (
        <div
          style={styledInfo}
          key={i}
          className={styles.info}
          onClick={() => {
            const type = movie.name || movie.title;
            navigate(`/movie/${type.split(" ").join("-")}`, {
              // navigate(`/movie/${movie.title.replace(/\s+/g, "-")}`, {
              // replace: true,
            });
          }}
        >
          <div className={styles.content}>
            <div className={styles.quality}>
              <StateType color="black" type={movie.Qkind} />
            </div>

            <div className={styles.star}>
              <span>{vote(movie.vote_average)}</span>
              <StarIcon className={styles.real} />
            </div>
          </div>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <p>{movie.title ? movie.original_title : movie.original_name}</p>
          <p>{real(movie.release_date || movie.first_air_date)}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieSketch;
