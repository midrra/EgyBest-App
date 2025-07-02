import Reactn, { Fragment, useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import MovieSearch from "../SearchBar/SearchBar";

import styles from "./Menu.module.scss";
import ChoseList from "../ChoseList/ChoseList";
import { useSelector, useDispatch } from "react-redux";
import { closeMenu } from "../../ContextData/MenuSlice";

export default function Menu({ hamburgerRef }) {
  const containerRef = useRef(null);
  const isOpen = useSelector((state) => state.menu.isOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target) &&
        !hamburgerRef.current.contains(event.target)
      ) {
        dispatch(closeMenu());
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Fragment>
      <div className={isOpen ? styles.active : styles.menu} ref={containerRef}>
        <div className={styles["left-head"]}>
          <div className={styles["button-sub"]}>
            <PersonIcon />
            <Link to="join">اشترك مجانآ</Link>
          </div>
          <Link to="login" className={styles["button-inter"]}>
            تسجيل الدخول
          </Link>
        </div>
        <MovieSearch className="customInput" showStyle="showStyle" />
        <ChoseList choice={"mobileChoseList"} />
      </div>
    </Fragment>
  );
}
