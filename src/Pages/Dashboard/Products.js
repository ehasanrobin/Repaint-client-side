import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import axiosPrivate from "../../Api/Axios";
import auth from "../../firebase/firebase.init";
import ProductsRow from "./ProductsRow";

const Products = () => {
  const [services, setServices] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    axiosPrivate({
      method: "GET",
      url: `https://repaint-server-side1.vercel.app/services`,
    }).then((result) => {
      setServices(result.data);
    });
  }, [user]);
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>avatar</th>
            <th>name</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <ProductsRow
              key={service._id}
              service={service}
              index={index}
            ></ProductsRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
