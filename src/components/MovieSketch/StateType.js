import React from "react";
import styles from "./StateType.module.scss";

function StateType({ type, color }) {
  return (
    <div className={styles.quality}>
      <div style={{ backgroundColor: color }} className={styles.tri}>
        {type}
      </div>
      <div style={{ backgroundColor: color }} className={styles.comp}></div>
      <div
        style={{
          "--color": color,
        }}
        className={styles.kdn}
      ></div>
      <div style={{ backgroundColor: color }} className={styles.ang}></div>
      <div style={{ backgroundColor: color }} className={styles.bot}></div>
    </div>
  );
}

export default StateType;
