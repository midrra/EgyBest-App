import React, { useContext, Fragment, lazy, Suspense } from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.scss";

import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

import MovieTitle from "./pages/MovieTitle/MovieTitle";

import MiddleContent from "./pages/MiddleContent/MiddleContent.js";
import Movies from "./pages/MovieType/Movies.js";
import Trending from "./pages/Trending/Trends.js";
import Anime from "./pages/ِAnime/Anime.js";
import Sports from "./pages/Sports/Sports.js";
import Programs from "./pages/Programs/Programs.js";
import Library from "./pages/Library/Library.js";
import More from "./pages/More/GiveMore.js";
import PagenotFound from "./components/PagenotFound/PagenotFound";
import Login from "./pages/login/Login.js";
import Join from "./pages/Join/Join.js";
import Series from "./pages/Series/Series.js";
import Egyptian from "./pages/Egyptian/Egyptian.js";
import Korean from "./pages/Korean/Korean.js";
import Japanes from "./pages/Japanes/Japanes.js";
import Horror from "./pages/Horror/Horror.js";
import Komedy from "./pages/Komedy/Komedy.js";
import American from "./pages/American/American.js";
import Crime from "./pages/Crime/Crimes.js";
import Arabic from "./pages/Arabic/Arabic.js";
import Indian from "./pages/Indian/Indian.js";
import Chinese from "./pages/Chinese/Chinese.js";
import Action from "./pages/Action/Action.js";
import Mystery from "./pages/Mystery/Mystery.js";
import ScienceFiction from "./pages/ScienceFiction/ScienceFiction.js";
import Cartoon from "./pages/Cartoon/Cartoon.js";
import War from "./pages/War/War.js";
import Documentary from "./pages/Documentary/Documentary.js";
import EgybestApp from "./pages/EgybestApp/EgybestApp.js";
import Stage from "./pages/Stage/Stage.js";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.js";
import Download from "./pages/Download/Download.js";
import PasswordReset from "./pages/PasswordReset/PasswordReset.js";
import { MetroSpinner } from "react-spinners-kit";

const Home = lazy(() => import("./components/Home/Home"));

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Fragment>
        <Route path="/" element={<Home />}>
          <Route index element={<MiddleContent />} />
          <Route path={`movie/:id`} element={<MovieTitle />} />
          <Route path={"egybest"} element={<MiddleContent />} />
          <Route path={"trending"} element={<Trending />} />
          <Route path={"AllMovies"} element={<More />} />
          <Route path={"movies"} element={<Movies />} />
          <Route path={"series"} element={<Series />} />
          <Route
            path={"Anime"}
            element={
              <ProtectedRoute>
                <Anime />
              </ProtectedRoute>
            }
          />
          <Route path={"programs"} element={<Programs />} />
          <Route path={"stage"} element={<Stage />} />
          <Route path={"library"} element={<Library />} />
          <Route path={"sports"} element={<Sports />} />
          <Route path={"download"} element={<Download />} />
          <Route path={"افلام-مصرية"} element={<Egyptian />} />
          <Route path={"افلام-كورية"} element={<Korean />} />
          <Route path={"افلام-يابانية"} element={<Japanes />} />
          <Route path={"افلام-رعب"} element={<Horror />} />
          <Route path={"افلام-كوميدية"} element={<Komedy />} />
          <Route path={"افلام-امريكية"} element={<American />} />
          <Route path={"افلام-جريمة"} element={<Crime />} />
          <Route path={"افلام-عربية"} element={<Arabic />} />
          <Route path={"افلام-هندية"} element={<Indian />} />
          <Route path={"افلام-صينية"} element={<Chinese />} />
          <Route path={"افلام-اكشن"} element={<Action />} />
          <Route path={"افلام-غموض"} element={<Mystery />} />
          <Route path={"افلام-خيال-علمي"} element={<ScienceFiction />} />
          <Route path={"افلام-كرتون"} element={<Cartoon />} />
          <Route path={"افلام-حرب"} element={<War />} />
          <Route path={"افلام-وثائقية"} element={<Documentary />} />
          <Route path={"ايجي-بست"} element={<MiddleContent />} />
          <Route path={"ايجي-بست"} element={<MiddleContent />} />
          <Route path={"ايجي-بست-الجديد"} element={<MiddleContent />} />
          <Route path={"ايجي-بست-البديل"} element={<MiddleContent />} />
          <Route path={"موقع-ايجي-بست"} element={<MiddleContent />} />
          <Route path={"egybest-2"} element={<MiddleContent />} />
          <Route path={"EgyBest-vip"} element={<MiddleContent />} />
          <Route path={"egybest-app"} element={<EgybestApp />} />
          <Route path={"ايجي بست"} element={<EgybestApp />} />
          <Route path={"موقع ايجي بست"} element={<EgybestApp />} />
          <Route path={"ايجي بست الجديد"} element={<EgybestApp />} />
          <Route path={"ايجي بست البديل"} element={<EgybestApp />} />
          <Route path={"ايجي بست apk"} element={<EgybestApp />} />
          <Route path={"تطبيق ايجي بست"} element={<EgybestApp />} />
          <Route path={"افلام ايجي بست"} element={<Movies />} />
          <Route path={"مسلسلات ايجي بست"} element={<Series />} />
          <Route path={"Egybest"} element={<EgybestApp />} />

          <Route path={"*"} element={<PagenotFound />} />
        </Route>
        <Route path={"/join"} element={<Join />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/password-reset"} element={<PasswordReset />} />
      </Fragment>
    )
  );
  return (
    <Container className={styles.container}>
      <Suspense
        fallback={
          <div className={styles.spinner}>
            <MetroSpinner size={80} color="green" loading={true} />
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </Container>
  );
}

export default App;
