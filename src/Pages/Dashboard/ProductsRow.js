import React from "react";
import { Link } from "react-router-dom";

const ProductsRow = ({ service, index }) => {
  const { _id, name, desc, img, minOrderQuantity, orderQuantity, price } =
    service;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-20 rounded">
            <img src={img} alt="Tailwind-CSS-Avatar-component" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>
        <Link
          as={Link}
          to={`/dashboard/updateProduct/${_id}`}
          className="btn btn-info"
        >
          Update
        </Link>
        <button className="btn btn-warning mx-2">delete</button>
      </td>
    </tr>
  );
};

export default ProductsRow;
