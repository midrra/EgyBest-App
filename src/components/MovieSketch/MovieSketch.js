import React, { useState, useEffect, useContext } from "react";
import styles from "./MovieSketch.module.scss";
import { Mdata } from "../Api/Mdata";
import { useSearchParams, useNavigate } from "react-router-dom";
import Reducer from "../../ContextData/ContextData";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useSelector, useDispatch } from "react-redux";
import { movieOb } from "../../ContextData/MovieId";
import { reducerId } from "../../ContextData/MoveName";
import { TurnedIn } from "@mui/icons-material";
// import { title } from "../../ContextData/MovieId";

const MovieSketch = (props) => {
  const [quality, setQuality] = useState();

  const [searchParams, setSearchParams] = useSearchParams({
    n: "",
  });

  const get = searchParams.get("n");
  const context = useContext(Reducer);
  const moveContext = useContext(reducerId);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieOb(get));
  }, [searchParams]);

  const styledInfo = {
    transform: `translateX(${props.move}px)`,
    width: `${props.width}`,
    height: `${props.height}`,
  };

  const colors = {
    one: "ornage",
    tow: "blue",
    three: "green",
  };

  // console.log(props.movies[1].Qkind);
  // let q = [];
  // let n;
  // props.movies.map((item) => {
  //   q.push(item.Qkind);
  //   switch (item.Qkind) {
  //     case "BluRay":
  //       console.log((n = "blue"));
  //       return "blue";
  //       break;
  //     case "HDTC":
  //       console.log((n = "red"));
  //       return "red";
  //       break;
  //     case "WEB-DL":
  //       console.log((n = "green"));
  //       return "green";
  //       break;

  //     default:
  //       return "orange";
  //   }
  // if (item.Qkind === "BluRay") {
  //   n = "blue";
  //   console.log(n);
  // }

  // setQuality(q);
  // console.log(item.Qkind));
  // });

  // console.log(q);
  // const qualityColor = (quality) => {
  // switch ("quality") {
  //   case "BlueRay":
  //     return "blue";
  //     break;
  //   case "HDTC":
  //     return "red";
  //     break;
  //   case "WEB-DL":
  //     return "green";
  //     break;

  //   default:
  //     return "orange";
  // }
  // }

  // const man = {title:'ahmed',age:21,sale:100}

  // if (man.title) return man.age
  // else return man.sale;

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
            // navigate(`movie/${movie.title.split(" ").join("-")}`, {
            navigate(`/movie/${movie.title.replace(/\s+/g, "-")}`, {
              replace: true,
            });
            moveContext.moveId(movie.id);
          }}
        >
          <div className={styles.content}>
            <div className={styles.quality}>
              <div style={{ backgroundColor: "green" }} className={styles.tri}>
                {movie.Qkind}
              </div>
              <div
                style={{ backgroundColor: "green" }}
                className={styles.comp}
              ></div>
              <div
                style={{ borderRightColor: "green" }}
                className={styles.kdn}
              ></div>
              <div
                style={{ backgroundColor: "green" }}
                className={styles.ang}
              ></div>
              <div
                style={{ backgroundColor: "green" }}
                className={styles.bot}
              ></div>
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
