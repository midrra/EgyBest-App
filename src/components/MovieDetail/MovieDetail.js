import { useEffect, Fragment } from "react";
import styles from "./MovieDetail.module.scss";
import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import StateType from "../StateType/StateType";

function MovieDetail({ movies, color }) {
  const navigate = useNavigate();

  const vote = (v) => v.toFixed(1);
  const real = (date) => date?.slice(0, 4);

  const cutTitleHandler = (t) => {
    if (t.length > 20) {
      return "..." + t.split("").slice(0, 20).join("");
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

  const detailHandler = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <Fragment>
      <div className={styles.container} style={{ backgroundColor: color }}>
        {movies?.map((movie, i) => (
          <div
            className={styles.inner}
            key={i}
            onClick={() => {
              const type = movie.name || movie.title;
              detailHandler(type?.split(" ").join("-"));
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
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
            />
            <div>
              {cutTitleHandler(
                movie.title ? movie?.original_title : movie?.original_name
              )}
              <p>{real(movie?.release_date || movie?.first_air_date)}</p>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default MovieDetail;
