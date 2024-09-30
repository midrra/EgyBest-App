import React, { useState, useEffect, useMemo } from "react";
import styles from "./Select.module.scss";

const Section = ({ data }) => {
  const [type, setType] = useState(["initial"]);

  let x = [];

  useEffect(() => {
    for (let [key, value] of Object.entries(data)) {
      x.push(value);
    }
    // const filterId = x.filter((item) => typeof item !== "number");
    setType(x);
  }, [data, x]);

  // console.log(type[1]);

  const selectHandler = () => {
    console.log("itis sectcted");
  };

  return (
    <select onSubmit={selectHandler}>
      {type.map((item) => (
        <option>{item}</option>
      ))}
    </select>
  );
};

export default Section;
