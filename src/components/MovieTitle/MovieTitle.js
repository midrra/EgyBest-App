import React, { Fragment, useEffect, useState } from "react";
import styles from "./MovieTitle.module.scss";
import SellIcon from "@mui/icons-material/Sell";
import { useParams, useNavigate } from "react-router-dom";
import { movieInfo } from "../Api/Api";
import { MetroSpinner } from "react-spinners-kit";

const MovieTitle = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function detail() {
      const movieName = id;
      const result = await movieInfo(movieName);
      if (result.length === 0) {
        navigate("/404");
      }
      console.log(result, "from movie title");
      setMovie(...result);
    }
    detail();
  }, []);

  return (
    <Fragment>
      <div className="spinner">
        <MetroSpinner size={40} color="green" loading={loading} />
      </div>
      <div className={styles.container}>
        <div className={styles["content-part"]}>
          <div className={styles.innerContent}>
            <div className={styles.booster}>
              <div className={styles.image}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${
                    movie?.poster_path || movie?.backdrop_path
                  }`}
                />
              </div>
              <button>
                <span>
                  <SellIcon className={styles.icon} />
                </span>
                مشاهده وتحميل الفيلم
              </button>
            </div>
            <div className={styles.info}>
              <h1>
                {/* {res?.title || res?.original_title} {res?.release_date} */}
              </h1>
              <div className={styles.content}>
                <table>
                  <tr>
                    <th>Company</th>
                    <th>Contact</th>
                  </tr>
                  <tr>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                  </tr>
                </table>
                {/* <div className={styles.type}>
                  <p>اللغه.البل</p>
                  <p>الجوده</p>
                </div>
                <div className={styles.type}>
                  <p>اللغه.البل</p>
                  <p>الجوده</p>
                </div>
                <div className={styles.type}>
                  <p>اللغه.البل</p>
                  <p>الجوده</p>
                </div> */}
                {/* <div className={styles.type}>
                  <ul>
                    <li>اللغه.البلد</li>
                    <li>التصنيف</li>
                    <li>النوع</li>
                    <li>التقييم</li>
                    {/* <li>المده</li>
                    <li>الجوده</li>
                    <li>الترجمه</li> */}
                {/* </ul>
                </div> */}
                {/* <div className={styles.cond}>
                  <ul>
                    <li>
                      {movie?.original_language} . {movie?.origin_country}
                    </li>
                  </ul>
                </div> */}
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
          <div className={styles.story}>
            <h1>القصة</h1>
            <div className={styles["inner-story"]}>
              <h2>{movie?.title}</h2>
              <p>{movie?.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MovieTitle;

//   <div className={styles.container}>
// <div className={styles["content-part"]}>
//   <div className={styles.innerContent}>
//     <div className={styles.booster}>
//       <div className={styles.image}>
//         <img src="photes/woman.jpg" />
//       </div>
//       <button>
//         <span>
//           <SellIcon className={styles.icon} />
//         </span>
//         مشاهده وتحميل الفيلم
//       </button>
//     </div>
//     <div className={styles.info}>
//       <h1>Black Adam (2022)</h1>
//       <div className={styles.content}>
//         <div className={styles.type}>
//           <ul>
//             <li>اللغه.البلد</li>
//             <li>التصنيف</li>
//             <li>النوع</li>
//             <li>التقييم</li>
//             <li>المده</li>
//             <li>الجوده</li>
//             <li>الترجمه</li>
//           </ul>
//         </div>
//         <div className={styles.cond}>
//           <ul>
//             <li>الانجليزيه. الولايات المتحده الامريكيه</li>
//             <li>PG-13. يجب ارشاد الاباء , لا يناسب الاطفال اقل من 13</li>
//             <li>اكشن .مغامره.خبال</li>
//             <li>7.1 من 10 . 68,929 صوت</li>
//             <li>01:57:36</li>
//             <li>720 . HDTS . منذ 3 ايام</li>
//             <li>
//               مترجم . شكرا <span>عمر الشققي & اسلام الجيزاوي</span>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className={styles.notes}>
//     <p>
//       <span>
//         <SellIcon />
//       </span>
//       هذا الفيلم ليس متوفر بجودة عالية حتى الان لانه جديد و مازال يعرض في
//       السينما. لا يوجد تاريخ محدد لاصدار نسخة الجودة العالية.
//     </p>
//   </div>
//   <div className={styles["movie-rate"]}>
//     <h1>تقييم المشاهدين</h1>
//     <div className={styles["inner-rate"]}>
//       <div className={styles["container-rate"]}>
//         <div className={styles.contain}>
//           <div className={styles.parsent}>
//             <span>85%</span>
//           </div>
//           <p>من المشاهدين اعجبهم هذا الفيلم</p>
//         </div>
//         <div className={styles.like}>
//           <div className={styles.lfg}>
//             <SellIcon />
//           </div>
//           <div className={styles.lfg}>
//             <SellIcon />
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className={styles.story}>
//     <h1>القصة</h1>
//     <div className={styles["inner-story"]}>
//       <h2>بلاك آدم • بلاك آدم</h2>
//       <p>
//         يتناول العمل قصة شخصية من شخصيات عالم (Shazam)، وهي بلاك آدم، وهو
//         الرجل الذي وقف محايدًا ما بين كونه بطلًا أو شريرًا، كما أنه يتمتع
//         بقدرات سحرية غير عادية.
//       </p>
//     </div>
//   </div>
// </div>
// </div>
