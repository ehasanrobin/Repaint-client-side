import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id: id, name, img, price, desc } = service;
  return (
    <div
      as={Link}
      to={`tools/${id}`}
      className="card bg-base-100 service-box  shadow-xl"
    >
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-orange text-3xl">{name}</h2>
        <p>{desc}</p>
        <div className="card-actions justify-end">
          <Link to={`/tools/${id}`} className="btn bg-orange border-orange">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
