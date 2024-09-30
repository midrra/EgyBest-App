import React from "react";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import TwitterIcon from "@mui/icons-material/Twitter";
import styles from "./Follow.module.scss";

const Follow = () => {
  return (
    <div className={styles.follow}>
      <h1>تابع ايجي بست</h1>
      <hr />
      <div className={styles.content}>
        <div className={styles.innerContent}>
          <div className={styles["fol-fa"]}>
            <span>
              <FacebookTwoToneIcon className={styles["fol-facebook"]} />
            </span>
            <span>EgyBestOriginal</span>
          </div>
          <div className={styles["fol-twi"]}>
            <span>
              <TwitterIcon className={styles["fol-twitter"]} />
            </span>
            <span>@EgyBestOriginal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Follow;
