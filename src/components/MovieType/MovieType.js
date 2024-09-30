import React, { useState } from "react";
import CenterialContainer from "../CenteralContainer/CenteralContainer";
import styles from "./MovieType.module.scss";
import SellIcon from "@mui/icons-material/Sell";
import { MovieCatData } from "./MovieCatData";
import Section from "./Section";
import Select from "./Select";
import MovieSketch from "../MovieSketch/MovieSketch";
import { Mdata } from "../Api/Mdata";
import { movieTypeData } from "./MovieCatData";

const MovieType = () => {
  const [active, setActive] = useState(1);
  const [hover, setHover] = useState(1);

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
          {movieTypeData.map((item) => (
            <Section data={item} key={item.id} />
          ))}
        </div>
      </div>
      <div>
        <MovieSketch movies={Mdata} />
      </div>
    </CenterialContainer>
  );
};

export default MovieType;
