import Reac, { Fragment } from "react";
import Overlay from "../../components/Overlay/Overlay";
import Header from "../../components/Header/Header";
import Categories from "../../components/Categories/Categories";
import ChoseList from "../../components/ChoseList/ChoseList";
import Title from "../../components/Title/Title";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <Overlay />
      <Header />
      <Categories />
      <ChoseList />
      <Title />
      <Outlet/>
    </Fragment>
  );
};

export default Home;
