import React from "react";
import styles from "./Select.module.scss";

const Select = ({ setActive, id, title, log, setTitle, uniq }) => {
  return (
    <div
      className={uniq ? styles.active : styles.title}
      onClick={() => {
        setActive(id);
        setTitle(title);
      }}
    >
      <span>{log}</span>
      <h6>{title}</h6>
    </div>
  );
};

export default Select;
