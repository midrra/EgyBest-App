import React from "react";
import styles from "./Select.module.scss";

const Select = ({ setActive, active, setHover, hover, id, title, log }) => {
  return (
    <div className={hover === id ? styles.active : styles.title}>
      <div
        className={active === id ? styles.active : styles.title}
        onClick={() => {
          setActive(id);
          console.log("work in movie type");
        }}
        onMouseEnter={() => setHover(id)}
        onMouseLeave={() => setHover(false)}
      >
        <span>{log}</span>
        <h6>{title}</h6>
      </div>
    </div>
  );
};

export default Select;
