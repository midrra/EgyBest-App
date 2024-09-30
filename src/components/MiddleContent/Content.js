import React, { useState, useContext, useEffect } from "react";
import styles from "./Content.module.scss";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Reducer from "../../ContextData/ContextData";
import { useNavigate, Link } from "react-router-dom";
import { Translate } from "@mui/icons-material";
import MovieSketch from "../MovieSketch/MovieSketch";

const Content = ({ movies, name, type, check }) => {
  const [data, setData] = useState("inital");
  const [move, setMove] = useState(0);
  // const [filmes,setFilmes] = useState([]);

  // const contex = useContext(Reducer);
  const navigate = useNavigate();

  const sliderWidth = 306;

  const scrollHandler = () => {
    console.log("scroll in work");
    let count = move + sliderWidth;
    setMove(count);
    // if (count <= sliderWidth) setMove(0);
    console.log(move);
  };
  // setChech(false)
  const moreHandler = () => {
    // navigate(`/${type}`);
    // setCheck(true);
    // console.log(check());
    console.log("clicked");
    // navigate("/AllMovies/2");
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
