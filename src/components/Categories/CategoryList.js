import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Categories/Categories.module.scss";

const CategoryList = (props) => {
  const navigate = useNavigate();
  const clickHandler = (e) => {
    navigate(`/${props.type.split(" ").join("-")}`);
  };
  return (
    <li
      className={props.ActiveWidth === true ? styles.innerList : ""}
      onClick={clickHandler}
    >
      {props.type}
    </li>
  );
};

export default CategoryList;
