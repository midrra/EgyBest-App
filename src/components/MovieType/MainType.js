import React, { useState, Fragment } from "react";
import styles from "./MainType.module.scss";
import Section from "./Section.js";
import Select from "./Select.js";
import { years } from "./MovieCatData.js";
import { language } from "./MovieCatData.js";
import { sort } from "./MovieCatData.js";
import { quality } from "./MovieCatData.js";
import { translation } from "./MovieCatData.js";
import { country } from "./MovieCatData.js";
import MovieFilter from "./MovieFilter.js";
import { MovieCatData } from "./MovieCatData.js";
import CenterialContainer from "../CenteralContainer/CenteralContainer.js";

function MainType() {
  const [active, setActive] = useState(1);
  const [hover, setHover] = useState(1);
  const [filters, setFilters] = useState({
    year: "",
    language: "",
    type: "", // e.g. 'movie' or 'tv'
    accuracy: "", // Not directly available; maybe rating/popularity?
    country: "",
    translation: "",
  });

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
          <Section data={years} sort={"year"} setFilters={setFilters} />
          <Section data={language} sort={"language"} setFilters={setFilters} />
          <Section data={sort} sort={"type"} setFilters={setFilters} />
          <Section
            data={translation}
            sort={"translation"}
            setFilters={setFilters}
          />
          {/* <Section data={quality} sort={"qua"} setKind={setKind} /> */}
          <Section data={country} sort={"country"} setFilters={setFilters} />
        </div>
        <MovieFilter filters={filters} />
      </div>
    </CenterialContainer>
  );
}

export default MainType;
