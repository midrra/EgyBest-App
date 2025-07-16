import React from "react";
import Select from "./Select";
import styles from "./MainType.module.scss";

function SelectionBar({ setActive, active, setTitle, selectData }) {
  return (
    <div className={styles.content}>
      <div className={styles.category}>
        {selectData.map((item) => (
          <Select
            key={item.id}
            setActive={setActive}
            id={item.id}
            title={item.title}
            setTitle={setTitle}
            log={item.log}
            uniq={active === item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default SelectionBar;
