import React, { useState, useEffect, useContext } from "react";
import styles from "./MiddleContent.module.scss";
import Content from "./Content";
import CenterialContainer from "../CenteralContainer/CenteralContainer";
import { Mdata } from "../Api/Mdata";
import { SecondData } from "../Api/SecondData";
import contextData from "../../ContextData/ContextData";
import Reducer from "../../ContextData/ContextData";
import {
  useSearchParams,
  useLocation,
  Navigate,
  useParams,
  Outlet,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { items } from "../../ContextData/MovieId";
import { animeApi } from "../Api/Api";
import { trendingApi } from "../Api/Api";
// import More from '../../pages/More';
// import Allcontents from "./AllContents";
// import { Route, Routes, Navigate, Redirect, Outlet,BrowserRouter } from "react-router-dom";

import Carousels from "./Carousels";
import { LyricsRounded } from "@mui/icons-material";

const MiddleContent = (props) => {
  // api key = 88170d99a195633ba877280a25be173588170d99a195633ba877280a25be1735
  const [movies, setMovies] = useState([]);
  const [anime, setAnime] = useState([]);
  const [siteId, setsiteId] = useState();
  const [check, setCheck] = useState(false);
  const { id } = useParams();
  // console.log(id);

  const context = useContext(Reducer);

  // const [link, setLink] = useHref();
  // console.log(link);

  // const location = useLocation();
  // console.log(location.pathname);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   // context.movies(Mdata, SecondData);
  //   dispatch(items([...Mdata, ...SecondData]));
  // }, []);

  const [categoryType, setCategorytype] = useState([
    {
      id: 1,
      title: "الاكثر مشاهدة",
    },
    { id: 2, title: "انمي" },
    {
      id: 3,
      title: "افلام",
    },
    { id: 4, title: "الاكثر مشاهده" },
    { id: 5, title: "دراما عربيه" },
    {
      id: 6,
      title: "افلام سودانيه",
    },
    {
      id: 7,
      title: "مسلاسلات مصريه",
    },
  ]);

  useEffect(() => {
    async function animeHandler() {
      const trand = await trendingApi("day");
      setMovies(trand);

      const result = await animeApi();
      setAnime(result);
    }
    animeHandler();
  }, []);

  return (
    <CenterialContainer>
      <Content name={"Trending"} movies={movies} />
      <Content name={"Anime"} movies={movies} />
    </CenterialContainer>
  );
};

export default MiddleContent;
