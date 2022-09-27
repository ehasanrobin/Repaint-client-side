import React from "react";
const SocialLogin = () => {
  return (
    <div className="recent-posts-box p-5 rounded-md m-5 shadow-xl">
      <h1 className="text-3xl post-title capitalize font-bold">Social Media</h1>
      <div className="recent-posts mt-5">
        <ul className="social-menu">
          {" "}
          <li>
            <a href="" className="text-xl mb-5">
              <span>
                <i className="fa-brands fa-instagram"></i>
              </span>{" "}
              instagram
            </a>
          </li>
          <li>
            <a href="" className="text-xl mb-5">
              <span>
                <i className="fa-brands fa-facebook"></i>
              </span>{" "}
              facebook
            </a>
          </li>
          <li>
            <a href="" className="text-xl mb-5">
              <span>
                <i className="fa-brands fa-twitter"></i>
              </span>{" "}
              Twitter
            </a>
          </li>
          <li>
            <a href="" className="text-xl mb-5">
              <span>
                <i className="fa-brands fa-youtube"></i>
              </span>{" "}
              Youtube
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialLogin;
