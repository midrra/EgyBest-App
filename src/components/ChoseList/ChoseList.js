import React, { useState, useEffect } from "react";
import styles from "./ChoseList.module.scss";
import { ChoseListData } from "../Api/ChoseListData";
import Single from "./Single";
import Socail from "../ChoseList/Social";
import { useLocation } from "react-router-dom";

const ChoseList = () => {
  const [icons, setIcons] = useState(false);
  const [first, setFirst] = useState(false);

  const location = useLocation();
  // console.log(location.pathname.slice(1));
  const local = ChoseListData.find(
    (items) => items.type === location.pathname.slice(1)
  );
  // console.log(local.id);

  return (
    <div className={styles.choseList}>
      <ul>
        {ChoseListData.map((item) => (
          <Single
            key={item.id}
            type={item.type}
            active={icons === item.id}
            id={item.id}
            setIcons={setIcons}
            logo={item.logo}
            setFirst={setFirst}
            first={first}
            // reload={local.id === item.id}
          />
        ))}
      </ul>
      <Socail />
    </div>
  );
};

  export default ChoseList;

  /* <div className={styles.choseList}>
<ul>
  {ChoseListData.map((item) => (
    <Single
      key={item.id}
      type={item.type}
      active={icons === item.id}
      data={item.id}
      setIcons={setIcons}
      logo={item.logo}
      setFirst={setFirst}
      first={first}
    />
  ))}
</ul>
<div className={styles.social}>
  <div className={styles["fa-icon"]}>
    <FacebookTwoToneIcon />
  </div>
  <div className={styles["tw-icon"]}>
    <TwitterIcon />
  </div>
</div>
</div> */
