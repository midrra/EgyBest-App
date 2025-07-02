import React, { useState, useEffect } from "react";
import styles from "./ChoseList.module.scss";
import { ChoseListData } from "../Api/ChoseListData";
import Single from "./Single";
import Socail from "../ChoseList/Social";
import { useLocation } from "react-router-dom";
import clsx from "clsx";

const ChoseList = ({ choice }) => {
  const [icons, setIcons] = useState(false);
  const [first, setFirst] = useState(false);

  const location = useLocation();
  const local = ChoseListData.find(
    (items) => items.type === location.pathname.slice(1)
  );

  return (
    <div className={clsx(styles.choseList, styles[`${choice}`])}>
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
          />
        ))}
      </ul>
      <Socail choice={choice} />
    </div>
  );
};

export default ChoseList;
