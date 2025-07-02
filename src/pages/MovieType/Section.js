import React, { useState } from "react";

const Section = ({ data, sort, setFilters }) => {
  const selectHandler = (e) => {
    setFilters((prev) => ({ ...prev, [sort]: e.target.value }));
  };

  return (
    <select onChange={selectHandler}>
      {data.map((item, i) => (
        <option key={i}>{item[sort]}</option>
      ))}
    </select>
  );
};

export default Section;
