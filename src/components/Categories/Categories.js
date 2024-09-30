import React, { useState, useEffect } from "react";
import CategoryList from "./CategoryList";
import { CategoryData } from "./CategoryData";
import Follow from "./Follow";
import styles from "./Categories.module.scss";
import { BoyRounded } from "@mui/icons-material";

const Categories = () => {
  const [fixed, setFixed] = useState(false);

  // useEffect(() => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 140) return setFixed(true);
    else return setFixed(false);
  });
  // });

  return (
    <div className={styles.category}>
      {!fixed && <Follow />}
      <ul className={fixed ? styles["fixed-list"] : styles["category-list"]}>
        {CategoryData.map((item) => (
          <CategoryList key={item.id} type={item.type} />
        ))}
      </ul>
    </div>
  );
};

export default Categories;
