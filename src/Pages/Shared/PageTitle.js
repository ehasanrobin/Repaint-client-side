import React from "react";
import { Link } from "react-router-dom";

const PageTitle = ({ title }) => {
  return (
    <div className="page-title grid grid-cols-1 items-center">
      <div>
        <h1 className="capitalize text-6xl font-bold">{title}</h1>
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>{title}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
