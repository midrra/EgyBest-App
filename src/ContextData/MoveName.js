import react, { useState, createContext } from "react";

export const reducerId = createContext({
  id: "",
  movieID: () => {},
});

function MoveName(props) {
  const [id, setId] = useState();
  const moveId = (id) => {
    setId(id);
  };

  const ex = {
    moveId,
    id,
  };

  return <reducerId.Provider value={ex}>{props.children}</reducerId.Provider>;
}

export default MoveName;
