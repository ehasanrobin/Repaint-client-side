import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Rating from "react-rating";
import { toast } from "react-toastify";
import axiosPrivate from "../../Api/Axios";
import auth from "../../firebase/firebase.init";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const [rate, setRate] = useState(0);
  // const [rating, setRating] = useState(0);
  const handleReview = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const reviewmsg = e.target.review.value;
    const rating = rate;

    const review = {
      name,
      message: reviewmsg,
      rating: rating,
    };
    axiosPrivate({
      method: "POST",
      url: `https://repain-server-side.herokuapp.com/reviews`,
      data: review,
    }).then(async (res) => {
      toast("Your Review has been submitted");
    });
    console.log(review);
  };

  return (
    <div className="w-full">
      <form action="" onSubmit={handleReview} className="w-7xl">
        <h1 className="text-3xl my-2">Add Review</h1>
        <div className="form-control w-full max-w-full">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            name="name"
            disabled
            value={user.displayName}
            className="input input-bordered w-full max-w-full"
          />
        </div>
        <div className="form-control">
          <Rating
            name="rating"
            emptySymbol="fa-regular fa-star"
            fullSymbol="fa-solid fa-star"
            className="text-orange text-2xl"
            onClick={(value) => {
              setRate(value);
            }}
          />
        </div>
        <div className="form-control w-full max-w-full">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea
            className=" textarea input input-bordered h-24 w-full max-w-full"
            name="review"
            placeholder="Review"
          ></textarea>
        </div>

        <div className="form-control w-full max-w-full">
          <label className="label">
            <span className="label-text"></span>
          </label>
          <input
            type="submit"
            value="Send"
            className="input input-bordered w-full bg-orange max-w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default AddReview;
