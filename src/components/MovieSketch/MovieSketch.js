import React from "react";
import styles from "./MovieSketch.module.scss";
import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import StateType from "../StateType/StateType";

const MovieSketch = (props) => {
  const navigate = useNavigate();

  const styledInfo = {
    transform: `translateX(${props.move}px)`,
    width: `${props.width}`,
    height: `${props.height}`,
  };

  const real = (date) => date?.slice(0, 4);
  const vote = (v) => v.toFixed(1);

  const cutTitleHandler = (t) => {
    if (t.length > 20) {
      return "..." + t.split("").slice(0, 15).join("");
    }
    return t;
  };

  const selectColor = (vote) => {
    if (vote >= 8) {
      return { color: "rgb(0 55 255)", type: "BlueRay" };
    }
    if (vote >= 7) {
      return { color: "green", type: "ALMD" };
    }
    if (vote >= 6) {
      return { color: "red", type: "RedArrow" };
    }
    return { color: "orange", type: "OldOne" };
  };

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
            navigate(`/movie/${type.split(" ").join("-")}`);
          }}
        >
          <div className={styles.content}>
            <div className={styles.quality}>
              <StateType type={selectColor(movie?.vote_average)} />
            </div>

            <div className={styles.star}>
              <span>{vote(movie?.vote_average)}</span>
              <StarIcon className={styles.real} />
            </div>
          </div>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <p>
            {cutTitleHandler(
              movie.title ? movie.original_title : movie.original_name
            )}
          </p>
          <p>{real(movie.release_date || movie.first_air_date)}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieSketch;
