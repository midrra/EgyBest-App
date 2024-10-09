import { useEffect } from "react";
import styles from "./MovieDetail.module.scss";
import { useNavigate } from "react-router-dom";

function MovieDetail({ movies }) {
  // const navigate = useNavigate();

  const cutTitleHandler = (t) => {
    if (t.length > 20) {
      return "..." + t.split("").slice(0, 20).join("");
    }
    // console.log(t);
    return t;
  };

  const detailHandler = (id) => {
    // navigate(`/movie/${id}`);
  };

  return (
    <div className={styles.container}>
      {movies?.map((movie, i) => (
        <div
          className={styles.inner}
          key={i}
          onClick={() => detailHandler(movie.id)}
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
