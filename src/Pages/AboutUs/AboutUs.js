import React from "react";
import About from "../Home/About";
import Reviews from "../Home/Reviews";
import Services from "../Home/Services";
import Footer from "../Shared/Footer";
import PageTitle from "../Shared/PageTitle";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <>
      <PageTitle title="about us"></PageTitle>
      <About></About>
      <Services></Services>
      <Reviews></Reviews>
      <Footer></Footer>
    </>
  );
};

export default AboutUs;
