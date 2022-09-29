import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import axiosPrivate from "../../Api/Axios";
import auth from "../../firebase/firebase.init";

const BlogsPost = () => {
  const [user] = useAuthState(auth);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axiosPrivate({
      method: "GET",
      url: `http://localhost:5000/posts`,
    }).then((result) => {
      setBlogs(result.data);
    });
  }, [user, blogs]);
  const handleDelete = (id) => {
    const proceed = window.confirm("are you sure? you want to delte?");
    if (proceed) {
      axiosPrivate({
        method: "DELETE",
        url: `http://localhost:5000/post/${id}`,
      }).then((result) => {
        toast("Item Deleted");
      });
    }
  };
  return (
    <div className="overflow-x-auto">
      <h2 className="text-3xl">all blog posts</h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Serial</th>
            <th>Titel</th>
            <th>img</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog, index) => (
            <tr key={blog._id}>
              <th>{index + 1}</th>
              <td>{blog.title}</td>
              <td>
                <div class="avatar">
                  <div class="w-20 rounded">
                    <img src={blog.img} alt="Tailwind-CSS-Avatar-component" />
                  </div>
                </div>
              </td>
              <td>{blog.date}</td>
              <td>
                <button
                  onClick={() => handleDelete(blog._id)}
                  className="btn btn-accent"
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogsPost;
