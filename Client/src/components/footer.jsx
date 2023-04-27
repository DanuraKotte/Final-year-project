import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/images/footer-logo.png";
import fb from "../assets/images/facebook.png";
import twitter from "../assets/images/twitter.png";
import Ig from "../assets/images/instagram.png";
import Linkedin from "../assets/images/linkedin.png";
import { Link } from "react-router-dom";

function footer() {
  return (
    <>
      <footer className="bg-footer">
        <div className="container">
          <div className="d-flex justify-content-center pt-5 pb-4">
            <img src={Logo} />
          </div>
          <div className="row justify-content-center pt-3 pb-5">
            <div className="col-1"></div>
            <div className="col-10">
              <div className="d-flex justify-content-between text-capitalize fs-5 text-light">
                <Link to="/services">Service</Link>
                <Link to="/about">about us</Link>
                <Link>help center</Link>
                <Link to="/terms">terms & conditions</Link>
                <Link to="/policy">privacy policy</Link>
              </div>
            </div>
            <div className="col-1"></div>
          </div>
          <div className="row pt-4">
            <div className="col-2"></div>
            <div className="col-8">
              <div className="d-flex justify-content-center gap-5">
                <img src={fb} />
                <img src={twitter} />
                <img src={Ig} />
                <img src={Linkedin} />
              </div>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
        <div
          className="text-center text-capitalize text-light w-100 mt-5 pt-1 pb-2"
          style={{ backgroundColor: "#222021" }}>
          Copyright © 2023 votely Company UK All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default footer;
