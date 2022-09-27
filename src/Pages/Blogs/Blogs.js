import React from "react";
import Footer from "../Shared/Footer";
import PageTitle from "../Shared/PageTitle";
import "./Blogs.css";
import BlogPosts from "./BlogsPage";

const Blogs = () => {
  return (
    <>
      <PageTitle title="Blogs"></PageTitle>
      <BlogPosts></BlogPosts>
      <Footer></Footer>
    </>
  );
};

export default Blogs;
