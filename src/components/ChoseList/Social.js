import React from "react";
import styles from "./Social.module.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useNavigate } from "react-router-dom";

const Social = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.social}>
      <div className={styles["fa-icon"]}>
        <FacebookTwoToneIcon
          onClick={() => {
            window.open("https://www.facebook.com", "_blank");
          }}
        />
      </div>
      <div className={styles["tw-icon"]}>
        <TwitterIcon
          onClick={() => {
            window.open("https://www.x.com", "_blank");
          }}
        />
      </div>
    </div>
  );
};

export default Social;
