import React from "react";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import TwitterIcon from "@mui/icons-material/Twitter";
import styles from "./Follow.module.scss";
import clsx from "clsx";

const Follow = ({ full = false }) => {
  return (
    <div className={clsx(styles.follow, full && styles.full)}>
      <h1>تابع ايجي بست</h1>
      <hr />
      <div className={styles.content}>
        <div className={styles.innerContent}>
          <div className={styles["fol-fa"]}>
            <span className="ms-2">
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
