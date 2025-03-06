import Reactn, { Fragment } from "react";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";

import styles from "./Menu.module.scss";

export default function Menu({ menuOpen }) {
  return (
    <Fragment>
      <div className={menuOpen ? styles.active : styles.menu}>
        <div className={styles["left-head"]}>
          <div className={styles["button-sub"]}>
            <PersonIcon />
            <Link to="join">اشترك مجانآ</Link>
          </div>
          <Link to="login" className={styles["button-inter"]}>
            تسجيل الدخول
          </Link>
        </div>
        <input
          type="search"
          className={styles["input-header"]}
          placeholder="ابحث عن فيلم او مسلسل او ممثل..."
        />
      </div>
    </Fragment>
  );
}
