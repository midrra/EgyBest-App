import React from "react";
import styles from "./CenteralContainer.module.scss";

const CenterialContainer = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContent}>{props.children}</div>
    </div>
  );
};

export default CenterialContainer;
