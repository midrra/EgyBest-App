import react, { useRef } from "react";
import styles from "./Header.module.scss";
import PersonIcon from "@mui/icons-material/Person";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import { useSelector, useDispatch } from "react-redux";
import MovieSearch from "../SearchBar/SearchBar";
import { toggleMenu } from "../../ContextData/MenuSlice";

const Header = () => {
  const hamburgerRef = useRef(null);

  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.menu.isOpen);
  const menuRef = useRef();

  return (
    <Container className={styles.container}>
      <div className={styles["right-head"]}>
        <div className={styles.logo}>
          <Link to="/" className="text-decoration-none">
            <span>Egy</span>Best
          </Link>
        </div>
        <div>
          <MovieSearch />
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
      <div
        className={isOpen ? styles.hamburger : styles.active}
        onClick={() => dispatch(toggleMenu())}
        ref={hamburgerRef}
      >
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
      </div>
      <Menu hamburgerRef={hamburgerRef} />
    </Container>
  );
};
export default Header;
