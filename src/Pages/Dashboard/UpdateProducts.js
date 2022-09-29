import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axiosPrivate from "../../Api/Axios";

const UpdateProducts = () => {
  const id = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axiosPrivate({
      method: "GET",
      url: `http://localhost:5000/services/${id.id}`,
    }).then((result) => {
      setProduct(result.data);
    });
  }, [id]);
  const handleUpdate = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const desc = e.target.desc.value;
    const minOrder = parseInt(e.target.minorder.value);
    const quantity = parseInt(e.target.quantity.value);
    const price = parseInt(e.target.price.value);

    const updateData = {
      name: name,
      desc,
      minOrderQuantity: minOrder,
      orderQuanitity: quantity,
      price,
    };
    console.log(updateData);
    await axiosPrivate({
      method: "PUT",
      url: `http://localhost:5000/services/${id.id}`,
      data: updateData,
    }).then((result) => {
      console.log(result);
      toast("Product has been Updated");
    });
  };
  return (
    <form action="" onSubmit={handleUpdate} className="w-7xl">
      <div className="form-control w-full max-w-full">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          defaultValue={product.name}
          name="name"
          className="input input-bordered w-full max-w-full"
        />
      </div>
      <div className="form-control w-full max-w-full">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <textarea
          type="text"
          name="desc"
          defaultValue={product.desc}
          placeholder="Type here"
          className="input input-bordered w-full max-w-full"
        />
      </div>
      <div className="form-control w-full max-w-full">
        <label className="label">
          <span className="label-text">Minimum Order</span>
        </label>
        <input
          type="text"
          name="minorder"
          defaultValue={product.minOrderQuanity}
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          placeholder="Type here"
          className="input input-bordered w-full max-w-full"
        />
      </div>
      <div className="form-control w-full max-w-full">
        <label className="label">
          <span className="label-text">Quantity</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          defaultValue={product.orderQuanity}
          name="quantity"
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          className="input input-bordered w-full max-w-full"
        />
      </div>
      <div className="form-control w-full max-w-full">
        <label className="label">
          <span className="label-text">Price</span>
        </label>
        <input
          type="text"
          name="price"
          defaultValue={product.price}
          placeholder="Type here"
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          className="input input-bordered w-full max-w-full"
        />
      </div>
      <div className="form-control w-full max-w-full">
        <label className="label">
          <span className="label-text"></span>
        </label>
        <input
          type="submit"
          value="Update"
          className="input input-bordered w-full bg-orange max-w-full"
        />
      </div>
    </form>
  );
};

export default UpdateProducts;
