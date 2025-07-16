import React, { Fragment, useEffect, useState } from "react";
import styles from "./MovieTitle.module.scss";
import SellIcon from "@mui/icons-material/Sell";
import { useParams, useNavigate } from "react-router-dom";
import { movieInfo } from "../../components/Api/Api";
import { MetroSpinner } from "react-spinners-kit";
import CastList from "./CastList";
import Categories from "../../components/Categories/Categories";
import Trailer from "./Trailer";
import CenterialContainer from "../../components/CenteralContainer/CenteralContainer";

import { useAuth } from "../../ContextData/Auth";
// import Alert from "../../utils/Alert";
// import { Alert } from "bootstrap";
const MovieTitle = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [movieId, setmovieId] = useState("");
  const [mediaType, setMediaType] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    async function detail() {
      const movieName = id;
      setLoading(true);
      const result = await movieInfo(movieName);
      setmovieId(result[0].id || result.id);
      setMediaType(result[0].media_type || result.media_type);
      if (result.length === 0) {
        navigate("/404");
      }
      if (
        !result[0].poster_path ||
        !result[0].backdrop_path ||
        !result[0].overview ||
        !result[0].vote_count
      ) {
        navigate("/404");
      }
      setLoading(false);
      setMovie(...result);
    }
    detail();
  }, [id, navigate]);

  return (
    <CenterialContainer>
      <div className={loading ? styles.spinner : ""}>
        <MetroSpinner size={80} color="green" loading={loading} />
      </div>
      <div className={styles.container}>
        <div
          className={`${styles["content-part"]} ${
            !loading ? styles["hide-after"] : ""
          }`}
        >
          <div className={styles.innerContent}>
            <div className={styles.booster}>
              <div className={styles.image}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${
                    movie?.poster_path || movie?.backdrop_path
                  }`}
                />
              </div>
              <button
                // disabled={!user}
                onClick={() => {
                  if (!user) {
                    navigate("/login");
                    // <Alert
                    //   style={{ zIndex: 50000, position: "relative" }}
                    //   variant="danger"
                    //   message="يجب تسجيل الدخول لمشاهدة أو تحميل الفيلم"
                    // />;
                    // <Alert />;
                  } else {
                    navigate("/download");
                  }
                }}
              >
                <span>
                  <SellIcon className={styles.icon} />
                </span>
                مشاهده وتحميل الفيلم
              </button>
            </div>
            <div className={styles.info}>
              <h1>{movie?.name || movie?.original_name || movie?.title}</h1>
              <div className={styles.content}>
                <table>
                  <tbody>
                    <tr>
                      <td>{movie?.first_air_date || movie?.release_date}</td>
                      <td>Air date</td>
                    </tr>
                    <tr>
                      <td>{movie?.original_language}</td>
                      <td>Language</td>
                    </tr>
                    <tr>
                      <td>{movie?.media_type}</td>
                      <td>Type</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className={styles.notes}>
            <p>
              <span>
                <SellIcon />
              </span>
              هذا الفيلم ليس متوفر بجودة عالية حتى الان لانه جديد و مازال يعرض
              في السينما. لا يوجد تاريخ محدد لاصدار نسخة الجودة العالية.
            </p>
          </div>
          <Trailer movieId={movieId} mediaType={mediaType} />
          <div className={styles["movie-rate"]}>
            <h1>تقييم المشاهدين</h1>
            <div className={styles["inner-rate"]}>
              <div className={styles["container-rate"]}>
                <div className={styles.contain}>
                  <div className={styles.circle}>
                    <span>{movie?.vote_count}</span>
                    <div className={styles.inn}></div>
                    <div
                      className={styles.fill}
                      style={{ bottom: movie?.vote_count }}
                    ></div>
                  </div>
                  <p>من المشاهدين اعجبهم هذا الفيلم</p>
                </div>
                <div className={styles.like}>
                  <div className={styles.lfg}>
                    <SellIcon />
                  </div>
                  <div className={styles.lfg}>
                    <SellIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CastList movieId={movieId} />
          <div className={styles.story}>
            <h1>القصة</h1>
            <div className={styles["inner-story"]}>
              {/* <h2>{movie?.name}</h2> */}
              <p>{movie?.overview}</p>
            </div>
          </div>
          <Categories position="relative" full={true} />
        </div>
      </div>
    </CenterialContainer>
  );
};

export default MovieTitle;
