import React from "react";
import styles from "./Trends.module.scss";

const ChooseHeadicon = ({ logo, title, id, setTrend, active }) => {
  const changeHandler = () => {
    setTrend(id);
    console.log("clickable now");
  };

  return (
    <div
      className={active ? styles.inner : styles.unInner}
      onClick={changeHandler}
    >
      <span className={styles.move}>{logo}</span>
      <h6>{title}</h6>
    </div>
  );
};

export default ChooseHeadicon;
