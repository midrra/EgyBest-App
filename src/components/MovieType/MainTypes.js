import React, { useState, Fragment } from "react";
import styles from "./MainType.module.scss";
import Section from "./Section";
import Select from "./Select";
import MovieDetail from "../../components/GiveMore/MovieDetail";
import { years } from "./MovieCatData";
import { language } from "./MovieCatData";
import { sort } from "./MovieCatData";
import { quality } from "./MovieCatData";
import { translate } from "./MovieCatData";
import { country } from "./MovieCatData";
import MovieCat from "../../pages/MovieCat";

function MainType({ filteredMovie, setKind, MovieCatData }) {
  const [active, setActive] = useState(1);
  const [hover, setHover] = useState(1);

  return (
    <Fragment>
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
      <MovieDetail movies={filteredMovie} color="#f9f9f9" />
    </Fragment>
  );
}

export default MainType;
