import React from "react";
import CountUp from "react-countup";
const Summerary = () => {
  return (
    <div className="grid lg:grid-cols-4 max-w-7xl mx-auto text-center py-28 gap-4 ">
      <div className="bg-orange py-12 rounded-md summerybox">
        <p className="text-xl capitalize text-white   font-bold">
          happy customers
        </p>
        <h2 className="text-4xl my-3 ">
          <CountUp end={1000} />+
        </h2>
      </div>
      <div className="bg-orange py-12 rounded-md summerybox">
        <p className="text-xl capitalize text-white   font-bold">
          Annual revenue
        </p>
        <h2 className="text-4xl my-3 ">
          <CountUp end={12} />
          M+
        </h2>
      </div>
      <div className="bg-orange text-white py-12 rounded-md summerybox">
        <p className="text-xl capitalize text-white   font-bold">Reviews</p>
        <h2 className="text-4xl my-3 ">
          <CountUp end={33} />
          K+
        </h2>
      </div>
      <div className="bg-orange text-white py-12 rounded-md summerybox">
        <p className="text-xl capitalize text-white   font-bold">Tools</p>
        <h2 className="text-4xl my-3 ">
          <CountUp end={50} />+
        </h2>
      </div>
    </div>
  );
};

export default Summerary;
