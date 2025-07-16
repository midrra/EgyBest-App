import React from "react";

function Input({ name, type, placeholder, onChange }) {
  const changeHandler = (e) => {};
  return (
    <input
      onChange={changeHandler}
      name={name}
      type={type}
      placeholder={placeholder}
    />
  );
}

export default Input;
