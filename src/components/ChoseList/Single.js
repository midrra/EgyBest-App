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

  // const location = useLocation();
  // console.log(location.pathname);

  const checkHandler = () => {
    setIcons(id);
    setFirst(true);
    // console.log(inter.current.textContent);
    Navigate(inter.current.textContent);
  };
  // console.log(reload);

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
// id={!first ? styles["def-fi"] : ""}

// {
// to={link?.type || "goodjob"}
/* <div
className={active ? styles.underContent : styles.content}
id={!first ? styles["def-fi"] : ""}
onClick={checkHandler}
>
{logo}
<li>{type}</li>
</div> */
// }
