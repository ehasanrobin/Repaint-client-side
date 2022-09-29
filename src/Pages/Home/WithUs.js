import React from "react";
import orang from "../../images/orang1.png";
const WithUs = () => {
  return (
    <div className="hero min-h-[50%] my-28 bg-cream">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={orang}
          className=" w-full max-w-md rounded-full  flex-1 widthusImg"
          alt=""
        />
        <div className="flex-1 p-12">
          <h1 className="text-5xl font-bold">
            Consult Your Color Selection With Us
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

export default WithUs;
