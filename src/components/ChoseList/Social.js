import React from "react";
import styles from "./Social.module.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import TwitterIcon from "@mui/icons-material/Twitter";

const Social = () => {
  return (
    <div className={styles.social}>
      <div className={styles["fa-icon"]}>
        <FacebookTwoToneIcon />
      </div>
      <div className={styles["tw-icon"]}>
        <TwitterIcon />
      </div>
    </div>
  );
};

export default Social;
