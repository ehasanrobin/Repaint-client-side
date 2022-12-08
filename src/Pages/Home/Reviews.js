import React, { useState } from "react";

import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import whychoose from "../../images/whychoose-us4.png";

import Rating from "react-rating";
import { Swiper, SwiperSlide } from "swiper/react";
import axiosPrivate from "../../Api/Axios";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  axiosPrivate({
    method: "GET",
    url: `https://repaint-server-side1.vercel.app/reviews`,
  }).then((res) => {
    setReviews(res.data);
  });
  // const reviews = [
  //   {
  //     name: "cusotmer",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, consectetur?",
  //     rating: 4.5,
  //   },
  //   {
  //     name: "cusotmer",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, consectetur?",
  //     rating: 4.5,
  //   },
  //   {
  //     name: "cusotmer",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, consectetur?",
  //     rating: 4.5,
  //   },
  //   {
  //     name: "cusotmer",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, consectetur?",
  //     rating: 4.5,
  //   },
  // ];
  return (
    <div className="hero  py-28">
      <div className="hero-content  flex-col lg:flex-row ">
        <div className="banner-img flex-1 flex justify-center items-center ">
          <img src={whychoose} alt="img" className="w-3/4 rounded-full " />
        </div>
        <div className="flex-1 p-5">
          <sub className="capitalizee tracking-widest font-medium text-orange text-2xl  my-3">
            review
          </sub>
          <h1 className="text-5xl font-bold my-3 leading-tight">
            The most Recent reviews of us
          </h1>
          <div className="review-slider">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 30,
                stretch: 30,
                depth: 10,
                modifier: 2,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="card max-w-sm  border-white	border-2 shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title">{review.name}</h2>
                      <Rating
                        initialRating={review.rating}
                        readonly
                        emptySymbol="fa-regular fa-star"
                        fullSymbol="fa-solid fa-star"
                        className="text-orange text-2xl"
                      />
                      <p>{review.message}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <button className="btn bg-orange border-orange mt-5">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
