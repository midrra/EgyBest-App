// import React, { useState, useEffect } from "react";
// import CategoryList from "./CategoryList";
// import { CategoryData } from "./CategoryData";
// import Follow from "./Follow";
// import styles from "./Categories.module.scss";
// import { useLocation } from "react-router-dom";

// const Categories = ({ variant, className = "" }) => {
//   const [fixed, setFixed] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     // Always fix on 404 page
//     if (location.pathname === "/404" || location.pathname === "*") {
//       setFixed(true);
//       return;
//     }

//     const handleScroll = () => {
//       if (window.scrollY > 140) setFixed(true);
//       else setFixed(false);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [location.pathname]);

//   return (
//     <div className={styles.category}>
//       {!fixed && <Follow />}
//       <ul className={fixed ? styles["fixed-list"] : styles["category-list"]}>
//         {CategoryData.map((item) => (
//           <CategoryList key={item.id} type={item.type} />
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Categories;

import React, { useState, useEffect } from "react";
import CategoryList from "./CategoryList";
import { CategoryData } from "./CategoryData";
import Follow from "./Follow";
import styles from "./Categories.module.scss";
import { useLocation } from "react-router-dom";
import clsx from "clsx";

const Categories = ({ position = "fixed", ActiveWidth = false, full }) => {
  const [fixed, setFixed] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/404" || location.pathname === "*") {
      setFixed(true);
      return;
    }

    const handleScroll = () => {
      setFixed(window.scrollY > 140);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // If position is "relative", never use fixed logic
  const shouldBeFixed = position === "fixed" && fixed;

  return (
    <div
      className={clsx(
        styles.category,
        position === "relative" && styles.relative
      )}
    >
      {!shouldBeFixed && <Follow full={full} />}
      <ul
        className={
          shouldBeFixed ? styles["fixed-list"] : styles["category-list"]
        }
      >
        {CategoryData.map((item) => (
          <CategoryList
            key={item.id}
            type={item.type}
            ActiveWidth={ActiveWidth}
          />
        ))}
      </ul>
    </div>
  );
};

export default Categories;
