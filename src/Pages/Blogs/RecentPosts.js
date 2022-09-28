import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import axiosPrivate from "../../Api/Axios";
import auth from "../../firebase/firebase.init";
const RecentPosts = () => {
  const [blogs, setBlogs] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    axiosPrivate({
      method: "GET",
      url: `https://repain-server-side.herokuapp.com/recentPosts`,
    }).then((result) => {
      setBlogs(result.data);
    });
  }, [user, blogs]);
  return (
    <div className="recent-posts-box p-5 rounded-md m-5 shadow-xl">
      <h1 className="text-3xl post-title capitalize font-bold">recent post</h1>
      <div className="recent-posts ">
        {blogs.map((blog) => (
          <div className="card card-side ">
            <figure>
              <img src={blog.img} className="rounded-full w-24" alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-orange">{blog.title}</h2>
              <Link>
                <span>
                  <i className="fa-solid fa-calendar-days"></i>
                </span>{" "}
                {blog.date}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
