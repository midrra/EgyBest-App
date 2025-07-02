import React, { useRef } from "react";
import styles from "./Single.module.scss";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { closeMenu } from "../../ContextData/MenuSlice";
import { current } from "@reduxjs/toolkit";

const Single = ({ type, active, setIcons, logo, id, setFirst, reload }) => {
  const inter = useRef();
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const checkHandler = (e) => {
    setIcons(id);
    setFirst(true);
    dispatch(closeMenu());
    if (inter.current.textContent === "egybest") {
      return Navigate("/");
    }
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
