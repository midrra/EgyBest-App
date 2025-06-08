import React, { Fragment, useEffect, useState } from "react";
import Overlay from "../../components/Overlay/Overlay";
import Header from "../../components/Header/Header";
import Categories from "../../components/Categories/Categories";
import ChoseList from "../../components/ChoseList/ChoseList";
import Title from "../../components/Title/Title";
import { Outlet } from "react-router-dom";
import MovieSearch from "../../components/SearchBar/SearchBar";
// import MovieFilter from "./MovieFilter";

const Home = () => {
  return (
    <Fragment>
      <Overlay />
      <Header />
      <Categories />
      <ChoseList />
      <Title />
      <Outlet />
      {/* <MovieFilter /> */}
    </Fragment>
  );
};

export default Home;
