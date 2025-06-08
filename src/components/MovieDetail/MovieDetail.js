import { useEffect } from "react";
import styles from "./MovieDetail.module.scss";
import { useNavigate } from "react-router-dom";

function MovieDetail({ movies, color }) {
  const navigate = useNavigate();

  const cutTitleHandler = (t) => {
    if (t.length > 20) {
      return "..." + t.split("").slice(0, 20).join("");
    }
    return t;
  };

  const detailHandler = (id) => {
    console.log(id);
    navigate(`/movie/${id}`);
  };

  return (
    <div className={styles.container} style={{ backgroundColor: color }}>
      {movies?.map((movie, i) => (
        <div
          className={styles.inner}
          key={i}
          onClick={() => {
            const type = movie.name || movie.title;
            detailHandler(type.split(" ").join("-"));
          }}
        >
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <p>
            {cutTitleHandler(
              movie.title ? movie.original_title : movie.original_name
            )}
          </p>
        </div>
      ))}
    </div>
  );
}

export default MovieDetail;
