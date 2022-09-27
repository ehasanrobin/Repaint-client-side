import React from "react";
import happyForeMan from "../../images/whychoose-us3.png";

const About = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content  flex-col lg:flex-row ">
        <div className="banner-img flex-1 flex justify-center items-center ">
          <img src={happyForeMan} className="w-3/4 rounded-full " />
        </div>
        <div className="flex-1 p-5">
          <sub className="capitalizee tracking-widest font-medium text-orange text-2xl  my-3">
            About Us
          </sub>
          <h1 className="text-5xl font-bold my-3 leading-tight">
            We Are The Best Painting Service Company
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <ul className="list-disc leading-normal">
            <li className="font-bold">
              Now this is a story all about how, my life got flipped-turned
              upside down
            </li>
            <li className="font-bold leading-normal">
              Now this is a story all about how, my life got flipped-turned
              upside down
            </li>
            <li className="font-bold leading-normal">
              Now this is a story all about how, my life got flipped-turned
              upside down
            </li>
          </ul>
          <button className="btn bg-orange border-orange">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
