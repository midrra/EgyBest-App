import React, { useState, useEffect } from "react";
import CenterialContainer from "../../components/CenteralContainer/CenteralContainer";
import { useLocation } from "react-router-dom";
import styles from "./Site.module.scss";
import { Link, useSearchParams, Routes, Route } from "react-router-dom";
import Img from "./Img";

const Site = () => {
  const [move, setMove] = useState(false);
  const [searchParmas, setSearchParmas] = useSearchParams({ n: "3" });
  const number = searchParmas.get("n");

  const changeHandler = (e) => {
    setSearchParmas({ n: move });
  };

  const detailHandler = () => {
    console.log("clicked");
    <Link to="tutorial/man"></Link>;
    // setMove(true);
  };

  return (
    <CenterialContainer>
      <Link to="/tutorial/man">
        <div className={styles.container} onClick={detailHandler}>
          <img src="photes/man2.jpg"></img>
          <p>Filme Name</p>
        </div>
      </Link>
      <Link to="/tutorial/man" className={styles.link}>
        <p>This is a Good File What you say</p>
      </Link>
      <button>Paramse Input {number}</button>
      <input type="text" value={number} onChange={changeHandler} />
    </CenterialContainer>
  );
};

export default Site;
