import React from "react";
import Footer from "../Shared/Footer";
import About from "./About";
import Banner from "./Banner";
import Reviews from "./Reviews";
import Services from "./Services";
import Summerary from "./Summerary";
import WithUs from "./WithUs";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Summerary></Summerary>
      <WithUs></WithUs>
      <Reviews></Reviews>
      <Footer></Footer>
    </>
  );
};

export default Home;
