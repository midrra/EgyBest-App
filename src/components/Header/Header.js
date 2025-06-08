import react, { useState } from "react";
import styles from "./Header.module.scss";
import PersonIcon from "@mui/icons-material/Person";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import MovieSearch from "../SearchBar/SearchBar";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <Container className={styles.container}>
      <div className={styles["right-head"]}>
        <div className={styles.logo}>
          <span>Egy</span>Best
        </div>
        <div>
          <MovieSearch />
          {/* <input
            type="search"
            className={styles["input-header"]}
            placeholder="ابحث عن فيلم او مسلسل او ممثل..."
            onChange={"handleChange"}
            // style={{
            //   direction: direction,
            //   textAlign: direction === "ltr" ? "left" : "right",
            // }}
          /> */}
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
        className={menuOpen ? styles.hamburger : styles.active}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
      </div>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </Container>
  );
};
export default Header;
