import react, { useState, useRef, useContext } from "react";
import styles from "./Header.module.scss";
import PersonIcon from "@mui/icons-material/Person";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Reducer from "../../ContextData/ContextData";

const Header = () => {
  const [lang, setLang] = useState(false);
  const res = useRef();

  // const context = useContext(Reducer);
  // const error = context.login();

  // console.log(context.item);

  const ini = res.current;

  const changeHandler = () => {};

  return (
    <Container className={styles.container}>
      <div className={styles["right-head"]}>
        <div className={styles.logo} id="man">
          <span>Egy</span>Best
        </div>
        <div>
          <input
            ref={res}
            type="search"
            className={lang ? styles.input : styles["input-header"]}
            placeholder="ابحث عن فيلم او مسلسل او ممثل..."
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className={styles["left-head"]}>
        <div className={styles["button-sub"]}>
          <PersonIcon />
          <Link to="join">اشترك مجانآ</Link>
        </div>
        <Link to="login" className={styles["button-inter"]}>
          تسجيل الدخول
        </Link>
      </div>
    </Container>
  );
};
export default Header;
