import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import axiosPrivate from "../../Api/Axios";
import auth from "../../firebase/firebase.init";
import PostCard from "./PostCard";
import RecentPosts from "./RecentPosts";
import SocialLogin from "./SocialLogin";
const BlogPosts = () => {
  const [blogs, setBlogs] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    axiosPrivate({
      method: "GET",
      url: `http://localhost:5000/posts`,
    }).then((result) => {
      setBlogs(result.data);
    });
  }, [user, blogs]);
  return (
    <div className="max-w-7xl mx-auto pt-24">
      <div className="grid lg:grid-cols-6">
        <div className="col-span-4">
          {blogs.map((blog) => (
            <PostCard key={blog._id} blog={blog}></PostCard>
          ))}
        </div>
        <div className="col-span-2">
          <RecentPosts></RecentPosts>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
