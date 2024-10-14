import React, { useState, useEffect, useMemo, Fragment } from "react";
import styles from "./Select.module.scss";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { movieTypeData } from "./MovieCatData";
import { ManRounded } from "@mui/icons-material";

const Section = ({ data, setKind, sort }) => {
  const [type, setType] = useState(["initial"]);
  // let x = [];
  useEffect(() => {
    // for (let [key, value] of Object.entries(data)) {
    //   x.push(value);
    // }
    // x.shift();
    // // const filterId = x.filter((item) => typeof item !== "number");
    // setType(x);
  }, []);

  const selectHandler = (e) => {
    setKind({ kind: e.target.value, sort });
    console.log(e.target, "name name");
  };

  return (
    <select onChange={selectHandler}>
      {data.map((item, i) => (
        <option key={i}>{item[sort]}</option>
      ))}
    </select>
  );
};

export default Section;
