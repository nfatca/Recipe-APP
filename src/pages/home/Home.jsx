import React from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { Div } from "./Home.styled";

const Home = () => {
  return (
    <Div>
      <Navbar />
      <Header />
    </Div>
  );
};

export default Home;
