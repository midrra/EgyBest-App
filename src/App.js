import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.scss";
import MiddleContent from "./components/MiddleContent/MiddleContent";

import {
  Route,
  Outlet,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

import Moviedetail from "./pages/Moviedetail.js";
import Reducer from "./ContextData/ContextData";
import Home from "./components/Home/Home";
import EgyHome from "./pages/EgyHome";
import MovieCat from "./pages/MovieCat.js";
import Trending from "./pages/Trending";
import EgySeries from "./pages/EgySeries";
import Anime from "./pages/Anime";
import Programs from "./pages/Programs";
import Sport from "./pages/Sport";
import Play from "./pages/Play";
import Library from "./pages/Library";
import More from "./pages/More";
import PagenotFound from "./components/PagenotFound/PagenotFound";
import Books from "./components/Books/Books.js";
import Login from "./pages/login/Login.js";
import Join from "./pages/Join/Join.js";
// import Pluse from "./components/GiveMore/Pluse";

function App() {
  // const auth = useSelector((state) => state.MovieId.movieOb);
  // const auther = useSelector((state) => state.MovieId.final);
  const contex = useContext(Reducer);
  // console.log(auth);
  // console.log(auther);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Home />}>
        <Route index element={<MiddleContent />} />
        <Route path={`movie/:id`} element={<Moviedetail />} />
        <Route path={"egybest"} element={<EgyHome />} />
        <Route path={"trending"} element={<Trending />} />
        <Route path={"AllMovies/:id"} element={<More />} />
        <Route path={"movies"} element={<MovieCat />} />
        <Route path={"مسلسلات"} element={<EgySeries />} />
        <Route path={"books"} element={<Books />} />
        <Route path={"login"} element={<Login />} />
        <Route path={"join"} element={<Join />} />
        <Route path={"مسرحيات"} element={<Play />} />
        <Route path={"Anime"} element={<Anime />} />
        <Route path={"pro"} element={<Programs />} />
        <Route path={"lib"} element={<Library />} />
        <Route path={"المصارعه الحره"} element={<Sport />} />
        <Route path={"*"} element={<PagenotFound />} />
      </Route>
    )
  );
  return (
    <Container className={styles.container}>
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
