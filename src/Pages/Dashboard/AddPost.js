import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosPrivate from "../../Api/Axios";
const AddPost = () => {
  const { register, handleSubmit } = useForm();
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const newDate = new Date();
    const months = {
      0: "January",
      1: "February",
      2: "March",
      3: "April",
      4: "May",
      5: "June",
      6: "July",
      7: "August",
      8: "September",
      9: "October",
      10: "November",
      11: "December",
    };
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const d = newDate;
    const year = d.getFullYear();
    const date = d.getDate();
    const monthIndex = d.getMonth();
    const monthName = months[d.getMonth()];
    const dayName = days[d.getDay()]; // Thu
    const formatted = `${date} ${monthName} ${year}`;
    setDate(formatted.toString());
  }, []);

  const onSubmit = (data) => {
    console.log(date);
    const formData = new FormData();
    const imagedata = data.img[0];
    const key = "a3bb2ebae7abfe87c1b15dc40dca577a";
    formData.append("image", imagedata);
    const url = `https://api.imgbb.com/1/upload?key=${key}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(async (result) => {
        const imgUrl = result.data.display_url;
        const postData = {
          title: data.title,
          desc: data.desc,
          img: imgUrl,
          date,
        };
        await axiosPrivate({
          method: "POST",
          url: `https://repaint-server-side1.vercel.app/post`,
          data: postData,
        }).then((result) => {
          toast("your post has been uplished");
          navigate("/dashboard/blogs");
          result.reset();
        });
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-7xl">
        <h2 className="text-3xl">Add Post</h2>
        <div className="form-control w-full max-w-full">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            {...register("title")}
            className="input input-bordered w-full max-w-full"
          />
        </div>
        <div className="form-control w-full max-w-full">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <textarea
            {...register("desc")}
            className="input input-bordered w-full max-w-full h-24"
          />
        </div>
        <div className="form-control w-full max-w-full">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            {...register("img")}
            type="file"
            className="input input-bordered w-full max-w-full"
          />
        </div>
        <div className="form-control w-full max-w-full">
          <label className="label">
            <span className="label-text"></span>
          </label>
          <input
            type="submit"
            value="Post"
            className="input input-bordered w-full bg-orange max-w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default AddPost;
