import { SetMealRounded } from "@mui/icons-material";
import React, { useState, useReducer } from "react";

const Reducer = React.createContext({
  items: [],
  movieId: (id) => {},
  movies: (id) => {},
});

const intialValue = { items: [], MovieId: "", MovieContain: "" };

const ApReducer = (state, action) => {
  switch (action.type) {
    case "items":
      return { ...state, items: action.data };

    case "MovieContain":
      return { ...state, MovieContain: action.data };

    case "MovieId":
      return { MovieId: action.data };

    default:
      return new Error("Something went wrong");
  }
};

export const ContextManage = (props) => {
  const [state, dispatch] = useReducer(ApReducer, intialValue);

  const movieId = (name) => {
    dispatch({ type: "MovieId", data: name.title });

    const goal = state.items.map((n) => {
      if (n.title === name.title) {
        return n.title;
      }
    });

    const res = state.items.find((item) => item.title === goal.join(""));

    dispatch({ type: "MovieContain", data: res });
  };

  const movies = (trending, anime) => {
    const allMovies = [...trending, ...anime];
    dispatch({ type: "items", data: allMovies });
  };

  console.log(state.MovieContain);

  const reduceValue = {
    Movies: state.itemes,
    MovieId: state.MovieId,
    MovieContain: state.MovieContain,
    movieId: movieId,
    movies: movies,
  };

  return (
    <Reducer.Provider value={reduceValue}>{props.children}</Reducer.Provider>
  );
};

export default Reducer;

// import { SetMealRounded } from "@mui/icons-material";
// import React, { useState, useReducer } from "react";

// const Reducer = React.createContext({
//   items: [],
//   movieId: (id) => {},
//   movies: (id) => {},
// });

// const intialValue = { items: [], movieId: (id) => {}, movies: (id) => {} };

// function ApReducer(state, action) {
//   switch (action.value) {
//     case "goal":
//       return "That is osam";
//     case "man":
//       return "The real man in the world";
//   }
// }

// export const ContextManage = (props) => {
//   const [items, setItems] = useState([]);
//   const [type, setType] = useState();
//   const [hash, setHash] = useState();
//   const [ex, setEx] = useState("more");

//   const [state, dispatch] = useReducer(ApReducer, intialValue);

//   const movieId = (name) => {
//     setHash(name.title);

//     const goal = items.map((n) => {
//       if (n.title === name.title) {
//         return n.title;
//       }
//     });

//     const res = items.find((item) => item.title === goal.join(""));
//     setType(res);
//   };

//   const movies = (trending, anime) => {
//     const allMovies = [...trending, ...anime];
//     setItems(allMovies);
//   };

//   const reduceValue = {
//     items: items,
//     type: type,
//     hash: hash,
//     movieId: movieId,
//     movies: movies,
//     ex: ex,
//   };

//   return (
//     <Reducer.Provider value={reduceValue}>{props.children}</Reducer.Provider>
//   );
// };

// export default Reducer;
