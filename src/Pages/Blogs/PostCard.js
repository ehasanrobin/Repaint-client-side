import React from "react";
import { Link } from "react-router-dom";
const PostCard = ({ blog }) => {
  const { title, img, desc, date } = blog;
  return (
    <div className="card   shadow-xl mt-4">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <Link>
          <span>
            <i className="fa-solid fa-calendar-days"></i>
          </span>{" "}
          {date}
        </Link>
        <h2 className="card-title">{title}</h2>
        <p>
          {desc.length > 250
            ? `${desc.substring(0, 250)}...`
            : desc.description}
        </p>
        <div className="card-actions justify-start">
          <button className="btn bg-orange border-orange">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
