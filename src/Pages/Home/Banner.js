import React from "react";
import happyForeMan from "../../images/happy-attractive-foreman-ready-for-house-repairing-2022-02-05-03-47-08-utc (1).png";
import "./Home.css";
const Banner = () => {
  return (
    <div className="hero min-h-screen bg-cream">
      <div className="hero-content  flex-col lg:flex-row-reverse ">
        <div className="banner-img flex-1 flex justify-center items-center ">
          <img src={happyForeMan} className="w-full rounded-full " />
        </div>
        <div className="flex-1">
          <sub className="capitalizee tracking-widest font-medium text-orange text-2xl  my-3">
            PROFFESIONAL PAINTING SERVICES
          </sub>
          <h1 className="text-5xl font-bold my-3 leading-tight">
            Making Your Home <span className="text-orange">Beautiful</span>,
            Inside & Out
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn bg-orange border-orange">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
