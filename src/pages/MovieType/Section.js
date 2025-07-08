import React from "react";

const Section = ({ data, label, setFilters, filters }) => {
  const selectHandler = (e) => {
    setFilters((prev) => ({ ...prev, [label]: e.target.value }));
  };

  return (
    <select onChange={selectHandler} value={filters[label] || ""}>
      {data.map((item, i) => (
        <option key={i} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default Section;
