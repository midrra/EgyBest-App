import React from "react";
import styles from "./Trends.module.scss";

const ChooseHeadicon = ({ logo, title, id, setTrend, active, setTitle }) => {
  const changeHandler = () => {
    setTrend(id);
    setTitle(title);
  };

  return (
    <div
      className={active ? styles.inner : styles.unInner}
      onClick={changeHandler}
    >
      <span className={styles.lo}>{logo}</span>
      <h6>{title}</h6>
    </div>
  );
};

export default ChooseHeadicon;
