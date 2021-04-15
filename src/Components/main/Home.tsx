import { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import Card from "./Card/Card";
import "./Home.module.scss";

const Home = () => {
  return (
    <>
      <Banner/>
      <Card/>
    </>
  );
};

export default Home;
