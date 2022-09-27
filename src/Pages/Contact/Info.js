import React from "react";

const Info = () => {
  return (
    <div className="py-28 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 px-5 xl:px-0 gap-8">
        <div className="card p-5 bg-orange-500 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-4xl">Phone</h2>
            <div className="flex items-center">
              <div className="icon text-3xl  w-24">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="info text-lg">
                <p>+123 456 789</p>
                <p>+123 456 789</p>
              </div>
            </div>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div className="card p-5 bg-green-500 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-4xl">Email</h2>
            <div className="flex items-center">
              <div className="icon text-3xl  w-24">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="info text-lg">
                <p>www.repaint.com</p>
                <p>Ehasanrobin55@gmail.com</p>
              </div>
            </div>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div className="card p-5 bg-orange-500 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-4xl">Location</h2>
            <div className="flex items-center">
              <div className="icon text-3xl  w-24">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="info text-lg">
                <p>Jl. Pekanbaru No.201, Riau - Indonesia</p>
              </div>
            </div>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
