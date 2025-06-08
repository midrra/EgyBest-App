import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryList = (props) => {
  const navigate = useNavigate();
  const clickHandler = (e) => {
    console.log(props.type, "every thing is ok");
    navigate(`/${props.type.split(" ").join("-")}`);
  };
  return <li onClick={clickHandler}>{props.type}</li>;
};

export default CategoryList;
