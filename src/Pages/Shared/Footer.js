import React from "react";
import logo from "../../images/logo.png";
const Footer = () => {
  return (
    <div className="bg-cream mt-12 py-28">
      <footer className="footer  max-w-7xl mx-auto  text-base-content">
        <div>
          <img src={logo} className="max-w-48 logo" alt="" />
          <p>Lorem ipsum</p>
        </div>
        <div>
          <span className="footer-title text-orange">Services</span>
          <ul>
            <li>
              <a className="link link-hover text-lg">
                <span>
                  <i className="fa-solid fa-arrow-right text-orange"></i>
                </span>{" "}
                Branding
              </a>
            </li>
            <li>
              <a className="link link-hover text-lg">
                <span>
                  <i className="fa-solid fa-arrow-right text-orange"></i>
                </span>{" "}
                Design
              </a>
            </li>
            <li>
              <a className="link link-hover text-lg">
                <span>
                  <i className="fa-solid fa-arrow-right text-orange"></i>
                </span>{" "}
                Marketing
              </a>
            </li>
            <li>
              <a className="link link-hover text-lg">
                <span>
                  <i className="fa-solid fa-arrow-right text-orange"></i>
                </span>{" "}
                Advertisement
              </a>
            </li>
          </ul>
        </div>
        <div>
          <span className="footer-title text-orange">Company</span>
          <ul>
            <li>
              <a className="link link-hover text-lg">
                <span>
                  <i className="fa-solid fa-arrow-right text-orange px-1"></i>
                </span>{" "}
                About us
              </a>
            </li>
            <li>
              <a className="link link-hover text-lg">
                <span>
                  <i className="fa-solid fa-arrow-right text-orange px-1"></i>
                </span>{" "}
                Contact
              </a>
            </li>
            <li>
              <a className="link link-hover text-lg">
                <span>
                  <i className="fa-solid fa-arrow-right text-orange px-1"></i>
                </span>{" "}
                Jobs
              </a>
            </li>
            <li>
              <a className="link link-hover text-lg">
                <span>
                  <i className="fa-solid fa-arrow-right text-orange px-1"></i>
                </span>{" "}
                Press kit
              </a>
            </li>
          </ul>
        </div>
        <div>
          <span className="footer-title text-orange">Legal</span>
          <ul>
            <li>
              <a className="link link-hover text-lg">
                {" "}
                <span>
                  <i className="fa-solid fa-arrow-right text-orange px-1"></i>
                </span>{" "}
                Terms of use
              </a>
            </li>
            <li>
              <a className="link link-hover text-lg">
                {" "}
                <span>
                  <i className="fa-solid fa-arrow-right text-orange px-1"></i>
                </span>{" "}
                Privacy policy
              </a>
            </li>
            <li>
              <a className="link link-hover text-lg">
                {" "}
                <span>
                  <i className="fa-solid fa-arrow-right text-orange px-1"></i>
                </span>{" "}
                Cookie policy
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
