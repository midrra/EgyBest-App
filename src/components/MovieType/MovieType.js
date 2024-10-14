import React, { useState, useEffect } from "react";
import CenterialContainer from "../CenteralContainer/CenteralContainer";
import styles from "./MovieType.module.scss";
import { MovieCatData } from "./MovieCatData";
import Section from "./Section";
import Select from "./Select";
import MovieDetail from "../GiveMore/MovieDetail";
import { trendingApi } from "../Api/Api";
import { allTrend } from "./Allmovies";
import { years } from "./MovieCatData";
import { language } from "./MovieCatData";
import { sort } from "./MovieCatData";
import { quality } from "./MovieCatData";
import { translate } from "./MovieCatData";
import { country } from "./MovieCatData";

const MovieType = () => {
  const [active, setActive] = useState(1);
  const [hover, setHover] = useState(1);
  const [kind, setKind] = useState({ kind: "" });
  const [filtleredMovie, setFilteredMovie] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    ////Fetch Trending Api
    const trending = async () => {
      const result = await trendingApi("day");
      // setFilteredMovie(result);

      const data = await allTrend();
      setFilteredMovie(data);
      setMovies(data);

      console.log(data);

      if (kind.sort === "year") {
        const filter = movies.filter((f) => {
          const { release_date, first_air_date } = f;
          return (
            release_date?.slice(0, 4) === kind.kind ||
            first_air_date?.slice(0, 4) === kind.kind
          );
        });
        console.log(filter);
        // setMovies(filter);
        setFilteredMovie(filter);
      }

      if (kind.sort === "lang") {
        const filter = movies.filter((f) => f.original_language === kind.kind);
        setFilteredMovie(filter);
      }

      if (kind.sort === "sor") {
        const filter = movies.filter((f) => f.media_type === kind.kind);
        setFilteredMovie(filter);
      }

      if (kind.sort === "coun") {
        const filter = movies.filter((f) => {
          const { origin_country } = f;
          if (!origin_country) return "";
          return origin_country[0] === kind.kind;
        });
        setFilteredMovie(filter);
      }
    };
    trending();
  }, [kind]);

  return (
    <CenterialContainer>
      <div className={styles.content}>
        <div className={styles.category}>
          {MovieCatData.map((item) => (
            <Select
              key={item.id}
              active={active}
              setActive={setActive}
              hover={hover}
              setHover={setHover}
              id={item.id}
              title={item.title}
              log={item.log}
            />
          ))}
        </div>
      </div>
      <div className={styles.selectContainer}>
        <div className={styles.selectInner}>
          <Section data={years} name="nice" sort={"year"} setKind={setKind} />
          <Section data={language} sort={"lang"} setKind={setKind} />
          <Section data={sort} sort={"sor"} setKind={setKind} />
          <Section data={translate} sort={"trans"} setKind={setKind} />
          <Section data={quality} sort={"qua"} setKind={setKind} />
          <Section data={country} sort={"coun"} setKind={setKind} />
        </div>
      </div>
      <MovieDetail movies={filtleredMovie} color="#f9f9f9" />
    </CenterialContainer>
  );
};

export default MovieType;
