import React from "react";
import styles from "./StateType.module.scss";

function StateType({ type }) {
  return (
    <div className={styles.quality}>
      <div style={{ backgroundColor: type.color }} className={styles.tri}>
        {type.type}
      </div>
      <div
        style={{ backgroundColor: type.color }}
        className={styles.comp}
      ></div>
      <div
        style={{
          "--color": type.color,
        }}
        className={styles.kdn}
      ></div>
      <div style={{ backgroundColor: type.color }} className={styles.ang}></div>
      <div style={{ backgroundColor: type.color }} className={styles.bot}></div>
    </div>
  );
}

export default StateType;
