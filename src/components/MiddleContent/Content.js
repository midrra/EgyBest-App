import React, { useState } from "react";
import styles from "./Content.module.scss";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Link } from "react-router-dom";
import MovieSketch from "../MovieSketch/MovieSketch";

const Content = ({ movies, name }) => {
  const [move, setMove] = useState(0);

  const sliderWidth = 306;

  const scrollHandler = () => {
    let count = move + sliderWidth;
    setMove(count);
    // if (count <= sliderWidth) setMove(0);
    console.log(move);
  };

  const styledInfo = {
    transform: `translateX(${move}px)`,
    margin: "0px 5px",
  };

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1>{name}</h1>
        <Link to="/AllMovies/2" className={styles.inner}>
          المزيد
          <span>
            <KeyboardDoubleArrowLeftIcon className={styles.arrow} />
          </span>
        </Link>
      </div>
      <div className={styles["info-container"]}>
        <div style={styledInfo}>
          <MovieSketch movies={movies} move={move} />
        </div>
      </div>
      <div className={styles["scroll-arrow"]} onClick={scrollHandler}>
        <KeyboardArrowLeftIcon className={styles.keyboard} />
      </div>
    </div>
  );
};

export default Content;

// return (
//   <div className={styles.container}>
//     <div className={styles.top}>
//       <h1>{type}</h1>
//       <div className={styles.inner} onClick={moreHandler}>
//         المزيد
//         <span>
//           <KeyboardDoubleArrowLeftIcon className={styles.arrow} />
//         </span>
//       </div>
//     </div>
//     <MovieSketch movies={movies} move={move} />
//     <div className={styles["scroll-arrow"]} onClick={scrollHandler}>
//       <KeyboardArrowLeftIcon className={styles.keyboard} />
//     </div>
//   </div>
// );
// };

// export default Content;
