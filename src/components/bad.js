import React from "react";
import { useOutletContext } from "react-router-dom";

const Bad = () => {
  const bg = useOutletContext();
  return <div>The Bad component {bg.item}</div>;
};

export default Bad;
