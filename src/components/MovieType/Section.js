import React, { useState, useEffect, useMemo } from "react";
import styles from "./Select.module.scss";

const Section = ({ data }) => {
  const [type, setType] = useState(["initial"]);
  // console.log(data);
  let x = [];
  useEffect(() => {
    for (let [key, value] of Object.entries(data)) {
      x.push(value);
    }
    x.shift();
    // const filterId = x.filter((item) => typeof item !== "number");
    setType(x);
  }, []);

  // console.log(type);

  const selectHandler = () => {
    console.log("itis sectcted");
  };

  return (
    <select onClick={selectHandler}>
      {type.map((item, i) => (
        <option key={i}>{item}</option>
      ))}
    </select>
  );
};

export default Section;
