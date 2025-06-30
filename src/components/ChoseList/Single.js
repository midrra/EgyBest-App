import React, { useRef } from "react";
import styles from "./Single.module.scss";
import { useNavigate, useLocation } from "react-router-dom";

const Single = ({
  type,
  active,
  setIcons,
  logo,
  id,
  first,
  setFirst,
  reload,
}) => {
  const inter = useRef();
  const Navigate = useNavigate();

  const checkHandler = (e) => {
    setIcons(id);
    setFirst(true);
    Navigate(inter.current.textContent);
  };

  return (
    <div
      className={active ? styles.underContent : styles.content}
      id={reload ? styles["def-fi "] : ""}
      onClick={checkHandler}
    >
      {logo}
      <li ref={inter}>{type}</li>
    </div>
  );
};

export default Single;
